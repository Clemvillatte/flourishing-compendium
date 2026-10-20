# Integrating FCPlayer into the Flourishing Compendium wiki

**APPLIED (2026-10).** The steps below were executed as described, with two
deviations from the original draft, both user-visible improvements:

- The mount is the 16-set configuration (set menu + 4 s crossfade), mirroring
  the demo — not the single-set example. All 16 audio sets were copied, not
  just the legacy `segments/` set.
- The wiki's phone layout has a fixed bottom tab bar; the wiring sets the
  player's `--fcp-fab-offset` CSS variable (added for this integration) so
  the floating button and panel clear it.

The spec (sections 12–14) locks the integration: the Endel order of
the-dark-night (digest manifest), byte-identical asset copies, the wiring
markers in `site/index.html`, and the `--fcp-fab-offset` behaviour.
`tests/wiki-qa.mjs` exercises the real wiki page (both themes, desktop and
375 px, zero console errors).

## The applied wiring

All paths relative to the repository root. The wiki deploys from `site/`
via GitHub Pages (`deploy.yml`), so `site/` is the domain root — the wiki's
assets are root-relative (`/assets/...`), and local QA must serve `site/`
itself, not the repo root.

1. Component (kept in sync — spec section 13 fails on drift):

   ```
   soundscape-player/assets/player/fc-player.js  →  site/assets/player/fc-player.js
   soundscape-player/assets/player/fc-player.css →  site/assets/player/fc-player.css
   ```

2. Audio sets (16 slugs, `segment_%04d.aac`, byte-identical copies):

   ```
   soundscape-player/assets/audio/<slug>/  →  site/assets/audio/<slug>/
   ```

3. `site/index.html` — in `<head>` (after the wiki's own stylesheet):

   ```html
   <link rel="stylesheet" href="assets/player/fc-player.css">
   ```

   Before `</body>`:

   ```html
   <script src="assets/player/fc-player.js" defer></script>
   <script>
   window.addEventListener('DOMContentLoaded', function () {
     if (!window.FCPlayer) return;
     /* lift the FAB/panel clear of the phone layout's fixed bottom tab bar */
     var mq = window.matchMedia('(max-width: 920px)');
     var fabOffset = function () {
       document.documentElement.style.setProperty('--fcp-fab-offset',
         mq.matches ? 'calc(64px + env(safe-area-inset-bottom) + 12px)' : '0px');
     };
     fabOffset();
     if (mq.addEventListener) mq.addEventListener('change', fabOffset);
     var SETS = [/* 16 [slug, title, count] entries — see the page */];
     window.__fcInst = FCPlayer.mount({
       setCrossfade: 4,
       sets: SETS.map(function (s) {
         return {
           id: s[0], title: s[1], subtitle: s[2] + ' tracks · ' + s[2] + ' min',
           source: { dir: 'assets/audio/' + s[0] + '/', pattern: 'segment_%04d.aac', count: s[2] }
         };
       })
     });
   });
   </script>
   ```

## QA (run before pushing any change to the wiring)

- `soundscape-player` suite: `npx serve . -l 8791 --no-clipboard` + `node tests/spec.mjs`
  (99 checks — includes the integration lock sections 12–14).
- Wiki page: build the data (`python3 scripts/build.py --src . --version test`
  from the repo root — `site/data/` is a deploy artifact), serve `site/` as
  the domain root, then `node tests/wiki-qa.mjs <url>` from `soundscape-player/`.
  Zero console/page errors, both themes, 1280 and 375 px.

## Notes

- The component is fully self-contained; the wiki's existing scripts and
  styles are untouched apart from the added wiring block.
- To change the sets later, update both copies (or re-run the copy) — spec
  section 13 fails the suite if `site/` drifts from the component assets.
- The wiki deploys via GitHub Pages on push to main; `site/` is uploaded as
  the artifact root, so the added audio ships automatically (~246 MB —
  well within the Pages 1 GB site limit).
