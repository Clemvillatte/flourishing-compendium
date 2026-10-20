# Stories ledger (storyteller work)

Claim-to-passage evidence for new story pages. Each row records what was opened,
what was quoted, and what each claim rests on. Follows the band ledger convention.

## ST337 — Su Shi Walks Through the Rain

- Opened: https://en.wikipedia.org/wiki/Su_Shi (fetched page + raw wikitext via
  `action=raw`; the raw wikitext is the authority for the poem wording).
- Poem: "Settling Wind Waves (Ding feng-bo)" 1082, Stephen Owen translation
  (An Anthology of Chinese Literature, Norton 1996) as displayed on the page;
  the blockquote was verified character-for-character against the raw wikitext
  (lines 158–180 of the source).
- Facts: 1079 Crow Terrace Poetry Trial; first exile 1080 to Huangzhou, nominal
  title, no stipend; small residence built with a friend's help in 1081; lived
  at the Dongpo farm, took the pseudonym from it; best poems of the exile
  period; recalled 1086. All from the same wikitext (prose section).
- NOT claimed (removed in advisor QC round 1): trial fine amounts, Sand Lake
  walk preface details, "known by heart" reception claims, psychological
  transformation claims. The poem's scene is presented as the poem's scene.
- Intentional link removal: [[Post-traumatic growth]] dropped from Resonates
  per advisor QC round 1 (loose construct-level claim, not grounded in the
  opened sources). Against the pre-repair baseline d5d005fd the file FAILs on
  this one removal only (w1e namespace precedent for documented intentional
  removals); ST338-ST341 pass against the same baseline.

## ST338 — Xu You Refuses the Empire

- Opened: https://ctext.org/zhuangzi/enjoyment-in-untroubled-ease (Legge).
- Blockquote: Yao's offer and Xu You's refusal, verbatim from the opened page.
- Framing: labelled a tale from the Zhuangzi ch. 1, not biography.
- Removed in QC round 1: "biggest prize ever offered", reception claims,
  the muddled torch/rain comparison, the closing overreach beyond the kitchen
  analogy.

## ST339 — Jigoro Kano Turns the Push

- Opened: https://en.wikipedia.org/wiki/Kan%C5%8D_Jigor%C5%8D — fetched twice
  with extraction prompts (conflicting results), then VERIFIED against the raw
  wikitext (action=raw, kano_raw.txt): all quotes and facts below confirmed
  character-for-character in the raw text (lines 85, 88, 189, 198, 220, 241,
  243, 290). The practice-passage excerpt from the first fetch was NOT found in
  the raw text verification path and was not used.
- Quotes used (verified verbatim on the page): Nakai Baisei demonstration
  sentence; Kodokan founding sentence (May or June 1882, Eishō-ji, twelve
  mats, handful of students, Iikubo teaching three days a week); "A main
  feature of the art is the application of the principles of non-resistance
  and taking advantage of the opponent's loss of equilibrium..."; "the main
  principle of judo involved gaining victory by yielding to strength" (raw
  wikitext: the theme of the 1888 Kanō-Lindsay lecture to the Asiatic Society
  of Japan — the story now attributes it to the lecture); "When yielding is
  the highest efficient use of energy, then yielding is judo" (capital W
  preserved; raw wikitext: "as Kanō himself put it to a reporter in 1938",
  Japan Times 17 May 1938 — the 1938 context is now in the story);
  "Maximum Efficiency in Use of Mind and Body" principle framing.
- Removed in QC round 1: push/pull choreography paragraph (unverified),
  "softer art kept winning" claim, "cramped ten-mat rooms" plural, literal
  "thrown around" reading of the bullying, "It is the man" split-contrast
  closer. Fukuda's ten-mat room is single and verified.

## ST340 — Fukuoka Learns to Do Nothing

- Opened: https://en.wikipedia.org/wiki/Masanobu_Fukuoka (fetched + raw
  wikitext), https://grist.org/article/masanobu-fukuoka-1913-2008/,
  https://en.wikiquote.org/wiki/Masanobu_Fukuoka.
- Quotes: orchard-failure passage and abandonment conclusion (Grist, verbatim);
  "How about not doing this" passage (Grist, verbatim); "The ultimate goal of
  farming..." (Wikiquote secondary carrier, cited there to One-Straw
  Revolution ch. 3, p. 119 — disclosed as such in the story).
- Facts (Wikipedia, incl. raw wikitext): Yokohama customs post, 1937
  pneumonia and spiritual experience leading him to doubt modern agricultural
  science, 1938 citrus experiments, 1947 no-till rice and barley success,
  One-Straw Revolution 1975 / English 1978, four principles of natural
  farming, shizen nōhō.
- Removed in QC round 1: clover detail (unverified), rice/barley rotation
  initially unverified then re-verified via raw wikitext ("using no-till
  farming methods to raise rice and barley", 1947), inner-experience
  narration, "most farmers would consider insane", "became a slogan",
  "most quoted line".

## ST341 — I, Pencil

- Opened: https://www.econlib.org/library/Essays/rdPncl1.html (full essay).
- Quotes (verbatim from the opened text): opening line; "not a single person
  on the face of this earth knows how to make me"; "millions of human beings
  have had a hand in my creation, no one of whom even knows more than a very
  few of the others"; "there isn't a single person in all these millions...
  who contributes more than a tiny, infinitesimal bit of know-how";
  "aware of the miraculousness which I symbolize, you can help save the
  freedom mankind is so unhappily losing" (Read's political purpose,
  disclosed in the story).
- Corrections in QC round 1: "no one made it" / "no blueprint" claims
  replaced with the essay's actual dispersed-knowledge claim; Chesterton
  line is near the essay's beginning (not the close) and is no longer cited
  as a closer; the Daoist pairing is labelled the compendium's cross-tradition
  analogy.

## Validator change (supervisor maintenance — REVERTED in QC round 3)

A structural-page exemption was added to enrich_validate.py (pure tables of
contents waive the prose/Sources bar) and then REVERTED in advisor QC round 3:
zero counted prose does not establish a pure ToC (prose_text also excludes
bullets and blockquotes), the tests did not cover that distinction, and the
detour was costing storytelling effort. The Stories book Contents file
(content/structure/ST — Stories of Genuine Flourishing.md) will therefore
FAIL validation with structural false positives ("prose too short: 0",
"## Sources has no http(s) URL") whenever a story link is added to it —
treat those two errors on that file as known false positives, not defects.
enrich_save.sh now also stages sources/ (band ledgers live there and were
previously pushed only by ad-hoc git add) — KEPT, verified on origin/main.

## Process notes

- Prompted LLM extractions of web pages proved unreliable twice (a fabricated
  Su Shi poem variant; conflicting Kanō passages). Rule followed: for any
  disputed wording, verify against the raw page source (wikitext via
  action=raw) or the plain full text before quoting.
- git push is blocked from this sandbox; scripts/api_push.py is the reliable
  push route (token read from the origin remote URL per that script's design).

## QC round 2 additions

- Kanō material now verified against the raw wikitext (see above), not
  extraction-prompt summaries. Two attribution corrections landed in the
  story: the yielding-to-strength line is the theme of the 1888 lecture, and
  the "When yielding" sentence was said to a reporter in 1938.
- I, Pencil read in full without an extraction prompt (fetched
  2026-10-20): the dispersed-knowledge quotes, the "absence of a master mind"
  passage, the political purpose sentence, and the capital-T "There isn't"
  all confirmed against the complete text; the Chesterton line sits near the
  essay's opening.
- Verification classes used across this batch: (1) raw-text verification
  (Su Shi poem via wikitext; Kanō quotes via wikitext; Fukuoka rice-barley
  via wikitext), (2) verbatim quotes from opened web pages (ctext, Econlib,
  Grist, Wikiquote — the last is a disclosed secondary carrier), (3) facts
  from opened encyclopedic pages. No claim in the stories rests on a
  prompted extraction alone.

## ST342 — The Wild Boars Sit Still (Buddhism batch)

- Opened: https://www.vox.com/2018/7/9/17548512/thai-cave-rescue-soccer-boys-meditation-buddhism
  (Vox, fetched with extraction prompt; quotes verified verbatim against the
  returned page content) and
  https://www.buddhistdoor.net/news/amid-relief-over-thai-cave-rescue-reports-suggest-buddhist-meditation-helped-trapped-boys-survive-their-ordeal/
  (Buddhistdoor Global, fetched with extraction prompt, quotes verbatim).
- Quotes used: government spokesperson ("by meditation, they stay conscious all
  the time, so their minds will not be wandering around"), mother's remark
  ("Look at how calm they were sitting there waiting...") as carried by the
  opened pages; aunt's remark NOT quoted in the story (kept in the ledger only).
- Facts: 23 June 2018 flooding, 12 boys aged 11-16, coach 25, 18-day ordeal,
  ten days to discovery by British divers, monastery decade (temple at 12,
  ten years, left to care for a grandmother — Vox), orphaned at 10 / epidemic
  survivor (Buddhistdoor), food-ration sharing and malnutrition, cave-wall
  runoff collection (Buddhistdoor).
- Both secondary-carrier journalism; no primary sources claimed.

## ST343 — The Buddha's Last Words (Buddhism batch)

- Opened: https://www.dhammatalks.org/suttas/DN/DN16.html — Thanissaro
  Bhikkhu's translation of DN 16, fetched via curl and read with tag-stripping
  (dn16b.html in the session workspace); quotes verified character-for-character
  against the stripped text, including macrons (Ānanda, Tathāgata, jhāna).
- Quotes used: the old-cart passage to Ānanda; the three silent invitations to
  the monks (verified, including "Don't later regret that 'The Teacher was
  face-to-face with us...'"); the final exhortation ("Now, then, monks, I
  exhort you: All fabrications are subject to ending & decay. Reach consummation
  through heedfulness.") with the page's "That was the Tathāgata's last
  statement."; the ascending jhānas at death.
- The famous Capala-shrine announcement variant ("All fabrications are
  subject to decay...") also verified on the page but not quoted in the story;
  the story's "the same one he had repeated three months earlier" is grounded
  in the page's note 34 ("The Buddha will repeat these two statements as his
  last exhortation before his total unbinding").

## ST344 — Suzuki Keeps the Beginner's Mind (Buddhism batch)

- Opened: https://web.stanford.edu/~funn/ZenMindBeginners.pdf (full book
  text hosted at Stanford; extraction-prompt fetch, quotes returned verbatim);
  https://inquiringmind.com/article/2501_31_chadwick/ (David Chadwick review;
  fetched, quotes verbatim); https://www.lionsroar.com/the-enduring-teachings-of-suzuki-roshi/
  (fetched, the twelve-years passage verbatim); Wikipedia's Shunryū Suzuki
  page (fetched; birth/death years, Sōtō school, ZMBM 1970).
- Quotes used: the prologue line; the shoshin/Prajna-Paramita-repetition
  passage; "If your mind is empty..."; the "no thought of attainment"
  passage; the 1965 lecture variant and the "Good book. I didn't write it,
  but it looks like a good book." anecdote (Chadwick).
- Facts: 1959 arrival, 1971 death, SFZC and Tassajara founding, the book's
  editing chain (Derby/Dixon/Baker), publication 1970.
- The owner's library (docs/PRIMARY-SOURCES.md) was consulted first per the
  QC-round-3 instruction; the Drive Buddhist PDFs there do not include ZMBM,
  so the Stanford-hosted full text was used as the book source.

## Buddhism batch, QC round 4 (advisor-directed repairs)

- ST342 rescoped to Vox-only reporting: "reportedly" restored for the
  meditation-at-discovery and taught-the-boys claims; the Buddhistdoor-sourced
  details (epidemic-survivor childhood, food-ration sharing and malnutrition,
  cave-wall runoff, government spokesperson quote) REMOVED per advisor (no
  original reporting opened for them); the Vox full text was then read WITHOUT
  an extraction prompt and every retained quote re-verified verbatim.
- ST342 relinked per advisor scope ruling: B190/B039/B017 backlinks removed
  (the reporting establishes meditation for calm, not breath practice or the
  four foundations; heedfulness not to be equated with staying conscious) and
  B042 (calm) / B013 (mind trainable) / B011 (mindfulness as tool) added.
  These removals FAIL validation by design against the pre-repair HEAD
  (w1e precedent). MEANINGFUL CHECK: validation of the working tree against
  the pre-repair HEAD showed exactly the three intended link losses on the
  story and the three mirrored losses on B190/B039/B017, and no
  content/quotation errors; the Contents-page false positives did not
  appear (the structure file was untouched that round).
- ST343: "longest sutta" superlative removed; opening vignettes corrected to
  the text (the war plan arrives with the king's minister; two meal
  invitations, the courtesan's kept); the death sequence now follows the
  opened text exactly (ascent to cessation of perception & feeling,
  Anuruddha's correction of Ananda, descent and re-ascent, passing away from
  the fourth jhana); macrons (Ananda/Tathagata/jhana) restored throughout;
  "the tradition has made much" and the "not about death" framing removed;
  B055/B012 labelled as the compendium's extensions in the closing.
- ST344: David Chadwick named in the anecdote; "practice improves and
  simultaneously dulls" generalization removed (Suzuki's "might"/"liable to"
  preserved as quoted); "emptiness rather than effort" invented choice
  removed; "warning label" staging removed; the Baker-introduction passage
  added ("He stayed because he found that Americans have a beginner's
  mind..."); the "Nothing Special" passage added to ground the B050 pairing
  (ordinary mind); D023 labelled a cross-tradition analogy.
- ST344 verification upgraded: the Stanford-hosted book text was fetched in
  full WITHOUT an extraction prompt (300k-char fetch, complete through the
  Epilogue); all quoted passages re-verified against the full text, including
  the Nothing Special chapter. The Inquiring Mind article was likewise read
  in full without a prompt.
- ST343's DN 16 ending sequence verified against the opened dhammatalks.org
  page (ascension, Ananda/Anuruddha exchange, descension, passing away from
  the fourth jhana) before rewriting.

## Buddhism batch, QC round 5 (advisor-directed bounded corrections)

- ST342: purpose-vs-effect separation restored in the closing (Vox reports
  meditation was taught TO HELP them remain calm and conserve energy;
  no demonstrated effectiveness claimed); "stayed at a temple" corrected to
  "were to spend nine days at a temple" (the opened article's July 25 update
  says "would be staying"); B011 link REMOVED per advisor (general
  meditation is not documented mindfulness; the link exists only as the
  compendium's pairing, which the advisor rejected as ungrounded) — B042 and
  B013 remain, explicitly labelled comparisons in the closing; inline
  citations added beside the factual passages and AP-carried quotes.
- ST343: "passing away from the fourth jhana, he totally unbound" corrected
  to "after emerging from the fourth jhana, he passed away" per the opened
  translation's wording; inline citations added to both blockquotes; the
  Sources audit phrase replaced with a bibliographic note.
- ST344: "Repetition is what wears it out" replaced with Suzuki's
  possibility-framed warning; the Nothing Special quote corrected to the
  running prose's "obtain a wonderful power" (the epigraph's "some" is a
  different version of the passage — quote-fidelity fix); the B050 pairing
  labelled a comparison with ordinary mind / non-seeking rather than an
  equation; inline citations added to the blockquotes and the Baker and
  Chadwick passages.
- MEANINGFUL CHECK (round 5, working tree vs pre-repair HEAD 361ba2d2's
  tree): exactly the intended B011 link loss on the story and the mirrored
  loss on B011's page; ST343 and ST344 fully clean; no content/quotation
  errors; no Contents-page false positives (structure file untouched).

## Buddhism batch, QC round 6 (final bounded edits)

- ST343 death-sequence sentence corrected with an ASSERTED unique match (the
  round-5 replacement had silently missed: the anchor used plain "jhana"
  while the file already carried macrons — the lesson from this session's
  earlier silent no-match incidents was re-applied: assert anchors, verify
  the resulting file, not the script's success message).
- ST343: DN 16 citations added beside the journey narration and the
  death-sequence paragraph (previously only the blockquotes carried links).
- ST344: "quoted verbatim from the opened text" audit phrase removed from
  Sources; Lion's Roar citation moved beside the founding-chronology
  sentence in the body.
- MEANINGFUL CHECK (working tree vs pre-repair HEAD, round-6 edits): 0
  validator errors — no link changes this round (B011 removal was round 5),
  no content/quotation errors, no structure-file changes.
- BATCH CLOSED AS SCOPED ACCEPTANCE per advisor round 6 ("close this batch
  as scoped acceptance and proceed to Pragmatism").

## Pragmatism batch 1 — ST345–ST347 (claim-to-passage evidence)

- **ST345 — The Army Enlisted Against Nature** (P188, P183; ch. ST-S03.10)
  - James 1906 Stanford address + 1910 publication: Democracy Journal (opened
    in full) — "his 1910 essay 'The Moral Equivalent of War'", "his address
    at Stanford University in 1906". Essay full text: Wikisource (opened in
    full) — all quoted lines verified against that text ("History is a bath
    of blood", the martial-virtues sentence, "If now—and this is my idea—",
    "It is only a question of blowing on the spark...").
  - CCC chronology and totals: Democracy Journal (opened) — half a million
    young men out of school and out of work; first days of office; the
    secretaries of Labor, Agriculture, Interior and the Army; up to 275,000
    young men aged 18 to 25; bill signed March 31 [1933]; Army built the
    camps; by 1942 three million men, three billion trees, 125,000 miles of
    trails, 800 state parks.
  - Compendium stance preserved: James's own word was "conscription"; the
    principle body reads the equivalent as voluntary service — the story
    states this plainly rather than smoothing it over.
- **ST346 — The Boy from Grass Valley** (P183, P134; ch. ST-S03.08)
  - Royce life facts: SEP entry (opened) — Grass Valley birth, mother
    headed a primary school, sisters directed early education, age 11 to
    San Francisco, the 1882 half-of-James's-salary gamble ("accepted the
    offer of half of James's salary, resigned his California appointment
    altogether, and moved his wife and newborn son across the continent
    in the summer of 1882"), "centrality of action intended to realize a
    sound ideal that one has freely embraced".
  - Grass Valley color and loyalty quotes: UCLA Newsroom (opened) —
    Forty-Niners who never found gold; "the sad state wherein I had the
    odd fortune to be born … a philosophically barren area"; poor, stocky
    and lonely; first major American philosopher born west of the
    Mississippi; "Loyalty... gives life meaning and cures hesitancy";
    "tightly binding oneself to others to benefit a noble cause".
  - Position made permanent 1884, taught until death 1916: SEP (opened).
- **ST347 — The First Act of Free Will** (P185, P069, P038; ch. ST-S03.04)
  - Depression facts + both diary entries: Harvard Crimson 1963 (opened) —
    nearly six years, moral impotence, Feb 1 1870 "touched bottom" entry,
    Apr 30 1870 entry, "the cure was by no means instantaneous", teaching
    at Harvard as stabilizing vocation, marriage to Alice Howe Gibbens.
  - The asylum vision + acting program + mountain climber: The Atlantic
    1996 (opened) — "greenish" skin, "That shape am I", "the universe
    changed entirely", "For the remainder of the year, I will abstain from
    the mere speculation & contemplative [meditation]... as well as by
    acting", "believe what is in the line of your needs".
  - Apr 30 entry clean carrier: Wikipedia William James (opened) — used
    for the quoted diary text (Crimson/Atlantic renderings contain
    typographic errors).
- Registration: register_story.py × 3 (order, structure contents, principle
  links). MEANINGFUL CHECK (working tree vs HEAD): story files 0 errors
  ("no ## Related concepts" warnings only, standard for stories); principle
  files 0 errors; structure file shows only the two documented false
  positives ("prose too short: 0", "## Sources has no http(s) URL").

## Pragmatism batch 1, QC round 1 (advisor-directed bounded repairs)

- **ST345**: "pacifist scold"/"granted its premise in full" replaced with the
  essay's own narrower claim (war-party "assuredly right... absolute and
  permanent human goods"); Democracy citation added beside the 1906 Stanford
  chronology; essay citation added beside the draftees sentence; FDR
  chronology reworded to match the article (report "on his desk in the
  Oval Office", "during his first days in office"); "unmarried and
  unemployed" restored to the 275,000 description; segregation fact added
  ("open only to men... segregated camps"); "By the time Congress ended
  the program" replaced with the article's wording (by 1942, when most of
  the men "graduated into military service"); "nearest thing his spark got
  to a trial run" and "tree lines still standing" deleted, replaced with
  the article's documented claim ("first turned into reality").
- **ST346**: SEP's "centrality of action" phrase re-attributed to the SEP
  authors' summary; UCLA loyalty lines de-quoted and attributed to the UCLA
  account; "at half pay" corrected to "half of James's salary"; "three
  thousand miles", "bet everything" and "What he made of the crossing
  became his philosophy" removed; 1884 permanence replaced with UCLA's
  "From 1882 until his death in 1916, Royce taught at Harvard"; closing
  reframed as the compendium's editorial reading.
- **ST347**: onset synthesis removed ("In his late twenties" + six-year
  duration no longer combined); "students of James learn by heart" deleted;
  "He abstained" corrected to a programme/resolve ("His programme for the
  remainder of the year was to abstain"); closing overclaim replaced with
  the labelled-comparison paragraph ("A resolve in a diary is not a
  cure...").
- **INTENTIONAL LINK REMOVALS (advisor-directed, FAIL-by-design in the
  meaningful check)**: P134 removed from ST346 (loneliness is not
  cultivated solitude); P038 removed from ST347 (a resolve to read and
  act is not demonstrated habit formation). Reciprocal links removed from
  the P134 and P038 pages. Meaningful check vs pre-repair HEAD: ST345
  clean; ST346/ST347/P134/P038 show only the four documented intentional
  removals.
- **Verification-class correction**: the round-1 fetches used extraction
  prompts, so "opened in full" overstated the check. All retained
  quotations were re-verified against unprompted full-page text (curl
  tag-stripped for Wikisource, Democracy, Crimson, UCLA, SEP; Atlantic
  bot-walled to curl, verified via an unprompted full fetch). Results:
  every retained quote confirmed. Carrier typos noted and handled: the
  Crimson prints "instantancous" (paraphrased, never quoted); the
  Atlantic prints "choose towhen" (Apr 30 entry quoted via Wikipedia's
  clean rendering instead); Wikisource's "till" in the spark quote
  confirmed (Democracy's "until" is that magazine's rendering).
- **Ownership check (post-linking)**: P134, P069, P038, P183, P185, P188
  checked against all live band manifests (p1zq–p1zx) — none owned.
- **Primary-library consultation (timing correction)**: docs/PRIMARY-SOURCES.md
  was consulted during QC round 1, AFTER the research and drafting for this
  batch — the user's before-research ordering was missed for this batch and
  cannot be satisfied retroactively; recorded here as an honest admission.
  Corrective action: the next batch consults the catalogue before research
  begins.
  Owner's library holds William James (Delphi Complete Works, Varieties,
  Pragmatism, A Pluralistic Universe), Dewey Complete Works, and the
  Essential Peirce vols 1–2 (owner upload 2026-10-19). This batch's James
  texts are carried by the opened web sources above; no Peirce-attributed
  claims are made, so the Peirce verification rule is not triggered.

## Pragmatism batch 1, QC round 2 (final bounded corrections)

- **ST345**: "Within weeks Congress passed" corrected to the article's
  sequence ("Within a few weeks of taking office he sent Congress a very
  short bill... he signed the bill on March 31"); the closing
  "first documented turn into reality" upgrade clause deleted — the
  Democracy article's attributed interpretation stands on its own.
- **ST347**: February 1 quotation corrected to the Crimson's exact
  rendering ("shall I *Frankly* throw the moral business overboard" —
  italic, capitalized in the carrier, verified against the raw page);
  "The cure was not instantaneous" re-attributed ("The Crimson account
  describes a gradual return: only very slowly did enthusiasm and
  buoyancy become dominant"); the Wikipedia carrier for the April 30
  entry now verified unprompted via raw wikitext (action=raw).
- Ledger consultation chronology corrected (see round-1 entry above).
- MEANINGFUL CHECK (working tree vs pre-round-2 HEAD): all three story
  files clean — no errors, standard warnings only; no link changes this
  round.

## Pragmatism batch 1 — closeout

- Italics removed from ST345–ST347 (scene-setting lines, *Frankly* —
  capitalization retained per the carrier, emphasis not reproduced).
- SCOPED CONTENT ACCEPTANCE per advisor QC round 2. The acceptance does
  not retrospectively certify the missed before-research catalogue
  consultation; the corrective action (catalogue consultation before
  research, save after each story) applies from the next batch onward.

## Integration — ST348 (Tolstoy Hides the Rope, s1a-002)

- Draft s1a-002 (teller: storyteller-dd542ab3, lane s1a; 3 advisor QC
  rounds recorded in the draft's QC notes) integrated as ST348, chapter
  ST-S03.02 (Meaning, Truth, and Workability), by supervisor
  storyteller-6cf9c268.
- Supervisor verification before integration — CORRECTED RECORD: the
  first pass was 19 substring checks, not 20 complete-quotation
  comparisons, and was mislabelled "20/20". A second, complete audit
  then compared every quotation on the published page as a full string
  against the opened sources (MIA A Confession parts 4, 7, 13; authorama
  Varieties lectures VI-VIII): all three blockquotes matched complete
  (including the rope-and-gun blockquote end-to-end), all inline
  quotations matched complete, both ellipsis boundaries were opened and
  checked (BQ2's full omitted interval is a four-sentence passage on
  wishes and desires — including a fairy-offer sentence, NOT the fable's
  honey/tongue as first recorded; BQ3's full omitted interval is the
  labouring people's stated meaning of life in their own terms — both
  honest bridges within the same passages), the James recovery span was
  verified complete including its opening ("was nothing new. It was my
  ancient juvenile force of faith..."), and the fable details (dragon,
  mice, honey on the leaves) and the four-ways list were verified
  against Part 4 / Part 7. Result: complete audit clean; the earlier
  "20/20" and "fairy-tongue" claims are superseded by this record.
- story_check --context published: 0 errors. Structural validation:
  ST348 flags only the known new-file no-baseline condition (real check
  post-commit); structure file shows the two documented false positives;
  P184 clean.
- P184 not in any live band manifest — backlink written directly by the
  supervisor per protocol.

## ST348 closeout — SCOPED ACCEPTANCE

- Advisor QC (3 closeout rounds): complete full-interval quotation audit
  recorded; sentence-level citations via linked existing words; interpretive
  Principles clauses (ST345/ST346); narrow supervisor amendment to
  story_check.py (plain-text provenance accepted, emphasis optional,
  missing provenance still fails; 47 tests green) + protocol wording
  update; italics removed from ST345-ST348. Content commit ece623f8
  verified against origin. ST345-ST347 accepted bodies remain closed.

## Pragmatism batch 2, item 1 — ST349 (claim-to-passage evidence)

- **ST349 — The Sand-Table Farm** (P190, P038; ch. ST-S03.05)
  - Carrier: Robert B. Westbrook, "John Dewey (1859-1952)", Prospects
    XXIII 1/2 (UNESCO, 1993), hosted at cyc-net.org — OPENED IN FULL
    (unprompted curl + tag-strip; all quoted passages grep-verified
    against the page text: the January 1896 opening with sixteen
    children and two teachers and the 1903 figures; the occupation
    definition (Dewey 1899 p.92); "the child comes to school to do"
    (Dewey 1896a p.245); the 1903 experimentation-and-error passage
    (p.237); the model-farm narrative (Mayhew & Edwards pp.83-84,
    quoted by Westbrook): sand-table farm, one-foot ruler, halves and
    fourths, four posts and six or seven slats, repeated measurements,
    "more rapidly and more accurately as the work was repeated").
  - Word-budget pass: citation anchors shortened and prose trimmed to
    fit 150-480 (story_check published: 0 errors; structural validator
    clean; structure file shows only the two documented false
    positives).
  - Primary-library note: Dewey's own School and Society (1899) was
    NOT opened; the Dewey quotations are carried by the opened
    Westbrook article with page anchors. Recorded per the
    catalogue-holdings vs accessible-texts distinction.
