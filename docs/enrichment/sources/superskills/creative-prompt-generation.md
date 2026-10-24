# Superskill evidence ledger: Creative-Prompt-Generation

Per-claim evidence record for docs/enrichment/CREATIVE-PROMPT-GENERATION.md (session start 2026-10-24 ~14:30 UTC). Standard: every research claim in the superskill carries an inline link to a source listed here, and every source listed here was opened this session by fetch. This entry records the verification actually performed for each source, with the passages compared. Paraphrases and editorial transfers are marked.

## Verification note (correction of an earlier draft)

An initial fetch of the Haught-Tromp PDF used an extraction prompt that returned a garbled, partly invented description (five studies, noun plus method constraints, fluency and flexibility gains). A second fetch of the same URL, requesting verbatim passages, showed the paper is two experiments on noun constraints in two-line greeting-card rhymes. All claims from the garbled extraction were removed from the superskill; only passages confirmed in the second fetch are used. This is recorded here because the superskill's first pushed draft (commit 36e8e162) contained the garbled claims; the correction is the superskill's version 2.0.0.

## Haught-Tromp 2017 (noun constraints in a writing task)

- Carrier opened: https://www.cct.umb.edu/630/files/HaughtTromp2017-GreenEggsandHam.pdf, fetched twice (2026-10-24): first fetch with an extraction prompt (garbled; discarded), second fetch demanding verbatim passages (clean). Coordinates: Cognition 166, 1-7 (2017), "The Green Eggs and Ham Hypothesis: How Constraints Facilitate Creativity".
- Verification performed: the abstract was returned verbatim in full; the Study 1 methods paragraph (Battig and Montague category nouns, four categories: shirt/vest, dog/frog, doll/kite, drum/harp) and the Study 1 creativity-rating statistics were returned verbatim; the article's own statement that Studies 3 and 4 do not exist in this paper was noted. Quotes used in the superskill were compared against these returned passages.
- Verbatim quotes used, confirmed against the second fetch: the abstract sentences "Two experiments tested the hypothesis that constraints imposed on a common writing task yield more creative outputs" and "Mere practice with constraints can stimulate creativity"; the Study 1 result "The rhymes in the constrained condition (M 5.18, SD .93) were judged to be more creative than the rhymes in the nonconstrained condition (M 4.29, SD 1.08), F(1, 57) 62.87, p .0001"; the carryover result "the nonconstrained rhymes were rated more highly when they followed the constrained condition (M 4.80, SD 1.12) than when they preceded it (M 3.83, SD .83)".
- What it contributed: the concretizing-anchor component (concrete noun inclusion raised judged creativity); the carryover finding (constraint practice raises later unconstrained output); the note that a required noun is a content constraint that works, which grounds the constraint test that replaced the form-versus-content rule.
- Limits stated in the superskill: two-line rhymes, not long-form writing; judges' ratings, not publication outcomes. The application to prompt anchors is a prompt-design inference and is labelled as one.

## Stokes 2009 (the paired-constraint framework)

- Carrier opened: https://psychology.barnard.edu/sites/default/files/inline-files/Serra2009.pdf (fetched with an extraction prompt, 2026-10-24). Coordinates: Psychology of Aesthetics, Creativity, and the Arts 3(4), 221-225 (2009), "Using Constraints to Create Novelty: A Case Study".
- Verification performed: the three passages used were returned verbatim and are quoted as fetched.
- Verbatim quotes used: "In problem solving, they are two-sided, paired. One of the pair retains its function as stricture, limiting or precluding search in some parts of a problem space; the other directs or promotes search in different parts (Reitman, 1965)"; "Novel solutions follow from precluding reliable, existing responses and promoting riskier, often opposite ones (Stokes, 2005)"; "paired constraints restructure problem spaces in ways that make novelty possible and probable (Stokes, 2007). Possible means that novelty may or may not happen; probable, that paired constraints facilitate the happening."
- What it contributed: the preclusive and promotive constraint components and the pairing rule.
- Limits stated in the superskill: a case study of one ceramics class (the Serra study), not a survey; the superskill presents the pair as the core pattern, not the only one, per the advisor QC.

## Smith, Ward and Schumacher 1993 (conformity to examples)

- Carrier opened: https://pubmed.ncbi.nlm.nih.gov/8289661/ (fetched, 2026-10-24). Coordinates: Memory and Cognition 21(6), 837-845 (1993), "Constraining effects of examples in a creative generation task".
- Verification performed: the full PubMed abstract was fetched; all quotes below are verbatim from it.
- Verbatim quotes used: the designs of example-viewers "were more likely to contain features of the examples"; the effect "did not significantly decrease" with a 23-min interpolated task; "explicitly instructing subjects to create ideas that were very different from the examples did not decrease conformity to the examples, and instructing them to conform to the examples significantly increased conformity"; "The results show that recent experience can lead to unintentional conformity, constraining the generation of creative ideas."
- What it contributed: the caution against example outputs and cliché lists inside prompts.
- Limits stated in the superskill: the tasks were imagining and sketching experimenter-defined categories, not writing; the transfer to writing prompts is an editorial inference; the rule is a precaution, not a prohibition.

## Rietzschel, Nijstad and Stroebe 2014 (problem scope)

- Carrier opened: https://pure.rug.nl/ws/files/16113815/CRJ_problem_scope.pdf (fetched twice, 2026-10-24: content extraction, then a confirmation fetch of title, authors and abstract). Coordinates: Creativity Research Journal 26(2), 185-191 (2014), "Effects of Problem Scope and Creativity Instructions on Idea Generation and Selection".
- Verification performed: the abstract was returned verbatim in the confirmation fetch and is quoted as fetched.
- Verbatim quotes used: "the most accessible and easily generated ideas often are the least creative ones" and "people therefore need to be induced to leave this path of least resistance" (the paper's restatement of Finke, Ward and Smith 1992; Ward 1994); from the abstract, "Results show that both narrow (vs. broad) problems and creativity (vs. relevance) instructions led to the generation of ideas that were more creative" and "only under creativity instructions did participants select more creative ideas."
- What it contributed: the "too general" failure mode; the path-of-least-resistance framing in the definition section.
- Limits stated in the superskill: a brainstorming experiment, not writing; narrow scope improved generated ideas, not selected ones — the generation/selection distinction is carried into the superskill. The theory restatement is presented as a theory, not as a finding of this paper.

## Förster, Friedman and Liberman 2004 (temporal distance)

- Carrier opened: https://pubmed.ncbi.nlm.nih.gov/15301626/ (fetched, 2026-10-24). Coordinates: Journal of Personality and Social Psychology 87(2), 177-189 (2004), "Temporal construal effects on abstract and concrete thinking: consequences for insight and creative cognition".
- Verification performed: the full PubMed abstract was fetched; all quotes are verbatim from it.
- Verbatim quotes used: "participants who envisioned their lives and imagined themselves engaging in a task 1 year later as opposed to the next day subsequently performed better on a series of insight tasks"; "a distal perspective was found to improve creative generation of abstract solutions"; "distant time perspective undermined rather than enhanced analytical problem solving."
- What it contributed: the distance component, including its tradeoff.
- Limits stated in the superskill: the study's distance manipulation is a time-perspective task, not a story setting or narrator choice; the craft forms of distance are ours; the analytical-task cost is carried into the component's omit-when clause.

## Friedman and Förster 2010, reviewing Friedman, Fishbach, Förster and Werth 2003 (attentional breadth)

- Carrier opened: https://pmc.ncbi.nlm.nih.gov/articles/PMC2933078/ (fetched with an extraction prompt, 2026-10-24). Coordinates: Psychological Bulletin 136(4), 522-562 (2010), "Implicit affective cues and attentional tuning: an integrative review". The 2003 experiments were NOT opened in the original article; this is disclosed both here and in the superskill.
- Verification performed: the passages describing the 2003 studies were returned verbatim from the review text.
- Verbatim quotes used: "participants who were led to focus perceptual attention broadly produced more original responses on these tasks than did those who focused attention narrowly"; "more unusual exemplars of a series of semantic categories"; the digit-search design (nine-digit displays, 3-present vs 3-absent, broad periphery vs narrow center).
- What it contributed: the attentional-breadth component.
- Limits stated in the superskill: the wide-to-narrow ordering of prompt phrasing is a craft heuristic, an editorial experiment, not a tested rule; the underlying manipulation was perceptual attention in digit search, not scene description.

## Amabile 1985 (extrinsic orientation and poets)

- Carrier opened: https://pages.pomona.edu/~ajr04747/Fall2008/Math58/Papers/Amabile_1985_psp-48-2-393.pdf (fetched with an extraction prompt, 2026-10-24). Coordinates: Journal of Personality and Social Psychology 48(2), 393-399 (1985), "Motivation and creativity: effects of motivational orientation on creative writers".
- Verification performed: participant description, manipulation and statistics were returned verbatim and are quoted as fetched. The superskill describes participants as "actively involved in creative writing" following the paper's own wording; the earlier draft's "actively publishing" was corrected per the advisor QC.
- Verbatim quotes used: "Chosen because they identified themselves as actively involved in creative writing, 72 young adults participated in individual laboratory sessions where they were asked to write 2 brief poems"; "Poems written under an extrinsic orientation were significantly less creative than those written in the other two conditions"; "F(2, 69) = 4.66, p < .013"; "M = 15.74" against intrinsic "M = 19.88" and control "M = 18.78"; "An intrinsically motivated state is conducive to creativity, whereas an extrinsically motivated state is detrimental (Amabile, 1983a, 1983b)."
- What it contributed: the intrinsic-frame component.
- Limits stated in the superskill: the result is a reduction under extrinsic orientation, not a boost under intrinsic orientation (intrinsic did not clearly beat control); the specific prompt phrasings were not tested.

## Sio and Ormerod 2009 (incubation)

- Carrier opened: https://pubmed.ncbi.nlm.nih.gov/19210055/ (fetched, 2026-10-24). Coordinates: Psychological Bulletin 135(1), 94-120 (2009), "Does incubation enhance problem solving? A meta-analytic review".
- Verification performed: the full PubMed abstract was fetched; all quotes are verbatim from it.
- Verbatim quotes used: "identified a positive incubation effect, with divergent thinking tasks benefiting more than linguistic and visual insight tasks"; "longer preparation periods gave a greater incubation effect"; "low cognitive demand tasks yielded a stronger incubation effect than did rest" — this last qualified in the abstract as a finding "when solving linguistic insight problems," and the superscript qualification is carried into the superskill.
- What it contributed: the incubation-hook component and its placement after a preparation step.
- Limits stated in the superskill: the concrete recipe (draft twenty minutes, stop mid-sentence, return) is a craft heuristic, untested as a recipe.

## Craft heuristics (editorial, not from opened sources)

The following parts of the superskill are the compendium's own judgment and are labelled as such in the text: the ten-step procedure's phrasings; the constraint test and the "opens directions, leaves decisions" criterion (the Haught-Tromp noun result grounds it as an inference, but the test itself is editorial); the three-directions sketch (explicitly labelled an editorial QC technique, not a validated psychological test); the failure-mode example prompts and the worked examples; the QC checklist's operational questions; the omit-when clauses; the memoir uncertainty rule and the anchor fallback. None of these is presented in the superskill as research fact.

## Advisor QC record

- Round 1 (2026-10-24, ~T+0:12): verdict NOT CLEARED. Repairs prescribed and applied in version 2.0.0: (1) Haught-Tromp reopened and the garbled first extraction replaced with verified passages (see the correction note above); (2) universals removed — Stokes presented as a framework, Smith et al. as a qualified precaution with the drawing-to-writing transfer marked editorial, Rietzschel's generation/selection distinction added, Förster's analytical tradeoff added, Friedman ordering demoted to a craft heuristic, Amabile's participant wording corrected and the intrinsic-vs-control nuance stated, Sio and Ormerod's linguistic-insight qualification restored; (3) form-versus-content rule replaced by the constraint test; (4) stakes added as a distinct craft component; (5) components made conditional with omit-when clauses; (6) three-directions sketch added as an editorial QC step; (7) checklist logic corrected (all questions positively phrased; thirty-second threshold replaced); (8) inline source links added at research claims; (9) ledger verification statements rewritten to record the checks actually performed.
- Advisor stress test round 1 (three desk-test prompts: fiction, poetry, memoir) informed the conditional-usage rules, the memoir uncertainty rule and the anchor fallback; the advisor's memo prompts are not reproduced in the superskill.
