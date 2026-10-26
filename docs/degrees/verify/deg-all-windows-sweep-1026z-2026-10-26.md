# Verification receipt: full-coverage assignment-window sweep (four priority degrees)

Worker: supervisor-1026z, 2026-10-26 ~12:15Z. Verification-lane sweep: every
module doc of the four priority degrees was scanned for printed time windows
(assignment windows), and each was compared against the segments in the
current origin/main data block (site/assets/app.js). Method is scripted and
re-runnable (extraction of `HH:MM(SS)-HH:MM(SS)` windows on doc lines that
also carry a watch URL, mapped through the data block's canonical_url video
ids).

## Result

- 22 doc lines carry a video URL plus printed windows. 18 match the data
  block's segments exactly. The remaining 4 were examined by hand and are all
  false positives of the extractor, not defects:
  1. psychdim m2-affective (Gross, n4guVd7bNaU): the doc's ASSIGNMENT window
     19:22-26:14 matches app.js exactly; the 19:22-23:23 the script matched is
     an in-prose citation reference (line 231), not an assignment.
  2. buddhism b1 (Brahm, TpbWVaXBV4c): 07:52-09:10 appears only inside a
     source-table CORRECTION note documenting where the precepts are discussed
     — content location, not an assignment window.
  3. buddhism b4 (Brahmali, dyUCvFlDL8w): doc 00:00-20:32 vs data block
     00:00:00-00:20:32 — format equivalence only (the block also carries the
     second guided-meditation window 00:20:32-00:33:55 per the doc).
  4. buddhism b9 (Thanissaro, PcR_fI6p9k8): ~5:02-5:20 appears only in the
     source table as a content-location note ("the five hindrances named"),
     not an assignment window.

## Hand-verified samples (this session, additional)

- psychdim m1 (PD-M1-01 01:03:17-01:09:12), m3 (PD-M3-03 13:22-18:27;
  PD-M3-04 39:43-47:25 + 54:59-59:22), m5 (PD-M5-01 13:53-19:47; PD-M5-02
  15:56-28:41 + 40:00-50:03), m7 (PD-M7-03 49:52-58:10) — all exact vs the
  module docs.
- daoism m1 (DAO-M1-02 00:00:00-00:17:17 + 29:44-34:20; DAO-M1-03
  00:00:00-00:12:13 + ...) and m4 (DAO-M4-01 required 0:00:00-0:26:22,
  optional remainder 0:26:22-0:53:43) — exact, optional remainders preserved.
- buddhism b3 (BUD-B3-01 00:25:46-00:37:33; AN 5.179 revisit preserved),
  b4 (BUD-B4-01 windows + 33:55 corrected duration) — exact.
- pragmatism m4 Gutenberg links (37423/41386/71000) and the PRAG-M4-01
  locator (single 778-word How We Think passage after the deg-fix-schema
  correction at 450ce0c; the 476-word Human Nature and Conduct passage
  correctly sits on PRAG-M4-02) — verified; PD-M1-07 restored to mod-pd-8 as
  capstone-return.

## Verdict

PASS — every printed assignment window in the four priority degrees' module
docs is represented in the data block; no window mismatches found. Residual
known items (owner/worker routed, not window defects): the wiki_readings
owner decision; daoism m2/m3 manifest role one-worders; the PD-M2-07 Gross
bounded-span decision.

## Quote re-verification sample (added ~12:16Z)

- pragmatism m2 quotes Peirce verbatim: "The irritation of doubt causes a
  struggle to attain a state of belief." — confirmed word-for-word on the live
  Wikisource text (en.wikisource.org/wiki/The_Fixation_of_Belief), matching
  the module doc's quotation. PASS.
