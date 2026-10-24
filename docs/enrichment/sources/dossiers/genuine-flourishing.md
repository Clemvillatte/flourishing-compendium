# Dossier ledger — Genuine Flourishing (worker-pplx-dos1-1024c, 2026-10-24)

Verification record for docs/enrichment/dossiers/genuine-flourishing.md,
revision 2 (QC repairs applied: one divergence removed as conflated,
coverage extended and recorded truthfully, unsupported glosses repaired,
quote joins audited).

## Method

- Map construction: the dos1 manifest's title sweep (16 concept files)
  plus curated stragglers from a body sweep. The raw body sweep (rg -il
  flourish over content/concepts) returns ~200 files, far too many to read
  in full; the screening actually performed was: the candidate list was
  ranked by match count, the top candidates' opening claims were read, and
  cards whose opening claim treats flourishing-as-a-life were added. Added
  on reading: The capabilities approach, Happiness as activity, Happiness
  as by-product, The paradox of hedonism, Virtue, Virtue ethics, Arete,
  Practical wisdom, Positive psychology, Complete mental health model,
  Broaden-and-build, The meaning of life, Self-determination, The polis,
  Aristotelian friendship, Pursue becoming not arrival, The sufficient
  good, The common good, Materialism, Extrinsic motivation. Cards read and
  left to their own themes (incidental uses): Attention, Flow, Boredom and
  the remainder of the raw match list, which was not read in full — a
  recorded limit of the sweep, not a claim of completeness.
- Family-term searches beyond the title: eudaimon (all title matches
  already in the sweep), well-being (all title matches already in the
  sweep; the remaining uses are the entries above), thrive (no concept
  file).
- Every per-entry description is a compressed restatement of the linked
  entry's own opening claim, taken from its content/ file. These are
  inherited map summaries, not newly verified findings; the cards carry
  their own carriers. No description carries a quotation.
- Every quoted fragment was verified word-for-word this session against a
  carrier opened for it (full fetched text retrieved and compared).
- Card links: 48 links, 42 unique targets, all resolved by
  scripts/dossier_check.py (exit 0; 10 headers, 8 external carriers).

## Carriers opened and compared (URLs)

1. https://classics.mit.edu/Aristotle/nicomachaen.1.i.html — Aristotle,
   Nicomachean Ethics Book I, Ross translation. Passages compared
   word-for-word: the function-argument conclusion ("human good turns out
   to be activity of soul in accordance with virtue...") and the
   complete-life addition. The dossier quote opens with an ellipsis
   because the sentence continues the chapter's argument; the quoted words
   are exact, including the lower-case "human" of the source.
2. https://www.gutenberg.org/files/8438/8438-h/8438-h.htm — Aristotle,
   Nicomachean Ethics, Chase translation. Passage compared word-for-word:
   the external-goods passage of I.8. The dossier quote's ellipsis marks a
   genuine omission between the instruments sentence and the closing
   sentence ("As we have said already, the addition of prosperity of this
   kind..."), which the source gives with the lead-in.
3. https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Diogenes_Laertius/Lives_of_the_Eminent_Philosophers/7/Zeno*.html
   — Diogenes Laertius VII, Hicks translation. Passages compared
   word-for-word: "Moreover, they hold that it is in itself sufficient to
   ensure well-being: thus Zeno, and Chrysippus..."; Hecato's magnanimity
   argument; and the Panaetius/Posidonius denial sentence. Three separate
   passages, each quoted with its own check.
4. https://selfdeterminationtheory.org/SDT/documents/2001_RyanDeci_Happiness.pdf
   — Ryan and Deci 2001, Annual Review of Psychology. Passage compared
   word-for-word: the abstract's hedonic/eudaimonic opening sentence, in
   full.
5. https://thefpr.org/wp-content/uploads/Ryff1989_happiness.pdf — Ryff
   1989, JPSP. Passages compared word-for-word: the opening sentence
   ("Reigning measures...") and the operationalization sentence. The full
   abstract was retrieved and compared in a second fetch: the two sentences
   are adjacent in the abstract, with the sample sentence following; the
   join drops nothing between them.
6. https://www.gutenberg.org/files/10378/10378-h/10378-h.htm — Mill,
   Autobiography. Passage compared word-for-word: "Those only are happy
   (I thought) who have their minds fixed on some object other than their
   own happiness...".

## Carriers not opened, and why no repair is needed

- Seligman's PERMA reply, Sidgwick's Methods of Ethics, Fredrickson 2001,
  Frankl, Nussbaum's Creating Capabilities: quoted passages from these
  exist on the linked concept cards with their carriers, but no quotation
  from them is used in this dossier; the entries are inherited map
  summaries, compressed from the cards.

## Boundary decisions

- The Happiness boundary (registry requirement): stated in the intro. No
  card link to a Happiness card is used, because no Happiness card exists;
  the nearby-terms line points to Happiness as activity for the classical
  account and names the roadmap dossier in plain text.
- Impermanence is included as the counterweight subtheme: the manifest's
  sweep holds it under this band.

## Repairs applied in revision 2 (per QC)

- The second divergence ("Can flourishing be read off how a life feels?")
  was removed: it conflated the hedonic-eudaimonic distinction with the
  subjective-versus-objective and health-versus-illness distinctions. Its
  material stays in the map, and a closing note under the remaining
  divergence marks the hedonic-eudaimonic boundary as held, not
  adjudicated.
- The first divergence's closing was corrected: the unresolved question is
  the ethical one (whether an admirable life deprived of external goods
  counts as flourishing), not a claim about what the social-determinants
  findings decide.
- Coverage: Self-determination, Virtue ethics, The common good, Materialism
  and Extrinsic motivation added as entries; the sweep's limit (the
  ~200-file raw list not read in full) is recorded above rather than
  glossed.
- Unsupported glosses repaired: the Connectedness entry no longer carries
  the isolation claim (not present on the card as read); the Materialism
  entry now carries the card's meta-analytic finding (753 effect sizes,
  lower well-being); Holistic well-being and Eudaimonic motivation carry
  their cards' own qualifications; the practice glosses for the evening
  examination, future-self dialogue and habituation kernels were checked
  against the full kernel bodies and corrected (the kernel cites
  self-reflection research; the future-self research is Ersner-Hershfield
  et al. 2009 with the authors' causal caution; the thirty-day plan is the
  compendium's exercise).
- Quote joins audited: the Aristotle I.7 quote now opens with an ellipsis
  marking the mid-sentence start; the Ryff join was verified adjacent
  against the full abstract; the Diogenes quotes are separate passages,
  each marked with its own check; the Chase I.8 ellipsis marks a genuine
  omission between the instruments sentence and the closing sentence.

## Practice section

Selection lists six kernels found by full-text sweep (rg -il flourish over
content/kernels), each description compressed from the kernel's own
protocol text and, in revision 2, checked against the full kernel body;
the evidence-limits paragraph states where each family's support stands.

## Band state

docs/enrichment/batches/dos1.json done at push. The registry status for
genuine-flourishing stays "planned" for the supervisor to flip and publish,
as directed; flagged in the commit message.
