# FCPlayer — Architecture, Implementation & UI Reference

**Repository:** `https://github.com/Clemvillatte/flourishing-compendium`  
**Host Application:** *The Flourishing Compendium* (GitHub Pages)  
**Date:** 2026-11-05  

---

## 1. Vision & User Architecture

The player provides background focus audio for readers and writers navigating *The Flourishing Compendium*:
1. **Single Entry Point `[♪]`:**
   - A single docked button in the Wiki topbar (`#fcLauncher`) or floating bottom-right pill.
   - When playing, a gentle breathing halo pulses on the button.
   - Clicking opens a spacious, elegant 440px dropdown card directly below `#topbar`.
2. **Smooth, Seamless Continuous Flow:**
   - Slices of the same continuous master recording ($i \to i+1$) join sample-accurately with a 12ms priming-trim crossfade (`junctionFade: 0.012`) to eliminate AAC encoder padding.
   - Loop wrap ($N-1 \to 0$) and track changes execute a **5.0-second equal-power crossfade** ($\cos^2 \theta + \sin^2 \theta = 1$) so acoustic energy never dips, surges, or clicks.
   - Lookahead window is 12.0s with wrap-around buffer prefetching (`(this.segIndex + k) % n`), ensuring track 0 is pre-decoded in memory before track $N-1$ finishes.
3. **Soundscape Sets (30 Lyricless Compositions):**
   - **Ambient:** Flow, Deliberate Practice, Deep Listening, Completing the Cycle, Rhythm of Rest, Completeness of Rest, The Dreaming, Siddhartha and the River, Abgeschiedenheit, Nature’s Rhythm, Thundering Silence, Stimulus Control, Dream of the Butterfly, Flower and Song, The Dark Night, Bare Attention.
   - **Piano:** Changing Pace (Felt Piano), The World Can Wait (Piano), Winter Meditations (Felt).
   - **Guitar & Lute:** Dawn (Nylon Guitar), Waves (Ambient Guitar), A Calm Morning (Guitar), London Suite IV (Baroque Lute).
   - **Handpan & Focus:** Still Waters (Calm Handpan), Nervous Regulation 999Hz, 14Hz Beta Waves (Focus).
   - **Noise Beds:** Brown Noise (1/f² Bed), Pink Noise (1/f Resonance), White Noise (Full-Spectrum).
4. **Real-Time Web Audio Acoustic Layer Bed:**
   - Procedural Web Audio API synthesis (zero network loading, zero file seams):
     - `Brown`: Continuous Paul Kellet brownian filter ($1/f^2$).
     - `Pink`: Continuous Paul Kellet pinking filter ($1/f$).
     - `White`: Full-spectrum uniform white noise.
     - `14Hz Beta`: Dual stereo sine oscillators (200 Hz Left / 214 Hz Right) producing a sample-accurate 14Hz binaural beat.
   - Dedicated level slider with percentage readout.
5. **Clean, Spacious 440px UI:**
   - Header with Now Playing title, subtitle, and tabular time indicator.
   - Transport row: Large solid gold Play/Pause button (48px), Random Soundscape Set dice button, Random Track shuffle button, Stop button, and Volume slider.
   - Soundscapes selector with responsive category tabs (`All`, `Ambient`, `Piano`, `Guitar & Lute`, `Handpan & Focus`, `Noise Beds`) and pill chips with gold active highlights.
   - Acoustic Layer Bed card with mode selector and bed level slider.
   - Tracks list with movement numbers, durations, and active track highlight.
   - Footer with session timers (`15m`, `25m`, `45m`, `off`) and circadian time-of-day filter.

---

## 2. Verification

- Python unit tests: `119/119 pass` (`python3 -m unittest discover -s scripts/tests -v`).
- Node tests: `9/9 pass` (`node --test scripts/tests/randomizer.test.cjs`).
- Syntax verification: `node -c site/assets/player/fc-player.js` (clean, 0 errors).
- Byte parity: `site/assets/player/fc-player.js` $\equiv$ `soundscape-player/assets/player/fc-player.js` and `.css` $\equiv$ `.css`.
- Archive: `/Users/clemmy/Downloads/FCPlayer_Audio_Handoff.zip`.
