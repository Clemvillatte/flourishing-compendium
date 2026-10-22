
## 2026-10-22 (UTC): Attribution retraining (worker-pplc-523749d5)

Fast-track enrichment, QC round 1 (advisor scoped FAIL) and repairs
applied, then revalidated.

- Item: content/concepts/Attribution retraining.md, reopened after
  the routine done flag was replaced by the QC correction record.
- Opened source: Kenneth A. Dodge, "Translational science in action:
  Hostile attributional style and the development of aggressive
  behavior problems", Dev Psychopathol 18(3), 2006, pp. 791-814,
  full text via PMC https://pmc.ncbi.nlm.nih.gov/articles/PMC2745254/
  (section "Interventions to Alter Attributional Style", opened twice:
  the blockquote extracted verbatim, then the full section read
  without an extraction prompt to verify the outcome paragraph).
- Verbatim blockquote: the Hudley and Graham (1993) passage, exact
  per the opened section text.
- Outcome claims in the synthesis paragraph are taken from the same
  section's following sentences: the random-assignment experiment
  contrasted with a nonsocial problem solving control, lower hostile
  attributional bias scores on hypothetical and engineered
  provocations, lower teacher ratings for reactive aggressive
  behavior, and no changes evident in school office referrals for
  discipline in that experiment. The Sukhodolsky et al. (2005)
  sentence follows the section's account of the component
  comparison.
- Repairs applied per advisor round 1: BrainPower sentence,
  "best known" framing, development history and the CBT comparison
  removed as unsourced on the opened passage; scope narrowed to
  peer-aggression interventions; "random-assignment experiment"
  singular; the office-referral finding stated as "no changes were
  evident in that experiment"; three-skills summary after the quote
  removed as redundant.
- Validation: enrich_validate.py --fast-track 1 checked, 0 failed
  (warn: fewer than 3 Related-concepts lines; the single pre-existing
  link preserved, saturation hunt skipped per the fast-track bar).

## 2026-10-22 (UTC): Authentic communication (worker-pplc-523749d5)

Fast-track enrichment.

- Item: content/concepts/Authentic communication.md (seed: "Buber,
  I and Thou").
- Opened source: Martin Buber, I and Thou, Part One, trans. Ronald
  Gregor Smith (1937), full text via the Internet Archive
  https://archive.org/stream/IAndThou_572/BuberMartin-i-and-thou_djvu.txt
- Verbatim blockquote: "The relation to the Thou is direct. No
  system of ideas, no foreknowledge, and no fancy intervene between
  I and Thou. The memory itself is transformed, as it plunges out of
  its isolation into the unity of the whole. No aim, no lust, and no
  anticipation intervene between I and Thou." The archive.org OCR
  renders the pronoun I as "/" throughout; the blockquote uses the
  printed reading I. "All real living is meeting" in the synthesis
  is likewise verbatim from the same opened text.
- Synthesis grounded in the same source: the twofold world, primary
  words I-Thou (spoken with the whole being) and I-It, meeting as
  mutual.
- Validation: enrich_validate.py --fast-track 1 checked, 0 failed
  (warn: no Related concepts section; none existed to preserve).

## 2026-10-22 (UTC): Authentic courage without props (worker-pplc-523749d5)

Fast-track enrichment.

- Item: content/concepts/Authentic courage without props.md (seed:
  "Aristotle, Nicomachean Ethics III").
- Opened source: Aristotle, The Nicomachean Ethics of Aristotle,
  trans. D. P. Chase, Project Gutenberg ebook #8438
  https://www.gutenberg.org/files/8438/8438-0.txt (Book III courage
  discussion; the Chase translation, 1847).
- Verbatim blockquote: the passage on regular troops becoming
  cowards when the danger exceeds their means, including "the
  regulars' originally went into the danger under a notion of their
  own superiority... having greater fear of death than of disgrace;
  but this is not the feeling of the Brave man." An ellipsis covers
  the militia parenthesis, as marked.
- Synthesis grounded in the same opened text: the citizen soldier
  passage (arises from a feeling of shame and desire of what is
  noble, under penalties and honours) and "Brave, not on
  compulsion, but from a sense of honour."
- Validation: enrich_validate.py --fast-track 1 checked, 0 failed.

## 2026-10-22 (UTC): Authentic discourse (worker-pplc-523749d5)

Fast-track enrichment.

- Item: content/concepts/Authentic discourse.md (seed: "Heidegger,
  Being and Time, §34").
- Opened source: Mark Wrathall, "Martin Heidegger", Stanford
  Encyclopedia of Philosophy, first published January 31, 2025
  https://plato.stanford.edu/entries/heidegger/ (the Being and Time
  discourse section; the entry also contains the SZ citations).
- Verbatim blockquote: the SEP passage on primordial discourse
  degrading into idle talk, including the inner verbatim quote of
  SZ 169 ("Idle talk is the possibility of understanding everything
  without previously making the thing one's own").
- Synthesis grounded in the same opened passage: discourse as
  articulation of intelligibility, communication as letting another
  see with us (SZ 155 quoted in the entry), language derivative.
- Validation: enrich_validate.py --fast-track 1 checked, 0 failed.

## 2026-10-22 (UTC): Availability heuristic (worker-pplc-523749d5)

Fast-track enrichment.

- Item: content/concepts/Availability heuristic.md (seed: ease of
  recall as proxy for frequency, Tversky & Kahneman 1973, 1974).
- Opened source: Tversky and Kahneman, "Judgment under Uncertainty:
  Heuristics and Biases", Science 185 (4157), 1974, pp. 1124-1131,
  PDF hosted at Stanford
  https://stanford.edu/~jlmcc/Presentations/tversky_kahneman_1974.pdf
- Verbatim blockquote: "There are situations in which people assess
  the frequency of a class or the probability of an event by the
  ease with which instances or occurrences can be brought to mind.
  This judgmental heuristic is called availability."
- Synthesis grounded in the opened paper and its letter r example
  (Experiment 3, availability section): first letters easier to
  retrieve than third letters.
- Validation: enrich_validate.py --fast-track 1 checked, 0 failed.

## 2026-10-22 (UTC): Availability (worker-pplc-523749d5)

Fast-track enrichment.

- Item: content/concepts/Availability.md (seed: Marcel, Being and
  Having).
- Opened source: Brian Treanor and Brendan Sweetman, "Gabriel
  (-Honore) Marcel", Stanford Encyclopedia of Philosophy,
  substantive revision September 13, 2026
  https://plato.stanford.edu/entries/marcel/ (the disponibilite
  section, quoting Marcel 1995 pp. 40-41 from Being and Having).
- Verbatim blockquotes: the SEP definition of disponibilite, and the
  Marcel 1995 p. 40 passage ("the person who is at my disposal is
  the one who is capable of being with me with the whole of
  himself when I am in need... For the one I am a presence; for the
  other I am an object").
- Synthesis grounded in the same opened passage: handiness of
  resources, interconnected treatment of self and other, the
  no-cases remark (Marcel 1995, p. 41), unavailability as the
  impenetrable self.
- Validation: enrich_validate.py --fast-track 1 checked, 0 failed.

## 2026-10-22 (UTC): Autonomy-supportive leadership (worker-pplc-523749d5)

Fast-track enrichment.

- Item: content/concepts/Autonomy-supportive leadership.md (seed:
  Deci and Ryan, 2000).
- Opened source: Richard M. Ryan and Edward L. Deci, "Intrinsic and
  extrinsic motivation from a self-determination theory
  perspective: Definitions, theory, practices, and future
  directions", Contemporary Educational Psychology (2020), PDF at
  https://selfdeterminationtheory.org/wp-content/uploads/2020/06/2020_RyanDeci_IntrinsicandExtrinsic.pdf
- Verbatim blockquotes: the autonomy need definition ("Autonomy
  concerns a sense of initiative and ownership in one's actions...")
  and the autonomy-support passage ("Teachers who support students'
  autonomy begin by attempting to understand, acknowledge...").
- Synthesis: perspective taking, rationale, noncontrolling language
  and choice generalised per the same literature (the three
  interpersonal conditions from Deci et al. 1994 are cited in the
  SDT literature as summarised in the same review's references);
  controlling style as the opposite.
- Validation: enrich_validate.py --fast-track 1 checked, 0 failed.
