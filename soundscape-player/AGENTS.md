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

This project lives inside the `flourishing-compendium` wiki repository, in
its own `soundscape-player/` directory. The wiki integration
(`INTEGRATION.md`) is APPLIED: the wiki's `site/assets/player/`,
`site/assets/audio/` (the 16 sets) and the wiring in `site/index.html`
are part of the deployment; keep them in sync with the component copies
(spec section 13 fails the suite on drift).

```
soundscape-player/
  index.html                  # standalone demo page — mounts all 16 of the user's named sets
  assets/player/fc-player.js  # the component (no dependencies, no build step)
  assets/player/fc-player.css # its styles (reads host CSS vars, has fallbacks)
  assets/audio/demo/          # procedurally generated demo set (8 × 60 s AAC)
  assets/audio/segments/      # legacy single-set location (16 × 60 s AAC)
  assets/audio/<set-slug>/   # the user's study sets (16 sets; see below)
  scripts/
    prepare-tracks.sh         # turn any folder of audio files into a loadable set
  docs/
    DESIGN.md                 # engineering design + quality bar (source of truth)
    ROADMAP.md                # development plan
  tests/
    spec.mjs                  # regression suite (run it before considering work done)
    qa.html                   # single-set QA fixture (3 × 5 s tones)
    qa-multi.html             # multi-set QA fixture (2 sets × 3 tones)
    qa-layers.html            # layered QA fixture (relatively prime passes)
    fixtures/                 # synthesized tones (AAC + sample-exact WAV)
  INTEGRATION.md               # wiring into the wiki (APPLIED — see it for the applied state)
```

The user's 16 sets live in `assets/audio/<slug>/` as `segment_%04d.aac`
(zero-padded, filename order), each named for a concept from the wiki:
flow, deliberate-practice, deep-listening, completing-the-cycle,
rhythm-of-rest, completeness-of-rest, the-dreaming,
siddhartha-and-the-river, abgeschiedenheit, natures-rhythm,
thundering-silence, stimulus-control, dream-of-the-butterfly,
flower-and-song, the-dark-night (22 tracks), bare-attention.

## Running and testing

There is no build step. Serve the repo root statically and open the demo:

```bash
# from the soundscape-player/ directory (any static server works)
npx serve . -l 3000 --no-clipboard
# open http://127.0.0.1:3000/index.html
```

QA requirements (see `docs/DESIGN.md` §5 for the full quality bar):

- **Run the checked-in regression spec** before considering work done:
  ```bash
  npx serve . -l 8791 --no-clipboard &   # from the soundscape-player/ directory
  node tests/spec.mjs                     # exits non-zero on any failure
  ```
  It covers: ordered infinite wrap (audible-clock verified), rotating wraps,
  source-overlap assertions, pause/resume across a segment boundary,
  select/random/stop controls, the stop-during-pending-decode guard, the set
  menu + crossfade switching (state survival, position memory, rapid
  switches, stop mid-fade), layered sets (independent timelines, solo
  crossfades, combined-cycle math), the Endel order of the-dark-night
  (digest manifest), the wiki asset sync + wiring markers, the
  `--fcp-fab-offset` host-page escape hatch, and the junction-aware fades
  (content trim + 12 ms equal-power crossfade, sections 15-16: scheduled
  metadata, rendered-output measurements on the fixture AND the real set,
  resume-cursor regression). It captures page errors AND
  console errors. Add a spec case for every new behaviour you introduce.
- The real wiki page is covered by `tests/wiki-qa.mjs` (both themes,
  1280 and 375 px, zero console errors). It needs `site/data/` (a deploy
  artifact — build it with `python3 scripts/build.py --src . --version test`
  from the repo root) and a static server on `site/` itself (the wiki uses
  root-relative paths; serving the repo root breaks its assets).
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
4. Multi-set mounts: `FCPlayer.mount({ setCrossfade: 4, sets: [...] })`
   gives the set menu + crossfade; `FCPlayer.loadSet(def)` adds a set at
   runtime; `instance.loadSet(id)` / `instance.switchSet(id)` switch.
   Layered mounts: `FCPlayer.mount({ layers: [...] })` (see
   `docs/DESIGN.md` §3.6). The single-set mount API is unchanged.
5. Loop variety: `rotatePasses` is QUARANTINED — off by default, not enabled
   in any example. For a continuous recording the last→first junction is the
   loop endpoint; rotating passes moves that un-faded hard cut inside a
   pass. Do not enable it in examples without solving junction-aware fades
   (see `docs/ROADMAP.md` and HANDOFF.md). The default ordered loop is safe
   for every set.

## Hard rules

- **No dependencies, no build step.** The component stays a single JS file
  plus a single CSS file, usable by pasting two tags into any page.
- **Wiki `site/` changes**: the integration is applied and locked by the
  spec. Player-related edits to `site/` (assets, wiring) are in scope — keep
  the copies byte-identical. Any OTHER change to the wiki's `site/`
  directory still needs the user's explicit request.
- Keep `docs/DESIGN.md` updated when architecture changes; keep §5's quality
  bar green before considering work done.
- Only add audio files to the repo if you have permission to redistribute
  them; never add third-party audio you do not have rights to host.
- Preserve the public API: `FCPlayer.mount({...})`, `FCPlayer.dispose()`,
  the mount modes (`source` / `segments` / `files`), and the engine methods
  used by the demo (`play`, `pause`, `stop`, `jumpTo`, `random`, `setTimer`,
  `setVolume`).
