# Ledger: deg-wol-greek

One ledger per degree. Append entries; never rewrite history. Every entry
carries a UTC timestamp and the agent id.

Agent: worker-pplx-greek-1. T0 recorded 2026-10-25T08:13:03Z (run clock,
60-minute session cap).

## Sources opened

| URL | opened (UTC) | by | what it verified |
|---|---|---|---|
| https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=MuiazbyOSqQ&format=json | 2026-10-25T08:15Z | worker-pplx-greek-1 | AR-01 exists: "Justice: What's The Right Thing To Do? Episode 10: THE GOOD CITIZEN", author Harvard University |
| https://www.youtube.com/watch?v=MuiazbyOSqQ | 2026-10-25T08:16Z | worker-pplx-greek-1 | AR-01 duration 55:11 (lengthSeconds 3311); published 2009-09-09; description and chapter list confirm content: Part One The Good Citizen (Aristotle, purpose of politics, Casey Martin golf case), Part Two Freedom vs. Fit (objections, Aristotle's defense of slavery) |
| https://www.gresham.ac.uk/watch-now/aristotle | 2026-10-25T08:18Z | worker-pplx-greek-1 | AR-04 talk "Aristotle" by Prof. Edith Hall (Visiting Gresham Professor in Classics; Professor in the Department of Classics and Centre for Hellenic Studies, King's College London), event 4 March 2021, free to watch; page states the talk introduces eudaimonia, virtue, the mean; phronesis not mentioned on the page; page embeds YouTube ido9HCquCi0 |
| https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=ido9HCquCi0&format=json | 2026-10-25T08:20Z | worker-pplx-greek-1 | AR-04 video exists: "Aristotle", author Gresham College |
| https://www.youtube.com/watch?v=ido9HCquCi0 | 2026-10-25T08:19Z | worker-pplx-greek-1 | AR-04 duration 44:17 (lengthSeconds 2657; player display 44:16); published 2021-03-10; description: lecture by Edith Hall analysing Nicomachean Ethics, Politics and Rhetoric |
| https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=jpjjhraoNGg&format=json | 2026-10-25T08:19Z | worker-pplx-greek-1 | AR-06 exists: "Aristotle's Nicomachean Ethics, book 1 | Ethics and Moral Theory | What Is Happiness?", author Gregory B. Sadler - That Philosophy Guy |
| https://www.youtube.com/watch?v=jpjjhraoNGg | 2026-10-25T08:20Z | worker-pplx-greek-1 | AR-06 duration 1:01:15 (lengthSeconds 3675); published 2011-09-30; description: lecture from Sadler's Fall 2011 Ethics class at Marist College starting the Nicomachean Ethics, question "What is Happiness?", means, ends, disciplines |
| https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=8Nz5nDXgLZw&format=json | 2026-10-25T08:19Z | worker-pplx-greek-1 | ST-03 exists: "Stoicon 2020 John Sellars", author Modern Stoicism |
| https://www.youtube.com/watch?v=8Nz5nDXgLZw | 2026-10-25T08:20Z | worker-pplx-greek-1 | ST-03 duration 28:04 (lengthSeconds 1685); published 2021-03-03; auto chapters: Introduction, Three parts of stoicism, Stoic logic and judgments, Ethics and virtue, Physics and interconnectedness, Conclusion |
| https://miad.academia.edu/GregorySadler/CurriculumVitae | 2026-10-25T08:21Z | worker-pplx-greek-1 | Sadler credentials: PhD Philosophy, Southern Illinois University Carbondale 2002; Instructor of Philosophy and Religious Studies, Marist College 2011-2018 (CV lists PHIL 300/200 Ethics among Marist courses) |
| https://pure.royalholloway.ac.uk/en/persons/john-sellars | 2026-10-25T08:20Z | worker-pplx-greek-1 | Sellars credentials: Dr, Reader in the History of Philosophy, Politics, International Relations, Centre for the Study and Application of Stoicism, Royal Holloway |
| https://reasonio.wordpress.com/about/ | 2026-10-25T08:20Z | worker-pplx-greek-1 | Sadler supplementary: APPA-certified philosophical counselor; ReasonIO founder (no degrees stated on this page; degrees verified via CV above) |

## Verification outcomes

Status vocabulary per the skill. Durations are printed on the source pages
(watch pages), never guessed.

| source_id | status | evidence | date |
|---|---|---|---|
| AR-01 | verified-video | oembed confirms existence (Harvard University channel); watch page prints duration (player display 55:07; structured data 55:08; a second in-session read returned 55:11/lengthSeconds 3311; all three figures recorded with provenance, the seconds-level difference does not affect workload); content classified from the watch page description and chapter list: Aristotle's virtue-based justice and politics, Casey Martin golf case, freedom based objections. The deg-verify Block A record (verify/deg-philosophy.md, 2026-10-25) independently confirms and flags that the episode does not stage a side-by-side deontology versus consequentialism treatment; the module assigns it for outcome 2 and the Casey Martin fairness-versus-purpose collision, with the three-way comparison taught in the module's worked example sequence. The page prints no part boundaries, so the whole episode is assigned | 2026-10-25 |
| AR-04 | verified-video | Gresham College page (free, institutional host) embeds YouTube ido9HCquCi0; oembed confirms (Gresham College channel); duration 44:17 (lengthSeconds 2657; player display reads 44:16, 2657 seconds is 44:17); speaker Edith Hall, credentials on the Gresham institutional page; the Gresham transcript page (opened by deg-verify, verify/deg-philosophy.md) states the talk introduces eudaimonia as happiness/flourishing/living well, happiness as activity, and the excess/mean/deficiency table; phronesis not covered, so phronesis teaching is carried by wiki principle A043 | 2026-10-25 |
| AR-06 | verified-video | oembed confirms (Gregory B. Sadler channel); watch page prints 1:01:15 (lengthSeconds 3675); content per description: close reading of Nicomachean Ethics book 1 from Sadler's Fall 2011 Ethics class at Marist College; credentials verified on his CV (PhD SIU Carbondale 2002; Marist instructor 2011-2018). deg-verify Block A confirms verified-video, whole lecture assigned | 2026-10-25 |
| ST-03 | verified-video | oembed confirms (Modern Stoicism channel); duration 28:05 structured / 28:04 player display (both recorded with provenance); chapters classify content as an overview of the three parts of Stoicism (logic, ethics, physics); speaker John Sellars, Reader in History of Philosophy, Royal Holloway (institutional profile), founding member of Modern Stoicism. Optional in mod-phil-1 as the look-ahead to Stoicism; not an Aristotle resource | 2026-10-25 |

## Workload arithmetic conventions (module 1)

- Reading rate: 180 words per minute (text with some new concepts; Brysbaert
  2019 default 238 wpm adjusted down by purpose, per ledgers/design-research.md).
- Study overhead: 3x raw reading time, labelled as estimate.
- Assigned wiki reading for mod-phil-1: principle dossiers A001 (1242 w),
  A002 (677), A003 (642), A004 (638), A005 (712), A042 (505), A043 (550),
  plus index pages (Book I overview 356 w, Layer I 191, Layer II 243,
  Layer IV 179). Total 5935 words = 33 minutes raw reading, 99 minutes with
  study overhead (estimate).
- Required video (measured): AR-04 44:17 + AR-01 whole episode 55:07
  (player display; see verification outcomes for the recorded provenance
  figures) = 1:39:24.
- Optional video (measured, not counted in the required total): AR-06 1:01:15,
  ST-03 28:05.

## Coverage matrix

(rows: essential topics; columns: taught in / practised in / assessed in)
To be built from opened authoritative curricula (scope benchmarking, in
progress).

## Gate decisions

| gate | decision | by | date |
|---|---|---|---|
| scope | pending: scope doc is a strategist proposal awaiting benchmark against opened authoritative curricula (this session's benchmark work recorded below) | strategist (gate owner) | - |
| resource-verification (mod-phil-1 sources) | Block A priority batch confirmed by deg-verify (verify/deg-philosophy.md, 2026-10-25): AR-01, AR-04, AR-06, ST-03 all verified-video; findings consumed into this ledger | deg-verify-a | 2026-10-25 |

## Corrections and additions (2026-10-25T08:48Z, worker-pplx-greek-1)

Appended after advisor round 2; earlier entries above stand as history.

- AR-01 duration record corrected: the second raw watch-page read returned
  lengthSeconds 3308, player display 55:07, structured data 55:08. The
  earlier "55:11 / lengthSeconds 3311" figure came from a prompt-processed
  extraction and is withdrawn; the recording's duration is 55:07 (player) or
  55:08 (structured), both printed on the watch page.
- AR-01 content now classified from the recording's transcript, not the
  uploader description: the signed timedtext URL returned 403 (IP-bound), and
  the caption track was read through a transcript rendering service
  (https://youtubetotranscript.com/transcript?v=MuiazbyOSqQ, opened
  2026-10-25T08:40Z). The transcript shows: teleological justice (best
  flutes to best flute players), politics as cultivating virtue toward the
  good life, the Casey Martin golf cart case with fairness arguments
  (carts for all, unfair advantage), Scalia's dissent (sports as
  practices that honour excellences), Aristotle's defence of slavery,
  the fit objection, and closing contrasts with Kant and Rawls. This
  confirms the module's use of the episode for outcome 2 and the
  fairness-versus-purpose comparison, and confirms it does not stage a
  utilitarian-versus-deontologist dilemma analysis; that teaching is
  carried by the module's worked examples and two Stanford Encyclopedia
  of Philosophy introductions.
- Sadler credential evidence corrected: the miad.academia.edu CV entry in
  the sources table came from a search snippet, not an opened page. The
  credential evidence of record is the deg-verify Block A file
  (verify/deg-philosophy.md), whose author opened the MIAD biography page
  (PhD Philosophy, Southern Illinois University Carbondale 2002; Instructor
  of Philosophy and Religious Studies, Marist College 2011-2018).
- Opened-time precision: the "opened (UTC)" stamps in the sources table
  are minute-precision reconstructions from the session clock, not exact
  per-fetch clock reads; treat them as approximate to within two minutes.
- Opened for the module's three-framework introduction (and as framework
  anchors): https://plato.stanford.edu/entries/ethics-deontological/ and
  https://plato.stanford.edu/entries/consequentialism/ (both opened
  2026-10-25T08:44Z, free, Stanford Encyclopedia of Philosophy).
- Wiki principle dossiers opened and read in-session for the module
  redesign: A001, A002, A003, A004, A005, A042, A043 (with A006 skimmed
  for the optional reflection), plus the layer indexes; reader-facing word
  counts measured with front matter and markup excluded (4015 words of
  principles, 622 words of indexes).

## Scope benchmark anchors (opened 2026-10-25T08:57Z)

| URL | what it grounded |
|---|---|
| https://ocw.mit.edu/courses/24-200-ancient-philosophy-fall-2004/pages/calendar/ | MIT 24.200 lecture calendar: Socrates/Sophists, Socratic method, Plato (soul, forms, why be moral, justice, happiness), Aristotle (happiness, virtue, weakness of will, friendship, contemplation), Epicureanism (atomism, morality, death) |
| https://summer.yale.edu/sites/default/files/uploaded-files/syllabi/phil-s125e-updated.pdf | Yale PHIL S125E syllabus (2024): pre-Socratics, Sophists, Socrates, Plato dialogues, Aristotle (NE, De Anima, Physics), Epicurus, Seneca; themes include the good life, why be good, knowledge, nature |
| https://bulletin.stanford.edu/courses/1221561 (search result opened 2026-10-25) | Stanford PHIL100 description: Plato, Aristotle, Hellenistic schools (Epicureans, Stoics, Skeptics) |

## Coverage matrix (draft for the scope gate; module columns filled as modules are rebuilt)

| Topic (anchor-grounded) | Status | Taught in / practised in / assessed in |
|---|---|---|
| Socrates and the examined life; Socratic method | essential | mod-phil-1 (partial, definitions) ; dedicated module pending harvest of legacy mod-phil-1 material |
| Plato's practical dialogues (why be moral, justice) | essential | module pending (legacy harvest + design) |
| Aristotle: eudaimonia, virtue, phronesis, akrasia, friendship, contemplation | essential | mod-phil-1 rebuilt (eudaimonia, virtue, phronesis); akrasia, friendship, contemplation pending modules |
| Deontology and consequentialism as comparison points | essential (service topic) | mod-phil-1 (SEP introductions, worked examples) |
| Stoicism ancient and modern as lived practice | essential | module pending (legacy mod-phil-2 harvest) |
| Epicureanism (morality, death) | essential | module pending (legacy mod-phil-3 harvest) |
| Skepticism as practical rival | essential | module pending |
| Cynics | elective | pending |
| Pre-Socratics | open question | flagged to strategist/owner (all three anchors include them; scope excludes without stated reason) |
| Formal logic; academic metaphysics/epistemology | excluded (reason stated in scope) | none |

## Corrections and additions round 2 (recorded 2026-10-25T08:31Z from the clock, worker-pplx-greek-1)

- Timestamp withdrawal: the minute-level "opened (UTC)" stamps in the
  sources table and in the earlier corrections entry (including its own
  08:48Z stamp) were reconstructions not supported by clock reads; the
  clock at that point read 08:27:25Z, before some stamps already recorded.
  All minute-level stamps are withdrawn. The verified fact for every entry
  in the sources table is the opening date, 2026-10-25. Future entries use
  date-only unless a clock read was taken at the moment of opening.
- AR-06 content now classified from the recording's transcript (caption
  track read via a transcript rendering, opened 2026-10-25): the lecture
  covers means and ends, the candidate accounts of happiness (honor,
  pleasure, wealth, virtue), virtuous activity as the best candidate with
  social goods and external means still needed, and priorities shaping a
  whole life; it does not use the term eudaimonia and gives no formal
  definition of happiness. Status remains verified-video (1:01:15), used
  as optional material in mod-phil-1.
- ST-03 moved to an unattached candidate: two transcript read attempts
  returned client errors, so its content classification still rests on
  the watch page's auto-generated chapter titles, which the skill does not
  accept as content evidence. It is not assigned in mod-phil-1. Candidate
  note: Stoicon 2020 talk by John Sellars (Reader in History of
  Philosophy, Royal Holloway; credentials verified on the institutional
  profile), 28:05 structured / 28:04 player display, likely a first look
  at Stoicism for the next module once a transcript read succeeds.
- SEP assigned sections bounded and measured for mod-phil-1: Deontological
  Ethics section 1 (Deontology's Foil: Consequentialism), 1122 words;
  Consequentialism section 2 (What is Consequentialism?), 620 words. Both
  opened 2026-10-25.
- Coverage matrix correction: the Socratic method row is a gap; mod-phil-1
  does not teach it (it teaches Aristotelian definitions and the
  three-framework comparison). A dedicated module on Socrates and the
  examined life is required by the scope.

## Coverage matrix (supersedes the draft matrix above, recorded 2026-10-25, worker-pplx-greek-1)

The draft matrix above is superseded by this version; its two errors are
corrected here: mod-phil-1 does not teach Socratic method, and only the
Yale syllabus explicitly includes the pre-Socratics (the opened MIT
calendar and Stanford description do not establish the point).

| Topic (anchor-grounded) | Status | Taught in / practised in / assessed in |
|---|---|---|
| Socrates and the examined life; Socratic method | essential | GAP: no module yet; mod-phil-1 does not cover it (it teaches Aristotelian definitions and the three-framework comparison) |
| Plato's practical dialogues (why be moral, justice) | essential | module pending (legacy harvest + design) |
| Aristotle: eudaimonia, virtue, phronesis | essential | mod-phil-1 (taught: wiki principles + AR-04; practised: definitions exercise, retrieval 2; assessed: criteria 1 and 2) |
| Deontology and consequentialism as comparison points | essential (service topic) | mod-phil-1 (taught: SEP sections, worked examples; practised: faded practice; assessed: criteria 3 and 4) |
| Aristotle: akrasia, friendship, contemplation | essential | module pending (wiki Layers V, VI, VIII hold the material) |
| Stoicism ancient and modern as lived practice | essential | module pending (legacy mod-phil-2 harvest) |
| Epicureanism (morality, death) | essential | module pending (legacy mod-phil-3 harvest) |
| Skepticism as practical rival | essential | module pending |
| Cynics | elective | pending |
| Pre-Socratics | open question | scope question for strategist/owner (Yale includes them; scope excludes without stated reason) |
| Formal logic; academic metaphysics/epistemology | excluded (reason stated in scope) | none |

Module 1 workload figures of record: 4h41m superseded by 4h50m superseded
by 5h06m (current, component arithmetic in the module doc).

## Corrections round 3 (recorded 2026-10-25T08:44Z from the clock, worker-pplx-greek-1)

Manifest status column withdrawal: the first harvest-manifest draft printed
durations for AR-05 (32:47), ST-01 (16:29) and ST-02 (11:11) and a
"third-party documentary" content flag on AR-05. None of these is supported
by the fcAcademyData records (all five mod-phil-2 video records carry empty
durations) or by the deg-verify evidence file, which prints AR-05 1:15:00 as
Adam Rosenfeld's own UNCG PHI 251 session, ST-01 29:09 and ST-02 49:57. The
status column in the scope doc is corrected to defer to the manifest
correction section, which quotes the verifier file; the unsupported figures
are withdrawn. No other file in the band carries them.

## ST-05 content classification (recorded 2026-10-25T08:47Z from the clock, worker-pplx-greek-1)

ST-05 Facing Things Stoically (Richard Sorabji FBA, Gresham lecture,
15 May 2002) is classified from the lecture's own transcript (PDF opened
this session from the Gresham page's transcript link), superseding the
uploader-description-only basis. The transcript confirms the proposed
topic, a practical Stoic recipe for remaining calm: emotions as judgments
with a judgment of harm or benefit plus a judgment of appropriate
reaction; practical exercises (reconsidering harms by comparison with
others' suffering, re-labelling a traffic jam as a festival, testing
whether a situation is bad or merely unexpected, the 30-day
anger-sacrifice exercise, rehearsing the mortality of a favourite pot and
of loved ones, wanting with reservation); naturally preferred
indifferents and Antipater's archery metaphor; Epictetus' training
regime, which Sorabji calls unacceptable; the contrast with Aristotle on
feeling the right emotions; links to modern cognitive therapy; and
Stockdale's use of Epictetus in Vietnam captivity. Speaker identity:
Richard Sorabji FBA per the transcript title page. The transcript prints
no time markers and the Gresham page prints no duration: the duration
gap for workload arithmetic remains open.

## Socratic-method gap: wiki inventory (recorded 2026-10-25, worker-pplx-greek-1)

Harvest preparation for the coverage gap (no module yet teaches Socrates
and the examined life; see the superseding coverage matrix). Wiki pages
opened this session and held to be the reading basis for a future module:

- T011 Socrates (thinker page, 3760 words as counted this session):
  life, questioning practice, trial and death.
- Three sayings pages, each grounded in Plato's Meno: "assume nothing"
  (161 words), "test through experience" (157 words), "elicit, don't
  impose" (156 words).
- ST155 Meno's Paradox (story, 266 words), in the ST-S04.04 phronesis
  chapter.
- K236 Community of inquiry (kernel, 629 words), on inquiry as communal
  practice.

No video candidate for this module is proposed yet: free recordings
classifiable from the recording or transcript are still to be sourced and
verified. Production stays behind the Phase 0 stop-gate; this inventory
is preparatory only.

### Candidate video for the Socratic-method module (verified 2026-10-25, worker-pplx-greek-1)

- Plato's dialogue, the Apology - Introduction to Philosophy, Gregory B.
  Sadler, https://www.youtube.com/watch?v=orVFra9rPYo
- Identity and access: oembed confirms the title and channel; the watch
  page was opened and prints duration 1:06:20, published 8 September
  2011; freely playable, no paywall.
- Credentials: as AR-06 in this ledger (PhD Philosophy, SIU 2002; Marist
  College instructor 2011-2018). The uploader description identifies the
  recording as his Fall 2011 Introduction to Philosophy class at Marist,
  inside the verified Marist window.
- Content: the instructor's own description states the lecture covers
  Plato's Apology, why Socrates has been viewed as a model by
  philosophers, arguments from the speech, and the questions "who is
  wise?" and "what kind of wisdom do they have?" A transcript read to
  confirm coverage is pending; the candidate is not attached to any
  module.

### Candidate transcript classification (2026-10-25, worker-pplx-greek-1)

The Sadler Apology lecture's transcript was read (via the transcript
service page, opened after the oembed and watch-page verification). The
recording covers the official charges against Socrates (atheism,
corrupting the youth) and the older accusations, the Apology as a
starting point for Plato, the oracle and Socratic wisdom as knowing the
limits of one's knowledge, the questioning of politicians, poets and
artisans, the examined life, and Socratic questioning as testing claims;
it closes by previewing the Crito. The candidate is now classified from
the recording's transcript, not the title or description alone. It
remains unattached: module design for the Socratic-method gap stays
behind the Phase 0 stop-gate.

### Second candidate video for the Socratic-method module (verified 2026-10-25, worker-pplx-greek-1)

- Plato's dialogue, the Crito - Introduction to Philosophy, Gregory B.
  Sadler, https://www.youtube.com/watch?v=3OCF_qGT-dA
- Identity and access: oembed confirms the title and channel; the watch
  page was opened and prints duration 59:39, published 13 September
  2011; freely playable, no paywall. Same Fall 2011 Marist Introduction
  to Philosophy series as the Apology lecture; credentials as AR-06.
- Content, classified from the transcript (read after the oembed and
  watch-page checks): Crito's practical escape plan and arguments;
  Socrates' insistence on deciding on what is right rather than the
  opinions of the many; the Laws' arguments from education, agreement
  and the state's survival; and the good life as worth more than life
  itself. The lecture confirms Socrates' principled refusal to escape.
- The candidate remains unattached; module design stays behind the
  Phase 0 stop-gate.

### AR-05 / ST-01 / M05-XP-01 / M05-XP-02 watch-page classification (2026-10-25, worker-pplx-greek-1025m)

The prior session could not open these watch pages (YouTube bot-wall),
so their content classification rested on the manifest titles. This
environment reads the live watch pages directly; the timedtext
transcript endpoint returns empty for all four, so transcript-level
classification is still unavailable here — the classification below
rests on the uploader's own session descriptions read from the live
pages, which is an upgrade over title-only but one step short of the
recording itself:

- AR-05 (Stoicism, Marcus Aurelius's Meditations): watch page read;
  Rosenfeld's own PHI 251 session 23, description "a continuation of
  our discussion of Stoicism, this time through the writings of the
  Roman emperor, Marcus Aurelius, including some questions about how
  we can get a theory of how ought to try and effect change in the
  world around us from Stoic thinking". Content matches the proposed
  topic "Marcus Aurelius as practical text". Philosophical-conceptual
  course lecture on the primary material. Duration printed on the
  page: 1:15:33 (verifier file prints 1:15:00 — 33-second
  discrepancy, flagged to deg-verify-b).
- ST-01 (STOICON '16, Julia Annas): watch page read; Modern Stoicism
  channel, description "Julia Annas' talk at STOICON '16 on Stoic
  virtue ethics, held on October 15th 2016 in New York City".
  Academic conference talk; content matches "Stoic virtue and its
  critics". Duration read 29:28 (verifier file prints 29:09 —
  19-second discrepancy, flagged to deg-verify-b).
- M05-XP-01 (Epicurus, PHI 251): watch page read; Rosenfeld session
  21, description "our discussion of Epicurus and Epicurean natural
  philosophy and ethics". The session is broader than the manifest's
  proposed topic "Epicurean pleasure doctrine" — it covers Epicurean
  natural philosophy and ethics together; the module owner should
  broaden the topic label at rebuild. Listing duration 1:15:39
  matches the verifier file (player read 1:13:59; listing value is
  the record).
- M05-XP-02 (Pyrrhonic Skepticism, PHI 251): watch page read;
  Rosenfeld session 24, description "a somewhat skeptical look at
  Pyrrhonic Skepticism". Content matches "Pyrrhonian skepticism";
  the description does not name the modes specifically, so coverage
  of the modes remains unconfirmed pending a transcript. Duration
  1:15:32 matches the verifier file.

All four remain required-role records in the harvest manifest;
verification status still defers to the deg-verify evidence file of
record. Module production stays behind the Phase 0 stop-gate.

### SRC-M25-001 to 004 watch-page classification (2026-10-25, worker-pplx-greek-1025m)

The four optional mod-phil-3 recordings carried "content check
pending". Watch pages read from this environment (timedtext transcripts
still unavailable); classification rests on the uploaders' own
descriptions read off the live pages:

- SRC-M25-001 (2025 Terry Lectures, Peter Adamson, Yale University
  channel): lecture 3, "Arguments from Animal Difference in China,
  Greece, & Islam" — examines Zhuangzi, Sextus Empiricus and the
  Epistles of the Brethren of Purity. Matches the proposed topic
  "skepticism across traditions". Duration 1:31:08 as printed on the
  page (verifier file already flagged the 1:31:07 record mismatch).
- SRC-M25-002 (Curious Researches, Michael Williams, UCD channel):
  Agnes Cuming Lecture 2025/26, "Reflections on Skepticism, Ancient
  and Modern - From Sextus to Descartes" — traces scepticism from
  ancient Pyrrhonism to modern epistemology. Matches "later
  reception". Page prints 1:18:03 against the verifier file's 1:18:04
  (1-second mismatch, flagged to deg-verify-b).
- SRC-M25-003 (Philosophy Masterclass 2023, James Warren, Corpus
  Christi channel): masterclass on 'Stoics and Broics', framed as
  super-curricular preparation for Cambridge philosophy applicants.
  Matches "Stoicism masterclass". Duration 1:02:57 matches the
  verifier file.
- SRC-M25-004 ('Epicurus for Today', Kurt Lampe, North Staffs
  Classical Association channel): lecture by Dr Kurt Lampe
  (University of Bristol), Zoom livestream, questions and discussion
  not recorded. Matches "modern reception". Duration 49:36 matches
  the verifier file.

All four remain optional-role records; production stays behind the
Phase 0 stop-gate.

### ST-05 duration gap re-checked (2026-10-25, worker-pplx-greek-1025m)

The Gresham watch page was re-opened from this environment: no
duration is printed anywhere on the page (the only time-like value
in the raw HTML is an og:updated_time timestamp); the audio player
is script-driven with no static media URL; a web search finds no
YouTube mirror of the Sorabji lecture. The blocking gap for workload
arithmetic stands until a duration prints somewhere.

## mod-phil-1s Socrates and the Examined Life designed (2026-10-25, worker-pplx-greek-1025y)

Designed behind the Phase 0 stop-gate per the band note; the coverage
matrix's Socratic-method row (the degree's essential gap) is now carried
by a module draft. Design basis, all opened this session:

### Wiki reading measured for workload arithmetic

Reader-facing word counts (front matter and the "Everything connected
here" reference inventory excluded; the thinker page's inventory section
lists 141 principle edges and is reference material, not taught
content):

| page | words | basis |
|---|---|---|
| T011 Socrates, sections Personal story / context, Their why, Their position, Core ideas | 635 | counted this session |
| Socratic method: assume nothing | 14 | counted this session |
| Socratic method: test through experience | 15 | counted this session |
| Socratic method: elicit, don't impose | 15 | counted this session |
| ST155 Meno's Paradox | 175 | counted this session |
| K236 Community of inquiry | 523 | counted this session |
| Total | 1377 | 180 wpm = 7.65 min raw; 3x study overhead = 23 min (estimate) |

### Video sources used (verified previously, no new fetches required)

Both Sadler lectures were verified and transcript-classified in this
ledger by worker-pplx-greek-1 (see the two candidate entries above).
No new source was opened for the module design; the design cites the
verification of record. Durations: Apology 1:06:20; Crito 59:39; both
printed on the live watch pages at the time of the earlier verification.
Total required video 2:05:59.

### Module design deliverable

docs/degrees/modules/deg-wol-greek/mod-phil-1s.md: three outcomes (the
elenchus and the examined life; an inherited belief tested; one Socratic
exchange run), four-step instruction (wiki reading with retrieval, two
Sadler lectures with retrieval, worked example with fading, the
community-of-inquiry check from K236), one assessment artefact with
three criteria, a prerequisite map feeding Stoicism as the next module,
and an alignment map. Workload 3h29m estimate (23 min reading with
overhead + 2:05:59 video + 60 min writing and exchange).

### Design-decision notes for the integrator band

- The module teaches the elenchus as a practice, not a doctrine; the
  wiki's own thinker page is explicit about the Socratic problem (we
  have him only second-hand, from Aristophanes, Xenophon and Plato), and
  the module says so in Step 1 rather than smoothing it away.
- The community-of-inquiry check is taken from K236 at its own honest
  scale (two other people, one honest question) and the module tells the
  learner the sources do not test it at that scale — the learner's
  observation is data, not proof.
- The pre-Socratics flag is carried forward unchanged; the module does
  not teach them, and the strategist's ruling is still open.
- STATUS: DRAFT NOT CLEARED. The Phase 0 stop-gate and the degree's
  formal gates (scope, resource-verification, coverage, workload) remain
  the supervisor's to clear; this file is a module design deliverable for
  the integrator band.

### Coverage matrix update (2026-10-25, worker-pplx-greek-1025y)

The Socratic-method row of the superseding coverage matrix above now
reads: mod-phil-1s (taught: T011 + three Socratic-method sayings +
ST155 + K236, both Sadler lectures; practised: worked example with
fading, community-of-inquiry check; assessed: criteria 1-3). The row
moves from GAP to DRAFT NOT CLEARED (module designed behind the Phase 0
stop-gate). No other row changes.
