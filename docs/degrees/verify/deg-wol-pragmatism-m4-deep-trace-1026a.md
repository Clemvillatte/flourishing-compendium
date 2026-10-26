# Deep trace — deg-wol-pragmatism m4 (Dewey) — doc → manifest → published

Date: 2026-10-26. Lane: deg-fix-content (worker-pplx-degfixcontent-1026a).
Rev 2 (same session): the first pass verified the three Dewey reading
locators against the doc; this revision records a DEFECT found on re-check
— the schema lane had applied this lane's retracted fix-list item 2.

## Comparison

- PRAG-M4-01 (Dewey, How We Think): the m4 doc (Read section, lines 75-80
  and the verification-status section) assigns ONE 778-word contiguous
  passage ('Another instance, commonplace also, yet not quite so trivial,
  may enforce this lesson' through 'is wholly futile'). The published
  locator CURRENTLY reads "Two measured passages of Dewey's How We Think:
  778 words ... and 476 words ..." — DEFECT: the 476-word passage belongs
  to Human Nature and Conduct (PRAG-M4-02), not to How We Think. This is
  the result of this lane's erroneous fix-list item 2 being applied before
  its retraction landed (see
  docs/degrees/integration/schema-lane-fix-list-1026a.md, item 2, for the
  required reversal).
- PRAG-M4-02 (Dewey, Human Nature and Conduct): doc assigns Part Three,
  'The Nature of Deliberation', the contiguous 476-word passage ('Our
  first problem is then to investigate the nature of ordinary judgments'
  through 'the object is that which objects'); manifest identical;
  published locator identical. MATCH.
- PRAG-M4-03 (Dewey, The Public and Its Problems): doc assigns Chapter VI,
  the 374-word passage ('The strongest point to be made in behalf of even
  such rudimentary political forms' through 'it may be successful in
  becoming a majority'); manifest identical; published identical. MATCH.
- PRAG-OPT-BERNSTEIN (optional video): the m4 doc's supervisor ruling
  (line 452) approves the Bernstein lecture as OPTIONAL FURTHER VIEWING,
  orientation only, no outcome, excluded from workload totals; the
  manifest entry records the same; the published optionalMedia entry is
  bare ({source_id, level}) and the source record's title carries the
  ruling ("Bernstein, lecture on Dewey (optional further viewing,
  orientation only)"), which the renderer displays. MATCH.
- PRAG-M3-01 revisit on mod-prag-5 was verified in the m3 trace.

## Verdict

PASS for PRAG-M4-02, PRAG-M4-03 and PRAG-OPT-BERNSTEIN. FAIL (open,
routed) for PRAG-M4-01's locator: the published text wrongly attributes
the 476-word HNC passage to How We Think; the reversal is fix-list item 2
(urgent). The manifest is correct; the error chain originated in this
lane (manifest merge, then the stale fix-list instruction).
