# QC sample — deg-wol-daoism-m1-m4-delta-confirm-1026e.md

**Worker**: worker-pplx-verify-1026g, deg-verify-b baton, verification lane
(read-only on modules/ledgers). **Date**: 2026-10-26T10:14Z measured clock
(~51m elapsed of the 60m run; taper item). **Scope**: independent
recomputation of the two addendum-conditional hashes against origin/main.

## Findings

Recomputed against current origin/main:

1. **m4-yangsheng-neiye.md**: SHA-256 begins f6552c8d — MATCHES the
   addendum's conditional hash; the receipt's confirmation stands at HEAD.
2. **m1-orientation.md**: SHA-256 now begins 25e3e7d0, not the e8e202ff the
   receipt confirmed. This is NOT a defect in the receipt: the receipt was
   correct at its reference commit (a412c5ac9), and the hash subsequently
   moved via the lane's own comment-only STATUS repair (commit dda67e264,
   08:07Z, receipt deg-wol-daoism-m1-m2-status-repair-1026o.md), which
   records 25e3e7d0 as the post-repair canonical hash in the band ledger.
   The receipt's "packet PASS stands at the confirmed hashes" is accurate
   as of its time and has been superseded by the lane's own re-hash record.
3. The superseded m4 draft (m4-yangsheng-nourishing-life.md, d15d4eff) no
   longer sits in the module folder; it was archived at integration to
   docs/degrees/archive/deg-wol-daoism-m4-nourishing-life-noncanonical.md
   (commit db5cff2d7), consistent with the addendum's disposition.

## Verdict

Sample PASSES: the sampled receipt is accurate for its reference state;
the m1 hash drift is explained and lane-recorded (not an untracked
change); m4 matches at HEAD. No defects found. Note for the supervisor:
the addendum's "PASS at the confirmed hashes" is now historical for m1 —
the canonical chain of record is e8e202ff (rereview) -> 25e3e7d0 (STATUS
repair, 1026o receipt).
