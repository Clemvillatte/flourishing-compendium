# Advisor QC: 29 rewritten principles (p1b/p1d), 2026-10-20

This was a read-only audit. I fetched every cited URL myself (or downloaded it and stripped the tags), then string-matched each verbatim quote. All 29 pages pass `enrich_validate.py`: 0 ERR, and only the two standard warnings (no Sources URL, no Related concepts).

Tally: 10 PASS, 19 FIX, 0 FAIL. No invented quotes turned up. The FIX items are factual mis-descriptions of sources, locator slips, staging prose, and audit notes left in public prose.

Problem that applies to many pages (style). The body text contains audit language: "was not opened", "has not been checked", "I did not find", "I have not opened". The protocol says audit notes belong in the ledger or `notes`, not in published prose. The first-person versions are the worst (PP023, PP029, P160). Rewrite them as neutral scope statements, e.g. "Hayes, Strosahl and Wilson's book is cited by the principle; this page quotes the review instead." If not, move them to the ledger.

---

## D003 (wu wei): FIX (style only)
- All four Legge quotes (DDJ 2, 37, 48, 63) match Gutenberg 216 word for word. DDJ 63 is a fair unquoted paraphrase. The Barnett & Vasiu parallel is correct: [Frontiers](https://www.frontiersin.org/journals/behavioral-neuroscience/articles/10.3389/fnbeh.2025.1690499/full) has "Nine studies met the inclusion criteria", "partial downregulation of the DMN", small samples, and tasks "relatively short and artificial". Note that the article itself also says "All eight studies" in one place.
- Humanizer §1 (not X but Y) appears three times:
  - "The Daodejing's formula is not inaction but non-forcing."
  - "this is a skill, not a passivity."
  - Plain words: "Wu wei doesn't mean doing nothing. It means doing things without shoving — no gripping, straining, or coercing." This adds a dash and a triad on top.
- The body is one long paragraph with four quotes in it, which breaks the skimmability rule.
- The For example is not labelled as imagined.
- Suggested fixes:
  - Opening: "The Daodejing's word for the right kind of action is wu wei, and chapter 37 gives it in one line: ..."
  - Split the body at the ch. 48 quote, using a `### A subtractive discipline` heading.
  - Plain words: "Wu wei means doing things without shoving: no gripping or straining. When you notice yourself pushing hard, ask whether the push is doing the work or getting in its way."
  - Example: "Imagine a teacher who sets a problem and lets the students wrestle with it instead of directing every step."

## D156 (flexible): FIX
- The DDJ 76.1–3 quotes match. The body correctly says that applying the passage to opinions and plans is "the compendium's reading".
- Problem: the Plain words then credits Laozi with that extension: "Laozi's bet is that the same test works on the rest of what you carry around: a plan, an opinion, a way of doing things." Legge 76 covers only bodies, plants, armies and trees ([Gutenberg Legge](https://www.gutenberg.org/files/216/216-h/216-h.htm)).
- Replace with: "Laozi applies the test to bodies, plants and armies. The compendium applies it to the rest of what you carry around: a plan, an opinion, a way of doing things."
- "stiffness means the thing has stopped taking in new information" is an unsourced gloss. Soften it to "often means".

## D090 (death as transformation): FIX
- All Zhuangzi quotes match the [ETH Legge PDF](https://metis.ethz.ch/wp-content/uploads/2023/03/Zhuangzi_EnglishLegge.pdf): chapters 6, 2, 18 (including "Life is a borrowed thing", spoken by Mr One-foot) and 22. DDJ 50.3 matches.
- Locator: "(Metis/ETH Zurich edition, p. 27)". The ch. 6 "True men of old" passage is on printed page 28 (PDF page 29). Change it to "p. 28".
- The For example retells the body's "Zhuangzi at the basin" section, so it repeats the body (criterion 4).
- Replace with something like: "Imagine someone whose grandmother has died at ninety. They cry at the funeral, and a month later they find they can talk about her life as a whole, from birth to its end, without the talk feeling like a betrayal. On Zhuangzi's account, that second state is understanding what was appointed, not a lack of love."

## B119 (chariot): PASS
- Every Rhys Davids fragment matches [SuttaCentral mil3.1.1](https://suttacentral.net/mil3.1.1/en/tw_rhysdavids): the En 43–44 page markers fit the locator "pp. 43-44", and the Vajirā verse matches.
- The SN 5.10 and SN 22.59 Thanissaro quotes match accesstoinsight.
- The correction that SN 22.59 contains no chariot is right.

## B022 (right intention): PASS
- The SN 45.8 quote matches.
- Trivial: the source has a capital "Right view, right resolve, ..." where the page lowercases it inside the quote marks.
- The Sheldon & Elliot 1999 summary matches the [PubMed abstract](https://pubmed.ncbi.nlm.nih.gov/10101878/).

## D059 (difficult while easy): PASS
- DDJ 63.2, 63.3, 64.1 and 64.2 all match.
- Gollwitzer's "further the attainment of goals" matches ([abstract](https://www.prospectivepsych.org/publications/implementation-intentions-strong-effects-simple-plans)).
- Optional: "Early action here is not casual action." is a mild §1 tell.

## D114 (buzheng): FIX
- The quotes from chapters 22.2, 66.1, 66.3, 8.1 and 8.3 match.
- Error 1: "Three chapters of the Daodejing use the same line about the sage and rivals." Only chapters 22 and 66 have the striving line. Chapter 8 says "no one finds fault with him", which is about blame, not rivals ([Legge](https://www.gutenberg.org/files/216/216-h/216-h.htm)).
  - Replace with: "Chapters 22 and 66 use almost the same line about the sage and rivals, and chapter 8 gives the image behind it."
- Error 2: "The title's 'win by not entering races whose prize is ruin' is the compendium's reading." That phrase is not in the title ("Don't contend (buzheng)"). It came from the old body, and now survives only in the reflections.
  - Replace with: "The compendium's gloss, 'win by not entering races whose prize is ruin', goes beyond the text."
- "The chapters themselves describe a ruler": only ch. 66 names the sage-ruler. Chapter 22 says "the sage" and chapter 8 talks about water.
  - Replace with: "The chapters describe a sage, and in ch. 66 a ruler, not a worker or an entrepreneur."
- The Ryckman 1994 figures (n=160; narcissism, Type E, sensation seeking) match the [abstract](https://pubmed.ncbi.nlm.nih.gov/8138889/).

## P019 (pragmatic maxim): PASS
- All Peirce quotes match [peirce.org p119](https://www.peirce.org/writings/p119.html). The maxim is in §II and the hardness example in §III, so the locators are correct.

## P010 (fallibilism): FIX (minor)
- The CP 1.171 quote leaves out a word. The page has "Fallibilism is the doctrine...", but the opened source has "For fallibilism is the doctrine that our knowledge is never absolute but always swims, as it were, in a continuum of uncertainty and of indeterminacy" ([Nubiola, quoting CP 1.171](https://www.unav.es/users/Articulo13.html)).
  - Replace with: "[F]allibilism is the doctrine..." or quote "For fallibilism is the doctrine ...".
- This is a secondary-source quote, so note it as "CP 1.171, as quoted in Nubiola".
- All "Fixation of Belief" fragments match [p107](https://www.peirce.org/writings/p107.html). The Leary 2017 summary matches the [Duke abstract](https://dukespace.lib.duke.edu/items/1c8163dc-6138-4f57-a841-b8b2c36a4617).
- Optional: "Peirce's cure is not private resolve." is a §1 tell.

## P067 (attend): PASS
- The James quotes match [psychclassics ch. XI](https://psychclassics.yorku.ca/James/Principles/prin11.htm): p. 402, with "[p. 404]" falling inside the attention definition, so "pp. 402-404" is right.
- The Valadez et al. review summary matches ([PMC9756271](https://pmc.ncbi.nlm.nih.gov/articles/PMC9756271/)).
- Optional: the example repeats the Plain words ("same street ... different days" and then "Same carriage, different journeys"), and the last line is a §2 closer. Drop "Same carriage, different journeys."

## A068 (friends in misfortune): FIX
- The NE VIII.1 and IX.11 Ross quotes all match MIT Classics.
- Error: "Aristotle does not make adversity the test of friendship, and the text is more interesting than that." That is true of the NE, but in the Eudemian Ethics he says time shows the friend, "and bad fortune rather than good fortune", and that "misfortune shows those who are not really friends, but friends only for some accidental utility" (EE VII.2, 1238a; [Wikisource](https://en.wikisource.org/wiki/Eudemian_Ethics/Book_7)). The second clause is also a staging tell.
  - Replace with: "In the Nicomachean Ethics, Aristotle does not make adversity the test of friendship (the Eudemian Ethics, VII.2, comes closer: 'misfortune shows those who are not really friends'). Two NE passages matter."
- The Plain words opening, "Aristotle's own claim is milder than 'bad times show who your friends are'", has the same problem.
  - Replace with: "In the Nicomachean Ethics his claim is milder than 'bad times show who your friends are'."
- The example mostly restates the IX.11 quotes. Give it one concrete action, e.g. "you turn up with dinner on Thursday without texting first".

## E105 (amor fati): FIX
- The GS §276, GS §277 fragments and EH "Clever" §10 all match Gutenberg 52881 and 52190.
- Error: "Nietzsche uses the phrase twice, once as a private resolution and once as a formula." The same opened Ecce Homo also has "Amor fati is the core of my nature" ("The Case of Wagner" §4; [Gutenberg 52190](https://www.gutenberg.org/cache/epub/52190/pg52190.txt)). The worker's own ledger notes this too.
  - Replace with: "Two of the places Nietzsche uses the phrase show its range: a private resolution and a formula."
- "So amor fati is not the optimistic view that all things turn out for the best" treats the §277 link as Nietzsche's own argument. §277 does not mention amor fati. Label it as a reading.
  - Replace with: "Read next to §276, this suggests amor fati is not ..."

## E103 (self-overcoming): FIX
- All quotes match Common's Zarathustra ([Gutenberg 1998](https://www.gutenberg.org/cache/epub/1998/pg1998.txt)). The BGE §259 and GS §289 descriptions are correct.
- Error: "Zarathustra says he heard three things from life itself. The second and third are about obedience and command." In the source he learned the three things by following "the living thing". All three concern obedience and command:
  1. "All living things are obeying things."
  2. "Whatever cannot obey itself, is commanded."
  3. "commanding is more difficult than obeying."

  "Life herself" speaks only later, with "I am that WHICH MUST EVER SURPASS ITSELF".
  - Replace with: "Zarathustra reports three things he heard while following living things, all about obedience and command. The second and third:"
- Optional: "Life here is not a self-improvement project." is a §1 tell.

## PP010 (intrinsic/extrinsic): PASS
- The Kasser & Ryan quotes match the [abstract](https://journals.sagepub.com/doi/10.1177/0146167296223006). The Niemiec 2009 findings match the [ACU abstract](https://acuresearchbank.acu.edu.au/items/56434984-2e2a-4bf2-b375-50dfe4868d17). "Separable outcome" matches [ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0092656608001360).
- Outside the scope of this rewrite but needs a supervisor: the empty parallels "-  (Kasser et al., 2014)" and "-  (Epictetus, Enchiridion)".

## PP023 (meaning vs happiness): FIX (style)
- The abstract bullets match ([T&F](https://www.tandfonline.com/doi/abs/10.1080/17439760.2013.830764)). "Some 400 responses" matches [Stanford GSB](https://www.gsb.stanford.edu/insights/frank-flynn-what-makes-happy-vs-meaningful-life); the paper itself gives 397 adults. The "Meaningful involvements ..." quote matches the [author PDF](https://carlsonschool.umn.edu/sites/carlsonschool.umn.edu/files/2026-01/vohs-et-al-2013-happy-life-meaningful-life.pdf).
- Problem: "(... King and Hicks, 2021, is cited by the principle but I have not opened it.)" is first-person audit text.
  - Replace with: "(Baumeister et al., 2013.)" and move the King and Hicks note to the ledger.

## PP029 (responsiveness): FIX
- The Reis & Clark abstract, Ruan et al. 2019, the Reis/Lemay/Finkenauer review and the Reis & Le abstract all match.
- First-person audit text: "I did not find either in the pages I opened."
  - Replace with: "'Attachment security' and 'advice is not responsiveness' are the compendium's wording."
- "Validation is not agreement." and Plain words "Agreeing with them is not required." are unsourced. The review defines validation as "appreciating and valuing" a point of view and never mentions agreement ([Utrecht PDF](https://dspace.library.uu.nl/server/api/core/bitstreams/0a433297-590c-402c-a6be-dfdb7b204c2c/content)).
  - Replace with: "In the Reis and Shaver intimacy model, validation means appreciating and valuing a partner's point of view, which is different from perceiving it."
- Name the "Utrecht review": it is Reis, Lemay and Finkenauer, "Toward understanding understanding".
- Example: "A quick fix tends to skip that step" is unsourced. Use "can skip that step".

## E008 (temporality): FIX (minor)
- All SEP quotes match the [Husserl entry](https://plato.stanford.edu/entries/husserl/) and the [self-consciousness entry](https://plato.stanford.edu/entries/self-consciousness-phenomenological/).
- Overreach: "Husserl says this is how a tune, a sentence or a conversation can be experienced as a whole." The SEP text covers melodies and tones only.
  - Replace with: "Husserl's example is a tune; the same structure is what lets a sentence hang together."
- The opener "The lectures themselves have not been checked." is audit text.
  - Replace with: "This page quotes the SEP's account of Husserl's lectures on internal time-consciousness."

## P160 (observing self): FIX (minor)
- All four PMC quotes match:
  - [PMC3635495](https://pmc.ncbi.nlm.nih.gov/articles/PMC3635495/), by Hayes, Levin, Plumb-Vilardaga, Villatte and Pistorello in Behavior Therapy
  - [PMC8320414](https://pmc.ncbi.nlm.nih.gov/articles/PMC8320414/), Kelly & Kelly 2021
  - [PMC12292914](https://pmc.ncbi.nlm.nih.gov/articles/PMC12292914/), Zettle et al. 2025, quoting Harris 2009 p. 175
  - [PMC5769281](https://pmc.ncbi.nlm.nih.gov/articles/PMC5769281/), Zhang et al. 2018
- The ledger says the authors were not visible, but they are. Name them: "In Hayes and colleagues' progress review of ACT ...".
- "goes further than the sources I opened" is first-person.
  - Replace with: "goes further than these sources."
- "Neither book was opened." is audit text. Move it to the ledger.
- "The thought is the same. Your relation to it is different." is a §2 closer. Merge it: "The thought stays; the person's relation to it changes."
- The example is borrowed from the paper rather than original. It is honestly attributed, so this is acceptable.

## CO003 (cognitive load): FIX
- The Cowan, Sweller and Arnsten quotes match ([PubMed](https://pubmed.ncbi.nlm.nih.gov/11515286/), [Wiley](https://onlinelibrary.wiley.com/doi/10.1207/s15516709cog1202_4), [PubMed](https://pubmed.ncbi.nlm.nih.gov/19455173/)).
- Misattribution: "Other researchers dispute how to explain the limit, so the number is better read as a range of three to five than as a fixed constant." The "three to five" figure is in Cowan's own abstract: "Others have since suggested that there is a more precise capacity limit, but that it is only three to five chunks". No opened source is cited for the "dispute".
  - Replace with: "Cowan notes that others had put the limit at three to five chunks, and his data support that smaller limit."
- Overclaim in Plain words: "in ways that have nothing to do with being a weaker thinker". The example has the same problem: "the limit was in the task setup, not in you". The opened sources do not address individual differences, and working-memory capacity does vary between people.
  - Plain words: "Under load, anyone's thinking gets worse."
  - Example: "the setup, not only you, may be the problem."
- Optional: "Three lines of work, each from a different angle," is a staging opener.

## P118 (flow): PASS
- The Fong et al. 2015 abstract text matches. T&F blocked me, but the abstract is identical at [Institute of Coaching](https://instituteofcoaching.org/resources/challenge%E2%80%93skill-balance-and-antecedents-flow-meta-analytic-investigation-0). The Isham et al. 2025 quote matches ([T&F](https://www.tandfonline.com/doi/full/10.1080/23311908.2025.2538737)).
- Notes: the opener "His book has not been checked for this page" is audit text. The Plain words line "Too easy and attention drifts. Too hard and anxiety takes over." comes from Csikszentmihalyi's model, which the page says it did not check. Consider "In Csikszentmihalyi's model, too easy brings boredom and too hard brings anxiety."

## AF083 (culture and affect): FIX
- The Tsai 2007 abstract, the Tsai et al. 2006 summary (in the JCCP paper), Butler/Lee/Gross 2007 as described in [PMC6628463](https://pmc.ncbi.nlm.nih.gov/articles/PMC6628463/), and Roberts 2008 as described in [PMC6379289](https://pmc.ncbi.nlm.nih.gov/articles/PMC6379289/) all match.
- Overreach in Plain words: "Holding back anger may damage a relationship in one setting and protect it in another". The cited description covers emotion suppression and "negativity and hostility" in Asian American versus European American participants. It does not mention anger or relationships.
  - Replace with: "Holding back a feeling went with more hostility in one group and less in another, though not every study agrees."
- Audit text: "The Wierzbicka (1999), Butler and Gross (2009) and Soto et al. (2011) citations on this page have not been checked. The Butler study described above is the 2007 paper with Lee." Move both sentences to the ledger.

## R011 (harmony): PASS
- Every Wiredu fragment matches the [polylog text](https://them.polylog.org/2/fwk-en.htm). "It suffices that" is correctly left outside the quote marks.
- Analects 13.23 in Legge and the Chinese match [ctext](https://ctext.org/analects/zi-lu), passage 23.
- Optional: the opener "both are specific about what harmony is not" is mild staging.

## P059 (individuation): FIX (minor)
- The Simondon quotes match the [Parrhesia 7 PDF](http://www.parrhesiajournal.org/parrhesia07/parrhesia07_simondon1.pdf). It is translated by Gregory Flanders under the title "The Position of the Problem of Ontogenesis"; add that to the citation.
- Fragment issue: the source has "An individuation is relative" with a capital A, and the page writes "an individuation is relative". Use "[a]n" or quote the full sentence.
- "...of a system of individuation." is a truncation: the source continues ", it is part of a system state." Add an ellipsis.
- "the authors' reading of Simondon": the [UEL paper](https://repository.uel.ac.uk/download/9d318435991b428f036433e17864264157edec5db47e901505ca79b6b45d2f28/254482/Simondon,%20emotion,%20and%20individuation%20-%20The%20tensions%20of%20psychological%20life%20in%20digital%20worlds%20-%20Pre%20Proof.pdf) has a single author, Ian M. Tucker.
  - Replace with: "Ian Tucker reads the point for psychology this way: ..."

## E064 (Frankl): FIX
- The three-ways quote, "last of the human freedoms", "one possibility of high moral behavior" and "If there is a meaning in life at all..." all match the [archive.org PDF](https://dn800306.us.archive.org/0/items/mans-search-for-meaning_/Man's%20Search%20For%20Meaning.pdf).
- Error 1: "That is a summary, not a quote from the book." Frankl does say it, in Part Two of the same opened PDF: "I only insist that meaning is possible even in spite of suffering - provided, certainly, that the suffering is unavoidable. If it were avoidable, however, the meaningful thing to do would be to remove its cause, be it psychological, biological or political. To suffer unnecessarily is masochistic rather than heroic."
  - Replace the Web Highlights sentence with that quote, and drop the secondary source.
- Error 2: "In the logotherapy section he argues from the other direction". The "one possibility of high moral behavior" and "meaning in suffering" passages are in Part One (camp experiences, about PDF page 90, printed page 88), not in Part Two.
  - Replace with: "Later in the camp account he argues from the other direction: ..."

## CO014 (fallible thinking): FIX
- The Apology 21d Jowett quote matches [MIT Classics](https://classics.mit.edu/Plato/apology.html). The Moore & Healy and Moore 2023 quotes match.
- Error: "One experiment reduced the bias by 'forcing participants to consider all possible outcomes of an event'". The [abstract](https://pubmed.ncbi.nlm.nih.gov/28405257/) says "In three experiments, overprecision was significantly reduced ...".
  - Replace with: "Three experiments reduced the bias by ..."
  - In the example, change "the experiment above" to "the experiments above".
- "The oldest statement of the idea" is unsupported. Use "A classic statement".
- "the Deffler and Grossmann citations on this page were not opened" is audit text. Move it to the ledger.

## CO063 (metacognition): FIX
- The Flavell 1979 quotes all match the [UGA PDF](https://jwilson.coe.uga.edu/EMAT7050/Students/Wilson/Flavell%20(1979).pdf). The Fleming & Dolan line matches [ORA](https://ora.ox.ac.uk/objects/uuid:ae68a055-a477-4355-b444-915b47ba6938).
- Error: "Flavell introduced the term in 1979". He used "metacognition" earlier, in the title of "Metacognitive Aspects of Problem Solving" (1976) ([ERIC](https://files.eric.ed.gov/fulltext/EJ1077263.pdf)).
  - Replace with: "Flavell's 1979 paper gave the idea its first detailed structure."
- Locator: the "feckless obsessive" and "far too little ..." quotes are cited as "(same chapter)", meaning the OUP handbook. They are Flavell's own words in the 1979 paper.
  - Replace with: "(Flavell, 1979)".
- "the sources opened here" is audit text. Use "these sources".

## CO077 (introspection): PASS
- The Nisbett & Wilson abstract matches (CSULB PDF), and so do Johansson 2005 ([PubMed](https://pubmed.ncbi.nlm.nih.gov/16210542/)) and the 26% face-study figure ([SciAm](https://www.scientificamerican.com/article/when-free-choice-is-an-illusion/)).
- Pronin, Berger & Molouki is JPSP 2007. The page should say "(2007)" and drop "(the page's 2004 Pronin citation was not opened)".

## CO082 (cognitive maintenance): FIX (minor)
- NE II.1, Cepeda 2006 (839 assessments, 317 experiments), Lövdén 2010 and the PMC7416041 summary all match.
- The Plain words opener, "Thinking skills are kept up by use and by occasional stretch.", is stated as fact, but the body says the sources do not show that skills degrade without use.
  - Replace with: "Aristotle says skills come from doing, and the plasticity model says change comes when a task asks more than you can currently do."
- "Three sources, from different periods, bear on the idea that thinking is something you keep doing, not something you finish learning." has a §1 tell and a triad.
  - Replace with: "Three sources bear on keeping thinking in use."
- Audit text: "...were not opened". The psychology-parallels line "skills decay without use" is inherited, but it contradicts the body.

## E001 (epoché): PASS
- All SEP quotes match the Zahavi 2025 entry, and the Hua 15/366 quote is correctly attributed to Husserl.
- Minor: the Hua 15/366 quote ends with "judgment." where the source continues "; rather, it is the path ...". Use "judgment ...".
- The audit opener "...have not been checked" should become "This page quotes Dan Zahavi's SEP account of Husserl."

---

## Top 10 fixes (ranked)
1. **E064**: the page says avoidable suffering is "a summary, not a quote from the book", but Frankl says it himself ("To suffer unnecessarily is masochistic rather than heroic"). It also puts a Part One passage in "the logotherapy section".
2. **D114**: "Three chapters ... use the same line": only chapters 22 and 66 do. "The title's 'win by not entering races...'": the phrase is not in the title.
3. **A068**: "Aristotle does not make adversity the test of friendship". The Eudemian Ethics VII.2 does ("misfortune shows those who are not really friends"). Scope the claim to the NE, in the body and in Plain words.
4. **CO014**: "One experiment": the abstract says three experiments.
5. **CO063**: "Flavell introduced the term in 1979": he used it in 1976. The "feckless obsessive" quotes are Flavell 1979, not the "same chapter".
6. **E105**: "Nietzsche uses the phrase twice": Ecce Homo also has "Amor fati is the core of my nature".
7. **CO003**: "three to five" is credited to an unsourced "dispute" when it is in Cowan's own abstract. "Nothing to do with being a weaker thinker" overclaims.
8. **E103**: "heard three things from life itself" and "second and third are about obedience and command" misdescribe the passage.
9. **AF083**: "Holding back anger may damage a relationship" is not in the cited finding, which is about suppression and hostility. Also remove the audit sentences.
10. **D156 / D090 / PP029 / P059**: D156's Plain words credits Laozi with the compendium's extension. D090 is p. 28 (not 27) and its example repeats the body. PP029's "Validation is not agreement" is unsourced and the page has first-person audit text. P059's commentary has a single author (Tucker), and one quote has a capitalisation slip and a missing ellipsis.

Cross-cutting: remove all first-person and audit notes from public prose, starting with PP023, PP029, P160, AF083, E008, E001, P118 and CO082. Also fix the §1 "not X but Y" tells in D003.
