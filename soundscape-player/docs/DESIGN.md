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
  nothing assumes 60-second files. The set loops with a designed transition.

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
- **Designed transitions.** The final segment of a set fades out over ~3 s;
  the first segment's own intro provides the fade back in. Track jumps and
  random picks use the same transition language (stop sources, schedule the
  selected segment immediately).
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

### 3.5 UI

A floating round button (bottom-right) opens a panel: transport controls
(random / play-pause / stop), position/total, volume, timer chips
(15/25/45/off), the circadian toggle, and a **track list** — one row per
segment, durations filled in as segments decode, current track highlighted.
Clicking a row jumps to that track. The component reads the host site's CSS
variables (`--panel`, `--gold`, `--font-display`, …) so it follows the site's
theme; it also defines fallbacks so it works standalone.

MediaSession is wired (play/pause/stop, prev/next track) for OS media keys.

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
- Pause/resume preserves exact position; stop resets to idle.
- Repeated rapid clicks produce one playback chain; stop/dispose during a
  pending decode leaves the engine idle with no sources.
- Timer replace/cancel never stops a restarted session; the fade uses its
  own gain stage.
- Works in the site's light and dark themes; usable at 375 px.

## 6. Known limitations

- The `<audio>` fallback is slightly less gapless than the Web Audio path.
- AAC decoding via Web Audio is broad but not universal; the fallback covers
  the remainder.
- The circadian filter is a design feature of this player, not a reproduction
  of any third-party system.
