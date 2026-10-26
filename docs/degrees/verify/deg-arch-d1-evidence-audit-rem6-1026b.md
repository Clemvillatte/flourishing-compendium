# deg-arch D1 evidence audit — rem6 lane (worker-pplx-dosr4-1026b, 2026-10-26)

Read-only verification lane assist. All 18 syllabus/source URLs cited by the
five rem6 D1 files (deg-psychdim: 5, deg-psychology-101: 3, deg-philosophy: 4,
deg-therapeutic: 3, deg-qigong: 3) were re-requested at HEAD
(browser-user-agent HTTP GET, redirect-following, 15s timeout). These are
HTTP-status checks; response content was NOT inspected (one exception noted).
Receipt mirrors the archpsych-1027a audit format. No live-lane files were
modified.

SCOPE NOTE (added 2026-10-26 13:30Z): after this audit was pushed, the owner
ruled (commit c82c1c0) that the three practicums — deg-qigong,
deg-psychology-101, deg-cmp — are NOT degrees and are out of scope for the
architecture wave; the two practicum D1 files this audit covered (qigong,
psychology-101) have been voided. Those sections are retained below for the
record only. The psychdim and philosophy findings remain live.

Clock: session T0 2026-10-26 13:00:39Z. URL checks completed ~13:20Z (T+20).
An earlier version of this receipt carried guessed elapsed-time annotations
("T+48", "T+56") that a fresh clock reading disproved; they are corrected
in place here (see also the wolx5 receipt note).

## Results: 16/18 URLs returned HTTP 200 at HEAD; 1 returned 404; 1 failed DNS resolution

### deg-psychdim (5 URLs) — 4 returned 200, 1 returned 404
- UT Dallas PSY(CGS) 3361 Cognitive Psychology (dox.utdallas.edu/syl166067) — HTTP 200
- Rutgers-Newark 21:830:405 Psychology of Emotions (sasn.rutgers.edu PDF) — HTTP 200
- Columbia PSYC UN3671 Motivation Science (psychology.columbia.edu PDF) — HTTP 200
- U Alberta PSYCO 447/505 Self and Identity (sites.psych.ualberta.ca PDF) — HTTP 200
- **Macalester PSYCH 272 Health Psychology — HTTP 404 at HEAD**
  Wayback metadata lists a snapshot (status 200, timestamp 20240809144252);
  the snapshot itself was not opened this session.
  Same host as the psychx4 audit's Macalester dead link (their uploads
  reorganized).
  **LIVE REPLACEMENT FOUND: the same file path with sites/585 instead of
  sites/46 (https://www.macalester.edu/psychology/wp-content/uploads/sites/585/2022/11/Health-Psych-syllabus-F2022.pdf)
  returned HTTP 200 this session, and a web search returned the syllabus's
  full content at that URL — course summary, instructor (Jaine Strauss,
  PSYCH 272, Fall 2022) and topic list matching the D1's citation. The
  content match is from the search-result extraction; the fetched file
  itself was not read this session. Recommended substitution at the lane
  owner's next touch.**

### deg-psychology-101 (3 URLs) — 3 returned 200
- Texas A&M-San Antonio PSYC-2301 (apps.tamusa.edu PDF) — HTTP 200
- College of the Redwoods Psychology 1 (redwoods.edu PDF) — HTTP 200
- Rutgers Psychology 101:02 (ruoncampus.rutgers.edu PDF) — HTTP 200

### deg-philosophy (4 URLs) — 3 returned 200, 1 failed DNS resolution
- **Wesleyan PHIL 221 Philosophy as a Way of Life (philife.nd.edu PDF) —
  DNS resolution failed from this environment (NXDOMAIN for philife.nd.edu;
  the root domain also failed to resolve this session).**
  Wayback metadata lists a snapshot (status 200, timestamp 20210511082024);
  the snapshot itself was not opened this session.
  Note: the psychx4 audit (archpsych-1027a) reported this host fetch-blocked
  but indexed-verified at their session time; results from this environment
  at HEAD are as reported above.
  Follow-up this session: the Wesleyan original host
  wesfiles.wesleyan.edu/courses/syllabi/1119-sangle-013195-321.pdf (cited by
  published literature found via search) also failed DNS resolution from this
  environment. No live public carrier was found this session; a substitution
  decision (archive citation vs. an equivalent open syllabus from another
  university) is flagged to the lane owner.
- U Florida CLA 6805 Roman Stoicism (classics.ufl.edu PDF) — HTTP 200
- ASU PHI 420 Stoicism (webapp4.asu.edu PDF) — HTTP 200
- UC Berkeley Philosophy 161 Aristotle (ocf.berkeley.edu PDF) — HTTP 200

### deg-therapeutic (3 URLs) — 3 returned 200
- John Cabot PS 353 Clinical Psychology (myjcu.johncabot.edu) — HTTP 200
- George Mason PSYC 862 CBT (abct.org PDF) — HTTP 200
- UT Austin EDP384C CBT (utdirect.utexas.edu) — HTTP 200

### deg-qigong (3 URLs) — 3 returned 200
- Stanford FAMMED-213 Medical Tai Chi (syllabus.stanford.edu) — HTTP 200
- National Qigong Association certification (nqa.org/certification) — HTTP 200
- IIQTC Level 1 Teacher Training — HTTP 200

## New-ruling compliance spot-check (owner rulings bad5c55b8 / 622a7eca3)
No SEP/Wikipedia/IEP/Britannica URLs were found in the five rem6 D1 files
(rg sweep: no occurrences of those domains as rows or assignments).
Syllabus-anchored topic maps are unaffected by the teaching-content re-target.

## Flagged to the rem6 lane owner (sup-1026r) — not repaired here (read-only)
1. deg-psychdim: Macalester syllabus URL returned 404 at HEAD; live
   replacement candidate found and status-checked (above).
2. deg-philosophy: philife.nd.edu carrier failed DNS resolution from this
   environment; Wayback snapshot listed; no live public carrier found this
   session — substitution decision flagged.

Auditor: worker-pplx-dosr4-1026b (verification lane assist, read-only).
Fresh clock reading at this correction: 2026-10-26 13:27Z (session T+26).
