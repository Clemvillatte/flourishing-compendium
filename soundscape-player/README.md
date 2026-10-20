# FCPlayer — Adaptive Soundscape Player

A self-contained, dependency-free soundscape player for study sessions,
built for [The Flourishing Compendium](https://clemvillatte.github.io/flourishing-compendium/).
It plays an ordered set of audio segments gaplessly and stays out of your
way: a floating button opens a small panel with everything you need.

## Features

- **Select** any track from the list; **random** jump
- **Play / Pause / Resume / Stop** — pause preserves the exact position
- **Session timer** (15/25/45 min) with a gentle fade-out
- **Volume** and OS media-key support (MediaSession)
- **Adapt to time of day** — optional circadian filter: brighter and louder
  mid-day, warmer and dimmer late at night
- Gapless ordered playback with a designed loop transition; resilient to
  slow loading (rebases cleanly, never overlaps)
- Graceful `<audio>` fallback if the browser can't decode via Web Audio
- No dependencies, no build step — one JS file + one CSS file

## Quick start

Serve this repo statically and open the demo page (demo set included):

```bash
npx serve . -l 3000 --no-clipboard
# open http://127.0.0.1:3000/index.html
```

Or embed in any page with two tags and one mount call:

```html
<link rel="stylesheet" href="assets/player/fc-player.css">
<script src="assets/player/fc-player.js" defer></script>
<script>
  window.addEventListener('DOMContentLoaded', function () {
    FCPlayer.mount({
      title: 'Focus Soundscape',
      subtitle: '16 min · study set',
      source: { dir: 'assets/audio/segments/', pattern: 'segment_%04d.aac', count: 16 }
    });
  });
</script>
```

## Loading your own tracks

Give the player any audio files, ordered and named so they sort correctly
(any common browser-decodable format; durations need not be uniform):

```bash
# one command: converts + names a folder of audio into a loadable set
scripts/prepare-tracks.sh /path/to/your-tracks assets/audio/myset
```

Then point the mount at the output dir. Three mount modes are supported
(`source` pattern, explicit `segments` list, local `files` from a picker)
— details in `docs/DESIGN.md` §4 and `AGENTS.md`.

## Documentation

- `docs/DESIGN.md` — the engineering design and quality bar (source of truth)
- `docs/ROADMAP.md` — development plan and phases
- `AGENTS.md` — how to work in this repo (for humans and AI agents)
- `INTEGRATION.md` — wiring into the Flourishing Compendium wiki (not yet applied)

## Repo layout

Lives in the wiki repository under `soundscape-player/`:

```
soundscape-player/
  index.html         # deployable demo page (component + audio sets)
  assets/            # player component + audio sets
  scripts/           # track preparation helper
  docs/              # design + roadmap
  AGENTS.md          # agent/human takeover guide
```
