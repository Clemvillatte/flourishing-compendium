# Verification receipt: psychdim D2 pool — Yale OYC PSYC 110 access + MIT OCW 9.00 durations (deg-verify-b)

- Worker: worker-pplx-verifyb-1027a (baton deg-verify-b), 2026-10-27, fetches
  11:04–11:16 UTC (fresh fetches, no cache; `fetch_url` cleaned + raw-HTML passes,
  plus full file downloads probed with ffprobe in the sandbox).
- Scope: the two open verification items named in the D2 pool header and entries
  1 and 27 of docs/degrees/inventory/deg-psychdim-d2-pool.md: (a) Yale OYC PSYC
  110 lecture-video access (pool record: "video access remains unverified by
  direct fetch"), (b) MIT OCW 9.00 per-lecture durations (pool record: "duration
  measurement from the audio assets remains open"). Coursera "The Science of
  Well-Being" (entry 2) NOT attempted — see Open items.

## (a) Yale OYC PSYC 110 — access VERIFIED by direct fetch (entry 27 limitation RESOLVED)

Two lecture pages fetched directly (cleaned content + raw HTML):

| Lecture page | YouTube embed found in raw HTML (public player) | Direct mp3 link | Transcript |
|---|---|---|---|
| https://oyc.yale.edu/psychology/psyc-110/lecture-1 — "Lecture 1 - Introduction" (Paul Bloom) | https://www.youtube.com/embed/P3FKHH2RzjI | https://oyc.yale.edu/sites/default/files/courses/spring07/psyc110/mp3/psyc110_01_011707.mp3 | full transcript inline in the page HTML (colorbox block), chapter timestamps 00:03:40 / 00:10:03 / 00:13:08 |
| https://oyc.yale.edu/psychology/psyc-110/lecture-11 — "Lecture 11 - Evolution, Emotion, and Reason: Emotions, Part I" (Paul Bloom) | https://www.youtube.com/embed/8UySWKNjw5Y | https://oyc.yale.edu/sites/default/files/courses/spring07/psyc110/mp3/psyc110_11_022107.mp3 | full transcript on page, chapters incl. "6. Social Emotions and Altruism [00:36:29]" |

- No paywall, login, or account requirement appears on either page (also
  confirmed by the fetch tool's paywall check: Is paywall: false).
- License: each page footer states "Most of the lectures and course material
  within Open Yale Courses are licensed under a Creative Commons
  Attribution-Noncommercial-Share Alike 3.0 license" (third-party content
  excluded; see OYC Terms of Use).
- Lecture 1's page also prints its assignment (Gray, Psychology 5e ch. 1;
  Stanovich in The Norton Psychology Reader, pp. 27-37) and a PowerPoint-slides
  PDF download — the pages are full course-session records, not stubs.

### Measured durations (mp3 downloads, ffprobe)

| File | Duration (ffprobe format.duration) | H:MM:SS |
|---|---|---|
| psyc110_01_011707.mp3 (L1 Introduction; 28,249,821 bytes) | 1765.486 | 0:29:25 |
| psyc110_11_022107.mp3 (L11 Emotions Part I; 50,933,302 bytes, 128 kbps CBR) | 3183.203 | 0:53:03 |

Bound: only these two lectures are measured. The remaining 22 sessions
(incl. guest lectures) are NOT measured in this pass; a per-lecture measurement
method (download + ffprobe, ~50 MB per file) is established and repeatable.

## (b) MIT OCW 9.00 — durations MEASURED for all eight matrix-credited lectures (entry 1 limitation RESOLVED for the credited set)

The lecture-audio index
(https://ocw.mit.edu/courses/9-00-introduction-to-psychology-fall-2004/pages/lecture-audio/)
labels the assets "audio only" but the raw-HTML download links resolve to MP4
(360p) files, e.g.
https://ocw.mit.edu/courses/9-00-introduction-to-psychology-fall-2004/mit9_00f04_lec02_360p_16_9.mp4
— all files below were downloaded in full and probed with ffprobe (duration =
container format.duration, not estimated from file size):

| Lecture (pool entry 1 credits) | File | Duration (s) | H:MM:SS |
|---|---|---|---|
| L2 Motivation and Emotion (affect + motivation strands) | mit9_00f04_lec02_360p_16_9.mp4 (114,217,942 bytes) | 4662.0 | 1:17:42 |
| L3 Learning: The Power of Association | mit9_00f04_lec03_360p_16_9.mp4 | 4726.8 | 1:18:47 |
| L4 Sensing (perception) | mit9_00f04_lec04_360p_16_9.mp4 | 4687.9 | 1:18:08 |
| L5 Attending (attention) | mit9_00f04_lec05_360p_16_9.mp4 | 4906.3 | 1:21:46 |
| L6 Perceiving (perception) | mit9_00f04_lec06_360p_16_9.mp4 | 4772.3 | 1:19:32 |
| L7 Memory | mit9_00f04_lec07_360p_16_9.mp4 | 4831.9 | 1:20:32 |
| L8 Cognition | mit9_00f04_lec08_360p_16_9.mp4 | 4787.1 | 1:19:47 |
| L16 Who Are You? The Psychology of the Self (self) | mit9_00f04_lec16_360p_16_9.mp4 | 4888.2 | 1:21:28 |

- Sum of the eight credited lectures: 38,262.5 s ≈ **10.63 measured hours**
  (assignment-window arithmetic, if the pool adopts these files, must still be
  done per module by the degree owner; the duration floor is per assigned
  segment, not per file).
- The pool's "counting hours from file size would be estimation and is not
  done" is superseded by this measured method; the measured values above are
  exact container durations.
- Remaining unmeasured in the course: the other ~15 sessions (incl. midterm
  review, guest lectures) — not credited to matrix rows in entry 1's current
  list; measure on demand if the owner adds rows.

## Open items (not attempted this pass)

- Coursera "The Science of Well-Being" (entry 2, CATEGORY C): course-level
  free-tier content access still unverified. Confirming it requires an
  enrollment pass with a logged-in browser; the verify lane has no Coursera
  account and automated fetches stop at the marketing page. FLAGGED to the
  supervisor/owner: either an owner-side browser check or a ruling that the
  platform-level audit statement is insufficient. No hours counted either way.
- edX "Science of Happiness" (entry 28): audit-scope statement already
  directly fetched by the owner (GGSC quote); the owner ruling on whether
  time-limited partial audit access qualifies as degree content is still owed —
  not a verification gap, an owner decision (unchanged from the pool record).

## Outcome for the pool owner (deg-arch-d2-psychdim holder)

- Entry 27 (Yale OYC PSYC 110) may drop its "video access unverified by direct
  fetch" qualifier: two lecture pages directly fetched show public YouTube
  embeds, direct mp3 downloads, and full transcripts; CC BY-NC-SA 3.0 applies.
  Measured: L1 0:29:25, L11 0:53:03.
- Entry 1 (MIT OCW 9.00) may replace "No hours counted" with the eight measured
  lecture durations above (sum ≈ 10.63 h for the credited set).
