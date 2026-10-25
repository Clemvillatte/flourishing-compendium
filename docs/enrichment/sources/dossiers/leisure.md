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

## QC round 5 (final, this session)

- Third-disagreement status downgraded honestly: the Tuch et al. carrier lists relaxation among the characteristics of leisure experience alongside the absorption attribute, so it does NOT establish that the Tinsley theory excludes relaxation. The Kleiber/Tinsley contrast is now presented as Kleiber's report, explicitly marked as something this page cannot settle. Substantiated disagreements: TWO (Aristotle vs Russell on distribution; Rojek's rejection of the Pieper-attributed dichotomy as reported by Regi). The Kleiber/Tinsley relaxation/action contrast is a reported contrast, unestablished at first hand.
- Grammar error from the round-4 replacement fixed ("leisure. and Regi reports").
- M031 gloss qualified: its own texts name rest and laughter as gifts; the counsel runs against heavy sleeping rather than against rest itself.
- Final checks: dossier_check exit 0 (23 card links, 13 headers, 21 carriers); quotes 16/16 machine-verified, zero documented exceptions; density 0; voice audit exit 0.
- Deliverable status: QC-blocked WIP, complete and internally consistent, held for supervisor review. Publication blockers: (1) artwork assignment (owner action), (2) the 3-5 substantiated-disagreement bar - currently 2 substantiated + 5 bounded/reported comparisons; either the supervisor rules this satisfies the bar (per the dos13/dos33 evidence-rule precedent) or further research into genuinely opposed positions is needed.

## QC round 6: third substantiated disagreement added

- New subsection "The line drawn for someone else": feminist leisure scholarship vs the classical work/leisure dichotomy. Both quoted passages are verbatim in two OPEN carriers by A. J. Veal: (1) the accepted manuscript "Human rights, leisure and leisure studies" (opus.lib.uts.edu.au, PDF fetched and read), which quotes Green, Hebron and Woodward 1990, p. ix; (2) "Everyday life and everyday leisure" (PMC10071223, fetched and read), which quotes Henderson et al. 1996, p. 99. Both quotes raw substring matches against the fetched text. The originals (GH&W 1990 book; Henderson et al. 1996 chapter) were NOT opened; the page attributes the quotes to them through the opened Veal carriers, same second-hand pattern as Regi reporting Rojek.
- The subsection opposes the feminist findings to BOTH classical poles: Aristotle's leisure presupposes others carrying duties; Russell universalized leisure without asking who still carries them; the dichotomy itself misdescribes interleaved lives.
- Checks after round 6: dossier_check exit 0 (23 card links, 14 headers, 23 carriers); quotes 18/18 machine-verified, zero documented exceptions; density 0; voice audit 0.
- Substantiated disagreements on the page: THREE (Aristotle vs Russell; Rojek vs Pieper via Regi; feminist scholarship vs the classical dichotomy via the two Veal carriers) + bounded/reported comparisons (Pieper/Veblen, recovery/Pieper, Zhuangzi/Aristotle, flow-study qualification, Kleiber/Tinsley reported). The 3-5 bar's lower bound is met subject to supervisor/owner ruling; artwork still pending.

## QC round 6 correction (per advisor, same session)

- The feminist section is now presented as an important QUALIFICATION, not an established third disagreement: the two passages establish constrained access and interleaving of work and leisure; they do not by themselves contradict Aristotle's scholē or Pieper's condition of the soul. The page says this explicitly.
- Removed as unsupported: "drawn by men whose meals appeared" (rhetorical flourish) and "Russell universalized the leisure without asking who still carries them" (a negative claim about Russell's text this page has not inspected in full).
- Attribution corrected: the two Veal carriers are two different publications (the 2015 accepted manuscript "Human rights, leisure and leisure studies"; the PMC survey article "Everyday life and everyday leisure", PMC10071223, publication-date metadata 2023 Apr 4, though the page also carries a World Leisure Journal 2020;62(2):89-113 citation - the ledger records both). The Henderson et al. passage is now described as a reported observation, not "the empirical finding behind the school".
- SUBSTANTIALIZED disagreements on the page: TWO (Aristotle vs Russell; Rojek vs Pieper via Regi). The feminist material, the Kleiber/Tinsley contrast, Pieper/Veblen, recovery/Pieper, Zhuangzi/Aristotle and the flow-study qualification are bounded qualifications and comparisons. The 3-5 bar is NOT claimed met; the ruling stays with the supervisor/owner.
- Checks: exit 0 everywhere (23 links, 14 headers, 23 carriers, quotes 18/18, density 0, voice 0).

## Focused Frye pass and targeted verification (same session)

- Frye's unpublished review of Pieper was opened and read at the full URL https://macblog.mcmaster.ca/fryeblog/2009/11/24/fryes-review-of-joseph-piepers-leisure-the-basis-of-culture/ (typescript eventually published in Northrop Frye on Literature and Society, CW 10, 325-29). Verdict: NO explicit opposition established. Frye is largely sympathetic (he accepts the scholē reading and the leisure-as-renunciation-of-work framing), and his critical points are completion-demands (the thesis "needs, to complete it, a theory of liberal work") and casuistry questions (how far leisure depends on a leisure class; whether a disinterested philosopher can owe leisure to a privileged class place) that duplicate the Veblen and distribution lines already on the page. Per the advisor protocol, the three evidence lines (Pieper asserts P; Frye denies P; same relevant sense of leisure) cannot be written, so no subsection was added and the third-disagreement count stays at two.
- Locator verification COMPLETED against carrier evidence (the earlier pass had only established repo-internal consistency, which is not source verification). The MIT Politics pages use "Part" markers: in the downloaded politics.7.seven.html the war/peace quote falls in Part XIV of Book VII (Politics VII.14 confirmed) and the husbandmen/leisure-necessary-for-virtue quote falls in Part IX (citation upgraded from "Politics VII" to "Politics VII.9"); in politics.8.eight.html both the medicines and "leisure of itself" quotes fall in Part III (Politics VIII.3 confirmed). The MIT NE Book X page carries no chapter markers, so X.6/X.7 were verified from an opened chapter-divided edition instead: the Standard Ebooks Book X text (Peters translation) places "Happiness, therefore, does not consist in amusement" and the relaxation-not-an-end discussion under heading VI and "happiness is thought to imply leisure; for we toil in order that we may have leisure" under heading VII; Loeb's Book X Chapter VI and Chapter VII pages show the same passages in the same chapters, and the Cambridge Aufderheide frontmatter lists "Found in Leisure (1177b4-15)" under X.7-8. The Zhuangzi locators were verified against the opened ETH METIS Legge PDF: the "saunter idly" quote falls within 'Enjoyment in Untroubled Ease' (Inner Chapter 1) and the "advantage of being useless" line falls at the end of 'Man in the World, Associated with other Men' (Inner Chapter 4), both immediately before the next chapter title.
- Advisor fixes applied: the unsupported chronology claim in the Sabbath integration ("carries the oldest version of the boundary") was removed and replaced with a description the Sabbath card supports ("carries the same boundary as a weekly day of rest"); the Play research gloss was aligned to the card's own description; a comma splice in the sabbath kernel was fixed.
- Flow-study claims on the page re-checked sentence by sentence against the opened 1989 abstract (78 workers, one week, relaxation and motivation as exceptions, more motivation in leisure than work): all supported, none overstated.
- Two card integrations added (Sabbath in the sabbath kernel; Play research in the Mead logline). Checks after: 25 card links, 14 headers, 24 carriers, quotes 19/19, density 0, voice 0.

## Final verification round (QC round 8, same session)

- Disagreement count corrected on the advisor's revision of its earlier provisional acceptance: the page carries ONE established substantiated disagreement (Aristotle vs Russell on who gets leisure) plus one secondary-reported critique (Rojek's rejection of the work/free-time dichotomy, as reported in Regi 2012) whose applicability to Pieper remains unresolved, because the Rojek paragraph itself records that his stated target is free time rather than Pieper's capacity of the soul. dos34.json and OWNER-BOARD updated to match; no new opposition research started.
- Quote coverage reconciled (count corrected after an advisor arithmetic check): the page has 24 double-quoted spans; the checker verifies the 19 spans of 25+ characters in paragraphs with external URLs, and the 5 excluded spans were manually verified against opened carriers: 4 short spans, "should be our medicines" (pol8.html), "loved for its own sake" (ne10.html), "renewed and alive again" (pieper.pdf) and "lives on affirmation" (pieper.pdf; the phrase had been missed in the first extraction pass because pdftotext renders it with an ffi ligature, "lives on aﬃrmation"), plus 1 span excluded because its paragraph carries no external URL, "is clearly neglected and subordinated" (Kleiber jlr.txt). All 24 verified.
- NE X.6/X.7 chapter evidence: the carrier actually fetched and opened for the chapter divisions is the Standard Ebooks edition at https://standardebooks.org/ebooks/aristotle/nicomachean-ethics/f-h-peters/text/book-10 (Peters translation, Book X with headings I-IX; the amusement-not-an-end discussion falls under VI, "happiness is thought to imply leisure; for we toil in order that we may have leisure" under VII). The Loeb Book X Chapter VI/VII pages and the Cambridge Aufderheide frontmatter were seen in search-result excerpts only, not fetched pages, and are recorded here as ancillary corroboration of that rank, not as opened carriers.
- Unsupported generalizations removed per the advisor's directive: "Most advice about time off" softened to "One way to treat time off"; the invented causal link "Aristotle could say this because" replaced with a plain statement of the Politics VII.9 fact plus a forward reference; "confusing them is how people spend years" replaced with the distinction itself; "The person who cannot rest usually has more than a scheduling problem" recast inside Pieper's account; "reading the same historical record" removed from the Veblen sentence.
- End state: unpublished, source-audited WIP with publication requirements unresolved (artwork assignment and the 3-5 substantiated-disagreement bar ruling, both flagged for supervisor/owner).

## QC round 9 (worker-pplx-dos34-1025k, 2026-10-25): Adorno and Stebbins added as comparisons, not disputes

- Two new carriers opened and read this session, both fetched with curl and extracted with pdftotext, all quoted fragments raw substring matches: (11) Adorno, "Free Time" (in The Culture Industry, 1991), full text at http://xenopraxis.net/readings/adorno_freetime.pdf; (12) Stebbins, LSA Newsletter No. 79, March 2008 (Leisure Reflections no. 17), at https://www.seriousleisure.net/uploads/8/3/3/8/8338986/reflections17.pdf.
- New subsection "The shadow of the working day": Adorno's diagnosis of free time. A REFERENT ERROR in the first draft was caught by advisor QC and removed: the essay's opening fragment "time which is neither free nor spare, which is occupied by work" describes WORKING time (the contrast class against which free time gets its name), not free time; the page no longer uses that fragment as a definition of free time. Retained quotes: "denoted the privilege of an unconstrained, comfortable life-style"; "Free time is shackled to its opposite"; "is nothing more than a shadowy continuation of labour"; "branded as a norm in the minds of people". The tourism/camping-organized-for-profit claim is paraphrased from the same passage as the branded-as-norm quote. RULING per advisor: the subsection is a qualification/comparison, NOT a substantiated disagreement; Adorno's target is free time, Pieper's leisure is a capacity of the soul, and the two accounts can coexist. The invented-endorsement line ("both writers would accept that test") is deleted.
- Upgraded subsection "Relaxation, or wholehearted action": Stebbins's serious-leisure position now carried first-hand (previously only Kleiber's report of Tinsley). Retained quotes, all raw-verified: the serious-leisure definition; "a third quality: significant personal effort"; the casual-leisure definition; "too fleeting, mundane, and commonplace for most people to find a distinctive identity there"; the paraphrase "casual leisure counts as well" matches the carrier's "And, to be sure, casual leisure counts as well". RULING per advisor: a taxonomy and a reward-source contrast, NOT a substantiated disagreement; Stebbins does not deny receptive relaxation's value, the identity quote concerns identity, and casual leisure "counts as well" in his own text. The "Kleiber's side would defend" assignment and the "deep rewards come instead" exclusivity are removed.
- Checking-apparatus language removed from the page per the readable-synthesis rule: "first-hand statement of its own", "direct and first-hand on both sides", "still reaches this page at second hand", "keeps the argument honest" all moved to this ledger.
- SUBSTANTIALIZED disagreements on the page: ONE (Aristotle vs Russell). The 3-5 bar is NOT met. Next research lead, per the advisor: explicit primary-text criticism of a named leisure theory, with A asserting P and B denying P in the same terms; candidate: the UTS accepted manuscript on the serious-leisure perspective (opus.lib.uts.edu.au, document 45585) to be checked for a direct rejection of Stebbins's category boundaries or claimed distinguishing rewards.
- Checks after round 9: dossier_check exit 0 (25 card links, 15 headers, 27 external carriers); dossier_quote_verify 28/28 machine-verified, zero documented exceptions; dossier_density 0 dense; dossier_voice_audit exit 0.

## QC round 10 (worker-pplx-dos34-1025k, 2026-10-25): Stebbins-Veal substantiated; Russell-Adorno kept as comparison

- Advisor QC (second call this session) rejected Russell-Adorno as a substantiated disagreement: Russell's conditional promise (redistribution plus education) and Adorno's diagnosis of existing free time can both be true. Subsection "Is free time actually free?" rewritten as an honest tension; removed "education does the rest", "denies the freedom of the freed hours", "seedbed of the good life", "this quarrel is staged by the page"; the "forty-five years later" interval dropped because the xenopraxis carrier prints no essay date and the page now says nothing about it.
- Advisor required a primary-text check that Stebbins himself asserts the categorical position. Carrier 13 opened and read: Stebbins, Leisure Reflections No. 60, "Serious Leisure and Wayward Youth", 28 July 2022, Leisure Studies Association, at https://www.seriousleisure.net/uploads/8/3/3/8/8338986/reflections60.pdf (fetched with curl, extracted with pdftotext). Raw-verified: "leisure activities can be classified as either serious or casual, with each form offering its participants sharply different experiences and generating sharply different states of mind". Stebbins asserts the categories in 2022, one year after Veal's critique; Veal denies the divide (continuum, untested uniqueness). The subsection "Distinct types or a continuum?" is a SUBSTANTIATED disagreement, both sides first-hand and opened.
- Corrections applied per advisor: heading renamed; the framework's three forms (serious, casual, project-based) stated so the serious-casual distinction is scoped honestly; "for most people" kept inside the identity quote; Veal's challenge stated as evidential, not as demonstrated absence of rewards; the "casual leisure counts as well" sentence (sourced to a biographical passage about Stebbins's own evenings, not a theoretical concession) replaced with a definition-grounded sentence.
- Verifier URL truncation concern checked: the NOT FOUND display truncates long URLs but the fetch is complete; the same Veal URL verified the other quotes in the same run (33/33, zero not found).
- SUBSTANTIALIZED disagreements after round 10: TWO (Aristotle vs Russell; Stebbins vs Veal). Bar lower bound of 3 still not met. Next lead for a third: Veal (2017), "The serious leisure perspective and the experience of leisure", Leisure Sciences 39(3), open at OPUS (https://opus.lib.uts.edu.au/bitstream/10453/45585/4/ABFBC890-A526-452D-9A94-02E3528ED6AE%20am.pdf), for a second Stebbins-Veal axis on whether the perspective is a theory or a descriptive typology.
- Checks after round 10: dossier_check exit 0 (25 card links, 16 headers, 32 external carriers); dossier_quote_verify 33/33 machine-verified, zero documented exceptions; dossier_density 0 dense; dossier_voice_audit exit 0.

## QC round 11 (worker-pplx-dos34-1025k, 2026-10-25): typology-vs-theory axis ruled evidential challenge; count stays TWO

- Advisor QC (third call this session) rejected the proposed third dispute ("A typology or a theory?"): an untested theory is still a theory (Veal's own phrasing keeps "the theory associated with the SLP"), and the 2021 macro-level quote changes scope relative to the 2008 "theoretic framework" assertion. No incompatible proposition on both sides. Subsection rewritten as an evidential challenge and retitled "What does the framework explain?"; removed per advisor: "The claim is explanatory...", "denies the framework that standing", "Four years on he sharpened" (scope change, not sharpening), "research conducted almost entirely" (Veal's "largely developed" preserved inside the quote), "the exchange is live" (no opened Stebbins response to this specific criticism), "Both positions are carried here by their own texts" (ledger only), "filing system", "not all cut from the same cloth", the repeated "sorting evenings" sentence.
- Carrier 14 opened and read this session: Veal, "The serious leisure perspective and the experience of leisure", Leisure Sciences 39(3), accepted manuscript at https://opus.lib.uts.edu.au/bitstream/10453/45585/4/ABFBC890-A526-452D-9A94-02E3528ED6AE%20am.pdf (fetched with curl, extracted with pdftotext, abstract and body read). Raw-verified: "evaluates the perspective as theory and as a typology"; "the theory associated with the SLP, concerning social worlds, identification and optimal leisure lifestyles, is found to be generally untested because it has been largely developed in relation to the serious leisure form only".
- Advisor's evidence check executed: the opened reflections17 carrier does contain a stronger Stebbins-side line, "the serious leisure perspective offers a classification and explanation of all leisure activity and experience, as these two are framed in the social-psychological, social, cultural, and historical contexts in which the activity and experience take place" (raw-verified). Per the advisor's ruling this still does not create incompatibility with Veal's "generally untested"/"questionable" formulations (untested explanation is still an explanation). Recorded here as the candidate Stebbins-side carrier for any future writer who finds a Veal sentence that positively denies explanatory adequacy rather than testing status.
- SUBSTANTIALIZED disagreements after round 11: TWO (Aristotle vs Russell; Stebbins vs Veal on the serious-casual divide). Bar lower bound of 3 NOT met; per the advisor, the obstacle is missing primary evidence for an incompatible third proposition, not wording, and constructing stronger opposition from the already-opened quotations is to be avoided.
- Checks after round 11: dossier_check exit 0 (25 card links, 17 headers, 35 external carriers); dossier_quote_verify 37/37 machine-verified, zero documented exceptions; dossier_density 0 dense; dossier_voice_audit exit 0.

## QC round 12 (worker-pplx-dos34-1025k, 2026-10-25): THIRD substantiated disagreement; bar lower bound met

- Advisor QC (fourth call this session) approved the replacement-proposal axis as a genuine substantiated disagreement: P = "Veal's proposed replacement of the SLP is justified". Veal proposes the replacement; Stebbins identifies the proposal and argues four problems undermine its supporting assessment. Distinguishable from the continuum dispute (classification question vs research-framework question).
- Carrier 15 opened and read this session: Stebbins, Leisure Reflections No. 47, "The Serious Leisure Perspective: Past, Present, and Future", 12 March 2018, at https://www.seriousleisure.net/uploads/8/3/3/8/8338986/leisure_reflections_no._47__the_serious_leisure_perspective__past_present_and_future___leisure_studie.pdf (fetched with curl, extracted with pdftotext, read). Raw-verified: "four problems seriously undermine his assessment"; "he bases much of his critique on a textbook"; the Veal-rejection passage and the 1,300-entry bibliography note read in full.
- Veal 2017 carrier 14 raw-verified for the proposal: "It is proposed that the SLP be replaced by a more flexible, open research approach, the Leisure Experience Perspective, which consolidates features of the SLP and other research traditions and a number of other theoretical perspectives" (abstract).
- Advisor corrections applied before push: field-wide overclaim deleted ("would no longer lead the field's research programme"); "Stebbins's answer is no" narrowed to "Stebbins rejects Veal's case for replacement"; bibliography count removed from the conclusion (historical fact, not evidence of standing); "the exchange has not closed" removed (opened 2021 critique supports later continuation, not an unresolved-status claim through 2026); "both sides are carried by their own texts" moved to this ledger; "the practical import is the quieter one" and the map metaphor cut as generic closing prose.
- SUBSTANTIALIZED disagreements after round 12: THREE (Aristotle vs Russell on whether the point can be universal; Stebbins vs Veal on the serious-casual divide; Veal vs Stebbins on replacing the framework). The 3-5 bar's lower bound is MET. Supervisor acceptance still required per standing practice; the theory-vs-testing subsection stays a labelled evidential challenge and is NOT counted.
- Checks after round 12: dossier_check exit 0 (25 card links, 18 headers, 39 external carriers); dossier_quote_verify 40/40 machine-verified, zero documented exceptions; dossier_density 0 dense; dossier_voice_audit exit 0.

## QC round 13 (worker-pplx-dos34-1025k, 2026-10-25): verification pass

- Full verification pass on this session's work: all six new carriers re-fetched fresh (Adorno xenopraxis PDF; Veal 2017 OPUS PDF; Veal 2021 OPUS PDF; Stebbins Reflections 60 PDF; Stebbins Reflections 47 PDF; Russell Harper's 1932 page) and every quoted fragment added this session re-checked as a raw substring match against the fresh extractions. All 17 new quotes PASS. No changes required.
- Checks re-run: dossier_check exit 0 (25 card links, 18 headers, 39 external carriers); dossier_quote_verify 40/40, zero not found; dossier_density 0 dense; dossier_voice_audit exit 0.
- OWNER-BOARD compliance fix: this worker's three earlier log lines exceeded the 20-word owner directive; shortened in place, content preserved in this ledger and the band file.
- State: THREE substantiated disagreements (Aristotle-Russell; Stebbins-Veal continuum; Veal-Stebbins replacement), bar lower bound met, supervisor acceptance requested, artwork assignment still pending owner.

## QC round 14 (worker-pplx-dos34-1025k, 2026-10-25): humanizer pass on this session's sections

- Whole-text reread of this session's sections against HUMANIZER-SKILL.md. Removed the owner-banned contrast scaffolds and decorative closers: "a tension rather than a settled dispute" and "names an obstacle... rather than a refutation" (rewritten affirmatively); "not only whether it is free of work, but whether it is free" (wise-sounding closer, rewritten); "a proposal, not just a verdict"; "not a demonstration that the rewards are absent" (rewritten as "the rewards themselves may still be there"); "not to the framework's usefulness as a description" (rewritten affirmatively); "rather than simply whether..." (rewritten as "a different question from..."); "both sides are carried here by their own texts" (ledger only). Russell's verbatim "not the prerogative... but a right" retained inside the quotation per source-fidelity rules.
- No content claims changed; the three substantiated disagreements and the labelled comparisons stand as documented in rounds 9-12.
- Checks after round 14: dossier_check exit 0 (25 card links, 18 headers, 39 external carriers); dossier_quote_verify 40/40; dossier_density 0 dense; dossier_voice_audit exit 0.

## Model-conformance additions, card checks (2026-10-25, worker-pplx-dos34-1025z2)

The leisure dossier was missing three elements DOSSIER-MODEL.md requires:
the first-person intro paragraphs, the Nearby terms section, and the
::Variation::/::Selection::/::Retention:: practice markers. All three
were added. Every card cited in the new text was opened and read before
the wording was settled, and the checks are recorded here:

- The completeness of rest: the card carries Aristotle NE X.6, "we need
  relaxation because we cannot work continuously. Relaxation, then, is
  not an end; for it is taken for the sake of activity." The Nearby terms
  line follows the card's own claim. An earlier draft's "name what
  recovers a system" was cut as not the card's wording.
- Play research: the card is Stuart Brown's Play (2009) and the 6,000
  play histories; the line follows the card's framing.
- Recovery experiences: the card is Sonnentag and Fritz 2007, four
  recovery experiences (psychological detachment, relaxation, mastery,
  control), "carried by experiences, not by activities"; the line follows
  the abstract quoted on the card.
- A112 Distinguish leisure from amusement: the card gives amusement a
  real but limited job, "a sort of relaxation... taken for the sake of
  activity", against "leisure of itself gives pleasure and happiness and
  enjoyment of life"; the line follows the card.
- Idleness: attributed to Pieper specifically, matching the dossier's own
  existing passage ("Idleness, on his account, is not too much rest but a
  broken relation to reality, an inability to receive it").
- Sabbath: the card is Heschel's "palace in time"; the line follows the
  card.
- Practice links: the unmeasured evening was re-linked from D039 (which
  is Daodejing 26 on stillness as the ruler of movement and does not
  carry the metrics-off exercise) to D084 Value the useless (Zhuangzi's
  useless tree, "saunter idly... in the enjoyment of untroubled ease"),
  which is the practice's own spirit. PP048 and PP073 were kept from the
  previous text and re-read. The three practices are now two sentences
  each, action then what to notice, and are called practices, not kernels.
- The intro's opening claim was rewritten to the writer's own question
  (no population claim), and "the hours are already there" was qualified
  against the dossier's own distributive debate.

dossier_check.py OK, dossier_density.py 0 dense, dossier_quote_verify.py
all existing quotes still resolve. Flagged for the supervisor: leisure's
disagreement section still carries 12 subsections against the model's
three-to-five genuine questions, a consolidation the current pass did
not attempt.

## Disagreement-section consolidation (2026-10-25, worker-pplx-dos34-1025z2)

The disagreement section carried 12 subsections against DOSSIER-MODEL.md's
three-to-five genuine questions. The 12 were consolidated into five, with
no evidence, quote or citation removed and no claim changed; the
subsections were regrouped under question headings and the prose moved
with them:

- Who gets to have leisure? (unchanged: Aristotle vs Russell)
- Is free time actually free? (Russell vs Adorno, plus the Rojek
  rejection of the work/free-time dichotomy, plus the feminist leisure
  research on constrained access and interleaved lives)
- Relaxation, or wholehearted action? (Kleiber vs Stebbins, plus the
  Sonnentag and Fritz recovery research and the Csikszentmihalyi and
  LeFevre flow-at-work finding)
- Contemplation, display, or uselessness? (Pieper vs Veblen, plus the
  Zhuangzi useless tree against Aristotle's contemplation)
- Distinct types or a continuum? (Stebbins vs Veal, now carrying the
  framework-explanation and framework-replacement exchanges in the same
  question)

The three substantiated disputes the QC rounds accepted (Aristotle vs
Russell; Stebbins vs Veal on the continuum; Veal vs Stebbins on
replacement) each keep their own evidence and each still sits under a
question heading. Checks after the consolidation: dossier_check.py OK,
dossier_density.py 0 dense, dossier_quote_verify.py 40 checked 0 not
found. The regrouping is structural; a reader-level pass over the new
transitions between merged subsections is still open.

## Advisor QC round 3 applied (2026-10-25, worker-pplx-dos34-1025z2)

The consolidation was corrected per advisor QC. The three substantiated
exchanges now sit in the disagreement section as their own question
headings, each closed with a first-person judgment: Who should have
access to leisure? (Aristotle vs Russell), Are serious and casual leisure
distinct types or a continuum? (Stebbins vs Veal), and Should the
serious-leisure perspective be replaced? (Veal vs Stebbins). The
complementary comparisons that answer different questions were relocated
out of the disagreement section and into the main body as ### subsections:
Is free time actually free? (Russell vs Adorno, Rojek, the feminist
leisure research) now sits under The time that is left over;
Contemplation, display, or uselessness? (Pieper vs Veblen, Zhuangzi vs
Aristotle) under Amusement is a medicine; Relaxation, or wholehearted
action? (Kleiber vs Stebbins, Sonnentag and Fritz, Csikszentmihalyi and
LeFevre) under Leisure is not idleness. No evidence, quote or citation was
removed in the move.

Evidence re-checks recorded: PP048 and PP073 were opened and read this
session before the links were allowed to stand; PP048 supports planned
recovery and the detachment item, PP073 supports rest built into the
system via the recovery paradox and detachment meta-analysis. D084 is now
framed in the practice as an experiment inspired by rather than supplied
by the card. The rest audit's second sentence now says what to notice.
The intro was rewritten in the first person, the population generalisation
was removed, the scholē preview was rewritten so as not to repeat The time
that is left over, and "Aristotle's finding" became "Aristotle's
argument". Checks: dossier_check.py OK, dossier_density.py 0 dense,
dossier_quote_verify.py 40 checked 0 not found.

Still open for a future pass, recorded here rather than claimed done: a
reader-level pass over the relocated subsections' fit inside their new
main-body sections, and the batch record note.

## Final verification pass (2026-10-25, worker-pplx-dos34-1025z2)

The reader-level check of the full file was completed. The opening
distinction was corrected: "the hours no one is paying for" became "the
time genuinely at a person's disposal", since the unpaid-hours phrasing
would have swept in unpaid care and household work, which is the very
complication the relocated feminist discussion identifies, and the
either/or waiting-room binary in the second paragraph was softened to
"much of the time they are something in between". The Stebbins-Veal
split was checked against the evidence: the continuum question keeps the
two-forms assertion, Veal's continuum and helping example, and the
uniqueness-claims evidence charge; the replacement question keeps the
2017 theory evaluation, the Leisure Experience Perspective proposal,
and Stebbins's four-problem rejection. Each first-person judgment is
present and follows its evidence. Checks: dossier_check.py OK,
dossier_density.py 0 dense, dossier_quote_verify.py 40 checked 0 not
found. Batch record updated earlier this pass.
