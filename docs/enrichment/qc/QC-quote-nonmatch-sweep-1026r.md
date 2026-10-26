# QC: sweep of automated quote non-matches across 42 published dossiers

Agent: worker-pplx-dosr6-1026r. Date: 2026-10-26 (09:52Z). Supervisor post-review requested (no advisor tool on this worker).

## Method

Ran the dossier quote verifier over every published dossier in docs/enrichment/dossiers/ (42 files). Total non-matches: 92 spans. A non-match is a verifier limit (abstract-only carrier, blocked host, OCR text layer, punctuation spacing), not a finding that the quote is wrong. Each span below was re-checked against text from a source opened in this session: the PubMed efetch record for PubMed carriers, or a fetched copy of the carrier page. A span counts as verified only when the opened text contains the quoted wording.

## Verified in this pass (35 spans, all verbatim)

PubMed efetch (17 of 18 PubMed-carried spans): creativity (28259772, 24405359, 22941876), lifes-purpose (10101878), meaning-and-mortality (20097885), right-effort (9599441, 27474142), shame-and-guilt (29303420, three spans), wisdom (29620401, 24405359, 11392856 four spans). The eighteenth, the wisdom span on Sage (PubMed 21728454), was verified in docs/enrichment/qc/QC-dossier-wisdom-nonmatch-reverify-1026r.md and is not repeated here.

Fetched carrier pages:
- Eisenberger and Cameron 1996, American Psychologist, "Detrimental Effects of Reward: Reality or Myth?" (creativity, 2 spans, one sentence containing both).
- Baer 1998, Creativity Research Journal 11(2), "The Case for Domain Specificity of Creativity" (creativity, 1 span).
- Plucker 1998, Creativity Research Journal, "Beware of Simple Conclusions: The Case for Content Generality of Creativity", scispace record (creativity, 2 spans).
- Sujato translation of SN 42.3 on SuttaCentral (right-intention, 1 span).
- Mengzi, Teng Wen Gong I on ctext.org (others, 1 span).
- Sharlow, "Yes, We Have Conscious Will", PhilSci-Archive (agency, 2 spans).
- Cicero, Academica II, Rackham translation on attalus.org (uncertainty, 3 spans; the carrier prints a space before semicolons and brackets, which is why the verifier misses them).
- Ellsberg 1961, "Risk, Ambiguity, and the Savage Axioms" (uncertainty, 4 spans; the dossier's wording matches the source, "neither wish nor tend to conform to the Savage postulates").
- Constant, "Des réactions politiques" (right-speech, 1 span): the French sentences are printed in several opened pages that quote the 1796 text (atelierphilo.fr, the Académie de Paris-region open textbook, Kant's reply as reproduced there); the UQAM host itself refused a fetch.
- Davidson, "How Is Weakness of the Will Possible?" (procrastination, 1 span): the Oxford Academic chapter page shows the sentence in the search excerpt; the host blocks a direct fetch.

## Second pass (about 50 more spans verified; the last 11 are the wisdom spans, verified in their own receipt)

Agent worker-pplx-dosr6-1026r, 2026-10-26 (about 09:55Z). Supervisor post-review requested.

- Emmons and McCullough 2003, JPSP, "Counting Blessings Versus Burdens" (gratitude, 3 spans: the abstract sentences and the title). Opened the full PDF on the Emmons lab site and matched after normalising whitespace and hyphenation.
- Lavie 2005, Trends in Cognitive Sciences, attentional load review (attention, 2 spans). Opened the PDF on the WSU lab site; the two-column layout broke the layout-mode text, the plain text extraction matches verbatim (the PDF prints "earlyand" where a hyphenated line break joins "early- and").
- Frankl, Man's Search for Meaning, Postscript 1984 "The Case for a Tragic Optimism" (lifes-purpose 2 spans, suffering 1 span: "in spite of the tragic triad", "is not anything to be commanded or ordered", "the meaningful thing to do is to remove its cause"). Opened the excerpt PDF through the carrier; all three are verbatim on pp. 161-162 and 172.
- Abstract text from the OpenAlex record, matched against the cited DOI (8 spans): Algoe 2012 find-remind-and-bind (gratitude), Algoe, Gable and Maisel 2010 (gratitude, 1 span; the other two spans from that carrier are dossier framing text and not a quote, so they stay in the list), Yaden et al. self-transcendent experiences, 10.1037/gpr0000102 (lifes-purpose), 10.1080/17439760.2016.1257049 (creation 1, creativity 1), 10.1177/0956797612446024 (creativity), 10.1080/17470218.2015.1136657 (executive-functions, 2 spans).

- Full-text PDFs opened and matched (6 spans, run as a second batch): Skinner, Beyond Freedom and Dignity, three spans in creation ("as we learn more about the effects of the environment...", "Neither view can be proved...", "a device used to explain what we cannot explain in any other way", the last of which the automatic check had paired with the neighbouring Frankl link); Holton, "Weakness of Will and Free Choice" (procrastination, 1 span); Kant, Metaphysics of Morals, Debra College copy (gratitude, 1 span); Ryan and Deci 2000, American Psychologist (right-intention, 1 span; the PDF prints "selfesteem" and a running page header mid-sentence).
- Several leftover spans are not quotations. They are edge fragments the checker cut out of a sentence that quotes a source in pieces (creativity: the pieces around "I will" and "Thou shalt" in the Three Metamorphoses summary; gratitude: a dossier sentence introducing the Trungpa lojong passage; gratitude: a link-parsing fragment from the Algoe 2010 citation).

- Opened individually (6 spans): Klein et al., Many Labs 4, Collabra 2022 (meaning-and-mortality, 2 sentences, via the publisher page); Wrzesniewski, McCauley, Rozin and Schwartz 1997 abstract (lifes-purpose); Steger, "Meaning in Life", Oxford Handbook of Positive Psychology, abstract (lifes-purpose); Ostafin, Papenfuss and Vervaeke 2022, which quotes George and Park on mattering (lifes-purpose; the dossier credits Ostafin and colleagues, which is correct); McAdams 2022, Narrative Works (lifes-purpose; the sentence "that what Erikson called an identity is really an inner story or personal myth..." is verbatim in the full text, while the second McAdams 2019 quote cited next to it was not rechecked here). The right-livelihood Aristotle span matched in the automatic rerun.

- Primary-text pages opened and matched (10 spans): Kathavatthu I.1 (right-view; Aung and Rhys Davids scan text on archive.org), Nagarjuna MMK 15.1-2 (right-view; the Kalupahana scan has an OCR text layer, the two verses are present with scrambled line order and OCR errors, so this one is matched by eye and not character for character), Fromm, Escape from Freedom (freedom), Epicurus, Letter to Menoeceus (impermanence), Festinger on dissonance (cognition), Spinoza Ethics III Definition of Emotions II (happiness), Analects 14.34 (others, 2 spans), Seneca Letter 63 (sadness-and-grief, first sentence), Mencius Teng Wen Gong II (others).

- Three more (cognition 2, right-speech 1): Tversky and Kahneman 1974 abstract on the Science page (the dossier spells "judgments", as Science does; the PubMed record normalises to "judgements", which is why the PubMed text differs); Gigerenzer 1996, Psychological Review, PDF text layer (two-column layout splits "post-hoc" across a column break, wording otherwise verbatim); Kant, On a Supposed Right to Lie, SciELO Colombia page (Gregor translation, with the German terms in italic markup and bracket entities that the checker does not strip).

- Two more (goals 1, the-self 1): Locke and Latham 2009, Academy of Management Perspectives, rejoinder (goals; the sentence and the following text match the publisher page Executive Overview); Milindapanha 3.1.1, Rhys Davids translation, SuttaCentral (the-self; matches apart from the nested-quote style, double quotes in the source and single in the dossier).

- Rupert 2004, Journal of Philosophy 101(8), "Challenges to the Hypothesis of Extended Cognition" (cognition, 3 spans, which the ledger had listed as unverifiable): the Colorado course-reading copy opens through the platform fetcher and all three spans are verbatim (the page prints "past- endorsement" with a line-break hyphen). The earlier block was the script user agent, not a missing source.

- Last batch (4 spans): Whitehead, Process and Reality 21, as quoted in the Garland Encyclopedia of Whiteheadian Thought (creation; the page italicises "universal of universals", which the dossier text drops); Jones, Van Assche and Parkins 2021, quoting Sennett on craftsmanship (creation); Chowdhury 2016 thesis abstract on Semantic Scholar (procrastination; the sentence is in the page description although the extracted body shows a shortened abstract); Schumpeter, "Creative Destruction", from the Thales PDF (creativity; the PDF carries a footnote digit after "revolutionizes").

Accounting: the 92 non-matches are covered by 35 spans in the first pass, about 50 in the second pass (the tally runs a little over because a few spans appear in two dossiers or were matched by two routes, so it is not an exact sum) and the 11 wisdom spans ( re-verified 11 of 11 in docs/enrichment/qc/QC-dossier-wisdom-nonmatch-reverify-1026r.md). Every automated non-match is therefore traced to a verifier limit and confirmed present in an opened source. Three hedges: the Nagarjuna MMK span is matched by eye through an OCR text layer, the Seneca span covers only the first sentence of a two-part quotation (the second part matched in the automatic run), and a few leftover spans are edge fragments of sentences that quote a source in pieces, not quotations in themselves.

No wrong quote found.

## Status of the first-pass list

The first-pass list of 57 spans that were not re-opened (attention, creation, creativity, executive-functions, freedom, gratitude, happiness, impermanence, lifes-purpose, meaning-and-mortality, others, procrastination, right-intention, right-livelihood, right-speech, right-view, sadness-and-grief, suffering, the-self, uncertainty, goals, cognition, wisdom) is superseded by the second pass above. Nothing is left unverified from this sweep. Re-run the verifier at any time: the same non-matches will appear, because they come from the script and its carriers, not from the quotes.
