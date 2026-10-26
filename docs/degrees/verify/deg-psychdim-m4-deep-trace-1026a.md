# Deep trace — deg-psychdim m4 (attentional) — doc → manifest → published

Date: 2026-10-26. Lane: deg-fix-content (worker-pplx-degfixcontent-1026a).
Method: value-by-value comparison of the m4 doc
(docs/degrees/modules/deg-psychdim/m4-attentional.md) against
docs/degrees/integration/deg-psychdim-manifest.json (mod-pd-4) against the
published app.js mod-pd-4 media arrays. This module was chosen because it
carried this lane's open extra-segment flag (fix-list item 4).

## Renderer note (verified this session)

The app.js renderer (`acadAssignmentText`) displays `segments` ("Watch …"),
`locator` ("Read: …") and `note` — the `assignment` field is never
rendered. The fix list therefore correctly targets `locator` and
`segments`. A sweep of all four degrees' published `note`/`locator` fields
for internal review language (VERIFIED/CORRECTED/SCHEMA LANE/data
block/manifest/…) found zero leaks.

## Comparison (all eight sources, including the revisit)

- PD-M4-01 (Posner, gocognitive video): doc line 48 prints 03:06-14:52;
  manifest identical; published segments identical. MATCH.
- PD-M4-02 (Posner, APS video): doc line 52 prints 05:24-07:42; manifest
  identical; published identical. MATCH.
- PD-M3-02 (Bloom lecture 7 revisit): doc line 55 prints 47:26-54:53 ONLY
  for the m4 retrieval; manifest entry says the same (with the m3 window
  named only as clarification); published segments now carry ONLY
  47:26-54:53. MATCH — the extra 18:06-39:15 segment that this lane
  flagged (fix-list item 4) has been REMOVED by the schema lane; the flag
  is resolved.
- PD-M4-03 (Davidson with Huberman video): doc line 61 prints 02:08-04:17;
  manifest identical; published identical. MATCH.
- PD-M4-04 (Posner, Rothbart and Ghassemzadeh 2019): doc line 78 assigns
  Table 1 as a reference, Table 2 with caption, the first paragraph under
  'Attentional Pathologies'; manifest identical; published locator
  identical. MATCH.
- PD-M4-05 (Posner 2023): doc line 76 assigns section 4 'Interaction of
  Networks' first paragraph only, through 'largely different functions';
  manifest identical; published identical. MATCH.
- PD-M4-06 (Lippelt, Hommel and Colzato 2014): doc line 91 assigns the
  Abstract plus the single Introduction paragraph from 'Even though
  numerous studies' through 'attentional control, conflict monitoring,
  and creativity'; manifest identical; published identical. MATCH.
- PD-M4-07 (Fan et al. 2002 ANT): doc line 82 assigns journal pages 342-343,
  the three complete Results paragraphs; manifest identical; published
  identical. MATCH.

## Verdict

PASS. All seven mod-pd-4 sources trace value-by-value across the three
layers. Fix-list item 4 (the extra m3 segment on PD-M3-02) is RESOLVED in
the published state; the fix list has been updated. The remaining open
schema-lane items are 3 (PD-M2-04 locator), 5 (BUD-B2-02 word label) and
6 (re-add PD-M1-07 to m8).
