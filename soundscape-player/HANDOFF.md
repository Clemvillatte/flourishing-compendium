# HANDOFF — next agent instructions

Read this together with `AGENTS.md`, `docs/DESIGN.md`, and `docs/ROADMAP.md`.
Everything needed to continue is in this repository; nothing else is required.

## Current state (all verified by `tests/spec.mjs`, 160 checks green)

- HEADER-DOCKED LAUNCHER (DONE, user-requested): the wiki's player button is
  no longer a floating corner FAB — `mount({ launcher: '#fcLauncher' })`
  (component option, class `fcp-inline`) docks it into the header slot the
  wiring places in `.topbar-utils` right after the Essay control: on desktop
  it sits between Essay (0) × and the help/backup cluster, on phones (where
  the header keeps only brand + theme toggle visible) between the title and
  the theme toggle — exactly where the user's red-cross screenshots asked.
  `panelAnchor: '#topbar'` makes the open panel drop from the header's bottom
  edge (right-aligned, full-width ≤ 480 px, resize-aware, dispose-safe).
  The floating-FAB default is UNCHANGED for standalone pages (spec 14/17).
  QA fixtures: tests/qa-launcher.html (spec section 17); wiki-qa.mjs now
  asserts the docking geometry on the real page at 1280/375 px.
- RANDOM-SET DICE (DONE, user-requested): a small dice button in the panel's
  controls row, placed BEFORE the shuffle (random-track) button, visible only
  on multi-set mounts (hidden on single-set/layered). One click picks a
  random set that is NOT the active one, switches with the usual 4 s
  crossfade, and makes sure playback is running (spec section 19 + wiki-qa
  checks on the real page, all four viewports). Verified: it launches a
  different set and keeps playing.
- iOS LOCK-SCREEN HANDOVER (DONE, user-requested): iOS suspends Web Audio
  when the page is hidden (lock/app-switch) — no code can prevent that;
  `backgroundAudio: 'auto'` (default; iOS/iPadOS only, desktop unaffected)
  hands playback to a plain `<audio>` element (the one thing iOS keeps
  sounding) when the page goes hidden while playing, and back at the
  element's exact position when the page returns. Details: Safari 16.4+
  also gets `navigator.audioSession.type = 'playback'` in the play gesture
  (ringer-switch audibility — it does NOT alone survive a lock); the keeper
  element is unlocked with a 16-byte silent WAV inside the gesture; the
  looping concatenated blob is built lazily after play (decode doubles as
  pre-decoding; only for ADTS AAC sets — other formats keep a single-
  segment best-effort handover); a mid-handover build never swaps the
  element's src; a hide before the blob is ready degrades to the current
  segment (mode 'segment') and hands back at the suspend point; a failed
  keeper start leaves the engine paused at its captured position;
  lock-screen pause is respected on hand-back; keeper tracks set switches
  (generation token discards stale builds) and is torn down by stop/dispose
  (paused first). Degradations while backgrounded (documented): butt-joined
  junctions, no circadian filter, timers/JS pause, no set switching; not in
  layers/fallback mode. Spec section 18 (tests/qa-bg.html + qa-bg-wav.html)
  covers the full cycle, the delayed build, the non-ADTS gate, the loop wrap,
  the blob duration/span-table consistency and the raw<->engine mapping on
  desktop via faked visibilitychange — the actual iPhone lock behaviour
  STILL NEEDS A DEVICE CHECK by the user (measurements prove the logic, not
  the device). If the hand-back is ever silent on a real iPhone (context
  left suspended by the OS), any tap re-arms it (a pointerdown retry is
  wired).

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
- JUNCTION-AWARE FADES ARE DONE — the tick between tracks is fixed. The
  user reported an abrupt "tick" at every track boundary that broke focus.
  Diagnosis (measured in a real browser, `tests/join-diag.mjs`): the raw
  ADTS AAC files decode with ~30 ms of encoder priming at the head and
  ~30 ms of padding at the tail, so every butt join dipped to near-silence
  for ~60 ms. Fix, both ON by default (`trimSilence: true`,
  `junctionFade: 0.012`):
  - content trim: each buffer is scanned once at decode (2 ms windows,
    threshold max(0.5 % of body peak, 1e-4), 250 ms cap per side) and only
    its audible span is scheduled — positions, durations and the track list
    all use content spans now;
  - junction crossfade: every regular junction overlaps by 12 ms with
    complementary equal-power curves; the scheduler advances by
    (content duration − overlap) so joins stay butt-aligned; designed
    transitions (pass wrap, jump/resume fade-ins) keep their own curves;
  - the pass-final fade-out is now capped at 90 % of the content duration
    (a latent negative-time bug on segments shorter than loopFadeOut);
  - per-pass position now reads the latest scheduled pass origin at or
    before the clock (a latent negative-position bug when a pass is
    shorter than the 2.5 s lookahead).
  Spec sections 15-16 lock it all (tests/qa-junction.html + fixtures/jf_*.wav,
  two phase-continuous tones with baked silence; #real=1 mounts the real
  the-dark-night wrap junction, segments 21 → 0). Beyond metadata checks
  (trim offsets, exact 12 ms overlap, wrap exclusion, join continuity, resume
  exactness), section 16 rewires an engine onto an OfflineAudioContext and
  RENDERS through the ACTUAL _scheduleSegment code, measuring the output:
  no silence dip, no click, no cancellation bump — on the fixture pair, on
  the real 21→0 junction, and a NEGATIVE CONTROL (junctionFade 0 +
  trimSilence false — the old behaviour) must still show the dip, proving
  the acceptance test has teeth. The REAL set
  was measured too: the-dark-night segments carry ~62 ms of priming+padding
  TOTAL per segment (~30 ms per side), content edges on real audio. Segment
  0000 additionally opens with ~300 ms of true silence: the trim is
  CONSERVATIVE — when no content is found within the 250 ms scan cap, that
  side is preserved (uncertain trim: codec padding vs intentional quiet
  cannot be told apart, so quiet openings/silent layer segments keep their
  full length). Note: the layered-pass period is now
  sum(content) − (N−1)·junctionFade per pass (spec computes it that way). The
  `<audio>` fallback still butt-joins (no per-segment gain stage) —
  documented degradation. Review hardening from the verification pass:
  sources are started with an explicit duration (the trimmed tail can
  never sound), the junction-fade gain application is transactional
  (a throw rolls the predecessor back — no half-applied crossfade), the
  resume timeline advance uses the FULL content length (a resumed source
  must not double-subtract its offset), the underrun rebase shifts the
  pass-origin ring too, and the trim scanner refuses to trim when most of
  a buffer reads as silence (can't tell priming from intentional quiet —
  e.g. a silent layer segment keeps its full length).
- `rotatePasses` — the engine prerequisite is delivered (every regular
  junction is trimmed + crossfaded, and the real 21→0 rotation junction is
  render-verified click/dip-free), but rotation is still OFF by default
  pending the user's opt-in AND an ear check on the live site. Do not claim
  it is "safe" from measurements alone.
- Dev tooling: `package.json` pins playwright 1.59.0 + serve 14.2.3;
  `npm install && npx serve . -l 8791 & node tests/spec.mjs` from
  `soundscape-player/` runs the full suite (spec sections 1-15). QA pages
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

- `rotatePasses` quarantine (above) — prerequisite now met; awaiting the
  user's opt-in. The default ordered loop is safe for every set.
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
- The James Blake set (the-dark-night, 22 tracks) is NOW IN ENDEL
  PLAYER-NUMBER ORDER: the rename mapping from the previous handoff was
  applied (pure file rename, no re-encode; verified by SHA-256 before and
  after). The order is LOCKED by `tests/dark-night-order.json` — a digest
  manifest checked by spec section 12 (served AND on disk). Any re-staging
  that scrambles the order fails the suite. Do not reorder again.
- Audio rights are settled: the user has a deal with Endel; the project is
  personal with no monetary purpose. No redistribution concern — do not
  re-raise it.
- WIKI INTEGRATION IS DONE (user-approved): `INTEGRATION.md` is applied —
  fc-player.js/css copied to `site/assets/player/`, the 16 audio sets copied
  to `site/assets/audio/<slug>/` (byte-identical; spec section 13 verifies
  the sync), and `site/index.html` wired (stylesheet link + deferred script
  + 16-set mount with the set menu, 4 s crossfade, mirroring the demo).
  The wiki's phone layout (fixed bottom tab bar ≤920 px) is handled via the
  new `--fcp-fab-offset` CSS custom property (spec section 14): the wiring
  sets it so the floating button and panel clear the tab bar.
  QA: `tests/wiki-qa.mjs` (checked in) opens the real wiki page at 1280/375
  px in both themes — 28 checks, zero console errors (run it with the site
  served from `site/` as the domain root, after `python3 scripts/build.py`,
  because `site/data/` is a deploy artifact). The wiki uses ROOT-RELATIVE
  paths — serving the repo root and opening `/site/index.html` breaks the
  wiki's own assets; serve `site/` itself.
- `rotatePasses` remains QUARANTINED (unchanged).

## Repository layout

Everything lives under `soundscape-player/` in the flourishing-compendium
repository. The wiki's `site/` directory now CONTAINS the player integration
(see INTEGRATION.md — applied): `site/assets/player/`, `site/assets/audio/`
(16 sets) and the wiring in `site/index.html`. Keep the copies in sync
(spec section 13 fails the suite on drift).
