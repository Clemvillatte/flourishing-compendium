# FCPlayer — Engineering Design

This document is the engineering specification for the FCPlayer soundscape
player. It records the architecture, the design decisions and their rationale,
and the behaviours that any change to this project must preserve. Treat it as
the source of truth for how and why the player works.

## 1. Problem

A study-focused wiki (The Flourishing Compendium) needs background music for
long study sessions: a calm, continuous soundscape that can run for a long time,
adapts subtly to the time of day, and never demands attention. The constraints:

- The host is a static site (GitHub Pages) — no backend, no build step required.
- The source material is a set of audio files (the user's study set).
- Playback must be gapless, controllable (select / random / play / pause /
  resume / stop / timer), and resilient to slow loading.

## 2. Core idea: segment-based playback

A soundscape is modelled as an **ordered list of segments** — short audio
files (typically 60 s of AAC) that form a continuous whole when played back
to back. This is the central design decision and everything else follows
from it:

- **Long playback from small files.** Segments stream progressively; only the
  next few are ever held in memory. A 16-minute set is 16 small files.
- **Sample-accurate joins.** Each segment is decoded to an `AudioBuffer` and
  scheduled on the Web Audio clock at an exact time. Adjacent buffers start
  back-to-back, so joins carry no gap and no overlap.
- **Any duration, any count.** The engine reads each buffer's real duration;
  nothing assumes 60-second files.
- **Infinite playback (always on).** The set loops forever: the pass-final
  segment fades out over ~3 s and the loop restarts with a ~1.2 s fade-in.
  Track jumps use a ~0.8 s fade-in; random picks are jumps. The position
  display is per-pass (time since the current pass began).
- **Varied loops (optional: `rotatePasses`).** Each pass through the set can
  begin at a randomly rotated track (never the same start twice in a row,
  order within the pass preserved). **QUARANTINED — off by default and not
  enabled in any example.** For a continuous recording the last→first
  junction is the loop endpoint; rotating passes moves that un-faded hard
  cut INSIDE a pass. The junction-aware fades below now cover every regular
  junction, which was the prerequisite for safely lifting the quarantine —
  but it stays off until the user opts in. The mechanism itself is
  spec-verified (deterministic rotation check in `tests/spec.mjs`).
- **Junction-aware fades (the anti-tick fix).** Raw ADTS AAC files decode
  with encoder priming at the head and padding at the tail (measured ~30 ms
  each on the user's sets); butt-joining such buffers puts a ~60 ms
  near-silence dip at every track boundary — the audible tick that broke
  focus. Two engine mechanisms fix it, both on by default:
  - **Content trim (`trimSilence: true`).** At decode time each buffer is
    scanned once (2 ms windows, threshold 0.5 % of body peak, 250 ms cap per
    side) and only its audible span is scheduled — joins land on real
    material, positions and durations use content spans.
  - **Junction crossfade (`junctionFade: 0.012`).** Every regular junction
    overlaps the outgoing tail with the incoming head by 12 ms with
    complementary equal-power curves, so any residual boundary step is
    inaudible. Designed transitions (the pass wrap's 3 s fade-out + 1.2 s
    fade-in, jump/resume fade-ins) keep their own curves and skip the
    junction fade. The scheduler advances by (duration − overlap), so the
    next join is always butt-aligned with the audible end.
  - The `<audio>` fallback path cannot crossfade (no per-segment gain
    stage) — documented degradation.
- **Layering is a scheduling concern, not synthesis.** This player plays
  files; it does not synthesize audio or generate music. But it CAN schedule
  multiple layers of the user's own material on independent timelines so
  their loop points drift against each other and the combination evolves —
  see §3.6 "Layered sets".

## 3. Architecture

```
 UI (panel + floating button)
      │  user intent
      ▼
 Engine (state machine: idle | playing | paused)
      │  lookahead scheduler (200 ms tick)
      ▼
 AudioBufferSourceNode chain ──▶ gain(per segment) ──▶ lowpass ──▶ masterGain ──▶ timerGain ──▶ destination
```

### 3.1 Engine

- **State machine.** `idle`, `playing`, `paused`. Pause captures the exact
  position (segment index + offset); resume re-schedules from that point with
  a virtual timeline start so the displayed position stays exact.
- **Lookahead scheduler.** A 200 ms interval schedules segments while the next
  start time is within a 2.5 s lookahead window. A prefetch loop keeps the
  next three segments decoded.
- **Underrun guard.** If a segment decodes late and the timeline falls behind
  the audio clock, the scheduler rebases the timeline (new start time, front
  marker, virtual start) before scheduling. Playback resumes after a short
  buffering gap; **sources never overlap**. This is the documented behaviour:
  gapless joins in the normal case, a clean rebase when loading falls behind.
- **Playback generation token.** Every asynchronous start (decode callbacks,
  scheduling retries) is guarded by a generation counter that `stop()`,
  `play()` and `dispose()` invalidate. A pending decode can never revive a
  stopped or disposed engine, and repeated clicks during a decode produce
  exactly one playback chain.
- **Designed transitions.** The final segment of a pass fades out over ~3 s
  (capped at 90 % of the segment's content duration, so short segments can
  never schedule the fade into the past); the next pass fades back in over
  ~1.2 s. Track jumps use a ~0.8 s fade-in; random picks are jumps.
  Pause/resume is seamless. Regular junctions use the 12 ms equal-power
  crossfade above.
- **Timer envelope.** The session timer fades out on a **dedicated gain
  stage** (`timerGain`), separate from user volume and the circadian trim.
  Changing or cancelling the timer clears the pending fade and restores the
  envelope; an expired timer can never stop a subsequently restarted session.

### 3.2 Signal chain

`source → per-segment gain → lowpass (circadian) → masterGain (volume) → timerGain (timer fade) → destination`

Each concern owns exactly one node, so they can never fight each other
(e.g. the circadian trim runs every tick but cannot override a timer fade).

### 3.3 Circadian filter (optional, on by default)

A low-pass filter plus level trim that follows the hour of day: fully open
and loudest around 14:00, warmed down to ~8.4 kHz and −18 % at 02:00. The
intent: study sessions late at night should sound dimmer and warmer. The
curve: `cutoff = 20000 × 0.42^k`, `gain = 1 − 0.18k`, where `k` is the
wrapped distance from 14:00 normalized to 0..1. Transitions use
`setTargetAtTime` so hour changes glide rather than jump.

### 3.4 Fallback path

If `decodeAudioData` cannot decode the source (rare browser/format
combinations), the engine switches once to a plain `<audio>` element chain:
sequential segment playback with `ended`-drained advancing, the same controls,
and position tracking from per-segment durations learned via
`loadedmetadata`. This path is slightly less gapless; the scheduler and
circadian filter are gated off in fallback mode.

### 3.5 Multiple sets

`mount({ sets: [...] })` (or `FCPlayer.loadSet(def)` at runtime) mounts several
sets; the panel shows a set menu (chips) and switching is a first-class
operation:

- **Designed crossfade.** On a switch while playing, the outgoing set's
  position is captured first (it resumes there next time), its sources keep
  sounding while its gain stage fades out, and the incoming set fades in —
  equal-power (sinusoidal) curves over `setCrossfade` seconds (default 4).
  When the fade completes the outgoing engine is retired: sources stopped,
  state `paused` with the captured position. Rapid switches are safe — each
  switch supersedes the previous one, and a re-activated set cancels its
  pending retirement. Stop during a fade leaves no orphaned sources.
- **Position memory.** A set switched away from mid-playback resumes exactly
  where it was captured (segment + offset + per-pass position).
- **State survival.** Timer, volume and circadian live on the shared session
  nodes, so they survive switches unchanged (spec-verified).
- **Fallback caveat.** In `<audio>` fallback mode there is no shared gain
  stage, so switching hands over cleanly without a crossfade (documented
  degradation).

### 3.6 Layered sets (stems)

`mount({ layers: [...] })` plays several ordered segment lists
**simultaneously on independent timelines**, so their loop points drift
against each other and the combination evolves rather than repeating. This
is the honest answer to "loops that feel layered": the player plays the
user's premixed files — it does not synthesize audio or generate music —
but it can schedule independent layers of the user's own material.

- Each layer is a full Engine with its own gain stage; layer level =
  `layer.gain` (default 1) scaled by `1/√N` when `normalizeLayers` is on
  (default) to prevent clipping when summing layers.
- **Solo** crossfades the other layers' gain stages out over `soloFade`
  seconds (default 1.5) without stopping their timelines; unsoloing restores
  the levels. Timelines never restart on solo.
- With two layers whose pass lengths are relatively prime (e.g. 10.1 s and
  18.21 s in the QA fixture), the combined cycle is the LCM of the passes
  (~5.1 h) — the combination never audibly repeats within an hour
  (spec-verified from actual decoded durations).
- The position display shows elapsed session time and the total shows ∞,
  because layers drift and a single per-pass position is meaningless.

### 3.7 UI

A floating round button (bottom-right) opens a panel: transport controls
(random / play-pause / stop), position/total, volume, timer chips
(15/25/45/off), the circadian toggle, and a **track list** — one row per
segment, durations filled in as segments decode, current track highlighted.
Clicking a row jumps to that track. The component reads the host site's CSS
variables (`--panel`, `--gold`, `--font-display`, …) so it follows the site's
theme; it also defines fallbacks so it works standalone.

MediaSession is wired (play/pause/stop, prev/next track) for OS media keys.

**Docked launcher** — `mount({ launcher: <selector or element> })` docks the
toggle button into a host-page element (e.g. a header slot) instead of the
floating corner position: the button joins that layout as a compact icon
button (class `fcp-inline`, in-flow `position: static`) and the open panel
drops below it (right-aligned with the button, full-width margins ≤ 480 px,
repositioned on resize, spec section 17). With `panelAnchor: <selector or
 element>` the panel instead drops from that element's bottom edge — for
hosts that dock the button into a tall header. Without the options nothing
changes: floating button + bottom panel.

**iOS lock-screen handover (background keeper)** — iOS (all browsers there
are WebKit) suspends Web Audio the moment the page is hidden (screen lock,
app switch); a plain `<audio>` element is the one thing it keeps sounding.
`backgroundAudio: 'auto'` (the default; enables on iPhone/iPad only) hands
playback to a dedicated `<audio>` element when the page goes hidden while
playing: the element is unlocked inside the play gesture, Safari 16.4+
also gets `navigator.audioSession.type = 'playback'` (keeps Web Audio
audible with the ringer switch silent — the session type alone does NOT
survive a screen lock), and the element is fed a single concatenated,
looping blob of the active set's segment files — built lazily after play
(the decode pass doubles as pre-decoding, so handing back is instant),
started at the engine's exact position, and handed back to the engine at
the element's exact position when the page returns. If the page is hidden
before the blob is ready — or the set is not ADTS AAC (the only format
whose files concatenate losslessly) — the handover degrades to playing the
current segment only and the hand-back resumes at the suspend point. A
failed keeper start leaves the engine paused at its captured position.
Lock-screen play/pause works through the element's native controls (the
hand-back respects a lock-screen pause). Degradations while
backgrounded: butt-joined junctions (no 12 ms crossfade), no circadian
filter, timers/JS pause, no set switching; not available in layers or
`<audio>`-fallback mode. Verified by spec section 18 on desktop (the
handover logic is view/visibility-driven and testable there, including
the delayed-build and non-ADTS paths; the actual iOS lock behaviour needs
a device check — see HANDOFF).

Host pages with their own fixed bottom bar (e.g. the wiki's phone tab
layout) set the `--fcp-fab-offset` CSS variable on `:root` to lift the
floating button and panel clear of it; the default (unset) keeps the
original position for standalone pages (spec-verified).

The wiki integration is applied — see `INTEGRATION.md`.

## 4. Loading tracks (the key workflow)

The player must make it trivial to load a user's own tracks. Three mount
modes, all producing the same engine:

1. **Pattern source** (the normal case for a hosted set):
   ```js
   FCPlayer.mount({
     title: 'Focus Soundscape',
     source: { dir: 'assets/audio/segments/', pattern: 'segment_%04d.aac', count: 16 }
   });
   ```
2. **Explicit list**: `segments: ['a.aac', 'b.aac', …]` — any URLs.
3. **Local files**: `files: [File, …]` — e.g. from a folder picker; nothing
   is uploaded.

Rules that hold in every mode:

- **Order is filename order** (or array order). Name files zero-padded so
  lexical sort equals intended order.
- **Any common audio format** the browser can decode works (AAC, MP3, WAV,
  OGG, M4A). Durations are read from the decoded buffers; they need not be
  uniform.
- **The last segment carries the loop fade-out**; the first is expected to
  start gently (its intro is the fade back in).
- `scripts/prepare-tracks.sh` automates the hosted case: it takes a folder of
  arbitrary audio files, converts them to uniform AAC segments (via ffmpeg,
  if available) or copies them as-is, and emits the exact mount config.

## 5. Quality bar (must hold after any change)

- Zero console/page errors during normal use.
- Gapless joins when segments decode in time; rebase (never overlap) on underrun.
  Regular junctions overlap by exactly `junctionFade` (12 ms, equal-power)
  over trimmed content — no silence dip, no click; the pass wrap keeps its
  designed fade (butt join, no junction fade). Sources never overlap by
  more than the designed junction window.
- Pause/resume preserves exact position (including across segment
  boundaries); stop resets to idle. Per-pass position reads from the latest
  pass origin at or before the audio clock — never negative, even when a
  short pass is scheduled ahead of the clock.
- Loop wraps are infinite. With `rotatePasses` enabled: the pass-final segment
  fades out, the next pass starts at a rotated track with a fade-in, the
  track-list highlight and the pause capture follow the rotation, and no two
  consecutive passes start at the same track. With rotation off: the ordered
  loop restarts at the first track.
- Repeated rapid clicks produce one playback chain; stop/dispose during a
  pending decode leaves the engine idle with no sources.
- Timer replace/cancel never stops a restarted session; the fade uses its
  own gain stage.
- Works in the site's light and dark themes; usable at 375 px.
- Multi-set: switching mid-playback crossfades (both sets audible during the
  fade, outgoing retired with no orphaned sources afterwards); timer,
  volume and circadian survive the switch; a set resumed after switching
  back continues near its captured position; rapid switches settle on the
  last pick; stop during a fade leaves no sources.
- Layered sets: layers wrap on independent timelines (drifting loop
  points); no overlap within a layer; solo crossfades other layers out
  without stopping timelines; unsolo restores levels.
- The spec captures both page errors AND console errors — zero of either
  during normal use (QA pages declare an inline favicon so the browser's
  favicon request cannot pollute the console).

## 6. Known limitations

- The `<audio>` fallback is slightly less gapless than the Web Audio path.
- AAC decoding via Web Audio is broad but not universal; the fallback covers
  the remainder.
- The circadian filter is a design feature of this player, not a reproduction
  of any third-party system.
