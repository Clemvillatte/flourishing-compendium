# Missing-concepts / missing-kernels audit — 2026-10-23

Auditor: auditor-pplx-b9c3e4a1 (owner-launched; spec by supervisor-pplx-1023a).
Status: PRELIMINARY / INCOMPLETE — advisor QC round 1 repairs applied (counts
recomputed case-insensitively, existence checks redone against normalized titles
after the first round's false negatives); Stream 2 covers Stoicism and Yoga in
full, the other forests at canonical-doctrine-list level (disclosed below).
PROPOSAL ONLY: nothing is minted; every candidate waits for owner sign-off.

Mission lens (owner, in-session, 2026-10-23): every suggestion must serve
"guiding people to alleviate suffering, detach from the self-as-object,
cultivate wisdom and genuinely flourish in an uncertain world through Philosophy
and Psychological Sciences", with concrete, workable or inspiring insights. The
ranked list applies this lens explicitly.

## What was actually scanned (zero-hallucination disclosure)

- Local corpus at commit 73743885: 5,373 entries parsed across the six content
  trees (principles, concepts, kernels, thinkers, stories, sayings) with
  front-matter parsing; 2,261 concept files and 316 kernel files on disk.
- Page-existence checks: normalized-title lookup (Unicode NFKD, diacritics
  stripped, punctuation collapsed) over every entry's `title`, `file` and
  filename, followed by manual `ls`/`grep` confirmation for every candidate that
  survived round 1. Round 1 used `enrich_find.py title ... | head -1`, which
  produced FALSE NEGATIVES (Self-distancing, Samadhi, Grit, Skandha, Flow,
  Prosochē and Mudita all have pages the first pass missed); every such claim
  was withdrawn and re-verified.
- Mention counts: `grep -rliE` word-boundary, case-insensitive, alias unions,
  distinct files, body text; example referencing paths recorded for the
  surviving candidates. Overlapping alias sets are reported as one number, never
  added.
- External indexes actually opened this session: [IEP, "Stoicism"](https://iep.utm.edu/stoicism/),
  [Wikipedia, "Yoga Sutras of Patanjali"](https://en.wikipedia.org/wiki/Yoga_Sutras_of_Patanjali),
  [Britannica, "The Axial Age"](https://www.britannica.com/topic/Axial-Age).
  The other forests' canonical doctrine lists were tested from terms named in
  the wiki's own layer structure; their external-index verification is the
  audit's main remaining gap.
- Kernel-body scans: `grep -li` over all 316 kernel file bodies
  (case-insensitive) for the candidate practice names.

## Stream 1 — dangling internal references

Current state (file/id resolution, the site's own rule per `scripts/build.py`):
**1 distinct dangling target, referenced from 1 page**:

| Dangling target | Referencing page | Disposition |
|---|---|---|
| `[[Optimism bias]]` | content/concepts/Probabilistic thinking.md | maintenance retarget to the existing "Optimism bias / unrealistic optimism" page |

No target met the 3-page threshold; no missing concept is indicated by
Stream 1. Correction to the spec's preliminary scan, recorded honestly: at this
snapshot the five shortlisted targets all resolve to existing pages — "The
testing effect / retrieval practice" (deg 20), "Participate — do with, not to",
"Behavioural rehearsal role-play (DBT, social skills training)", "Yoga — union
of body, breath, and mind", "The wanting/liking dissociation" (each verified
against its exact `file`/`id` this session). The preliminary counts were
artifacts of its different resolution method; no cause is asserted beyond that.
The separate See/Related plain-text cross-reference check was NOT performed
(disclosed as not done).

## Stream 2 — tradition-inventory comparison

### Stoicism (index: IEP "Stoicism", opened)

Covered: eudaimonia, cardinal virtues, adiaphora, preferred indifferents,
passions as judgments, apatheia, oikeiosis, ataraxia, amor fati, cosmopolitanism,
prosochê (Prosochē page exists — verified), kathēkonta (covered by the "Fulfil
your roles well" saying; 1 direct mention). Absent: eupatheiai (8 files,
case-insensitive: Apatheia.md, Passions as judgments.md, S059) and propatheiai
(1 mention) — below the 10-file floor; with the Rumi honest-absence precedent
these are weak candidates.

### Yoga (index: Wikipedia "Yoga Sutras of Patanjali", opened)

Covered: ahimsa, santosha, pranayama, pratyahara, samadhi (concept page exists —
verified), Metta/loving-kindness. Absent: dharana (3) and dhyana (5) — below
floor, weak. The yamas/niyamas not individually paged (satya 8, aparigraha 2,
svadhyaya 0) are honest absences by the same standard.

### Other forests (canonical-doctrine-list level; external index NOT yet opened — disclosed)

Tested by normalized-title lookup; covered unless noted:
- Daoist: wu wei, ziran, de, pu, yin-yang, qi all covered.
- Aristotelian: eudaimonia, phronesis, akrasia, ergon, friendship covered;
  the doctrine of the mean covered ("The doctrine of the mean").
- Spinozist: conatus, affects, adequate ideas covered; common notions (3
  mentions) below floor.
- Pragmatist/Process: inquiry, habit, fallibilism, prehension, concrescence,
  actual occasions covered; meliorism (0) and eternal objects are honest
  absences at current corpus weight.
- Kyoto/Tibetan: emptiness/shunyata, zazen (covered under "Shikantaza, just
  sitting"), koan practice covered; satori (3), rigpa (2), basho (1), tonglen
  (4), bardo (0), self-power/other-power (1) all below floor.
- Relational (Buber): I and Thou, dialogue, confirmation, intersubjectivity
  covered.
- Existential: bad faith, thrownness, facticity, authenticity, limit situations
  all covered.
- Psychology: 27 canonical terms tested; hope (Hope.md), post-traumatic growth,
  explanatory style, appraisal theory, flow, grit, self-distancing all covered.
  Below floor: pessimism (7), cognitive appraisal as distinct from appraisal
  theory (7), best possible self (0).

## Stream 3 — mention-density scan (corrected)

| Term family | Distinct files | Page? | Verdict |
|---|---|---|---|
| mudita / sympathetic joy | 41 | "Mudita (sympathetic joy)" concept + K166 kernel + B053/B101 principles | covered (round-1 "missing" claim withdrawn — false negative) |
| brahmavihara / four sublime states / four immeasurables | 35 | no umbrella page; all four members have concept pages (Metta, Compassion, Equanimity, Mudita) | umbrella candidate, low priority |
| meaning in life | 30 | no exact page; Meaning, Existential meaning, Meaning-making, The search for meaning, The will to meaning all exist | covered by adjacent pages |
| self-distancing | 39 | Self-distancing.md | covered (withdrawn) |
| samadhi | 21 | Samadhi.md | covered (withdrawn) |
| five aggregates / skandha | 14 | Skandha.md | covered (withdrawn) |
| zazen | 16 | "Shikantaza, just sitting" + Open-monitoring meditation | covered under Shikantaza |
| eupatheiai | 8 | none | plausible-lacking, weak |
| koan | 30 | Koan practice | covered |
| dharana / dhyana | 3 / 5 | none | plausible-lacking, weak |
| grit | word-boundary 3 (the 158 figure was substring "integrity") | Grit.md | covered (withdrawn) |

## Stream 4 — kernel-side gaps (prescribed-but-unimplemented practices)

Method: 696 of 2,182 principles prescribe a practice; stem-matched against all
316 kernel bodies; 53 principles produced no hit. Stem matching is a heuristic
lead generator, not a completeness result. Direct body-greps performed for the
named candidates below. Every row is plausible-lacking pending per-item reading;
"verified" is claimed only for named-word absence.

| Cluster | Examples (principles with no kernel hit) | Body-scan result |
|---|---|---|
| Pacific/Māori values (~20) | fa'asamoa, teu le vā, alofa, kaitiakitanga, rangatiratanga, whānau ora, tika, manaakitanga, whanaungatanga, va tapuia, tapu, pono, hau, utu, ofo, aroha, talanoa, tautua, whakawhanaungatanga, Te Whare Tapa Whā | not body-grepped individually (stem-match only); owner call: kernels vs concept enrichment |
| Existential/phenomenological | Practise resoluteness (E046), historicity, Gelassenheit (E102), shipwreck (E092), the axial age (E096), the encompassing (E094), thrownness, conscience (Gewissen), the chiasm, reversibility of flesh, incarnation, emplotment | "gelassenheit" absent from all 316 kernel bodies (case-insensitive grep) — verified word-absence |
| Stoic-adjacent | Cultivate tranquillity (ataraxia) (S067), Use antidotes skillfully, Practice tenacity, Practise non-retaliation | "ataraxia"/"tranquillity"/"tranquility" absent from all 316 kernel bodies — verified word-absence; K157/K274 (evening review/examination) are the adjacent Stoic practice kernels |
| Attention/heedfulness | Practise attentiveness, perceptiveness (aisthesis), heedfulness (appamada), Use instability creatively | adjacent kernels exist (aesthetic attention K328, shared attention K357); not body-grepped individually |

## Ranked proposal list (mission-lens applied)

Headline finding: after corrected verification, the wiki's concept coverage is
essentially complete against every inventory tested — the first-round "gaps"
(Samadhi, Mudita, Self-distancing, Skandha, Grit, Flow, Prosochē, Eightfold
Path) were false negatives of a sloppy title search, and the strongest real
finding is on the KERNEL side: prescribed practices with no practice pathway.

### Kernel candidates

| Rank | Candidate | Evidence | Mission fit | Status |
|---|---|---|---|---|
| 1 | Tranquillity (ataraxia) practice kernel | S067 prescribes it; the word family is absent from all 316 kernel bodies (verified); K157/K274 evening review are adjacent but not a tranquillity pathway | high: a workable Stoic calm practice for an uncertain world | verified word-absence; plausible pathway gap (adjacent kernels may partly serve — owner/editor judgment) |
| 2 | E-forest contemplative practice kernels (Gelassenheit release practice; shipwreck/failure reflection) | 12+ E-principles prescribe practices with no kernel; "gelassenheit" verified absent from kernel bodies | high: letting-go and failure-reflection are directly workable for suffering and detachment | plausible-lacking (stem-match list) |
| 3 | Heedfulness (appamada) kernel | Buddhist principle prescribes; no kernel hit | moderate | plausible-lacking (stem-match) |

### Concept candidates

| Rank | Candidate | Evidence | Mission fit | Status |
|---|---|---|---|---|
| 1 | Brahmaviharas (the four sublime states) umbrella | 35 files mention the family; all four member concepts exist but no page holds the four together as a curriculum | moderate-high: the four together are a complete affect-training curriculum for goodwill amid suffering | plausible-lacking (umbrella; members covered) |
| 2 | The eupatheiai (Stoic good feelings) | 8 files (Apatheia, Passions as judgments, S059); IEP inventory item; no page | moderate: Stoic joy and goodwill as trainable emotions | plausible-lacking, weak corpus support |
| 3 | Dharana / dhyana (Yoga Sutras limbs 6-7) | 3 / 5 mentions; limbs 4, 5 and 8 have pages | moderate: concentration as a trainable step toward meditation | plausible-lacking, weak |

### Withdrawn (recorded for the QC trail)

Samadhi, Mudita, Self-distancing, Skandha, Grit, Flow, Prosochē, Eightfold
Path, "meaning in life" (adjacent pages), zazen (Shikantaza) — all verified as
existing pages after the round-1 false negatives were caught.

### Maintenance fixes (routing only)

- Retarget `[[Optimism bias]]` in Probabilistic thinking.md to the existing
  "Optimism bias / unrealistic optimism" page (one line; band owner applies).
- Route to the next t1f owner: T048's "Everything connected in the wiki" intro
  sentence still carries workflow narration ("mint rule", "script output");
  replace with a reader-facing line (the audit is read-only over content/, so
  this is routed, not applied).

## Owner sign-off section

Nothing has been executed. Sign-off lines:

- [ ] Kernel candidates 1-3 (all / by rank: ___)
- [ ] Concept candidates 1-3 (all / by rank: ___)
- [ ] Optimism bias retarget
- [ ] Ruling on Pacific/Māori cluster: kernels vs concept enrichment
- [ ] Continue Stream 2 with opened external indexes for the remaining forests
      (the audit's main disclosed gap)

## Session notes for the supervisor

- The supervisor baton was RELEASED when this audit started; no live supervisor
  is on the board at the time of writing.
- Prior role this session: t1f band, T048 Jaspers minted and advisor-QC'd
  (commits 53ee2eee..63714a1b), baton released per owner instruction;
  reciprocal proposals in docs/enrichment/drafts/t1f/jaspers-reciprocal.md
  (37 entries, unapplied).
