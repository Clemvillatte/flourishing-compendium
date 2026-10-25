# Evidence ledger: Frustration (dos30)

Owner-directed mint 2026-10-25 (in-session owner message: "Add 'Frustration', 'Creation', 'Creativity', 'Procrastination' to the dossiers"). Writer: worker-pplx-dos30-1025 (supervisor baton also held briefly this session per owner direction, then taken over by supervisor-pplx-1024c, live). Registry entry minted as planned; the status flip to published and the Academy data splice are supervisor-only and were NOT done. Advisor QC rounds 1 and 2 applied (see below); this revision is the post-round-2-repair draft. QC status: PENDING a third advisor pass; not certified publication-ready.

## Corpus sweep (how the map was built), with an honest reading record

- Title sweep: `ls content/concepts content/kernels content/stories | rg -i 'frustrat|irritat|annoy|tolerance'` and full card-name checks for the family members used.
- Full-text sweep: `rg -il 'frustrat' content/` returned 45 files; on-theme ones were read, incidental mentions (a passing use of the word) were not mapped.
- Irritation/annoyance sweep: `rg -il 'irritat|annoy' content/` returned 71 files; the count was recorded but NOT all 71 files were individually triaged this session; on-theme construct found: The irritation of doubt. A future pass should re-triage that list for stragglers.
- Cards read IN FULL this session: Frustration–aggression hypothesis; Distress tolerance (DBT); Patience; SP031; B105; K169; K253; K184; ST457; ST332. Also ERG Theory, General strain theory, Effort-reward imbalance, K271 and K189, whose tails were read in QC round 2 (during drafting only their head matter was read; the earlier ledger line overlabelled these four as full, corrected here).
- External carriers opened in QC round 2 to back retained factual glosses: Wikipedia's ERG theory article (raw wikitext via the MediaWiki API, https://en.wikipedia.org/wiki/ERG_theory), confirming "when needs in a higher category are frustrated, an individual will invest more efforts in the lower category"; and the Siegrist effort-reward imbalance PDF (https://www.uniklinik-duesseldorf.de/fileadmin/Fuer-Patienten-und-Besucher/Kliniken-Zentren-Institute/Institute/Institut_fuer_Medizinische_Soziologie/Forschung/Siegrist/ERI.pdf), confirming "Continued experience of ‘high cost/low gain’ at work frustrates basic reward expectations, compromising workers’ self-esteem and causing sustained psychobiological stress reactions with adverse long-term effects on mental and physical health (Siegrist 1996)."
- Cards read PARTIALLY (top matter or a targeted context extract, gloss taken only from what was read): Noogenic neurosis; The insatiability of craving; Autonomy; Social embeddedness; Novelty seeking without commitment; Behavioral self-regulation theory; Positive attention training; ST461 (front-matter and narrative body read; the card is mostly quotation).
- K253 and K184 were read in full and then REMOVED from the Practice selection: K253 is a virtue-calibration kernel whose protocol does not support a pushing-through-vs-abandoning application, and K184's own evidence (opposite action showed no advantage for anger in the cited design) argues against recommending it for frustration-borne anger. Both removals are recorded here.

- HUMANIZER inventory scan applied per sourced card used on the page (per HUMANIZER-SKILL.md, read in full this revision): scaffolds checked ("false X", "X/Y-Z" and "A is not B" forms; "not X but Y" banned outright); bare "People"/"Things" correctness gates; vocabulary primes removed from the surrounding prose; unattributed causal or inevitability claims deleted from the card text. Causal and equivalence claims that remain (for example the Frustration–aggression hypothesis card's own protocol statement, SP031's read of anger as blocked striving, B105's dissection instruction) are the card's own protocol or the opened source's claim, stated inside the entry and attributed there.

## Quote verification record (every quoted passage, word-for-word)

1. Schnitker 2012: "Patience is the propensity to wait calmly in the face of frustration or adversity." and "led to increased patience, decreased depression, and increased positive affect relative to a control condition, suggesting that patience may be modifiable". Verified against the opened Taylor & Francis abstract page (https://www.tandfonline.com/doi/abs/10.1080/17439760.2012.697185, fetched fresh this session). Both verbatim.

2. Berkowitz 1989: "A proposed revision of the 1939 model holds that frustrations generate aggressive inclinations to the degree that they arouse negative affect." and "Interpretations and attributions can be understood partly in terms of the original analysis but they can also influence the unpleasantness of the thwarting." Verified against the Europe PMC REST API record for PMID 2667009 (resultType=core returns the full abstractText; Psychological Bulletin 1989, "Frustration-aggression hypothesis: examination and reformulation"). The PubMed HTML page could not be extracted by the crawler this session (an extraction failure; the record does not establish the cause). Reader-facing carrier link uses the standard PubMed URL. Abstract-level verification only; the full paper was not opened.

3. Seneca, De Ira II.III (Aubrey Stewart): "the first confusion of a man’s mind when struck by what seems an injury is no more anger than the apparent injury itself: it is the subsequent mad rush, which not only receives the impression of the apparent injury, but acts upon it as true, that is anger, being an exciting of the mind to revenge, which proceeds from choice and deliberate resolve." Verified against a raw download of Project Gutenberg file 64576-0.txt (lines 2490-2496). Verbatim including the carrier's curly apostrophe in "man’s" (U+2019), which the page reproduces. Used as a comparison on how anger develops; the page explicitly does NOT claim Seneca defines frustration or draws the frustration-anger boundary.

4. Turner 2016 (Frontiers in Psychology, PMC5028385): "Low frustration tolerance is a secondary irrational belief, and research indicates that it is positively associated with aggressive expression of anger (Martin and Dahlen, 2004), reduced anger control (Moller and Van der Merwe, 1997), poor social adjustment (Watson et al., 1998), addictive behaviors (Ko et al., 2008), anxiety, depression, procrastination, and dysfunctional affect (Harrington, 2005b, 2006)." and "The link between LFT and procrastination has received much research attention, with Ellis and Knaus (1977, p. 19) regarding LFT as 'the main and the most direct cause of procrastination.'" Verified against the opened PMC full text (https://pmc.ncbi.nlm.nih.gov/articles/PMC5028385/, fetched fresh this session). Both verbatim, capitalization and citation parentheses as printed. An earlier draft's LFT quote was NOT verbatim (it inserted "(LFT)" and lowercased the opening); caught in advisor QC round 1 and replaced with the exact passage. The "it is unbearable to fail" example from the search snippet was dropped because it was not in the fetched full text.

5. Wicks, SEP Arthur Schopenhauer: "In a manner reminiscent of traditional Buddhism, he recognizes that life is filled with unavoidable frustration and acknowledges that the suffering caused by this frustration can itself be reduced by minimizing one’s desires." Verified against the freshly opened SEP entry (https://plato.stanford.edu/entries/schopenhauer/). Verbatim including the curly apostrophe.

## Sources NOT opened (honest record)

- Breuer & Elson, Frustration-Aggression Theory (SSOAR PDF): not retrievable this session (the request returned a bot-challenge HTML page, not the PDF). No quotes taken from it; the Frustration–aggression hypothesis card's gloss paraphrases the card's own text, which carries its own earlier-verified carriers.
- Klandermans, Frustration-aggression (archive.org): two download attempts timed out. No quotes taken.
- Dollard et al. 1939: cited at second hand only; no direct quotes.

## Advisor QC round 1 (2026-10-25) and repairs applied

Verdict: needs repairs; not QC-passed. Repairs applied in this revision:
1. The proposed divergence (event vs belief) was WITHDRAWN as an established disagreement; the section is now an open research question stating the dos19-style test (one opened passage must affirm and another deny the same proposition). Berkowitz's own abstract is quoted as the bridge that makes the two-layer reading possible.
2. The non-verbatim Turner quote replaced with the exact passage; the unsupported "it is unbearable to fail" example dropped; "the procrastination link is the oldest" (unsupported) removed.
3. The Seneca passage re-presented as a comparison on anger's development; the false boundary claim ("I hold frustration to Seneca's first confusion") removed.
4. The unsupported ERG extension ("blocked ambition shows up as overwork on everything except the ambition") deleted; the Schopenhauer carrier opened and quoted verbatim; the Autonomy, Effort-reward and Positive-attention glosses narrowed to their cards' claims.
5. K253 and K184 read in full and removed from the Practice selection (not supported for this application); ST332 read in full and its logline rewritten from the card's own text.
6. Ledger corrected: partial reads are now distinguished from full reads; the 71-file irritation/annoyance triage is recorded as incomplete.
7. Baton repairs: the earlier ct3/w1ad/w1af releases had failed with usage text; re-run with the holder argument and pushed.
8. Europe PMC record: recorded as the verification carrier for PMID 2667009, with PubMed's failure noted as an extraction failure.

## Advisor QC round 2 (2026-10-25) and repairs applied

Verdict: still needs repairs; kept as QC-pending. Repairs applied in this revision:
1. Invented opposition language removed from the page: the intro's "partly manufactures", the open-question section's "matters less" and "largely manufactured". The section was rewritten as a neutral explanation of how affect and appraisal may interact ("Affect and appraisal in one episode"), stating the two layers as accounts of different parts of one episode, and the research-status/test language was moved here (see Open points below).
2. Factual glosses repaired: the General strain theory gloss now states the card's conditional claim rather than the stronger "coping resources deciding who offends"; the Social embeddedness gloss no longer asserts "absence damages and restoration restores"; "self-medication" in the Variation block replaced with Turner's own list item ("addictive behaviour"); the K189 selection gloss corrected (the card's markers are boredom and anxiety; frustration appears only in Csikszentmihalyi's quote about repeating the same thing at the same level, not as a calibration reading).
3. Factual glosses given opened external carriers or reduced scope: ERG (Wikipedia ERG theory, opened, verbatim confirmed) and Effort-reward imbalance (Siegrist PDF, opened, verbatim confirmed); the Autonomy gloss remains attributed to what the theory holds, per the card.
4. Ledger read labels corrected: ERG, General strain theory, Effort-reward imbalance, K271 and K189 were head-only during drafting and are now read in full (tails read this revision).
5. Disguised prose deleted: "The blockage itself comes in kinds, and the family is held by member." and "The blockage has to go somewhere, and the accounts map the exits." (which asserted inevitability); the intro's prescriptive inference ending ("pushing harder makes sense if...") rewritten to a plain account of what each tradition changes.
6. HUMANIZER-SKILL.md was read in full this revision (it had not been opened in the transcript); the HUMANIZER inventory scan for each sourced card was recorded above.

## Checker

`python3 scripts/dossier_check.py docs/enrichment/dossiers/frustration.md` -> re-run after round-2 repairs 2026-10-25, results recorded in the next revision of this line.

## Open points for any revision pass

- The 71-file irritation/annoyance sweep was not fully triaged; a future pass should re-check it for stragglers.
- The frustration-vs-irritation boundary is left undefined honestly (no opened source defines it).
- Research status of the affect/appraisal relation (moved off the page in QC round 2): the section "Affect and appraisal in one episode" presents the two accounts as layers of one episode, following Berkowitz's own abstract. Whether any opened passage AFFIRMS that the sting lives in the event and another DENIES that same proposition was not established this session; the passages quoted do not settle it, and the page does not claim they do. A future writer should either find the two passages (the dos19-style test) or leave the section as a neutral comparison.
- The page presents no divergence claim; any future divergence claim for this theme must meet the dos19 standard before being stated on the page.
