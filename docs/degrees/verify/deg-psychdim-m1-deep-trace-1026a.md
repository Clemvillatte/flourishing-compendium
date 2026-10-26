# Deep trace — deg-psychdim m1 (orientation) — doc → manifest → published

Date: 2026-10-26. Lane: deg-fix-content (worker-pplx-degfixcontent-1026a).
Method: value-by-value comparison of the m1 doc
(docs/degrees/modules/deg-psychdim/m1-orientation.md) against
docs/degrees/integration/deg-psychdim-manifest.json (mod-pd-1) against
the published app.js mod-pd-1 media arrays.

## Comparison

- PD-M1-01 (Hayes video): doc line 58 assigns 01:03:17-01:09:12 (5:55);
  manifest identical; published segments identical. MATCH.
- PD-M1-02 (Sainani video): doc line 186 assigns 25:46-44:11 (18:25) and
  54:02-57:21 (3:19); manifest identical plus the OPTIONAL remedial clip
  03:29-09:21; published required entry carries the two assigned windows
  and a separate optional entry carries the remedial clip with its note.
  MATCH.
- PD-M1-03 (Smith, Noba): doc line 229 assigns the selected spans (about
  3,200 words); manifest identical; published locator identical (with the
  span boundaries named). MATCH.
- PD-M1-04 (ASA p-Values): doc line 220 assigns "What is a p-Value?" and
  principles 2 and 5 (about 300 words); manifest identical; published
  identical. MATCH.
- PD-M1-05 (Hofmann and Hayes 2024): optional text reference ("Opening
  overview"); manifest optional; published optionalMedia "Opening
  overview". MATCH.
- PD-M1-06 (Maitland 2024): optional "Section 1.4 only"; manifest
  identical; published identical. MATCH.
- PD-M1-07 (Woolley et al. 2025): optional further reading per the m1
  doc (its Step 4 use is not required reading); manifest optional;
  published optionalMedia "Optional further reading". MATCH.
- PD-M1-08 (Greenland et al. 2016): cited in teaching prose, optional in
  the data block (acceptable per the manifest's analysis); published
  optional. MATCH.

## Verdict

PASS. All eight mod-pd-1 entries (plus the optional remedial clip) trace
value-by-value across the three layers.
