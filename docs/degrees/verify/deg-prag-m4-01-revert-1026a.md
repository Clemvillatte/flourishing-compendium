# DEGREE VERIFICATION RECEIPT — PRAG-M4-01 stale-fix revert (routed repair done under Pages urgency)

- Receipt id: deg-prag-m4-01-revert-1026a
- Agent: worker-pplx-schema-1026a (deg-verify-b baton)
- Date: 2026-10-26 (push time = this receipt's git commit)

## Context

The deg-integrate lane flagged (deg-prag-m4-01-defect-1026a.md, commit
6b6748c) that deg-fix-schema's commit 2cfa093 applied fix-list item 2
AFTER deg-fix-content had retracted it (904b02b): the 476-word "Nature of
Deliberation" passage was wrongly added to PRAG-M4-01 (How We Think) when
it belongs to PRAG-M4-02 (Human Nature and Conduct), which already carries
it. The defect sat on origin/main with a Pages deploy pending ("revert
before next Pages run"), and the schema lane was mid-flight on unrelated
renderer work (42d2a3e40). As deg-verify-b I independently confirmed the
defect against the m4 doc (Reading A = How We Think line 50; Reading B =
Human Nature and Conduct line 86; "Reading A 778 words, Reading B 476
words" line 358) and executed the exact repair the defect receipt
specified, to beat the next Pages run.

## Repair applied (surgical, both layers)

- docs/degrees/integration/deg-wol-pragmatism-assignments.json: PRAG-M4-01
  locator restored to the pre-2cfa093 text — "One contiguous passage of 778
  words (about 6 minutes at 130 words per minute) from 'Another instance,
  commonplace also, yet not quite so trivial, may enforce this lesson' to
  'is wholly futile'" (verified identical to 2cfa093^ by git show).
- site/assets/app.js: the same single locator string replaced in the data
  block (exactly one occurrence; no other bytes touched).
- docs/degrees/integration/schema-lane-fix-list-1026a.md: item 2 annotated
  RETRACTED — DO NOT APPLY, citing the retraction and this revert, so a
  future replay of the fix list cannot reintroduce the defect (same risk
  class as the replay hazard in deg-phasea-behavior-qc-1026a.md).
- PRAG-M4-02 untouched (correct); fix-list items 3 and 5 untouched
  (correctly applied per the defect receipt).

## Validation

- Assignments JSON parses; node --check passes; degrees_learner_audit.py
  reports 0 defects; academy-display test suite 7/7 pass.
- Data block re-inspected after the edit: PRAG-M4-01 carries only the
  778-word Reading A passage; PRAG-M4-02 keeps the 476-word Reading B.

Note for the schema lane: the revert intentionally goes through both the
assignments JSON and the data block so the next apply-script replay
starts from the corrected input; the fix-list item is marked retracted,
but a Markdown annotation does not enforce replay safety (the replay
hazard filed in deg-phasea-behavior-qc-1026a.md stands).

No modules, ledgers, band files or shared boards edited by this receipt
beyond the appended OWNER-BOARD line.

## Addendum (same agent, 2026-10-26 12:08Z; wording corrected 12:24Z)

Live-site closure: the defective PRAG-M4-01 state was deployed — the live
check at 12:07:29Z still showed "Two measured passages", and the revert
had landed on Pages by the 12:08:35Z check, serving the correct single
778-word Reading A passage. The exact exposure interval is unknown (only
the two observation times are established). Both the assignments JSON and
the data block were reverted; the fix-list item is marked retracted on
origin (replay safety is not enforced by annotation — see the note
above).
