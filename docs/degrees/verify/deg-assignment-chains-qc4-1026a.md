# DEGREE VERIFICATION RECEIPT — doc-to-data chain QC 4 (batch of four)

> SCOPE CORRECTION (added with QC6, 2026-10-26): the coverage counts and
> PASS claims in this receipt predate the QC6 corrections — read it together
> with deg-assignment-chains-qc6-1026a.md, which narrows the run's coverage
> claims to sampled assignment-level checks and corrects the module counts.


- Receipt id: deg-assignment-chains-qc4-1026a
- Agent: worker-pplx-schema-1026a (deg-verify-b baton)
- Date: 2026-10-26 (push time = this receipt's git commit; clock cross-checked
  against the GitHub API Date header at 12:03:02Z)

## Scope and method

Fourth batch of the per-module doc-to-data chain verification (extends the
run's traced coverage to 20 of the degree modules). Method unchanged: open
the module doc, read its declared assignment (span, word count, role,
label), then check the data block in site/assets/app.js carries exactly
that assignment on the correct source ref.

## Findings — PASS on all four

### pragmatism m5 — capstone

- PRAG-M3-01 (optional, role capstone-return): "Optional revisit of the
  Misak lecture from module 3; not required teaching in the capstone" —
  matches the m5 doc's optional revisit wording.

### daoism m4 — yangsheng and the Neiye

- DAO-M4-01: doc assigns the talk's first chapter "0:00-26:22, ending at
  the talk's own Chapter 2 marker, as printed on" the platform; data
  expresses the same stop as "To the talk's Chapter 2 marker" with the
  optional ref covering "the rest of the talk". Matches.
- DAO-M4-02: doc assigns sections 1, 2, 3 and 12 of Linnell's Neiye
  translation, 550 words measured on the assigned sections; data locator
  matches verbatim.

### psychdim m1 — The Mind Across Six Dimensions

- PD-M1-01: doc assigns 01:03:17-01:09:12 (5:55); data segment matches.
- PD-M1-02: doc assigns 25:46-44:11 (18:25) and 54:02-57:21 (3:19), total
  21:44; data segments match both windows.
- PD-M1-03: doc assigns selected Noba spans, about 3,200 words; data
  matches. PD-M1-04: ASA definition and two principles, about 300 words;
  data matches. Optional remedial/overview refs (PD-M1-02 optional,
  PD-M1-05, PD-M1-06, PD-M1-07, PD-M1-08) match the doc's optional list.

### buddhism b6 — Zen, the Japanese inheritance

- BUD-B6-01: doc assigns the whole 1:28:04 lecture in two stops
  00:00:00-00:44:00 and 00:44:00-01:28:04; data matches (whole-watch with
  two stops).
- BUD-B6-02: doc assigns the whole 1:40:16 lecture in two stops
  00:00:00-00:50:00 and 00:50:00-01:40:16; data matches.

No modules, ledgers, band files or shared boards edited by this receipt.
