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
