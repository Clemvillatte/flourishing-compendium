# deg-arch D1 evidence audit — rem6 lane (worker-pplx-dosr4-1026b, 2026-10-26 13:48Z)

Read-only verification lane assist. All syllabus/source URLs cited by the five
rem6 D1 files (deg-psychdim, deg-psychology-101, deg-philosophy,
deg-therapeutic, deg-qigong) were re-opened at HEAD (browser-user-agent HTTP
GET, redirect-following, 15s timeout). Receipt mirrors the archpsych-1027a
audit format. No live-lane files were modified.

## Results: 17/19 URLs live at HEAD (200); 2 dead — update (T+56): one live replacement found and verified

### deg-psychdim (5 URLs) — 4 live, 1 dead
- UT Dallas PSY(CGS) 3361 Cognitive Psychology (dox.utdallas.edu/syl166067) — LIVE 200
- Rutgers-Newark 21:830:405 Psychology of Emotions (sasn.rutgers.edu PDF) — LIVE 200
- Columbia PSYC UN3671 Motivation Science (psychology.columbia.edu PDF) — LIVE 200
- U Alberta PSYCO 447/505 Self and Identity (sites.psych.ualberta.ca PDF) — LIVE 200
- **Macalester PSYCH 272 Health Psychology — DEAD (404 at HEAD)**
  Archived copy exists and opens: web.archive.org/web/20240809144252/https://www.macalester.edu/psychology/wp-content/uploads/sites/46/2022/11/Health-Psych-syllabus-F2022.pdf
  Same failure pattern as the psychx4 audit's Macalester dead link (their uploads
  reorganized).
  **LIVE REPLACEMENT FOUND AND VERIFIED (200 at HEAD, this session): the same
  syllabus (PSYCH 272 Health Psychology, Fall 2022, Jaine Strauss — same course
  summary, topic list and schedule) now lives at
  https://www.macalester.edu/psychology/wp-content/uploads/sites/585/2022/11/Health-Psych-syllabus-F2022.pdf
  (uploads/sites/46 → uploads/sites/585 path migration). Recommended substitution
  for the D1 citation at the lane owner's next touch.**

### deg-psychology-101 (3 URLs) — 3 live
- Texas A&M-San Antonio PSYC-2301 (apps.tamusa.edu PDF) — LIVE 200
- College of the Redwoods Psychology 1 (redwoods.edu PDF) — LIVE 200
- Rutgers Psychology 101:02 (ruoncampus.rutgers.edu PDF) — LIVE 200

### deg-philosophy (4 URLs) — 3 live, 1 dead
- **Wesleyan PHIL 221 Philosophy as a Way of Life (philife.nd.edu PDF) — DEAD: philife.nd.edu no longer resolves (NXDOMAIN at DNS; root domain also dead)**
  Archived copy exists and opens: web.archive.org/web/20210511082024/https://philife.nd.edu/assets/317166/fullsize/phil_221_fall11_unified_syllabus.pdf
  Note: the psychx4 audit (archpsych-1027a) had this fetch-blocked but
  indexed-verified; it has since gone fully offline at the domain level.
  Follow-up (this session): the Wesleyan original host
  wesfiles.wesleyan.edu/courses/syllabi/1119-sangle-013195-321.pdf (cited by the
  published literature) does not resolve publicly (campus-internal file server),
  so the web.archive.org snapshot is currently the only public carrier of this
  syllabus. No live public carrier found; flagged to the lane owner for a
  substitution decision (archive citation vs. an equivalent open
  philosophy-as-a-way-of-life syllabus from another university).
- U Florida CLA 6805 Roman Stoicism (classics.ufl.edu PDF) — LIVE 200
- ASU PHI 420 Stoicism (webapp4.asu.edu PDF) — LIVE 200
- UC Berkeley Philosophy 161 Aristotle (ocf.berkeley.edu PDF) — LIVE 200

### deg-therapeutic (3 URLs) — 3 live
- John Cabot PS 353 Clinical Psychology (myjcu.johncabot.edu) — LIVE 200
- George Mason PSYC 862 CBT (abct.org PDF) — LIVE 200
- UT Austin EDP384C CBT (utdirect.utexas.edu) — LIVE 200

### deg-qigong (3 URLs) — 3 live
- Stanford FAMMED-213 Medical Tai Chi (syllabus.stanford.edu) — LIVE 200
- National Qigong Association certification (nqa.org/certification) — LIVE 200
- IIQTC Level 1 Teacher Training — LIVE 200

## New-ruling compliance spot-check (owner rulings bad5c55b8 / 622a7eca3)
No SEP/Wikipedia/IEP/Britannica rows were found in the five rem6 D1 files
(rg sweep: no occurrences of those domains as matrix rows or assignments).
Syllabus-anchored topic maps are unaffected by the teaching-content re-target.

## Flagged to the rem6 lane owner (sup-1026r) — not repaired here (read-only)
1. deg-psychdim: Macalester Health Psychology syllabus URL is dead at HEAD;
   archive.org carrier exists; a live equivalent open health-psychology
   syllabus should be substituted at the next D1 touch.
2. deg-philosophy: philife.nd.edu carrier is gone at DNS level; archive.org
   carrier exists; a live carrier (Wesleyan's own hosting or an equivalent
   open Philosophy-as-a-Way-of-Life syllabus) should be substituted at the
   next D1 touch.

Auditor: worker-pplx-dosr4-1026b (verification lane assist, read-only).
Clock: session T0 2026-10-26 13:00:39Z; this audit completed T+48.
