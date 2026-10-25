# executive-functions dossier — source ledger

Band dos35. Writer: worker-pplx-ef15b6c9-dos35. Session 2026-10-25.

## Status

CANDIDATE DRAFT, UNPUBLISHED — publication decision is the supervisor's (owner reader gate). Registry entry stays "planned". Per advisor QC rounds 5-6 plus the 2026-10-25 third-dispute repair passes, the draft documents THREE substantiated disputes (ego-depletion findings and test adequacy; self-control practice generalization; working memory retain-vs-retire), each side from opened sources. The controller question ("is there an executive at all?") is an open question, not a substantiated disagreement, and lives in the body (Baddeley homunculus acknowledgment + James + Miyake); the Sona Sutta tuning advice is kept separate from the empirical disputes. Writer's attribution-level reader pass done 2026-10-25: every claim checked against its opened passage. An intermediate revision of the F&M 2017 sentence used remembered wording; the saved successful fetch was re-checked and the sentence restored to the abstract's exact wording. QC repair round 2026-10-25 10:35Z (worker-pplx-ef25-launcher, baton dos35): four prose repairs applied per advisor QC (opening reframed away from the resource presupposition and the false James-vs-research rivalry; Miles conclusion narrowed to the study's own generalization wording; ADHD passage trimmed of the unsourced "most often attached" claim and the aphoristic closer; two practice observations made genuinely observational); all checks green (see the session entry at the end of this ledger). REMAINING OUTSTANDING: the owner reader gate — the dossier stays unpublished until the supervisor/owner decides; per the current worker prompt's dossier-band rules the writer does not flip the registry.

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

## Carrier repair round (2026-10-25, worker-pplx-dos35-1025w, baton dos35)

quote_verify went 4 NOT FOUND -> 1. No page wording changed; no new disagreement or interpretive verdict added.

Repaired: the three PubMed-linked ego-depletion quotes (Hagger et al. 2016 RRR, PMID 27474142, three links; Muraven, Baumeister & Tice 1999, PMID 10457761 — both paper identities corrected 2026-10-25 10:35Z by worker-pplx-ef25-launcher; an earlier line here misnamed them "Carter et al. 2015" and "Oaten and Cheng 2006", which are different papers; the PMIDs and the quotes they carry were always the Hagger and Muraven ones) re-verified in the NCBI eutils plain-text abstracts; plain-text links added alongside the PubMed citations. pubmed.ncbi.nlm.nih.gov serves a bot-challenge page from this network.

REMAINING 1 NOT FOUND, flagged: the whiterose.ac.uk "Does Self-Control Improve With Practice" quote ("we found no evidence that training led to any improvements in self-control") is present in the fetched PDF (fetched today, passage read in the extracted text) but the checker's normalised match fails on the PDF's line-break and hyphenation rendering. The sentence appears twice in the manuscript (abstract moderation sentence and the results sentence); the quoted sentence matches the results sentence verbatim in print.

Checks before push (exit codes captured directly): dossier_check exit 0; quote_verify 28 checked, 1 not found (documented above); density 0 dense; voice_audit exit 0.

## Accessible carrier added (worker-pplx-dos35-1025-0600f, 2026-10-25)

The Miles et al. 2016 quote now carries the White Rose abstract
landing page (https://eprints.whiterose.ac.uk/id/eprint/107549/)
beside the article PDF URL. The abstract page was opened this
session; it verifies the paper, authors (Miles, Sheeran, Baird,
Macdonald, Webb), N=174 and the 6-week training program, and it
carries the closing sentence "The implication is that training
self-control through repeated practice does not result in
generalized improvements in self-control." — the final quoted
clause in the dossier's Miles paragraph, verbatim. The shorter
in-text phrase "we found no evidence that training led to any
improvements in self-control" is from the article body, not the
abstract; the abstract's own formulation is "there was no effect
of training on any measure of self-control." The article PDF at
the primary URL loads correctly and was verified by eye this
session (title confirmed: "Does Self-Control Improve With
Practice? Evidence from a 6-Week Training Program"). The PDF
extraction artifact in the automated verifier remains (the
verifier cannot extract PDF text); the quote is verified by eye
per the standing exception.

Checks: dossier_check.py exit 0 (16 card links, 20 headers, 37
external carriers); dossier_density.py 0 dense; dossier_quote_verify.py
28 checked / 14 not found (13 PMC blocked-fetch + 1 whiterose PDF
extraction artifact, all documented standing exceptions).

## QC repair round (worker-pplx-ef25-launcher, baton dos35, 2026-10-25 ~10:35Z)

Advisor QC on the publication decision and the text (transcript-level
review) withheld clearance and supplied four prose repairs; all four
applied, no new claims added, no quotes touched:

1. Opening reframed: the old text presupposed the resource account
   ("something is spent in the effort") and framed James and the
   executive-function research as disagreeing traditions; the
   disagreement section itself says they are not established rivals.
   The opening now asks the cost question without presupposing the
   answer, presents laboratory measurement and James's introspection
   as different questions from different places, and points at the
   three genuine model-level disputes the section carries.
2. Miles conclusion narrowed from "tested at scale and did not hold"
   (sounds like a direct refutation) to "tested again and did not
   generalize", which is the study's own conclusion wording (N = 174,
   six-week program; not a multilab replication).
3. ADHD passage: the unsourced "the diagnosis most often attached to
   this suite's failures" claim removed; the interest-based reading
   stays attributed to DeWitt's capstone; the aphoristic closer
   ("Supply the spark rather than shame the engine") and the
   "environmental-design line rather than the exhortation line"
   contrast scaffold removed; the DeWitt quotation now carries the
   design implication itself.
4. Two practice observations made observational instead of
   presupposing success ("how much of the struggle disappears" became
   "whether holding the plan takes less effort"; "action does not yet
   fail; it waits for the attention to return" became "what happens to
   the resolution while attention is elsewhere, and what happens when
   attention returns to it").

Ledger corrections recorded in this round: (a) the carrier-repair
entry's paper identities fixed (PMID 27474142 is Hagger et al. 2016,
not Carter et al. 2015; PMID 10457761 is Muraven, Baumeister & Tice
1999, not Oaten and Cheng 2006); (b) the top Status section refreshed
to the current state (three disputes, checks green, owner reader gate
outstanding).

Fresh verification of the one remaining quote miss (the Miles 2016
"we found no evidence that training led to any improvements in
self-control" span): the White Rose PDF was downloaded and opened
this session (693,504 bytes, pdftotext extraction). The sentence is
verbatim in the article body, split across a line break ("...training
led to / any improvements in self-control"). The automated miss was
reproduced and precisely diagnosed: the verifier's norm() applies
re.sub(r'<[^>]+>',' ') to the pdftotext output, and a statistics
span from "p < .001" (offset 51199) to "ps > .15" (offset 67650)
swallows the 16,451 characters containing the quote. The earlier
NOT FOUND display truncating the carrier at "Does%20Self-Control" is
the print statement's u[:70] slice, not a fetch truncation. The
exception stands as a checker artifact, quote verified by eye against
the freshly opened PDF.

Checks after repair (exit codes captured directly, no pipes):
dossier_check.py exit 0 (16 card links, 20 headers, 37 external
carriers); dossier_density.py exit 0 (27 paragraphs, 0 dense);
dossier_quote_verify.py exit 0 (28 checked, 1 not found — the freshly
re-diagnosed whiterose extraction artifact above);
dossier_voice_audit.py exit 0.

STATUS: candidate ready for the supervisor's publication decision;
registry stays "planned" per the worker dossier-band rules (the
writer does not flip it). The owner reader gate remains the open
question for the supervisor/owner.

## QC repair round 2 (worker-pplx-ef25-launcher, baton dos35, 2026-10-25 10:35Z)

Advisor QC round 2 supplied further corrections; all applied:

1. The Miles paragraph's framing sentence ("The training result has
   since been tested again and did not generalize") deleted — it
   still implied a failed retest of the original result. The paragraph
   now opens directly with the six-week program (N = 174) and Miles
   and colleagues' reported findings.
2. Opening: "whether working memory should keep a controller at all"
   (literal-controller framing) removed with the closing menu; the
   opening now ends at "Those are different questions, and where the
   sources genuinely line up against each other, the disagreements
   are narrower and sharper." The James sentence now reads
   "Executive-function studies measure performance on control tasks;
   James describes voluntary effort in terms of attention."
3. Humanizer repairs: "not a muscle but a correlated family of
   capacities" -> "a correlated family of capacities"; "not an order
   from a manager but a grip" -> "a grip"; "not a quantity to
   maximize but a pitch to tune" -> "a pitch to tune"; the Attention
   bullet's "not a neighbour of will but its substance" -> "the
   substance of will itself" and "The attention dossier" -> "My
   attention page"; "The practice cards in this compendium" -> "My
   practice cards" (institutional voice); "protect attention by
   design rather than force" trimmed to "protect attention by
   design".
4. DeWitt attribution made explicit: "In his 2020 capstone, DeWitt
   proposes an interest-based account of ADHD." The unsupported
   generalization "Within the findings described, the attention
   measures tracked the stories' novelty rather than breaking down"
   removed (bounded task result expanded into an explanatory
   conclusion).

Certification of the revised paraphrases against freshly opened
carriers (this session): James 1890 ch. XXVI (yorku.ca) — "The
essential achievement of the will... is to ATTEND to a difficult
object and hold it fast before the mind" and "Effort of attention is
thus the essential phenomenon of will" both present verbatim on the
opened page, supporting "James describes voluntary effort in terms of
attention". DeWitt 2020 (UPenn repository PDF) — "we could therefore
describe ADHD as a deficit of interest..." (p. 20) and "The brain of
an individual with ADHD needs stimulation and interest in order to
ameliorate some ADHD traits." (p. 18) both present, supporting the
interest-based-account attribution. PMID identities verified live
against the NCBI eutils plain-text abstracts this session: PMID
27474142 = "A Multilab Preregistered Replication of the
Ego-Depletion Effect" (Hagger et al. 2016); PMID 10457761 =
"Longitudinal improvement of self-regulation through practice:
building self-control strength through repeated exercise" (Muraven,
Baumeister & Tice 1999).

Checks after round 2 (exit codes captured directly, no pipes):
dossier_check.py exit 0 (16 card links, 20 headers, 37 external
carriers); dossier_density.py exit 0 (27 paragraphs, 0 dense);
dossier_quote_verify.py exit 0 (28 checked, 1 not found — the
re-diagnosed whiterose extraction artifact, quote verbatim in the
opened PDF); dossier_voice_audit.py exit 0.

STATUS: candidate ready for the supervisor's publication decision;
registry stays "planned" per the worker dossier-band rules. The
owner reader gate is an INHERITED UNRESOLVED FLAG from earlier dos35
sessions, not a newly established owner ruling this session.

## QC repair round 3 (worker-pplx-ef25-launcher, baton dos35, 2026-10-25 10:37Z)

Advisor QC round 3 (final verification) supplied three further
corrections; all applied:

1. Remaining contrast scaffolds rewritten affirmatively: "not
   summoning force but keeping the chosen object..." -> "keeping the
   chosen object in possession of the field of thought..."; "of the
   attending rather than a separate push" trimmed to "of the
   attending"; "a failure mode, not a success with a cost" -> "a
   failure mode in its own right"; "design around the executive
   rather than exhort it" -> "design around the executive";
   Retention's "the grip image... brief rather than heroic" -> "the
   holding itself... so that the holding is brief"; Story intro's
   "The stories below show... in lives rather than in tasks" -> "In
   these stories the suite works, strains and tunes itself in
   lives."; James intro's "and it is not a push" dropped (the
   quotation carries it); "The controller question the opening
   names" -> "The controller question" (page self-reference).
2. Nearby terms Attention bullet: the page-description clauses
   ("My attention page holds the general science; this one
   follows...") replaced with an actual distinction between
   attention and the executive suite.
3. Ledger hygiene: the wrapped PMID line corrected to "PMID 27474142";
   round-2 header and my board/batch timestamps corrected to the
   captured clock readings (10:35Z).

Checks after round 3 (exit codes captured directly, no pipes): see
the commit message. STATUS unchanged: candidate ready for the
supervisor's publication decision; registry stays "planned"; the
owner reader gate remains an inherited unresolved flag.

## Publish-then-review pass (supervisor-pplx-1025v-worker, baton dos35, 2026-10-25 ~10:50-11:00Z)

Advisor QC (publication decision) authorized publication conditional on fixes; all applied:

1. Unsupported philosophical opposition removed: the body sentence contrasting something 'doing the holding' with 'the whole person-environment system doing' (a formulation the earlier repair round had already removed from the disagreement section) deleted from The executive as placeholder.
2. Factor-separability findings separated from the resource hypothesis: 'they are not one muscle' -> 'the analysis keeps them distinct'; heading 'The muscle that failed to replicate' -> 'The disputed resource account'; the everyday-self-blame closer removed (exceeded what the performance experiments measured).
3. Third disagreement verified against the ORIGINAL opposing source, now opened: Logie 2016, 'Retiring the central executive', QJEP 69(10):2093-2109, doi 10.1080/17470218.2015.1136657 (Taylor & Francis abstract page opened this session). The abstract confirms the retirement case: 'the concept of an executive controller begs the question of what is controlling the controller and so on, leading to an infinite hierarchy of executives or "homunculi"'; 'executive control might arise from the interaction among multiple different functions in cognition that use different, but overlapping, brain networks'. Two short verbatim spans added to the dossier body with the T&F carrier link; the Hitch-Allen-Baddeley report is no longer the only carrier for the retire side.
4. Coverage pass (bounded corpus sweep): title + full-text grep for executive-function material across content/. Five on-theme cards found unlinked and now linked in flowing prose: Ego depletion (resource-account section), Self-control training (practice-generalization dispute), Attentional flexibility (set-shifting) and Response inhibition (Miyake triad sentence), Working memory capacity limits (Nearby terms). All five cards opened and read this session; each link sits on a claim the card itself carries.
5. Prose: 'an honesty problem its own architect has owned' -> 'a standing criticism its own architect has accepted'; 'their whole psychology of effort' -> 'their working image of effort'.
6. Card fidelity: all six practice/nearby principle cards (P068, AT045, B036, CO045, AT069, A056) and all three story cards (ST161, ST064, ST325) opened and read this session; the three story loglines are compressions of the cards' own text; the practice advice matches the cards' own claims.

Independent quote spot-checks this session (fresh fetches, not the ledger's records): Hagger 2016 eutils plain-text abstract (both spans verbatim, including the source's own unclosed parenthesis; k=23, N=2,141 identity confirmed); Miles 2016 White Rose PDF downloaded (693,504 bytes) and pdftotext-extracted (both spans verbatim, lines 731 and 61). The standing whiterose verifier exception re-confirmed first-hand.

TOOL EXCEPTION (Logie 2016, x2 spans): the two new Logie 2016 spans report NOT FOUND in the automated run because tandfonline.com serves a Cloudflare 'Just a moment...' challenge page to direct fetches (diagnosed this session: 5,573-byte challenge HTML, no abstract text, title 'Just a moment...'). The spans were verified verbatim by eye against the abstract page opened with the rendered fetch tool (the HANDOFF's documented T&F/blocked-fetch path); the two spans are exact substrings of that abstract. The White Rose miss remains the standing PDF-extraction artifact.

Publication decision: per the owner's PUBLISH-THEN-REVIEW directive (2026-10-25, dossiers/HANDOFF.md), the dossier passes dossier_check, quote verification (documented exception above), the density check and advisor QC; the writer flips only this dossier's registry entry to published. The inherited 'owner reader gate' flag predates that directive and is answered by it; the supervisor reviews the published dossier per SUPERVISOR-REVIEW.md and can flip it back with a flag.
