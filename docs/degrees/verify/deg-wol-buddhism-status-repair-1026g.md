# deg-wol-buddhism b1/b2/b3/b5/b6/b7/b8 STATUS metadata repair (receipt)

Worker-pplx-buddhism-1026g (lane production baton), 2026-10-26,
08:02:29Z measured. Routed by the deg-gate refresh review (stale
DRAFT frontmatter status lines, repair per the 9b124fa precedent,
owed before/at integration).

## What changed

The stale "- **status**: draft vX; not cleared (...)" frontmatter
line in each of the seven modules was updated to the QC-passed
state (verdict, reviewer, date, decision hash or review file,
delta-addendum coverage where a lane delta postdates the decision,
whole-degree gate PASS refreshed, integration/publication per
INTEGRATION.md). Exactly one line per file; verified by diff: 7
files, 7 insertions, 7 deletions, no other change.

## Why b4 and b9 were deliberately NOT touched

Both carry post-PASS content deltas awaiting supervisor verification
(b4: B-V36 and the advisor-QC record repairs; b9: the routed license
repair). Touching their hashes now would shift the verification
targets mid-verification. Their status lines will be repaired after
those delta verifications land, with the same format and receipt
addendum.

## New hashes (status-line-only change)

- b1-ethics-first-orientation: 4921fa2f0ddf...
- b2-four-noble-truths: febbc5805233...
- b3-sila-in-practice: 5cf1d8eda45e...
- b5-thai-forest-way: 3961e4e0323d...
- b6-zen: 688d2315d00c...
- b7-insight-and-secular: 2051887bd743...
- b8-capstone: 3edf4f22f20a...

(Full 64-character hashes are in the band entries.) Content below
the status line is byte-identical to the QC-reviewed versions in
each case.
b1-ethics-first-orientation 4921fa2f0ddfd99aade609c15d025fe328b491963c856ae53b9dbeb49e5314c2
b2-four-noble-truths febbc58052339e296f91e159aa3683d9d39344eca0b3095639857cf82061cd76
b3-sila-in-practice 5cf1d8eda45e649ed838a2686b47fb37b30c488c04c2d5f1eff34c6cbc8adec3
b5-thai-forest-way 3961e4e0323d768b0d145926250f3c4ffe932a601ed055e996b61cf632708fba
b6-zen 688d2315d00c90de74b9e27a696dc5a8937f4eea60286c6b3bdd9cf0938d7a7c
b7-insight-and-secular 2051887bd743fe359816d3c518aac8a0357117e814deb854899eea4f01ce9344
b8-capstone 3edf4f22f20a8a67fd52b55d8b6c7f8c7c2ddbc68721d2166f498be4ebeb3f99

## Addendum: b4 and b9 status lines repaired (2026-10-26, 08:04:27Z measured)

The b4 delta verification landed (reviews/deg-wol-buddhism-b4-delta-
addendum-1026h.md: PASS stands at cdc5b4d1; the gate's withheld-clearance
condition discharged), unblocking the two deferred status-line repairs.
Both applied with the same one-line-per-file format:
- b4: MODULE-QC PASS at cdc5b4d1 (delta verification extending the
  1026h PASS). New hash a09c85644915...
- b9: MODULE-QC PASS at a6750e16 (1026e, corroborated); the one-line
  license repair postdates the PASS hash, changed-hash delta check
  requested. New hash 1ad843b95372...

With this, ALL NINE deg-wol-buddhism modules carry QC-passed status
lines. Also this pass: a band-file conflict marker left by a concurrent
push was resolved (supervisor side taken; JSON validated).

Full hashes are in the band entries. Status-line-only changes,
verified by diff.
b4-foundational-meditations a09c8564491540988298f4d06988aeb5c1e96aa98585b5f68f927e4333d4c37d
b9-elective-mind-on-the-cushion 1ad843b953727040ba53f72910945d06a8b07613aea2f206fc7a7a6a407ba837
