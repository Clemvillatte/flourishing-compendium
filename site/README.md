# The Flourishing Compendium

Redesigned edition: modern editorial interface, split data architecture (~18 MB single file becomes ~4 MB transfer).

## Structure
- `index.html` — app shell (33 KB)
- `assets/style.css` — design system + embedded fonts (Fraunces, Source Serif 4)
- `assets/app.js` — application logic (data payloads removed)
- `assets/extras.js` — research drawer, connections panel, editor helpers
- `assets/boot.js` — loader: fetches + decompresses the gzipped datasets, then starts the app
- `data/*.json.gz` — the three datasets (wikiData, randData, fcAuthored), gzip-compressed
- `favicon.svg` — new favicon (woodblock-print inspired)

## Deploy on Vercel
1. Drag this folder onto https://vercel.com/new (or push to GitHub and import it, or run `vercel deploy --prod` from this folder).
2. No build settings needed — it is a fully static site. `vercel.json` sets the cache headers.

## Notes
- Notes and content edits live in the browser's localStorage, per domain. If you change domains, use Backup (top bar) on the old site and restore on the new one.
- The app needs to be served over HTTP (e.g. Vercel); opening index.html directly from disk will not load the data files.
- First load transfers about 4 MB (compressed); afterwards it is cached by the browser.
