# Curriculum Architecture — the "Degree Standard" (2026-10-26)

Owner ruling (2026-10-26): **"A degree means full exhaustive foundational understanding of a discipline. A module means the granular aspects that compose a subset of the discipline."** A degree is NOT a curated reading list.

This document is binding for every degree on the compendium. It fixes the single root cause behind the Daoism problem: the build pipeline was given a *curation* instruction ("find the best 30% of content online"), not a *coverage* instruction. Nobody ever asked "what would a university degree on X require?" — so workers assembled compact reading lists (~14 h) and labelled them degrees. The 2026-10-26 structural audit fixed formatting, not scale. This spec fixes scale.

---

## The standard (what "degree" means on this site)

1. **Exhaustive foundational coverage.** Every major subtopic of the discipline has at least one assignment teaching it. The discipline's topic map is written FIRST; the degree is built FROM the map, not reverse-engineered from whatever resources a worker found.
2. **Scale.** Minimum viable degree: **≥ 100 hours** of assigned material, **≥ 10 modules**, each module **≥ 6 hours** with **≥ 3 distinct sources**. (University reference point: one semester course ≈ 36–40 contact hours; a major is ~10–12 courses. If we cannot reach ~100 h of reputable material, the degree is dropped, per owner ruling — it is not padded to get there.)
3. **Granularity.** A module = one granular aspect of the discipline (a text, a school, a period, a debate, a practice), taught with enough depth that a learner could discuss it — not one extract standing for a whole tradition. If a module's entire content is "2 texts + a 5-minute extract," the module fails the standard and the degree is not done.
4. **Gaps are declared, not hidden.** Where the discipline requires content that is not freely available, the degree says so explicitly (a "known gaps" note) rather than silently shrinking.
5. **Teaching layer (binding).** A primary text assigned raw — "go read the Daodejing" — is NOT instruction. Every major primary text must be paired with a scholarly teaching layer: lectures that walk through the text (chapter-level), commentary or annotated translation, and at least one secondary scholarly reading. A module whose entire content is "read the texts + a few short videos" fails the standard. University benchmark: real courses teach a semester of lectures AROUND each classic; our modules must carry that scaffold, sourced from the D2 pool.
6. **Hours are real, not nominal.** Instruction hours = sum of actually assigned video segments + taught reading time (text read alongside its teaching layer). Nominal "duration" fields, full-video durations where only segments are assigned, and unaided text reading do not count toward the scale minimums. Owner correction (2026-10-26): the Daoism degree's true substance is ~110 minutes of assigned video plus unscaffolded primary-text reading — the ~14 h figure was a nominal estimate and was wrong.

---

## Anti-gaming safeguards (binding — the quotas are floors, never targets)

Owner warning (2026-10-26): agents tempted to reach the quota with suboptimal, low-quality, off-topic or duplicated content would turn an empty degree into an unnavigable mess. The following rules make padding impossible rather than merely discouraged. All are enforced by `scripts/tests/degrees_learner_audit.py`.

1. **Coverage is the target; hours are a measurement.** The build order is fixed: topic map (D1) → best available resource per topic (D2) → modules (D3) → then hours are MEASURED (D4). If the measured hours miss the floor, the answer is more coverage or a dropped degree — never more content per topic. The gate's hour floors apply only when a degree declares `"scale": "full"`, and a full-scale degree with <100 measured hours fails with the instruction "do NOT pad: extend coverage or unflag."
2. **The coverage matrix is the source of truth.** Once `docs/degrees/inventory/<did>-matrix.json` exists, the gate enforces bidirectional agreement: every topic row must resolve to a live assignment in its module, and every assigned source must appear on a topic row. Off-matrix content is a defect — an agent cannot smuggle in filler.
3. **Quality floor.** At scale "full", every required source must have `verification_status` beginning with `verified` (the existing verify/receipt process). Unverified or "imported" material cannot carry a full-scale degree.
4. **Curation within topics.** For each topic row, use the BEST resource(s) that teach it — not three mediocre ones. Duplication bans: the same content under two source_ids is a defect; the same source in two modules without distinct segments/role is a defect (existing checks).
5. **Navigability cap.** A module with more than 15 distinct sources fails the gate — split the module or curate. A degree is a navigable structure, not a dump.
6. **Checkpoint before mass build (D2 review).** The D1 topic map and the filled D2 matrix must be reviewed and approved (by the owner or the degrees-strategist manager) BEFORE Phase D3 mass integration begins. This is the moment to catch "off-topic rows", "low-quality picks", and "this doesn't feel like a degree" — while it costs one comment, not a rebuild.
7. **Honest failure.** A degree that cannot reach the floors with reputable, on-matrix, verified material is dropped per the owner ruling — the gate makes this visible instead of letting it be quietly padded.

---

## Workflow (binding order — no degree skips a phase)

### Phase D1 — Discipline inventory (before any resource is chosen)
Produce `docs/degrees/inventory/<degree-slug>.md`:
- Derive the **topic map** from ≥ 3 real university syllabi for the discipline (search "[discipline] syllabus site:.edu", Wabash Center syllabi project, university module catalogues). List EVERY subtopic those syllabi teach.
- Structure: corpus (all major primary texts), history/periodization, schools & debates, methods, practices, modern scholarship, reception.
- Deliverable: a **coverage matrix** — every topic row → the module that will teach it. Any row without a module = blocking gap.

### Phase D2 — Resource acquisition at scale
- Source pool is NOT "the best 30%." It is: university **open courseware** (NTU OCW, Harvard Open Learning), **free-audit MOOCs** (HarvardX/edX, Coursera free tier), **open educational resources** (e.g., Edinburgh OER), **free teaching translations** (e.g., Robert Eno's Daodejing), **public-domain texts** (Internet Sacred Texts, ctext.org, Project Gutenberg), scholarly lecture series and university YouTube channels, the existing enriched doc library.
- Every candidate resource is verified open-access (free audit tier counts; paid-only tiers do not) and logged in the degree's resource inventory with what topic it covers.
- The coverage matrix is filled: every topic row must map to at least one verified resource. **If a topic row cannot be filled from the pool, the degree stops and the owner is told — the topic is not silently dropped.**
- **D2 output is reviewed at the checkpoint (anti-gaming safeguard 6) before any Phase D3 work.**

### Phase D3 — Module construction
- Each module is built from the coverage matrix, not from worker preference. A module needs enough assignments to actually teach its aspect (target 6+ hours).
- Primary texts are read whole where reputable translations allow; video courses are assigned by full segment ranges, not decorative extracts.
- Segments schema, role labels, locators, and the existing learner-audit gate all still apply.

### Phase D4 — Coverage audit (gate — IMPLEMENTED 2026-10-26)
`scripts/tests/degrees_learner_audit.py` now enforces:
- minimum module size (≥3 sources, ≥6 measured hours) and minimum degree size (≥10 modules, ≥100 measured hours) — active once a degree declares `"scale": "full"`;
- **topic coverage**: every row of the coverage matrix must resolve to a live assignment, and any assigned source missing from the matrix is a defect;
- quality floor (verified sources), navigability cap (≤15 sources per module), duplicate-content detection (same content under two source_ids), and real-instruction-hours measurement (INFO line per degree).
A degree ships only at 0 defects. The four current degrees pass structurally and are flagged pilot (inventory advisories only).

---

## Worked example — Daoism (proof the material exists, 2026-10-26 web-verified)

The "there is no exhaustive material online" branch is FALSE for Daoism. Verified open resources:

| Resource | Covers | Access |
|---|---|---|
| Harvard, "The Path to Happiness: What Chinese Philosophy Teaches Us about the Good Life" (Michael Puett) — Confucius, Mozi, Mencius, Laozi, Zhuangzi, Xunzi, Han Feizi | whole-degree backbone | free to audit, 13 weeks |
| HarvardX, "China's Political and Intellectual Foundations: From Sage Kings to Confucius" + ChinaX series | history & foundations | free to audit, 15 weeks |
| NTU OpenCourseWare, "Introduction to Classical Chinese Philosophy" — 14 lectures | all classical schools | fully open |
| Coursera (Xi'an Jiaotong Univ.), "中国哲学经典著作导读" — 10 topics incl. Daodejing, Zhuangzi | text-by-text surveys | free tier |
| Coursera (NTU, 蔡璧名), "Zhuangzi: Posture, Awareness, and Sentiment" + "Zhuangzi: Between People" — 8 modules each | deep Zhuangzi | free tier |
| UBC, Edward Slingerland, "Chinese Thought: Ancient Wisdom Meets Modern Science" | early Chinese thought | free |
| Robert Eno, online teaching translation of the Daodejing | primary text, free | fully open |
| Stanford, Mark Edward Lewis, "Chinese Philosophical Texts" | classical Chinese reading | free, self-paced |
| Edinburgh OER, "Introduction to Chinese Philosophy" (Daoism I & II slide sets, CC) | Daoism/Zhuangzi teaching set | fully open |
| Public-domain and open primary texts: Zhuangzi (Legge/Watson excerpts via ctext.org & sacred-texts.com), Liezi, Neiye, Huainanzi | the wider Daoist corpus | fully open |
| University syllabi for reference structure (e.g., UBC ASIA 384 examines the Zhuangzi in its entirety; Lingnan PHI3002 = 10 weeks on the Zhuangzi alone; Wabash RELS 318 Daoism syllabus built on Ziporyn) | module design benchmarks | public |

A university teaches an entire course on the Zhuangzi alone; our current "The Zhuangzi" module has 2 texts + a 5-minute extract. That contrast IS the gap. With the resources above plus the existing doc library, a ~100 h Daoism degree is buildable; if any coverage-matrix row cannot be filled, the owner is told and the degree is reconsidered, per ruling.

---

## Status & routing — ALL degrees, no exceptions

Owner clarification (2026-10-27): Daoism was an EXAMPLE. The standard applies to every degree in the compendium. Measured real instruction hours per degree (2026-10-27 gate run):

| Degree | Modules | Measured hours |
|---|---|---|
| deg-philosophy | 6 | 0.0 |
| deg-contemplative | 6 | 1.0 |
| deg-relational | 4 | 2.5 |
| deg-mind | 5 | 0.0 |
| deg-wellbeing | 4 | 2.0 |
| deg-therapeutic | 4 | 3.0 |
| deg-psychology-101 | 1 | 0.0 |
| deg-qigong | 12 | 1.5 |
| deg-cmp | 12 | 3.5 |
| deg-psychdim | 8 | 3.8 |
| deg-wol-daoism | 5 | 2.1 |
| deg-wol-buddhism | 9 | 11.2 |
| deg-wol-pragmatism | 5 | 3.1 |
| deg-wol-greek / existentialism / positive | 0 | (in development — build to this standard from the start) |

No degree currently meets the standard. The rebuild wave covers ALL of them: `deg-arch-inventory` (Phase D1 per degree — batch by lane, e.g. wol-x5, psych-x4, well-x3, remaining), then the D2 checkpoint, then `deg-arch-build` (D2–D4). Degrees that cannot reach the floors with reputable on-matrix verified material are DROPPED per owner ruling — reported to the owner with the specific unfillable rows, not padded.
