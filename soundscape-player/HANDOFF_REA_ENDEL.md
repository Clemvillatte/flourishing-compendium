# Handoff & Technical Investigation: Endel REA, Loop Transition Bug & ADHD Flow Architecture

**Repository:** `https://github.com/Clemvillatte/flourishing-compendium`  
**Host Application:** *The Flourishing Compendium* (GitHub Pages)  
**Date:** 2026-11-04  

---

## 1. Executive Summary: What Happened & Why Transitions Were Abrupt

### 1.1 The Diagnosis
When testing the player on **"Still Waters"** (calm handpan, 8 tracks) and **"14Hz Beta Waves"** (8 tracks), transitions between non-adjacent tracks (e.g. from track 8 to 6, then 1 to 5) sounded abrupt, jarring, and unmusical.

**Root Causes:**
1. **The 12-Millisecond Splice Gap:**  
   The player's internal crossfade parameter was set to `junctionFade: 0.012` (12 milliseconds = 0.012 seconds).  
   *Why was 12ms used originally?* 12ms was designed exclusively as a microscopic zero-crossing de-clicking window between two *contiguous* slices of the exact same audio stream ($0 \to 1 \to 2$) to bridge AAC encoder priming/padding.  
   When jumping from track 8 to track 6, or track 1 to track 5: the audio jumped between completely different musical phrases in 1/80th of a second—producing a harsh, abrupt tape-cut sound!
2. **Phase Discontinuity on 14Hz Binaural Beats:**  
   A 14Hz binaural beat requires phase stability (200 Hz in the left ear, 214 Hz in the right ear). Splicing in 12ms causes an instantaneous phase step, creating an audible acoustic pop and destroying neural entrainment.
3. **Scrambling an 8-Minute Continuous Composition:**  
   "Still Waters" is an 8-minute calm handpan song sliced into 8 contiguous 60-second segments. Randomly jumping 8 $\to$ 6 $\to$ 1 $\to$ 5 every 60 seconds was breaking the composition's melodic narrative arc.

---

## 2. The Solution: State-of-the-Art Focus & Flow Architecture

### 2.1 The 5.0-Second Equal-Power Musical Crossfade
In `fc-player.js`, transitions now distinguish between **contiguous** and **non-contiguous** joins:
```javascript
var isContiguous = (prev.idx != null) && (idx === prev.idx + 1);
if (isContiguous) {
  // Contiguous slices of the same recording: 12ms priming-trim crossfade
  jf = Math.min(this.opts.junctionFade, dur / 10, prev.dur / 10);
} else if (this.opts.seamlessLoop || this.opts.playbackMode === 'flow' || this.opts.playbackMode === 'shuffle') {
  // Non-contiguous jump, loop-wrap, or flow transition: 5.0s lush equal-power crossfade
  var targetFade = (typeof this.opts.flowCrossfade === 'number') ? this.opts.flowCrossfade : 5.0;
  jf = Math.min(targetFade, dur * 0.45, prev.dur * 0.45);
}
```

* **Equal-Power Constant Acoustic Energy:**
  - Outgoing track: $\cos(t \cdot \pi / 2)$ fade-down from 1.0 to 0.0001 over 5.0s.
  - Incoming track: $\sin(t \cdot \pi / 2)$ fade-up from 0.0001 to 1.0 over 5.0s.
  - Power sum: $\cos^2(\theta) + \sin^2(\theta) \equiv 1.0$. The volume level never dips, never surges, and never clicks.
* **Lookahead Expanded to 12.0s:**
  The Web Audio lookahead window was increased from 2.5s to 12.0s so 5-second crossfades are pre-scheduled comfortably in the future with zero timing underrun risk.

### 2.2 How "Flow" Mode Operates
- Mode name updated across all UI and API references to simply **Flow** (`playbackMode: 'flow'`).
- In **Flow** mode:
  - Plays naturally through the soundscape's movements ($0 \to 1 \to 2 \dots \to N-1$).
  - When reaching the end of the set ($N-1 \to 0$):
    Instead of stopping, cutting, or dropping to silence, it executes the **5.0-second equal-power crossfade** back to track 0.
    The outro of the soundscape gently dissolves while the intro blossoms.
    The soundscape forms an **Infinite River of Sound** that can play for hours with zero interruptions.
- In **Sequential** mode:
  - Standard ordered playback with 5.0s seamless loop wrap.
- In **Shuffle** mode:
  - Non-repeating Fisher-Yates bag, with **5.0-second equal-power crossfades between every single track**.
- On **Manual Track Jumps** (`jumpTo`):
  - Outgoing audio smoothly ramps down over 0.4s while the target track fades in over 0.6s—eliminating clicks when clicking rows in the track list.

---

## 3. Cognitive Neuroscience & ADHD Attention Architecture for Writers

### 3.1 The ADHD Attention Paradox & Dopamine Regulation
1. **Moderate Brain Arousal (MAM) Model (Sikström & Söderlund):**
   - Individuals with ADHD exhibit reduced tonic dopamine in the prefrontal cortex (PFC).
   - In quiet environments, the under-aroused brain hunts for stimulation, triggering internal mind-wandering, tab-switching, and fidgeting.
   - Continuous auditory noise (brown and pink noise) introduces **beneficial stochastic resonance** into neural networks—amplifying weak task-relevant thoughts above the cortical firing threshold without conscious distraction.
2. **14Hz Sensorimotor (SMR) / Beta Entrainment:**
   - 14Hz binaural beats stimulate sensorimotor rhythm, reducing physical motor fidgeting and sustaining cognitive stamina during essay writing.
   - In `fc-player.js`, the **Acoustic Layer Bed** provides pure, continuous real-time Web Audio API synthesis (200 Hz Left / 214 Hz Right sine oscillators) with **zero loop boundaries and zero cuts**.

### 3.2 Protecting Baddeley's Phonological Loop
- Essay writing relies heavily on the articulatory loop and phonological store for syntax and vocabulary generation.
- Lyrics or speech-like formants cause the **Irrelevant Sound Effect (ISE)**, degrading working memory throughput.
- All 29 soundscape sets in the player are **strictly lyricless** (felt piano, nylon guitar, baroque lute, handpan, ambient synthesizer, colored noise).

### 3.3 Zero-Mismatch Transition Continuity
- Abrupt audio cuts trigger an immediate **mismatch negativity (MMN)** and **P3a event-related potential** in the auditory cortex.
- For an ADHD writer who has achieved hyperfocus, a single abrupt cut shatters the flow state.
- The 5.0s constant-power crossfade ensures acoustic continuity is never broken.

---

## 4. Multi-Layering Capabilities in the Player & Soundscape Studio

Writers can layer audio directly in two ways:
1. **In-Player Acoustic Layer Bed:**
   Inside the main player panel, the **Acoustic Layer Bed** allows running Brown Noise ($1/f^2$), Pink Noise ($1/f$), White Noise, or 14Hz Beta Binaural Waves underneath any musical soundscape with an independent volume control.
2. **Soundscape Studio (`site/studio.html`):**
   A dedicated 3-stem mixer with live frequency visualizer and an integrated distraction-free local-saving essay writing scratchpad.

---

## 5. Verification & Git Manifest

* **Python Unit Tests:** 119/119 passing (`python3 -m unittest discover -s scripts/tests -v`).
* **Node Tests:** 9/9 passing (`node --test scripts/tests/randomizer.test.cjs`).
* **Byte-Identity:** `soundscape-player/assets/player/fc-player.js` and `.css` are byte-identical to `site/assets/player/fc-player.js` and `.css`.
* **Handoff Archive:** `/Users/clemmy/Downloads/FCPlayer_Audio_Handoff.zip` updated with all revised files.
