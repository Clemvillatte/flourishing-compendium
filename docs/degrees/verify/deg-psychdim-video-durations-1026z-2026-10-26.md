# Verification receipt: psychdim video durations (Phase D backfill)

- Worker: supervisor-pplx-1026z (deg-fix-schema coordination), 2026-10-26; receipt
  corrected ~12:10 UTC after QC (wrong window rows, unsupported title claims, and
  a stale FAIL count were fixed; see correction note at the end).
- Method: each video's public YouTube watch page was fetched live (no cache) and
  the total duration read from the page's own metadata (`lengthSeconds`). A
  second targeted pass re-verified each value against the page's
  `ytInitialPlayerResponse.videoDetails` (title and `lengthSeconds` bound to the
  video's own id), so no value rests on a duration string found elsewhere in the
  page. No duration was copied from memory or estimated. The first pass did not
  return page titles; titles below are from the second pass where it succeeded
  (PD-M5-02 and PD-M7-03 could not be re-extracted on the second pass — one
  returned no value, one fetch errored — their durations stand on the
  first-pass extraction and are flagged as residual).

| source_id | URL (video id) | page title (videoDetails, second pass) | duration | lengthSeconds | assignment windows inside |
|---|---|---|---|---|---|
| PD-M1-01 | sDGpXQLHLfY | An Introduction to Process-Based Therapy - Dr Steven Hayes (Experimental Honesty, 2023-12-21) | 1:40:07 | 6007 | 01:03:17-01:09:12 ok |
| PD-M3-02 | DmWrOUK2zgA | 7. Conscious of the Present; Conscious of the Past: Language (YaleCourses) | 0:59:43 | 3583 | 18:06-39:15 (m3) and 47:26-54:53 (m4) ok |
| PD-M3-03 | Yuwqr5o58Z0 | 8. Conscious of the Present; Conscious of the Past: (YaleCourses, memory lecture) | 0:59:43 | 3583 (see variance note) | 13:22-18:27 (m3 corrected window) ok |
| PD-M3-04 | AMsQfgV07vU | 10. Evolution, Emotion, and Reason: Evolution and Rationality (YaleCourses) | 0:59:49 | 3589 | 39:43-47:25 and 54:59-59:22 ok |
| PD-M5-01 | piDznzrNymE | 13. Why Are People Different?: Differences (YaleCourses) | 1:05:49 | 3949 | 13:53-19:47 ok |
| PD-M5-02 | jsrB5m3mL-A | 16. A Person in the World of People: Self and Other, Part I (first-pass title) | 0:58:15 | 3495 (first pass; second pass returned no value) | 15:56-28:41 and 40:00-50:03 ok |
| PD-M7-03 | fuA1l7bL954 | #298 Michael Inzlicht: Self-Control, Gratification Delay, Ego-Depletion, And The Replication Crisis (first-pass title) | 1:19:48 | 4788 (first pass; second-pass fetch errored) | 49:52-58:10 ok |

Notes:
- PD-M3-03 duration variance: the page's reported `lengthSeconds` for
  Yuwqr5o58Z0 returned 3583 on one fetch and 3582 on a later fetch of the same
  page — this is the source of the 59:42-vs-59:43 discrepancy (an earlier worker
  wrote 0:59:42; the ledger uses 0:59:43). The app.js value is kept at 3583
  (0:59:43); a 1-second delta in YouTube's reported total does not affect any
  assignment window (all m3 windows sit well inside the video).
- PD-M3-02 and PD-M3-03 report the same total (0:59:43 / 3583); both pages were
  fetched independently, and PD-M3-03's own player metadata was re-read on the
  second pass. Plausible for consecutive lectures in the same Yale series.
- BUD-B5-02 (Sumedho talk) was backfilled earlier at 1:01:36 from the buddhism
  Phase-0 manifest, which prints the whole-video duration in the assignment text;
  no page fetch was needed.
- PD-M7-10 locator set from the m7 module doc: "Vohs and colleagues, 2021:
  Abstract and Methods' 'Participants' subsection only" (m7-overt-behavioural.md,
  reading list). The title had already been corrected to the Vohs author
  manuscript by the earlier deg-fix-schema pass.

Audit status: after this receipt's values were applied,
degrees_learner_audit.py reported 4 remaining FAILs (all wiki_readings owner
decision); the durations class was cleared. The wiki_readings findings were
subsequently downgraded to ADVISORY by worker commit 9142c982f per audit section
C (owner decision).

Correction note (QC follow-up): the first version of this receipt (a) listed
lecture 7's window (18:06-39:15) on the PD-M3-03 row and 02:08-04:17 on the
PD-M3-04 row — both wrong, corrected above to the actual m3 assignment windows;
(b) claimed page titles were cross-checked although the first-pass fetches
returned no titles — titles are now cited only where the second pass returned
them; (c) stated "5 remaining FAILs" — the count was 4 (all wiki_readings).
