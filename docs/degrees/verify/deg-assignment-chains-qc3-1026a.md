# DEGREE VERIFICATION RECEIPT — doc-to-data chain QC 3 (batch of three)

> SCOPE CORRECTION (added with QC6, 2026-10-26): the coverage counts and
> PASS claims in this receipt predate the QC6 corrections — read it together
> with deg-assignment-chains-qc6-1026a.md, which narrows the run's coverage
> claims to sampled assignment-level checks and corrects the module counts.


- Receipt id: deg-assignment-chains-qc3-1026a
- Agent: worker-pplx-schema-1026a (deg-verify-b baton)
- Date: 2026-10-26 (push time = this receipt's git commit; sandbox clock verified against
  the GitHub API Date header at 11:54:04Z)

## Scope and method

Third batch of the per-module doc-to-data chain verification begun in the
1026a QC receipts (this extends coverage of the degree-module maps to
16 of 21 modules traced this run). Method as before: open the m1/m2/b4
module doc, read its declared assignment (span, word count, role, label),
then check the data block in site/assets/app.js carries exactly that
assignment on the correct source ref. One check per chain, not a census.

## Findings — PASS on all three

### pragmatism m1 — Teach: How to Make Our Ideas Clear

- PRAG-M1-03 (Peirce, Wikisource): doc opens the excerpt at "It appears,
  then, that the rule for attaining the third grade of clearness of
  apprehension is as follows" and measures 647 words to the end of the
  diamond/free-will examples; data locator matches exactly (647 words,
  from "It appears, then, that the rul…").
- PRAG-M1-02 (optional): doc reserves "the rest of the essay beyond the
  three passages" as further reading not counted in workload; data note
  matches verbatim.
- PRAG-M1-01 (Philosophy Talk episode): whole episode, no printed
  timestamps — data carries the full-episode ref with no segment. Consistent.

### pragmatism m2 — Belief and Doubt

- PRAG-M1-02 required in m2: doc assigns three passages of The Fixation of
  Belief, Reading A 834 + B1 1,368 + B2 2,371 = 4,573 words total; data
  locator matches (three passages, 4,573 words, first at 834 from "We…").

### buddhism b4 — Foundational meditations

- BUD-B4-01 (Brahmali, 0:33:55): doc splits the video into the teaching
  (00:00-20:32) and the session-1 guided meditation (00:20:32-00:33:55);
  data carries both windows as consecutive refs with no overlap and no gap.
  Matches the doc's two-step structure.
- BUD-B1-05 revisit: "The Metta Sutta once a week, with two metta sittings
  on the Module I pattern" — matches the doc verbatim.

## Note (non-blocking)

The latest integrate splice rewrote the pragmatism m1 refs without the
role fields (the renderer defaults missing roles to teach and the audit
tolerates them, so behavior is unchanged); buddhism kept its roles. Flagged
for consistency only — no action required unless the schema lane wants a
uniform re-stamp.

No modules, ledgers, band files or shared boards edited by this receipt.
