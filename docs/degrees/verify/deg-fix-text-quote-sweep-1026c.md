# Quoted-text sweep against fetched sources (worker-pplx-degfixtext-1026c, 2026-10-26)

Method: every double-quoted span of five or more words in the module docs of the four priority degrees was normalised (case, punctuation, hyphens, quote style) and searched in the full text of the sources fetched in this session. Spans that are learner sample answers, model answers or deliberate wrong answers in the docs are not source quotations and were excluded by inspection. Quotations from video lectures have no fetched transcript here and were not re-checked.

| Degree | Source quotations checked | Result |
|---|---|---|
| Pragmatism (m1 to m5) | 19 quotations from Peirce, James and Dewey, including all four Lecture VI selections | All found verbatim in the Wikisource or Gutenberg text, including "can not" (Wikisource) vs "cannot" (Gutenberg) for the Lecture VI sentence |
| Pragmatism m1 | "distinguished professor of philosophy and humanities at Texas A&M University" | Found on the [Texas A&M profile](https://stories.tamu.edu/news/2007/10/26/john-j-mcdermott-a-true-philosopher-at-heart/); the page names The Correspondence of William James, as the doc says |
| Daoism m2 | Eno, Daodejing chapter 28 (89 of 89 words of the quoted block, then the final sentence) | Matches [Eno's PDF](https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/7031cb99-72c3-4e59-8ced-9d9783638945/content); the one apparent break is a stray "b>" in the PDF text layer |
| Buddhism b9 | Five quotations from [Thanissaro, The Five Aggregates](https://www.accesstoinsight.org/lib/study/khandha.html) | All found verbatim |
| Buddhism b5 | Two openings from the [Collected Teachings of Ajahn Chah](https://cdn.amaravati.org/wp-content/uploads/2014/09/The-Collected-Teachings-of-Ajahn-Chah-Single-Volume-Ajahn-Chah.pdf) ("These days people are going all over the place looking for merit"; "Now determine in your mind to listen respectfully to the Dhamma") | Both found; the PDF sets chapter openings in spaced capitals |
| Buddhism b2 | Harvey "Craving" gloss | Doc paraphrase did not match the source; replaced with the exact wording (see deg-fix-text-count-corrections-1026c.md) |

Not re-checked here: quotations from the lecture videos in the Daoism m1 and m4 docs (Komjathy, Ziporyn) and Pragmatism m3 (Misak), which depend on transcripts earlier lanes read.

## Numerical claims in psychdim module docs

Each figure below was read on the live source page or its downloaded full text in this session and matches the doc.

| Doc location | Claim | Source and result |
|---|---|---|
| m1 worked and faded examples | Intrinsic motivation predicting adherence: beta 0.216 [0.13, 0.30]; 0.099 [0.04, 0.20]; 0.080 [0.01, 0.15]; 577 participants completed all four surveys; adherence first asked in the follow-up surveys; association primarily between persons | [Woolley, Giurge and Fishbach](https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/): all figures and the quoted between-persons sentence match; the Method text puts motivation and expected duration in the first survey and the adherence measure in follow-ups |
| m6 | Study 4: 933 invited back, 763 after exclusions, 11.55 vs 9.18 products, d = 0.21 [0.07, 0.36], zero scanners excluded | Same article: all match |
| m7 | Dang: g = 0.38 [0.31, 0.45]; trim-and-fill 0.24 [0.16, 0.32] | [Dang 2018](https://pmc.ncbi.nlm.nih.gov/articles/PMC6013521/) Table 2: match; heterogeneity Q(141) = 358.87, I2 = 60.67 percent |
| m7 | Vohs and colleagues: 36 laboratories, 3,531 people, 1,068 excluded, d = 0.06 not significant, full sample d = 0.08 significant | [Brunel full text](https://bura.brunel.ac.uk/bitstream/2438/28246/1/FullText.pdf): "k = 36; N = 3531", "n = 1068", "d = 0.06", "d = 0.08": match |
| m7 | Singh and colleagues: 20 studies, 2,601 participants, 11 high risk of bias, four reported formation time, pooled pre/post standardised difference | [Singh et al. 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11641623/): match (SMD = 0.69, 95% CI 0.49 to 0.88) |

One wrinkle: the PMC identifier PMC7250393 is the Reed, Combs and Segerstrom article on self-regulation structure, which is correctly used for PD-M7-07; the Vohs et al. figures come from the Brunel PDF (PD-M7-10), as the doc links.

## Speaker credentials re-opened

| Doc claim | Source opened | Result |
|---|---|---|
| Kirchner: born Maryland 1949, Waseda, lay monk at Shofuku-ji under Yamada Mumon, ordained 1974, seven years at Kenchō-ji and Kennin-ji, Otani MA, Nanzan and IRIZ posts, resides at Tenryū-ji | [The Buddhist Society series page](https://www.thebuddhistsociety.org/page/the-buddhist-society-100th-anniversary-memorial-lecture-series-on-japanese-buddhism) | Matches. Other biographies say Baltimore, three years as lay monk and caretaker of the sub-temple Rinsen-ji; none conflicts. |
| Sumedho: American-born, bhikkhu 1967, nine years under Ajahn Chah at Wat Pah Pong, founded Amaravati 1984 | [Amaravati biography](https://amaravati.org/biographies/ajahn-sumedho/) | Matches ("established ... Amaravati Buddhist Monastery in Hertfordshire in 1984"). The page does not say he was ordained in Thailand or was first abbot; the doc says neither. |
| Ziporyn: Mircea Eliade Professor of Chinese Religion, Philosophy, and Comparative Thought; translator of the Zhuangzi | [UChicago Divinity directory](https://divinity.uchicago.edu/directory/brook-ziporyn) | Matches (Hackett, 2020 translation listed). |
| Komjathy: PhD Religious Studies, Boston University, 2005; ordination in the Huashan lineage | [Daoist Foundation about page](http://www.daoistfoundation.org/about) | Matches. The page text retrieved here does not itself contain the word Quanzhen. |
| Dreyfus: Jackson Professor of Religion, Williams College | [Williams catalog](https://catalog.williams.edu/faculty/) | Matches. |

## Link sweep (non-YouTube URLs in the four degrees' module docs)

101 distinct URLs were requested. 82 returned 200 and 5 returned 202 (bswa.org, a slow page that serves content). Four 404s came from trailing punctuation or a dollar sign dropped when the URLs were extracted from the Markdown; with the exact URL each returns 200 (Duke American Philosophy syllabus, UBC Self-Concept Clarity instrument, thebuddhistcentre.com loving-kindness text, Access to Insight khandha page). Ten returned 403 to a plain request (amaravati.org, plumvillage.org, two ACU researcher pages, the Northeastern profile page, three youtubetotranscript.com pages); these are bot-check blocks, and the Amaravati biography and book-landing pages were opened through the fetch tool in this session or earlier lanes. No dead links found.

## Addendum: Buddhism B1, B2 and B7 quoted source phrases (deg-fix-text)

Re-checked against freshly fetched pages: [AN 5.179 (Sujato)](https://suttacentral.net/an5.179/en/sujato) contains the phrase "These are the five precepts in which their actions are restrained" (the doc quotes it with a leading ellipsis, as the sentence continues earlier); [Khp 9 Metta Sutta (Sujato)](https://suttacentral.net/kp9/en/sujato) contains "With love for the whole world, unfold a boundless heart" (split across two verse lines on the page) and "they never return"; [SN 56.11 (Thanissaro)](https://www.accesstoinsight.org/tipitaka/sn/sn56/sn56.011.than.html) contains "is to be comprehended", "is to be abandoned", "is to be directly experienced" and "is to be developed", in that order, which matches the B2 quotation with ellipses. Not re-checked this pass: the B7 quotation "Buddhism is not only about rituals and meditation", which the doc attributes to the Batchelor video's watch-page description (earlier receipts cover it).

B7 follow-up: the Batchelor watch-page description (opened 2026-10-26) reads: "'Buddhism is not only about rituals and meditation,' says the well-known scholar and Buddhist teacher Stephen Batchelor. According to him, Buddhism is primarily about developing an ethical perspective on the world to overcome human problems. Learn from Batchelor how Buddhism can be a secular, pragmatic, and ethical basis from which to stimulate human flourishing." The phrase is a quotation of Batchelor inside the description, not the uploader's own wording, so the B7 lesson doc sentence was adjusted to say so. The lecture details (9 July 2018, Theater Hall C, Radboud University) also match.

Credentials, second batch: [Gil Fronsdal speaker page on AudioDharma](https://www.audiodharma.org/speakers/1) opened and its biography confirms the senior-teacher role and the practice and teaching start years quoted in the B7 source table. [Cheryl Misak, University of Toronto directory page](https://philosophy.utoronto.ca/directory/cheryl-misak/) opened: position University Professor; research interests list pragmatism and Ramsey; books include Cambridge Pragmatism (OUP 2016); DPhil Oxford and Fellow of the Royal Society of Canada also listed. The pragmatism M3 sentence matches.

Credentials, third batch (psychological dimensions presenters and authors). Each institutional page named in the module doc was opened on 2026-10-26 and checked for the claim the doc makes: [Hayes, University of Nevada, Reno](https://www.unr.edu/psychology/steven-hayes) (emeritus professor of psychology); [Sainani, Stanford profile](https://profiles.stanford.edu/kristin-sainani) (epidemiology and statistics); [Gross, Stanford profile](https://profiles.stanford.edu/james-gross) (emotion research, psychology); [Posner, University of Oregon directory](https://cas.uoregon.edu/directory/psychology/all/mposner) (attention); [Davidson, Center for Healthy Minds](https://centerhealthyminds.org/about/people/richard-j-davidson) (psychology and psychiatry); [McAdams, Northwestern](https://psychology.northwestern.edu/people/faculty/core/profiles/dan-mcadams.html) (narrative identity); [Little, Cambridge](https://www.psychol.cam.ac.uk/people/professor-brian-little) (personal projects); [Bloom, Yale open course page](https://oyc.yale.edu/introduction-psychology/psyc-110); [Barrett, Northeastern](https://cos.northeastern.edu/people/lisa-barrett/) (University Distinguished Professor, psychology department; the page blocks plain downloads, so it was read through a page reader). All match the wording in M1 to M5. Limit: this checks the role named in the doc, not every biographical detail on each page.
