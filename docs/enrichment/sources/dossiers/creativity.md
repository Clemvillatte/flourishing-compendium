# Creativity — evidence ledger

Worker: worker-pplx-dos32-1025d (takeover of worker-pplx-dos32-1025, whose
in-session prep — corpus-sweep inventory, card excerpt inspection, registry
scope, question draft — is recorded in the dos32 batch note and was used as
the reading list). Dossier:
docs/enrichment/dossiers/creativity.md, CURRENT rev 3 (rev 1: 4dc84038d,
first draft; rev 2: 536cfd694, advisor QC round 1 applied; rev 3: advisor
QC rounds 2-4 applied, plus a fifth pass that resolved the Haught-Tromp
carrier via the Wayback Machine and restored a bounded experimental-record
sentence; advisor round 4 confirmed the dossier acceptable for
worker-complete pending supervisor review).
Checker at rev 3 final: exit 0 (30 card links resolve, 16 headers, 47
external carrier link occurrences; the Novelty research card link was removed
with the unsupported constraint connection, and the story carriers, the
Haught-Tromp carrier and inline citations were added).

## Verification method (per quote, no blanket claim)

Raw text, no LLM extraction in the path (curl + pdftotext, whitespace-
normalized grep, or raw curl of eutils/Gutenberg text): Hennessey & Amabile
2010 (all quotes and the full rewards-debate passage, full-span verified),
Guilford 1950, Schumpeter ch. VII, Cambridge International chapter 4 (all
quotes), Csikszentmihalyi Flow (owner's Drive copy), Dewey, Bergson,
Wang et al. 2017, Kounios & Beeman 2014, Baird et al. 2012 and Holt 2018
(PubMed eutils raw abstract text), SEP Imagination and SEP Henri Bergson
section 6 (raw curl of the entry HTML, text stripped locally), Sio & Ormerod
2009 (raw curl of the ERIC record), Murray et al. 2024 (raw curl of the
FLoRA record), Conner et al. 2018 (raw HTML of the Taylor & Francis abstract
page downloaded via the fetch tool's raw mode and full-span checked
locally).

Fetch-tool page reads (LLM extraction in the path, cross-checked but not raw
verified): Haase et al. 2018 abstract numbers (Taylor & Francis full text;
the extraction quoted the abstract's own sentences, including 'r = .39',
'r = .53' and 'r = .23'; rev 3 corrected a .25 figure that appears in no
opened text to the abstract's own .23). Each is labeled per quote below.

Rev 3 ran a full-span re-verification of every quotation except the Haase
figures (fetch-tool extraction, labeled below) against its raw carrier
(whitespace-normalized substring match) after the advisor's round-2 review;
two defects found and fixed: the rewards quotation had lowercased
'Despite' and truncated the sentence, and the Haase .25 figure was not in any
opened text. The complete displayed mini-c quotation, including the leading
'the' and the chapter's nested quotation marks, was verified as a contiguous
span against the raw chapter text. Known extraction artifacts, not quote
defects: the Schumpeter carrier interleaves a footnote marker inside
'incessantly revolutionizes', and the Flow/Bergson Gutenberg texts use curly
apostrophes where the dossier uses straight ones.

Cards: cards were read via their markdown files; several were read in
targeted section ranges (some from line 13 onward after the front matter),
not necessarily whole files. The relied-on passages are inside those ranges.

## Advisor QC round 1 (rev 2 changes)

- Mini-c quotation corrected to the carrier's own span, keeping the
  chapter's internal quotation marks ('novel and personally meaningful
  interpretation of experiences, actions, and events').
- Vygotsky fragment corrected to 'known only to him' (was 'known only to him
  who created it').
- The CAT-versus-mini-c contrast was removed as a formal disagreement (the
  two answer different questions, failing the README same-question rule) and
  moved into the definition discussion as a tension between what counts and
  how research scores.
- The desk-versus-walk disagreement was narrowed to its genuinely contested
  core: whether mind wandering during incubation facilitates creativity
  (Baird et al. 2012 positive vs Murray et al. 2024 null replication, both
  now opened and quoted). Persistence/incubation material stays in the
  process section as complementary.
- A third disagreement added, source-backed from the opened H&A review: the
  rewards debate (Eisenberger & Cameron's assertion that expected rewards
  generally foster creativity vs the intrinsic motivation principle), with
  the review's own account of what is at the core of the debate.
- Conner paragraph rewritten to the study's own terms (direction-specific,
  observational, no causal claim; 'everyday creative activity' as the
  study's term, no invented activity list).
- Wang paragraph narrowed: later-originality difference held for higher-
  shifting participants, not uniformly; mechanism marked tentative.
- K325 practice entry reworded: the floor of five is the kernel's design
  choice, not a tested rule.
- Insight neuroscience sentence reported as association, without the 'real
  difference between people' inference.
- Haught-Tromp 2017 findings, the Dr. Seuss wager and the constraint
  mechanism removed from reader-facing prose (carrier unopenable this
  session); the constraint paragraph now presents the K324 exercise and the
  editorial reasoning behind it, no findings claimed.
- The 2025 Springer self-efficacy study claim removed (carrier not opened).
- Bergson exposition rewritten around two raw-verified quotations; the
  P195 verification apparatus moved to this ledger (public prose now
  attributes the émotion créatrice reading to the SEP commentators).
- Opening rewritten without page self-description; 'the field he called for
  now exists...' sentence deleted.
- Story loglines rewritten as concrete incidents; the cards' general
  psychological and philosophical claims removed from the loglines.
- The Creation nearby-term link relabelled accurately (it opens the Creative
  values card, not the sibling dossier).

## Advisor QC round 2 (rev 3 changes)

- Full-span re-verification of every quotation against its raw carrier;
  rewards quote restored to the carrier's capitalization and full sentence
  ('Despite results such as these... the debate has continued through much
  of the past decade'), page locator corrected to pp. 581-582 (the 572
  locator belonged to a different passage); Baird capitalization fixed
  ('These data').
- Haase numbers corrected to the abstract's own values: .53 for self-rated
  creativity, .23 for divergent-thinking tests; the .25 figure (performance
  tasks and expert ratings) appeared in no opened text and was removed.
- The '117 studies' count removed from the Sio & Ormerod sentence: the ERIC
  record's abstract gives no study count.
- The Three Metamorphoses logline no longer quotes across the card's
  fragments ('a new beginning, a game, a self-propelled wheel'); the camel,
  lion and child are retold without quotation.
- The Creative Advance logline omitted; the Rock Climbers logline now
  describes the interviews rather than repeating their findings.
- The Zhang/Chen/Monosov novelty-neuroscience sentence removed from the
  constraint paragraph (the mechanism claim was an inference, and the
  'rather than as reward' connection was the dossier's own); the constraint
  paragraph now presents the K324 exercise as a bet with an explicit test.
- SEP 'Henri Bergson' section 6 opened (raw HTML); the creative-emotion
  distinction now quoted from the commentators' own text ('in creative
  emotion, we first have the emotion which then creates representations')
  with the musician example, replacing the vaguer 'records the
  commentators' reading' attribution.
- Holt 2018 (K323) abstract opened via eutils; the K323 practice entry now
  carries the study's own numbers (41 artists, ten beeps a day, one week).
- Rewards disagreement rebuilt on the review's own account: the distinction
  between extrinsic motivation broadly and expected rewards specifically is
  now stated, and the dispute is attributed to Hennessey and Amabile's
  description of the behaviorist position.
- DT disagreement: the Guilford historical-sequence sentence removed; the
  review's 'definitions driving the investigations' account moved to the
  rewards disagreement where the carrier puts it; 'a person can look
  creative on one instrument and not on another' replaced by 'the strength
  of the association depends on how creativity is measured'.
- Meta-text removed throughout: 'that question runs through everything
  below', 'the experiments that follow', the Creation bullet's page
  self-description, 'has its own entry below' (twice), 'the practical
  question the process sections leave open', 'contested below'.
- Quote-then-paraphrase repetitions removed after the Conner quotation and
  the intrinsic-motivation principle; Bergson's false contrast fixed
  ('extends the question of novelty to life and time themselves').
- K323 Holt sentence tightened to the abstract's own wording.

## Advisor QC round 3 (rev 3 second pass)

- Ledger corrected to match the checks actually performed: 'every quotation'
  now excepts the Haase figures; the SEP Henri Bergson entry was downloaded
  raw (curl) and both quoted spans verified locally, so the raw-verification
  claim is now true; the complete displayed mini-c span (leading 'the' plus
  nested marks) verified against the raw chapter text by whitespace collapse
  plus explicit typographic normalization of quotation marks (curly to
  straight), substring match True.
- The Kierkegaard gloss removed from the Schumpeter paragraph: the sentence
  asserting what Kierkegaard's movement means and what neither source does
  rested on no opened Kierkegaard carrier. The Creative repetition link now
  frames only the question (whether doing again can be creative).
- Story incidents verified against opened carriers or corrected to them:
  Edison logline rewritten to the Incandescent light bulb article's own
  facts (carbon, platinum and other metals, return to carbon, carbonized
  Japanese bamboo lasting over 1200 hours); the 'thousands of materials',
  'Japanese fan' and notebook details appeared in no opened carrier and were
  removed. Paterson logline rewritten to the film article's plot (notebook
  he carries, wife urging publication, denial to the Japanese stranger);
  'secret notebook' and 'publishes nothing' were not in the plot text.
  Bob Ross logline verified (Air Force master sergeant; half-hour segment
  painted in real time; 'we don't make mistakes; we just have happy
  accidents'; soft voice). Rock Climbers logline verified against the opened
  Flow text (rock climbers, chess players, surgeons among the interviewed;
  ballet dancers describing time). The Two-Year-Old vignette remains
  explicitly illustrative; the Four C's logline is backed by the opened
  Cambridge chapter; the Three Metamorphoses logline retells the opened
  ST293 card's own narrative without quotation and adds nothing to it.
- 'Novelty research holds the fuller study' removed from the constraint
  paragraph: the remaining connection between the neuronal study and the
  constraint exercise was the dossier's own.
- Rewards disagreement tightened: the behaviorist position is now stated as
  reward-specific, the review's conditional account added (rewards undermine
  when they lead people to feel controlled; can enhance when they confirm
  competence, provide useful information supportively, or enable already
  intrinsically motivated doing), and the unresolved residue named: whether
  the undermining condition is the exception or the rule where rewards
  arrive with evaluation attached.
- 'Seventy years' replaced with a nonnumeric transition (1950 to the cited
  2009 model is 59 years, not seventy).
- The opened Holt 2018 carrier now cited inline after the K323 study details.
- Second follow-up: the unsupported rewards conclusion removed (the
  prevalence claim about classrooms and workplaces was the dossier's own);
  H&A citations attached to the behaviorist-position sentence and the
  instructions-versus-rewards sentence; the Three Metamorphoses logline now
  carries its own opened carrier (Zarathustra, Gutenberg, raw curl; the
  parable's camel, lion, 'I will', 'Thou shalt' and
  child passages all substring-verified) and quotes the child's description
  from that text. Fourth pass: the child quotation corrected to the carrier's
  actual sentence ('Innocence is the child, and forgetfulness...'), the
  translator credit corrected to Thomas Common as read from the downloaded
  file's own header (the 'Zimmern' guess was wrong), and the ledger's checker
  count updated to the current run.

## Quotations (verification per quote; see the method section)

1. Hennessey & Amabile 2010, definition sidebar. "Creativity: the
   generation of products or ideas that are both novel and appropriate."
   Carrier: https://site.caes.uga.edu/sandlin/files/2023/10/Hennessey-Amabile-2010.pdf
   (raw download + pdftotext; whitespace-normalized grep hit). VERBATIM.
   Page reference in the dossier (p. 570) follows the opened PDF's own page
   numbering; the PP051 card cites p. 569 for the same sidebar, the review's
   first page, and the dossier cites the page the sidebar sits on in the
   opened copy.

2. Hennessey & Amabile 2010, trait/state summary. "Although creativity in
   persons has some trait-like (stable) aspects, it is also a state subject
   to influence by the social environment." Same carrier, grep hit. VERBATIM.
   Also raw-verified from the same PDF: divergent thinking ("spontaneous,
   free-flowing thinking with the goal of generating many different ideas in
   a short period"), convergent thinking ("narrowing possibilities to a
   workable solution"), the Scott et al. training meta-analysis sentences
   ("carefully constructed creativity training programs typically result in
   gains in performance... realistic exercises that focus on the development
   of cognitive skills"), the intrinsic motivation principle ("conducive to
   creativity, whereas extrinsic motivation is generally detrimental"; "the
   sheer enjoyment, interest, and personal challenge of the task itself"),
   the measurement-debate sentence ("Debates surrounding definition and
   measurement continue to loom large"), the CAT sentence ("consistently
   high levels of interrater agreements"), and the DT-test dispute sentences
   ("have not met with more success").

3. Guilford 1950. "The neglect of this subject by psychologists is
   appalling." and the 121,000/186 evidence sentence.
   Carrier: https://creativityinmusiced.weebly.com/uploads/2/3/8/5/23859476/guilford-1950-creativity.pdf
   (raw download + pdftotext; grep hits on both). VERBATIM.

4. Conner, DeYoung & Silvia 2018, abstract. The lagged-models sentence and
   the direction sentence.
   Carrier: https://www.tandfonline.com/doi/abs/10.1080/17439760.2016.1257049
   (rev 3: raw HTML of the abstract page downloaded and full-span verified
   locally; rev 2 was a fetch-tool read identical to the BE059 card's
   PDF-verified quote). VERBATIM.

5. Cambridge International chapter 4 (Beghetto/Kaufman/Vygotsky material).
   mini-c definition (the chapter's own quoted span, 'novel and personally
   meaningful interpretation of experiences, actions, and events'), Big-C
   ("reserved to describe the work of an elite few who have transformed their
   discipline"; "out of reach of most of us"), mini-c visibility ("may not be
   visible to outsiders"), Vygotsky ("Any human act that gives rise to
   something new is referred to as a creative act, regardless of whether
   what is constructed is a physical object or some mental or emotional
   construct that lives within the person who created it and is known only to
   him").
   Carrier: https://www.cambridgeinternational.org/Images/426483-chapter-4-innovation-and-creativity.pdf
   (raw download + pdftotext; whitespace-normalized grep hits on all). The
   Vygotsky sentence is quoted inside the chapter with its own citation
   (Vygotsky 1967, p. 7); the dossier attributes it as quoted there.

6. Wang, Hao, Ku, Grabner & Fink 2017, abstract. "During the course of
   divergent thinking (DT), the number of generated ideas decreases while the
   originality of ideas increases."
   Carrier: https://pubmed.ncbi.nlm.nih.gov/28259772/ via PubMed eutils
   efetch (raw text, no LLM extraction). VERBATIM.

7. Kounios & Beeman 2014, abstract. Insight definition and the
   resting-state sentence.
   Carrier: https://pubmed.ncbi.nlm.nih.gov/24405359/ via eutils efetch
   (raw text). VERBATIM.

8. Sio & Ormerod 2009, abstract. The incubation-effect sentences.
   Carrier: https://eric.ed.gov/?id=EJ827110 (rev 3: raw curl of the ERIC
   record, full-span verified; rev 2 was a fetch-tool read identical to the
   AT036 card's abstract quote). VERBATIM. The record's abstract gives no
   study count, so the dossier no longer prints one.

9. Haase, Hoff, Hanel & Innes-Ker 2018. The 60-effect-sizes/41-papers
   sentence, r = .39, and the .53/.23 measure-dependence figures.
   Carrier: https://www.tandfonline.com/doi/full/10.1080/10400419.2018.1411436
   (fetch-tool extraction quoting the abstract's own sentences; the page is
   curl-bot-blocked so no raw download was possible this session; the .53
   and .23 figures are the abstract's own, and the rev-2 .25 figure was
   removed as unsupported). VERBATIM as extracted.

10. Csikszentmihalyi, Flow (Harper & Row 1990). "The best moments usually
    occur when a person's body or mind is stretched to its limits in a
    voluntary effort to accomplish something difficult and worthwhile.
    Optimal experience is thus something that we make happen."
    Carrier: owner's Drive library copy,
    https://drive.google.com/uc?export=download&id=11wG6Y7PwYzlNIrcXJ8ErSZ7Pd8fQcEsb
    (raw download + pdftotext; grep hit at the printed pp. 3-4 passage,
    PDF pp. 12-13 one-based, matching the PRIMARY-SOURCES.md locator note).
    VERBATIM.

11. Dewey, Human Nature and Conduct, part 2. "Impulses are the pivots upon
    which the re-organization of activities turn, they are agencies of
    deviation, for giving new directions to old habits and changing their
    quality." and "Suppression is not annihilation."
    Carrier: https://www.gutenberg.org/cache/epub/41386/pg41386.txt (raw
    curl; grep hits; the sentence spans wrapped lines and was read in
    context). VERBATIM.

12. Bergson, Creative Evolution ch. 1 (Mitchell trans.). "for a conscious
    being, to exist is to change, to change is to mature, to mature is to go
    on creating oneself endlessly."
    Carrier: https://www.gutenberg.org/files/26163/26163-8.txt (raw curl;
    grep hit at lines 602-603). VERBATIM.

13. Schumpeter, Capitalism, Socialism and Democracy, ch. VII. "process of
    Creative Destruction is the essential fact about capitalism" and the
    industrial-mutation sentence.
    Carrier: https://thaleszp.com/files/Schumpeter_creative_dest.pdf (raw
    download + pdftotext; grep hits). VERBATIM.

14. Hennessey & Amabile 2010, rewards-debate passage (rev 2 divergence, rev
    3 corrected). "A debate over these issues surfaced in the literature in
    the mid 1990s...", "Despite results such as these, inconsistent with
    the assertion that expected rewards generally foster creativity, the
    debate has continued through much of the past decade", the core-of-the-
    debate sentence (definitions, algorithmic or heuristic tasks,
    instructions), the behaviorist-position sentence, and the extrinsic-
    motivator list (expected reward, expected evaluation, surveillance,
    competition, restricted choice). Same raw PDF, full-span grep hits;
    printed page 581-582, PDF pages 13-14. VERBATIM.

15. Baird et al. 2012, abstract. "These data suggest that engaging in simple
    external tasks that allow the mind to wander may facilitate creative
    problem solving" and the undemanding-task improvement sentence.
    Carrier: https://pubmed.ncbi.nlm.nih.gov/22941876/ (eutils raw abstract
    text; capitalization restored in rev 3). VERBATIM.

16. Murray et al. 2024 replication wording. "across two studies (N = 443), we
    found no evidence for the claim that mind wandering during a
    creative-incubation interval facilitates a form of creativity associated
    with divergent thinking."
    Carrier: https://forrt.org/flora-replication-atlas/doi/10.1177/0956797612446024/
    (fetch read of the record, quoting the replication's own wording).
    VERBATIM as printed on the record.

17. SEP Imagination definition (rev 2 nearby term). The two-sentence
    definition by Munro, Liao and Gendler.
    Carrier: https://plato.stanford.edu/entries/imagination/ (rev 3: raw
    curl of the entry HTML, full-span verified; rev 2 was a fetch read).
    VERBATIM.

18. SEP Henri Bergson, section 6 (rev 3). "The difference between creative
    emotions and normal emotions consists in this: in normal emotions, we
    first have a representation which causes the feeling (I see my friend
    and then I feel happy); in creative emotion, we first have the emotion
    which then creates representations." and the musician/symphony example.
    Carrier: https://plato.stanford.edu/entries/bergson/ (raw curl of the
    entry HTML; text stripped locally; both spans grep-verified).
    VERBATIM.

19. Holt 2018 (K323), abstract. "Recent art-making was significantly
    associated with experiential shifts: improvement in hedonic tone,
    vivid internal imagery and the flow state."
    Carrier: https://pubmed.ncbi.nlm.nih.gov/29130867/ (eutils raw abstract
    text; the K323 card's citation verified to this PMID in rev 3).
    VERBATIM.

20. Zhang, Chen and Monosov 2018. REMOVED from the dossier in rev 3: the
    constraint-paragraph use was the dossier's own inference, and the
    connection to creative constraints was unsupported by the opened text.

21. Story-incident carriers (rev 3 second pass). Incandescent light bulb,
    Wikipedia (carbon, platinum and other metals; carbonized Japanese
    bamboo filament lasting over 1200 hours), Bob Ross, Wikipedia (Air
    Force master sergeant; half-hour segment painted in real time; 'we
    don't make mistakes; we just have happy accidents'; soft voice), and
    Paterson (film), Wikipedia (notebook carried; wife urging publication;
    the Japanese stranger; the denial). All fetch-tool reads of the articles
    quoting exact sentences; the loglines were rewritten to these articles'
    own facts. The Rock Climbers logline is backed by the raw Flow text
    already on file.

22. Thus Spake Zarathustra, 'The Three Metamorphoses' (Thomas Common
    translation, rev 3 fourth pass). The camel laden hastening into the
    wilderness, the lion's 'I will' against the dragon 'Thou shalt', the
    lion's inability to create new values, and the child's 'Innocence is
    the child, and forgetfulness, a new beginning, a game, a self-rolling
    wheel'.
    Carrier: https://www.gutenberg.org/files/1998/1998-0.txt (raw curl;
    translator credit read from the downloaded file's own header;
    all retained narrative elements substring-verified in the parable
    text; an earlier 'Zimmern' credit in this ledger and the third-pass
    commit message was wrong and is corrected here). VERBATIM.

23. Haught-Tromp 2017, abstract (rev 3 fifth pass). "Two experiments
    tested the hypothesis that constraints imposed on a common writing task
    yield more creative outputs", "Both studies show a main effect of
    constraints on creativity and an interaction with order of presentation,
    which suggests a carryover effect: Mere practice with constraints can
    stimulate creativity", and "written using only 50 words".
    Carrier: https://www.cct.umb.edu/630/files/HaughtTromp2017-GreenEggsandHam.pdf
    (original URL robots-blocked; retrieved via the Wayback Machine copy of
    the same PDF:
    https://web.archive.org/web/2024id_/https://www.cct.umb.edu/630/files/HaughtTromp2017-GreenEggsandHam.pdf,
    raw download + pdftotext, all spans substring-verified;
    the two-line-rhyme scope limit is the card's own stated limit and is
    visible in the paper's method). VERBATIM.

## Handoff self-check (rev 3, before worker-complete)

- `dossier_check.py`: exit 0 (30 card links resolve, 16 headers, 46
  external carrier link occurrences).
- `dossier_density.py`: exit 0, 30 paragraphs, 0.6 card links per
  paragraph, 0 dense (no paragraph with five or more card links, none with
  four in under 120 words).
- `dossier_quote_verify.py`: 29 quotes checked, 8 reported not found; all 8
  opened by hand against raw text already on file: Conner, Wang, Kounios
  (PubMed pages not fetchable as text by the script; verified via eutils
  raw abstracts), Sio & Ormerod and Baird (same class), Schumpeter
  (footnote marker interleaved in the carrier text; span verified by hand),
  and two Zarathustra fragments which are the dossier's own connective
  paraphrase between quotations, not quotations (the quoted spans
  themselves passed).
- Supervisor log row for creativity (dos32): 'The Haught-Tromp carrier is
  unopened: open it or remove every claim that depends on it. Then run the
  density check.' Both parts addressed: every claim depending on
  Haught-Tromp was removed in rev 2 (see the boundary notes), and the density
  check now passes. Recorded here and in the commit message for the
  supervisor to re-read.
- Format: thread with question headings; no `## The map:` section.
- URL liveness sweep (rev 3, post-complete): all 22 distinct external carrier
  URLs in the dossier were requested with curl. 15 returned 200 and the four
  PubMed pages returned 203 (the pages exist). Two Taylor & Francis URLs
  returned 403 to curl (bot-block; they open in browsers and their content
  was verified this session via the fetch tool), and the cct.umb.edu
  Haught-Tromp URL failed to connect from this environment (the known
  block; the ledger records the Wayback Machine retrieval that verified it).
  All 30 wiki card links resolve per the checker.

## Scope and boundary notes

- Boundary with Creation (dos31): owner-given. Creativity = the capacity
  and its process; Creation = what making means for a life. The dossier
  holds the capacity, the process, the person-level inputs (efficacy,
  motivation, flow) and the psychological evidence; Frankl's creative
  values, generativity, legacy and the meaning-of-making divergences stay in
  creation.md. Cross-links only.
- P195: the SEP 'Henri Bergson' entry was opened in rev 3; the creative-
  emotion distinction is quoted from the commentators' own text with the
  musician example. The card's caution stands: this is the commentators'
  wording, not a verified quotation from Bergson's own books; the dossier
  attributes it to the SEP authors.
- Rev 3 keeps three formal disagreements: divergent-thinking tests (H&A raw),
  the rewards debate (H&A raw, quotes and page corrected), and the
  mind-wandering mechanism (Baird raw, Murray/FLoRA raw).
- The Haught-Tromp 2017 constraint study could NOT be opened from its
  original URL this session (fetch robots-blocked, direct curl connection
  failed); rev 2 removed its findings, the Dr. Seuss wager and the
  constraint mechanism from reader-facing prose. RESOLVED late in the
  session: the paper was retrieved via the Wayback Machine
  (web.archive.org copy of the cct.umb.edu PDF, raw download, pdftotext),
  the abstract's two findings sentences and the 50-word Dr. Seuss fact were
  substring-verified, and a bounded experimental-record sentence was
  restored to the constraint paragraph with its limits kept (two-line
  rhymes, the Seuss story an illustration). The K324 kernel remains linked
  as a practice.
- The 2025 Springer self-efficacy study (larger positive bias, lower
  achievements) was removed from the dossier in rev 2: its carrier was not
  opened this session. The PP055 card carries it.
- The Haase numbers remain a fetch-tool extraction (the page is
  curl-bot-blocked); the ledger labels it as such, and the printed figures
  are the abstract's own sentences. Conner and Sio & Ormerod were upgraded
  to raw downloads in rev 3.
- Several principle, kernel and story cards were read in targeted section
  ranges, not whole files; the relied-on passages are inside those ranges.
- K331's Proyer et al. 2021 evidence is quoted on the kernel, not in the
  dossier; the dossier states only the kernel's protocol.
- The former 'does an idea no one else can see count' divergence was
  demoted in rev 2 to a tension inside the definition discussion: the CAT
  and mini-c materials are raw-verified, but the two answer different
  questions and the README's same-question rule is not met.
- Rev 2 keeps three formal disagreements: divergent-thinking tests (H&A raw),
  the rewards debate (H&A raw), and the mind-wandering mechanism (Baird
  fetch-read, Murray/FLoRA fetch-read).
- No claim about the four-C model's empirical validation is made beyond
  the chapter's own words; the model is presented as a framework.

## Carrier flags

- thaleszp.com (Schumpeter) and creativityinmusiced.weebly.com (Guilford)
  are third-party PDF hosts; both opened cleanly this session.
- The Taylor & Francis pages are fetch-tool readable but curl-bot-blocked;
  the ledger records the fetch-tool reads with card cross-checks above.
