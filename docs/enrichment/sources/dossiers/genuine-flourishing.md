# Dossier ledger — Genuine Flourishing (worker-pplx-dos1-1024c, 2026-10-24)

Verification record for docs/enrichment/dossiers/genuine-flourishing.md,
revision 1.

## Method

- Map construction: the dos1 manifest's title sweep (16 concept files)
  plus curated stragglers from a full-text sweep (rg -il flourish over
  content/concepts, ~200 hits screened by reading the opening claim). The
  body sweep is broad because "flourish" is used loosely across the wiki;
  only cards whose opening claim treats flourishing-as-a-life were added:
  The capabilities approach, Happiness as activity, Happiness as by-product,
  The paradox of hedonism, Virtue, Arete, Practical wisdom, Positive
  psychology, Complete mental health model, Broaden-and-build, The meaning
  of life, Self-determination (used in the Eudaimonic motivation line via
  its own card), The polis, Aristotelian friendship, Pursue becoming, not
  arrival, The sufficient good. Off-theme matches (Attention, Flow, Boredom,
  and the rest of the ~200) were left to their own themes.
- Every per-entry description is a compressed restatement of the linked
  entry's own opening claim, taken from its content/ file. No description
  carries a quotation.
- Every quoted fragment was verified word-for-word this session against a
  carrier opened for it (full fetched text retrieved and compared).
- Card links: 44 links, 37 unique targets, all resolved by
  scripts/dossier_check.py (exit 0; 11 headers, 8 external carriers).

## Carriers opened and compared (URLs)

1. https://classics.mit.edu/Aristotle/nicomachaen.1.i.html — Aristotle,
   Nicomachean Ethics Book I, Ross translation. Passages compared
   word-for-word: the function-argument conclusion ("human good turns out
   to be activity of soul in accordance with virtue...") and the complete-
   life addition ("But we must add 'in a complete life.' For one swallow
   does not make a summer...").
2. https://www.gutenberg.org/files/8438/8438-h/8438-h.htm — Aristotle,
   Nicomachean Ethics, Chase translation. Passage compared word-for-word:
   the external-goods passage of I.8 ("Still it is quite plain that it
   does require the addition of external goods..."). The dossier quote
   uses an ellipsis to mark the join to the closing sentence ("the
   addition of prosperity of this kind does seem necessary to complete the
   idea of Happiness"), which the source gives as "As we have said
   already, the addition of prosperity of this kind..."; the dossier's
   "hence some rank good fortune..." continuation on the A006 principle
   page was not carried.
3. https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Diogenes_Laertius/Lives_of_the_Eminent_Philosophers/7/Zeno*.html
   — Diogenes Laertius VII, Hicks translation. Passages compared
   word-for-word: "Moreover, they hold that it is in itself sufficient to
   ensure well-being: thus Zeno, and Chrysippus..."; Hecato's magnanimity
   argument; and the Panaetius/Posidonius denial sentence.
4. https://selfdeterminationtheory.org/SDT/documents/2001_RyanDeci_Happiness.pdf
   — Ryan and Deci 2001, Annual Review of Psychology. Passage compared
   word-for-word: the abstract's hedonic/eudaimonic opening sentence, in
   full.
5. https://thefpr.org/wp-content/uploads/Ryff1989_happiness.pdf — Ryff
   1989, JPSP. Passages compared word-for-word: the opening sentence
   ("Reigning measures...") and the operationalization sentence listing
   the six dimensions; the dossier joins them with a period, marking
   nothing dropped between them.
6. https://www.gutenberg.org/files/10378/10378-h/10378-h.htm — Mill,
   Autobiography. Passage compared word-for-word: "Those only are happy
   (I thought) who have their minds fixed on some object other than their
   own happiness...".

## Carriers not opened, and why no repair is needed

- Seligman's PERMA reply, Sidgwick's Methods of Ethics, Fredrickson 2001,
  Frankl, Nussbaum's Creating Capabilities: quoted passages from these
  exist on the linked concept cards with their carriers, but no quotation
  from them is used in this dossier; the entries are description only,
  compressed from the cards.

## Boundary decisions

- The Happiness boundary (registry requirement): stated in the intro and
  in the second divergence. No card link to a Happiness card is used,
  because no Happiness card exists; the nearby-terms line points to
  Happiness as activity for the classical account and names the roadmap
  dossier in plain text.
- Impermanence is included as the counterweight subtheme: the manifest's
  sweep holds it under this band.

## Practice section

Selection lists six kernels found by full-text sweep (rg -il flourish over
content/kernels), each description compressed from the kernel's own
protocol text; the evidence-limits paragraph after the list states where
each family's support stands (tradition, research line, or developer
account).

## Band state

docs/enrichment/batches/dos1.json updated to done at push. The registry
status for genuine-flourishing stays "planned" for the supervisor to flip
and publish, as directed; flagged in the commit message.


---

# Revision 2 (supervisor-pplx-1024c, 2026-10-24): merge and extension

The supervisor drafted a second, independent dossier for the same slug before seeing that
worker-pplx-dos1-1024c had already pushed revision 1. Rather than discard either, revision 2
merges them: revision 1's structure, Nearby terms, Ryff, Mill, Chase-free Aristotle (the dossier
now carries the Ross wording for I.8 from the opened MIT Classics page), Hecato and kernel
selection are kept; revision 2 adds the Epicurus, Sidgwick, Ryan and Deci, Kashdan et al.,
Waterman, Keyes and Annas, Keyes, Oishi and Westgate, Mauss, Niemiec, Joshanloo, Hanel and
SEP capability passages, and widens the map from 37 to 124 unique card targets, grouped by the
question each answers. Ryff, Mill and Hecato quotes from revision 1 were re-checked word for
word by script in this revision (Mill at Gutenberg 10378, Ryff at thefpr.org, Hecato at the
Diogenes Laertius page). Every map description was re-checked against the opening of its card
by a word-overlap script; nine flagged lines were read against their cards and five reworded.

Every quoted fragment below was checked word for word against a carrier opened in this
session (text extracted and string-matched by script for the HTML and PDF carriers; the
PubMed, Springer, Taylor and Francis, PMC and SEP carriers were fetched and the quoted
sentences compared by eye against the fetched abstract or page text).

### Quotes checked against carriers opened this session

- Aristotle, NE I.7 ("human good turns out to be activity of soul ... blessed and happy") and I.8
  ("it needs the external goods as well ... political power as instruments") — Ross
  translation, classics.mit.edu/Aristotle/nicomachaen.1.i.html. Script match: verbatim.
- Diogenes Laertius, Lives VII (Stoics), "they hold that it is in itself sufficient to
  ensure well-being: thus Zeno, and Chrysippus ... Hecato ..." and "Panaetius, however, and
  Posidonius deny that virtue is self-sufficing ... some means of living and strength" —
  penelope.uchicago.edu Thayer/LacusCurtius Loeb text, Zeno chapter. Script match: verbatim.
  The page does not name the translator in the extracted text, so none is named on the
  dossier. Section numbering: the "sufficient" sentence precedes the page's section marker 128
  (so VII.127); the Hecato fragment and the Panaetius dissent are at 128.
- Epicurus, Letter to Menoeceus, "By pleasure we mean the absence of pain in the body and of
  trouble in the soul." — classics.mit.edu/Epicurus/menoec.html, page states translation by
  Robert Drew Hicks. Script match: verbatim.
- Sidgwick, Methods of Ethics I.IV s.2, "fundamental paradox of Hedonism" sentence —
  laits.utexas.edu/poltheory/sidgwick/me/me.b01.c04.s02.html. Script match: verbatim.
- Ryan and Deci 2001, Annual Review of Psychology 52:141-66 — PDF at selfdeterminationtheory.org
  (2001_RyanDeci_Happiness.pdf). "Thus, from the eudaimonic perspective, subjective happiness
  cannot be equated with well-being." (body text) and "These two views have given rise to
  different research foci and a body of knowledge that is in some areas divergent and in others
  complementary." (abstract). Script match: verbatim after ligature normalisation.
- Ryan and Deci, SDT entry (2022 encyclopedia PDF at selfdeterminationtheory.org): "SDT also
  postulates that there are basic psychological needs that universally must be satisfied ..."
  Script match: verbatim.
- Kashdan, Biswas-Diener and King 2008 (J Positive Psychology 3:219-233), abstract sentence
  "Unfortunately, this distinction (rooted in philosophy) does not necessarily translate well to
  science." — Taylor and Francis page and the SciSpace PDF, same wording.
- Waterman 2008 (same journal and issue, pp. 234-252 per the citation in Keyes and Annas's
  listing), abstract phrase "inter-related but reliably distinguishable and qualitatively
  distinct conceptions of happiness" — Taylor and Francis search-result abstract (page text
  opened separately returned the abstract in the search snippet; author field from the
  fetched page).
- Keyes and Annas 2009 (J Positive Psychology), abstract figures 48.5%, 18%, 30.5%, "nearly
  twice the rate of mental illness" — Taylor and Francis page; authors Corey L. M. Keyes and
  Julia Annas given by the fetched page's author field.
- Keyes 2002 (J Health Soc Behav), abstract figures 17.2 percent flourishing, 12.1 percent
  languishing, "nearly six times greater among languishing than flourishing adults" — PubMed
  12096700. Journal name not asserted on the dossier.
- Oishi and Westgate 2022 (Psychological Review per PubMed record 34383524): "best characterized
  by a variety of interesting and perspective-changing experiences" — PubMed abstract.
- Mauss and colleagues 2011, "valuing happiness may lead people to be less happy just when
  happiness is within reach", study descriptions (female participants; low but not high life
  stress; reacted less positively to a happy, but not a sad, emotion induction; mediated by
  disappointment) — PubMed 21517168 abstract.
- Niemiec, Ryan and Deci 2009, "attainment of extrinsic aspirations related positively to
  indicators of ill-being" — PubMed 20161160 abstract.
- Joshanloo review, "Six fundamental differences in western and eastern conceptualizations of
  the good life are identified" and the list of traditions — Springer
  10.1007/s10902-013-9431-1 abstract.
- Hanel and colleagues 2020, Nature Communications, 29 countries, N = 54,673, value-type
  moderation — PMC7554046 abstract.
- Stanford Encyclopedia, Capability Approach: capabilities and functionings definitions and
  Nussbaum's ten central capabilities — plato.stanford.edu/entries/capability-approach/.

### Map descriptions

Each per-entry description in the dossier is compressed from the opening paragraph(s) of
the linked card, read this session (content/concepts, content/kernels, content/stories,
content/thinkers). They describe what the card says; they certify nothing beyond it. Entries
chosen by title sweep and full-text sweep for flourishing, eudaimonia, well-being, thriving and
good life, then kept only where the card's own claim bears on what a good life is, what
counterfeits it, or what builds it. Cards on happiness-the-feeling (hedonic adaptation,
paradox of hedonism, happiness as by-product, valuing happiness) are included under
"what gets mistaken for it" because they bear on the counterfeit question; the Happiness
dossier holds the affective-state material. Not marked in the dossier: the Divergence
section's cross-cultural paragraph reports abstracts only, and the Mauss studies measured
happiness, not flourishing, which the dossier says.

### Known limits

- Kashdan et al. and Waterman were read at abstract level; Keyes and Annas likewise. The
  full articles are paywalled in the fetch used.
- Two additional card carriers (Aristotle NE X, Frankl) were not re-opened; their cards are
  linked and described only, with no quotation reproduced from them.
