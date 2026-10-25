# Evidence ledger: Frustration (dos30)

Owner-directed mint 2026-10-25 (in-session owner message: "Add 'Frustration', 'Creation', 'Creativity', 'Procrastination' to the dossiers"). Writer: worker-pplx-dos30-1025 (supervisor baton also held this session per owner direction). Registry entry minted as planned; the status flip to published and the Academy data splice are supervisor-only and were NOT done.

## Corpus sweep (how the map was built)

- Title sweep: `ls content/concepts content/kernels content/stories | rg -i 'frustrat|irritat|annoy|tolerance'` and full card-name checks for the family members used.
- Full-text sweep: `rg -il 'frustrat' content/` returned 45 files; every file was triaged by title or by a context grep; the on-theme ones were read in full (see below), the incidental mentions (a passing use of the word) were not mapped.
- Irritation/annoyance sweep: `rg -il 'irritat|annoy' content/` (71 files) triaged the same way; only The irritation of doubt was on-theme as a construct.
- Cards read in full: Frustration–aggression hypothesis; Distress tolerance (DBT); Patience; ERG Theory; General strain theory; Effort-reward imbalance; SP031; B105; K271; K189; ST457; ST332; ST461; Behavioral self-regulation theory (context grep); Noogenic neurosis, The insatiability of craving, Autonomy, Social embeddedness, Novelty seeking without commitment, Positive attention training (context grep, on-theme glosses taken from the cards' own text).
- Stories considered: ST457 (frustration in the meditation sequence), ST332 (quicksand struggle), ST461 (frustration named among observed mental states) were read and mapped; anger-family stories (ST146, ST205, ST401 etc.) were left to the Anger dossier to avoid duplication.

## Quote verification record (every quoted passage, word-for-word)

1. Schnitker 2012 definition: "Patience is the propensity to wait calmly in the face of frustration or adversity." and the modifiable finding: "led to increased patience, decreased depression, and increased positive affect relative to a control condition, suggesting that patience may be modifiable". Verified against the opened Taylor & Francis abstract page (https://www.tandfonline.com/doi/abs/10.1080/17439760.2012.697185, fetched fresh this session). Both verbatim, including the parenthetical italic markers dropped by the plain-text rendering (interpersonal, life hardship, daily hassles are the carrier's own italics; not quoted in the dossier).

2. Berkowitz 1989 fragments: "A proposed revision of the 1939 model holds that frustrations generate aggressive inclinations to the degree that they arouse negative affect." and "Interpretations and attributions can be understood partly in terms of the original analysis but they can also influence the unpleasantness of the thwarting." Verified against the Europe PMC REST API record for PMID 2667009 (https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:2667009&resultType=core&format=json), which returns the full abstractText. The PubMed HTML page is bot-walled to the crawler (empty-text error); the Europe PMC record is the same bibliographic record (same PMID, Psychological Bulletin 1989, "Frustration-aggression hypothesis: examination and reformulation"). Both fragments verbatim against that record. Reader-facing carrier link uses the standard PubMed URL.

3. Seneca, De Ira II.III (Aubrey Stewart translation): "the first confusion of a man's mind when struck by what seems an injury is no more anger than the apparent injury itself: it is the subsequent mad rush, which not only receives the impression of the apparent injury, but acts upon it as true, that is anger, being an exciting of the mind to revenge, which proceeds from choice and deliberate resolve." Verified against a raw download of Project Gutenberg file 64576-0.txt (https://www.gutenberg.org/files/64576/64576-0.txt), lines 2490-2496 of the plain text. Verbatim, including the carrier's curly apostrophe in "man's" (rendered here as the same character). The preceding sentence ("and calm down: I do not call that anger, it is an emotion of the mind which is under the control of reason") was read and used for the boundary reading, not quoted.

4. Turner 2016 (Frontiers in Psychology, PMC5028385) fragments: "An example of LFT is 'it is unbearable to fail.'"; the association passage "low frustration tolerance (LFT) is positively associated with aggressive expression of anger (Martin and Dahlen, 2004), reduced anger control (Moller and Van der Merwe, 1997), poor social adjustment (Watson et al., 1998), addictive behaviors (Ko et al., 2008), anxiety, depression, procrastination, and dysfunctional affect"; and the Ellis and Knaus within-quote "regarding LFT as 'the main and the most direct cause of procrastination'". Verified against the opened PMC full text (https://pmc.ncbi.nlm.nih.gov/articles/PMC5028385/, fetched fresh this session). All three verbatim, including the citation parentheses as printed.

## Sources NOT opened (honest record)

- Breuer & Elson, Frustration-Aggression Theory (SSOAR PDF): bot-walled to curl this session (anansi challenge HTML returned, 24KB, not the PDF). The 1939 Dollard material on the wiki card rests on the earlier workers' verification; this dossier takes NO direct quotes from it. The map gloss for the Frustration–aggression hypothesis card paraphrases the card's own text (which carries its own verified carriers), and the Berkowitz quotes above come from the opened Europe PMC record.
- Klandermans, Frustration-aggression (archive.org mirror): archive.org timed out from this sandbox on two attempts (curl exit 28). No quotes taken from it.
- Schopenhauer SEP entry: not opened this session; the insatiability-of-craving card's SEP quote was NOT reused; the map gloss paraphrases the card without quotation marks.

## Checker

`python3 scripts/dossier_check.py docs/enrichment/dossiers/frustration.md` -> OK, 27 card links resolve, 14 headers, 8 external carriers (exit 0), run 2026-10-25.

## Open points for any revision pass

- A fuller treatment could add the Berkowitz cognitive-neoassociationistic model as its own map line if a wiki card exists or is minted (no card found this session).
- The frustration-vs-irritation boundary is left undefined honestly (no opened source defines it); a future writer with an opened source could tighten it.
