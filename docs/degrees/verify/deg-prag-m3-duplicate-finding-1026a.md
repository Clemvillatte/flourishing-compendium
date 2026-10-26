# DEGREE VERIFICATION RECEIPT — pragmatism m3 newest-correction check; DEFECT FOUND

- Receipt id: deg-prag-m3-duplicate-finding-1026a
- Agent: worker-pplx-schema-1026a (deg-verify-b baton)
- Date: 2026-10-26 (push time = this receipt's git commit; sandbox clock verified
  against the GitHub API Date header at 11:54:04Z)

## Scope

Verification of the corrections carried by the deg-integrate reconciliation
pass (TASKBOARD 11:58Z entry, "Phase A data splice merged and reconciled"):
the PRAG-M3-04 B2/Lecture-II correction, the added PRAG-M3-05 (Reading B3),
and the PD-M3-03 segment removal.

## PD-M3-03 — correction CONFIRMED

The erroneous lecture-7 window is gone; the only segment is 13:22–18:27,
matching the m3 doc's assignment. Good.

## Pragmatism m3 — DEFECT FOUND (blocking the module's clean state)

Checked against the m3 doc (m3-truth-and-the-will-to-believe.md): Reading B1
is Lecture II (952 words); Reading B2 is Lecture II (264 words, "'…seem'
through 'our duty would be to shun truth, rather'"); Reading B3 is Lecture VI
(157 words, four selections, quoted in full in the module's own teaching).

The current data block for mod-prag-3 carries:

- PRAG-M3-03 (source: Lecture II URL) — assignment "Lecture II, two passages
  totalling 1,216 words" — B1+B2 consolidated; defensible, matches the doc.
- PRAG-M3-04 (source: Lecture II URL, title "James, Pragmatism Lecture II") —
  assignment "Lecture VI, four short selections totalling 157 words" — WRONG
  TWICE: the assignment text is Reading B3's Lecture VI content while the
  source record points at Lecture II, and the same Reading B3 assignment is
  already correctly carried by PRAG-M3-05 (source: Lecture VI URL, "Reading
  B3, 157 words, the four selections quoted in the Step 2 teaching").
- PRAG-M3-05 — correct pairing (Lecture VI source + Reading B3 assignment);
  minor: its level is "Foundations" while the module's other readings are
  "Intermediate".

So the module lists Reading B3 twice (once with a mismatched Lecture II
source), and Reading B2's own bounded assignment ('…seem' through 'our duty
would be to shun truth, rather', 264 words) is no longer carried by any ref
as a distinct assignment — only inside PRAG-M3-03's merged 1,216-word
description.

### Why the gate did not catch it

The audit's duplicate checks key on source_id and canonical_url; PRAG-M3-04
(Lecture II URL) and PRAG-M3-05 (Lecture VI URL) differ on both, and the
same-module case with two distinct source records is not cross-checked. This
is a gate blind spot worth a schema-lane decision: same-module refs whose
assignment TEXTS describe the same reading.

### Suggested repair (for the schema/integrate lane to route)

Either (a) PRAG-M3-04 becomes the distinct Reading B2 entry it was meant to
be (Lecture II, 264 words, the doc's closing span) with PRAG-M3-03 reverted
to B1's 952 words; or (b) PRAG-M3-04 is removed as a duplicate of PRAG-M3-05
and the B1+B2 merge in PRAG-M3-03 is kept. Under either route PRAG-M3-05's
level should match the module's other readings.

No module, ledger, band or shared board edited by this receipt; the finding
is flagged to the schema lane via the OWNER-BOARD.
