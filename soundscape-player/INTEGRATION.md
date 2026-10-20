# Integrating FCPlayer into the Flourishing Compendium wiki

This has **not been applied yet** — the wiki's `site/` directory is
untouched. Apply only when explicitly requested.

The player project lives in this repository under `soundscape-player/`
(its own directory; the wiki site never imports anything from it until
the steps below are applied).

## Steps

All paths are relative to the repository root
(`Clemvillatte/flourishing-compendium`).

1. Copy the component into the wiki's `site/assets/`:

   ```
   soundscape-player/assets/player/fc-player.js  →  site/assets/player/fc-player.js
   soundscape-player/assets/player/fc-player.css →  site/assets/player/fc-player.css
   ```

2. Copy the audio set:

   ```
   soundscape-player/assets/audio/segments/  →  site/assets/audio/segments/
   ```

3. Edit `site/index.html` — in `<head>`:

   ```html
   <link rel="stylesheet" href="assets/player/fc-player.css">
   ```

   Before `</body>`:

   ```html
   <script src="assets/player/fc-player.js" defer></script>
   <script>
     window.addEventListener('DOMContentLoaded', function () {
       if (window.FCPlayer) {
         FCPlayer.mount({
           title: 'Focus Soundscape',
           subtitle: '16 min · study set',
           source: { dir: 'assets/audio/segments/', pattern: 'segment_%04d.aac', count: 16 }
         });
       }
     });
   </script>
   ```

4. Commit and push to `main`. The wiki deploys automatically (GitHub
   Pages / Vercel per the repo's existing setup). The floating button
   appears bottom-right on every view; it follows the wiki's light/dark
   theme automatically.

## Notes

- The component is fully self-contained; the wiki's existing scripts and
  styles are untouched apart from the two added tags.
- To change the set later, replace the files in
  `site/assets/audio/segments/` and update `count` (or regenerate with
  `soundscape-player/scripts/prepare-tracks.sh`).
- QA before pushing: serve the wiki locally, confirm zero console
  errors, the floating button opens the panel, and playback controls work
  in both themes at desktop and mobile widths.
