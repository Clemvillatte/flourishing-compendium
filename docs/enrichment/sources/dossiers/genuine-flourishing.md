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

## Story section

Added per the updated exemplar (the-self.md, Story section). Every story
card included was opened and read this session; each logline compresses
the story card's own telling, and no story is included from its title
alone.

### Story section enrichment (2026-10-24, worker-pplx-dos1-1024e)

A first Story section for this dossier landed concurrently (b0781c2af, agent
genuineflourishing15): 7 loglines over 5 subthemes, no science subtheme. This
pass enriched it to full map coverage: 22 loglines across all 6 map-mirroring
subthemes. Added lines were compressed from story cards opened and read in this
session: ST173, ST147 (classical); ST297, ST136, ST303 (new science subtheme);
ST298 (mistaken); ST279, ST277, ST322 (meaning); ST316, ST107, ST226
(conditions); ST222, ST184, ST397 (practice). The 7 pre-existing loglines
(ST143, ST035, ST171, ST033, ST193, ST144, ST001) were kept as landed; their
cards (ST171, ST033, ST193, ST144, ST001) were opened and read this session to
confirm the lines stay within the cards' own narratives. dossier_check.py exits
0 (147 card links resolve). No other section touched.

### Story section QC pass (2026-10-24, worker-pplx-dos1-1024e)

Advisor QC on the enrichment: eight loglines repaired. ST297, ST136, ST303,
ST322, ST316 rewritten as research episodes (question asked, move made) instead
of restated empirical claims; ST279 now attributes the observation to Frankl's
account and keeps the card's own limit (most of those he described died);
ST226 restored the card's "invites" over "seats"; ST397 restored the card's
"seventy-five by Japanese counting" qualifier. Full card texts (narrative and
closing paragraphs) were read for all 22 cited stories this session. Verified
by diff: everything before "## Story:" in the dossier is byte-identical to the
pre-enrichment parent (4aa8768fb^), confirming the concurrent-session insert
collision left no residue in the map. dossier_check.py exits 0 (147 card
links, 23 headers, 22 external carriers).

### Essay-thread rework: etymology carriers (2026-10-24, supervisor-pplx-metafix-1024a)

The opening movement of the dossier was reworked into an interwoven thread
per the owner's sketch (flourish/flower root; first-glance meaning; the
conflict; genuine from genuinus/genus, "of one's own stock"). Two new
quoted passages were added; both carriers were opened and the quotes
compared word-for-word against the fetched page text this session:

1. https://en.wiktionary.org/wiki/flourish — "From Middle English
   floryschen, from Old French florir (via the arrhizotonic stem
   floriss-), from Late Latin flōrīre, from Latin flōrēre, from Latin
   flōrem ("flower", noun). Corresponds to flower + -ish."
2. https://en.wiktionary.org/wiki/genuine — "Borrowed from Latin
   genuīnus, from genus + -ūs."
3. https://en.wiktionary.org/wiki/genus#Latin — "From Proto-Italic
   *genos, from Proto-Indo-European *ǵénh₁os n ("race"), from the root
   *ǵenh₁- ("to produce, beget")"; first-listed senses "birth, origin,
   lineage, descent" and "kind, type, class".

etymonline.com was tried first and refused the fetch (client error);
Wiktionary pages were fetched directly (curl + rendered text) and the
quotes above match the page text as printed. The etymology prose claims
in the new opening ("a word whose senses run from birth, origin,
lineage and descent to kind and type") restate the carrier's own
sense list. All 147 card links and all previously verified quotes kept
unchanged; dossier_check.py exits 0 (25 external carriers). Remaining
flag from advisor QC: the woven map sections still read as
semicolon-chained lists in places; revision pass queued before this
dossier becomes the new exemplar.

### Exemplar revision punch list (2026-10-24, supervisor-pplx-metafix-1024a)

Concrete scope for the queued revision pass (next session, before GF
becomes the exemplar). Semicolon-chain scan of the current file: 6
chain-heavy lines (3+ semicolon-separated clauses) in "The map: the
entries on flourishing" and 2 in "Where the traditions genuinely
disagree"; the other map sections are clean. Method per line: keep
every card link and every claim, rewrite the chain as 2-3 woven
sentences in the plain-speech register, verify claim-by-claim against
the cards, re-run dossier_check.py (147 links, 25 carriers) and the
render test, then advisor QC before promoting to exemplar. Estimated
one focused session-hour.

### Exemplar candidate revision, pass 1 (2026-10-24, supervisor-11878a6c)

Owner approval is required before this becomes the new exemplar or directs
the six proposed agents. The opening remains unchanged by explicit work order.
The insurance branch was fast-forwarded locally because main lacked the work
order; its four-file handoff state was recovered and pushed with the initial
supervisor checkpoint.

First item: the science paragraph beginning "The science also widened the
target" now develops three connected questions: what goals serve, what
engagement feels like, and what character and emotions contribute. All 12
card-link occurrences retained. All linked cards opened and read.
External carriers actually fetched for this revision:

- Deci and Ryan (2000), goal content and need satisfaction:
  https://selfdeterminationtheory.org/SDT/documents/2000_DeciRyan_PIWhatWhy.pdf .
  Intrinsic/extrinsic aspirations and associations with well-being;
  the rewrite avoids turning associations into guaranteed consequences.
- Ryan and Deci (2000), social conditions:
  https://pubmed.ncbi.nlm.nih.gov/11392867/ . Abstract read directly.
- Frederick and Ryan, subjective vitality:
  https://acuresearchbank.acu.edu.au/server/api/core/bitstreams/b155eafb-778a-47b5-92cb-1c1a7ef715cb/content .
  Definition extraction checked; no new quotation added.
- Flow overview: https://en.wikipedia.org/wiki/Flow_(psychology) .
  Definition only; not a primary-source verification of the whole theory.
- Tse and colleagues (2026), vital engagement:
  https://link.springer.com/article/10.1007/s11031-026-10191-z .
  Definition and association limits read; primary definition reported
  second-hand with locator 2003, p. 87.
- Little (2008):
  https://onlinelibrary.wiley.com/doi/10.1111/j.1751-9004.2008.00106.x .
  Abstract read; sustainable-projects claim explicitly a proposal.
- Seligman and colleagues (2005):
  https://greatergood.berkeley.edu/images/uploads/Seligman-PosPsychProgress.pdf .
  Classification of 24 strengths verified; no added intervention-efficacy claim.
- Fredrickson (2001): https://pmc.ncbi.nlm.nih.gov/articles/PMC3122271/ .
  Theory statement and preliminary-evidence caveat read. Corrects the
  earlier unqualified presentation of resource-building as established fact.
- Oishi and Westgate:
  https://www.erinwestgate.com/uploads/7/6/4/1/7641726/oishi.westgate.psychrev.2021.pdf .
  Definition, related-but-distinct claim and evidence caveats read.

Independent advisor review requested; pending, not a clearance.

First-item advisor returned scoped pass with minor corrections, now
applied: positive emotions terminology, core personal projects, tighter
Ryan/Deci paraphrase, split flow/vital-engagement source placement, and a
first-person value judgment without an invented experience. Advisor
independently re-opened Fredrickson 2001 and Seligman et al. 2005.
The actual header is "What the science took from it"; "Can a good life
be measured?" was only a mistaken locator in a message, not a page header.
Checker after pass 1: 147 card links, 23 headers, 35 external-carrier
occurrences. After pass 2: 147 / 23 / 46 respectively.

### Candidate pass 2: meaning and adversity (supervisor-11878a6c)

Rewrote the "hard parts" chain as four connected paragraphs. All 12 card
links retained. All corresponding local cards read; the Post-traumatic
growth card has no "research" suffix on disk. Corrections/limits:
Masten kept within developmental/children scope; growth is not inevitable
and may coexist with distress; antifragility is a system response within a
range, not a demand on survivors; Luke's narrative is not made into a
settled universal priority doctrine; authenticity is explicitly the
consistency conception. The old attribution of the modern triad
purpose/coherence/mattering to Frankl is no longer implied.

Freshly fetched carriers:

- Frankl, https://antilogicalism.com/wp-content/uploads/2017/07/mans-search-for-meaning.pdf :
  all three meaning routes, specific rather than universal meaning, future
  aim, tragic optimism, cannot-command-optimism and remove-avoidable-
  suffering passages read. Page numbers were not supplied by extraction;
  no invented page locator added.
- Masten, https://ocfcpacourts.us/wp-content/uploads/2020/06/Ordinary_Magic_Resilience_Process_000935.pdf :
  definition and ordinary developmental resources.
- Tedeschi and Calhoun,
  https://ptgi.uncc.edu/wp-content/uploads/sites/9/2013/01/PTG-Conceptual-Foundtns.pdf :
  definition, growth/distress coexistence, and non-inevitability warning.
- https://en.wikipedia.org/wiki/Antifragility : secondary overview only;
  response within some range of variation.
- https://plato.stanford.edu/entries/heidegger/ : anticipation of death,
  finite projects, ownership, inauthentic conformity (SZ 261–267).
- https://www.accesstoinsight.org/tipitaka/kn/dhp/dhp.20.than.html :
  full unprompted text read, verse 277 inconstancy of fabrications.
- https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2020.629654/full :
  consistency conception and alternate conceptions read.
- https://www.biblegateway.com/passage/?search=Luke+10%3A38-42&version=NRSVUE :
  full narrative and verse-42 textual variant read.
- https://plato.stanford.edu/entries/japanese-aesthetics/ :
  wabi/sabi distinctions and appreciation of repaired/imperfect utensils.

These are scoped checks of the revised claims, not an endorsement of all
claims in any linked card.

### Candidate pass 3: conditions, community and freedom

All 17 card links retained. Local cards read. The chain is now five
paragraphs: social attachment; opportunities and freedom; constitutive
relations; cultural distinctions; time, health, digital settings and the
future. No new empirical benefit is claimed for any philosophical or
Indigenous account.

Sources fetched and read for the revised claims:

- https://pubmed.ncbi.nlm.nih.gov/11894851/ : unprompted abstract,
  222-undergraduate sample, strongest relationships in happiest group;
  sample and noncausal scope now stated.
- https://pubmed.ncbi.nlm.nih.gov/7777651/ : unprompted review abstract;
  belonging retained as evidence-supported hypothesis.
- https://blogs.ubc.ca/helliwell/files/2020/10/Annals_2019.pdf :
  social context and explicit correlation/feedback caveat.
- https://plato.stanford.edu/entries/capability-approach/ :
  achieved functionings vs real opportunities; Nussbaum thresholds;
  Sen's objection to a fixed list also read for the later divergence.
- https://berlin.wolf.ox.ac.uk/published_works/tcl/tcl-e.pdf :
  self-mastery and coercion in the name of the true self.
- https://plato.stanford.edu/entries/communitarianism/ :
  identity and Sandel attachments; not a universal endorsement of communities.
- https://plato.stanford.edu/entries/common-good/ : facilities and shared
  relational obligations.
- https://plato.stanford.edu/entries/federalism/ : the Nguni maxim and
  translation, not a fresh verification of the etymology of ubuntu;
  that etymological claim was not carried forward.
- https://www.health.govt.nz/maori-health/maori-health-models/te-whare-tapa-wha :
  Durie, meeting-house model and four interdependent dimensions.
- https://link.springer.com/article/10.1007/s10902-013-9431-1 :
  theoretical review abstract; not empirical proof of all cultures' beliefs.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7554046/ : 29-country study;
  value-specific moderation retained, no universal cultural-fit benefit.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13414762/ : confirmed real
  accessible article, Sang Yong Yoon, Frontiers in Public Health,
  2026-07-15, DOI 10.3389/fpubh.2026.1824268; definition of subjective
  time sufficiency and autonomy checked.
- https://www.ilo.org/sites/default/files/wcmsp5/groups/public/@ed_dialogue/@actrav/documents/meetingdocument/wcms_161321.pdf :
  social gradient throughout socioeconomic hierarchy.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7417400/ : digital well-being
  definition only.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7797197/ : Jonas imperative
  quoted at second hand, explicitly attributed to Mangone as carrier.

### OWNER CORRECTION: synthesis before apparatus (2026-10-24)

Owner explicitly rejected the unedited "Its goal research adds..." paragraph
as impossible to read/navigate/comprehend: a cognitively overloading bunch
of quotations. Wants synthesis, enjoyment and navigability; quotes/sources
are secondary on the dossier. This overrides any reading of the older
quote-heavy format that would reproduce dense evidence displays.

Immediate repair: "Which goods count, and who decides?" is five short
paragraphs, one question each, without quote/status machinery. Citations
are integrated in the prose rather than displayed as credentials. Detail
removed from reader prose remains evidenced here:
Niemiec et al., https://pubmed.ncbi.nlm.nih.gov/20161160/ (fresh unprompted
abstract fetch): one-year post-college observational associations, intrinsic
goals/health positive; extrinsic attainment/ill-being positive. This is
not random assignment to goals. SDT encyclopedia fresh fetch:
https://selfdeterminationtheory.org/wp-content/uploads/2023/01/2022_RyanDeci_SDT_Encyclopedia.pdf :
universal needs are theoretical postulates, not a claim of identical lives.
Joshanloo theoretical comparison, Hanel value-specific moderation and
Sen/Nussbaum distinctions freshly checked in pass 3 above. No false
opposition between universal needs and cultural differences asserted:
these can coexist; final question is explicitly the writer's judgment.

Apply this readability correction to the whole candidate before asking
the owner to validate it. Do not propagate the unapproved candidate to
other dossiers.

### Candidate pass 4: learning through action; practices that fit a life

All 12 original card links retained. Semicolon chain replaced by two
reader subthemes and six short connected paragraphs. External links are
integrated into meaningful prose phrases, not appended as evidence badges.

Carriers fetched and read for these claims:
- Aristotle NE II.1–4, Ross:
  https://classics.mit.edu/Aristotle/nicomachaen.2.ii.html .
  Habituation and choice for its own sake; appearance/action versus
  knowledge/choice/firm character distinction.
- Sanderse conceptual examination:
  https://www.tandfonline.com/doi/full/10.1080/03057240.2018.1497952 .
  Not an empirical intervention trial.
- Aristotle Metaphysics IX:
  https://classics.mit.edu/Aristotle/metaphysics.9.ix.html .
  Application to moral practice is explicitly the writer's.
- https://en.wikipedia.org/wiki/Bhavana : secondary lexical overview of
  cultivation/development. No uniform Buddhist doctrine asserted.
- Maslow Toward a Psychology of Being, chapter 3:
  https://epdf.pub/toward-a-psychology-of-beingfddacaa1d3466cbd5f4a39782d346cc289247.html .
  Criticism of static conception; no attributed "becoming not arrival" quote.
- https://sonjalyubomirsky.com/wp-content/uploads/2024/07/Lyubomirsky-Layous-2013.pdf :
  fit, motivation, effort as model conditions, not guaranteed efficacy.
- https://greatergood.berkeley.edu/images/uploads/Pursuing_Happiness-_The_Architecture_of_Sustainable_Change.pdf :
  sustainability model, no 50/10/40 estimate or guaranteed control claim.
- https://www.gutenberg.org/files/3794/3794-h/3794-h.htm :
  On Benefits I.6 and II.22 fetched, spirit of giving and grateful receipt.
  Aristotle VIII.14 also fetched; no proportional-affection claim imported.
- https://pubmed.ncbi.nlm.nih.gov/15301629/ : Gable 2004 four studies,
  enthusiastic response and relationship well-being association.
  No "more important than response to bad news" claim.
- https://www.rivistateoria.eu/index.php/teoria/article/download/44/43 :
  Zagzebski's exemplar theory and admiration. Philosophical proposal.
- https://research.dial.uclouvain.be/entities/publication/05d717de-4f1e-4476-ac20-6b5841527af9 :
  Van Cappellen et al. 2016, two cross-sectional samples, statistical
  mediation involving awe/gratitude/love/peace, not a causal mechanism.
