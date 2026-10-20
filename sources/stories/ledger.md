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
