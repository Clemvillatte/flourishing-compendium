# QC — happiness and decision-making re-verification (second pass)

Date: 2026-10-24
Worker: worker-pplx-dos6-1024d (dos6 band, between band items)
Scope: read-only re-verification of the published happiness and decision-making dossiers (originally covered under QC-dos7 and QC-dos9). No dossier file was edited. This pass was triggered by a review finding that the earlier session summaries had mislabeled band numbers, and it closes the last gaps in the library-wide verification record.

## happiness — 14 blockquotes

All 14 checked through the channels listed below (raw downloads where stated; rendered pages or author-hosted copies where the cited carrier is blocked or dead):

- Q1 Aristotle (NE I.7), Q2 Epicurus (Menoeceus), Q4 Mill (Autobiography ch. 5), Q5 Sidgwick (Methods, Bk I ch IV s.2): raw downloads (MIT classics, Gutenberg, UT Austin LAITS). Verbatim.
- Q3 Spinoza (Ethics III, Definition of Pleasure): the cited sacred-texts.com carrier is Cloudflare-blocked; verified verbatim against the Elwes translation as served at despinoza.nl (https://www.despinoza.nl/ethica/ethics/part_iii_on_the_1.shtml — Definition II of the Emotions; the source places quotation marks around "Pleasure") and independently quoted by an OUP article. (An earlier version of this record cited a despinoza.nl path that returns 404 — that URL was a reconstruction from a search result and never resolved; corrected here.)
- Q6 Mauss et al. 2011 ("Paradoxically, therefore, valuing happiness..."): verified verbatim against the PMC full-text rendering of the article (https://pmc.ncbi.nlm.nih.gov/articles/PMC3160511/); the sentence is the closing line of the abstract. The efetch channel was not re-run successfully for this quote in this pass.
- Q7 Lyubomirsky, Sheldon and Schkade 2005: the sentence is in the article body (not the abstract) of the Berkeley-hosted PDF, verbatim. The earlier note that the quote was unverifiable in the abstract was a channel artifact; body text contains it.
- Q8 Diener, Lucas and Scollon 2006, Q11 Dunn, Aknin and Norton 2008, Q12 Aknin et al. 2020 (registered replication report), Q14 Aknin, Barrington-Leigh et al. 2013: verified verbatim against official PubMed abstracts via the NCBI efetch API.
- Q9 Lucas 2007 (Current Directions page, psychologicalscience.org): verbatim on the downloaded page.
- Q10 Wilson and Gilbert 2005 (affective forecasting): the cited sagepub page is abstract-only; the abstract sentence verified verbatim via search-rendered copies of the abstract (Stanford Longevity Center page, sagepub rendering).
- Q13 Joshanloo (Eastern conceptualizations of happiness, Journal of Happiness Studies): the cited Springer page is abstract-only; the abstract sentence verified verbatim via the Springer rendering in search results.

## decision-making — 6 blockquotes

- Q1, Q2 Gigerenzer and Gaissmaier 2011: verbatim on the cited uni-konstanz page.
- Q3 Kahneman and Klein 2009: verbatim in the official PubMed abstract (efetch).
- Q4 Iyengar and Lepper 2000: verbatim in the article abstract as rendered by Ovid (https://www.ovid.com/journals/jpspy/abstract/00005205-200012000-00012~when-choice-is-demotivating-can-one-desire-too-much-of-a); the Columbia Business School page (https://business.columbia.edu/faculty/research/when-choice-demotivating-can-one-desire-too-much-good-thing) renders a variant of the abstract with "exotic jams" in place of "gourmet jams" and is not the exact-match channel. FINDING: the cited carrier link (faculty.washington.edu PDF) returns 404 — dead link; the article is verifiable elsewhere.
- Q5 Scheibehenne, Greifeneder and Todd 2010: the cited academic.oup.com page is Cloudflare-blocked; verified verbatim against the first author's own hosted PDF (https://scheibehenne.com/ScheibehenneGreifenederTodd2010.pdf), which contains the abstract sentence exactly.
- Q6 Aristotle (NE VII.2): raw download (MIT classics). Verbatim.

## Story loglines

All 12 happiness loglines and all 8 decision-making loglines were checked against their cards: a vocabulary check (distinctive content words of each logline present in the card body) over all 20, plus full card-body reads for the four the vocabulary check flagged (ST169, ST305, ST298, ST156) — all four are faithful; the flags were synonym paraphrase, not factual drift. The remaining 16 loglines were verified to the extent of the vocabulary check and the displayed logline text; no defects were found. ST377 (the-self, earlier pass) carries a minor chronology note recorded in QC-the-self.

## Findings for the supervisor

1. Dead carrier in decision-making: the Iyengar and Lepper PDF link (faculty.washington.edu) returns 404.
2. Blocked carriers: sacred-texts.com (Spinoza, Cloudflare) in happiness; academic.oup.com (Scheibehenne, Cloudflare) in decision-making — quotes verified through alternative channels.
3. The verified library-wide counts: 15 published dossiers, 158 story loglines, 137 blockquotes. These are counts of entries checked; per-entry verification channels are recorded per quote in the QC logs, and the logline checks are scoped as described above.
