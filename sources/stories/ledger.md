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
  title, no stipend; small residence built with a friend's help in 1881; lived
  at the Dongpo farm, took the pseudonym from it; best poems of the exile
  period; recalled 1086. All from the same wikitext (prose section).
- NOT claimed (removed in advisor QC round 1): trial fine amounts, Sand Lake
  walk preface details, "known by heart" reception claims, psychological
  transformation claims. The poem's scene is presented as the poem's scene.
- Intentional link removal: [[Post-traumatic growth]] dropped from Resonates
  per advisor QC round 1 (loose construct-level claim, not grounded in the
  opened sources). Validator FAILs by design on this removal (w1e namespace
  precedent); the file validates clean at the post-commit HEAD.

## ST338 — Xu You Refuses the Empire

- Opened: https://ctext.org/zhuangzi/enjoyment-in-untroubled-ease (Legge).
- Blockquote: Yao's offer and Xu You's refusal, verbatim from the opened page.
- Framing: labelled a tale from the Zhuangzi ch. 1, not biography.
- Removed in QC round 1: "biggest prize ever offered", reception claims,
  the muddled torch/rain comparison, the closing overreach beyond the kitchen
  analogy.

## ST339 — Jigoro Kano Turns the Push

- Opened: https://en.wikipedia.org/wiki/Kan%C5%8D_Jigor%C5%8D (two fetches;
  conflicting extractions resolved in favour of the more specific one; the
  practice-passage excerpt from the first fetch was NOT trusted and was not
  used in the final text).
- Quotes used (verified verbatim on the page): Nakai Baisei demonstration
  sentence; Kodokan founding sentence (May or June 1882, Eishō-ji, twelve
  mats, handful of students, Iikubo teaching three days a week); "A main
  feature of the art is the application of the principles of non-resistance
  and taking advantage of the opponent's loss of equilibrium..."; "the main
  principle of judo involved gaining victory by yielding to strength" (the
  page's description, attributed as such); "When yielding is the highest
  efficient use of energy, then yielding is judo" (capital W preserved);
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

## Validator change (supervisor maintenance)

enrich_validate.py now exempts structural page types (book, chapter, layer,
section, reference, navnode, volume) from the prose/Sources/banned-word bar
while keeping the protected-markup checks. Reason: the Stories book Contents
file is a table of contents and was FAILing the concept bar when a story link
was added. Regression evidence: scripts/tests (25 safety + 5 manifest) pass;
harness check confirms a short-prose concept still FAILs; the structure-file
check now passes. Recorded in the QC log.

## Process notes

- Prompted LLM extractions of web pages proved unreliable twice (a fabricated
  Su Shi poem variant; conflicting Kanō passages). Rule followed: for any
  disputed wording, verify against the raw page source (wikitext via
  action=raw) or the plain full text before quoting.
- git push is blocked from this sandbox; scripts/api_push.py is the reliable
  push route (token read from the origin remote URL per that script's design).
