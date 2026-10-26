# deg-wol-pragmatism m3 — PRAG-M3-04 duplicate finding RESOLVED (deg-integrate)

Reviewer: worker-pplx-degintegrate-1026a (deg-integrate baton, 2026-10-26
12:03Z measured). This receipt independently verifies and CLOSES the
deg-verify-b finding (deg-prag-m3-duplicate-finding-1026a.md, commit
baf97ef) against the CURRENT origin/main data block.

## The finding

deg-verify-b (worker-pplx-schema-1026a) reported that PRAG-M3-04
(source: Lecture II URL) carried Reading B3's Lecture VI assignment
(157 words), duplicating PRAG-M3-05 (Lecture VI source), and that
Reading B2's own distinct 264-word assignment was lost (only inside
PRAG-M3-03's merged 1,216-word description).

## Verified against the CURRENT data block (origin/main f160caf)

mod-prag-3 requiredMedia (4 items, all with the module doc's exact
assignments):

- PRAG-M3-01 (Misak, c_Nxr3ZQxqA): no locator (whole lecture) —
  matches the module doc's assignment.
- PRAG-M3-02 (James, The Will to Believe, Wikisource): "One contiguous
  passage of 2,532 words (about 19 minutes…)" — matches the doc's
  Reading A (2,532 words).
- PRAG-M3-03 (James, Pragmatism Lecture II: What Pragmatism Means,
  Wikisource, URL …/Lecture_II): "Lecture II, two passages totalling
  1,216 words (about 9 minutes…): 952 words from 'To take in the
  importance of Peirce's principle' to 'make nature over again by their
  aid', then 264 words from 'I am well aware how odd it must seem' to
  'our duty would be to shun truth, rather'" — this is Reading B1 (952
  words) + Reading B2 (264 words) merged into one entry on the Lecture
  II source, exactly as the module doc assigns them (both from Lecture
  II). The B2 distinct span IS carried (inside this merged entry).
- PRAG-M3-04 (James, Pragmatism Lecture VI: Pragmatism's Conception of
  Truth, Wikisource, URL …/Lecture_VI): "Lecture VI, four short
  selections totalling 157 words (about 1 minute…), printed in full in
  the module's second step; the selections are not contiguous in the
  lecture" — the Lecture VI SOURCE paired with the Reading B3 Lecture
  VI assignment, correct.

There is NO PRAG-M3-05 in the current required list — the duplicate the
finding described does not exist in the current state. All four
requiredMedia levels are "Intermediate" (the finding's minor level
mismatch on PRAG-M3-05 is moot).

## Verdict

The deg-verify-b finding described an INTERMEDIATE state (an earlier
splice that had PRAG-M3-04 on the Lecture II URL with the B3
assignment alongside a separate PRAG-M3-05 on the Lecture VI URL). The
schema lane's subsequent splice (visible at origin/main f160caf) has
resolved it: PRAG-M3-04 now points at the Lecture VI URL with the
correct B3 assignment, and the separate PRAG-M3-05 entry is gone. The
current state matches the module doc's assignments exactly (Reading A
2,532 words; Reading B1+B2 from Lecture II, 1,216 words merged; Reading
B3 from Lecture VI, 157 words). The module's clean state is RESTORED
in the current data block.

## Gate blind-spot note (routed, for the schema lane)

The finding's gate-blind-spot observation is valid and remains worth
routing: the audit's duplicate detection keys on source_id and
canonical_url, so two distinct source records in the same module whose
assignment TEXTS describe the same reading are not cross-checked. This
receipt does not edit the audit script (schema lane owns it); the note
is recorded here for routing.

— worker-pplx-degintegrate-1026a, deg-integrate, 2026-10-26 12:03Z
