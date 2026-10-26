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
| Capstone: design, execute and self-assess one safe real-life change using all six dimensions, with honest evidence | m8 | m8 module doc (QC PASS); 8 capstone-return sources, no new reading | mod-pd-8 present; 8 of 9 listed capstone sources verified against m8 prose; PD-M1-07 (Woolley 2025) has no m8 prose cite | INTEGRATION-LOSS (one listing, removal recommended — see manifest) |

## Bounded domain topics

| Approved topic | Module | Design evidence | Published state | Status |
|---|---|---|---|---|
| Affective dimension (emotion accounts, regulation, constructed emotion) | m2 | Barrett TED + 2025 reply selections; Noba functions-of-emotion; Gross model + 1998 process-model check; Martinez-Priego review selections | All present; all reading spans verified this session | COVERED |
| Cognitive dimension (learning, perception, memory, judgment, RNT) | m3 | Bloom lectures 4/7/10 with printed windows; Noba conditioning and memory; RNT material | Present; PD-M3-03 prints lecture 7's window as its own and PD-M3-04's second window (54:59–59:22) was dropped | INTEGRATION-LOSS (window errors, values in manifest) |
| Attentional dimension (networks, ANT, ADHD context) | m4 | Posner videos; Posner 2023 §4; Posner/Rothbart/Ghassemzadeh 2019 tables; Lippelt 2014; Fan ANT 2002 pages 342–343 | Present; all spans verified this session | COVERED |
| Self and identity (self-concept, clarity, SCCS, narrative) | m5 | Maitland 2024; Manchiraju 2026; SCCS material | Present | COVERED |
| Motivational dimension (motives, values, curiosity, adherence) | m6 | Woolley 2025; SDT material; adherence evidence | Present | COVERED |
| Overt behavioural dimension (habit, context, diary) | m7 | Wood video; Carden & Wood 2018; Singh 2024; Werner & Berkman 2024; Reed 2020; Alarcón-Espinoza 2022 | Present; all spans verified this session (the Alarcón accent grep miss corrected in the manifest) | COVERED |
| Capstone integrating the dimensions on one real pattern | m8 | m8 doc; 8 capstone-return sources | Present, minus the Woolley listing noted above | INTEGRATION-LOSS (one listing) |
| State-of-the-art reviews and current debates per dimension | m2–m7 | 2024–2026 reviews and replies are the assigned spine of every dimension module | Published | COVERED |

## Data-block extras (not in the design)

| Source | Module | Finding | Status |
|---|---|---|---|
| PD-M3-07 Bazerman, Judgment and Decision Making (Noba) | mod-pd-3 required | No Bazerman assignment in any psychdim module doc (checked all eight; the m3 Noba links are conditioning-and-learning and memory only) | UNRESOLVED — remove from required, or owner decision if a judgment reading is wanted |
| PD-M1-07 Woolley 2025 in m8 | mod-pd-8 required | Assigned in m6, not cited in m8 prose | UNRESOLVED — removal recommended (keep in m6) |

## Structural defects for the schema/text lanes (category a, values already in the manifest)

- PD-M7-10 is titled "Heidbreder, consciousness review article" but is the Vohs et al. 2021 manuscript; retitle with the bounded locator (Abstract and Methods' "Participants" subsection only).
- PD-M3-03 window error and PD-M3-04's dropped second window (see Cognitive row above).
- Full-duplicate reuses across modules (PD-M3-02, PD-M3-01, PD-M3-05, and the eight mod-pd-8 capstone returns) are legitimate design revisits; the Phase A assignment object (segments + role=revisit) dissolves the audit FAILs without touching the design.
- Missing locators/durations in the data block: every text source needs its locator (verified in the manifest) and every video its printed window; the learner-content file supplies titles, descriptions and the openingNote.

## Intentionally excluded (category c, per the scope's Exclusion review)

- Clinical protocols as treatment (legacy deg-therapeutic material stays legacy; mechanism-testing clinical studies stay in as dimension evidence).
- Wellbeing science as outcomes (owned by A Walk of Life: Positive Psychology; outcome evidence admissible where an opened dimension source uses it).
- The language elective (admitted on topical fit, resolved by exclusion at re-review; recorded in the ledger).

## Open opportunity (owner decision, not taken)

- Wiki readings: psychdim sources with existing dossier/kernel pages could be linked from module docs; the finite-scope rule keeps this out until the owner asks for it.

## Verdict

Every approved exit capability and every bounded-domain topic has assigned,
QC-passed evidence in the design, and the published data block carries it. No
category (b) gap exists (nothing approved is absent from the design). The
defects are category (a) integration losses plus two data-block extras, all
itemized above with their remedies, and all already recorded in
deg-psychdim-manifest.json and deg-psychdim-learner-content.json for the
schema and text lanes.
