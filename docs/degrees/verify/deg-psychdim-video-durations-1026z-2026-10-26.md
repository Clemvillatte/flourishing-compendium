# Verification receipt: psychdim video durations (Phase D backfill)

- Worker: supervisor-pplx-1026z (deg-fix-schema coordination), 2026-10-26 ~11:55 UTC
- Method: each video's public YouTube watch page was fetched live (no cache) and
  the total duration read from the page's own metadata (`lengthSeconds`); the
  page title was cross-checked against the ledger's source description, and
  each manifest assignment window was checked to fall inside the fetched
  duration. No duration was copied from memory or estimated.

| source_id | URL (video id) | page title (as fetched) | duration | lengthSeconds | windows inside |
|---|---|---|---|---|---|
| PD-M1-01 | sDGpXQLHLfY | Steven Hayes, An Introduction to Process-Based Therapy | 1:40:07 | 6007 | 01:03:17-01:09:12 ok |
| PD-M3-02 | DmWrOUK2zgA | Paul Bloom, Yale PSYC 110 lecture 7 | 0:59:43 | 3583 | 18:06-39:15 (m3) and 47:26-54:53 (m4) ok |
| PD-M3-03 | Yuwqr5o58Z0 | Paul Bloom, Yale PSYC 110 lecture 8, Memory | 0:59:43 | 3583 | 18:06-39:15 ok |
| PD-M3-04 | AMsQfgV07vU | Paul Bloom, Yale PSYC 110 lecture 10, Judgment | 0:59:49 | 3589 | 02:08-04:17 ok |
| PD-M5-01 | piDznzrNymE | 13. Why Are People Different?: Differences | 1:05:49 | 3949 | 13:53-19:47 ok |
| PD-M5-02 | jsrB5m3mL-A | 16. A Person in the World of People: Self and Other, Part I | 0:58:15 | 3495 | 15:56-28:41 and 40:00-50:03 ok |
| PD-M7-03 | fuA1l7bL954 | #298 Michael Inzlicht: Self-Control, Gratification Delay, Ego-Depletion, And The Replication Crisis | 1:19:48 | 4788 | 49:52-58:10 ok |

Notes:
- PD-M3-02 and PD-M3-03 share the same total duration (0:59:43); both pages
  were fetched independently and returned the same lengthSeconds (3583), which
  is plausible for consecutive lectures in the same Yale series.
- BUD-B5-02 (Sumedho talk) was backfilled earlier at 1:01:36 from the
  buddhism Phase-0 manifest, which prints the whole-video duration in the
  assignment text; no page fetch was needed.
- PD-M7-10 locator set from the m7 module doc: "Vohs and colleagues, 2021:
  Abstract and Methods' 'Participants' subsection only" (m7-overt-behavioural.md,
  reading list). The title had already been corrected to the Vohs author
  manuscript by the earlier deg-fix-schema pass.

Audit after this receipt's values were applied: degrees_learner_audit.py
reports 5 remaining FAILs (4x wiki_readings owner decision, PD-M7-10 locator
resolved here) — durations class cleared.
