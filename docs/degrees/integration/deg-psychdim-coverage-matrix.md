# Coverage matrix — deg-psychdim (Phase 0 deliverable)

Built 2026-10-26 by worker-pplx-degfixcontent-1026a (baton deg-fix-content), per
docs/degrees/AUDIT-2026-10-26.md Phase 0. Columns: approved competency/topic
(from docs/degrees/scope/deg-psychdim.md, gate1-cleared) → module → assigned
evidence in the design (the QC-PASS module docs) → published assignment (the
app.js data block, checked through deg-psychdim-manifest.json, verified this
session, and scripts/tests/degrees_learner_audit.py) → status.

Statuses: COVERED (design + published agree), INTEGRATION-LOSS (design has it,
published state lost or mislabels it — category a), UNRESOLVED (needs owner or
supervisor decision), INTENTIONALLY-EXCLUDED (category c, per the scope's
Exclusion review).

## Exit capabilities

| Approved capability | Module(s) | Design evidence | Published state | Status |
|---|---|---|---|---|
| Read an own episode of suffering/flourishing across the six EEMM dimensions, dimensions as levers | m1 (map install, outcome 1); m2–m7 (one dimension each) | m1–m7 module docs, QC PASS; all assigned media transcribed in the manifest | mod-pd-1..7 present with required media; all manifest reading assignments verified against docs this session | COVERED |
| Read current research critically (design, evidence type, effect size, replication status; stable vs moving findings) | m1 (outcome 3) and the critique strand in every dimension module | m1 outcomes; per-module "distinguishing stable findings" work | Published; the critique prose lives in module text, not the data block | COVERED |
| Run the EEMM on a real behavioural pattern (variation, selection, retention, context; levels of analysis; mechanisms vs outcomes; choosing an intervention point) | m1 (outcome 4); m7 (diary + pattern work) | m1 outcome 4; m7 diary hypothesis and alternative | Published | COVERED |
| Capstone: design, execute and self-assess one safe real-life change using all six dimensions, with honest evidence | m8 | m8 module doc (QC PASS); capstone-return sources, no new reading | mod-pd-8 present with 9 required listings; 7 verified against m8 prose (Hofmann, Maitland, Martinez-Priego, Singh, Manchiraju, Carden/Wood, Fan ANT); PD-M1-07 (Woolley) and PD-M7-10 (Vohs) are not cited in m8 prose | UNRESOLVED (two listings — see below) |

## Bounded domain topics

| Approved topic | Module | Design evidence | Published state | Status |
|---|---|---|---|---|
| Affective dimension (emotion accounts, regulation, constructed emotion) | m2 | Barrett TED + 2025 reply selections; Noba functions-of-emotion; Gross model + 1998 process-model check; Martinez-Priego review selections | All present; all reading spans verified this session | COVERED |
| Cognitive dimension (learning, perception, memory, judgment, RNT) | m3 | Bloom lectures 4/7/10 with printed windows; Noba conditioning and memory; RNT material | Present; PD-M3-03 prints lecture 7's window as its own and PD-M3-04's second window (54:59–59:22) was dropped | INTEGRATION-LOSS (window errors, values in manifest) |
| Attentional dimension (networks, ANT, ADHD context) | m4 | Posner videos; Posner 2023 §4; Posner/Rothbart/Ghassemzadeh 2019 tables; Lippelt 2014; Fan ANT 2002 pages 342–343 | Present; all spans verified this session | COVERED |
| Self and identity (self-concept, clarity, SCCS, narrative) | m5 | Maitland 2024; Manchiraju 2026; SCCS material | Present | COVERED |
| Motivational dimension (motives, values, curiosity, adherence) | m6 | Woolley 2025; SDT material; adherence evidence | Present | COVERED |
| Overt behavioural dimension (habit, context, diary) | m7 | Wood video; Carden & Wood 2018; Singh 2024; Werner & Berkman 2024; Reed 2020; Alarcón-Espinoza 2022 | Present; all spans verified this session (the Alarcón accent grep miss corrected in the manifest) | COVERED |
| Capstone integrating the dimensions on one real pattern | m8 | m8 doc; capstone-return sources | Present; two of the nine m8 listings (Woolley, Vohs) are unresolved — see below | UNRESOLVED (two listings) |
| State-of-the-art reviews and current debates per dimension | m2–m7 | 2024–2026 reviews and replies are the assigned spine of every dimension module | Published | COVERED |

## Unresolved m8 listings (routed, not confirmed extras)

| Source | Module | Finding | Status |
|---|---|---|---|
| PD-M1-07 Woolley 2025 | mod-pd-8 required | Assigned in m6 (Abstract; one paragraph); not cited in m8 prose. The m8 doc permits general reuse of previously studied sources without naming per-source, so the missing citation does not establish exclusion | UNRESOLVED — owner/schema-lane decision whether the m8 listing stays |
| PD-M7-10 Vohs 2021 (data block mislabels it "Heidbreder") | mod-pd-8 required | Assigned in m7 (Abstract and Methods' "Participants" subsection only); not cited in m8 prose; same non-discriminating general-reuse instruction | UNRESOLVED — same decision point; the m7 assignment stands either way |

## Data-block extras (not in the design)

| Source | Module | Finding | Status |
|---|---|---|---|
| PD-M3-07 Bazerman, Judgment and Decision Making (Noba) | mod-pd-3 required | No Bazerman assignment in any psychdim module doc (checked all eight; the m3 Noba links are conditioning-and-learning and memory only) | UNRESOLVED — remove from required, or owner decision if a judgment reading is wanted |

## Structural defects for the schema/text lanes (category a, values already in the manifest)

- PD-M7-10 is titled "Heidbreder, consciousness review article" but is the Vohs et al. 2021 manuscript; retitle with the bounded locator (Abstract and Methods' "Participants" subsection only).
- PD-M3-03 window error and PD-M3-04's dropped second window (see Cognitive row above).
- Full-duplicate reuses across modules (PD-M3-02, PD-M3-01, PD-M3-05, and the mod-pd-8 capstone returns) are legitimate design revisits; the Phase A assignment object (segments + role=revisit) dissolves the audit FAILs without touching the design.
- Missing locators/durations in the data block: every text source needs its locator (verified in the manifest, except the routed Gross 1998 UNRESOLVED-LOCATOR) and every video its printed window; the learner-content file supplies titles, descriptions and the openingNote.
- The learner audit currently reports 156 defects across the four degrees (exit code 3); the psychdim share is dominated by the missing locators/durations and level-code descriptions itemized here and in the learner-content file — the audit gate is NOT clean and this matrix does not claim it is.

## Intentionally excluded (category c, per the scope's Exclusion review)

- Clinical protocols as treatment (legacy deg-therapeutic material stays legacy; mechanism-testing clinical studies stay in as dimension evidence).
- Wellbeing science as outcomes (owned by A Walk of Life: Positive Psychology; outcome evidence admissible where an opened dimension source uses it).
- Contemplative doctrine (practica); contemplative science appears as attentional evidence only.
- Interpersonal and attraction material (liking, proximity, mere exposure) — excluded under the 2026-10-26 centering repair; re-admission possible on a stated learner need.
- Group perception material (stereotypes, stereotype threat, implicit attitudes, the IAT) — same repair.
- Computational psychiatry primers — same repair.
- Affective neuroscience as a standalone elective — excluded under the when-in-doubt-exclude rule (neuroscience needed to explain a core source stays with that source).
- The language elective (admitted on topical fit, resolved by exclusion at re-review; recorded in the ledger).

## Open opportunity (owner decision, not taken)

- Wiki readings: psychdim sources with existing dossier/kernel pages could be linked from module docs; the finite-scope rule keeps this out until the owner asks for it.

## Verdict (provisional)

Design coverage: every approved exit capability and bounded-domain topic has
assigned, QC-passed evidence in the design (the scope doc's own coverage
summary matrix maps each family to a module with practice and assessment,
and the module docs carry it). No category (b) gap was found in that mapping.

Publication fidelity: the published data block carries the design's sources,
with the itemized category (a) losses (window errors, mislabel, missing
locators/durations, level-code descriptions) plus one confirmed data-block
extra (PD-M3-07) and two unresolved m8 listings (PD-M1-07, PD-M7-10) routed
above. This verdict is PROVISIONAL: competency coverage here is traced at the
family-to-module level via the scope's coverage summary; a per-capability
deep trace (teaching passage → activity → assessment → published assignment)
was not re-derived in this session beyond that mapping, and the learner audit
still reports 156 defects across the four degrees. All values needed to close
the gaps are recorded in deg-psychdim-manifest.json and
deg-psychdim-learner-content.json for the schema and text lanes.

## Closure note (2026-10-26, deg-fix-content, checked at commit d7bd10a)

The structural-defect sections above were written against the integration
state of the morning of 2026-10-26 (the learner audit then reported 156
defects across the four degrees). As of commit d7bd10a the learner audit
reports **0 defects** (the four wiki_readings lines are ADVISORY, owner
decision pending - candidate inventory in
docs/degrees/integration/wiki-readings-option-evidence-1026a.md). The
category-a items this matrix lists were closed by the schema/text/integrate
lanes consuming the verified manifests and the learner-content files, and
were independently sampled by the deg-fix-content deep traces
(docs/degrees/verify/deg-*-deep-trace-1026a.md). The verdict above remains
PROVISIONAL for the per-capability deep trace (as stated). SCOPE NOTE
(2026-10-26): the learner audit's 0-defect result is a PRESENCE and
STRUCTURE check, not semantic assignment fidelity — this session's own
findings (PD-M2-04's stale whole-BODY figure, the PD-M1-07 m8 removal
error, the BUD-B2-02 word label) all passed that audit while being
wrong. Semantic fidelity is established only by the deep traces and the
schema-aware sweeps recorded in docs/degrees/verify/, and by the open
items in docs/degrees/integration/schema-lane-fix-list-1026a.md.

Still OPEN as of this note: (1) PD-M2-04's published locator and assignment must be replaced
with the 450-word bounded assignment (manifest assignment field now carries
the full spliceable text; schema-lane flag live); (2) RESOLVED 2026-10-26: mod-pd-4's PD-M3-02 revisit now carries only the
m4 window 47:26-54:53 (the extra m3 segment was dropped by the schema
lane; verified in the m4 deep trace); (3) the PD-M1-07/PD-M7-10 m8 requiredness and the PD-M3-07 Bazerman
extra were resolved by removal in the published state - the owner can still
override; (4) the Gross 1998 bounded span remains UNRESOLVED-LOCATOR (doc
basis, no printed span). RETRACTION 2026-10-26: an earlier version of this
closure note wrongly flagged PD-M3-03 as having an empty published locator
- the published entry carries the verified window in its segments structure
(13:22-18:27), which is correct; the flag is withdrawn.

## Addendum (2026-10-26, later same session)

A sixth deep trace was added for m8 (docs/degrees/verify/deg-psychdim-m8-deep-trace-1026a.md): PASS — the published 7-entry capstone-return set is doc-consistent, and the Woolley/Vohs removals are documented as the conservative resolution. With m2, m7 and m8 traced, the psychdim verdict's deep-trace reservation now covers the remaining capabilities (m1, m4, m5, m6) — the machine audit remains green across all eight.

## Addendum 2 (2026-10-26, later same session)

Deep traces added for m4 (docs/degrees/verify/deg-psychdim-m4-deep-trace-1026a.md, PASS - all seven sources value-by-value; the PD-M3-02 extra-segment flag is RESOLVED) and m8 (rev 2 - see the correction above). The renderer was inspected directly: acadAssignmentText renders segments, locator and note, never the assignment field, confirming that the fix list targets the learner-visible fields. A sweep of published note/locator strings for internal review language found zero leaks.

## Addendum 3 (2026-10-26, later same session)

Deep trace added for m3 (docs/degrees/verify/deg-psychdim-m3-deep-trace-1026a.md): PASS - all eight entries value-by-value across the three layers, including both formerly-wrong video windows (PD-M3-03, PD-M3-04), now correct in the published state. With m2, m3, m4, m7 and m8 traced, the verdict's deep-trace reservation now covers m1, m5 and m6 only.

## Addendum 4 (2026-10-26, later same session)

Deep trace added for m1 (docs/degrees/verify/deg-psychdim-m1-deep-trace-1026a.md): PASS - all eight entries value-by-value across the three layers, including the optional remedial clip split and the four optional text references. With m1 through m4 and m7/m8 traced, the verdict's deep-trace reservation now covers m5 and m6 only.

## Addendum 5 (2026-10-26, later same session)

Deep trace added for m5 (docs/degrees/verify/deg-psychdim-m5-deep-trace-1026a.md): PASS - all nine entries value-by-value across the three layers (four video windows incl. lecture 16's dual windows; five bounded readings incl. the Maitland teach-reuse entry this lane added). With m1 through m5 and m7/m8 traced, the verdict's deep-trace reservation now covers m6 only.

## Addendum 6 (2026-10-26, later same session) - DEGREE COMPLETE

Deep trace added for m6 (docs/degrees/verify/deg-psychdim-m6-deep-trace-1026a.md): PASS - all six entries value-by-value (three talk windows, the Fishbach clip, the Ryan and Deci reading, the Woolley teach-reuse). PSYCHDIM DEGREE deep-trace coverage COMPLETE: all eight modules have PASS receipts. WAVE COMPLETION: all four degrees (psychdim 8/8, daoism 5/5, buddhism 9/9, pragmatism 5/5 - 27 modules) now have complete per-module deep-trace coverage, all PASS. Every provisional verdict stands CONFIRMED by deep trace.
