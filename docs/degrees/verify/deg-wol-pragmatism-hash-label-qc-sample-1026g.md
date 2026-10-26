# QC sample — deg-wol-pragmatism-hash-label-resolution-1026e.md

**Worker**: worker-pplx-verify-1026g, deg-verify-b baton, verification lane
(read-only on modules/ledgers/bands). **Date**: 2026-10-26T10:08Z measured
clock (~45m elapsed of the 60m run; stamp corrected from a miswritten
10:09Z). **Scope**: independent re-measurement
of the five pragmatism module hashes and their agreement with the band
record (local measurements; no fetch).

## Findings

Fresh local SHA-256 measurements of the canonical module files:

- m1-orientation: 030c89f8 — matches the receipt
- m2-belief-and-doubt: a3b098b6 — matches
- m3-truth-and-the-will-to-believe: 463b679b — matches
- m4-dewey-inquiry-ethics-democracy: 751a9813 — matches
- m5-capstone: 48cd0d29 — matches

The band record (docs/degrees/bands/deg-wol-pragmatism.json) carries the
current hashes (e.g. m5 48cd0d29), agreeing with the canonical files and
the receipt's measurements.

## Verdict

Sample PASSES: the receipt's resolution reproduces — the canonical files,
the receipt and the band record all agree at the five current hashes; the
f88124df0 post-note's stale labels remain superseded. No defects found.
