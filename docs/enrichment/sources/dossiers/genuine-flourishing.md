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
