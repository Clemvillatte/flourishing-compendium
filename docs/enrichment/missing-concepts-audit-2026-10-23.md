# Missing-concepts / missing-kernels audit — 2026-10-23

Auditor: auditor-pplx-b9c3e4a1 (owner-launched, spec by supervisor-pplx-1023a:
`~/.perplexity/attachments/930bbaf783ad41618db29f8f01d8b56b/Missing-concepts-audit-spec.md`).
Status: PRELIMINARY / INCOMPLETE (advisor QC round 1 applied partial repairs;
evidence-strength repairs in flight). PROPOSAL ONLY: nothing is minted into any
queue or content page; every candidate waits for explicit owner sign-off
(standing rule 1).

## What was actually scanned (zero-hallucination disclosure)

- Local corpus at commit 819df04f: 5,879 entries parsed (2,261 concept files,
  316 kernel files, 2,182 principle files, plus thinkers/stories/sayings/layers);
  all `[[wikilink]]` targets extracted with a reimplementation of the site's own
  resolution rule (resolve by `file` field or `id`, per `scripts/build.py`).
- Word-boundary mention counts: `grep -rlwE` across `content/` (case-insensitive
  variants re-checked by hand where the term is case-sensitive, e.g. prosochê).
- External indexes actually opened this session: [IEP, "Stoicism"](https://iep.utm.edu/stoicism/)
  (doctrinal taxonomy), [Wikipedia, "Yoga Sutras of Patanjali"](https://en.wikipedia.org/wiki/Yoga_Sutras_of_Patanjali)
  (eight limbs, five yamas, five niyamas), [Britannica, "The Axial Age"](https://www.britannica.com/topic/Axial-Age)
  (tradition list; opened during the T048 QC pass earlier this session).
- Streams 2-4 are partial by time budget: Stoicism and Yoga are fully inventoried;
  Buddhism was spot-checked against its best-known doctrinal lists; the other
  forests (Daoist, Aristotelian, Spinozist, Pragmatist, Relational, psychology)
  were covered through the Stream 3 mention scan rather than a full external
  inventory. This is disclosed as scope, not as a clean bill of health.

## Stream 1 — dangling internal references (strongest)

Current state at 819df04f: **1 distinct dangling target** (1 referencing page):

| Dangling target | Refs | Referencing page | Disposition |
|---|---|---|---|
| `[[Optimism bias]]` | 1 | content/concepts/Probabilistic thinking.md | maintenance fix: retarget to the existing page "Optimism bias / unrealistic optimism" |

Correction to the spec's preliminary scan (recorded honestly): the five
shortlisted targets all resolve to existing pages and have since the initial
commit c2a3ee47a — "The testing effect / retrieval practice" (deg 20),
"Participate — do with, not to", "Behavioural rehearsal role-play (DBT, social
skills training)", "Yoga — union of body, breath, and mind", "The wanting/liking
dissociation" (all verified by file/id resolution this session). The preliminary
counts appear to be artifacts of a different resolution method (likely filename
matching against `file` fields containing " / "). No missing concept is indicated
by Stream 1: the graph's authors' links resolve.

## Stream 2 — tradition-inventory comparison

### Stoicism (index: IEP "Stoicism", opened)

| IEP inventory item | Wiki page | Word-boundary mentions |
|---|---|---|
| Eudaimonia | A-S01 layer + A001 principle | high |
| Virtue / cardinal virtues | Cardinal virtues | high |
| Indifferents (adiaphora) | Adiaphora, the indifferents; Preferred indifferents | high |
| Passions (pathē) / apatheia | Passions as judgments; Apatheia | high |
| Oikeiosis | Oikeiosis + S010 | high |
| Ataraxia | Ataraxia + S067 | high |
| Kathēkonta (appropriate actions) | none (the saying "Fulfil your roles well" only) | 1 |
| Eupatheiai (good feelings) | none | 3 |
| Propatheiai (pre-passions) | none | 1 |
| Prosochê (attention) | none | 4 |
| Amor fati / cosmopolitanism | Amor fati; Cosmopolitanism | high |

Verdict: the Stoic core is well covered. The four absent items sit at 1-4
mentions, far below the 10-file floor (PROTOCOL-THINKERS), and adjacent pages
carry the load (Apatheia, Passions as judgments, Fulfil your roles well). With
the Rumi/Mesoamerican honest-absence precedent, these are **plausible-lacking,
weak** — one umbrella page "The eupatheiai (Stoic good feelings)" is the only
one with any case.

### Yoga (index: Wikipedia "Yoga Sutras of Patanjali", opened)

| Limb / item | Wiki page | Word-boundary mentions |
|---|---|---|
| Yamas: ahimsa | Ahimsa | 10 |
| Yamas: satya, asteya, brahmacarya, aparigraha | none individually | 8 / 0 / 0 / 2 |
| Niyamas: santosha | Santosha | 0 |
| Niyamas: śauca, tapas, svādhyāya, īśvarapraṇidhāna | none | 0 |
| Asana | (inside Shravana, manana, nididhyasana title only) | — |
| Pranayama | Pranayama | high |
| Pratyahara | Pratyahara | high |
| Dharana | none | 3 |
| Dhyana | none | 4 |
| Samadhi | none as concept (B028 principle exists) | 19 |

Verdict: the limbs the corpus actually leans on exist (pranayama, pratyahara);
the contemplative-concentration tail (dharana, dhyana, samadhi) has no pages
but only 3-4 mentions each except samadhi (19). **Samadhi is a real candidate**
(below); dharana/dhyana are plausible-lacking, weak.

### Buddhism (spot-check against standard doctrinal lists; no single index page opened for this — disclosed)

Four Noble Truths, Eightfold Path, dependent origination, anicca, dukkha, Metta
(loving-kindness), Compassion, Equanimity: all have pages. Absent: the
brahmavihara umbrella (see Stream 3) and the five aggregates (8 mentions, no
page — plausible-lacking, moderate).

## Stream 3 — mention-density scan

Candidates tested were generated from the Stream 1-2 work plus the obvious
psychology-of-flourishing terms; counts are word-boundary across all of
`content/`:

| Term | Mentions | Existing page? | Verdict |
|---|---|---|---|
| eightfold path | 110 | Eightfold Path (deg 21) | covered |
| flow | 249 | Optimal experience (deg 15) | covered |
| savoring | 70 | K110 Savoring | covered |
| self-compassion | 74 | Self-compassion | covered |
| awe | 43 | Awe | covered |
| grit | 3 | none | honest absence (below floor) |
| mudita / sympathetic joy | 22 / 31 | B053 principle only | **candidate** |
| karuna | 27 | Compassion (concept) | covered by Compassion |
| upekkha | 21 | Equanimity (concept) | covered by Equanimity |
| metta | 26 | Metta (loving-kindness) | covered |
| brahmavihara | 6 | none | candidate (umbrella; see ranking) |
| samadhi | 19 | none as concept | **candidate** |
| meaning in life | 27 | none (Meaning-making is a layer section, not an entry) | **candidate** |
| self-distancing | 29 | AF033 principle only | **candidate** |
| five aggregates / skandha | 8 / 10 | none | plausible-lacking |
| dharana / dhyana | 3 / 4 | none | plausible-lacking, weak |
| eupatheiai / prosochê / kathêkon / propatheiai | 3 / 4 / 1 / 1 | none | plausible-lacking, weak |

## Stream 4 — kernel-side gaps (prescribed-but-unimplemented practices)

Method: all 2,182 principle titles scanned; 696 prescribe a practice
(Practise/Learn to/Cultivate/Use/Apply/Train/Develop/Do); each was
stem-matched against the 316 kernel bodies; 53 principles produced no kernel
hit. Stem matching is crude — every row below is **plausible-lacking pending
per-item verification**, except where a direct grep of kernel files confirms
absence (ataraxia/tranquillity: confirmed absent from all kernel files).

| Cluster | Principles with no kernel hit (examples) | Note |
|---|---|---|
| Pacific/Māori values (largest cluster, ~20) | fa'asamoa, teu le vā, alofa, kaitiakitanga, rangatiratanga, whānau ora, tika, manaakitanga, whanaungatanga, va tapuia, tapu, pono, hau, utu, ofo, aroha, talanoa, tautua, whakawhanaungatanga, Te Whare Tapa Whā | these are relational-cultural practices; kernels may be the wrong instrument — concept enrichment may serve them better (owner call) |
| Existential/phenomenological practices | Practise resoluteness (E046), historicity, Gelassenheit (E102), shipwreck (E092), the axial age (E096), the encompassing (E094), thrownness, conscience (Gewissen), the chiasm, reversibility of flesh, incarnation, emplotment | the E-forest prescribes practices with almost no kernel pathway; nearest kernels are evening review (K157/K274) |
| Stoic-adjacent | Cultivate tranquillity (ataraxia) (S067), Use antidotes skillfully, Practice tenacity, Practise non-retaliation | ataraxia/tranquillity confirmed absent from all kernel files; K157/K274 (evening review/examination) are adjacent |
| Attention/heedfulness | Practise attentiveness, perceptiveness (aisthesis), heedfulness (appamada), Use instability creatively | adjacent kernels exist (aesthetic attention K328, shared attention K357) |

## Ranked proposal list

### Concept candidates (owner sign-off required before any mint)

| Rank | Candidate | Evidence | Status |
|---|---|---|---|
| 1 | Sympathetic joy (mudita) | 31 + 22 mentions; B053 principle carries it; the other three brahmaviharas have concept pages | verified-lacking |
| 2 | Meaning in life | 27 mentions; principles carry meaning-related practices; no entry despite "Meaning-making" being only a layer section | verified-lacking |
| 3 | Self-distancing | 29 mentions; AF033 principle; research-backed construct (Kross) | verified-lacking |
| 4 | Samadhi (as concept) | 19 mentions; B028 principle; the Yoga Sutras' eighth limb has no entry while limbs 4-5 do | verified-lacking |
| 5 | Brahmaviharas (the four sublime states, umbrella) | 6 direct mentions but all four members heavily used (21-31 each); only Metta has a page | plausible-lacking |
| 6 | The five aggregates (skandhas) | 8-10 mentions; core Buddhist doctrine page absent | plausible-lacking |
| 7 | The eupatheiai (Stoic good feelings) | 3 mentions; IEP inventory item with no page | plausible-lacking, weak |

### Kernel candidates (owner sign-off required before any mint)

| Rank | Candidate | Evidence | Status |
|---|---|---|---|
| 1 | Stoic tranquillity practice (ataraxia pathway) | S067 prescribes it; "ataraxia/tranquillity" absent from all 316 kernel files (direct grep); K157/K274 adjacent | verified-lacking |
| 2 | E-forest practice kernels (Gelassenheit, shipwreck, evening existential examination) | 12+ E-principles prescribe practices with no kernel; E-forest is otherwise rich | plausible-lacking (stem-match) |
| 3 | Heedfulness (appamada) kernel | Buddhist principle prescribes; no kernel | plausible-lacking (stem-match) |

### Maintenance fixes (no sign-off needed beyond routing)

- Retarget `[[Optimism bias]]` in Probabilistic thinking.md to the existing
  "Optimism bias / unrealistic optimism" page (band owner: whoever owns that
  file's band; it is a one-line fix).

## Owner sign-off section

Nothing in this document has been executed. Sign-off lines:

- [ ] Concept candidates 1-7 (all / by rank: ___)
- [ ] Kernel candidates 1-3 (all / by rank: ___)
- [ ] Optimism bias retarget
- [ ] Ruling on Pacific/Māori cluster: kernels vs concept enrichment

## Session notes for the supervisor

- The supervisor baton was RELEASED when this audit started (supervisor-pplx-1023a
  session ended); no live supervisor is on the board at the time of writing.
- Prior role this session: t1f band, T048 Jaspers minted and advisor-QC'd
  (commit 63714a1b), baton released per owner instruction. Reciprocal proposals:
  docs/enrichment/drafts/t1f/jaspers-reciprocal.md (37 entries, unapplied).
