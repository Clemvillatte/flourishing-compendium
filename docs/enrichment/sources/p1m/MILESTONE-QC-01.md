# p1m milestone advisor QC: P090, P105, P111, P113, P117

Reviewer: independent advisor (read-only). Date: 2026-10-20 Sydney. Repo HEAD reviewed: 77c4ea7a. No repo edits, state, baton or commits made.

## Method

- Diffed each page against the pre-enrichment baseline `c2a3ee47`. Ran `scripts/enrich_validate.py --base c2a3ee47` on all five files: 5 checked, 0 failed. The only warnings are the normal principle ones (no Sources URL, no Related concepts).
- Prose words (`enrich_stats.prose_words`): P090 254, P105 252, P111 261, P113 253, P117 253. All are within 40-300.
- Protected sections: front matter, the `> **Principle N**` statement, every original wikilink (markup unchanged) and the reflections comment block are byte-identical to baseline in all five. The only change in those areas is a trailing newline after `-->`. The `### Plain words` / `### For example` subheadings follow PROTOCOL section 2 (17 enriched principles already use them).
- Plain words: all five are new re-derivations. None copies the body or the title, and none promises therapy or a fixed outcome. Examples are labelled hypothetical.
- Dewey, Art as Experience (LW 10): checked against the full unprompted cleaned text (session file `output_2f979d0c...txt`), using the printed `Dewey: Page lw.10.N` markers. Each marker comes before its page's text: ch. 3 opens at lw.10.42 and ch. 4 at `[Page lw.10.64]`, which matches LW pagination.
- Downloaded these PDFs and mapped printed page numbers to PDF pages: Maslow 1967 (printed = PDF+91), Deci & Ryan 2000 (printed = PDF+226; the footer numbers confirm this), Johnson & Johnson 2014, Frattaroli 2006. Also read the pages for Standard Ebooks Dewey D&E ch. 7, the OUP Addams excerpt, the Panarchy Maslow excerpt, the PubMed Balban abstract, the PMC Larsen & Galletly article, the T&F Conner abstract and the UCLA Lieberman PDF.

## Verdicts

| Item | Verdict |
|---|---|
| P090 | FIX (1 locator) |
| P105 | PASS |
| P111 | PASS (optional locator precision) |
| P113 | FIX (1 locator, body + ledger) |
| P117 | FIX (1 locator, body + ledger) |

## P090: FIX

Verified:
- The quote "A democracy is more than a form of government; it is primarily a mode of associated living, of conjoint communicated experience." is exact and sits in VII.2 "The Democratic Ideal" of the Standard Ebooks text.
- VII.1 supports the paraphrase: the two criteria ("How numerous and varied are the interests which are consciously shared? How full and free is the interplay with other forms of association?"), "Stimulation and response are exceedingly one-sided", and Plato's slave as "one who accepts from another the purposes which control his conduct".
- Addams (OUP excerpt, pp. 200-204): residents "must be content to live quietly side by side with their neighbors, until they grow into a sense of relationship and mutual interests". The settlement must keep "its readiness to change its methods as its environment may demand". The body correctly splits the residents' instruction from the settlement's.
- Johnson & Johnson 2014: achievement and relationship findings are on p. 843. "Not all group efforts are cooperative. Simply placing individuals in groups ... does not in and of itself result in cooperative efforts" is on p. 845. pp. 843-846 is correct.

Fix required:
- Deci & Ryan 2000 locator `pp. 241-242, 252` is wrong. The compatibility passage (Hodgins et al.; "autonomy and relatedness are incompatible or competing" is the view rejected; "To be autonomous does not mean to be detached") is on p. 242. p. 241 covers causality orientations and Koestner et al. and says nothing about autonomy-relatedness compatibility. The conflict passage ("the need for relatedness can at times compete or conflict with ... the need for autonomy ... under optimal circumstances, be complementary but can, under less optimal circumstances, become antagonistic") is on p. 253, not 252.
  - Body: change `Deci and Ryan, 2000, pp. 241-242, 252` to `Deci and Ryan, 2000, pp. 242, 253`.
  - Ledger `docs/enrichment/sources/p1m/P090.md`: change `pp. 241-242, 252` to `pp. 242, 253`. Also qualify the QC sentence saying the advisor "confirmed ... locators", because this locator was not correct.
- Ingold / Correspondence remains an inherited, uncertified bibliographic parallel, and the ledger says so. No action needed.

## P105: PASS

- The quote "Experiencing like breathing is a rhythm of intakings and outgivings." is exact and sits under the `lw.10.62` marker.
- The LW 10:43 text supports "pauses, places of rest ... punctuate and define the quality of movement" and "Continued acceleration is breathless and prevents parts from gaining distinction".
- LW 10:62 says "If we move too rapidly ... flustered, thin, and confused. If we dawdle too long ... experience perishes of inanition." This supports "not an instruction to perform every task slowly".
- Balban et al. 2023 (Cell Rep Med, remote RCT, daily 5-min for 1 month vs mindfulness): the abstract says breathwork, "especially the exhale-focused cyclic sighing, produces greater improvement in mood (p < 0.05) and reduction in respiratory rate". The body's "positive mood" matches the paper's PANAS positive-affect measure, so this is acceptable. Optional: say "mood" to match the abstract word for word.
- Larsen & Galletly, Heart 2006;92(4):433-434: has the section "ENTRAINMENT OF RESPIRATION". It reports Bernardi et al.'s tempo-proportional breathing frequency and HR/BP rises and says the mechanism "may be difficult to establish". The body matches.
- Minor ledger hygiene only: "Structural validator pending" can now be updated, since the validator passes.

## P111: PASS (optional precision)

- The quote "Without an act of recreation the object is not perceived as a work of art." is exact and sits under the `lw.10.60` marker.
- On the same page: "They are not the same in any literal sense". This supports "Dewey explicitly denies that literal identity".
- LW 10:50 supports "The action and its consequence must be joined in perception. This relationship is what gives meaning". LW 10:55 supports "The esthetic experience ... is thus seen to be inherently connected with the experience of making".
- Recognition versus perception starts at lw.10.58 ("Otherwise, there is not perception but recognition") and continues on 59-60. The cited 59-60 is acceptable.
- Conner, DeYoung & Silvia: n = 658, 13-day diary, lagged multilevel models, higher activated PA and flourishing after days with more creative activity than usual. The body correctly calls this observational. The year 2018 is the print issue; the article was online in 2016. Acceptable.
- Optional precision: the first body sentence's "both require attention to how parts develop into a whole" is best supported on LW 10:60 ("ordering of the elements of the whole"; "gathering together of details ... into an experienced whole"), not on 50 or 55. Suggest changing that locator to `LW 10:50, 55, 60`.
- Ledger hygiene: the P111 ledger still says it was checked against the "extracted text" from a focused extraction. Suggest adding that the quote and the pp. 50, 55, 58-60 locators were rechecked against the full unprompted text and its LW markers (now confirmed here). Also update "validator pending".

## P113: FIX (Frattaroli locator)

- The quote "To discharge is to get rid of, to dismiss; to express is to stay by, to carry forward in development, to work out to completion." is exact and sits under the `lw.10.67` marker.
- LW 10:69 covers "An act of discharge or mere exhibition lacks a medium" and "Only where material is employed as media is there expression and art". LW 10:70 covers "construction in time, not an instantaneous emission ... both of them acquire a form and order they did not at first possess". LW 10:71 covers "The act of expression is not something which supervenes upon an inspiration already complete".
- LW 10:82 says "the inner material of emotion and idea is as much transformed through acting and being acted upon by objective material ..." and "It is precisely this transformation that changes the character of the original emotion". The p. 82 correction (not 68) is confirmed.
- Lieberman et al. 2007 (Psych Sci 18(5)): N = 30. Affect labeling means choosing an emotion word for a face. It produced less left-amygdala activity than gender labeling, affect matching and observation. There was no self-report distress outcome. The body is accurate.
- Frattaroli 2006 p. 823 abstract: 146 randomized studies, random-effects average r = .075. Correct.
- Fix required: `pp. 846-850` is wrong. pp. 846-850 hold results and moderator tables (p. 846 is Table 3; p. 850 covers session length and spacing moderators). The Discussion starts on p. 851 ("The Overall Effect": .075 is "quite small by traditional standards" but argued to be important). Mechanism theories are on pp. 858-859 ("Applications to Theory"). Conclusions on p. 860 summarise the moderators.
  - Body: change `Frattaroli, 2006, pp. 823, 846-850` to `Frattaroli, 2006, pp. 823, 851, 858-860`.
  - Ledger: change "Pp. 846-850 discuss small effects, moderation, practical limits and uncertain mechanisms" to "P. 851 discusses the small overall effect and its practical importance; pp. 858-860 discuss mechanism theories and moderators."
- Out-of-band supervisor flag (Expressive writing concept, AF077): reasonable as recorded. Not reviewed further.

## P117: FIX (Deci & Ryan locator)

- Panarchy excerpt, "Deficiency motivation and growth motivation (1955)": the quote "We are thereby helped also to realize that basic needs and self-actualization do not contradict each other any more than do childhood and maturity." is exact and is that extract's final paragraph. The paragraph before it "discourages also the stepwise, all or none, saltatory conception ... in which the basic needs are completely gratified, one by one". This supports "explicitly rejected an all-or-nothing sequence".
- The body doesn't claim Maslow rejected hierarchy itself. That matters because the same page's 1957 extract keeps "a hierarchical and developmental" order. Accurate.
- Maslow 1967 PDF (JHP 7(2), printed pp. 93-127; PDF p. N = printed N+91). Checked directly with pdftotext, not prompted extraction:
  - p. 99, thesis VII: tasks are "embodiments or incarnations of intrinsic values".
  - p. 101: lists truth, beauty, justice and others; "the law is a means to the end of justice".
  - p. 102: "seeking justice, truth, goodness, etc., rather than financial security, admiration, status". This supports "beyond the security or recognition it offers".
  - p. 108, Table 3: B-values include Truth, Beauty, "Unity; Wholeness", Justice.
  - p. 119: "offered tentatively as a set of hypotheses for testing and verification ... a set of guesses which may be true and which had better be checked".
  - All locators are correct. The OCR is noisy, as the ledger says, and no quote is taken from this PDF.
- Fix required: Deci & Ryan `pp. 243-244` is off by one page. The "Intrinsic and Extrinsic Aspirations" section starts on p. 244, and the Kasser & Ryan well-being findings run onto p. 245 ("an emphasis on intrinsic aspirations related positively to global social functioning ... Placing high relative importance on material outcomes was again related to poorer well-being"; the 1996 image/fame studies). p. 243 covers basic-need satisfaction studies, not goal contents.
  - Body: change `Deci and Ryan, 2000, pp. 243-244` to `Deci and Ryan, 2000, pp. 244-245`.
  - Ledger: change "printed pp. 243-244" to "printed pp. 244-245".
- Wording check: "growth, relationships and community" matches p. 244's intrinsic aspirations ("affiliation, personal growth, and community contribution"). The association framing is accurate.

## Summary of required edits (worker to apply)

1. P090 body + ledger: Deci & Ryan `pp. 241-242, 252` -> `pp. 242, 253`.
2. P113 body + ledger: Frattaroli `pp. 823, 846-850` -> `pp. 823, 851, 858-860` (and reword the ledger sentence).
3. P117 body + ledger: Deci & Ryan `pp. 243-244` -> `pp. 244-245`.
4. Optional: P111 first-paragraph locator `LW 10:50, 55` -> `LW 10:50, 55, 60`, and update the P111 ledger to record the full-text recheck.
5. Optional hygiene: replace "Structural validator pending" in the P105/P111/P113/P117 ledgers. Validator: 5 checked, 0 failed.

After edits 1-3: all exact quotes, Dewey LW locators, protected sections, wikilinks, Plain words and prose limits pass. Rerun the validator after editing; no word-count risk, since only the locators change.

Pattern note: all three wrong locators came from focused or prompted PDF extraction. Deci & Ryan was wrong in two different items. For future items, confirm journal-PDF pages from the printed footer numbers (for example `pdftotext -f N -l N`) before recording them.
