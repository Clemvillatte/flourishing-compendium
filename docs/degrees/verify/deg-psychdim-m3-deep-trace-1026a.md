# Deep trace — deg-psychdim m3 (cognitive) — doc → manifest → published

Date: 2026-10-26. Lane: deg-fix-content (worker-pplx-degfixcontent-1026a).
Method: value-by-value comparison of the m3 doc
(docs/degrees/modules/deg-psychdim/m3-cognitive.md) against
docs/degrees/integration/deg-psychdim-manifest.json (mod-pd-3) against the
published app.js mod-pd-3 media arrays. This module was chosen because its
video windows were this wave's defect class (PD-M3-03 and PD-M3-04 both
carried wrong windows earlier in the wave).

## Comparison

- PD-M3-01 (Bloom lecture 4): doc line 47 prints 14:25-17:39 (3:14) and
  31:18-33:49 (2:31); manifest identical; published segments identical.
  MATCH.
- PD-M3-02 (Bloom lecture 7): doc line 51 prints 18:06-39:15 (21:09);
  manifest identical; published identical (this is m3's OWN window — the
  m4 retrieval reuse is separately and correctly narrowed to 47:26-54:53
  under mod-pd-4, verified in the m4 trace). MATCH.
- PD-M3-03 (Bloom lecture 8): doc line 54 prints 13:22-18:27 (5:05,
  meaning and organisation); manifest identical (the old data-block window
  is recorded only as the corrected error note); published segments
  13:22-18:27. MATCH — the earlier wrong window is gone.
- PD-M3-04 (Bloom lecture 10): doc line 56 prints 39:43-47:25 (7:42) and
  54:59-59:22 (4:23); manifest identical (including the note that the
  intervening base-rate/availability examples are NOT assigned); published
  segments identical, note identical. MATCH — both windows present, the
  earlier omission fixed.
- PD-M3-05 (Bouton, Noba): doc line 62 assigns the opening summary from
  "Basic principles of learning" to "classical and operant conditioning"
  plus the one paragraph beginning "Learning depends on such a surprise";
  manifest identical; published locator identical. MATCH.
- PD-M3-06 (McDermott and Roediger, Noba): doc lines 68-70 assign the
  opening summary from "'Memory' is a single term" through "among other
  types" plus "Three Stages of the Learning/Memory Process" stopping
  before "Encoding"; manifest identical; published identical. MATCH.
- PD-M3-07 (Bazerman, Noba): confirmed data-block extra (no assignment in
  any psychdim module doc); manifest records it as note-only, not
  published; correctly absent from the published state. MATCH.
- PD-M3-08 (Ehring 2021): doc line 73 assigns from the opening paragraph
  to the end of "Importantly, RNT is characterized by its process
  features, not its content" then the paragraph beginning "In his
  influential theoretical model, Watkins"; manifest identical; published
  identical. MATCH.

## Verdict

PASS. All eight mod-pd-3 entries trace value-by-value across the three
layers, including both formerly-wrong video windows (PD-M3-03 and
PD-M3-04), now correct in the published state.
