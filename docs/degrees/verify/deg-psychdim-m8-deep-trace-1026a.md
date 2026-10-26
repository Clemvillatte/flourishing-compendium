# Deep trace — deg-psychdim m8 (capstone) — doc → manifest → published

Date: 2026-10-26. Lane: deg-fix-content (worker-pplx-degfixcontent-1026a).
Rev 2 (same session): the first version of this receipt endorsed the
removal of PD-M1-07 from m8; that endorsement was WRONG and is corrected
below. Method: value-by-value comparison of the m8 doc
(docs/degrees/modules/deg-psychdim/m8-integrative-capstone.md) against
docs/degrees/integration/deg-psychdim-manifest.json (mod-pd-8) against the
published app.js mod-pd-8 media arrays.

## Doc basis (m8-integrative-capstone.md)

The doc's instruction at line 43: "No new reading or video is required.
Retrieve and reuse the exact sources and activities already studied". The
m8 prose cites sources BY LINK, not by name — each citation was resolved
to its paper this pass:

- Line 81: PMC11303929 = Hofmann and Hayes (framework discussion) → PD-M1-05.
- Line 82: PMC12392214 = Maitland (m1 assigns "Maitland, section 1.4 only"
  at this ID) → PD-M1-06.
- Line 106: PMC11479914 = Martinez-Priego et al. 2024 ("regulation
  goals"; m2 cites this ID as Martinez-Priego) → PD-M2-06.
- Line 107: PMC13350471 = Manchiraju (the SCC review; m5 cites this ID as
  Manchiraju) → PD-M5-05.
- Line 108: the ANT definitions link (w3.ual.es Fan) → PD-M4-07.
- Line 168: the Carden & Wood 2018 PDF (habit mechanism and measurement
  caution) → PD-M7-04.
- Line 169: PMC11641623 (duration-evidence limits) → PD-M7-05.
- Line 221: PMC13428958 ("original adherence research") = Woolley,
  Giurge and Fishbach 2025 (m1 cites this ID as Woolley) → PD-M1-07.

## Comparison

Published mod-pd-8 carries SEVEN capstone-return entries: PD-M1-05,
PD-M1-06, PD-M2-06, PD-M7-05, PD-M5-05, PD-M7-04, PD-M4-07 — each matches
its manifest entry and the doc citations above.

PD-M1-07 (Woolley): the manifest's original entry claimed "NOT cited in
m8 prose (checked)" — that check was name-based and MISSED the doc's
link-based citation at line 221. The schema lane removed PD-M1-07 from
the published m8 on the basis of that error. The manifest entry has been
corrected this session and the fix list now asks the schema lane to
RE-ADD it (item 6 in docs/degrees/integration/schema-lane-fix-list-1026a.md).

PD-M7-10 (Vohs): genuinely NOT cited in the m8 doc in any form (name or
link; checked) — its removal stands as the conservative resolution. The
owner can override; the manifest preserves the analysis.

## Verdict

PASS for the seven published entries (each traces to a doc citation).
QUALIFIED: PD-M1-07's removal was an error caused by this lane's
name-based prose check; it is corrected in the manifest and flagged for
re-addition. This receipt supersedes the first version, whose endorsement
of that removal is withdrawn.

## Closure (2026-10-26, later same session)

RESOLVED: the schema lane re-added PD-M1-07 to mod-pd-8 (verified at commit b5a5031 - the published set now carries all eight capstone-return entries matching the doc's link-based citations). The QUALIFIED verdict is lifted: m8 now PASSes without qualification.

## Rev 3 correction (2026-10-26, same session)

The Vohs claim in this receipt is WRONG and is corrected: the m8 doc cites the Vohs 2021 paper in prose BY LINK at line 226 ('preregistered and exploratory distinction', the Brunel PDF that the m7 doc and the degree ledger identify as Vohs and colleagues, 2021). The name-based check that missed the Woolley citation (line 221) also missed this one (line 226). PD-M7-10's removal from m8 was therefore also in error; the manifest is corrected and the schema lane asked to re-add it (fix-list item 7). The rev-2 statement that 'PD-M7-10 / Vohs is NOT cited in the m8 doc in any form' is withdrawn.
