# Missing-concepts / missing-kernels audit — 2026-10-23 (incomplete, time-boxed)

Auditor: auditor-pplx-b9c3e4a1 (owner-launched; spec by supervisor-pplx-1023a).
Status: INCOMPLETE (time-boxed) — verified findings below plus an exact
unfinished-scope list at the end; deliberately NOT promoted to a completed
audit (advisor ruling round 3). Evidence artifact:
`docs/enrichment/audit-evidence-2026-10-23.json` (v2, generated from an
immutable `git archive` of revision 1a908455; every count is asserted equal
to its saved path-set length). PROPOSAL ONLY: nothing is minted; every
candidate waits for owner sign-off (standing rule 1).

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

The corrected pass found few gaps, and the first-round false negatives show
why absence claims need the verification they got: several suspected gaps
proved to exist. The spec's 10-file floor is treated as evidence-weight, not
an automatic rejection (an opened-carrier case can outweigh it).

| Forest (index) | Covered core (examples verified) | Absent (prose mention count) |
|---|---|---|
| Stoicism (IEP) | eudaimonia, cardinal virtues, adiaphora, preferred indifferents, passions as judgments, apatheia, oikeiosis, ataraxia, prosochê, amor fati, cosmopolitanism | eupatheiai (3); propatheiai (1); kathēkonta (0 direct) |
| Yoga (Wikipedia) | ahimsa, santosha, pranayama, pratyahara, samadhi | dharana (3); dhyana (5); satya (8, principle-only coverage). Metta is NOT an item of the opened eight-limb list (it belongs to the Buddhist cluster; moved there). The asana limb accounting is incomplete in this pass (disclosed). |
| Buddhist (IEP Buddha) | four noble truths, eightfold path, dukkha, anicca, anatta, tanha, samsara, nirvana, dependent origination, skandha, three poisons, four immeasurables, mudita, karuna, upekkha | **satipatthana / four foundations of mindfulness (46, frozen revision — principle B039 and story ST069 exist, no concept or kernel page)**; avijjā as a named page (0) |
| Daoist (IEP) | dao, de, wu wei, ziran, pu, yin-yang, qi, ten thousand things, sage | hundun (0); zhenren (0); he-as-harmony (0 direct) |
| Tibetan (Wikipedia Tibetan Buddhism) | four noble truths, anatta, aggregates, emptiness, bodhicitta, compassion, vipassana (insight), tonglen-adjacent giving-and-receiving ideas inside other pages | **lojong mind training (31 — no page)**; **samatha / calm abiding (17 + 3)**; **mahamudra (14)**; **lamrim (11)**; tonglen (5); bardo (7); pāramitā (7); six perfections (3); dzogchen (1); rigpa (2); ngöndro, guru yoga, tummo, dream yoga, trikaya, five paths, mandala (0 — honest absences) |
| Kyoto (SEP) | absolute nothingness, pure experience, emptiness/shunyata, zazen (Shikantaza), koan practice, self as process | metanoetics (7, frozen revision); nihility (6, frozen revision); action-intuition (4); basho (1); satori (3); self-power/other-power (1-2) |
| Aristotelian (IEP) | eudaimonia, ergon, arete, the mean, phronesis, akrasia, habituation, friendship, self-love, contemplation | (no core item absent at corpus weight) |
| Spinozist (IEP) | substance monism, conatus, affects, adequate ideas, three kinds of knowledge, bondage of desire, amor dei intellectualis, sub specie aeternitatis | common notions (2); active/passive affects as named pages (0); eternity of the mind (0) |
| Pragmatist (SEP) | pragmatic maxim, inquiry, community of inquiry, fallibilism, habit, transaction, anti-representationalism | meliorism (0); warranted assertibility (0). The existing page is named 'Instrumental reason' and was NOT read this pass, so whether it covers Dewey's instrumentalism is unverified (disclosed). |
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
  deciding in advance "what you will and will not fight over". Kernel check:
  four kernels implement exactly that operation — K267 Controllability sorting
  (two-column sort with Epictetus's Encheiridion 1 test), K271 The "is this
  up to me?" check, plus K266 and K272 (word-body search for the operation,
  then the matches read). The word "ataraxia" appears in no kernel body, but
  the PRESCRIBED OPERATION IS IMPLEMENTED. The Stoic tranquillity kernel-gap
  candidate is therefore WITHDRAWN (recorded for the QC trail: the advisor's
  warning that word-absence is not operation-absence was correct).
- **E-forest contemplative practices** — "gelassenheit" appears in no kernel
  body despite E102 and 20 prose mentions; shipwreck/failure reflection (E092)
  has no kernel. Adjacent kernels exist (K112 Scheduled empty time, K146 Ego
  dissolution practice, K123 Radical acceptance); whether any of them
  implements a Gelassenheit-style releasement or a failure reflection was NOT
  read this pass. Plausible-lacking, unverified.
- **Pacific/Māori cluster (~20 principles)** — stem-match only; owner call
  whether kernels or concept enrichment is the right instrument.

## Ranked proposal list (mission lens applied)

The strongest surviving findings serve the mission directly: satipatthana is
the core contemplative attention curriculum for suffering alleviation;
Tanabe's metanoetics and Nishitani's nihility are wisdom-through-darkness
teachings. The Stoic tranquillity kernel and the brahmavihara umbrella were
both WITHDRAWN on verification (the operation is implemented by K267/K271;
the Four immeasurables page exists).

### Concept candidates

| Rank | Candidate | Evidence | Mission fit | Status |
|---|---|---|---|---|
| 1 | Satipatthana (the four foundations of mindfulness) as a concept page | 46 prose mentions (frozen revision, path set saved); B039 principle and ST069 story exist; no concept or kernel page (normalized-title + ls verified); the Mindfulness page covers satipatthana in one passing sentence | very high: the base contemplative curriculum for attention to suffering as it arises | verified-lacking as a dedicated page; substantive coverage exists in B039 + ST069 (a consolidation page, not a from-nothing mint) |
| 2 | Metanoetics (Tanabe's zangedō) as a concept page | 7 prose mentions (frozen revision); K-forest structure layer K-S10 and principles K065/K066 carry the ideas; no concept page | high: repentance, self-negation and rebirth as a response to suffering no technique can fix | plausible-lacking (layer coverage exists; owner call whether a concept page adds value) |
| 3 | Nihility (Nishitani's field of nihility) as a concept page | 6 prose mentions; K-S02 layer and T056 Nishitani carry the ideas; no concept page | high: passing through meaninglessness rather than around it | plausible-lacking (same caveat) |
| 4 | The eupatheiai (Stoic good feelings) | 3 mentions (Apatheia, Passions as judgments, S059); IEP inventory item; no page | moderate: joy and goodwill as trainable emotions, the positive half of Stoic affect training | plausible-lacking (weak corpus weight) |
| 5 | Action-intuition (Nishida) | 4 mentions; no page | moderate: knowing by becoming, an embodied alternative to detached observation | plausible-lacking |
| 6 | Dharana / dhyana (Yoga Sutras limbs 6-7) | 3 / 5 mentions; limbs 4, 5 and 8 have pages | moderate: concentration as a trainable step toward meditation | plausible-lacking (weak) |
| 7 | PERMA (Seligman's five-pillar flourishing model) | 16 prose mentions; the well-being pages exist but none presents PERMA (Wikipedia positive-psychology index opened) | very high: the mission's own flagship framework for genuine flourishing | verified-lacking as a dedicated page |
| 8 | Subjective well-being (Diener's construct) | 45 prose mentions; The two-factor model of well-being mentions it only in passing; no dedicated page | high: the hedonic counterpart the wiki's eudaimonic pages need for balance | verified-lacking as a dedicated page |
| 9 | Lojong (Tibetan mind training) | 31 prose mentions; no page; tonglen appears only inside other pages (5) | very high: the Tibetan curriculum for training the mind toward suffering's alleviation | verified-lacking as a dedicated page |
| 10 | Samatha (calm abiding) | 17 + 3 prose mentions; Vipassana (insight) exists as its pair; no page | high: the concentration half of the classic samatha-vipassana pairing | verified-lacking as a dedicated page |
| 11 | Mahamudra | 14 prose mentions; no page | moderate-high: direct experience of mind's nature | verified-lacking as a dedicated page |
| 12 | Lamrim (stages of the path) | 11 prose mentions; no page | moderate-high: a graded path from renunciation to wisdom | verified-lacking as a dedicated page |

### Kernel candidates

| Rank | Candidate | Evidence | Mission fit | Status |
|---|---|---|---|---|
| 1 | Satipatthana practice kernel (body, feeling, mind, dhamma foundations) | B039 prescribes; Anapanasati and bare-attention kernels cover fragments; no four-foundations pathway found by page check — the adjacent kernel bodies were not all read this pass | very high | plausible-lacking |
| 2 | E-forest contemplative kernels (Gelassenheit release practice; shipwreck/failure reflection) | gelassenheit absent from all kernel bodies (lexical fact only); adjacent kernels K112/K146/K123 unread against the operation | high: letting-go and failure-reflection are directly workable | plausible-lacking, unverified |
| 3 | Pacific/Māori practice pathways | ~20 principles with no kernel hit (stem-match) | owner call: relational-cultural practices may be better served by concept pages | plausible-lacking, method-limited |

WITHDRAWN (recorded for the QC trail): the Stoic tranquillity (ataraxia)
kernel — K267 Controllability sorting and K271 The "is this up to me?"
check implement the prescribed dichotomy-of-control operation; the advisor's
warning that word-absence is not operation-absence was correct.

WITHDRAWN earlier: Samadhi, Mudita, Self-distancing, Skandha, Grit, Flow,
Prosochē, Eightfold Path, meaning in life, zazen (Shikantaza), brahmavihara
umbrella (Four immeasurables) — all verified as existing pages.

### Maintenance fixes (routing only)

- Retarget `[[Optimism bias]]` in Probabilistic thinking.md to the existing
  "Optimism bias / unrealistic optimism" page (one line; band owner applies).
- Route to the next t1f owner: T048's "Everything connected in the wiki" intro
  sentence still carries workflow narration ("mint rule", "script output");
  replace with a reader-facing line (routed, not applied — the audit is
  read-only over content/).

## Exact unfinished scope (time-boxed; the next auditor continues here)

1. DONE before this push: the E-forest survey was opened ([SEP,
   "Existentialism"](https://plato.stanford.edu/entries/existentialism/), raw
   download) — existence precedes essence, anxiety, authenticity, bad faith,
   the absurd, facticity, death, freedom, responsibility, the crowd and
   nausea all have wiki pages; no gap.
2. DONE before this push: the Tibetan inventory was established ([Wikipedia,
   "Tibetan Buddhism"](https://en.wikipedia.org/wiki/Tibetan_Buddhism)) —
   lojong, samatha, mahamudra and lamrim are above-floor verified candidates
   (ranked); tonglen/bardo/pāramitā are below floor; ngöndro, guru yoga,
   tummo, dream yoga, trikaya, five paths and mandala are honest absences
   (0 mentions).
3. DONE before this push: the psychology comparison index was opened
   ([Wikipedia, "Positive psychology"](https://en.wikipedia.org/wiki/Positive_psychology))
   — new verified finds below (PERMA, subjective well-being); toxic positivity
   (2), positive illusions (1) and the pleasant/meaningful-life paths (1/5)
   are honest absences.
4. DONE before this push: the See/Related plain-text check was run (one
   plain-text reference found, on the Autonomous versus controlled motivation
   page, pointing at sections of its own page — not dangling; no dangling
   See-wikilinks found).
5. The seven practice-domain comparisons (attention, emotion regulation,
   relationships, meaning, self, body, wisdom): not performed.
6. Buber "inclusion" (36 generic-word mentions): hand-verification pending.
7. The 48-item kernel stem-match shortlist: per-item semantic verification
   pending (the ataraxia withdrawal shows why).
8. The Yoga asana limb accounting.

## Owner sign-off section

Nothing has been executed. Sign-off lines:

- [ ] Concept candidates 1-6 (all / by rank: ___)
- [ ] Kernel candidates 1-3 (all / by rank: ___)
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
