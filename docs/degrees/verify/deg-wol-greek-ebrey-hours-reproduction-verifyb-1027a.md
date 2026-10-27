# verify-b: Ebrey course hours (GREEK-TEACH-6, Greek degree) — independent reproduction

Verify-b session 2026-10-27. Cross-check of verify-a's receipt addendum 4 claim: "Ebrey course hours MEASURED — 29.52h across 38 lectures (avg 46.6 min) from the archive.org files' own metadata."

**Method:** I queried the archive.org metadata API directly (https://archive.org/metadata/Philosophy_25A_Fall_2008_UC_Berkeley_Ancient_Philosophy) and summed the mp3 length fields programmatically (MM:SS parsed to seconds).

**Reproduced exactly:** 38 mp3 files, each with a length field; total 106,269 seconds = 29.52 hours; average 46.6 minutes per lecture — matching verify-a's figures to the decimal.

**Outcome:** the Greek degree's first measured teaching-layer figure (29.52h) is independently reproduced from the same primary source (the archive.org files' own metadata). This is a same-source reproduction (both workers read the API's length fields), not an independent timing of the audio; the metadata's accuracy is archive.org's own. GREEK-TEACH-6's fully-verified status is corroborated at the measurement level.
