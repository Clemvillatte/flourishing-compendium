# Concept namespace audit (owner request, 2026-10-19)

Owner directive: a CONCEPT is "an individual object with a clearly defined meaning and
context" — a named thing a tradition actually defines (e.g. The having mode, Beginner's
mind, Premeditatio malorum). The concepts namespace must NOT contain:
- principles (imperative or normative claims, e.g. "Pursue becoming, not arrival");
- comparisons ("X versus Y") instead of their granular components;
- hallucinated "concepts" no source defines.

## Process rules

1. VERIFY-BEFORE-WRITE: when enriching or creating a concept page, confirm in an opened
   source that the term is a named, defined concept of a tradition or science. If no
   source defines it, it does not get a page (delete or merge per rule 3).
2. Principle-style pages found in `content/concepts/`: do not enrich them as concepts.
   Flag them in this file under Category A. The supervisor converts them: create or use
   the underlying real concept (e.g. "Becoming"), migrate the page's links to it, then
   remove the imperative page.
3. Hallucinated pages (no source defines the term): workers flag them under Category C
   with the evidence trail. The supervisor migrates their resolvable links to the real
   neighbouring concepts (e.g. "The rehearsal of virtue" -> Premeditatio malorum, which
   already exists) and deletes the page. This is now SYSTEMATIC, not chance-based: the
   full verification queue is `concept-verification-queue.md` (every concept page with
   no citable source, ranked by suspicion). Many suspects are real concepts with garbled
   titles (e.g. "Nudge theory Thaler" -> Nudge; "Collective effervescence theory Durkheim"
   -> Collective effervescence) — the fix is renaming/modifying to the actual concept,
   not deletion. Deletion is only for terms no source defines.
4. Comparison pages: keep the comparison ONLY as relational exposition if the owner's
   essays need it; the required work is to create the granular concepts (e.g. Identified
   motivation, Introjected motivation) and link them from the comparison page and from
   the principles that cite it. Workers create granular concepts per the new-concepts
   rule in PROTOCOL.md §4; list what you created under Category B.
5. Missing real concepts (owner-named and found while working): list under Category D
   with a one-line seed + source; create per the new-concepts rule when in your session's
   scope.

## Supervisor dispositions

- Character as habits (w1e): **MERGE INTO HABIT — EXECUTED 2026-10-20** by supervisor-0ddcdd37
  (see QC log). The James material now lives as attributed subsections of [[Habit]] (mechanism,
  moral, maxims, all quotations preserved verbatim with the James 1890 source links; a line
  labels the physiological claims as James's historical account). All unique outgoing links and
  cited-in principle lists were merged into Habit. The eight backlinking pages plus Habit had
  their [[Character as habits]] links migrated to [[Habit]] (clauses preserved); the standalone
  page is deleted and removed from _order.json; build passes (5,718 entries); no unresolved
  links remain. The transition-commit validator FAILs are the intended migration pattern
  (markup changed / LOST 'Character as habits'), documented in the QC log; at the new HEAD
  the files validate clean. Original disposition rationale (supervisor-193794fd, 2026-10-19):
  Keep the useful James material as a clearly attributed subsection of [[Habit]], not as
  another independently defined concept. The opened [James chapter IV, “Habit”](https://psychclassics.yorku.ca/James/Principles/prin4.htm)
  discusses character and repeated acts inside its account of habit; the editorial title
  “Character as habits” does not establish a separate named concept.
  This is a namespace decision, not rejection of the worker's source research. Preserve
  that research and all unique outgoing links when merging. Historical physiological and
  moral claims must remain attributed to James, not silently become current clinical facts.
  **Migration pending:** do not delete/rename the current page or mark its migration done
  until backlinks and band ownership have been checked, unique material has been retained,
  and build/link validation passes. Do not edit a live band's files to complete the move.
  No additional standalone enrichment cycles are needed; the worker can continue priority
  principles while the supervisor coordinates the cross-band migration.

## Pending dispositions (worker-flagged, supervisor decision required)

- Judging by where one rests (w1l, flagged 2026-10-20 by genuineflourishing01): Analects 2.10 passage and its three observations VERIFIED (Legge via ctext, quote verbatim); the title's status as a standalone named concept is UNESTABLISHED by the opened source (audit rule 1). Not listed in the earlier title scan's Category A or comparison lists; no explicit disposition found. Page enriched at fast-track bar, QC'd (advisor scoped pass on prose), held out of w1l done pending supervisor disposition. Do not rename/migrate/delete without the disposition.

## Category A — principle-style pages in the concepts namespace (flagged)

- Pursue becoming, not arrival (owner-cited; underlying concept: Becoming, missing)
- Express by shaping, not venting
- Plan-then-adapt strategies outperform rigid plans (a claim, not a concept)
- Participate in the world's becoming
- Plain words over beautiful (flagged 2026-10-20 by worker-p1r-1ecde7aaa72c71b8 at item-5 advisor QC: a normative preference stated in Daodejing 81; principle D122 already represents it. Underlying real concept if converted: the Daodejing chapter's subject is closer to a named maxim than a defined concept, so the likely disposition is migrating backlinks to D122 or a real concept such as [[Parrhesia (frank speech)]]. Page left in place with body repaired to opened-text claims; five reciprocal proposals deferred at drafts/w1b/plain-words-proposals-deferred.md; quote fidelity passed (Legge ch. 81 verbatim); acceptance withheld pending supervisor disposition)
- Following nature's rhythms (flagged 2026-10-20 by worker-b18349e1 at item-5 advisor QC: imperative-verb title; the opened Legge Daodejing ch. 25 does not use or define the phrase, and its flow-and-return passage does not name day/night, seasons, sleep or exercise timing. The seed attributes the page to Daoism; the compendium's circadian principles (BI008/BI017/BI028/BE043/BI066) are its real content. Underlying real concept if converted: possibly yangsheng-style seasonal-life-cultivation or simply the circadian cluster the page links to. Page left in place with body repaired to clearly labelled interim material: DDJ 25 quote verbatim (Legge, Gutenberg #216), circadian application labelled as the compendium's application, related links reduced to bare links; acceptance withheld pending supervisor disposition; state flag recorded in batches/w1l.json)
- (scan method for more: imperative verb + ", not" or claim-shaped titles; detector run
  2026-10-19 found the four above as clear cases)

## Category B — comparison pages needing granular components (24, owner-cited first)

- Identified versus introjected motivation -> create Identified motivation +
  Introjected motivation (SDT, Deci & Ryan)
- Expressive suppression versus reappraisal
- Authentic versus hubristic pride -> granulars CREATED 2026-10-20 by worker-w1c-3c9f2b81: [[Authentic pride]] + [[Hubristic pride]] (Tracy, Cheng, Robins and Trzesniewski 2009, Self and Identity 8(2), quotes verbatim from the opened scispace PDF); comparison page rewritten as relational exposition linking both; inline proposals into AF068; reciprocals proposed into Pride / Proper pride (megalopsychia) / Narcissism versus healthy self-regard (application pending supervisor)
- Purity vs pollution
- Harmonious versus obsessive passion -> granulars: [[Obsessive passion]] ALREADY EXISTED (seed, w1v band); [[Harmonious passion]] CREATED 2026-10-20 by genuineflourishing01 (w1l): Vallerand et al. 2003 PubMed abstract definitions + Briki 2017 Frontiers model description and scale items, quotes verbatim from opened sources; comparison page rewritten as relational exposition linking both (per the Authentic-pride / Autonomous-motivation precedent). Obsessive passion and Passion theory Vallerand remain w1v seeds (not touched; reciprocal proposals routed via proposals/w1l.json for supervisor application).
- Autonomic nervous system (sympathetic vs parasympathetic)
- Spotlight vs floodlight attention
- Intrinsic versus extrinsic goals
- Attentional breadth global vs local processing
- Autonomous versus controlled motivation -> granulars CREATED 2026-10-20 by worker-p1f-9d3f7c2b: [[Autonomous motivation]] + [[Controlled motivation]] (SDT, Ryan & Deci 2000 classic-definitions review, quotes verbatim from the opened selfdeterminationtheory.org PDF); comparison page rewritten as relational exposition linking both (principle connections proposed into MO011; application pending supervisor). Finer granulars (Identified motivation, Introjected motivation) remain under the first entry above for a future pass.
- Process versus outcome focus
- Problem vs. mystery
- Knowing-how versus knowing-that
- Approach versus avoidance motivation
- Fragile vs secure high self-esteem (Kernis)
- Showing versus saying
- Analytic vs holistic cognition
- Maximizing versus satisficing
- Natural liberty versus the chains
- Narcissism versus healthy self-regard
- Avoidance versus attentional engagement
- Benign versus malicious envy -> granulars CREATED 2026-10-21 by worker-w1i-f6d3f54d (w1i): [[Benign envy]] + [[Malicious envy]] (van de Ven, Zeelenberg & Pieters 2009, Emotion 9(3), quotes verbatim from the opened PubMed abstract via efetch, PMID 19485619); comparison page keeps its content and now links both granulars from Related concepts (full relational-exposition rewrite pending; milestone QC scoped-PASS on the content, namespace disposition recorded in the w1i state flag)
- Independent vs interdependent self-construal (Markus & Kitayama)
- Righteous anger vs wrath

## Category C — hallucinated / unverifiable concept pages (owner-flagged first)

- The rehearsal of virtue (owner: not a defined Stoic concept; page is a seed with no
  citable source. Real concept to receive its links: Premeditatio malorum, which exists)
- Delay plus reappraisal (flagged 2026-10-20 by worker-b18349e1 at item-15 advisor QC: the combined label is not a named construct in the opened literature — the Isaacowitz/Wolfe 2024 article and its Gross 2015 citations support strategies, tactics and the cognitive-change family, but no source reviewed defines a delay-then-reappraise sequence, a delay-prevents-response mechanism, or anger as the sequence's typical target. Evidence trail: ledger entry "Delay plus reappraisal" + milestone-15 QC rounds in docs/enrichment/sources/w1l/ledger.md; body reduced to verified interim material (Gross p. 15 tactics passage + bare links); state done entry retained with an unresolved flag; supervisor state reconciliation requested: delete, merge into [[Cognitive reappraisal]] / [[Emotion regulation]], or keep with owner sign-off)
- Creative selection (flagged 2026-10-21 by worker-verify-cde63853 at item-5 advisor QC (w1n): the term does not appear in the opened Bergson text — Creative Evolution, Mitchell trans., Gutenberg 26163, grepped for "creative selection" (0 hits); the book discusses natural selection critically but the opened passages support endless self-creation ("for a conscious being, to exist is to change... go on creating oneself endlessly", ch. 1) and internal-impetus novelty ("Their novelty arises from an internal impetus"), not a named vary-select-retain construct. WIP body preserved with verbatim quotes and a disclosure that the label is the wiki's; state flagged (not done). Supervisor disposition requested: rename, merge into [[Creative evolution]] (which exists), or keep with owner sign-off)

## Category D — missing real concepts (create per new-concepts rule)

- Becoming (owner: covered by many thinkers in the wiki; e.g. Fromm's having vs being,
  Bergson, Whitehead)
- Identified motivation (SDT)
- Introjected motivation (SDT)

## Worker flags (pending supervisor disposition)

- The three gates of speech (2026-10-20, worker-j9fpiyf, w1g, fast-track): the seed's own
  label is "popular formulation". Bounded result of the checks run: the sources opened
  (Wikiquote Rumi page — the saying is attributed to Rumi "never to a specific work or
  correspondence" and may be a misquote of Sathya Sai; Vaca Sutta AN 5.198 — a related
  five-part speech test, quoted verbatim) did NOT establish a classical Rumi or Sufi
  source; they do not prove universal absence. The page states the popular status and
  presents the AN 5.198 comparison as a comparison; the inherited Sufi-attribution gloss
  on [[Right speech]] was corrected (link preserved). The earliest printings
  (19th-century poems/biographies per unopened search results) are NOT asserted.
  Naming (keep as heading, or reframe) left with the supervisor. Item is on
  concept-verification-queue.md line 1405.

- The quiet craftsman's life (2026-10-20, worker-j9fpiyf, w1g, fast-track): the seed's internal
  reference "the series' Book II, principle 94" could NOT be resolved. Volume II's books are
  A (Aristotle, principles numbered 1-122) and S (Stoicism, principles numbered 123+; S094's
  original number is 216), and neither A094 ("Recognise the divine in the human") nor S094
  ("Accept pain as part of nature") matches the theme; no principle titled for the quiet
  craftsman exists in the compendium (mention search: only K064's link note). The searches
  performed did not establish the original referent. The researched body is grounded in the
  D book's own opened source (Legge Zhuangzi ch. 3 Cook Ding, ch. 19 Qing, verbatim) and
  describes the concept as the compendium's heading, per the w1g pattern; the identity
  question (rename candidate or keep as heading, possible orphaned series reference) is
  left with the supervisor. Item is on concept-verification-queue.md line 1445.

- The right amount of effort (2026-10-20, worker-j9fpiyf, w1g, fast-track): the page title is the
  compendium's own heading; the opened source (Nicomachean Ethics II.5-6, Ross via MIT Classics)
  grounds the doctrine of the mean the heading points at, but no opened source uses "the right
  amount of effort" as a named term. The searches performed (2026-10-20, one web search plus
  truncated title searches) did not establish the exact title as a named construct, and did not
  establish that no duplicate heading exists; the naming decision is left with the supervisor.
  Body QC round 2: advisor PASS on the Aristotle prose (quote fidelity, paraphrase bounds,
  humanizer, preservation against baseline 0e713785 all verified); title/identity awaiting
  supervisor disposition. The item is NOT marked done pending this disposition; the researched
  text is pushed as WIP. Rename candidate (e.g. "Doctrine of the mean") or keep as heading, per
  the w1g pattern; all inherited links and the researched body preserved.

- The analysis of experience into elements (2026-10-20, worker-p1r-ae2a1b83, w1g, fast-track): the
  page title is the compendium's own heading for the PRACTICE of decomposing lived experience into
  components (Husserl's Ideas I analysis of intentional acts via the opened SEP Phenomenology entry;
  Buddhist aggregates via [[B120 — Experience is five streams (the aggregates)]]). The opened SEP
  entry does NOT establish the phrase as a named term. REOPENED at advisor QC (item-5 milestone): a
  predecessor's done marker and structural validation do not establish supervisor disposition.
  Researched body KEPT; rename candidate or keep as heading, per the w1g pattern.

- State-matched emotion regulation (2026-10-20, worker-p1r-ae2a1b83, w1g, first-item advisor QC):
  the underlying construct is REAL and sourced (Gross 2015, Psychological Inquiry 26(1), section
  "The Implementation Stage", defines emotion regulation flexibility as "the matching of emotion
  regulation strategy to environmental circumstance", citing Bonanno & Burton 2013; both full PDFs
  opened and quotes verified verbatim), but NO source defines the page's coined title "State-matched
  emotion regulation" (the seed glosses it as "Gross's extended process model's situation-strategy
  matching", which is also not Gross's term). ADVISOR DISPOSITION REQUEST: canonical renaming to the
  sourced term (e.g. "Emotion regulation flexibility"), with links and the researched body preserved;
  do NOT count as a hallucination. The rewritten body now describes the sourced construct without
  asserting the label equivalence. Degree 13 (3 concepts + 10 principles), fast-track eligible. The
  item is NOT marked done pending this disposition; the researched text is pushed as WIP.

Enriched and sourced in band w1g (2026-10-20, worker-p1h-9f42e6c7): the opened sources
substantiate the underlying teachings; title/concept identity remains pending supervisor
disposition. The page TITLE is the compendium's own heading rather than the tradition's
term for the teaching. Per rule 3 (garbled-title fix) the supervisor must verify the
concept identity or authorize an appropriate rename/merge; "keep as a thematic heading"
is not automatically permitted by the owner's namespace rule. These are NOT proven
hallucinations.

- Spontaneous right action (queue s2, 66w) — the opened IEP article defines Wang
  Yangming's doctrine as the unity of knowledge and action (zhixing heyi); "spontaneous
  right action" is not a term the article uses. Rename candidate or keep as heading.
- The trained mind (queue s2, 68w) — the opened Dhammapada Cittavagga says "tamed mind",
  "guarded mind", "well-directed mind" (Buddharakkhita; Thanissaro's parallel
  translation also says "well-tamed", checked 2026-10-20); "trained" is not documented
  as an equivalent in any opened source. Rename candidate or keep as heading.
- The natural rhythm of warmth and cool (queue s2, 74w) — the opened Zhuangzi ch. 6
  passage grounds the seasonal image but does not use this phrase as a named term.
  Rename candidate or keep as heading.
- The water of life (enriched in w1g 2026-10-20) — the opened Daodejing 8 (Legge)
  grounds the teaching, but the chapter's own phrase is "the highest excellence is like
  (that of) water"; "water of life" is the compendium's heading. Rename candidate or
  keep as heading.
- The same in all conditions (enriched in w1g 2026-10-20; queue s2, 53w) — the opened
  Bhagavad Gita 6.29-6.32 grounds the equal-vision teaching, but the page title is the
  compendium's heading, not the Gita's term. Pending supervisor verification/rename/
  merge.
- The seer at rest in its own nature (enriched in w1g 2026-10-20; queue s2, 68w) — the
  opened Yoga Sutra 1.3 grounds the teaching; the title is a rendering of the sutra's
  own terms rather than a named concept label. Pending supervisor verification/rename/
  merge.
- Three thousand realms in one thought (enriched in w1g 2026-10-20; queue s2, 38w) —
  the title IS the tradition's own term (yi nian san qian) per the opened source; listed
  here only to note the Mohe Zhiguan quotation-provenance caveat in the w1g ledger.
- The community of inquiry (enriched in w1g 2026-10-20) — the opened Peirce essay
  states the doctrine ("all who investigate") but does not use this phrase verbatim;
  the page title is a compendium heading. Pending supervisor verification/rename/merge.
- Strength as virtue (enriched in w1g 2026-10-20; queue s2, 63w) — the opened GS
  V.377 passage gives the inverse (weakness paraded as virtue) rather than the
  phrase "strength as virtue"; page title is a compendium heading. Pending
  supervisor verification/rename/merge.
- Thinking for doing (enriched in w1g 2026-10-20; queue s0, 83w) — the page title
  compresses James's own sentence (Principles of Psychology: "My thinking is first
  and last and always for the sake of my doing"); the three-word form is not his
  verbatim wording. Pending supervisor verification/rename/merge.
- The criterion of experience (enriched in w1g 2026-10-20; queue s2, 51w) — the opened
  James essay discusses criteria for truth but the page title is the compendium's
  heading. Pending supervisor verification/rename/merge.
- The rhythm of rest (enriched in w1g 2026-10-20; queue s2, 75w) — the opened Zhuangzi
  6.2/6.4 grounds the toil-ease-rest image, but the page title is the compendium's
  heading. Pending supervisor verification/rename/merge.
- The rhythm of life (enriched in w1g 2026-10-20; queue s2, 53w) — the opened Neiye V
  (Roth) grounds the breath-as-rhythm teaching ("the vital breath is regular"), but the
  page title is the compendium's heading. Pending supervisor verification/rename/merge.
- Sufficiency (enriched in w1g 2026-10-20) — the opened Daodejing 33/44 grounds the
  teaching, but the queue does not list "Sufficiency" itself; it lists "Zhi zu (knowing
  sufficiency)" (s3, 6w) and "Self-sufficiency" (s3, 4w). The page title is generic
  English; the tradition's term for this teaching is zhizu. Pending supervisor
  verification/rename/merge.

Also flagged (story namespace, not edited by the worker): ST075 cites DN 22 for the monkey
simile, but the opened DN 22 page (Thanissaro, accesstoinsight.org) contains no monkey
passage; the canonical simile is at SN 12:61/12:62 (see w1g ledger).

Possible near-duplicate pair (flagged by worker-w1b-2f8d4c1a, 2026-10-20, while enriching
Tolerance of uncertainty): "Tolerance of uncertainty" and "Uncertainty tolerance" both
exist as separate concept pages in the same construct family, alongside "Intolerance of
uncertainty" (rich, clinical-literature side) and "Intolerance of ambiguity". At selection
both uncertainty-tolerance pages were thin seeds; "Tolerance of uncertainty" is now
enriched (2026-10-20). Pending supervisor disposition: keep both,
merge, or differentiate by field (the clinical IU literature vs the medical-education
uncertainty-tolerance literature); no merge attempted by the worker.

Possible near-duplicate pair (flagged by worker-w1aa-9e4b6d1f, 2026-10-20, while enriching
Generative model theory): "Generative model theory" (deg 4, w1aa fast-track band) and the
already-enriched "Predictive processing" (deg 9, same NAV-TH-COGNITION theory track) cover the
same Clark-2013 predictive-processing framework, alongside "Active inference" (deg 1) and
"Free Energy Principle" (deg 1). The opened Clark 2013 full text defines "generative model"
(a component of the framework) but does not name a standalone "Generative model theory";
the page title is the compendium's own heading. No merge attempted by the worker. Pending
supervisor disposition: merge into Predictive processing (the Clark material preserved as a
subsection or facets entry), rename to a sourced term, or keep as a separate heading
differentiated as the generative-model component. The seed's only principle edge ([[CO048 —
Distinguish worry from problem-solving — worry is not planning]]) is one-directional: CO048's
own page contains no link to or mention of this concept (grep-verified); the inherited
Cited-in link is preserved unchanged pending disposition. The corrected, source-bounded body
(Clark 2013 section 1.1, printed p. 182) is pushed as WIP; the item is NOT marked done
pending this disposition. Advisor QC (item-20 milestone) prescribed the repairs and the
namespace check; post-repair re-review pending alongside the disposition.

## Owner-cited good examples (the standard)

The having mode; Beginner's mind; Premeditatio malorum; Awe; Flow.
