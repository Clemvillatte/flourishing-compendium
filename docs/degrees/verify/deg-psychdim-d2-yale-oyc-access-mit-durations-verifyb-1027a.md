# Verification receipt: psychdim D2 pool — Yale OYC PSYC 110 access + MIT OCW 9.00 durations (deg-verify-b)

- Worker: worker-pplx-verifyb-1027a (baton deg-verify-b), 2026-10-27; all
  fetches performed this session after the paired clock reading 11:03:44Z
  (per-fetch times not individually logged). Fresh fetches, no cache
  (`fetch_url` cleaned + raw-HTML passes, plus full file downloads probed
  with ffprobe in the sandbox).
- Scope: the two open verification items named in the D2 pool header and entries
  1 and 27 of docs/degrees/inventory/deg-psychdim-d2-pool.md: (a) Yale OYC PSYC
  110 lecture-media access (pool record: "video access remains unverified by
  direct fetch"), (b) MIT OCW 9.00 per-lecture durations (pool record: "duration
  measurement from the audio assets remains open"). Coursera "The Science of
  Well-Being" (entry 2) not tested this pass — see Open items.

## (a) Yale OYC PSYC 110 — anonymous audio + transcript access VERIFIED; video embeds present, playback untested

Two lecture pages fetched directly (cleaned content + raw HTML):

| Lecture page | YouTube embed found in raw HTML (public player) | Direct mp3 link | Transcript |
|---|---|---|---|
| https://oyc.yale.edu/psychology/psyc-110/lecture-1 — "Lecture 1 - Introduction" (Paul Bloom) | https://www.youtube.com/embed/P3FKHH2RzjI | https://oyc.yale.edu/sites/default/files/courses/spring07/psyc110/mp3/psyc110_01_011707.mp3 | full transcript inline in the page HTML (colorbox block), chapter timestamps 00:03:40 / 00:10:03 / 00:13:08 |
| https://oyc.yale.edu/psychology/psyc-110/lecture-11 — "Lecture 11 - Evolution, Emotion, and Reason: Emotions, Part I" (Paul Bloom) | https://www.youtube.com/embed/8UySWKNjw5Y | https://oyc.yale.edu/sites/default/files/courses/spring07/psyc110/mp3/psyc110_11_022107.mp3 | full transcript on page, chapters incl. "6. Social Emotions and Altruism [00:36:29]" |

- No paywall, login, or account requirement appears on either page (also
  confirmed by the fetch tool's paywall check: Is paywall: false). The two mp3
  files downloaded anonymously and probed clean — anonymous AUDIO access is
  verified for these two sessions. The YouTube embeds are PRESENT in the raw
  HTML; whether those specific videos play anonymously was NOT tested this
  pass — video playback remains unverified.
- License: each page footer states "Most of the lectures and course material
  within Open Yale Courses are licensed under a Creative Commons
  Attribution-Noncommercial-Share Alike 3.0 license" — the statement is
  CONDITIONAL ("Most"; third-party content excluded per the OYC Terms of Use);
  no lecture-specific licensing conclusion is drawn here.
- Lecture 1's page also prints its assignment (Gray, Psychology 5e ch. 1;
  Stanovich in The Norton Psychology Reader, pp. 27-37) and a PowerPoint-slides
  PDF download — the pages are full course-session records, not stubs.

### Measured durations (mp3 downloads, ffprobe)

| File | Duration (ffprobe format.duration) | H:MM:SS |
|---|---|---|
| psyc110_01_011707.mp3 (L1 Introduction; 28,249,821 bytes) | 1765.486 | 0:29:25 |
| psyc110_11_022107.mp3 (L11 Emotions Part I; 50,933,302 bytes, 128 kbps CBR) | 3183.203 | 0:53:03 |

Bound: only these two sessions are measured. The remaining 22 listed sessions
(the course page's 24 sessions include 2 exams) are NOT measured in this pass;
the per-lecture measurement method (anonymous mp3 download + ffprobe, ~30–50 MB
per file) is established and repeatable. These are MP3 durations — they must
not be transferred to video records without checking audio/video
correspondence.

## (b) MIT OCW 9.00 — container durations MEASURED for the eight matrix-credited lectures (entry 1 measurement gap closed for the credited set)

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

- Sum of the eight credited lectures: 38,262.5 s ≈ **10.63 measured hours of
  AVAILABLE MEDIA**. These are container runtimes, not qualifying assigned
  instruction hours: content inspection and assignment mapping (which segments
  teach the mapped D1 outcomes) remain the owner's work; count L2 once even
  though it supports both the affect and motivation strands.
- The pool's "counting hours from file size would be estimation and is not
  done" is superseded by this measured method; the measured values above are
  exact container durations.
- Remaining unmeasured in the course: the other sessions listed on the index
  (the index lists 23 titled lecture-audio items plus a midterm review; the
  index itself does not establish how many are guest lectures) — measure on
  demand if the owner adds rows.

## Open items (not tested this pass)

- Coursera "The Science of Well-Being" (entry 2, CATEGORY C): not tested this
  pass; the pool's course-level free-tier access uncertainty is UNCHANGED.
- edX "Science of Happiness" (entry 28): audit-scope statement already
  directly fetched by the owner (GGSC quote); the owner ruling on whether
  time-limited partial audit access qualifies as degree content is still owed —
  not a verification gap, an owner decision (unchanged from the pool record).

## Outcome for the pool owner (deg-arch-d2-psychdim holder)

- Entry 27 (Yale OYC PSYC 110): anonymous audio downloads and on-page
  transcripts are now VERIFIED for two sessions (L1, L11), with YouTube embeds
  present but playback untested — the owner may narrow the qualifier from
  "video access unverified by direct fetch" to reflect exactly that; measured
  mp3 durations: L1 0:29:25, L11 0:53:03.
- Entry 1 (MIT OCW 9.00): the eight matrix-credited lectures now have measured
  container durations (sum ≈ 10.63 h of available media); the owner may replace
  the "durations not yet measured" clause with these values, keeping assigned
  instruction hours uncounted pending content inspection and assignment
  mapping.
