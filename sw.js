/* Rome Vintage Loop — service worker
   Shell: precached at install (app works fully offline).
   Map tiles: cache-first with network fill (tile.openstreetmap.org). */

const VERSION = "v1.0.0";
const SHELL_CACHE = "rvl-shell-" + VERSION;
const TILE_CACHE = "rvl-tiles-v1"; // survives app updates
const TILE_HOST = "tile.openstreetmap.org";

const SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./css/styles.css",
  "./js/app.js",
  "./js/data.js",
  "./vendor/leaflet/leaflet.js",
  "./vendor/leaflet/leaflet.css",
  "./vendor/leaflet/images/marker-icon.png",
  "./vendor/leaflet/images/marker-icon-2x.png",
  "./vendor/leaflet/images/marker-shadow.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];

/* 1x1 warm-grey png shown for tiles never cached (offline) */
const FALLBACK_TILE_B64 =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcvWlrPQAGOQKQ3yYBJAAAAABJRU5ErkJggg==";

function fallbackTile() {
  const bin = atob(FALLBACK_TILE_B64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new Response(bytes.buffer, { headers: { "Content-Type": "image/png" } });
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      .then((cache) => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k.startsWith("rvl-shell-") && k !== SHELL_CACHE)
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  /* map tiles: cache-first, fill cache from network */
  if (url.hostname === TILE_HOST) {
    event.respondWith(
      caches.open(TILE_CACHE).then((cache) =>
        cache.match(event.request).then((hit) => {
          if (hit) return hit;
          return fetch(event.request)
            .then((resp) => {
              if (resp && (resp.ok || resp.type === "opaque")) {
                cache.put(event.request, resp.clone());
              }
              return resp;
            })
            .catch(() => fallbackTile());
        })
      )
    );
    return;
  }

  /* app shell & same-origin: cache-first, then network, navigation falls back to index */
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request, { ignoreSearch: true }).then((hit) => {
        if (hit) return hit;
        return fetch(event.request)
          .then((resp) => {
            if (resp.ok) {
              const copy = resp.clone();
              caches.open(SHELL_CACHE).then((c) => c.put(event.request, copy));
            }
            return resp;
          })
          .catch(() => {
            if (event.request.mode === "navigate") return caches.match("./index.html");
            return Response.error();
          });
      })
    );
  }
});
