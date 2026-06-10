/* ============ Rome Vintage Loop — app logic ============ */
(function () {
  "use strict";

  const TILE_URL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
  const TILE_HOST = "tile.openstreetmap.org";
  const STORE_VISITED = "rvl-visited-v1";
  const STORE_HINT = "rvl-hint-dismissed";
  const STORE_TILES = "rvl-tiles-saved";

  /* ---------- state ---------- */
  let visited = {};
  try { visited = JSON.parse(localStorage.getItem(STORE_VISITED) || "{}"); } catch (e) { visited = {}; }

  const stops = WALK.stops;
  let currentStop = null;
  let map, meMarker, meCircle, watchId = null;
  const markers = {};

  /* ---------- helpers ---------- */
  const $ = (sel) => document.querySelector(sel);

  function haversine(a, b) {
    const R = 6371000, rad = Math.PI / 180;
    const dLat = (b[0] - a[0]) * rad, dLon = (b[1] - a[1]) * rad;
    const la1 = a[0] * rad, la2 = b[0] * rad;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(la1) * Math.cos(la2) * Math.sin(dLon / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  }

  function pathLength(pts) {
    let d = 0;
    for (let i = 1; i < pts.length; i++) d += haversine(pts[i - 1], pts[i]);
    return d;
  }

  function fmtDist(m) {
    return m < 950 ? Math.round(m / 10) * 10 + " m" : (m / 1000).toFixed(1) + " km";
  }

  function fullRoute() {
    const pts = [];
    stops.forEach((s) => {
      const leg = s.routeTo && s.routeTo.length ? s.routeTo : [s.coords];
      leg.forEach((p) => pts.push(p));
      pts.push(s.coords);
    });
    RETURN_LEG.forEach((p) => pts.push(p));
    return pts;
  }
  const ROUTE = fullRoute();
  const TOTAL_KM = (pathLength(ROUTE) / 1000).toFixed(1);

  function saveVisited() {
    localStorage.setItem(STORE_VISITED, JSON.stringify(visited));
    updateProgress();
    renderStopsList();
    if (map) refreshMarkerStyles();
    if (currentStop) syncSheetVisitedBtn();
  }

  function visitedCount() {
    return stops.filter((s) => visited[s.id]).length;
  }

  function updateProgress() {
    const n = visitedCount();
    $("#progress-label").textContent = n + " / " + stops.length;
    $("#progress-bar").style.width = (100 * n / stops.length) + "%";
  }

  /* ---------- tabs ---------- */
  document.querySelectorAll(".tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((b) => b.classList.toggle("active", b === btn));
      const v = btn.dataset.view;
      document.querySelectorAll(".view").forEach((sec) => {
        sec.classList.toggle("active", sec.id === "view-" + v);
      });
      if (v === "map" && map) setTimeout(() => map.invalidateSize(), 60);
    });
  });

  /* ---------- map ---------- */
  function initMap() {
    map = L.map("map", { zoomControl: false, attributionControl: true });
    L.tileLayer(TILE_URL, {
      maxZoom: 19,
      attribution: "© OpenStreetMap contributors"
    }).addTo(map);

    L.polyline(ROUTE, {
      color: "#8e2f48", weight: 4, opacity: 0.75, dashArray: "2 7", lineCap: "round"
    }).addTo(map);

    stops.forEach((s) => {
      const m = L.marker(s.coords, { icon: pinIcon(s), zIndexOffset: 100 + s.n });
      m.on("click", () => openSheet(s.id));
      m.addTo(map);
      markers[s.id] = m;
    });

    map.fitBounds(L.latLngBounds(ROUTE).pad(0.08));
  }

  function pinIcon(s) {
    const color = KIND_META[s.kind].color;
    const cls = "stop-pin" + (visited[s.id] ? " visited" : "");
    return L.divIcon({
      className: "",
      html: '<div class="' + cls + '" style="background:' + color + '">' + s.n + "</div>",
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });
  }

  function refreshMarkerStyles() {
    stops.forEach((s) => markers[s.id] && markers[s.id].setIcon(pinIcon(s)));
  }

  $("#btn-fit").addEventListener("click", () => {
    map.fitBounds(L.latLngBounds(ROUTE).pad(0.08));
  });

  /* ---------- locate ---------- */
  $("#btn-locate").addEventListener("click", () => {
    if (watchId !== null) { stopLocate(); return; }
    if (!navigator.geolocation) { alert("Location not available on this device/browser."); return; }
    $("#btn-locate").classList.add("on");
    watchId = navigator.geolocation.watchPosition(onPos, onPosErr, {
      enableHighAccuracy: true, maximumAge: 5000, timeout: 15000
    });
  });

  function onPos(pos) {
    const ll = [pos.coords.latitude, pos.coords.longitude];
    if (!meMarker) {
      meMarker = L.marker(ll, {
        icon: L.divIcon({ className: "", html: '<div class="me-dot"></div>', iconSize: [16, 16], iconAnchor: [8, 8] }),
        zIndexOffset: 1000
      }).addTo(map);
      meCircle = L.circle(ll, { radius: pos.coords.accuracy || 20, color: "#1d7df0", weight: 1, fillOpacity: 0.12 }).addTo(map);
      map.setView(ll, Math.max(map.getZoom(), 16));
    } else {
      meMarker.setLatLng(ll);
      meCircle.setLatLng(ll).setRadius(pos.coords.accuracy || 20);
    }
  }

  function onPosErr(err) {
    stopLocate();
    alert("Could not get your location (" + err.message + "). Check Location permissions for your browser in iOS Settings.");
  }

  function stopLocate() {
    if (watchId !== null) navigator.geolocation.clearWatch(watchId);
    watchId = null;
    $("#btn-locate").classList.remove("on");
    if (meMarker) { map.removeLayer(meMarker); map.removeLayer(meCircle); meMarker = meCircle = null; }
  }

  /* ---------- offline tile download ---------- */
  function lon2tile(lon, z) { return Math.floor((lon + 180) / 360 * Math.pow(2, z)); }
  function lat2tile(lat, z) {
    return Math.floor((1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, z));
  }

  function densifiedRoute(stepMeters) {
    const pts = [];
    for (let i = 1; i < ROUTE.length; i++) {
      const a = ROUTE[i - 1], b = ROUTE[i];
      const d = haversine(a, b);
      const n = Math.max(1, Math.ceil(d / stepMeters));
      for (let k = 0; k < n; k++) {
        pts.push([a[0] + (b[0] - a[0]) * k / n, a[1] + (b[1] - a[1]) * k / n]);
      }
    }
    pts.push(ROUTE[ROUTE.length - 1]);
    return pts;
  }

  function tileList() {
    const set = new Set();
    const dense = densifiedRoute(35);
    // overview zooms: whole-route bounding box
    const lats = ROUTE.map((p) => p[0]), lons = ROUTE.map((p) => p[1]);
    const pad = 0.012;
    const minLat = Math.min(...lats) - pad, maxLat = Math.max(...lats) + pad;
    const minLon = Math.min(...lons) - pad, maxLon = Math.max(...lons) + pad;
    for (let z = 11; z <= 15; z++) {
      const x0 = lon2tile(minLon, z), x1 = lon2tile(maxLon, z);
      const y0 = lat2tile(maxLat, z), y1 = lat2tile(minLat, z);
      for (let x = x0; x <= x1; x++) for (let y = y0; y <= y1; y++) set.add(z + "/" + x + "/" + y);
    }
    // detail zooms: corridor along the route (1-tile dilation)
    for (let z = 16; z <= 17; z++) {
      dense.forEach((p) => {
        const x = lon2tile(p[1], z), y = lat2tile(p[0], z);
        for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) {
          set.add(z + "/" + (x + dx) + "/" + (y + dy));
        }
      });
    }
    return Array.from(set);
  }

  async function downloadTiles() {
    const btn = $("#btn-download"), status = $("#download-status");
    if (!("serviceWorker" in navigator) || !navigator.serviceWorker.controller) {
      status.textContent = "Offline saving needs the app served over HTTPS (or added to Home Screen). Try reloading once.";
      return;
    }
    const tiles = tileList();
    btn.disabled = true;
    let done = 0, failed = 0;
    status.textContent = "Saving 0 / " + tiles.length + " map tiles…";

    const queue = tiles.slice();
    const workers = Array.from({ length: 6 }, async () => {
      while (queue.length) {
        const t = queue.shift();
        const url = "https://" + TILE_HOST + "/" + t + ".png";
        try {
          await fetch(url, { mode: "no-cors", cache: "no-store" });
        } catch (e) { failed++; }
        done++;
        if (done % 10 === 0 || done === tiles.length) {
          status.textContent = "Saving " + done + " / " + tiles.length + " map tiles…";
        }
      }
    });
    await Promise.all(workers);
    btn.disabled = false;

    if (failed > tiles.length * 0.3) {
      status.textContent = "Some tiles failed (" + failed + "). Check connection and tap again — already-saved tiles are kept.";
    } else {
      localStorage.setItem(STORE_TILES, new Date().toISOString());
      status.textContent = "✓ Maps saved for offline use (" + (tiles.length - failed) + " tiles). You're set for Rome.";
      btn.textContent = "✓ Maps saved — tap to refresh";
    }
  }

  $("#btn-download").addEventListener("click", downloadTiles);
  if (localStorage.getItem(STORE_TILES)) {
    $("#btn-download").textContent = "✓ Maps saved — tap to refresh";
  }

  /* ---------- stops list ---------- */
  function renderStopsList() {
    const ol = $("#stops-list");
    ol.innerHTML = "";
    stops.forEach((s) => {
      const li = document.createElement("li");
      li.className = "stop-card" + (visited[s.id] ? " visited" : "");

      const legM = s.routeTo && s.routeTo.length > 1 ? pathLength(s.routeTo.concat([s.coords])) : 0;
      const legHtml = s.n === 1
        ? '<p class="leg">Start of the loop</p>'
        : '<p class="leg">' + fmtDist(legM) + " from previous stop</p>";

      li.innerHTML =
        '<div class="stop-badge" style="background:' + KIND_META[s.kind].color + '">' + s.n + "</div>" +
        '<div class="stop-card-body">' +
          legHtml +
          '<span class="kind-chip" style="background:' + KIND_META[s.kind].color + '">' + KIND_META[s.kind].label + "</span>" +
          "<h3>" + s.emoji + " " + s.name + "</h3>" +
          "<p>" + s.blurb + "</p>" +
        "</div>" +
        '<button class="stop-check' + (visited[s.id] ? " on" : "") + '" aria-label="Mark visited">✓</button>';

      li.addEventListener("click", (e) => {
        if (e.target.classList.contains("stop-check")) {
          visited[s.id] = !visited[s.id];
          if (!visited[s.id]) delete visited[s.id];
          saveVisited();
        } else {
          openSheet(s.id);
        }
      });
      ol.appendChild(li);
    });
  }

  /* ---------- guide ---------- */
  function renderGuide() {
    $("#guide-title").textContent = WALK.title;
    $("#guide-subtitle").textContent = WALK.subtitle;
    $("#guide-stats").textContent =
      "≈ " + TOTAL_KM + " km · " + stops.length + " stops · " + WALK.approxHours + " · starts: " + WALK.start;
    $("#walk-meta").textContent =
      "≈ " + TOTAL_KM + " km total · tap a card for the full story · tick stops as you go";
    const wrap = $("#guide-sections");
    WALK.guide.forEach((sec) => {
      const div = document.createElement("div");
      div.className = "guide-section";
      div.innerHTML = "<h3>" + sec.h + "</h3>" + sec.p.map((p) => "<p>" + p + "</p>").join("");
      wrap.appendChild(div);
    });
  }

  $("#btn-reset").addEventListener("click", () => {
    if (confirm("Clear all visited check-marks?")) {
      visited = {};
      saveVisited();
    }
  });

  /* ---------- bottom sheet ---------- */
  function openSheet(id) {
    const s = stops.find((x) => x.id === id);
    if (!s) return;
    currentStop = s;
    $("#sheet-badge").textContent = s.n;
    $("#sheet-badge").style.background = KIND_META[s.kind].color;
    $("#sheet-kind").textContent = KIND_META[s.kind].label;
    $("#sheet-kind").style.background = KIND_META[s.kind].color;
    $("#sheet-name").textContent = s.emoji + " " + s.name;
    $("#sheet-addr").textContent = s.addr;
    $("#sheet-hours").textContent = s.hours;
    $("#sheet-maplink").href = "https://maps.apple.com/?daddr=" +
      s.coords[0] + "," + s.coords[1] + "&dirflg=w&q=" + encodeURIComponent(s.name);
    $("#sheet-story").innerHTML = s.story.map((p) => "<p>" + p + "</p>").join("");
    $("#sheet-tip").textContent = s.tip;
    const dBox = $("#sheet-detourbox");
    if (s.detour) { dBox.hidden = false; $("#sheet-detour").textContent = s.detour; }
    else { dBox.hidden = true; }
    syncSheetVisitedBtn();
    $("#sheet-prev").disabled = s.n === 1;
    $("#sheet-next").disabled = s.n === stops.length;
    $("#sheet").hidden = false;
    $("#sheet-backdrop").hidden = false;
    $(".sheet-scroll").scrollTop = 0;
  }

  function syncSheetVisitedBtn() {
    const btn = $("#sheet-visited");
    const on = currentStop && visited[currentStop.id];
    btn.textContent = on ? "✓ Visited!" : "✓ Mark as visited";
    btn.classList.toggle("done", !!on);
  }

  function closeSheet() {
    $("#sheet").hidden = true;
    $("#sheet-backdrop").hidden = true;
    currentStop = null;
  }

  $("#sheet-close").addEventListener("click", closeSheet);
  $("#sheet-backdrop").addEventListener("click", closeSheet);

  $("#sheet-visited").addEventListener("click", () => {
    if (!currentStop) return;
    if (visited[currentStop.id]) delete visited[currentStop.id];
    else visited[currentStop.id] = true;
    saveVisited();
  });

  $("#sheet-showmap").addEventListener("click", () => {
    if (!currentStop) return;
    const s = currentStop;
    closeSheet();
    document.querySelector('.tab[data-view="map"]').click();
    map.setView(s.coords, 17, { animate: true });
  });

  $("#sheet-prev").addEventListener("click", () => {
    if (currentStop && currentStop.n > 1) openSheet(stops[currentStop.n - 2].id);
  });
  $("#sheet-next").addEventListener("click", () => {
    if (currentStop && currentStop.n < stops.length) openSheet(stops[currentStop.n].id);
  });

  /* swipe down on handle to close */
  let touchY = null;
  $("#sheet").addEventListener("touchstart", (e) => {
    if ($(".sheet-scroll").scrollTop <= 0) touchY = e.touches[0].clientY;
  }, { passive: true });
  $("#sheet").addEventListener("touchmove", (e) => {
    if (touchY !== null && e.touches[0].clientY - touchY > 80) { closeSheet(); touchY = null; }
  }, { passive: true });
  $("#sheet").addEventListener("touchend", () => { touchY = null; });

  /* ---------- online/offline badge ---------- */
  function syncNet() { $("#net-badge").hidden = navigator.onLine; }
  window.addEventListener("online", syncNet);
  window.addEventListener("offline", syncNet);

  /* ---------- iOS install hint ---------- */
  function maybeShowInstallHint() {
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const standalone = window.navigator.standalone === true ||
      window.matchMedia("(display-mode: standalone)").matches;
    if (isIOS && !standalone && !localStorage.getItem(STORE_HINT)) {
      $("#install-hint").hidden = false;
    }
  }
  $("#install-dismiss").addEventListener("click", () => {
    localStorage.setItem(STORE_HINT, "1");
    $("#install-hint").hidden = true;
  });

  /* ---------- service worker ---------- */
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch((e) => {
        console.warn("SW registration failed:", e);
      });
    });
  }

  /* ---------- boot ---------- */
  initMap();
  renderStopsList();
  renderGuide();
  updateProgress();
  syncNet();
  maybeShowInstallHint();
})();
