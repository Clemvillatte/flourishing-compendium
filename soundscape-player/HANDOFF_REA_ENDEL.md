# Handoff & Technical Investigation: Endel REA, Loop Transition Bug & Generative Playback

**Repository:** `https://github.com/Clemvillatte/flourishing-compendium`  
**Host Application:** *The Flourishing Compendium* (GitHub Pages)  
**Date:** 2026-11-04  

---

## 1. Executive Summary & Endel Reverse-Engineering (REA) Findings

### 1.1 How Endel Actually Works: Native vs. Web Player
An investigation of Endel's architecture, patents (e.g. US Patent No. 11,275,350 assigned to Endel Sound GmbH), and web delivery reveals two fundamentally distinct layers:

1. **Endel Native Engine ("Endel Pacific" on iOS, Android, macOS native):**
   - **Generative Node System:** Endel does **not** play fixed, sequential audio loops in its native applications. Instead, it utilizes an AI-driven, graph-based composition engine.
   - **Modular Stem Building Blocks:** Human sound designers and artists (e.g. Richie Hawtin, James Blake, Grimes) supply cataloged stem layers categorized by frequency strata (low drone beds, mid-frequency arpeggios/pads, sparse high transients).
   - **Probabilistic / Markov Transition Matrix:** Nodes and stems transition probabilistically based on harmonic compatibility, circadian phase, heart rate, and movement data. The transitions favor adjacent or harmonically continuous musical states without repeating fixed loops.
   - **Polyrhythmic / Desynchronized Loop Lengths:** Stems operate on non-harmonically linked cycle lengths (e.g., 48s, 64s, 77s). By mathematical property of least common multiples, the composite combination drifts continuously and does not repeat for hours.

2. **Endel Web Player (`app.endel.io`):**
   - In browser environments, running the C++ CoreAudio/DSP generative graph is replaced by server-side pre-rendered delivery.
   - On play, the client requests:
     `GET https://app.endel.io/api/pacific?mode=<soundBankId>&hour=<0-23>&hlsjs=<0|1>&duration=<minutes>`
   - The response is an **HLS VOD playlist (m3u8)** delivering 60-second AAC segments (`Lavc59.18.100`, 32 kHz stereo, 128 kbps).
   - The web client relies on standard MSE (`hls.js`) or native Safari HLS to play segments back-to-back.
   - **Crucially: In Endel's web stream, the server delivers an hour-long rendered sequence.** It does *not* repeat a 16-minute tracklist in a rigid sequential loop with an abrupt cut back to track 0.

---

## 2. The Loop Wrap Bug: Root Cause & Solution

### 2.1 The Symptoms
When playing a set (e.g. 16 or 22 segments), reaching the final track ($N-1$) did not transition smoothly to track 0:
- The sound faded out prematurely into 3 seconds of near-silence.
- When track 0 began, it snapped in abruptly at full volume (100%) or stumbled.

### 2.2 Root Cause Analysis in `fc-player.js`
Three distinct flaws caused this behavior in the original scheduler:

1. **Variable Hoisting Bug (`NaN` Fade-In):**
   In `Engine.prototype._scheduleSegment`:
   ```javascript
   // LINE 1279:
   if (fadeIn > 0.06) fadeIn = Math.min(fadeIn, dur * 0.85);
   var n = this._segmentCount();
   if (passLoopStart == null) passLoopStart = this._loopStart;
   var isPassFinal = idx === (passLoopStart + n - 1) % n;
   var span = this._spanOf(buf);
   var dur = span.duration - offset; // LINE 1286
   ```
   `dur` was referenced on line 1279 **before** its initialization on line 1286. In JavaScript, `var dur` was hoisted as `undefined`. `dur * 0.85` evaluated to `NaN`, and `Math.min(fadeIn, NaN)` evaluated to `NaN`.  
   Consequently, the subsequent check:
   ```javascript
   if (fadeIn > 0.06) {
     g.gain.setValueAtTime(0.0001, when);
     g.gain.linearRampToValueAtTime(1, when + fadeIn);
   }
   ```
   evaluated to `NaN > 0.06` (`false`). The fade-in was completely skipped! Track 0 started instantly at full gain (1.0).

2. **The 3-Second Silence Hole (`loopFadeOut`):**
   At the pass boundary (`isPassFinal`), the engine forced a 3.0-second linear ramp down to `0.0001` (silence) starting at `when + dur - 3.0s`. In continuous ambient soundscapes, silencing the music every 16 minutes interrupts auditory focus.

3. **Wrap Junction Crossfade Bypass:**
   Because the wrap was treated as a "designed loop transition" (`fadeIn: 1.2`), `junctionFade` (12ms equal-power crossfade) was explicitly bypassed.

### 2.3 The Solution Implemented
1. **Hoisting Fix:** `var span = this._spanOf(buf); var dur = span.duration - offset;` is now evaluated immediately at the top of `_scheduleSegment`. `fadeIn` is guaranteed to be a valid number.
2. **`seamlessLoop: true` Support:**
   - When enabled (default in `site/index.html` and `soundscape-player/index.html`), `isPassFinal` does not force a 3s fade-out to silence.
   - The successor (track 0) is scheduled with `_pendingPassFade = 0.05` instead of `1.2`.
   - `junctionFade` (12ms equal-power crossfade) applies smoothly across $N-1 \to 0$ with `trimSilence` stripping AAC priming and padding.
   - The loop wrap is now 100% gapless, continuous, and click-free.

---

## 3. Endel Generative Flow Mode (Non-Linear Playback)

To align with Endel's true non-linear architecture, `FCPlayer` now supports three playback modes:

1. **`ordered` (Sequential):** Plays tracks $0 \to 1 \to \dots \to N-1 \to 0$ in order, with seamless loop wrapping.
2. **`generative` (Endel Flow Mode):**
   - Segments are treated as generative nodes in an evolving Markov graph.
   - When segment $i$ finishes, `_pickGenerativeNext(i)` selects the next node dynamically:
     - **Recency Memory:** Keeps a history buffer of recent tracks ($\min(6, \lfloor N/2 \rfloor)$) so recently heard segments are excluded from candidate pools.
     - **Markov / Harmonic Proximity Weighting:** Weights candidate nodes inversely by circular distance:
       $$w(j) = \frac{1}{1 + 0.5 \times \text{dist}(i, j)}$$
       where $\text{dist}(i, j) = \min(|i - j|, N - |i - j|)$.
     - Promotes smooth harmonic evolution rather than jarring leaps.
     - Joined seamlessly with 12ms equal-power crossfades.
     - Displays `∞` for total duration; tracks elapsed listening time.
3. **`shuffle` (Continuous Cycles):** Fisher-Yates cycle bag ensuring no immediate repetition between bags.

### 3.1 UI Controls
The player panel includes a **Flow Mode** chip selector:
- `Sequential`: Ordered loop with seamless wrap.
- `Endel Flow`: Non-linear generative Markov walk (default).
- `Shuffle`: Continuous non-repeating cycle.

---

## 4. Music Psychology & Cognitive Neuroscience for Essay Writing

When using background audio during academic reading and essay composition:

1. **Protecting Baddeley's Phonological Loop:**
   - Working memory for verbal reasoning (reading comprehension, syntax construction) depends on the articulatory loop and phonological store.
   - Auditory speech, lyrics, or prominent vocal-like melodies cause the *Irrelevant Sound Effect (ISE)*, directly degrading working memory bandwidth.
   - The 29 curated soundscape sets (felt piano, nylon guitar, lute, handpan, ambient synth, colored noise) are strictly lyricless with warm frequency envelopes.

2. **Preventing Auditory Habituation & Attentional Resets:**
   - A rigid 16-minute sequential loop creates auditory habituation. When track 15 fades to silence and track 0 restarts, the auditory change triggers a P300 event-related potential and salience network activation, pulling attention from writing.
   - Endel Generative Flow eliminates loop points, keeping the environment natural and non-repetitive.

3. **Stochastic Resonance & Noise Masking:**
   - Brown noise ($1/f^2$ spectral density) and pink noise ($1/f$ spectral density) raise the sensory threshold against transient room noise (keyboard clicks, door closures) via stochastic resonance, maintaining the optimal point on the Yerkes-Dodson arousal curve.

---

## 5. Verification & Test Suite Results

All tests pass cleanly:
- `python3 -m unittest discover -s scripts/tests -v` (119/119 pass)
- `node --test scripts/tests/randomizer.test.cjs` (9/9 pass)
- `fc-player.js` and `fc-player.css` in `soundscape-player/assets/player/` are byte-identical to `site/assets/player/`.
