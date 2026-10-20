# FCPlayer — Development Roadmap

Phased plan for evolving the player. Each phase lists work items and
acceptance criteria; nothing is "done" until the criteria pass and the
quality bar in `docs/DESIGN.md` §5 still holds (zero console errors,
gapless joins, exact pause/resume, timer guarantees, both themes).

## Phase 1 — Core engine and controls (DONE)

Delivered in the initial implementation:

- [x] Segment-based engine: fetch → decode → Web Audio scheduling, gapless
      ordered joins, 3-segment prefetch, underrun rebase (never overlap)
- [x] Transport: play / pause (exact position) / resume / stop
- [x] Track selection (list with live highlight) and random jump
- [x] Designed loop transition (pass-final fade-out) — and **varied loops**:
      each pass starts at a randomly rotated track (order preserved, joins
      intact, no identical consecutive passes), with fade-ins on wraps and
      track jumps; per-pass position display
- [x] Session timer (15/25/45/off) with dedicated fade gain stage;
      replace/cancel never kills a restarted session
- [x] Circadian filter (low-pass + trim by hour), toggleable
- [x] Volume, MediaSession (play/pause/stop/prev/next)
- [x] `<audio>` fallback when Web Audio decoding is unavailable
- [x] Playback-generation token: no pending decode can revive a stopped
      or disposed engine; rapid clicks produce one chain
- [x] Self-contained: no dependencies, no build step; theme-aware CSS
- [x] Track-loading workflow + `scripts/prepare-tracks.sh`
- [x] QA harness pattern (short synthesized segments for fast testing)

## Phase 2 — Multiple sets, playback modes, and layering

- [x] **Layered sets (stems)** — DONE: `mount({ layers: [...] })` plays
      several ordered segment lists simultaneously on independent timelines
      (per-layer gain with `1/√N` normalization, per-layer `rotatePasses`
      option — still quarantined by default, per-layer solo crossfades).
      Acceptance verified by `tests/spec.mjs` (§8): layers wrap on their own
      timelines (drift), no overlap within a layer, solo crossfades without
      stopping timelines, and the QA fixture's relatively prime passes
      (10.1 s / 18.21 s) give a combined cycle of ~5.1 h — the combination
      never audibly repeats within an hour. Scope note: the player plays the
      user's premixed recordings; it does not synthesize or mix stems in the
      sense of generating music — "layered" means independent timelines of
      supplied material.
- [x] Set switching — DONE: first-class `mount({ sets })` +
      `FCPlayer.loadSet()` / `instance.loadSet(id)` with a designed
      equal-power crossfade (default 4 s, `setCrossfade` option), per-set
      position memory (switching back resumes), and state (timer, volume,
      circadian) preserved across switches. Single-set mount API unchanged.
- [ ] Continuous shuffle: a mode where segment order is randomized per
      loop (no adjacent repeats), complementing ordered playback.
- [ ] "Begin at random track on start" option (safe variation: random
      start + ordered loop — unlike per-pass rotation, it never creates an
      un-faded internal junction).
- [x] Set menu in the panel — DONE (chips with active highlight; panel
      scrolls internally and the chip area caps at ~110 px so 16+ sets fit).
- Acceptance (met, spec-verified): switching sets mid-playback crossfades;
      state (timer, volume, circadian) survives a switch; no orphaned sources
      — including rapid switches and stop during a fade.
- [ ] Junction-aware fades — the prerequisite for safely un-quarantining
      `rotatePasses` (see HANDOFF.md).

## Phase 3 — Comfort and integration

- [ ] Keyboard shortcuts (space = play/pause, arrows = track skip) scoped
      so they never fight the host page's own shortcuts.
- [ ] Remember state (volume, circadian, last set/track) in localStorage.
- [ ] MediaSession position state (progress in OS media UI).
- [ ] Optional waveform / level visualization in the panel (canvas, cheap).
- [ ] Wiki integration (see INTEGRATION.md) — only when the user asks.
- Acceptance: shortcuts inert when the player was never opened; stored
  state survives reload; visualization costs < 1 % CPU at idle.

## Phase 4 — Robustness and reach

- [ ] Offline caching of segments via service worker or Cache Storage
      (opt-in), so study sessions survive flaky connections.
- [ ] Preload strategy option (decode-ahead count) for large sets.
- [ ] Automated Playwright test suite checked into the repo (the QA
  scenarios from AGENTS.md as runnable specs).
- [ ] Cross-browser verification matrix (Chromium, Firefox, Safari),
  especially the AAC decode + fallback split.
- Acceptance: cold-load playback works offline after first visit; test
  suite runs green in CI on all three engines.

## Non-goals

- No backend, no build step, no runtime dependencies — the component
  stays two files (JS + CSS) you can paste into any static page.
- No third-party audio; the user supplies their own tracks.
- No audio synthesis/DSP beyond the circadian filter — the player plays
  the user's files; it does not generate music.
