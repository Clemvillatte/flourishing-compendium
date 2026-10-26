# Coverage matrix — deg-wol-daoism (Phase 0 deliverable)

Built 2026-10-26 by worker-pplx-degfixcontent-1026a (baton deg-fix-content), per
docs/degrees/AUDIT-2026-10-26.md Phase 0. Approved rows come from
docs/degrees/scope/deg-wol-daoism.md (read in full; its Gate-1 status line is
stale relative to production — the degree holds whole-degree QC PASS and the
ledger carries the gate record). Design evidence is the QC-PASS module docs;
published state is the app.js data block checked through
deg-wol-daoism-manifest.json and the learner audit.

Statuses: COVERED, INTEGRATION-LOSS (design present, published state lost or
mislabels it — category a), UNRESOLVED (routed decision), INTENTIONALLY-EXCLUDED
(category c), DIVERGENCE (design and approved scope disagree — routed, not
silently judged).

## Exit capabilities

| Approved capability | Module(s) | Design evidence | Published state | Status |
|---|---|---|---|---|
| Read the core texts (Daodejing, Zhuangzi) with guidance and apply them to daily life | m1 (first guided chapter), m2 (Daodejing chapters with measures), m3 (three Zhuangzi passages with word counts) | QC-PASS module docs; assigned passages and word counts transcribed in the manifest | mod-dao-1..3 present; locators missing in the data block (DAO-M1-04/05, DAO-M4-02) — values in the manifest; Eno translation reuses across modules are distinct assigned passages, dissolved by the Phase A assignment object | COVERED (with category-a locator losses) |
| Practise the basics of the Daoist arts of living (simplicity, non-forcing, nature alignment) and explain their rationale | m4 (Neiye sections with numbered locators; practice design with reason, limit and evidence criteria) | m4 doc QC PASS; Neiye sections 1, 2, 3, 12 assigned with printed locators | mod-dao-4 present; DAO-M4-01 listed both required and optional with no distinct assignment (role value in the manifest) | COVERED (with category-a role loss) |
| Write a personal synthesis of the walk against one serious objection | m5 (four Daodejing chapters incl. the ch. 44 re-read; synthesis deliverable) | m5 doc QC PASS; re-reads itemized in the manifest | mod-dao-5 present; Eno translation reuse needs the Phase A assignment object | COVERED |

## Bounded domain topics

| Approved topic | Module | Design evidence | Published state | Status |
|---|---|---|---|---|
| The core texts read as practice manuals for living | m2, m3 | m2/m3 docs; assigned chapters and passages with word counts | Present | COVERED |
| Daoist ethics and the ideal of the sage | m2 (Daodejing chapters), m3 (skill stories, wu wei) | Assigned passages carry the ethics material | Present | COVERED |
| The living tradition's practices (qigong practicum cross-link for the body side) | m4 | Neiye sections + practice design; the scope's qigong-practicum cross-link | Present; whether the practicum cross-link is published as designed was not verified this session | UNRESOLVED (one check for the schema lane) |
| Neiye elective deep dive | m4 | The scope lists the Neiye as an ELECTIVE; the built degree teaches it as a core module (m4, QC PASS) | Published as core | DIVERGENCE (design extends the scope's elective into core; ledger/gate record presumably authorizes it — routed as an observation, not a defect) |

## Intentionally excluded (category c, per the scope)

- Metaphysical and arcane cosmology (owner rule: practical, pragmatic content).
- Religious Daoist ritual and liturgy.
- The political Daodejing strand (Warwick's Hanfeizi/Art of War angle) — left out as a choice for a life-practice learner; recorded in the scope as a possible elective, not a blind spot.
- Religious-tradition teaching (Celestial Master, Quanzhen history) beyond the practice side — anchor challenge recorded in the scope, unresolved there by design.

## Structural defects for the schema/text lanes (category a)

- Missing locators in the data block for DAO-M1-04, DAO-M1-05, DAO-M4-02 and the text reuses — all values are in the manifest.
- DAO-M1-01/02/03 (mod-dao-1) and DAO-M4-01 (mod-dao-4) are listed both required and optional with no distinct assignment — role values are in the manifest.
- Full-duplicate reuses (DAO-M1-03 Ziporyn lecture across m1-m3 with different windows; DAO-M1-04/05 Eno translations across modules) are design revisits; the Phase A assignment object dissolves them.
- Level-code descriptions and the empty openingNote — replacements supplied in deg-wol-daoism-learner-content.json.
- No wiki readings linked anywhere in the degree — open opportunity, owner decision.

## Verdict (provisional)

Design coverage: all three exit capabilities and the bounded-domain topics have
QC-passed design evidence; the only scope-design divergence is the Neiye
elective-to-core promotion (routed above). Publication fidelity: the data block
carries the design's sources with the category-a losses itemized above; no
category (b) gap was found (nothing approved is absent from the design). This
verdict is PROVISIONAL at the same level of trace as the psychdim matrix: the
per-capability deep trace was not re-derived beyond the scope's own mapping,
and the learner audit reports 156 defects across the four degrees. The one
unresolved check (qigong practicum cross-link) and the divergence are routed,
not judged.
