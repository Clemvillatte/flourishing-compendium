# DEGREE BUILD HANDOFF — "Contemplative & Mental Practices"

**For the next agent:** this is a complete brief for building a new Academy degree — *Contemplative & Mental Practices — A Year of Practice* — in the flourishing-compendium repository, to the standard of the existing Qi Gong degree. It was prepared by the previous agent on 2026-10-21/22 after inspecting the live repository and doing fresh external research (Part 2A). Repo facts were read from the repo; external claims in Part 2A are cited with URLs and an honest note of what was verified (article page/abstract vs full text). **You must re-open and re-verify everything yourself before writing. Zero hallucination: every fact and quote must come from a source you actually opened.**

---

## PART 0 — Ready-to-send prompt

The owner supplies a fresh token (the one used to write this document is deleted). Placeholder: `[TOKEN]`.

```
I'm resuming an ongoing project. Repository: https://github.com/Clemvillatte/flourishing-compendium
Act as an expert in rich, academy-backed Wiki content development for writers on Philosophy and Psychological Sciences.

Task 1: Use this Token, it is sufficient: [TOKEN]
(NO credential and NO connector needed, all agents work with their token and can access all
repositories to do the work "write and read" mode activated; token will be deleted at the end
of your session by owner)

——
The wiki feeds my essays on Genuine Flourishing, alleviation of suffering and wisdom development.
No hallucination is tolerated: every fact and quote must come from a source you actually opened
(web search + fetch; the owner's primary-source library is in docs/PRIMARY-SOURCES.md). Humanise
all text per docs/enrichment/HUMANIZER-SKILL.md.

Setup: clone the repo with the token, then read in order: docs/DEGREE-CMP-HANDOFF.md (your build
brief — read it fully first; it contains the module blueprint, coverage register, evidence
register, and the data-splice recipe), handoff.md, docs/enrichment/OPERATIONS.md,
docs/enrichment/PROTOCOL.md, docs/enrichment/EXEMPLARS.md, TASKBOARD.md.

SPECIAL TASK (takes precedence over normal bands): build the degree specified in
docs/DEGREE-CMP-HANDOFF.md — "Contemplative & Mental Practices — A Year of Practice", 12 modules.
Follow that document exactly: create the new kernels it lists with the evidence it cites, wire
the degree into the Academy data with the safe-splice recipe, QA in the browser, push.
If you finish before time is up, take a normal band per the protocols.

Announce the mission and each milestone as you go. Save and heartbeat cadence per OPERATIONS.md.
Before every push, run the repo's test suite locally (python3 -m unittest discover -s scripts/tests
and node --test scripts/tests/randomizer.test.cjs) — CI runs them on deploy and a failure blocks
the site's deployment.

Do NOT interrupt your work. TIMING AND REPORTING (binding): at first execution, record the actual
UTC start time and a monotonic elapsed-time reading; set the report deadline once, 60 minutes
later (an explicit owner deadline takes precedence). Check measured elapsed time after each pass
and immediately before reporting — never estimate elapsed time from the amount of work completed.
If clock readings disagree, cross-check UTC against a fresh external time response (for example
an HTTP Date header) without assuming a cause for the discrepancy. Follow-up messages do not
restart the timer. If a deadline has already passed when you notice, acknowledge that fact rather
than silently scheduling another hour. On every resume, refresh remote baton status before editing.

The degree will likely take more than one session. A partial degree with N complete, polished
modules beats a full degree with thin ones: push only modules that are genuinely finished,
set the degree status to "draft" until all 12 exist and are verified, update the changelog at
the bottom of docs/DEGREE-CMP-HANDOFF.md with the resume point, and report at T+60 with
whatever passes you completed. Thank you.
```

---

## PART 1 — Project definition

**The product.** A new Academy degree, `deg-cmp`, titled **"Contemplative & Mental Practices — A Year of Practice"** — a practice-based, progressive, self-paced curriculum covering the science-backed family of contemplative and self-regulatory mental practices. It sits beside the Qi Gong degree (`deg-qigong`, 12 modules, ≈44h) as the second "year of practice" degree, and is deliberately distinct from `deg-contemplative` ("Contemplative Traditions", 6 modules), which teaches *traditions*; this degree teaches *practices* with protocols, evidence, and guided videos.

**Why it exists.** The kernel library (309 kernels in `content/kernels/`) already contains a large, evidence-annotated set of contemplative and self-regulatory practices — built under a prior owner-directed special task ("contemplative and self-regulatory mental practices… Kernels of all science-backed such practice (OMM, LKM, NSDR etc), with full protocol + evidence + video link"). The degree converts that library into a curriculum: a walking path through the practices, in the order a real learner should meet them.

**The model to copy.** `deg-qigong`: 12 modules, habit-first arc, every module has a driving *question*, 3 outcomes, required verified videos with levels, wiki readings that link the kernels, a practice activity, a 3-item rubric. Study hours ≈48; the *daily practice schedule* is separate and defined in Part 3.1.

**Evidence discipline (owner's rules, enforced).**
- Separate evidence types explicitly: **direct trials of the practice**, **multicomponent-program evidence** (e.g. MBSR trials), **related-practice/family evidence** (the honest fallback used by K411 zuowang), **mechanistic findings**, and **traditional/historical rationale**. Never present one as another. Where the literature reports no effect size, say "not reported" — do not manufacture one.
- Effect sizes where reported; null results and limitations included. Correlations must never be phrased as treatment effects (Part 2C).
- Every video verified by opening it or via YouTube oembed (`https://www.youtube.com/oembed?url=...&format=json`); durations taken from the source page, never guessed.
- The kernels' existing "A guided version" links are your **media shortlist** — each kernel file names its verified guided recording; re-verify via oembed before wiring in, and supplement only with sources you open yourself.
- Humanise all prose per `docs/enrichment/HUMANIZER-SKILL.md` (binding).
- Content-neutral UI: do not touch the Academy's design/CSS; only data.

---

## PART 2 — What already exists (re-verify before use)

### 2.1 Degree data and schemas

Degree data lives in one line of `site/assets/app.js` (~line 2794): `window.fcAcademyData = {...}` — a single JSON object, ~200KB line. There is no generator script for it; **app.js is the canonical source for this object** (verified: nothing in `scripts/` writes it — `scripts/build.py` generates only `site/data/*.json.gz` from content markdown, and CI re-runs build.py on deploy). Schema:

- `degrees[]`: `{id, icon, title, description, status, openingNote, modules[], goFurther[]}`. Icons are emoji (existing: 🏛️🪷🤝🧠✨🩺🧪☯️ — pick a non-duplicate, e.g. 🧘). `status` is a **manual flag**: `"draft"` shows a "draft — some modules lack Mastery-level sources" chip on the degree and a "draft" chip on the hall card; `"final"` shows neither. The Qi Gong session set it to "final" only after every module's videos were verified and the degree looked complete. Do the same.
- `modules{}` keyed by module id: `{id, degree_id, title, question, description, outcomes[3], prerequisites[], requiredMedia[{source_id, level}], optionalMedia[], wiki_readings[{wiki_id, title}], activity, rubric[3], gaps[], durationHours, difficulty, capstone}`. Levels: Foundations / Intermediate / Advanced.
- `sources[]`: `{source_id, youtube_id_or_url, canonical_url, title, presenter, host, duration, topic_ids, level, mission, verification_status, gate_evidence}`. Qi Gong sources use ids like `QG-M01-01` (module 1, item 1), mission `QG1`, topic_ids `P-QG`, verification_status `verified-video`, gate_evidence describing how the video was verified.
- `goFurther[]`: `{"title","url","description","image"}` where `image` is a favicon URL like `https://www.google.com/s2/favicons?domain=<host>`. Verified page links allowed here (teacher finders, retreat directories).

### 2.2 The kernel library (`content/kernels/`, 309 kernels)

The practice families you will draw from. Each kernel follows the house format (Protocol / Evidence / A guided version / Operationalises / Related concepts) — **verify each kernel you use actually has a verified guided link and effect-size-bearing evidence before citing it**; do not assume.

- **Attention & awareness**: K100 breath anchoring, K101 open monitoring, K102 body scan, K103 noting and labeling, K104 mindful walking, K105 single-tasking, K106 five-senses grounding, K107 soft fascination, K108 meta-awareness check, K109 quiet eye, K110 savoring, K111 interoceptive awareness, K112 scheduled empty time, K113 transition pause, K114 standing meditation (zhan zhuang), K160 feeling-tone pass, K390 raisin meditation, K391 raisin mind in routine, K392 three-minute breathing space, K393 habit releaser, K394 sounds and thoughts meditation, K398 mindfulness bells, K411 zuowang.
- **Acceptance**: K115 willingness, K116 urge surfing, K120 the 90-second wave, K121 dropping the struggle, K385 cognitive acceptance, K386 thought-suppression paradox, K388 passengers on the bus, K395 exploring difficulty, K397 approach-don't-avoid.
- **Compassion & emotion**: K161 LKM, K162 self-compassion, K163 compassion-focused breathing, K166 sympathetic joy, K167 equanimity/eight worldly winds, K168 near-enemy audit, K169 anger dissection, K209 repair attempt, K248 positive greetings, K378 compassionate self, K379 compassion for a struggling self, K380 two teachers, K381 compassionate thinking, K382 perfect nurturer, K383 safe place, K384 two-chair dialogue, K396 befriending meditation, K399 kindness pool, K406 compassionate letter, K409 NSDR, K410 physiological sigh.
- **Body & biophysiology**: K194 slow breathing 5–6 bpm, K195 posture reset, K196 daily movement, K200 rest as practice, K201 yoga/qigong/tai chi, K203 nap protocol, K204 phone-free first/last hour, K205 nature exposure, K206 PMR, K249 half-smile.
- **Cognitive**: K126 cognitive defusion, K127 reappraisal, K128 thought record, K245 expressive writing, K246 self-monitoring, K401 sing the thought, K402 listen to the storyteller, K407 coping cards, K408 downward arrow.
- **Concentration & depth**: K400 word repetition (mantra), K109 quiet eye, K411 zuowang.
- **Life-architecture**: K240 weekly review, K241 seasonal redesign, K242 daily architecture, K243 returning practice, K244 public commitment.

### 2.3 New kernels to create (check `python3 scripts/enrich_find.py title "<name>"` first — do not duplicate)

1. **Compassion meditation (CCT-style)** — evidence in Part 2A. Placement: Module VIII core.
2. **Mindful eating** — evidence in Part 2A. Placement: Module IX core.
3. **Box breathing** — evidence in Part 2A (honest scope: short-term stress/anxiety/mood effects; inconsistent autonomic findings; no spirometry evidence; not a standalone treatment). Placement: Module IV core.
4. **4-7-8 breathing** — thinner evidence (one RCT in post-bariatric patients + one controlled study); include as a variant section inside the box-breathing kernel, or a small kernel with modest framing. Placement: Module IV.
5. **RAIN practice** — treat as an **unresolved research question**: search for any trial or controlled study of RAIN by name before deciding; if none is found, either skip or use the K411 honest family-evidence framing (nearest studied relatives: self-compassion training, cognitive acceptance). Placement if built: Module V elective.
6. Optional, if the Daoist arc needs it: **Guard the One (shouyi) as a practice kernel** — principle D048 exists; a practice kernel would operationalise it (family-evidence framing like K411). Placement: Module XI elective.

Kernel format: copy K411 exactly (front-matter, definition paragraph, `### Protocol`, `### Evidence`, `### A guided version`, `## Operationalises`, `## Related concepts`). Follow `docs/enrichment/PROTOCOL.md` + validation (`python3 scripts/enrich_validate.py`), baton discipline per `docs/enrichment/OPERATIONS.md`, EXEMPLARS as the quality standard, HUMANIZER-SKILL binding. New content must also pass the repo test suite (`python3 -m unittest discover -s scripts/tests`) — CI runs it on every deploy.

### 2A. Evidence register (compiled by the previous agent; notes what was verified and how)

**Compassion cultivation training (CCT).**
- Jazaieri et al. 2013, *Motivation and Emotion* — RCT, 100 community adults, 9-week CCT vs waitlist: increased mindfulness and happiness, decreased worry and emotional suppression; no change in perceived stress; formal practice amount predicted reductions in worry/suppression. Verified from the full-text PDF hosted at CCARE: [Jazaieri et al. 2013 PDF](https://ccare.stanford.edu/wp-content/uploads/2013/07/Jazaieri-et-al.-2013.pdf).
- Jazaieri et al. 2013, *Journal of Happiness Studies* — same trial population (100 adults): significant improvements in all three compassion domains (for others, receiving, self-compassion). Verified from the article record: [Springer record](https://ideas.repec.org/a/spr/jhappi/v14y2013i4p1113-1126.html) (abstract-level).
- Caregiver RCT (2021) — 161 caregivers of people with mental illness: DASS depression/anxiety/stress improvements vs waitlist, maintained at 6-month follow-up. Verified from the open full text: [PMC7941195](https://pmc.ncbi.nlm.nih.gov/articles/PMC7941195/).

**Mindful eating.**
- "9 Hunger" online RCT (2023, *Mindfulness*) — n=224, 2 weeks × 5 min/day: primary outcomes (emotional eating, external eating, loss-of-control eating) d = 0.38–0.61; secondaries d = 0.29–1.16; effects held at 3 months. Verified from the article page: [Springer article](https://link.springer.com/article/10.1007/s12671-023-02263-9) (abstract-level).
- Youth meta-analysis (2026, *Mindfulness*) — 5 trials: reduced calorie intake (MD = −174.63), total intake (MD = −42.36), emotional eating (MD = −0.49); no improvement in self-reported awareness/distraction. Verified from the article page: [Springer article](https://link.springer.com/article/10.1007/s12671-026-02785-y) (abstract-level).
- Obesity Reviews meta-analysis of mindful/intuitive eating RCTs (10 studies): weight loss −0.348 kg vs nonintervention controls (small); **no difference vs conventional diet programs**; BMI and waist circumference not significant. Verified from the open full text: [Wiley full text](https://onlinelibrary.wiley.com/doi/full/10.1111/obr.12918). (Authorship not verified — confirm the citation details from the article itself when writing.)
- Tapper 2022, *Nutrition Bulletin* — multi-component MBIs beneficial for disordered eating; benefits vs alternative treatments unclear; specific mindful-eating strategies: insufficient evidence. Verified from the open full text: [Wiley full text](https://onlinelibrary.wiley.com/doi/10.1111/nbu.12559).
- MBIs for binge eating meta (2025) — vs non-psychological controls g = −0.65 (post) / −0.71 (follow-up); **negligible vs active psychological controls** (g = −0.05 / 0.13). Verified from the article page: [Springer article](https://link.springer.com/article/10.1007/s10865-025-00550-5) (abstract-level).

**Box breathing / 4-7-8.**
- Dujawara, Ali & Kumari 2026, *Applied Psychophysiology and Biofeedback* — PRISMA systematic review of box-breathing RCTs: **8 eligible RCTs** (the abstract also mentions "29 RCTs" once, apparently an internal inconsistency — the review's own summary articles count 8; resolve from the full text if you cite the number); findings: short-term benefits on perceived stress, anxiety and mood "in a non-uniform manner"; mixed autonomic responses; reduces some acute stress markers (HR, state anxiety, salivary alpha-amylase) but not HRV or cortisol; no spirometry/lung-function evidence; evidence limited (few studies, variable protocols, little long-term data). Verified from the Springer article page: [Springer article](https://link.springer.com/article/10.1007/s10484-026-09812-7) (abstract-level).
- Box vs prolonged exhalation RCT (Compr Psychoneuroendocrinol 2026;27:100360) — 66 participants, virtual TSST: both attenuated HR, state anxiety, sAA vs normal breathing; HRV, cortisol, cognition unchanged. Verified from the open full text: [PMC13321280](https://pmc.ncbi.nlm.nih.gov/articles/PMC13321280/).
- In the Balban 2023 head-to-head (already cited inside kernel K410), the box arm improved mood but less than cyclic sighing — open the original Cell Reports Medicine paper when writing.
- 4-7-8: RCT in post-bariatric-surgery patients (state anxiety reduced vs deep-breathing control) and one controlled study in healthy adults (parasympathetic markers) — both small; frame as "modest preliminary evidence". Verified via the review table: [PMC12372116](https://pmc.ncbi.nlm.nih.gov/articles/PMC12372116/) and [BBC Future summary](https://www.bbc.com/future/article/20260513-how-5-minutes-of-breathwork-can-lower-your-stress).

### 2B. Owner directive — no disclaimers (binding)

The owner has explicitly directed (2026-10-22): **this is a personal-use learning Academy; the degree carries no safety warnings, adverse-effect caveats, clinical disclaimers, "go gently" notes, or contraindication language.** Do not add them — not in the `openingNote`, not in module descriptions, not in kernel text. Write the practices plainly, warmly, and positively. Progressive dosing ("start with ten minutes, build to twenty") stays because it is good pedagogy, not because it is a warning. If a source you open states a limitation relevant to the *evidence* (a null result, a correlation-vs-intervention distinction), that stays — Part 2C governs factual honesty, not disclaimers.

### 2C. Framing corrections to apply when writing (verify each yourself)

- **MacBeth & Gumley 2012, r = −0.54** (K162): a meta-analytic *association* between self-compassion and psychopathology — never phrase as a treatment effect. Intervention evidence for self-compassion training is separate (search it when writing the module).
- **"The 90-second wave" (K120)**: the 90-second figure traces to Jill Bolle Taylor's popular book, not controlled trials — verify the kernel's current framing and keep it honest.
- **Quiet eye (K109)**: evidence is mostly from aiming sports (marksmanship, golf putting) — frame its scope accordingly.
- **NSDR/Kjaer 2002 dopamine PET**: a mechanistic finding about Yoga Nidra, not proof of restorative efficacy — keep the framing mechanistic.
- **Zeng 2015 / Fredrickson 2017 (LKM)**: check whether effects are vs active controls; note dose-response findings and their limits.

---

## PART 3 — The degree blueprint (12 modules, ≈48 study hours)

Arc logic mirrors Qi Gong: habit first (I), technique families (II–VIII), daily-life integration (IX–X), depth (XI), ownership (XII). Difficulty ramps Beginner → Advanced. Every module's required media = guided videos (start from the kernels' own guided links — that IS the shortlist; re-verify each via oembed). Levels Foundations/Intermediate/Advanced. Prerequisites chain linearly. Module 12 `capstone: true`.

### 3.1 Year-long practice schedule (put this arc in the degree description / openingNote)

12 modules ≈ 3 weeks each ≈ 36 weeks, with a lighter "season of integration" (weeks 37–48) revisiting favourites and the Module XII design work. Daily practice minutes ramp: Module I starts at 10 min/day; by Module VI expect 20 min/day; Modules XI–XII 20–30 min. Weekly rhythm: 6 practice days + 1 review day (K240's weekly review as the Sabbath of the degree). Study hours (≈4/module) sit beside the practice, not instead of it.

### 3.2 Module map and coverage register

| # | id | Title | Question | Level | Hours | Core kernels | Electives |
|---|----|-------|----------|-------|-------|--------------|-----------|
| I | mod-cmp-1 | Foundations: the daily sit | What happens when attention has one home? | Beginner | 4 | K100, K392 | — |
| II | mod-cmp-2 | The body as anchor | Where is the practice located? | Beginner | 4 | K102, K111, K104 | K393 |
| III | mod-cmp-3 | Awareness itself | What watches the wandering mind? | Intermediate | 4 | K101, K103, K394, K108 | K160 |
| IV | mod-cmp-4 | Regulation: breath and body | Can the body steer the nervous system? | Beginner | 4 | K194, K410, K409, K206, box-breathing kernel (new) | K195, K200, K203, K196 |
| V | mod-cmp-5 | Acceptance: letting the wave pass | What if nothing needs fixing? | Intermediate | 4 | K115, K385, K116, K395 | K120, K121, K397, K386, K388, RAIN (if built) |
| VI | mod-cmp-6 | Loving-kindness | Can goodwill be trained? | Intermediate | 4 | K161, K396, K166 | K168 |
| VII | mod-cmp-7 | Self-compassion | What does the inner ally sound like? | Intermediate | 4 | K162, K163, K382, K406 | K378, K379, K381, K383, K384 |
| VIII | mod-cmp-8 | Compassion in action | Where does compassion point outward? | Intermediate | 4 | CCT kernel (new), K399, K209 | K248, K167, K380 |
| IX | mod-cmp-9 | Mindfulness in daily life | Does practice survive the morning rush? | Beginner | 3 | K105, K106, K110, K390, K391, mindful-eating kernel (new) | K113, K398, K107, K205, K204, K249 |
| X | mod-cmp-10 | Working with thoughts | Are you your thoughts? | Intermediate | 4 | K126, K127, K245 | K169, K407, K401, K402, K128, K408 |
| XI | mod-cmp-11 | Concentration and release | Two doors to depth: which is yours? | Advanced | 5 | K400, K411 | K109, shouyi kernel (if created), K146 |
| XII | mod-cmp-12 | Integration: your own practice | What is yours to keep? | Advanced | 4 | K240, K243, K242 | K241, K244, K112, K246 |

**Coverage register (every Part 2.2 kernel accounted for — primary placement or justified exclusion):**
- All kernels listed in Part 2.2 appear above as core or elective, except: **K114 (zhan zhuang)** and **K201 (yoga/qigong/tai chi)** — justified exclusions: both are taught inside the Qi Gong degree (`deg-qigong` modules 3 and 7); cross-reference them in Module XI/XII prose rather than duplicating.
- **Duplicates resolved:** K399 appears only in VIII; K112 only in XII; K109 only in XI (its quiet-eye scope noted in Part 2C).
- **Justified pedagogical omissions** (in the library but not placed — record in the changelog if you keep them out, with the reason): none known at handoff; if you find the degree crowded, prefer cutting electives before cores, and log what you cut and why.

Design intent notes:
- **Module XI is comparative**, not hierarchical: concentration (mantra, one-pointedness) and release (zuowang, open awareness) are two historically distinct doors — concentration suits some temperaments, release others; the evidence for each family is stated separately (K400 family evidence vs K411's honest family-relative framing).
- **Module IV** is breath *and* body regulation — the title says so; techniques are taught as state-regulation tools with the Part 2A evidence scope.

### 3.3 Worked example — Module I fully specified (use as the template for all twelve)

- `title`: "Foundations: the daily sit"; `question`: "What happens when attention has one home?"; `difficulty`: "Beginner"; `durationHours`: 4; `prerequisites`: [].
- `description`: "Breath anchoring (focused attention): ten minutes daily, growing to twenty; the three-minute breathing space as the portable version."
- `outcomes`: (1) "Sit ten minutes daily for three weeks, with attention returning on its own" (2) "Explain what focused-attention training changes, per the evidence, and what it does not" (3) "Name the principles the practice operationalises (open the kernels' Operationalises lists)".
- `requiredMedia`: 1–2 guided recordings — start from the guided links inside kernels K100 and K392 (re-verify via oembed; take durations from the source pages; set levels honestly, e.g. Foundations for the 10-minute sit).
- `activity`: "Keep a one-line-per-day log for three weeks: minutes sat, times the mind wandered (rough count), one word for how the sit ended."
- `rubric`: (1) "Log kept, not gilded" (2) "Honesty about wandering" (3) "Can say in your own words what the evidence claims".
- `gaps`: any null results or limits in the K100/K392 family evidence (open the kernels and mirror their honesty).

**Per-module spec for the remaining eleven:** same structure; write them yourself in the QG voice (concrete, warm, honest), researching each kernel file you cite. The cores above are the contract; the outcomes/activity/rubric are yours to write to the Module I standard.

**Degree-level fields:** `icon` 🧘 (or another non-duplicate); `status` "draft" until all 12 modules exist and are verified, then "final"; `openingNote`: one warm paragraph in the QG voice (no disclaimers — Part 2B); `goFurther`: 2–4 verified entries in the exact shape from Part 2.1 (suggestions to verify before listing: a meditation-teacher directory, Cheetah House — a meditation-support resource, a free MBSR-style course directory).

**Degree artwork (nonblocking):** the Academy's 9 paintings are all assigned; the new degree falls back to the hero image automatically (`acadHallImg` returns hero.jpg when no `ACAD_IMG` entry exists). The owner may supply a 10th artwork later — note it in the changelog; **do not generate AI imagery** (owner rejected AI placeholders) and do not block on it.

**TOPIC_NAMES:** add `'P-CMP': 'Contemplative & Mental Practices'` to the `TOPIC_NAMES` map in `renderSourceExplorer` (app.js, ~line 3552) and use `"topic_ids":"P-CMP"` on new sources. Mission code `CMP1`; source ids `CMP-M01-01` style.

---

## PART 4 — Data plumbing (the safe-splice recipe)

`app.js` is a ~950KB file where `fcAcademyData` and `fcGalleryData` are single huge lines. **Never edit the line with find/replace and never rewrite the file** — concurrent agents race, and a bad splice broke the whole site once (see `docs/DISCOVERY-GALLERY-REPAIR.md`). Recipe (Python, repo root):

```python
import json
s = open('site/assets/app.js', encoding='utf-8').read()
i = s.find('window.fcAcademyData = ')
assert i != -1 and s.find('window.fcAcademyData = ', i+1) == -1   # marker exactly once
start = s.index('{', i)
data, end = json.JSONDecoder().raw_decode(s, start)
assert data.get('schemaVersion') == 1 and 'degrees' in data and 'modules' in data and 'sources' in data
# --- make additions IDEMPOTENT BY ID (skip if present), BUT allow controlled updates
# of YOUR OWN ids (deg-cmp, mod-cmp-*, CMP-*) to resume/correct a partial degree;
# never touch other degrees' records.
# bump data['updated'] to today's date.
new = json.dumps(data, ensure_ascii=False, separators=(',', ':'))
open('site/assets/app.js', 'w', encoding='utf-8').write(s[:start] + new + s[end:])
# golden rule: the tail is written as s[end:], NEVER s[start+len(new):]
```

**Referential validation (syntax check is not enough) — run after every splice:**
```bash
node --check site/assets/app.js
python3 - << 'EOF'
import json, os, glob
s = open('site/assets/app.js', encoding='utf-8').read()
i = s.find('window.fcAcademyData = '); start = s.index('{', i)
d, end = json.JSONDecoder().raw_decode(s, start)
# 1) unique source ids (duplicates detected, not just membership)
src_ids = [x['source_id'] for x in d['sources']]
assert len(src_ids) == len(set(src_ids)), 'duplicate source ids'
src_set = set(src_ids)
deg = next(x for x in d['degrees'] if x['id']=='deg-cmp')
# 2) referenced kernels actually exist as content files
kfiles = {os.path.basename(f).split(' — ')[0] for f in glob.glob('content/kernels/K*.md')}
for mid in deg['modules']:
    m = d['modules'][mid]
    assert m['degree_id']=='deg-cmp', mid
    for rm in m['requiredMedia']+m['optionalMedia']:
        assert rm['source_id'] in src_set, (mid, rm)
    for wr in m['wiki_readings']:
        assert wr['wiki_id'] in kfiles, ('missing kernel file', mid, wr['wiki_id'])
    for p in m.get('prerequisites',[]):
        assert p in deg['modules'], (mid, p)
    assert m['durationHours'] and m['difficulty'] and m['question'] and len(m['outcomes'])==3
print('degree OK:', len(deg['modules']), 'modules')
# 3) gallery regression guard: compare against the FETCHED baseline, not a frozen number.
# At handoff: 602 entries, 0 duplicate urls, 378 real images. Capture the baseline first:
#   git show origin/main:site/assets/app.js > /tmp/base.js  (parse the same way)
# then assert entry count, url set, and per-entry image fields are unchanged.
EOF
```

**Push (races are frequent — 5+ concurrent agents).** Token-in-URL fails (GitHub's redirect drops credentials); use the Authorization-header method; **stop and inspect on fetch or rebase failure** — only retry on an actual non-fast-forward race:

```bash
TOKEN="[TOKEN]"
AUTH=$(printf "x-access-token:%s" "$TOKEN" | base64 -w0)
git fetch -q origin main || { echo "fetch failed — inspect"; exit 1; }
git rebase origin/main || { echo "rebase conflict — resolve, do not force"; exit 1; }
GIT_TERMINAL_PROMPT=0 git -c http.extraHeader="Authorization: Basic $AUTH" \
  push https://github.com/Clemvillatte/flourishing-compendium.git main
# retry the whole sequence on non-ff rejection; re-run validation after any rebase
```

Git identity: `user.name "Computer Agent"`, `user.email computer@perplexity.ai`. **After the push, verify your commit is an ancestor of origin/main (not necessarily the tip — other agents may push after you):**
```bash
git fetch -q origin main
git merge-base --is-ancestor HEAD origin/main && echo "pushed OK"
git show origin/main:site/assets/app.js > /tmp/origin-check.js && node --check /tmp/origin-check.js
```

**Deployment (verified from `.github/workflows/deploy.yml`):** every push to main triggers CI that (1) runs the enrichment regression tests (`python3 -m unittest discover -s scripts/tests`), (2) runs `python3 scripts/build.py` to build `site/data/*.json.gz` from content, (3) runs the randomizer tests, then (4) deploys the `site/` directory to GitHub Pages. Consequences: run those tests locally before pushing (a failure blocks deployment); the live site is GitHub Pages — re-run browser QA against the Pages URL after deployment if reachable.

**Browser QA (mandatory before final push).** `python3 scripts/build.py` (local data files), serve `site/` on a port, then with Playwright (headless chromium): wait for the boot splash to auto-dismiss, click the Academy tab, click the new degree hall, verify: degree band renders, module cards render with expandable bodies, required media rows show with levels, module detail pages render (kicker, title, question, sections), wiki reading links resolve to the kernels, no console/page errors, mobile (375px) renders. Known pre-existing issues you must NOT chase: mobile horizontal overflow from app chrome (latent, invisible to users), and the boot splash waits on the data/*.gz fetches.

---

## PART 5 — Order of work

1. Setup + read this doc + protocols + take the baton per OPERATIONS.md (announce the mission).
2. Create the new kernels (Part 2.3) using the Part 2A evidence — research, write in K411 format, validate, `scripts/enrich_save.sh` after every item.
3. Assemble module data in arc order: open the kernel files you cite, find/verify videos (oembed + open; duration from source), write outcomes/activity/rubric to the Module I standard, and keep the content disclaimer-free per Part 2B.
4. Splice `fcAcademyData` (Part 4), add the TOPIC_NAMES entry, validate (syntax + referential), run the repo test suite, browser QA.
5. Push, verify ancestor + origin re-check, update the changelog below, report at T+60.

**If time runs short:** push only complete, polished modules in arc order and keep `status: "draft"`; record the resume point in the changelog. Never push unverified videos or unsourced claims — a missing module is recoverable, a hallucinated fact is not.

---

## Changelog

- 2026-10-22 (computer agent, session 3): handoff document created from live repo inspection + fresh research — degree defined (`deg-cmp`), 12-module blueprint with coverage register and year schedule designed, kernel inventory verified (309 kernels incl. K411), external evidence register compiled (CCT, mindful eating, box breathing/4-7-8) with per-source verification notes, schemas + idempotent splice recipe + referential validation + gated push loop + CI/deploy facts documented. Revised same day per owner directive: safety framework and all disclaimer requirements removed (Part 2B is now an explicit no-disclaimers directive); evidence-honesty framing corrections kept. No other repo changes this session.
- 2026-10-21 (computer agent, session 4): degree `deg-cmp` BUILT and pushed (commit 3694f3990). New kernels K413 Box breathing (4-7-8 as variant section), K414 Compassion meditation (CCT-style), K415 Mindful eating, all validator-clean and evidence-verified from opened sources (register re-verified: Jazaieri 2013 both papers, Soh 2021 JAMA Netw Open with effect sizes, Dujawara 2026 review, McAllister 2026 TSST RCT, Siebieszuk 2025 for 4-7-8, Peitz & Warschburger 2023 with d values, Lai & Chang 2026, Fuentes Artiles 2019 full text, Tapper 2022 full text, Liu 2025). CMP1 hub page written (content/structure/), all wikilinks resolve, registered in _order.json. fcAcademyData spliced per Part 4 recipe (marker has a second commented occurrence at ~line 2807, the recipe's uniqueness assert was adapted to pick the assignment that raw-decodes with schemaVersion 1): 12 modules mod-cmp-1..12 per blueprint, 24 sources CMP-M01-01..CMP-M12-01, degree status "draft", icon 🧘, openingNote + year arc per Part 3.1, goFurther (Palouse, UCLA Mindful, Cheetah House). TOPIC_NAMES: added P-CMP and the missing P-QG. Artwork: owner-supplied Franz von Stuck "Dissonanz" resized to site/assets/academy/cmp.jpg (1600x1334, top-weighted crop) and mapped in ACAD_IMG. All 24 media verified (oembed for YouTube with durations from watch pages; direct UCLA Mindful cloudfront MP3s; GGIA and Palouse pages opened). franticworld direct MP3s 404 (page still lists them) so they were not used. Browser QA green (degree band, module cards, module pages, wiki links, mobile 375px, no page errors); unit + randomizer tests green; origin re-check green. Coordination: kpr notified via TASKBOARD that CCT + mindful-eating kernels were claimed here. RESUME POINT for next session: (1) RAIN research question unresolved (search for trials; skip or K411 family framing); (2) shouyi practice kernel not built (optional, Module XI elective); (3) consider flipping status to "final" after a final review pass; (4) Balban 2023 full text (Cell Press) blocked by fetch, box-arm mood claim framed via K410 cross-reference only; (5) verify live Pages URL after CI deploy. Ledger: docs/enrichment/sources/cmp/ledger.md.
- 2026-10-21 (computer agent, session 4, verification round 2): advisor verification pass corrections applied and pushed. Evidence fixes: K414 CCT caregiver trial author corrected to Hansen et al. 2021 (the earlier "Soh" note was wrong; verified from PMC7941195); K413 Balban claim reframed to the verified PubMed abstract wording (all three breathwork arms improved mood vs mindfulness meditation, cyclic sighing most effective; no sighing-vs-box head-to-head claim; Balban PubMed URL added to kernel Sources); K413 Dujawara "8 eligible RCTs" count removed (abstract no longer accessible, count unverifiable); K415 "Liu et al." byline removed (unverified) and youth-meta raw MDs dropped (units unclear). Metadata fixes: CMP-M01-02 host corrected to UMass Memorial Health Center for Mindfulness; CMP-M04-04 box video duration corrected to 5:09; Cheetah House goFurther description corrected (support organization for meditation-related distress, no teacher directory). Framing fixes (association vs intervention): K414 practice-volume sentence, K415 final line per Tapper 2022, CMP1 "what you resist persists" line, CMP1 Module VI dose-response line, K413 4-7-8 "stronger slowing" wording. Media additions: M2 optional body scan excerpt (Bob Linscott, UMM page, 9 min, page-verified); M10 optional "Leaves on a Stream" defusion (Dr Liz White, jgdVI7-3xkg, 6:09, oembed-verified); M11 optional So Hum mantra (Kyle Greenfield, SR4CfDxY18g, 19:50, oembed-verified). Total sources now 27. K120 removed from M5 elective readings (kernel has no Evidence section) — NOTE FOR kpr: K120 could be enriched with a trial-based Evidence section and re-added. Referential validation, unit tests, randomizer tests, build, browser QA all green; desktop + 375px screenshots inspected clean. Remaining resume items: RAIN research question, shouyi kernel, status flip to "final" after owner review, live Pages URL verification.
- 2026-10-21 (computer agent, session 4, round 3): owner directive — Cheetah House removed from the degree's goFurther list entirely (meditation-unpleasantness support is off-theme). K413 Balban wording tightened to the abstract's exact claim (greater mood improvement with breathwork, especially cyclic sighing; no per-arm-vs-control claim). Round-2 video durations re-verified from fresh watch-page fetches. New owner task started: practice gallery on CMP1 below a divider (see next entry when complete).
- 2026-10-21 (computer agent, session 4, gallery pass): owner directive — practice gallery added to CMP1 below a divider at the end of the page. 7 families, 41 verified sessions spanning a few minutes to a full sitting per family (FAM, OMM, LKM, body scan/deep rest/NSDR, Daoist, Zen, walking). Instructor-credibility standard applied to every entry: each guide verified from an opened institutional or lineage source. Durations printed on opened pages; YouTube additions oembed + watch-page verified. Honest gaps recorded in the page (no free Daoist guided session beyond 20 minutes verified; no verified standalone mantra family, So Hum remains in Module XI). Cheetah House goFurther entry removed per owner directive (off-theme). Remaining resume items: RAIN research question, shouyi kernel, status flip to final after owner review.
- 2026-10-21 (computer agent, session 4, gallery revision pass): advisor verification applied. Duration coverage completed (FAM to 42:59, body scan to 45:21); Daoist shelf includes labeled free course and paid academies; Zen long-format rarity stated honestly. Giovanni Dienstmann removed from the gallery (no Daoist authorization in his publisher bio); George Thompson retained on verified Wudang training. Savoring Walk removed from the walking family (written practice, not guided audio; attribution was wrong) and replaced with a verified Dacher Keltner guided walk. All library-level links replaced with session-level links (Tara Brach permalinks, Mountain Cloud MP3s, DharmaSeed talk URLs, Plum Village item permalinks, UCLA cloudfront MP3s, iRest samples page, GGIA practice pages). Unsupported intro claims removed; Who-is-guiding rewritten with inline citations. Degree description mentions the gallery for discoverability. OPEN ISSUE for maintainers: enrich_validate fails on CMP1 and other structure pages (em dashes inside kernel-name wikilinks, >480 prose words); no structure-page exemption found in PROTOCOL.md; needs either a validator rule for structure pages or a documented exemption.
- 2026-10-21 (computer agent, session 4, WRAP-UP — handoff to next agent): session ended mid-curation. The practice gallery is LIVE but PARTIAL. Pushed state is safe: all session links verified to exist with printed durations; unsupported claims removed from the page. OPEN ITEMS, in priority order: (1) duration coverage gaps — Daoist (verified only to 17:30 free), Zen (25:01), nidra/iRest (20 min samples) lack verified 30-45 min guided sessions; guided sessions may include substantial silence; a talk with ten minutes of meditation does NOT qualify; (2) verify the practice classification of audiodharma talks/4013 before calling it FAM; (3) replace remaining shared-page links (UCLA MARC page x2, Palouse page x2, iRest samples page x2) with direct player links; (4) add a "Browse practice gallery" control to the Academy degree view (reuse existing internal hub-page click handler; app has no URL routing); (5) instructor citations: point Who-is-guiding claims at biography pages, not recording pages (Shukman's authorization is on his own site/Wikipedia, not the Mountain Cloud intro page); (6) enrich_validate fails on all structure pages (em dashes inside kernel-name wikilinks, >480 prose words) — flagged, needs maintainer decision. Ledger has the full detail under the 15:38 wrap-up entry. RAIN research question and shouyi kernel remain open from before. Degree status stays "draft" pending owner review.
