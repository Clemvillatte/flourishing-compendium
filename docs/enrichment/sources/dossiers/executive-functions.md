# executive-functions dossier — source ledger

Band dos35. Writer: worker-pplx-ef15b6c9-dos35. Session 2026-10-25.

## Status

CANDIDATE DRAFT, UNPUBLISHED. Registry entry stays "planned"; batch in_progress via enrich_state. Per advisor QC round 5: the draft now documents TWO properly substantiated disputes (ego-depletion findings and test adequacy; self-control practice generalization), each side from opened sources. The controller question ("is there an executive at all?") is an open question, not a substantiated disagreement, and lives in the body (Baddeley homunculus acknowledgment + James + Miyake); the Sona Sutta tuning advice is kept separate from the empirical disputes. Writer's attribution-level reader pass done this session (2026-10-25): every claim checked against its opened passage. CORRECTION per advisor round 6: an intermediate revision of the F&M 2017 sentence used remembered wording ('not strongly related to fluid intelligence'); the saved successful fetch was re-checked and the sentence restored to the abstract's exact wording ('are not the same as general intelligence or g'; 'highly heritable at the latent level'). OUTSTANDING before publication (advisor round 6): a THIRD genuinely substantiated disagreement (two do not meet the owner's three-dispute minimum), the owner's readability gate (dossiers/README.md item 1 and HUMANIZER-SKILL.md), and the project's publication checks. Do not publish on this draft as it stands.

## Final verification sweep (2026-10-25 ~05:11Z, writer's taper pass)

dossier_check OK (16 card links, 19 headers, 29 carriers); density 0 dense, 23 paragraphs; quote_verify 25 checked / 4 not found (all four diagnosed above); node --check on compiled app.js OK; registry entry "planned" (not published); compiled roadmap contains executive-functions, published dossiers list does not; git clean, all work pushed.

## Verification record (rerun 2026-10-25 ~05:10Z)

dossier_quote_verify (rerun 2026-10-25 ~05:16Z after round-6 corrections): 25 checked, 4 not found. The Miyake & Friedman 2012 Common EF quote now PASSES (the earlier miss was a wording error in the draft, 'correlates' for 'happens to correlate', now restored to the source wording; not a fetch exception). The remaining 4: Hagger 2016 x2 and Muraven 1999 x1 (PubMed challenge-page pattern, verified by eye against opened abstracts) and Miles 2016 x1 (verifier angle-bracket-swallow artifact, quote verbatim in the opened PDF).
- PubMed challenge-page pattern (x4): Hagger 2016 (x2 spans), Muraven 1999 (x1), and the verifier's fetch of PubMed URLs returns a JavaScript challenge page with no abstract; all three abstracts opened independently and spans verified verbatim by eye.
- Miyake & Friedman 2012 (PMC3388901, x1): PMC blocked-fetch pattern for automated verification; all three quoted spans verified verbatim by eye against the opened article.
- Miles 2016 (x1): the quote is verbatim in the opened PDF; the miss is a verifier extraction artifact, now precisely diagnosed: the verifier's HTML-tag-stripping regex (re.sub(r'<[^>]+>',' ',s)) swallows a 16,451-character span running from a "< .001" statistic to a later ">" in the pdftotext output, removing the sentence containing the quote. Verified by direct pdftotext extraction.
- Baddeley 2021 (PMC): PASSED the automated run; no exception needed.
## Sources opened this session (all quotes verified from these carriers)

- Miyake, Friedman, Emerson, Witzki, Howerter & Wager 2000, "The unity and diversity of executive functions and their contributions to complex 'Frontal Lobe' tasks: a latent variable analysis", Cognitive Psychology 41:49-100. Carrier (full-text PDF, opened): https://www.ling.ohio-state.edu/research/groups/lacqueys/readings/MiyakeEtAl2000.pdf — triad definitions, CFA result sentence, differential contributions (WCST/Shifting, TOH/Inhibition, operation span/Updating), "A simple dichotomy will not suffice".
- Friedman & Miyake 2017, "Unity and diversity of executive functions: Individual differences as a window on cognitive structure", Cortex 86:186-204. Carrier (PubMed abstract, opened): https://pubmed.ncbi.nlm.nih.gov/27251123/ — definition sentence (high-level processes... in the service of goal-directed behavior), robustly correlated but separable, not g, heritable.
- Hagger et al. 2016, "A Multilab Preregistered Replication of the Ego-Depletion Effect", Perspectives on Psychological Science 11(4):546-573. Carrier (PubMed abstract, opened): https://pubmed.ncbi.nlm.nih.gov/27474142/ — strength-model description, k=23/N=2,141, d=0.04 CI [-0.07,0.15]. TOOL EXCEPTION: automated verification failed for the PubMed carrier; the failure is characterized precisely: the verifier's cache file for this exact URL (md5 dc3c5fac415821618bad1340e7d88d04) was inspected and holds a JavaScript challenge page (challengeId present, 'reload this page to continue', no abstract text), so automated matching could not see the abstract; both quoted spans were verified verbatim by eye against the independently opened abstract (tool fetch) and cross-checked against the independent search-result rendering of the same abstract.
- James 1890, The Principles of Psychology, ch. XXVI. Carrier (opened): https://www.yorku.ca/pclassic/James/Principles/prin26.htm — "The essential achievement of the will... ATTEND to a difficult object and hold it fast before the mind." Verified verbatim this session (also carried on card P068).
- Thanissaro (trans.), AN 6.55 Soṇa Sutta. Carrier (opened): https://www.accesstoinsight.org/tipitaka/an/an06/an06.055.than.html — lute-string exchange and "over-aroused persistence leads to restlessness..." Verified verbatim this session (also carried in right-effort dossier and card B036).
- Baumeister & Vohs 2016, "Misguided Effort With Elusive Implications", Perspectives on Psychological Science 11(4):574-575. Carrier (Carlson School PDF, opened): https://carlsonschool.umn.edu/sites/carlsonschool.umn.edu/files/2019-04/baumeister_vohs_2016_perspectives_comment_on_hagger_rrr_misguided_effort_with_elusive_implications_2_0.pdf — "plagued by manipulation failure and therefore did not test ego depletion"; "For two decades, we have conducted studies of ego depletion carefully and honestly... we find the effect over and over"; promised preregistered multisite project. Quoted in the dossier (strength-model defense side of disagreement 1).
- Vohs et al. 2021, "A Multisite Preregistered Paradigmatic Test of the Ego-Depletion Effect", Psychological Science 32(10):1566-1581. Carrier (Carlson School PDF, opened): https://carlsonschool.umn.edu/sites/carlsonschool.umn.edu/files/2026-01/vohs-et-al-2021-psci-ego-depletion.pdf — k=36, N=3,531, confirmatory d=0.06 nonsignificant. Cited in the dossier.
- Dang et al. 2021, "A Multilab Replication of the Ego Depletion Effect", SPPS 12(1):14-24.
- Baumeister & Vohs 2016, "Misguided Effort With Elusive Implications", Perspectives on Psychological Science 11(4):574-575. Carrier (Carlson School PDF, opened): https://carlsonschool.umn.edu/sites/carlsonschool.umn.edu/files/2019-04/baumeister_vohs_2016_perspectives_comment_on_hagger_rrr_misguided_effort_with_elusive_implications_2_0.pdf — "plagued by manipulation failure and therefore did not test ego depletion"; "For two decades, we have conducted studies of ego depletion carefully and honestly... we find the effect over and over". Quoted in the dossier.
- Vohs et al. 2021, "A Multisite Preregistered Paradigmatic Test of the Ego-Depletion Effect", Psychological Science 32(10):1566-1581. Carrier (Carlson School PDF, opened): https://carlsonschool.umn.edu/sites/carlsonschool.umn.edu/files/2026-01/vohs-et-al-2021-psci-ego-depletion.pdf — k=36, N=3,531, confirmatory d=0.06 nonsignificant. Cited in the dossier.
- Baddeley 2021, "Developing the Concept of Working Memory: The Role of Neuropsychology", Archives of Clinical Neuropsychology. Carrier (PMC, opened): https://pmc.ncbi.nlm.nih.gov/articles/PMC11979773/ — homunculus criticism accepted; "a convenient reminder of the problem area, not an explanation"; "the homunculus would be able to retire". Quoted in the dossier.
- Muraven, Baumeister & Tice 1999, "Longitudinal improvement of self-regulation through practice: building self-control strength through repeated exercise", Journal of Social Psychology 139(4):446-457. Carrier (PubMed abstract, opened): https://pubmed.ncbi.nlm.nih.gov/10457761/ — "showed significant improvement in self-regulatory capacity". Quoted in the dossier.
- Hitch, Allen & Baddeley 2024, "The multicomponent model of working memory fifty years on", Quarterly Journal of Experimental Psychology 78(2):222-239. Carrier (PMC, opened): https://pmc.ncbi.nlm.nih.gov/articles/PMC11783980/ — executive "wide open to criticism for being little more than a label for the homunculus"; the Logie 2016 retirement suggestion ("replaced with a set of distributed processors that operate without the need for central control"); the model's current middle position ("a separate set of control resources"). Quoted in the dossier.
- DeWitt 2020, "ADHD, Willpower, and Interest: A Positive Approach", University of Pennsylvania MAPP capstone. Carrier (UPenn repository PDF, opened): https://repository.upenn.edu/server/api/core/bitstreams/e85d5911-7c45-41b2-8377-2bb30cec785a/content — ADHD-as-deficit-of-interest passage; Beike & Zentall 2012 familiar-vs-novel study passage; "needs stimulation and interest" sentence. Quoted in the dossier (also carried on card AT069).
- Miyake & Friedman 2012, "The nature and organization of individual differences in executive functions: Four general conclusions", Current Directions in Psychological Science 21(1):8-14. Carrier (PMC, opened): https://pmc.ncbi.nlm.nih.gov/articles/PMC3388901/ — nested-factors model quotes (Common EF; no inhibition-specific variance; Common EF as goal maintenance biasing lower-level processing). Quoted in the dossier.
- Miles, Sheeran, Baird, Macdonald, Webb & Harris 2016, "Does self-control improve with practice? Evidence from a six-week training program", Journal of Experimental Psychology: General 145(8):1075-1091. Carrier (White Rose PDF, opened): https://eprints.whiterose.ac.uk/id/eprint/107549/3/Does%20Self-Control%20Improve%20With%20Practice%20Final%20Manuscript%20with%20Supp%20Refs.pdf — "we found no evidence that training led to any improvements in self-control"; "training self-control through repeated practice does not result in generalized improvements in self-control". Quoted in the dossier.

## Documented disputes (advisor QC round 5 scoping)

1. Ego-depletion findings and test adequacy: Hagger 2016 RRR (null) vs Baumeister & Vohs 2016 (manipulation-failure defense), with Vohs 2021 (null) and Dang 2021 (small significant) as further multilab evidence. Substantiated from opened sources on both sides.
2. Self-control practice generalization: Muraven et al. 1999 (practice gains) vs Miles et al. 2016 (no generalized improvement). Substantiated from opened sources on both sides.
The controller question and the tuning advice are presented as open questions, not counted as disputes. Carrier (publisher PDF, opened): https://research-api.cbs.dk/ws/portalfiles/portal/71213306/junhua_dang_et_al_a_multilab_replication_of_the_ego_depletion_effect_publishersversion.pdf — "Data from 12 labs across the globe (N = 1,775) revealed a small and significant ego depletion effect, d = 0.10." Quoted and cited in the dossier.

## Card links used (all resolve per dossier_check)

P068, AT045, A056, CO045, B036, ST161, ST064, ST325, Executive function theory Miyake, Working memory model Baddeley, Cognitive flexibility.

## Candidate deepening for the next writer (NOT yet opened/verified — do not cite without opening)

- Development: ST325 (two-year-old and blocks) as story anchor already linked; a development subsection would need a source (e.g., the pretend-play/executive-function literature the card references).
- Possible deeper body topics for the next writer: aging and the executive suite; working-memory training controversies (the same train-vs-transfer dispute shape as self-control practice); the unity/diversity literature beyond 2012 (e.g., Friedman et al. 2008 full nested-factor paper).

## Final proofread note (2026-10-25 ~05:16Z, writer's taper pass)

Full end-to-end read of the draft; no defects found. The Hagger 2016 blockquote ends "(d = 0.04, 95% CI [-0.07, 0.15]." with no closing parenthesis; this is VERBATIM - the published abstract itself omits the closing paren (verified 05:15Z against the SAGE journal abstract at journals.sagepub.com/doi/10.1177/1745691616652873 and the RUG full-text PDF at pure.rug.nl, both showing "encompassed zero (d = 0.04, 95% CI [-0.07, 0.15]."). Do not "correct" it. The ASCII hyphen in -0.07 stands for the source's typographic minus sign.

## Disagreement-repair pass (worker-pplx-dos35-1025-0600, 2026-10-25)

One new substantiated disagreement added ("Should the central
executive be retained or retired?"), bringing the count to THREE.
The 3-5 bar is MET (3 substantiated disagreements), subject to
supervisor/owner ratification.

Carriers re-opened and verified this session (fetch tool; quotes
matched word-for-word against the raw text):

1. Hitch, Allen & Baddeley 2024 (PMC11783980) — all three quoted
   spans verified verbatim this session by eye: the homunculus
   criticism ("wide open to criticism for being little more than
   a label for the homunculus"); the Logie 2016 retirement
   proposal ("It has been suggested it is time for the executive
   to be retired and replaced with a set of distributed
   processors that operate without the need for central control,
   in so doing avoiding the problem of the homunculus"); and the
   model's current retain position ("We see the central executive
   as a separate set of control resources that can interact with
   the rest of the system in many ways").
2. Baddeley 2021 (PMC11979773) — the homunculus passages
   re-verified verbatim by eye: "a convenient homunculus, a
   little man in the head who could be used to explain away any
   awkward findings"; "a convenient reminder of the problem area,
   not an explanation"; "eventually with all the functions
   explained, the homunculus would be able to retire."

TOOL EXCEPTION update: PMC blocked-fetch pattern now affects
PMC11783980 and PMC11979773 in the automated verifier run (the
earlier ledger entry recorded PMC11979773 as PASSED; it is now
NOT FOUND in the automated run, consistent with the standing PMC
blocked-fetch pattern). All quoted spans from both carriers were
verified verbatim by eye against the freshly opened articles
this session, per the HANDOFF rule for JS-rendered/blocked
carriers.

The opposition: the retain side (the model's current position)
holds the central executive as a separate set of control
resources; the retire side (Logie 2016, cited in the same
article) holds that distributed processors operating without
central control should replace it. Baddeley's own earlier
homunculus-as-placeholder position is carried as sitting between
them. The disagreement is stated as a documented dispute inside
the controller question, not as an open question.

Checks: dossier_check.py exit 0 (16 card links, 20 headers, 32
external carriers); dossier_density.py 0 dense;
dossier_quote_verify.py 28 checked / 17 not found — all 17 are
the documented PMC/PubMed blocked-fetch and verifier-extraction
exceptions recorded in this ledger's standing exception list
(verified by eye per the HANDOFF rule; no new exceptions
introduced by this edit beyond the PMC pattern noted above).

STATUS: THREE substantiated disagreements (What did the multilab
tests settle about ego depletion?; Does self-control practice
generalize?; Should the central executive be retained or
retired?). The 3-5 bar is MET, subject to supervisor/owner
ratification. The owner reader gate noted in the batch comment
remains outstanding.

## Repair pass (worker-pplx-dos35-1025-0600, 2026-10-25, advisor QC applied)

Repairs applied to the third disagreement section per advisor QC:

1. Heading narrowed from "Should the central executive be retained or
   retired?" to "Should working memory retain a separate executive
   component?" — the claim is now a model-level disagreement about
   how control is represented, not a claim about neural
   architectures or a literal controller.
2. Para 2 attribution corrected: "The same article reports a
   retirement proposal, citing Logie (2016)." The Logie 2016
   retirement proposal is carried in the Hitch, Allen and Baddeley
   article; the original Logie 2016 was not opened. The quote is
   now the full sentence beginning "It has been suggested…" with
   its qualification intact.
3. The invented middle position removed. Baddeley's 2021 homunculus
   rationale is now described correctly as a rationale for keeping a
   provisional label while its component functions remain
   unexplained, not as a third camp between retain and retire.
4. The editorial lean simplified to the advisor's supported
   formulation: "I favour treating the executive as a working
   description whose component functions still need explaining. I
   want the label to keep those questions visible." The broader
   philosophical opposition (done by something vs whole system
   doing) is removed as unsupported.

Verification record correction: The automated quote matcher
reported 28 checked / 17 not found. These 17 unmatched spans are
the documented PMC/PubMed blocked-fetch and verifier-extraction
exceptions recorded in this ledger's standing exception list.
The fresh verification performed this session covered the quoted
spans in the new section only (Hitch Allen Baddeley 2024
PMC11783980 and Baddeley 2021 PMC11979773, both re-opened and
checked verbatim by eye). Inherited quotations retain their
previously recorded status. The earlier ledger entry's claim that
PMC11979773 "PASSED the automated run" was written before the
current run; the current run reports it as not found, consistent
with the standing PMC blocked-fetch pattern. No new failure modes
were diagnosed beyond that pattern.

Checks after repair: dossier_check.py exit 0 (16 card links, 20
headers, 32 external carriers); dossier_density.py 0 dense (27
paragraphs, 0.2 card links per paragraph).

STATUS: THREE substantiated disagreements (What did the multilab
tests settle about ego depletion?; Does self-control practice
generalize?; Should working memory retain a separate executive
component?). The 3-5 bar is MET, subject to supervisor/owner
ratification. The owner reader gate noted in the batch comment
remains outstanding and blocks declaring the dossier complete or
publication-ready; it does not block pushing this scoped repair.
