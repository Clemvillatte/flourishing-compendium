# HANDOFF — next agent instructions

Read this together with `AGENTS.md`, `docs/DESIGN.md`, and `docs/ROADMAP.md`.
Everything needed to continue is in this repository; nothing else is required.

## Current state (all verified by `tests/spec.mjs`, 85 checks green)

- Segment engine complete: gapless ordered playback, infinite loop with
  designed wrap fade, pause/resume with exact position (across segment
  boundaries), track selection, random jump, stop, session timer with its
  own fade gain stage, circadian filter, MediaSession, `<audio>` fallback,
  playback-generation guards (no pending decode can revive a stopped
  engine), onended hardening (stopped sources cannot corrupt a new chain).
- The user's 16 study sets are LOADED (`assets/audio/<slug>/`, zero-padded
  `segment_%04d.aac`, filename order) and mounted in the demo `index.html`
  under wiki-concept names (Flow, Deliberate practice, Deep listening,
  Completing the cycle, The rhythm of rest, The completeness of rest,
  The Dreaming, Siddhartha and the river, Abgeschiedenheit, Following
  nature's rhythm, Thundering silence, Stimulus control, The dream of the
  butterfly, Flower and song, The dark night — 22 tracks, Bare attention).
  The demo set and legacy `segments/` set are still present.
- MULTI-SET support (DONE): `mount({ sets })` with a set-menu (chips) in
  the panel, a designed equal-power crossfade on switching
  (`setCrossfade`, default 4 s — the user chose 4 s), per-set position
  memory (switching back resumes — the user's explicit choice), timer /
  volume / circadian surviving switches, rapid-switch and stop-mid-fade
  safety, `FCPlayer.loadSet(def)` runtime API, and the single-set mount
  API (`source` / `segments` / `files`) preserved unchanged. The public
  `engine` returned by mount is a facade (Proxy) — it always points at the
  active set, so callers keep a stable reference across switches.
- LAYERED SETS (DONE): `mount({ layers })` plays several ordered segment
  lists simultaneously on independent timelines; per-layer gain with
  `1/√N` normalization, per-layer solo crossfade (`soloFade`, 1.5 s) that
  never stops timelines. QA fixture passes are relatively prime (10.1 s /
  18.21 s → combined cycle ~5.1 h > 1 h). Honest scope: the player plays
  the user's premixed recordings; it does NOT synthesize or mix stems in
  the sense of generating music — "layered" means independent timelines of
  supplied material.
- `rotatePasses` is still QUARANTINED — off by default, not enabled in any
  example, and the docs (AGENTS.md / DESIGN.md / code comments) now say so
  plainly. Mechanically correct (deterministic spec check), but for a
  continuous recording the last→first junction is the loop endpoint and
  rotation moves that un-faded hard cut inside a pass. Un-quarantining it
  requires junction-aware fades (ROADMAP Phase 2, last open item).
- Dev tooling: `package.json` pins playwright 1.59.0 + serve 14.2.3;
  `npm install && npx serve . -l 8791 & node tests/spec.mjs` from
  `soundscape-player/` runs the full suite (spec sections 1-11). QA pages
  declare an inline favicon (`data:,`) so favicon 404s cannot pollute the
  console-error check.
- Lifecycle hardening (second commit): stop() cancels the session timer
  outright (an old deadline can never kill a restarted session); set-switch
  position capture uses a separate snapshot committed only on retire/pause,
  so rapid A→B→A switches never corrupt the live scheduler cursor
  (spec-verified via source-sequence checks); retiring sets keep receiving
  scheduler ticks until their fade ends (a 4 s fade can outlast the 2.5 s
  lookahead); incoming-set fade-in ramps start when the material actually
  starts (a slow first decode delays the fade, not the sound); a superseded
  engine's pending decode is invalidated by stop/retire/dispose; fallback
  (`<audio>`) sets switch cleanly (no crossfade — no shared gain stage);
  dispose pauses fallback elements; mount-level engine options
  (loopFadeOut, lookahead, …) reach the engines; crossfade curves are true
  equal-power (sin rise / cos fall); solo fades likewise.

## User preferences (confirmed in conversation)

- Set names: wiki-concept titles that evoke the content (see list above).
- Set switching: crossfade ~4 s; switching back RESUMES the set's position.
- Goal: pick one set for a writing session and have it play seamlessly and
  harmoniously, looping, until paused/stopped or switched.

## Known limitations / next steps

- `rotatePasses` quarantine (above) — needs junction-aware fades.
- Continuous shuffle; "begin at random track" option (ROADMAP Phase 2).
- Keyboard shortcuts, localStorage state, MediaSession position (Phase 3).
- Offline caching, LRU buffer cache for very long sets (Phase 4). Decoded
  buffers are retained in memory (~15 MB per minute of audio) per set once
  that set has been visited — many visited sets add up; an LRU cache is the
  Phase 4 answer. Only the ACTIVE set decodes during playback.
- 1/√N layer normalization preserves approximate power for UNCORRELATED
  layers; correlated full-scale layers can still clip — set per-layer
  `gain` explicitly if that matters.
- The combined-cycle LCM claim is mathematical (timeline alignment), not a
  perceptual guarantee — synthetic tones verified scheduling, not musicality.
  Offline inspection of the Siddhartha set found click-free joins (boundary
  step 0.0000 everywhere, natural level variation) — but verify by ear.
- In `<audio>` fallback mode, set switching hands over without a crossfade
  (no shared gain stage) — documented degradation.
- The James Blake set (the-dark-night, 22 tracks) is currently staged in
  strict full-filename order; the user has CONFIRMED the intended order is
  the original Endel player-number order (the "Endel- Player - NNN.aac"
  suffixes, 001..022). Re-stage in that order and re-run
  `scripts/prepare-tracks.sh` on it (staging dir + re-encode), then verify
  the suite is still green.
- Audio rights are settled: the user has a deal with Endel; the project is
  personal with no monetary purpose. No redistribution concern — do not
  re-raise it.
- WIKI INTEGRATION IS APPROVED: the user explicitly asked to integrate the
  player into the wiki as soon as ready. Apply `INTEGRATION.md` (wire
  fc-player.js + fc-player.css into `site/index.html`, mount the 16 sets).
  The user's earlier instruction "don't touch site/ unless I ask" is now
  superseded by this explicit request — but keep changes to the wiring
  described in INTEGRATION.md and preserve the quality bar (suite green,
  zero console errors on the wiki page too).

## Repository layout

Everything lives under `soundscape-player/` in the flourishing-compendium
repository. The wiki's `site/` directory is untouched by design.
