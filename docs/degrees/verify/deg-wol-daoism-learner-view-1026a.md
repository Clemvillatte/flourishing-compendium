# deg-wol-daoism learner-view QA (deg-integrate, Phase E partial)

Reviewer: worker-pplx-degintegrate-1026a (deg-integrate baton, 2026-10-26).
Tested against: LIVE Pages deploy at clemvillatte.github.io (app.js sha256
cc4d0e61, traced to commit dfeaee7) — the deploy is one push behind
origin/main at the time of QA (origin/main 4d63945 carries the pragmatism
assignment backfill; the live app.js is dfeaee7). Local origin/main pinned
and audited: 4d63945.

## What was rendered and click-checked

Live deploy, desktop:

- Academy home (`#view=academy`): all four published degrees render
  (psychdim, daoism, buddhism, pragmatism); Legacy link present.
- deg-psychdim degree page (`#degree=deg-psychdim`): all 8 modules render
  with human titles, prose questions and workload hours.
- deg-psychdim module I (`#module=mod-pd-1`): fully learner-facing.
  Verified rendered text includes:
  - title "The Mind Across Six Dimensions", question, difficulty
    "Foundations", "4.25h";
  - description is prose ("The entry module. You install the map of six
    dimensions…"), not a level code;
  - VIEWING LIST carries explicit assignments: "Watch 1:03:17–1:09:12"
    (Hayes), "Watch 25:46–44:11 · 54:02–57:21" (Sainani, "21:44 of
    1:16:12"), "Read: Selected sections, about 3,200 words" (Smith),
    "Read: The definition and the two principles, about 300 words" (ASA);
  - OPTIONAL EXTENSIONS distinguishes the remedial Sainani clip ("3:29–
    9:21. Optional remedial clip…") and labels optional papers with
    bounded locators ("Read: Section 1.4 only", "Read: Opening overview");
  - "Reflect as you go" card present; outcomes and rubric render as prose.
  → The assignment-aware renderer and the psychdim Phase B/C/D backfill
  are WORKING as the learner sees them. Phase E for psychdim is
  CONFIRMED on the live deploy.
- deg-wol-daoism degree page (`#degree=deg-wol-daoism`): all 5 modules
  render with human titles and prose descriptions; "0/16 watched" shows
  the 16-assignment count (segmented reuse accounted).
- deg-wol-daoism module I (`#module=mod-dao-1`): titles/sources/optional
  split render; OUTCOMES and rubric render verbatim from the module doc.
- deg-wol-pragmatism module III (`#module=mod-prag-3`): rendered to
  compare the LIVE defect state — see findings below.

## Findings (routed, not fixed here — app.js is owned by deg-fix-schema)

1. DAOISM m1 (live, cc4d0e61/dfeaee7): the module description still
   prints the internal level code ("L1 Orientation. Entry module of the
   degree; no prerequisites beyond curiosity about Daoist practice; no
   classical Chinese or prior training assumed.") and the VIEWING LIST
   prints the sources' FULL durations (Komjathy "1:13:54", Van Norden
   "0:50:09", Ziporyn "0:53:36") with no "Watch <window>" line and no
   word-count locator on the two Eno readings. This is the exact Phase
   B (description prose) + Phase A/D (segments/locators in the data
   block) defect class for daoism m1. The daoism assignments landed at
   commit aa0bbf3 (origin/main), so this is a DEPLOY LAG finding on the
   live Pages copy, not an unfixed repo state: on origin/main at 4d63945
   the audit script reports only the wiki_readings owner-decision item
   for deg-wol-daoism. Route: deg-fix-text (Phase B description for
   daoism m1 if the learner-content JSON still carries the level code)
   and deg-fix-schema (Phase A segments for daoism m1) — verify on the
   next deploy; do not edit app.js from this lane.
2. PRAGMATISM m3 (live, cc4d0e61/dfeaee7): the live module page still
   shows the owner's exact defect set — title leaks the band filename
   ("m3-truth-and-the-will-to-believe: James on Truth and Genuine
   Options"), description is a level code ("L2 Guided application.
   Prerequisites: the m2 exits."), only ONE essential item (the Misak
   lecture; James's Will to Believe and the Pragmatism Lecture II/VI
   readings are absent from the live data block), and the prerequisites
   list prints raw filenames ("Module I — m1-orientation: What
   Pragmatism Is"). On origin/main at 4d63945 the deg-fix-text push
   (4d63945) lands the pragmatism assignment backfill (PRAG-M3-02/03/04
   with locators and word counts; PRAG-M1-02 role fix; PRAG-M5 revisit).
   → DEPLOY LAG: the live Pages copy predates the fix. Re-render after
   the Pages run triggered by 4d63945 completes; expect the James
   readings to appear with reading-time labels.
3. Both degrees (daoism and psychdim, and by the audit's output also
   buddhism and pragmatism): `wiki_readings: []` on every module — the
   wiki is not linked from the Academy. This is the audit's owner-routed
   opportunity (finite-scope check required), NOT a defect for this
   wave. Owner decision still owed; no action from this lane.

## Verdict

Psychdim is learner-confirmed on the live deploy (Phase E partial for
psychdim). Daoism and pragmatism show live-rendered defects that are
already fixed in origin/main's data block — the Pages deploy is one push
behind (app.js cc4d0e61 = dfeaee7). The remaining live-rendered
defects are either deploy lag (pragmatism m3 readings, daoism m1
segments — verify after the next deploy) or the wiki_readings
owner-decision item. No learner-view defect was found that is NOT
already tracked in the audit or its repair lanes.

## Not fixed by this lane

None — this is a QA receipt only. app.js stays with deg-fix-schema per
the single-writer rule; the pragmatism/daoism residual items route to
deg-fix-text and deg-fix-schema respectively.

— worker-pplx-degintegrate-1026a, deg-integrate, 2026-10-26
