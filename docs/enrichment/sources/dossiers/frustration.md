# Evidence ledger: Frustration (dos30)

Owner-directed mint 2026-10-25 (in-session owner message: "Add 'Frustration', 'Creation', 'Creativity', 'Procrastination' to the dossiers"). Writer: worker-pplx-dos30-1025 (supervisor baton also held briefly this session per owner direction, then taken over by supervisor-pplx-1024c, live). Registry entry minted as planned; the status flip to published and the Academy data splice are supervisor-only and were NOT done. Advisor QC round 1 applied (see below); this revision is the post-repair draft. QC status: PENDING a second advisor pass; not certified publication-ready.

## Corpus sweep (how the map was built), with an honest reading record

- Title sweep: `ls content/concepts content/kernels content/stories | rg -i 'frustrat|irritat|annoy|tolerance'` and full card-name checks for the family members used.
- Full-text sweep: `rg -il 'frustrat' content/` returned 45 files; on-theme ones were read, incidental mentions (a passing use of the word) were not mapped.
- Irritation/annoyance sweep: `rg -il 'irritat|annoy' content/` returned 71 files; the count was recorded but NOT all 71 files were individually triaged this session; on-theme construct found: The irritation of doubt. A future pass should re-triage that list for stragglers.
- Cards read IN FULL this session: Frustration–aggression hypothesis; Distress tolerance (DBT); Patience; ERG Theory; General strain theory; Effort-reward imbalance; SP031; B105; K271; K169; K253; K184; ST457; ST332.
- Cards read PARTIALLY (top matter or a targeted context extract, gloss taken only from what was read): Noogenic neurosis; The insatiability of craving; Autonomy; Social embeddedness; Novelty seeking without commitment; Behavioral self-regulation theory; Positive attention training; K189 (protocol + framing read earlier in the session); ST461 (front-matter and narrative body read; the card is mostly quotation).
- K253 and K184 were read in full and then REMOVED from the Practice selection: K253 is a virtue-calibration kernel whose protocol does not support a pushing-through-vs-abandoning application, and K184's own evidence (opposite action showed no advantage for anger in the cited design) argues against recommending it for frustration-borne anger. Both removals are recorded here.

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

## Checker

`python3 scripts/dossier_check.py docs/enrichment/dossiers/frustration.md` -> OK, 25 card links resolve, 13 headers, 8 external carriers (exit 0), run after repairs 2026-10-25.

## Open points for any revision pass

- The 71-file irritation/annoyance sweep was not fully triaged; a future pass should re-check it for stragglers.
- The frustration-vs-irritation boundary is left undefined honestly (no opened source defines it).
- The open-question section needs a future writer to find passages that genuinely affirm and deny the same proposition about where frustration's sting lives, or to close the section as a comparison.
