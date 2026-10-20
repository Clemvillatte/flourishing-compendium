# HANDOFF — next agent instructions

Read this together with `AGENTS.md`, `docs/DESIGN.md`, and `docs/ROADMAP.md`.
Everything needed to continue is in this repository; nothing else is required.

## Current state (all verified by `tests/spec.mjs`, 28 checks green)

- Segment engine complete: gapless ordered playback, infinite loop with
  designed wrap fade, pause/resume with exact position (across segment
  boundaries), track selection, random jump, stop, session timer with its
  own fade gain stage, circadian filter, MediaSession, `<audio>` fallback,
  playback-generation guards (no pending decode can revive a stopped
  engine), onended hardening (stopped sources cannot corrupt a new chain).
- Loop variety: `rotatePasses` option exists and is mechanically correct
  (deterministic spec: forced rotation yields exactly 0,1,2,2,0,1), but it
  is QUARANTINED — off by default and not enabled in any example. Reason:
  for a continuous recording, the last→first junction is the loop endpoint;
  rotation moves that un-faded hard cut inside a pass. Enabling it safely
  requires junction-aware fades (ROADMAP Phase 2) or cyclically seamless
  source material. Do not re-enable it in examples without verifying that.
- Dev tooling: `package.json` pins playwright 1.59.0 + serve 14.2.3;
  `npm install && npx serve . -l 8791 & node tests/spec.mjs` from
  `soundscape-player/` runs the full suite. Add a spec case for every new
  behaviour.

## User requirements for the next phase (highest priority)

The user will supply MULTIPLE FOLDERS of AAC tracks (their study sets).
Integrate them so the user gets the exact experience they want:

1. Load every folder as its own named set (see "Loading the user's tracks"
   in AGENTS.md and `scripts/prepare-tracks.sh`; any browser-decodable
   format, order = filename order).
2. Build the set-switching feature (ROADMAP Phase 2: first-class
   `loadSet`/multi-set mount with a set menu in the panel and a designed
   crossfade between sets). The current single-set mount API must stay.
3. Confirm the exact desired experience with the user: per-set titles,
   whether each set loops independently, crossfade length, defaults.
4. Only integrate into the wiki (`INTEGRATION.md`) when the user asks.

## Honest scope statement (do not overclaim)

Continuous playback is implemented. The current player plays premixed
recordings; it does not yet create independently evolving musical layers.
Layered playback (stems on independent timelines) is the priority for the
next development phase — see ROADMAP Phase 2 "Layered sets".

## Known limitations / next steps

- `rotatePasses` quarantine (above) — needs junction-aware fades.
- Layered-stems engine (the real answer to "loops that feel layered").
- "Begin at random track on start" option (safe variation: random start +
  ordered loop — unlike per-pass rotation, it never creates an un-faded
  internal junction; pass = k..last, then wraps to 0 with fade).
- Multi-set support (user's folders — highest priority).
- Offline caching, keyboard shortcuts, localStorage state (ROADMAP Phases 3-4).
- Decoded buffers are all retained in memory (~15 MB per minute of audio);
  an LRU cache matters for very long sets.

## Repository layout

Everything lives under `soundscape-player/` in the flourishing-compendium
repository (the token used previously cannot create new repositories).
The wiki's `site/` directory is UNTOUCHED by design — integration happens
only on explicit user request, following `INTEGRATION.md`.
