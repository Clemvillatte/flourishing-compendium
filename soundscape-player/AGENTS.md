# AGENTS.md — working in this repository

This file is for any AI agent (or human) taking over this project cold, with
no prior context. Read it fully before changing anything.

## What this project is

FCPlayer is a self-contained, dependency-free soundscape player for
study sessions, built to be embedded in a static site (GitHub Pages —
The Flourishing Compendium wiki). It plays an ordered set of audio
segments gaplessly and gives the user: track selection, random jump,
play/pause/resume/stop, session timers, volume, and an optional
time-of-day ("circadian") filter.

- **Engineering spec:** `docs/DESIGN.md` — read this first. It defines the
  architecture and the quality bar every change must preserve.
- **Roadmap:** `docs/ROADMAP.md` — planned work, in priority order, with
  acceptance criteria.

## Repository layout

This project lives inside the `flourishing-compendium` wiki repository,
in its own `soundscape-player/` directory. Nothing in the wiki's `site/`
directory imports from it until `INTEGRATION.md` is applied.

```
soundscape-player/
  index.html                  # standalone demo page (open directly or via any static server)
  assets/player/fc-player.js  # the component (no dependencies, no build step)
  assets/player/fc-player.css # its styles (reads host CSS vars, has fallbacks)
  assets/audio/demo/          # procedurally generated demo set (8 × 60 s AAC)
  assets/audio/segments/      # the user's study set (16 × 60 s AAC)
  scripts/
    prepare-tracks.sh         # turn any folder of audio files into a loadable set
  docs/
    DESIGN.md                 # engineering design + quality bar (source of truth)
    ROADMAP.md                # development plan
  INTEGRATION.md               # wiring into the wiki (not yet applied — do not apply without being asked)
```

## Running and testing

There is no build step. Serve the repo root statically and open the demo:

```bash
# from the soundscape-player/ directory (any static server works)
npx serve . -l 3000 --no-clipboard
# open http://127.0.0.1:3000/index.html
```

QA requirements (see `docs/DESIGN.md` §5 for the full quality bar):

- Test in Chromium headless (Playwright) at 1280 px and 375 px.
- Zero console/page errors during normal use.
- Cover every visible control: play/pause/resume, stop, random, track
  selection, volume, timer chips (set/replace/cancel), circadian toggle.
- Test failure paths: forced decode failure (fallback mode), stopped
  engine with a pending decode, underrun (delay a later segment's decode).
- A minimal QA harness pattern: mount with three short synthesized
  segments (see `docs/DESIGN.md` §4) so loop wraps and transitions are
  testable in seconds instead of minutes.

## Loading the user's tracks (the most important workflow)

The user will hand you audio files and expect them loaded into the player.
The supported flow:

1. Put the files in `assets/audio/<set-name>/`, named in play order,
   zero-padded (`segment_0000.aac`, `segment_0001.aac`, …). Or run
   `scripts/prepare-tracks.sh <input-dir> [output-dir]` which converts and
   names them automatically (needs ffmpeg; falls back to copying).
2. Point the mount at them (in `site/index.html` and later the wiki):
   ```js
   FCPlayer.mount({
     title: 'Set title',
     subtitle: '16 min · study',
     source: { dir: 'assets/audio/<set-name>/', pattern: 'segment_%04d.aac', count: N }
   });
   ```
   Any common audio format works; durations need not be uniform; order is
   filename order. The last segment takes the loop fade, so end the set
   with a segment that can fade out gracefully.
3. Verify: the track list shows N rows with correct durations, selection
   jumps, random jumps, and the loop transition fades cleanly.

## Hard rules

- **No dependencies, no build step.** The component stays a single JS file
  plus a single CSS file, usable by pasting two tags into any page.
- **Do not touch the wiki repo** (`flourishing-compendium`) unless the user
  explicitly asks. `INTEGRATION.md` describes how, for when that moment comes.
- Keep `docs/DESIGN.md` updated when architecture changes; keep §5's quality
  bar green before considering work done.
- The user's audio files are theirs to host; do not add third-party audio.
- Preserve the public API: `FCPlayer.mount({...})`, `FCPlayer.dispose()`,
  the mount modes (`source` / `segments` / `files`), and the engine methods
  used by the demo (`play`, `pause`, `stop`, `jumpTo`, `random`, `setTimer`,
  `setVolume`).
