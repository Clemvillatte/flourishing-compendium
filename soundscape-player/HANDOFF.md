# Soundscape Player Handoff: Scope, Course of Action & Next Steps

**Repository:** `https://github.com/Clemvillatte/flourishing-compendium`  
**Host Application:** *The Flourishing Compendium* (GitHub Pages)  
**Date:** 2026-11-04  

---

## 1. Core Vision & User Intent (READ FIRST)

The user’s objective for this audio player is simple, focused, and elegant:
1. **One Button `[♪]` on the Wiki:**  
   The player is docked in the Wiki header (`#fcLauncher`). The user clicks `[♪]`, the dropdown opens, they hit play or choose a track/soundscape, and then freely navigate the Wiki to find inspiration, learn, or make connections while music plays in the background.
2. **Smooth, Seamless Playback (NO Abrupt Cuts):**  
   All audio transitions must be buttery smooth:
   - Slices of the same continuous master recording ($i \to i+1$) join sample-accurately with 12ms priming-trim crossfade (`junctionFade: 0.012`).
   - Loop wraps ($N-1 \to 0$), manual track jumps, and non-contiguous changes use a **5.0-second equal-power crossfade** ($\cos$ fade-out, $\sin$ fade-in; constant acoustic energy $\cos^2 \theta + \sin^2 \theta = 1$).
   - Wrap-around prefetching ensures track 0 is pre-decoded in memory before track $N-1$ finishes.
3. **Keep All Added Audio Sets:**  
   Keep all 30 high-quality lyricless soundscapes (felt piano, ambient piano, nylon guitar, baroque lute, still waters handpan, 14Hz beta waves, calm morning, winter piano, brown noise, pink noise, etc.).
4. **Possibility to Play with a Layer Bed:**  
   A clean, intuitive acoustic bed option (e.g. blend Brown Noise underneath a felt piano track) without cluttering the player.
5. **Rework the UI of the Existing Player:**  
   The previous dropdown was a bit narrow and cluttered. It needs to be reworked into a spacious, elegant, easy-to-navigate interface.
6. **WHAT WAS REJECTED (DO NOT RE-ADD):**  
   - **NO separate Studio / Editor page (`studio.html` has been removed).**
   - **NO cognitive neuroscience text blocks or ADHD essays in the UI.**
   - **NO complicated presets or multi-editor clutter.**

---

## 2. Current Status & What Has Been Done

- **Audio Engine (`fc-player.js`):**
  - Contiguous sample-accurate slice joining (12ms) implemented.
  - 5.0-second equal-power crossfade for non-contiguous transitions and loop wrap implemented.
  - Lookahead window expanded to 12.0s to allow 5s crossfades to pre-schedule without underruns.
  - Wrap-around prefetching implemented (`(this.segIndex + k) % n`).
  - Manual track jump micro-crossfade ramp (0.4s) to eliminate clicks.
  - Real-time Web Audio API acoustic bed (Brown, Pink, White, 14Hz Beta) synthesized in-engine.
- **Removed Unwanted Items:**
  - `site/studio.html` deleted.
  - ADHD / cognitive science essays removed from UI.
- **Audio Sets in Place:**
  All 30 audio directories exist in `site/assets/audio/` and `soundscape-player/assets/audio/`.

---

## 3. Course of Action for Next Agent

1. **Rework the Existing Player Dropdown UI (`fc-player.css` & `fc-player.js`):**
   - **Widen the panel:** The current panel max-width is 340px; widen to ~420px–460px with generous padding and cleaner typography so it feels spacious rather than cramped.
   - **Simplified Layout:**
     - Top row: Current track title, subtitle, and play/pause button.
     - Sets selector: Clean grid or categorized chips (Piano, Strings, Ambient, Focus, Noise) instead of a tall cramped single list.
     - Acoustic Layer Bed: A clean, minimal toggle/slider row (e.g., `[Bed: Off / Brown / Pink / 14Hz] [Volume Slider]`).
     - Progress bar + Timer chips (15m, 25m, 45m, Off).
   - **Preserve Single-Button Trigger:** Keep the docked `[♪]` button (`#fcLauncher`) and dropdown placement below `#topbar`.
2. **Maintain Strict Parity:**
   - Any edit to `soundscape-player/assets/player/fc-player.js` MUST be copied byte-identically to `site/assets/player/fc-player.js`.
   - Any edit to `soundscape-player/assets/player/fc-player.css` MUST be copied byte-identically to `site/assets/player/fc-player.css`.
   - Verify with: `diff -q soundscape-player/assets/player/fc-player.js site/assets/player/fc-player.js`
3. **Test Suite Verification:**
   - Python tests: `python3 -m unittest discover -s scripts/tests -v` (119 tests must pass).
   - Node tests: `export PATH="/usr/local/bin:$PATH" && node --test scripts/tests/randomizer.test.cjs` (9 tests must pass).
4. **Git Remote Sync:**
   - Push to `origin main` using the authenticated PAT URL configured in `git remote -v`.
