# Evidence ledger: leisure dossier (dos34)

Worker: worker-pplx-dos34-1025j. Session 2026-10-25 ~04:46-05:45Z UTC.

## Carriers opened this session

| # | Carrier | Opened how | Status |
|---|---------|-----------|--------|
| 1 | Aristotle, Nicomachean Ethics X (Ross), MIT Classics — https://classics.mit.edu/Aristotle/nicomachaen.10.x.html | curl, raw HTML read | quotes verified by raw substring match |
| 2 | Aristotle, Politics VII (Jowett), MIT Classics — https://classics.mit.edu/Aristotle/politics.7.seven.html | curl, raw HTML read | quotes verified by raw substring match |
| 3 | Aristotle, Politics VIII (Jowett), MIT Classics — https://classics.mit.edu/Aristotle/politics.8.eight.html | curl, raw HTML read | quotes verified by raw substring match |
| 4 | Josef Pieper, Leisure: The Basis of Culture (PDF, iwcinsb.org) — https://iwcinsb.org/studygroups/2024%20readings/Leisure.pdf | curl (browser UA; plain curl 406 Mod-Security), pdftotext | quotes verified by raw substring match |
| 5 | Bertrand Russell, In Praise of Idleness, Harper's archive 1932 — https://harpers.org/archive/1932/10/in-praise-of-idleness/ | curl, raw HTML read | both quoted passages ("morality of slaves"; "poor should have leisure") verified by normalized substring match |
| 6 | Bertrand Russell, In Praise of Idleness, 1935 text extract at The Idler — https://www.idler.co.uk/article/book-of-the-week-in-praise-of-idleness/ | opened via fetch tool (LLM extraction); raw curl returns a JS stub, automated verifier cannot read it | opened and read; carries the distributive passage used as paraphrase (no quotation marks on the page); documented exception for machine verification |
| 7 | Thorstein Veblen, The Theory of the Leisure Class, ch. 2 (Gutenberg) — https://www.gutenberg.org/files/833/833-h/833-h.htm | curl, raw HTML read | quotes verified by raw substring match |
| 8 | Zhuangzi, Legge translation (ETH Zurich PDF) — https://metis.ethz.ch/wp-content/uploads/2023/03/Zhuangzi_EnglishLegge.pdf | curl, pdftotext | quotes verified by raw substring match |
| 9 | Sonnentag & Fritz 2007, REQ, PubMed record — https://pubmed.ncbi.nlm.nih.gov/17638488/ | PubMed page via Europe PMC REST core record (fresh fetch, full abstract read) | the four-experience content is paraphrased on the page (no quotation marks); abstract read in full via the publisher database record |
| 10 | Sonnentag & Fritz 2007 abstract via Europe PMC REST — https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:17638488&resultType=core&format=json | curl, JSON read | confirms the paraphrase wording ("four recovery experiences can be differentiated: psychological detachment from work, relaxation, mastery, and control") |

## Quotes on the page and their verification

1. NE X.7 "And happiness is thought to depend on leisure; for we are busy that we may have leisure, and make war that we may live in peace." — carrier 1, raw match.
2. NE X.6 "amusement is a sort of relaxation, and we need relaxation because we cannot work continuously. Relaxation, then, is not an end; for it is taken for the sake of activity." — carrier 1, raw match.
3. Politics VIII.3 "should be our medicines" / "leisure of itself gives pleasure and happiness and enjoyment of life, which are experienced, not by the busy man, but by those who have leisure" — carrier 3, raw match.
4. Politics VII.14 "there must be war for the sake of peace, business for the sake of leisure, things useful and necessary for the sake of things honorable" — carrier 2, raw match.
5. Politics VII "since leisure is necessary both for the development of virtue and the performance of political duties" — carrier 2, raw match (husbandmen passage).
6. Pieper "Leisure is a form of that stillness that is the necessary preparation for accepting reality; only the person who is still can hear, and whoever is not still, cannot hear." — carrier 4, raw match.
7. Pieper "is not the same as the absence of activity; it is not the same thing as quiet, or even as an inner quiet" / "lives on affirmation" — carrier 4, raw match.
8. Russell "The morality of work is the morality of slaves, and the modern world has no need of slavery." — carrier 5, raw match (1932 Harper's original).
9. Russell "The idea that the poor should have leisure has always been shocking to the rich." — carrier 5, raw match.
10. Veblen "requirement of abstention from productive work" / "labour comes to be associated in men's habits of thought with weakness and subjection to a master" — carrier 7, raw match.
11. Zhuangzi "There you might saunter idly by its side, or in the enjoyment of untroubled ease sleep beneath it." — carrier 8, raw match (Part 1, ailantus tree).
12. Zhuangzi "All men know the advantage of being useful, but no one knows the advantage of being useless." — carrier 8, raw match (Part 4 closing line).

## Paraphrase-only content (no quotation marks used)

- Russell's distributive argument (labours valuable because leisure is good; spread the good justly) — from carrier 6, Idler extract of the 1935 Allen & Unwin text. The 1935 book text differs slightly from the 1932 Harper's original ("modern technic" vs "modern technique"), so the distributive passage is paraphrased and the two machine-verifiable quotes are pinned to the 1932 original.
- Sonnentag & Fritz four recovery experiences — paraphrased from the abstract (carriers 9/10).
- Story loglines compressed from the story cards ST358, ST053, ST337, ST215, ST113 (opened and read this session).

## Limitations and QC disposition

- dossier_check.py: exit 0 (24 card links resolve, 10 headers, 14 external carriers).
- dossier_quote_verify.py: 13 checked, 0 not found. Documented exception: the Idler carrier (6) is JS-walled to automated fetch; it backs only paraphrase, not quoted matter, on the page.
- dossier_density.py: 18 paragraphs, 0.9 card links per paragraph, 0 dense.
- Publishing: BLOCKED on artwork. The registry entry for leisure has no art assigned (owner action pending; same blocker as creation/creativity/procrastination). The dossier is complete and passes all checks; flip and rebuild when the owner assigns art.
- Story cards were opened and read before writing loglines. Card-link targets all resolve.

## Advisor QC round 1 (applied this session)

- Recast the Pieper/Veblen, recovery/Pieper and Zhuangzi/Aristotle subsections as bounded comparisons, not demonstrated disputes; the only section now presented as a genuine disagreement is the Aristotle/Russell distribution subsection. The 3-5 substantiated-disagreement bar is NOT claimed as met; flagged for supervisor/owner ruling.
- Deleted unsupported empirical claims (time-affluence "as much as money", detachment "returns to work in better shape", "predicts well-being where rumination does not", "measured by how fast it returns you to the machine"). The recovery paragraph now claims only what the opened 2007 abstract supports (four distinguishable experiences; moderate relations with well-being).
- Added Pieper's own "renewed and alive again" passage (raw-verified in carrier 4) to bound the recovery/Pieper contrast honestly.
- Retitled the disagreement section "Where the traditions differ"; split the Zhuangzi paragraph (prose-wall fix).
- Correction to the earlier commit message: it said "5 substantiated disagreements"; the page has four subsections, of which one is a genuine disagreement and three are bounded comparisons.

## QC round 1 addendum: the paradox-of-work subsection

- Added subsection "Is free time where the good hours are?" to strengthen the disagreement bar with a genuinely opposed position: Csikszentmihalyi and LeFevere 1989 (JPSP, PMID 2724069), experience sampling of 78 workers. Quoted fragment "the great majority of flow experiences are reported when working, not when in leisure" is verbatim from the publisher database record, freshly fetched via the Europe PMC REST core record (https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:2724069&resultType=core&format=json) and read in full. The PubMed page (reader-facing carrier) is JS-walled to the automated verifier, same class as the Idler carrier: documented exception, second of two in this ledger. The motivation finding ("respondents are more motivated in leisure than in work") is paraphrased, not quoted.

## QC round 2 (applied this session)

- Paradox-of-work subsection rewritten to the source-bounded form: the flow finding is now paraphrased (no quotation marks), the study is described as one week of 78 workers, it explicitly does not claim to test Aristotle's scholē, and the overclaims the advisor flagged are deleted (classical texts "assume", "best hours elsewhere", flow "likelier inside structure", unshaped leisure "tends toward the passive").
- Recovery sentence re-attributed to Sonnentag and Fritz's narrower stated aim (assessing unwinding and recuperation), no longer generalized to "contemporary psychology defines".
- Trainability claim softened: the cards treat the capacity to stop as buildable; Pieper calls it a basic power of the human soul; no longer claimed as proof of trainability.
- Veblen paragraph: the unsupported generalization about consumer societies deleted; the question is now about a given weekend.
- Card-link glosses checked against the card files (M031 mesoamerican work-ethic principle; Y112 Yoga-Vedanta; P120 pragmatist autotelic principle); the page uses them as positions marked by their titles, which the card bodies support.
- Timestamp correction: the OWNER-BOARD line reading "05:36Z" was an estimate made before the external clock cross-check; the session measured timeline is T0 04:46:27Z (epoch 1792903587, cross-checked against an external HTTP Date header, 04:57:57Z matching) and the board line was actually written around 04:52Z. The line's content is accurate; the timestamp was not. No other ledger timestamps are estimated.
- Correction of the QC round 1 addendum: the paradox-of-work subsection is now a bounded empirical qualification, not a substantiated divergence. The page carries ONE substantiated disagreement (Aristotle vs Russell on the distribution of leisure) and FOUR bounded comparisons (Pieper/Veblen, recovery-science/Pieper, Zhuangzi/Aristotle, flow-study/classical-assumption). The 3-5 substantiated-disagreement bar is NOT claimed met.
- Spelling: Csikszentmihalyi and LeFevre (the round-1 addendum misspelled it "LeFevere").
- The 1989 abstract was fetched as a publisher database record (Europe PMC REST, JSON); it is the abstract, not the full article; the ledger records this limit. The page's paraphrase stays within the abstract's statements.
- Quote verification is now a clean 13/13 with no documented exceptions (the PubMed carrier now backs paraphrase only).

## QC round 3: two substantiated disagreements added

- New subsection "Free time that is not free": Rojek's rejection of the Pieper-attributed work/free-time dichotomy, carried in Regi's open Anthropology Today 2012 essay (https://www.mursi.org/documents-and-texts/published-articles/regi-tamas/tourism-leisure-and-work/at_download/file). Carrier fetched with curl, PDF read; both quoted fragments are raw substring matches against the extracted text. The quote is Regi reporting Rojek; the page says so.
- New subsection "Relaxation, or wholehearted action": Kleiber, "The Neglect of Relaxation", Journal of Leisure Research 2000, 32(1), 82-86 (https://www.nrpa.org/globalassets/journals/jlr/2000/volume-32/jlr-volume-32-number-1-pp-82-86.pdf). Carrier fetched with curl, PDF read; both quoted fragments raw substring matches. The section presents the Tinsley & Tinsley action-essence view as reported by Kleiber, and Kleiber's own dissent siding with Pieper; the Tinsley original was not opened and is cited second-hand through the opened carrier.
- Page now carries THREE substantiated disagreements (Aristotle vs Russell on distribution; Rojek vs Pieper on the work/leisure dichotomy; action-essence vs relaxation-essence within leisure studies) plus FOUR bounded comparisons. The 3-5 substantiated-disagreement bar's lower bound is now met, subject to supervisor/owner ruling; flag stands.
- Checks after the additions: dossier_check exit 0 (23 card links, 13 headers, 19 carriers); dossier_quote_verify 16/16 machine-verified, zero documented exceptions; dossier_density 0; dossier_voice_audit exit 0.

## QC round 4 (applied this session)

- Tinsley & Tinsley 1986 was NOT opened (paywalled literature); the page now states the contrast as Kleiber's report and marks the Tinsley position "cited at second hand through Kleiber's essay".
- Rojek subsection de-fictionalized: the imagined Pieperian reply is gone; the page now describes Regi's report and bounds what the rejection lands on.
- "The Greeks could say this" replaced with Aristotle's proposed citizen class (the husbandmen exclusion already quoted below).
- Russell paraphrase: "and for nothing else" deleted (strengthened beyond the opened passage).
- Recovery section made internally consistent: the questionnaire is a research programme about repair, not a rival definition of leisure; the "defined by its relation to work" framing is gone.
- "loved for its own sake" given its own NE X.7 citation (raw-verified in the MIT carrier this session); previously it sat in a paragraph cited only to Zhuangzi.
- Card bodies read in full before use as positions: M031 (Nahua counsel, card itself flags interpretation limits), Y112 (Gita 4.18 definition of the wise worker), D113 (Zhuangzi 6), D039 (Daodejing 26); the page's claims about these cards stay within what their bodies state. "each side can point at the other's wreckage" deleted.
- Checks after round 4: dossier_check exit 0 (23 card links, 13 headers, 20 carriers); quotes 16/16; density 0; voice audit 0.
- Status: QC-blocked draft remains. Publication blockers: (1) artwork assignment (owner action), (2) the 3-5 substantiated-disagreement ruling - the page carries 3 substantiated (Aristotle/Russell, Rojek-vs-Pieper-dichotomy as reported by Regi, Kleiber-vs-Tinsley-action contrast) + 4 bounded comparisons, all honestly labelled.

## QC round 4 addendum: Tinsley verification

- The Tinsley & Tinsley 1986 original (Leisure Sciences 8, 1-45) is paywalled; not opened. However, a second open carrier was fetched and read: Tuch, van Schaik and Hornbaek, "Leisure and Work, Good and Bad: The Role of Activity Domain and Valence in Modeling User Experience" (https://research.tees.ac.uk/ws/files/4260488/620108.pdf), which summarizes the Tinsley model and reports that its cognitive attributes include total absorption or concentration in the activity. This confirms the substance of Kleiber's attribution (leisure-as-absorbed-action rather than relaxation) at second hand. The page now cites both second-hand carriers and does not claim to quote Tinsley directly.
- Checks remain green: 23 card links, 13 headers, 21 carriers, quotes 16/16, density 0, voice audit 0.
