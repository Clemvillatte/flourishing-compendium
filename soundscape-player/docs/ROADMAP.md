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

- [ ] **Layered sets (stems)** — the biggest lever for loops that "feel
      layered": mount accepts several layers (drone bed, pads, arpeggio —
      each an ordered segment list), scheduled on independent timelines so
      their loop points drift against each other and the combination evolves
      continuously. Requires per-layer gain, optional per-layer rotation,
      and a mixing rule (sum with normalization or fixed layer levels).
      Acceptance: with two layers whose durations are relatively prime, the
      combined output never audibly repeats within an hour; soloing a layer
      mid-playback crossfades cleanly.
- [ ] Set switching: mount several sets and switch at runtime without
      page reload (dispose + re-mount is the current workaround; make it a
      first-class `loadSet(config)` API with a designed crossfade).
- [ ] Continuous shuffle: a mode where segment order is randomized per
      loop (no adjacent repeats), complementing ordered playback.
- [ ] "Begin at random track on start" option.
- [ ] Set menu in the panel (list of mounted sets with artwork/titles).
- Acceptance: switching sets mid-playback crossfades; state (timer,
  volume, circadian) survives a switch; no orphaned sources.

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
