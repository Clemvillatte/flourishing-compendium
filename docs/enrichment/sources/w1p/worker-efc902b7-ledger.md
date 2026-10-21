# w1p worker ledger — worker-efc902b7 (session efc902b7)

Band w1p (concepts P–Q), worker-w1p-efc902b7. Fast-track bar per PROTOCOL.md §1a.

## Items enriched (evidence)

1. **Personality Systems Framework** — source: [Mayer UNH Psych Faculty Publications PDF](https://scholars.unh.edu/cgi/viewcontent.cgi?article=1324&context=psych_facpub). Done, pushed.
2. **Persuasive Arguments Theory** — source: [Sage 10.1177/0146167219833389](https://journals.sagepub.com/doi/10.1177/0146167219833389). Done, pushed.
3. **Phenomenological seeing** — source: [PMC8114444](https://pmc.ncbi.nlm.nih.gov/articles/PMC8114444/). Done, pushed.
4. **Piaget's theory of cognitive development** — source: [PMC9832071](https://pmc.ncbi.nlm.nih.gov/articles/PMC9832071/). Done, pushed.
5. **Pleasure-Arousal-Dominance Model** — source: [PMC7101003](https://pmc.ncbi.nlm.nih.gov/articles/PMC7101003/). Done, pushed.
   — Milestone QC on items 1–5: repairs applied (commit 1e56662aa).
6. **Positioning theory** — source: [Harré, Positioning Theory and Moral Structure of Close Encounters, PASS Acta 11 (2006) PDF](https://www.pass.va/content/dam/casinapioiv/pass/pdf-volumi/acta/acta_11/acta11-harre.pdf); quotes verified at pp. 297 and 306 of the PDF (local /tmp/harre.txt, line numbers 27–31 and 342–346). Done, pushed.
7. **Premack principle** — source: [Jacobs, Morford, King & Hayes, Behavior Analysis in Practice 2017, PMC5459771](https://pmc.ncbi.nlm.nih.gov/articles/PMC5459771/); one-line statement of the 1959 probability-differential hypothesis verified verbatim. Done, pushed.
8. **Presence** — source: [SEP Martin Buber (Zank & Braiterman)](https://plato.stanford.edu/entries/buber/); Gegenwart/in-between passages verified verbatim. Principle titles resolved via ls content/principles/ (AT024, B170). Done, pushed.
9. **Privacy regulation theory** — source: [Teutsch, Masur & Trepte, Social Media + Society 2018](https://journals.sagepub.com/doi/10.1177/2056305118767134); Altman "selective control of access to the self" (p. 18) passage verified verbatim. Done, pushed.
10. **Problem-solving therapy** — source: [Krause et al., BMC Psychiatry 2021, PMC8383463](https://pmc.ncbi.nlm.nih.gov/articles/PMC8383463/); social-problem-solving definition and four core skills verified verbatim. Done, pushed.
11. **Process ecology** — source: [Renzhong Cui, Scriptura 122 (2023:1), pp. 1–11](https://journals.co.za/doi/pdf/10.7833/122-1-2130) (journal name, author, volume verified from PDF masthead after advisor flagged wrong journal name in first draft). Quotes verified verbatim. Namespace note: title not listed in concept-namespace-audit.md, so it passed the gate; the name "Process ecology" is the repo's own label for Cobb's position (page says so explicitly). Done, pushed.
12. **Protection motivation theory** — source: [Zhu et al., IJERPH 2021, PMC8345550](https://pmc.ncbi.nlm.nih.gov/articles/PMC8345550/); two-process statement and appraisal descriptions (incl. response barriers) verified verbatim. Done, pushed.
13. **Psychological empowerment theory** — source: [Fadda et al., JPHR 2017, PMC5641652](https://pmc.ncbi.nlm.nih.gov/articles/PMC5641652/); Spreitzer four-cognition definition and active-orientation gloss verified verbatim. Done, pushed.
14. **Purity of the mirror of the heart** — source: [al-Ghazali, Marvels of the Heart, Ihya' Book XXI, Skellie trans., archive.org text](https://archive.org/stream/imamalghazalienglish/Al-ghazalisMarvelsOfTheHeart_djvu.txt); smoke-and-rust and obedience-and-polish passages verified verbatim (body text; the "Man's heart, as a mirror" sentence was dropped after advisor flagged it as possibly the translator's summary). Done, pushed.

## QC rounds

- Milestone QC 1 (w1p items 1–5): advisor repairs applied, commit 1e56662aa.
- Milestone QC 2 (w1p items 6–14, run after item 14): advisor flagged repairs on all nine pages. Repairs applied in this session:
  - Positioning theory: locators added (pp. 297, 306); unsupported storyline-change and classification glosses removed; related lines made plain.
  - Premack principle: freedom→probability language; "no stimulus" and clinical-application inferences removed; related lines made plain.
  - Presence: "quality of the mutual case" replaced with the mutual/pre-dialogic distinction; "met, not used" removed.
  - Privacy regulation theory: person-situation-culture movement removed from prose; related lines made plain.
  - Problem-solving therapy: "rather than disputing thoughts" removed; seed-line meta-narration removed; italics dropped from quote; related lines made plain.
  - Process ecology: journal corrected to Scriptura 122 (2023:1) after masthead verification; sweeping inference removed; related lines made plain.
  - Protection motivation theory: "Fear alone does little" removed; response barriers added (verified verbatim).
  - Psychological empowerment theory: "not a grant from above" and "Gretchen" removed; related lines made plain.
  - Purity of the mirror of the heart: "Man's heart..." intro-summary quote replaced with verified body-text passages; "not wished for" and cross-tradition glosses removed.
  - Count correction: w1p done = 14 items (5 + 9), confirmed from batches/w1p.json.
  - Baton clock-in save pushed alongside this repair commit.

## Flags for supervisor

- None new in w1p. (Earlier w1k flags stand: coined-title items in batches/w1k.json flagged dict; near-duplicate "The insatiability of craving" also flagged there.)
