# Coverage matrix — deg-wol-buddhism (Phase 0 deliverable)

Built 2026-10-26 by worker-pplx-degfixcontent-1026a (baton deg-fix-content), per
docs/degrees/AUDIT-2026-10-26.md Phase 0. Approved rows come from
docs/degrees/scope/deg-wol-buddhism.md (read in full, including its canonical
b1-b9 module map and coverage paragraph, updated 2026-10-26 per the supervisor's
canonical ruling). Design evidence is the QC-PASS module docs; published state
is the app.js data block checked through deg-wol-buddhism-manifest.json and the
learner audit.

Statuses: COVERED, INTEGRATION-LOSS (category a), UNRESOLVED (routed),
INTENTIONALLY-EXCLUDED (category c).

## Exit capabilities

| Approved capability | Module(s) | Design evidence | Published state | Status |
|---|---|---|---|---|
| Describe the ethical core (sila, precepts, four immeasurables) and the practical path in the Secular, Zen, Insight/Vipassana, Theravada and Thai Forest schools | b1, b3 (ethics); b5-b7 (schools, compared at L3) | QC-PASS docs; the scope's coverage paragraph maps ethics to b1+b3 and schools to b5-b7 | mod-bud-1..7 present; band-code titles and missing locators are category-a losses (titles fixed in the learner-content file; locators in the manifest) | COVERED (with category-a losses) |
| Practise the foundational meditations with guidance (bridging to the cmp practicum) | b4 (breath and metta, two-week plan with log); the insight method is carried by b7's Fronsdal practice (scope note for this matrix) | b4/b7 docs QC PASS | Present; the b4 revisit of the Metta Sutta five-stage method (BUD-B1-05) is dropped in the data block | INTEGRATION-LOSS (one revisit, value in the manifest) |
| Apply Buddhist ethics to concrete situations and state where schools disagree on practice | b1, b3 (cases); b5-b7 (school readings); b8 (assessed) | QC-PASS docs | Present; the b3 reapplied AN 5.179 hard-cases assignment (BUD-B1-04) and the b5 lineage re-read (BUD-B1-04 + SN 56.11) are dropped in the data block | INTEGRATION-LOSS (two revisits, values in the manifest) |

## Bounded domain topics

| Approved topic | Module | Design evidence | Published state | Status |
|---|---|---|---|---|
| Ethics first: precepts, harmlessness, compassion | b1, b3 | QC-PASS docs | Present | COVERED |
| The practical path per school (Secular, Zen, Insight/Vipassana, Theravada, Thai Forest) | b5 (Thai Forest), b6 (Zen), b7 (Insight + Secular); Theravada carried by b5 | QC-PASS docs | Present | COVERED |
| Core practice instructions and their living teachers' guidance | b4 (Brahmali breath/metta), b7 (Fronsdal transcripts) | QC-PASS docs | Present | COVERED |
| Capstone: sustained practice, one ethical case, defended synthesis | b8 | b8 doc QC PASS; no new sources by design | mod-bud-8 has NO media and no drawsOnPriorModules note — the learner sees an empty syllabus | INTEGRATION-LOSS (the capstone note is supplied in the learner-content file; the revisit entries are in the manifest for Phase A) |
| Elective: Buddhist psychology of the mind (practical portions) | b9 (hindrances and aggregates read from the learner's own log) | QC-PASS doc | Present; missing locators are category-a | COVERED (with category-a losses) |
| Elective: monastic life accounts (Thai Forest lineage stories) | b5 (Chah volume, two teachings read in full per the scope map) | QC-PASS doc | Present | COVERED |

## Intentionally excluded (category c, per the scope)

- Metaphysical and arcane material: rebirth cosmology, abhidharma scholastics, tantric ritual (owner rule; passing mentions only where ethics or practice requires).
- Academic Buddhist studies as a discipline.
- Recorded anchor challenges (not silently dropped): the rebirth-cosmology boundary (all three benchmark anchors teach karma and rebirth; UF and Bond pair it with cosmology — the exclusion is the cosmology, not karma-and-rebirth teaching itself); the school-list structure is practice-driven and not mirrored in the anchors (Secular Buddhism and Thai Forest have no direct anchor units).

## Structural defects for the schema/text lanes (category a)

- Three dropped revisit assignments found by the manifest diff (audit Phase 0): b3's BUD-B1-04 (AN 5.179 reapplied to two hard cases), b4's BUD-B1-05 (Metta Sutta five-stage method, two metta sittings), b5's BUD-B1-04 (AN 5.179 + SN 56.11 lineage re-read). All values are in the manifest; restore as role=revisit in Phase A.
- Band-code titles (b1: … b9: …) on every module — clean titles supplied in deg-wol-buddhism-learner-content.json.
- Missing locators (BUD-B1-04/05/06, BUD-B2-02/03, BUD-B3-02/03, BUD-B5-01, BUD-B7-02, BUD-B9-02/03) and BUD-B5-02's missing printed duration — values in the manifest.
- mod-bud-8's empty syllabus (no media, no drawsOnPriorModules) — the note is supplied in the learner-content file; Phase A restores the revisits.
- Prerequisite divergence: the module docs' explicit headers are sparser than the data block's cumulative chains in three places (b4: b1+b2 vs published b1-b3; b7: b1-b5 vs b1-b6; b9: b1+b4 vs b1-b8) — recorded in the learner-content file; schema lane reconciles or routes.
- No wiki readings linked anywhere in the degree — open opportunity, owner decision.

## Verdict (provisional)

Design coverage: all three exit capabilities and the bounded-domain topics have
QC-passed design evidence, including the scope's own note that the insight
method is carried by b7's Fronsdal practice. No category (b) gap was found.
Publication fidelity: the data block carries the design's sources with the
category-a losses itemized above, of which the three dropped revisits and the
b8 empty syllabus are the most learner-visible. This verdict is PROVISIONAL at
the same trace level as the other matrices: the per-capability deep trace was
not re-derived beyond the scope's own mapping, and the learner audit reports
156 defects across the four degrees. All values needed to close the gaps are in
deg-wol-buddhism-manifest.json and deg-wol-buddhism-learner-content.json.

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

No open items; the three dropped revisits are restored and verified in the
published state (deep trace: docs/degrees/verify/deg-wol-buddhism-b5-deep-trace-1026a.md).

## Addendum (2026-10-26, later same session)

A second deep trace was added for b2 (docs/degrees/verify/deg-wol-buddhism-b2-deep-trace-1026a.md): PASS with one QUALIFIED item — the SN 56.11 word label is corrected in the manifest (about 1,000; 994 measured) but the published locator still carries the old ~1,100 figure until the schema lane's assignments re-apply (fix-list item 5). With b2 and b5 traced, the verdict's deep-trace reservation now covers the remaining buddhism capabilities.

## Addendum 2 (2026-10-26, later same session)

The BUD-B2-02 word label is now published correctly ('about 1,000 words'; verified at commit a0ee345) - the b2 receipt's qualification is lifted. The b2 module doc's own ~1,100 workload estimate remains with its owner.

## Addendum 3 (2026-10-26, later same session)

Deep trace added for b1 (docs/degrees/verify/deg-wol-buddhism-b1-deep-trace-1026a.md): PASS - all six entries value-by-value across the three layers, including the BUD-B1-04 entry whose b5 revisit split this lane made earlier. With b1, b2 and b5 traced, the verdict's deep-trace reservation now covers b3, b4, b6, b7, b8 and b9.

## Addendum 4 (2026-10-26, later same session)

Deep trace added for b4 (docs/degrees/verify/deg-wol-buddhism-b4-deep-trace-1026a.md): PASS - both entries value-by-value (the two-segment Brahmali assignment correctly split into two published entries; the Metta Sutta weekly revisit). With b1, b2, b4 and b5 traced, the verdict's deep-trace reservation now covers b3, b6, b7, b8 and b9.

## Addendum 5 (2026-10-26, later same session)

Deep trace added for b3 (docs/degrees/verify/deg-wol-buddhism-b3-deep-trace-1026a.md): PASS - all four entries value-by-value (the 11:47 Brahm segment with rebirth/karma chapters excluded, the booklet sections, the Five Mindfulness Trainings, the AN 5.179 hard-cases revisit). With b1 through b5 traced, the verdict's deep-trace reservation now covers b6, b7, b8 and b9 only.

## Addendum 6 (2026-10-26, later same session)

Deep trace added for b6 (docs/degrees/verify/deg-wol-buddhism-b6-deep-trace-1026a.md): PASS - both whole-video entries value-by-value with their two-stop viewing plans (1:28:04 at 44:00; 1:40:16 at 50:00). With b1 through b6 traced, the verdict's deep-trace reservation now covers b7, b8 and b9 only.

## Addendum 7 (2026-10-26, later same session)

Deep trace added for b7 (docs/degrees/verify/deg-wol-buddhism-b7-deep-trace-1026a.md): PASS - all three entries value-by-value (whole Batchelor lecture with two stops; the Week 1 transcript with two sittings; the Class 1 recording as optional, matching the schema lane's same-day correction). With b1 through b7 traced, the verdict's deep-trace reservation now covers b8 and b9 only.

## Addendum 8 (2026-10-26, later same session)

Deep trace added for b8 (docs/degrees/verify/deg-wol-buddhism-b8-deep-trace-1026a.md): PASS - no media by design (empty published arrays, matching the doc and manifest) and the drawsOnPriorModules flag published with the doc's wording. With b1 through b8 traced, the verdict's deep-trace reservation now covers b9 only.
