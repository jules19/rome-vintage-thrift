# Rome Vintage Loop 🧥⛲️

A self-guided **vintage fashion walk through Rome**, packaged as a Progressive Web App that
works **fully offline on an iPhone**.

One ~12.5 km loop · 23 stops · Monti → the Imperial Fora → Centro Storico →
the Jewish Ghetto → Trastevere → Porta Portese → back past the Pantheon and
the Trevi Fountain. Plus **4 off-loop "hidden gem" pins** — Borghetto Flaminio,
Via Sannio market, San Lorenzo and Pigneto — the locals-only secondhand spots
beyond the tourist circuit.

Every stop has the full story (why the shop matters, the history under your feet),
an insider tip, opening hours, and a pin on the map. Progress is ticked off as you
walk and saved on the phone.

## Features

- 🗺 **Interactive map** (Leaflet + OpenStreetMap) with numbered, colour-coded pins
  and the suggested walking route
- 📴 **Works offline**: the app shell is precached, and a one-tap
  **“Save maps offline”** button downloads every map tile along the route
  (~5–10 MB) before you leave the hotel wi-fi
- 📍 **Live GPS position** on the map (works offline — GPS needs no data)
- ✅ **Visited check-list** with progress bar, stored in `localStorage`
- 📖 **Guide tab**: November-in-Rome planning, Sunday/Saturday strategy,
  vintage-shopping ground rules, size conversions, where to eat
- 📱 **iPhone-first**: Add to Home Screen → runs full-screen like a native app

## Getting it on your iPhone

1. **Host it over HTTPS** — done via GitHub Pages:
   - The site is served from the `gh-pages` branch, and the included workflow
     (`.github/workflows/pages.yml`) mirrors `main` into `gh-pages` on every push.
   - The app lives at `https://<user>.github.io/rome-vintage-thrift/`.
2. Open that URL in **Safari** on the iPhone.
3. Tap **Share → Add to Home Screen**.
4. Open the app from the Home Screen, go to the **Map** tab and tap
   **“Save maps offline”** while on wi-fi.
5. Done — airplane mode in the middle of Trastevere is now no problem.

> Service workers (the offline machinery) require HTTPS or `localhost` —
> opening `index.html` from the filesystem won't cache offline.

## Local development

No build step, no dependencies to install (Leaflet 1.9.4 is vendored in `vendor/`):

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Icons are generated, dependency-free, by `python3 scripts/make_icons.py`.

## Project layout

```
index.html            app shell (3 tabs + stop detail sheet)
css/styles.css        styling
js/data.js            ★ the walk itself — 23 stops, stories, tips, route geometry
js/app.js             map, list, sheet, geolocation, offline tile downloader
sw.js                 service worker: shell precache + tile cache
manifest.webmanifest  PWA manifest
vendor/leaflet/       Leaflet 1.9.4 (vendored, no CDN needed)
scripts/make_icons.py icon generator (pure stdlib)
```

## Practical notes for the walk

- **Sunday** is Porta Portese flea-market day (06:00–14:00) — the guide tab
  explains how to flip the loop to start there.
- **Mercato Monti** (stop 7) runs weekends September–June.
- Shop pins are placed from street addresses; treat the pin as “this block”,
  and the address in the card as the truth. Vintage shops do move and close —
  a quick check of opening hours for your favourites the week of the trip is wise.
- Map data © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors.
