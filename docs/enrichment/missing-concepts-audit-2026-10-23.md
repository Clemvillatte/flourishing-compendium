# Missing-concepts / missing-kernels audit — 2026-10-23 (final)

Auditor: auditor-pplx-b9c3e4a1 (owner-launched; spec by supervisor-pplx-1023a).
Status: audit pass complete within the session; evidence artifact saved alongside
this report: `docs/enrichment/audit-evidence-2026-10-23.json`. PROPOSAL ONLY:
nothing is minted; every candidate waits for owner sign-off (standing rule 1).

Mission lens (owner, in-session, 2026-10-23): every suggestion must serve
"guiding people to alleviate suffering, detach from the self-as-object,
cultivate wisdom and genuinely flourish in an uncertain world through
Philosophy and Psychological Sciences", with concrete, workable or inspiring
insights. The ranking applies this lens explicitly.

## What was actually scanned (zero-hallucination disclosure)

- Local corpus frozen at commit af8995ce (5,883 content files parsed by path,
  front-matter parsed the way `scripts/build.py` does; the six content trees
  hold 5,375 of them, the rest are structure/volume/layer files that
  legitimately resolve the V1K/V2K/forest targets).
- Page-existence checks: normalized-title lookup (NFKD, diacritics stripped)
  over every entry's `title`, `file` and filename, then manual `ls`/`grep`
  confirmation for every surviving candidate. The first round used
  `enrich_find.py title ... | head -1` and produced FALSE NEGATIVES (Samadhi,
  Mudita, Self-distancing, Skandha, Grit, Flow, Prosochē, Four immeasurables
  all have pages the first pass missed); every such claim was withdrawn and
  re-verified. The withdrawals are recorded below.
- Mention counts: `grep -rliE` word-boundary, case-insensitive, alias unions,
  distinct files, prose-only (front-matter, pure link lists and inventory lines
  excluded). Full path sets for the candidates are in the evidence artifact.
- Kernel scans: body-greps over all 316 kernel files (case-insensitive) for
  named practices; plus a semantic read of S067 and the evening-review kernels.
- External indexes opened this session (all ten forests + one auxiliary):
  [IEP Stoicism](https://iep.utm.edu/stoicism/), [IEP Daoism](https://iep.utm.edu/daoism/),
  [IEP Buber](https://iep.utm.edu/buber/), [IEP Spinoza](https://iep.utm.edu/spinoza/),
  [IEP Aristotle](https://iep.utm.edu/aristotle/), [IEP Buddha](https://iep.utm.edu/buddha/),
  [SEP Kyoto School](https://plato.stanford.edu/entries/kyoto-school/),
  [SEP Pragmatism](https://plato.stanford.edu/entries/pragmatism/),
  [SEP Process Philosophy](https://plato.stanford.edu/entries/process-philosophy/),
  [Wikipedia, Yoga Sutras of Patanjali](https://en.wikipedia.org/wiki/Yoga_Sutras_of_Patanjali),
  [Britannica, The Axial Age](https://www.britannica.com/topic/Axial-Age).
  The psychology cluster was tested against its canonical research-term list
  (27 terms) rather than a single index page; disclosed as method.

## Stream 1 — dangling internal references

At the frozen revision, the all-content file/id scan (the site's own resolution
rule) finds **1 distinct dangling target, referenced from 1 page**:

| Dangling target | Referencing page | Disposition |
|---|---|---|
| `[[Optimism bias]]` | content/concepts/Probabilistic thinking.md | maintenance retarget to the existing "Optimism bias / unrealistic optimism" page |

No target meets the 3-page threshold; Stream 1 indicates no missing concept.
Correction to the spec's preliminary scan, recorded without explanation of
cause: at this revision the five shortlisted targets all resolve to existing
pages — "The testing effect / retrieval practice" (deg 20), "Participate — do
with, not to", "Behavioural rehearsal role-play (DBT, social skills training)",
"Yoga — union of body, breath, and mind", "The wanting/liking dissociation"
(each verified against its exact `file`/`id`; full target-to-page matches in
the evidence artifact). The separate See/Related plain-text cross-reference
check was NOT performed (disclosed as not done).

## Stream 2 — tradition-inventory comparison (all forests, indexes opened)

Headline: after corrected verification, every forest's core inventory is
substantially present. The genuine gaps are few and mostly below the 10-file
mention floor; the spec's floor is treated as evidence-weight, not an
automatic rejection (an opened-carrier case can outweigh it).

| Forest (index) | Covered core (examples verified) | Absent (prose mention count) |
|---|---|---|
| Stoicism (IEP) | eudaimonia, cardinal virtues, adiaphora, preferred indifferents, passions as judgments, apatheia, oikeiosis, ataraxia, prosochê, amor fati, cosmopolitanism | eupatheiai (3); propatheiai (1); kathēkonta (0 direct) |
| Yoga (Wikipedia) | ahimsa, santosha, pranayama, pratyahara, samadhi, metta | dharana (3); dhyana (5); satya (8, principle-only coverage) |
| Buddhist (IEP Buddha) | four noble truths, eightfold path, dukkha, anicca, anatta, tanha, samsara, nirvana, dependent origination, skandha, three poisons, four immeasurables, mudita, karuna, upekkha | **satipatthana / four foundations of mindfulness (47 — principle B039 exists, no concept or kernel page)**; avijjā as a named page (0) |
| Daoist (IEP) | dao, de, wu wei, ziran, pu, yin-yang, qi, ten thousand things, sage | hundun (0); zhenren (0); he-as-harmony (0 direct) |
| Kyoto/Tibetan (SEP) | absolute nothingness, pure experience, emptiness/shunyata, zazen (Shikantaza), koan practice, self as process | **metanoetics (11)**; **nihility (10)**; action-intuition (8); basho (1); satori (3); tonglen (2); self-power/other-power (1-2); rigpa (2) |
| Aristotelian (IEP) | eudaimonia, ergon, arete, the mean, phronesis, akrasia, habituation, friendship, self-love, contemplation | (no core item absent at corpus weight) |
| Spinozist (IEP) | substance monism, conatus, affects, adequate ideas, three kinds of knowledge, bondage of desire, amor dei intellectualis, sub specie aeternitatis | common notions (2); active/passive affects as named pages (0); eternity of the mind (0) |
| Pragmatist (SEP) | pragmatic maxim, inquiry, community of inquiry, fallibilism, habit, transaction, instrumentalism (as instrumental reason), anti-representationalism | meliorism (0); warranted assertibility (0) |
| Process (SEP) | becoming, actual occasions, prehension, concrescence, emergence, self as process | eternal objects (2); downward causation (0); panexperientialism (0) |
| Relational (IEP Buber) | I-Thou, I-It (covered within I and Thou), the between, dialogue, confirmation, mutuality | inclusion (36, but the word is generic — Buber-specific uses need hand-verification); making present (0); distance-and-relation (1) |
| Psychology (canonical list) | hope, optimism, grit, flow, self-distancing, post-traumatic growth, explanatory style, appraisal theory, savoring, implementation intentions, behavioral activation, cognitive defusion, values clarification, habit formation | pessimism (7); best possible self (0); hope theory as a named page (Hope.md covers the construct) |

## Stream 3 — mention-density scan

All first-round "gaps" below were withdrawn after the false-negative repair:
Samadhi, Mudita, Self-distancing, Skandha, Grit, Flow, Prosochē, Eightfold
Path, meaning in life (adjacent pages: Meaning, Existential meaning,
Meaning-making, The search for meaning, The will to meaning), zazen
(Shikantaza), brahmavihara umbrella (Four immeasurables, deg 21, exists and
the Mudita page already frames the four together). The surviving candidates
are those in the Stream 2 table above the floor: satipatthana (47),
metanoetics (11), nihility (10); plus the below-floor weak set (eupatheiai 3,
action-intuition 8, dharana 3, dhyana 5, pessimism 7).

## Stream 4 — kernel-side gaps (prescribed-but-unimplemented practices)

Method: 696 of 2,182 principles prescribe a practice; stem-matched against all
316 kernel bodies; 48 principles produced no hit (list in the evidence
artifact; the earlier 53 came from a title-regex bug that truncated titles
containing quotes). Stem matching is a lead generator, not a completeness
result. Semantic reads performed for the top candidates:

- **S067 Cultivate tranquillity (ataraxia)** — read in full. It prescribes a
  concrete sequence: calm arrives from "the dichotomy of control" sorting plus
  deciding in advance "what you will and will not fight over", with Seneca's
  De Tranquillitate Animi called "a manual for that work". The kernel-side
  check: "ataraxia"/"tranquillity"/"tranquility" appear in NO kernel body
  (case-insensitive grep, all 316 files). The nearest kernels, K157/K274
  (evening review/examination), are general written reflection — their
  protocol does not implement the dichotomy-of-control sort or the
  pre-decision of fights. So the concrete absent operation is nameable: a
  Stoic tranquillity kernel walking S067's own sequence.
- **E-forest contemplative practices** — "gelassenheit" appears in no kernel
  body despite E102 and 18 prose mentions; shipwreck/failure reflection
  (E092) has no kernel. The stem-match list (resoluteness, historicity,
  thrownness, conscience, the chiasm, etc.) is plausible-lacking pending
  per-item reading.
- **Pacific/Māori cluster (~20 principles)** — stem-match only; owner call
  whether kernels or concept enrichment is the right instrument.

## Ranked proposal list (mission lens applied)

The strongest findings serve the mission directly: satipatthana is the core
contemplative attention curriculum for suffering alleviation; the Stoic
tranquillity protocol is a workable calm practice for an uncertain world;
Tanabe's metanoetics and Nishitani's nihility are wisdom-through-darkness
teachings; the E-forest kernels turn philosophical concepts into doable
practices.

### Concept candidates

| Rank | Candidate | Evidence | Mission fit | Status |
|---|---|---|---|---|
| 1 | Satipatthana (the four foundations of mindfulness) | 47 prose mentions; B039 principle prescribes it; no concept or kernel page (verified by normalized-title + ls checks) | very high: the base contemplative curriculum for attention to suffering as it arises | verified-lacking (concept page; kernel gap separately ranked) |
| 2 | Metanoetics (Tanabe's zangedō) | 11 mentions; Kyoto School index opened; no page | high: repentance, self-negation and rebirth as a response to suffering no technique can fix | verified-lacking |
| 3 | Nihility (Nishitani's field of nihility) | 10 mentions; no page; the Kyoto index presents the three-field pathway (being, nihility, emptiness) | high: passing through meaninglessness rather than around it | verified-lacking |
| 4 | The eupatheiai (Stoic good feelings) | 3 mentions (Apatheia, Passions as judgments, S059); IEP inventory item; no page | moderate: joy and goodwill as trainable emotions, the positive half of Stoic affect training | plausible-lacking (weak corpus weight) |
| 5 | Action-intuition (Nishida) | 8 mentions; no page | moderate: knowing by becoming, an embodied alternative to detached observation | plausible-lacking |
| 6 | Dharana / dhyana (Yoga Sutras limbs 6-7) | 3 / 5 mentions; limbs 4, 5, 8 have pages | moderate: concentration as a trainable step toward meditation | plausible-lacking (weak) |

### Kernel candidates

| Rank | Candidate | Evidence | Mission fit | Status |
|---|---|---|---|---|
| 1 | Stoic tranquillity (ataraxia) kernel implementing S067 | word-absence verified across all 316 kernel bodies; semantic read shows the nearest kernels do not implement the prescribed operation | very high: a concrete calm protocol for an overwhelming news cycle | verified word-absence + semantic gap read; adjacent kernels may partly serve (owner/editor judgment) |
| 2 | Satipatthana practice kernel (body, feeling, mind, dhamma foundations) | B039 prescribes; Anapanasati and bare-attention kernels cover fragments; no four-foundations pathway | very high | plausible-lacking (stem-match + page check) |
| 3 | E-forest contemplative kernels (Gelassenheit release practice; shipwreck/failure reflection) | gelassenheit absent from all kernel bodies (verified); E092/E102 prescribe | high: letting-go and failure-reflection are directly workable | plausible-lacking (stem-match list) |
| 4 | Pacific/Māori practice pathways | ~20 principles with no kernel hit (stem-match) | owner call: relational-cultural practices may be better served by concept pages | plausible-lacking, method-limited |

### Maintenance fixes (routing only)

- Retarget `[[Optimism bias]]` in Probabilistic thinking.md to the existing
  "Optimism bias / unrealistic optimism" page (one line; band owner applies).
- Route to the next t1f owner: T048's "Everything connected in the wiki" intro
  sentence still carries workflow narration ("mint rule", "script output");
  replace with a reader-facing line (routed, not applied — the audit is
  read-only over content/).

## Owner sign-off section

Nothing has been executed. Sign-off lines:

- [ ] Concept candidates 1-6 (all / by rank: ___)
- [ ] Kernel candidates 1-4 (all / by rank: ___)
- [ ] Optimism bias retarget
- [ ] Ruling on Pacific/Māori cluster: kernels vs concept enrichment
- [ ] Buber "inclusion" (36 generic-word mentions): hand-verify before any
      candidate is considered

## Session notes for the supervisor

- The supervisor baton was RELEASED when this audit started; no live supervisor
  is on the board at the time of writing.
- Prior role this session: t1f band, T048 Jaspers minted and advisor-QC'd
  (commits 53ee2eee..63714a1b), baton released per owner instruction;
  reciprocal proposals in docs/enrichment/drafts/t1f/jaspers-reciprocal.md
  (37 entries, unapplied, supervisor review required per PROTOCOL-THINKERS).
- QC trail: advisor round 1 blocked the first report (false negatives, substring
  counts, guessed explanations); round 2 blocked again (report-only rewrite);
  the final evidence pass (audit-evidence-2026-10-23.json) and the semantic
  reads were done in response, and all ten forest indexes were opened.
