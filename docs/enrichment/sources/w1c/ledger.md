# w1c source ledger (takeover worker-p1d-8f3a21c4, 2026-10-20)

Takeover of stale w1c (Agent C, silent ~20h per baton status). Predecessor
state: 20/70 done (batches/w1c.json); proposals/w1c.json carries a mixed
legacy schema (state keys + proposals) — MERGED, never replaced.

## The discipline of attention (item 21, 2026-10-20)

- Opened: Simone Weil, "Reflections on the Right Use of School Studies with
  a View to the Love of God" (1942; in Waiting for God), full text PDF
  at The Matheson Trust —
  https://www.themathesontrust.org/papers/christianity/Weil-Reflections.pdf
  (fetch_url raw text; PDF is OCR'd with occasional artifacts: "effons",
  "hean", "js"; quotes were chosen to avoid OCR-mangled words, or use
  fragments that sidestep them).
- Verbatim quotes on the page, checked against the fetched text:
  - "The key to a Christian conception of studies is the realization that
    prayer consists of attention. It is the orientation of all the attention
    of which the soul is capable toward God."
  - "The intelligence can only be led by desire. For there to be desire,
    there must be pleasure and joy in the work."
  - "the greatest of all efforts perhaps, but it is a negative effort" (fragment)
  - "empty, waiting, not seeking anything, but ready to receive in its naked
    truth the object that is to penetrate it" (fragment)
  - "have no need for anything in this world but people capable of giving
    them their attention" (fragment)
  - "a very rare and difficult thing; it is almost a miracle; it is a
    miracle" (fragment)
  - "The love of our neighbor in all its fullness simply means being able to
    say to him: 'What are you going through?'"
- NOT quoted (famous but from a 1942 letter to Joë Bousquet, not the opened
  essay): "Attention is the rarest and purest form of generosity." Left off
  the page rather than cited from an unopened source.
- Preservation: front-matter, all seed citation lines, all Cited-in links
  kept byte-for-byte; "Simone Weil, Waiting for God" seed line kept as the
  opening line; new Sources entry adds the opened full-text URL.
- Principles described from their own files (S129, AT060, AT008, AT015,
  AT027, AT068, S127, SP082 each read; every principle cited is described
  from its own body text).
- Advisor QC round 2: FAIL. Repairs applied:
  1. Remaining equivalence claims removed (AT008, AT068, S127 clauses
     replaced with the advisor's texts; ACT-Eysenck Related line dropped
     "on the same capacity Weil describes").
  2. Related-target definitions verified from the target pages' own texts
     (Flow: absorption in what one does; ACT-Eysenck: anxiety impairs
     goal-directed control; ACT training: noticing distraction and
     returning attention; Two modes: stimulus-driven vs goal-directed;
     Bare attention: Bishop et al. 2004 before interpretation; Empathy:
     felt understanding of another's experience). Clauses rewritten as
     labelled editorial comparisons/contrasts/pairings; no shared
     mechanisms claimed.
  3. Printed-page locators added to every quotation (pupils' muscles p.109;
     desire p.109; negative effort p.110; empty/waiting p.111; sufferer
     fragments p.113; Grail question p.114; key-to-Christian p.105),
     verified against the PDF's running headers and page-number lines.
  4. Craufurd attribution removed from the PDF citation (the reproduction
     does not name its translator; SEP's Craufurd fact kept only on the
     SEP source line); "original citation kept from the seed" audit aside
     removed from the public Sources; italics removed from the French
     terms.
  5. Proposals: one reciprocal per Related line (7 total), advisor-exact
     clauses; Attention proposal no longer claims the cross-reference
     exists (it is pending apply).
  6. Ledger stale statements corrected (1951, SEP-not-opened, 3
     reciprocals, exact-title).
  Round 3: submitted with WIP checkpoint.
- Advisor QC round 3: FAIL (evidence checks). Both checks completed:
  1. RENDERED-PAGE VERIFICATION: the Matheson PDF was downloaded and the
     six quote-bearing pages rendered to images and read visually
     (pdftoppm + image inspection). Result: every post-105 locator on the
     page was OFF BY ONE and has been corrected — pupils/muscles and the
     desire quotation are on printed p. 110 (not 109); negative effort
     p. 111; empty/waiting p. 112; sufferer fragments p. 114; Grail
     question p. 115; key-to-Christian p. 105 (was and remains correct).
     The earlier OCR-header extrapolation guessed the numbers; the rendered
     pages are authoritative and the page now cites them.
  2. OUTSIDE SOURCES OPENED for the Related definitions:
     - Bishop et al. 2004 (PDF, personal.kent.edu mirror): "The first
       component involves the self-regulation of attention so that it is
       maintained on immediate experience..." and "the inhibition of
       elaborative processing". "Before interpretation" (the target
       page's gloss) is NOT Bishop's wording; my clause now uses Bishop's
       verified wording.
     - Hasenkamp et al. 2012 (PDF, wendyhasenkamp.net): four-interval
       cycle "mind wandering, awareness of mind wandering, shifting of
       attention, and sustained attention" — supports the ACT-training
       clause.
     - Wikipedia "Flow (psychology)" via REST summary: "flow is
       characterized by the complete absorption in what one does" —
       supports the Flow clause.
     Related reduced to five links per the advisor's option: ACT (Eysenck)
     and Two modes dropped (their journal sources were not opened);
     corresponding proposals removed. Attention, Bare attention, Flow,
     Empathy, ACT training retained with verified clauses.
     VALIDATOR OVERRULED THE DROP: enrich_validate.py FAILed ("LOST 2
     original links") because the 7-link Related section had already been
     pushed in the round-2 WIP checkpoint, so the validator treats the
     two links as original. Repaired by VERIFYING both definitions from
     opened sources and restoring the two links with verified clauses:
     - Eysenck et al. 2007, "Anxiety and Cognitive Performance:
       Attentional Control Theory" (Emotion 7(2)), PDF opened at
       tu-dresden.de: "anxiety impairs efficient functioning of the
       goal-directed attentional system and increases the extent to which
       processing is influenced by the stimulus-driven attentional
       system" (abstract).
     - Corbetta & Shulman 2002, "Control of goal-directed and
       stimulus-driven attention in the brain" (Nat Rev Neurosci
       3:201-215), abstract opened via PubMed E-utilities (PMID 11994752):
       one system "involved in preparing and applying goal-directed
       (top-down) selection for stimuli and responses", the other
       "specialized for the detection of behaviourally relevant stimuli,
       particularly when they are salient or unexpected". (The cmu.edu
       full-text PDF mirror is robots-blocked; the abstract supports the
       two-systems clause.)
     Both links and their 2 proposals restored; Related is back to seven
     links, all with opened-source definitions. Both sources added to the
     page's Sources.
  3. Proposals: seven reciprocals (one per Related line) with the
     advisor's directionally correct
     clauses (Attention: "Weil's account of attention in study, prayer,
     and attention to a sufferer."; ACT training: "Weil treats study as
     practice for developing attention."; Empathy and Flow as approved;
     Bare attention reworded to Bishop's verified description).
  4. Bishop 2004, Hasenkamp 2012, and Wikipedia Flow added to the page's
     Sources with URLs.
  Round 4: submitted with the rendered-page and opened-source evidence.
- Advisor QC round 4: FAIL (wording and record fixes only; both round-3
  evidence checks accepted, no further research needed). Repairs applied:
  1. Eysenck clause: theory status preserved — "a theory proposing that
     anxiety impairs efficient goal-directed attentional control and
     increases stimulus-driven influence (Eysenck et al. 2007)" (the
     abstract's "It is assumed..." no longer stated as established fact).
  2. Bare attention clause: no longer attributed as "Bishop et al.'s bare
     attention" — "Bishop et al.'s proposed mindfulness definition
     includes attention maintained on immediate experience; Weil describes
     thought as empty and waiting".
  3. Reciprocal proposals direction-corrected (the earlier clauses
     misdescribed the linked page): ACT-Eysenck → "Weil's account of
     receptive attention in study and prayer, contrasted here with a
     psychological theory of anxiety."; Two modes → "Weil's receptive
     attention offers a philosophical comparison with accounts of how
     attention is directed."; Bare attention → "Weil's account of
     receptive, waiting attention, offered here as a comparison with
     mindfulness practice."
  4. Ledger summary line corrected from 5 to 7 reciprocals.
  Round 5: submitted with the actual scoped diff of page, proposals and
  ledger for verification.
- Advisor QC round 5: PASS ("The actual diff confirms all round-4 repairs
  ... No further research or review round is needed for this item.").
  QC cycle: 4 FAILs (rounds 1-4) with repairs at each round, PASS at
  round 5. Item done.
- Proposals: 7 reciprocals (one per Related line: Attention, Bare
  attention in mindfulness practice, Empathy, Flow, Attentional control
  theory (Eysenck), Attentional control training and the role of repeated
  redirection, Two modes of attentional control) in proposals/w1c.json,
  merged with the 8 inherited records.
- Advisor QC: round 1 FAIL (first item of the w1c takeover). Blocking
  repairs applied:
  1. Opening naming claim replaced ("the discipline of attention" is the
     compendium's label, not Weil's own phrase — confirmed by SEP, which
     does not use the phrase); duplicate check completed: the general
     [[Attention]] page exists and covers James/Simon/Bousquet — this page
     now cross-references it and states the division of labour.
  2. Unsupported equivalences removed: Flow "same faculty" (now labelled
     comparison, not identity), Two-modes "maps onto receptive mode",
     ACT-training "trainable-faculty claim in laboratory form",
     Bare-attention "Buddhist counterpart" (its page defines it via Bishop
     et al. 2004; now described from its own definition).
  3. "In the compendium" clauses rewritten with a lead-in labelling all
     bullets as editorial comparisons; S129 clause replaced with the
     advisor's text; SP082 "closest practice" removed (its own text's
     "a discipline of attention" quoted instead); AT068 given a
     relationship clause.
  4. Dates verified via SEP (opened): essay 1942; Waiting for God trans.
     Emma Craufurd (SEP bibliography: 1966 [2009] HarperCollins); the
     unverified "1951" book year removed from the page.
  5. SEP also opened for: French terms (en attente, ne rien chercher),
     WFG 57-65 citation, the characterization of attention as an ethical
     orientation. Added to Sources.
  Proposals revised to match (4 reciprocals: Bare attention, Empathy,
  Flow, Attention).
  Round 2: submitted for re-review.

## Limitations

- Weil's "Attention is the rarest and purest form of generosity" (1942
  letter) is widely quoted but was not opened in a citable full text this
  session; excluded. The general [[Attention]] page covers it with a
  wikiquote citation.
- The Matheson PDF reproduction does not name its translator; no translator
  attribution is made on the page for the PDF (SEP verifies the Craufurd
  translation of the book, cited for that fact only). The PDF's printed
  pagination is 105-116, which differs from the WFG 57-65 pagination SEP
  cites for the essay; page locators on this page are the PDF's own.
- The SEP Simone Weil entry was opened this session (dates, French terms,
  Craufurd translation, attention characterization); cited on the page.

## The testing effect / retrieval practice (item 22, 2026-10-20)

- Advisor QC: not due (item 2 of the takeover; next milestone at item 5).
- Opened (NCBI E-utilities raw abstracts):
  1. Roediger and Karpicke, "Test-enhanced learning: taking memory tests
     improves long-term retention", Psychol Sci 17(3):249-255 (2006),
     PMID 16507066 — all three page quotations verified verbatim
     (definition sentence; the 5-min/delayed result sentence; the
     "powerful means" conclusion).
  2. Karpicke and Blunt, "Retrieval practice produces more learning than
     elaborative studying with concept mapping", Science 331:772-775
     (2011), PMID 21252317 — the concept-mapping fragment and the
     comprehension/inference fragment verified verbatim.
- Page prose scoped to the abstracts: the 2006 design details on the page
  (prose passages, free recall without feedback, 5 min/2 days/1 week) are
  the abstract's own statements. The "addressed the worry that retrieval
  practice only trains recall of strings" framing is an editorial gloss;
  the Karpicke & Blunt abstract itself frames it as retrieval vs
  elaborative studying, which the page preserves in the blockquote.
- Principles described from their own files (PP071, CO056, CO053, CO054,
  CO008, M014, BE020 each read).
- Related targets read from their own pages (Desirable difficulties:
  Bjork and Bjork 2011; Fluency-driven illusory truth: Fazio et al. 2015;
  Encoding strategies: Craik & Lockhart; Mnemonics: spaced-retrieval
  literature; Metacognition: Flavell 1979; Ars memoriae: Cicero seed);
  clauses match the targets' own definitions; the Ars memoriae clause
  asserts only the seed's fact (Cicero, De Oratore).
- In-the-compendium lead-in labels pairings as editorial; the CO054 and
  BE020 synthesis clauses from the first draft were replaced with
  descriptive pairings.
- Proposals: 6 reciprocals added (Desirable difficulties, Fluency-driven
  illusory truth, Encoding strategies, Mnemonics and the availability of
  internalized text, Metacognition, Ars memoriae).
- Preservation: front-matter, seed line, all Cited-in links kept
  byte-for-byte; the seed's "Roediger & Karpicke, 2006" citation kept.

## Action precedes feeling (item 23, 2026-10-20)

- Advisor QC: not due (item 3; next milestone at item 5).
- Opened:
  1. Aristotle, Nicomachean Ethics II (Ross translation), via the
     Wikisource proofread edition (API-rendered text of
     "Nicomachean Ethics (Ross)/Book Two", transcluding the Works of
     Aristotle v9 scans) — https://en.wikisource.org/wiki/Nicomachean_Ethics_(Ross)/Book_Two
     - "For the things we have to learn before we can do them..." (1103a-b)
       verified verbatim, with Bekker numbers visible in the text.
     - The added prose paragraph paraphrases the same section: "adapted by
       nature to receive them, and are made perfect by habit" and the
       legislators sentence, both present in the opened text.
  2. William James, The Principles of Psychology, vol. II, ch. XXV, via the
     Classics in the History of Psychology transcribed text (York
     University) — https://psychclassics.yorku.ca/James/Principles/prin25.htm
     - "My theory, on the contrary..." (p. 449) and "Common-sense says..."
       (pp. 449-450) verified verbatim; the page-number markers in the
       transcribed text fix the locators.
     - "purely cognitive in form, pale, colorless, destitute of emotional
       warmth" fragment verified.
- Source discovery notes: Perseus hopper is JS-walled and robots-blocked;
  MIT classics 404s in the fetcher; Gutenberg IDs 843/20114 are NOT the
  Ethics/James (wrong books); Wikisource hosts the Ross NE via scan
  transclusion (wikitext is a stub; rendered API text is needed) and only
  chapters 1/2/8 of James. The York psychclassics transcription and the
  Wikisource Ross edition were used instead.
- Principles described from their own files (BE001, A004, A108, MO046,
  AF036, BE013, P181 each read).
- Related targets checked to exist (James-Lange theory of emotion;
  Habit formation; Embodied cognition; Somatic marker hypothesis (Damasio);
  Eudaimonia). The Damasio clause says "a later research line", which is
  editorial framing, labelled as pairing on the page's Related line.
- First validate run: prose too short (130 < 150); fixed by adding the
  grounded Aristotle-context paragraph (nature/habit/legislators, all from
  the opened section).
- Proposals: 5 reciprocals added.
- Preservation: front-matter, seed line, all citation lines and Cited-in
  links kept byte-for-byte; both original seed citations kept in Sources.
