# Video-windows re-check — schema-aware (deg-fix-content, 2026-10-26)

This receipt records the corrected, schema-aware comparison of bounded
video assignments across the four degrees (deg-psychdim, deg-wol-daoism,
deg-wol-buddhism, deg-wol-pragmatism). An earlier blanket claim that "all
video windows match the verified manifests" was based on a VACUOUS check
(it filtered published entries on a `kind` field the published entries do
not carry, so zero entries were compared) and was withdrawn; this re-check
replaces it.

## Method

Published entries were identified as videos by the presence of a
`segments` array. Each was matched to the verified manifest entry for the
same (module, source_id), and the manifest's printed windows (extracted
from the assignment text) were compared to the published segments as
normalized (start_seconds, end_seconds) pairs. Optional and required
entries were compared separately against the manifest's optional/required
wording.

## Result

- 36 published segment-bearing references compared against the
  verified manifests. SCOPE LIMIT: the check selects entries that
  already carry `segments`, so it cannot detect a bounded assignment
  whose segments disappeared entirely; it is a match check on published
  windows, not an exhaustive completeness check. The expected-set
  completeness of bounded video assignments is covered instead by the
  per-module deep traces (27 receipts).
- ALL MATCH, including several sources whose published state splits a
  required window and an optional-remainder entry into two module-media
  entries (PD-M1-02 in mod-pd-1; DAO-M4-01 in mod-dao-4; BUD-B4-01 in
  mod-bud-4, whose two required segments are carried by two entries). These
  splits are correct: they mirror the manifest's required/optional wording.
- Two apparent mismatches were checker artifacts, not defects: M06-AF07's
  manifest text mentions a prose sub-citation window inside the assigned
  window, and PD-M3-03's manifest text records the OLD data-block window
  alongside the corrected one; the published segments carry the correct
  windows in both cases.
- DAO-M1-03's mod-dao-2 revisit entry publishes m1's three segments,
  matching the manifest's "REVISIT of the same segments as m1".

## Open item

mod-pd-4's PD-M3-02 carries TWO segments (47:26-54:53 and 18:06-39:15)
while the m4 doc assigns only the 47:26-54:53 window for the m4
retrieval; the second segment is m3's own assignment and is already
published under mod-pd-3. This is fix-list item 4 in
docs/degrees/integration/schema-lane-fix-list-1026a.md (schema lane).

## Verdict

PASS across all 36 compared assignments; one open extra-segment case
routed to the schema lane.
