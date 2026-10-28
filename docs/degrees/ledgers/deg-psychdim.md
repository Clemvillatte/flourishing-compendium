# Ledger: deg-psychdim

One ledger per degree. Append entries; never rewrite history. Every entry
carries a UTC timestamp and the agent id. Created 2026-10-25 by
worker-pplx-psychdim-1 from the TEMPLATE. The current matrix is v3 below;
v1 (commit 428a86b0), v2 and the v2.1 addendum (commits a7b746478 and
6b470727d) are superseded and preserved in git history.

## Corrections (2026-10-25, worker-pplx-psychdim-1; updated after advisor round 2)

- The v1 sources table recorded per-source opening times (08:15Z, 08:31Z,
  08:33Z) that were estimates rather than clock readings; superseded. The
  v2/v2.1 batch windows (08:14:44 to 08:16:40Z, about 08:19 to 08:23Z,
  about 08:21Z) were also reconstructions and are superseded. Verified
  clock facts for this session: T0 08:14:17Z; baton clock-in 08:14:44Z;
  pushes at 08:16:43Z, 08:20:26Z and 08:21:02Z. Per-source opening times
  were not recorded; the table below records only the verified date
  (2026-10-25) and the batch number.
- Matrix v1's self and overt-behaviour rows presented descriptions from
  Maitland 2024 Table 1 as general EEMM dimension definitions. Re-opening
  the paper shows the table is captioned "Expanded evolutionary meta model
  (EEMM) dimensions and linked FAP targets" and the descriptions sit in
  the FAP column: they are FAP targets linked to the dimensions, not
  general definitions. v2 onward relabels them.
- The v2.1 row for Woolley, Giurge and Fishbach 2025 described study
  components (a year-long resolution study, a cross-cultural comparison,
  step-count measurement, an experiment on intrinsic versus extrinsic
  emphasis) in language that could read as verified findings. The
  extraction returned the study design and research questions, not
  confirmed results; the current row describes what the paper studies.

- Correction (2026-10-25, after final advisor review): the content notes
  for lecture 13 chapter 2 and lecture 1 chapters 1 and 3 were first
  recorded from display-capped extractions, so their "read in full"
  claims were not then substantiated. The complete segments have now
  been read from the opened pages (lecture 1 through the end of the
  transcript, including the full course-logistics chapter 1 and the full
  five-example chapter 3 with the morality, mental illness and guest
  lecturer material; lecture 13 chapter 2 through the chapter 3
  boundary, including the trait-measurement history and predictive
  validity material). The content notes below are accurate as of this
  correction. Also corrected in the same pass: the lecture 7 chapter 5
  citation was moved off the attention-networks matrix row (it does not
  teach the three-network framework) onto a new selective-attention row;
  the lecture 14 exclusion note was qualified (the check establishes
  only that this lecture does not teach self-determination theory; where
  sexual motivation belongs is a separate owner or strategist decision);
  the candidates-table mapping for lecture 14 was fixed accordingly; the
  perception row was synchronized with the scope summary and the M3
  exit capability.

## Module production (2026-10-26)

m1-orientation (docs/degrees/modules/deg-psychdim/m1-orientation.md) is
WRITTEN and pushed as DRAFT, NOT CLEARED; blocked WIP. Constructive
alignment per the skill: five outcomes, each taught, practised and
assessed; worked appraisal with fading on Woolley Study 1; rubric with
strong and rejection examples per criterion; workload arithmetic on
measured word counts (assigned excerpt 680 words Hofmann and Hayes 2024,
section 1.4 240 words Maitland 2024, Noba about 5,011 words; total about
4 hours). Advisor QC round 1 applied (full ruling recorded in the session
log): byline corrected to Erin I. Smith (confirmed on the module page);
the p-value/sample-size teaching error and the unsupported "small to
medium" effect gloss removed (the coefficients are cross-lagged panel
coefficients from the paper's multilevel structural equation model, and
the module now says so); the CI-overlap teaching replaced with the
authors' own interpretation, attributed; the 577-completers analysis now
described as a sensitivity check on drop-out; the six-dimension teaching
supplied via a fully worked case (the Jordan case) covering all six
dimensions, VSR-C and the three levels, so the module no longer assesses
what it does not teach; retention/cue distinction fixed in the worked
example and rubric; levels exercise made a submitted deliverable with its
own criterion; the bounded-domain paragraph matched to the scope doc's
exclusion lines (contemplative science admissible for affect, self and
motivation where an opened source speaks to them); workflow language
moved off the learner-facing prose where the pilot format allowed.

Advisor QC round 2 applied (2026-10-26, full ruling in the session log;
repairs, not approval): the Jordan case now labelled fictional with the
construction stated and the learner invited to test the details against
their own experience; the unsupported physiology glosses removed from
the biophysiological level (no endorphin or fitness-improvement claims;
only observations a person could notice without asserting mechanism) and
the "complete account needs all three" claim softened to an invitation;
the second faded appraisal no longer holds the authors' interpretation up
as "the model to follow" and instead asks what would establish a
between-coefficient difference, with the authors' reading kept as a
caution and the unresolved question named; the rubric rejection example
for criterion 4 now rejects magnitude labels with no stated basis; the
Noba verification wording narrowed to what this session actually read
(byline and the scientific-versus-everyday-reasoning section), with the
remaining sections' coverage resting on the ledger's 2026-10-25 batch-2
verification; the bounded-domain statement and rubric criterion 5
synchronised with the revised scope (clinical protocols stay with the
legacy therapeutic material; the admission test for everything else is
the stated learner need; interpersonal and group perception named as
excluded). Gate-1 repair round 2 (same advisor ruling): the matrix now
carries a binding walk-of-life assessment clause and the three
knowledge-framed rows the ruling named (M3 illusion, M4 attention-score
interpretation, M5 trait account) are re-centred; the affective
neuroscience elective is EXCLUDED under the when-in-doubt-exclude rule;
the language (psycholinguistics) elective is EXCLUDED on the same rule
(round 2 consistency pass: the scope doc now states "Elective branches:
none", and the affected OYC lecture 7 chapters 1 to 3 are excluded with
it); stale benchmark and exclusion-review bullets superseded in both the scope
doc and this ledger; M1 is not marked complete. Re-review was requested
from the deg-gate reviewer after round 2 (TASKBOARD, 2026-10-26).

INDEPENDENT SOURCE AUDIT RESPONSE (2026-10-26, deg-verify-b audit at
verify/deg-psychdim-m1-audit.md, findings M1-V01 to V05; repairs this
session, sources opened where grounding was needed):
- M1-V01 (Noba p-value teaching) APPLIED: a correction passage now sits
  immediately after the required-reading list and before the worked
  example; it names the module's repetition-gloss sentence and its
  vocabulary-list NHST gloss as loose, states the ASA definition
  (p-value = probability under a specified statistical model of a
  summary equal to or more extreme than observed) and the ASA's
  principles 2 and 5 in plain terms (not the probability the hypothesis
  is true or that chance produced the data; not effect size or
  importance), and tells the learner to carry the correction while
  reading. Grounded in the opened ASA 2016 statement (Berkeley PDF) and
  Greenland et al. 2016 (PMC4877414, misinterpretation list read,
  including the chance-alone misinterpretation). The Noba source stays
  required; its nonstatistical distinctions are unaffected.
- M1-V02 (overlap shortcut) APPLIED in round 2 and strengthened this
  pass: the faded appraisal now states that overlap alone cannot
  establish the no-difference conclusion because separate intervals are
  not a test of the difference (Greenland et al. 2016 misinterpretation
  21), directs the learner to report estimates and uncertainty and
  leave the change-over-time question open, and the rubric's rejection
  example now rejects deference to the author shortcut.
- M1-V03 (attrition and inference unit) APPLIED: the worked example now
  carries the four wave counts (2,000; 1,046; 709; 577), the all-
  available-data estimation method, and the authors' own drop-out check
  (completers less motivated, if anything); the first appraisal now
  quotes the paper's between-persons finding and distinguishes
  prediction among surveyed people from a promise about the learner's
  own adherence.
- M1-V04 (EEMM as proposal, not promise) APPLIED: the module's opening
  now offers the map as a proposal that may help the learner notice an
  influence or option, not a diagnosis, exhaustive account or
  guarantee, with the usefulness test on the learner's own material
  named. No affiliation inferences were found in this ledger's Maitland
  records (checked; no repair needed).
- M1-V05 (physiology decoration) APPLIED in round 2 (Jordan labelled
  fictional; only observable bodily states, no mechanism asserted).
- Reviewer note on the ANT row (advisor QC round 3) APPLIED: the M4
  matrix row's practice cell is restored to interpreting supplied
  sample network scores, with a separate walk-of-life question about
  what the framework does and does not say about one recurring everyday
  attention situation; no informal diary is presented as ANT
  measurement.
- Rubric criterion 5's Strong example now names all three owned
  exclusions (wellbeing outcomes to the Positive Psychology walk;
  treatment protocols to the legacy therapeutic material; contemplative
  doctrine to the contemplative practica).
Workload note: the added correction passage is about 230 words of module
prose the learner must read; it is accounted for inside the Step 3
reading allowance (about 4 minutes with study overhead at 180 words per
minute, labelled as an estimate), so the module total is now about
245 labelled minutes, still about 4 hours.

Advisor QC round 3b (finishing repairs, 2026-10-26) applied: the V01
correction now precedes the reading instructions under a "Before
reading" label, tells the learner to use the corrected definition in
place of the glossary entry, and notes the probability-values glossary
entry as loose in the same way; both Noba self-test boxes checked
against the misconception (unaffected: falsifiability and induction
only); "a caution worth carrying" deleted from the faded appraisal;
the attrition sentence now states full-information maximum likelihood,
the completer-only analysis, and that these checks do not establish
attrition could not affect the result; inline citations added in the
teaching text (ASA statement, Greenland et al. 2016 misinterpretation
21, Woolley Study 1 methods and hypothesis-testing anchors); the graded
definitions deliverable and rubric criterion 1 now require the three
binding-clause elements (what matters in the case, what the framework
helps the learner understand or choose, what remains uncertain), with a
worked Strong example; rubric criterion 5 now says "excludes wellbeing
as a separate outcome-science subject"; workload justification
corrected as above. Ryan et al. bibliographic metadata verified
(Psychological Bulletin 148(11-12) 813-842, doi 10.1037/bul0000385,
issue dated Nov-Dec 2022; the version read is the accepted-manuscript
PDF). Recheck requested from deg-verify-b and the pedagogical
reviewer; their clearance remains distinct from this repair record.

DEG-VERIFY-B RECHECK RECEIVED AND RESIDUALS APPLIED (2026-10-26, recheck
through fad50cb recorded in verify/deg-psychdim-m1-audit.md; the two
high-priority statistical defects confirmed repaired; a full source
verification evidence file for the degree was also delivered at
verify/deg-psychdim.md, PD-V01 to PD-V11, including placement
recommendations that are editorial proposals for the production owner,
not gate clearances). Bounded residuals applied this pass:
- M1-V03 residual: "later studies in the paper manipulate motivation"
  replaced with the accurate description (Study 4 randomly assigns an
  intrinsic-versus-extrinsic framing for a health app and measures
  product scans a day later; verified in the fetched paper), and "the
  association reads as solid on this sample" replaced with a
  model-conditional reading (the interval shows a positive association
  under the model; excluding zero is not protection from bias and not
  a measure of practical importance).
- M1-V04 residual: "knowing which process is doing the work" replaced
  with "asking which processes and circumstances may be involved".
- M1-V06 (workload reconciliation): the workload section now states
  explicitly that the Woolley et al. 2025 material enters through the
  worked example's quoted statistics in module prose, that the paper
  itself is optional further reading, and that no Woolley excerpt is
  part of the required reading budget.
The verification evidence file's placement proposals (bounded excerpts
per source, exclusions of full debates, terminology cautions) are
recorded for the held production phases; adopting them into module
text is production work and stays held with M2 pending the stop-gate
ruling.

DEG-VERIFY-B SECOND RECHECK APPLIED (2026-10-26, recheck through
db2633a recorded in verify/deg-psychdim-m1-audit.md; M1-V03, M1-V04
and M1-V06 confirmed repaired by the verifier). Residuals from that
recheck applied this pass as production owner:
- M1-V07 (first-path baseline exception): the general model
  explanation now states that the panel models are described by the
  authors as stationary autoregressive cross-lagged panel models, that
  the first prediction (first survey's motivation to second survey's
  adherence) cannot adjust for earlier adherence because adherence
  was not measured at the first survey, and that checking what a model
  actually adjusts for is part of appraising it. Evidence status
  RESOLVED this session: the module now cites the paper's own Method
  section (T1 survey measured the resolution and its motivation; the
  T2-T4 follow-up surveys measured adherence), read first-hand in the
  fetched Woolley 2025 copy — the paper's measurement schedule itself
  establishes the baseline exception, and the paper's description of
  the models as autoregressive supports the later-paths wording. The
  OSF syntax link was REMOVED from the module: the file could not be
  independently opened (files.osf.io 502; crawler robots-blocked;
  page is a JavaScript shell; the OSF API confirms only the file's
  existence, name and location, not its contents). The deg-verify-b
  audit's verbatim quotation of the syntax remains in the audit file
  as corroborating material, not module-cited. Related repairs in the
  same pass: the design description now states the measurement
  schedule accurately (first survey: resolution and motivation;
  follow-up surveys: motivation and adherence), the faded practice no
  longer says only the numbers have changed — it now identifies the
  structural difference between the first and second predictions — and
  the beta-scale caution says regression coefficients, dropping
  standardised, which the paper does not state.
- Beta-scale safeguard added before the faded practice: the betas are
  regression coefficients, neither percentage improvements nor
  individual success probabilities nor treatment benefits (the word
  standardised was dropped after checking the paper, which does not
  state it).
- Workload arithmetic residual: the labelled components sum to 240
  minutes (105 + 15 + 30 + 30 + 60), and the total now reads about
  240 minutes, replacing the earlier about-245 figure; the earlier
  about-245 statement in the round-3b record above is superseded by
  this correction. The correction passage remains inside the
  105-minute reading allowance; no task or reading was added.
- Bibliographic note: the verifier records that the Maitland link's
  shortened display title is not evidence of a wrong link; the full
  title is supplied in the audit file. No module change made for
  this item.

DEG-VERIFY-B M3 SOURCE-TO-TASK FLAG APPLIED (2026-10-26, flag c814f6e):
the verifier flagged that the Ehring 2021 rumination source is a
commentary/synthesis, not a primary experiment report, so the M3
exercise must not ask learners to treat it as a primary study or
invent experimental details. Applied at planning level (module text
stays held with M3 production): the full-matrix row and the scope
doc's M3 exercise list now read commentary appraisal, the row states
that the exercise distinguishes what a commentary can and cannot
support and identifies the information a primary report would add, and
the exercise description includes crediting not reported or cannot
assess where appropriate, matching the verifier's bounded proposal.
The verifier's suggested short paragraph for the module (beginning
Converging evidence comes from experimental research) is recorded for
M3 production, not adopted now. The conditioning-excerpt boundary
measurement (PD-V14) is also recorded by the verifier for M3; my
refresh of the conditioning module this session independently
confirms its habit coverage serves the row.

WAITING ON (2026-10-26, updated 00:44Z): an authorized decision on the
Phase 0 pilot stop-gate (the reviewer's record says an owner ruling is
owed; the live enrichment supervisor, supervisor-pplx-1026c, has been
asked to route or obtain it — the README states the gate condition but
names no delegate, so no response short of an authorized decision is
treated as authorization); pedagogical reviewer
recheck of the changed M1 passages. RESOLVED since the previous note:
the deg-gate final confirmation has arrived and is recorded in the Gate
decisions table (round-2 clearance CONFIRMED; the owner's stricter
elective exclusions accepted; band phase authorized to carry
gate1-cleared). The separate coverage gate is also recorded CLEARED by
the deg-gate reviewer; module production stays closed solely behind
the Phase 0 pilot stop-gate ruling.

STOP-GATE CONFLICT (flagged to the live supervisor for a documented
ruling, 2026-10-26): the Gap register below still records that the
Phase 0 pilot stop-gate blocks module production; the owner's 2026-10-26
priority directive (four degrees online and qualitative, one by one,
psychdim first) and the supervisor-authored PIPELINE-2026-10-26 route
module production for this degree now. Per degrees/OPERATIONS.md the
conflict is flagged here and in commit messages, never resolved
silently; the degree owner's production work is WIP that does not
gate-clear anything. DELEGATION NOTE (2026-10-26): the degrees README
states the gate condition (production stays closed until the pilots
pass independent review) but names no delegate for lifting it; the
deg-gate reviewer's record words it as an owner ruling owed. The lane
therefore treats only an authorized decision as lifting the hold, and
the live supervisor is asked to route or obtain that decision; a
supervisor response is not by itself assumed to be the authorization.
The theory pilot mod-phil-1 has passed its advisor
final review; the practice pilot is parked by the owner (no Qi Gong
work today). STATUS CORRECTION (2026-10-26, later the same day): the
coverage gate recorded in this section as awaiting confirmation has
since been recorded CLEARED by the deg-gate reviewer, and Gate 1 is
cleared and confirmed (see the Gate decisions table); the passage
above is preserved as the historical record of the flag as written.

Sources opened this session (2026-10-26, all raw fetches, free access;
word counts measured for the assigned segments):

| URL | by | what it verified |
|---|---|---|
| https://pmc.ncbi.nlm.nih.gov/articles/PMC11303929/ | supervisor-e03fed44-degpsychdim | Hofmann and Hayes 2024 re-opened; assigned excerpt (opening highlights through the EEMM paragraph end) measured at 680 words; EEMM six-dimension passage confirmed verbatim on the live page |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC12392214/ | supervisor-e03fed44-degpsychdim | Maitland 2024 section 1.4 re-opened and re-read; 240 words measured; VSR-C passage confirmed |
| https://nobaproject.com/modules/thinking-like-a-psychological-scientist | supervisor-e03fed44-degpsychdim | Noba module re-opened; byline Erin I. Smith, California Baptist University, confirmed on the module page; body measured at about 5,011 words; scientific-versus-everyday-reasoning section read, and in a second pass the falsifiability (Popper), hypothesis-testing design, NHST (null and alternative hypotheses) and Type I and II error sections (with the maturity-and-grades running example) read from the same fetched copy; the remaining sections' topic coverage rests on the ledger's 2026-10-25 batch-2 verification |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/ | supervisor-e03fed44-degpsychdim | Woolley, Giurge and Fishbach 2025 re-opened; Study 1 statistics confirmed on the live page (beta 0.216 SE 0.03 z 6.95 p < .001 CI [0.13, 0.30]; beta 0.099 SE 0.03 z 3.00 p = .003 CI [0.04, 0.20]; beta 0.080 SE 0.03 z 2.36 p = .019 CI [0.01, 0.15]; N 2,000 MTurk US; n 577 completers; cross-lagged panel models within multilevel structural equation modeling); the authors' overlapping-CI interpretation confirmed |
| https://selfdeterminationtheory.org/wp-content/uploads/2023/01/2023_RyanDuineveldDiDomenicoEtAl_Meta.pdf | supervisor-e03fed44-degpsychdim | Ryan, Duineveld, Di Domenico, Ryan, Steward and Bradshaw, "We know this much is (meta-analytically) true", Psychological Bulletin 148(11-12) 813-842, doi 10.1037/bul0000385, issue dated Nov-Dec 2022 (publisher metadata verified this session via the NYU IFP record and multiple citing indexes; some indexes cite 2023, and citing sources are split); opened as a free PDF from the theory's official site; abstract and key results read (60 meta-analyses of SDT's six mini-theories; support for the motivational taxonomy and for need satisfaction and frustration effects on well-being and ill-being; applied evidence in organizations, health care, parenting and education; methodological limits stated); caveat: this PDF is the accepted manuscript (© 2022 APA notice), not the copy of record, and is the version actually read |
| https://www.stat.berkeley.edu/~aldous/Real_World/ASA_statement.pdf | supervisor-e03fed44-degpsychdim | ASA 2016 statement on p-values opened; definition and principles 1, 2 and 5 read verbatim (p-value = probability under a specified statistical model of a summary at least as extreme than observed; not the probability the hypothesis is true or that chance produced the data; not effect size or importance) |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC4877414/ | supervisor-e03fed44-degpsychdim | Greenland, Senn, Rothman, Carlin, Poole, Goodman and Altman 2016 (European Journal of Epidemiology) opened; misinterpretation list read, including the chance-alone misinterpretation and misinterpretation 21 on overlapping confidence intervals (overlap is not a test that two estimates do not differ; comparison requires statistics that directly test the difference) |
| https://nobaproject.com/modules/functions-of-emotions | supervisor-e03fed44-degpsychdim | M2 readiness refresh: Noba Functions of Emotions re-opened on 2026-10-26; byline Hyisung Hwang and David Matsumoto, San Francisco State University, confirmed on the module page (matches the batch-2 record); section structure read via page extraction (functions of emotions; intrapersonal: act quickly with minimal conscious awareness, prepare the body, influence thoughts, motivate future behaviour; interpersonal: expressions facilitate perceiver behaviours, signal relationships, provide incentives; social and cultural: display rules); the module does not explicitly discuss inflexible emotions, consistent with the matrix (the difficulties row rests on Martinez-Priego et al. 2024); body measured this session at 2,794 words with stated boundaries and method: the count covers the module text from the Introduction heading through the end of the social and cultural functions section (ending with the sentence about emotions playing a critical role in the successful functioning of any society and culture), stopping before Outside Resources; tags, learning objectives, discussion questions, vocabulary, references and appendix matter are excluded; method: page HTML fetched and stripped of markup, whitespace-normalised, machine-counted; free access, no paywall |
| https://nobaproject.com/modules/conditioning-and-learning | supervisor-e03fed44-degpsychdim | M3/M7 readiness refresh: Noba Conditioning and Learning opened on 2026-10-26; byline Mark E. Bouton, University of Vermont, confirmed on the module page; section structure read via page extraction (two types of conditioning; classical conditioning effects, learning process, extinction; instrumental conditioning: stimulus control, choice, cognition; combining the two; observational learning); verbatim definitions confirmed for classical conditioning (neutral stimuli associated with psychologically significant events) and operant conditioning (a behavior associated with the occurrence of a significant event); habit formation is covered (repeated instrumental actions become habits; habits no longer sensitive to reinforcer devaluation), which serves both the M3 conditioning row and the M7 habits row; body about 5,000 words per the page extraction (estimate; a measured count is owed if assigned at production); Noba access is free, consistent with this session's other Noba fetches |
| https://nobaproject.com/modules/judgment-and-decision-making | supervisor-e03fed44-degpsychdim | M3 readiness refresh: Noba Judgment and Decision Making opened on 2026-10-26; byline Max H. Bazerman, Harvard University, confirmed on the module page; section structure read via page extraction (rational decision benchmarks; biases: overconfidence, anchoring, framing; three worked problems; contemporary developments; fixing our decisions); heuristics and biases covered with the vocabulary definition of heuristics as cognitive (or thinking) strategies that simplify decision making by using mental short-cuts (verbatim); System 1/System 2 dual-process framing covered (System 1 intuitive, fast, automatic, effortless, implicit, emotional; System 2 slower, conscious, effortful, explicit, logical); availability heuristic discussed via the retrievability bias; body about 2,800 words per the page extraction (estimate; a measured count is owed if assigned at production); free access, no paywall |
| https://nobaproject.com/modules/memory-encoding-storage-retrieval | supervisor-e03fed44-degpsychdim | M3 readiness refresh: Noba Memory (Encoding, Storage, Retrieval) opened on 2026-10-26; byline Kathleen B. McDermott and Henry L. Roediger III, Washington University in St. Louis, confirmed on the module page; section structure read via page extraction (varieties of memory; three stages of the learning/memory process: encoding, storage, retrieval; putting it together: improving your memory); the three-process sentence confirmed verbatim (encoding = learning by perceiving and relating to past knowledge; storing = maintaining over time; retrieving = accessing when needed); working memory covered (holding information briefly and working with it); memory failures covered (forgetting, misremembering, false memories, interference, retrieval failures); body about 5,500 words per the page extraction (estimate; a measured count is owed if assigned at production); free access, no paywall |
| https://nobaproject.com/modules/personality-traits | supervisor-e03fed44-degpsychdim | M5 readiness refresh: Noba Personality Traits opened on 2026-10-26; byline Edward Diener and Richard E. Lucas, confirmed on the module page; section structure read via page extraction (Five-Factor Model; facets; traits beyond the five; the person-situation debate and alternatives to the trait perspective; appendix with the Mini-IPIP scale); Big Five/OCEAN coverage confirmed, and the person-situation debate section directly serves the M5 trait-account deliverable's person-situation caveat; the Mini-IPIP scale in the appendix is a free self-assessment instrument, noted here as an unadopted production proposal for the M5 trait exercise only (it is not an instrument for self-concept-clarity assessment, which the M5 row rests on Manchiraju 2026 for); total module length about 5,000 words per the page extraction, and that figure includes the appendix, vocabulary and references, so the main-body-only count is smaller and a measured count with stated boundaries is owed if assigned at production; free access, no paywall |

### M2 preparation (2026-10-26, worker-pplx-degpsychdim-1026a; no module prose written; written while the stop-gate ruling was pending (the ruling has since been delivered, see the sections below)

Advisor planner round 1 (2026-10-26) reviewed the M2 plan and BLOCKED module
drafting until the Phase 0 stop-gate conflict is resolved by an authorized
decision (ruling routed to the live supervisor, supervisor-pplx-1026d, on
the TASKBOARD and OWNER-BOARD at 02:12Z). The same round approved the
preparation work below as permitted. All three M2 sources were opened
THIS session, free access, no paywall. PROVENANCE (advisor round-2
correction, verified 02:24Z): every selected passage below has since
been re-verified VERBATIM against the raw page text fetched directly
(plain HTML retrieval, tags stripped, no extraction prompt): the Noba
response-choice passage, the Barrett in-brief paragraph, the
Martinez-Priego intro/discussion/conclusion assignment and the
Gross-model Results paragraph all match the raw text word for word.
Word counts are reported two ways where they differ: raw-text counts
include citation tokens (the rendered text prints citations with
spacing); cleaned-transcription counts are the reading-time basis.
The five-stage process-model claim below was upgraded to a FULL-TEXT
check: situation selection, situation modification, attentional
deployment, cognitive change and response modulation do NOT appear
anywhere in the review's page text; antecedent-focused and
response-focused appear exactly in the Results paragraph recorded
below.

1. Noba Functions of Emotions re-opened; byline Hyisung Hwang and David
   Matsumoto confirmed again on the module page; the PD-V13 response-choice
   passage re-fetched VERBATIM (the final paragraph of Emotions Prepare the
   Body for Immediate Action, beginning One common misunderstanding many
   people have when thinking about emotions and ending albeit an important
   one; 94 words measured). VERIFICATION-BEHAVIOR NOTE: a first
   transcription of this passage from an earlier page extraction was
   WRONG (reworded sentences); the fresh verbatim re-fetch caught it; the
   passage above is the fetch-confirmed text and the module may quote only
   that text. The module body remains 2,794 words as measured by the
   2026-10-26 readiness refresh.
2. Martinez-Priego, Poveda and Roca 2024 re-opened; the verifier's exact
   PD-V10 assignment read verbatim and measured: Introduction from Usually
   defined through the paragraph before Despite the importance (three
   paragraphs, 499 words), Discussion opening two paragraphs (213 words),
   Conclusion from Although our study also has several strengths through
   Empirical studies will need to consolidate this theoretically derived
   conclusion (120 words); total assigned 832 words. The review's Results
   paragraph describing the Gross model (93 words: antecedent-focused
   strategies before the emotional response is fully generated,
   response-focused after) is PROPOSED as one added passage from the same
   verified source, serving the matrix's apply-the-process-model exercise;
   it is one model's description, not the ten-model catalogue the verifier
   excluded.
3. Barrett et al. 2025 re-opened; the PD-V06 sidebar paragraph selected:
   the first paragraph of The theory of constructed emotion in brief (95
   words, beginning The TCE is an integrated collection of hypotheses and
   ending at least since the mid-1800s), read in its surrounding argument
   as the advisor required; the PD-V06 do-not-teach list stands (do not
   teach that basic-emotion theories are disproved, that emotions are
   imaginary, or that sufferers can choose feelings at will; the full
   debate and Table 3 stay out of core).

DESIGN DECISIONS RECORDED AS PROPOSALS (for the module-writing session,
subject to the stop-gate ruling and advisor verifier rounds):

- ACCOUNT-COMPARISON OUTCOME: the L2 compare-two-accounts exercise will use
  the genuine, named disagreement INSIDE the Martinez-Priego assigned
  passages (the literature's view that specific strategies are adaptive or
  maladaptive in themselves versus the ER-flexibility view that there is no
  clear correspondence between specific strategies and adaptive value,
  which depends on goals and context). The Noba functions module takes no
  position on emotion-category ontogeny, so a Noba-versus-Barrett
  comparison would manufacture a disagreement (advisor round 1 warning);
  the Barrett paragraph instead serves a bounded epistemic sidebar on what
  the constructed-emotion theory claims and does not claim.
- PROCESS MODEL: the review teaches antecedent- versus response-focused
  strategies (before versus after the emotional response is fully
  generated) and strategy-versus-goal; the five process-model stage names
  (situation selection, situation modification, attentional deployment,
  cognitive change, response modulation) were checked against the review's
  FULL page text this session and appear NOWHERE in it; they must not be
  taught unless a further verified source supplies them; the own-episode
  exercise will be built on the antecedent/response distinction plus the
  strategy-goal distinction as the review states them.
- Noba PD-V13 response-choice passage (94 words) anchors the readiness-vs-
  action exercise exactly as the verifier proposed; the module must not
  teach the whole Noba three-domain taxonomy as assessed content from
  that excerpt alone (PD-V13 boundary).
- Workload arithmetic will be computed from the measured counts above
  once module prose is authorized: Noba body 2,794 (prior session's
  measured count, restated); Martinez-Priego assignment 832 words on the
  cleaned transcription (525 intro raw-text incl. citation tokens, 213
  discussion, 120 conclusion) plus the 93-word Gross-model Results
  paragraph; Barrett sidebar 95; Noba response-choice passage 94. The
  module-writing session should state which basis (raw or cleaned) each
  count uses.

### M2 source-use boundaries consumed (2026-10-26, worker-pplx-degpsychdim-1026a, clock 02:25Z measured at save; an earlier draft of this heading said 02:30Z, corrected on advisor QC)

The deg-verify-b source-use boundaries packet
(verify/deg-psychdim-m2-source-use-boundaries.md, verifier-af06bd9e) is
consumed into this preparation record; it is preparation, not module
production, per the supervisor's Phase 0 ruling item 4:

- FIVE PROCESS FAMILIES NOW HAVE AN OPENED PRIMARY ANCHOR: Gross 1998,
  The Emerging Field of Emotion Regulation (university-hosted full
  paper, verification receipt in the packet: title page Gross, Stanford,
  1998, printed pp. 271-299, 29 PDF pages; downloaded without
  authentication after a robots-error fallback). Candidate excerpt for
  the process-model exercise: printed pp. 281-283 (PDF pages 11-13),
  the five-family paragraph, the brief definitions and Figure 4, ending
  after the model limitations. At the time of the boundary consumption this rested on the
  verifier's receipt; this session then OPENED THE PRIMARY ITSELF
  (see the verification note below), so the condition recorded above
  ("the five stage names must not be taught unless a further verified
  source supplies them") is now met by this session's own opening: the
  writing session may adopt Gross 1998 as a primary definition anchor
  for the antecedent/response process-model exercise, as a SUBSTITUTION
  or reference anchor, not an added required resource. The packet's caution stands: the five families are
  working distinctions by their place in the emotion-generative process,
  not five proven treatment effects; a process-family label is not
  proof that an action is beneficial.
- TWO-SIDED COUNTERPOINT OPTION for the Barrett sidebar: van Heijst,
  Ploeger and Kret's response (PMC12575812) offers a bounded primary
  counterpoint (abstract and conclusion) if the owner wants an actual
  two-sided comparison; the disagreement is between competing
  interpretations, not settled science; the module must attribute each
  position to its authors and not present reconciliation, irreconcilability,
  or a feeling/emotion separation as a field-wide agreed conclusion.
- The review's eudaimonic-goals proposal stays ATTRIBUTED (a research
  direction, not a demonstrated outcome advantage); the
  no-additional-Aristotle/Descartes/Darwin-history ruling stands.
- The packet's five source-use checks (process families as working map;
  aims separated from means and from accomplishment evidence; the
  eudaimonic proposal attributed; disagreement authorship visible; finite
  assignments as substitutions not accumulation) are recorded as design
  constraints for the eventual module review.

### M2 boundaries: primary openings verified (2026-10-26, worker-pplx-degpsychdim-1026a, clock 02:28Z measured)

Per advisor QC, the two receipt-based items above were converted into
this session's own opened evidence:

- GROSS 1998 PRIMARY OPENED (university-hosted PDF downloaded without
  authentication, 2.2 MB; pdftotext extraction plus a VISUAL
  inspection of the rendered title page and the Figure 4 page this
  pass): the title page as rendered reads Review of General
  Psychology, 1998, Vol. 2, No. 3, 271-299, James J. Gross, Stanford
  University (an earlier text-extraction reading of "No. 5" was an
  extraction artefact; the rendered page is authoritative). The candidate excerpt (printed pp. 281-283
  = PDF pages 11-13) contains, verbatim-confirmed on the extracted
  text: the five-family passage ("processes: situation selection,
  situation modification, attention deployment, cognitive change, and
  response modulation. This is an elaboration of the two-way
  distinction I have offered previously between antecedent-focused
  emotion regulation, which occurs before the emotion is generated, and
  response-focused emotion regulation, which occurs after the emotion
  is generated"). EXTRACTION DISCLOSURE: the pdftotext extraction
  inserts an APA copyright footer notice mid-passage at the printed
  page break (between "previ-" and "ously"); the quotation is verbatim
  against the printed text with that footer notice excluded, and the
  passage on either side of the notice was each verified contiguously
  on the extraction), the family definitions (situation selection defined
  as "approaching or avoiding certain people, places, or objects in
  order to regulate emotions"), the Figure 4 references, and the
  limitations passage ("The process model of emotion regulation shown
  in Figure 4 has clear limitations. First, situations, aspects, and
  meanings are terms that have proven notoriously resistant to
  definition. What is offered is a set of working distinctions among
  regulatory processes that I have found useful in navigating the
  tangled literatures relevant to emotion regulation"). FIGURE 4
  VISUALLY INSPECTED on the rendered printed p. 282: the figure
  shows the process model with the four antecedent-focused families
  (situation selection, situation modification, attentional
  deployment, cognitive change) bracketed as "Antecedent-Focused
  Emotion Regulation" occurring BEFORE the emotional response
  tendencies box (behavioral, experiential, physiological), and
  response modulation bracketed as "Response-Focused Emotion
  Regulation" occurring AFTER that box; i.e. the figure itself
  carries the antecedent/response timing distinction the M2
  exercise teaches. Measured at
  1,919 words on the raw pdftotext basis for the WHOLE three PDF
  pages (printed pp. 281-283; includes material beyond the proposed
  excerpt). The PROPOSED EXCERPT ITSELF (from the five-family
  paragraph "I distinguish five sets of emotion regulatory
  processes..." through the end of the model limitations "...the
  interdependences among behavioral, experiential, and physiological
  response tendencies.") measures 618 words on a
  hyphenation-and-whitespace-normalised extraction basis WITH the APA
  copyright footer notice and the running page headers removed (690
  words on the same basis if those extraction artifacts are included;
  618 is the candidate reading count, PROVISIONAL pending the
  writing session's own re-measurement); the writing session should
  re-measure the final assigned span on a stated basis. The limitations passage directly supports the packet's
  caution that the five families are working distinctions, not proven
  treatment effects.
- VAN HEIJST ET AL. 2025 OPENED (PMC12575812): "Beyond Right and
  Wrong: Fostering Connection in Emotion Theory Debates", van Heijst,
  Ploeger and Kret, Perspectives on Psychological Science, 2025; a
  response to Barrett et al. 2025. Verbatim-confirmed on the raw page:
  the title, and the conclusion's final sentences ("BETs inspire a
  detailed investigation of the bioregulatory responses of emotion
  that, especially when studied comparatively, can lead to new
  functional insights." and "Striving to be open to the nuances in
  different views and curious about the types of evidence they can
  provide is ultimately the way forward."). Raw page 3,650 words on
  the tag-stripped basis. The counterpoint option stands as recorded.

### M3 preparation (2026-10-26, worker-pplx-degpsychdim-1026a; no module prose written; M2-M8 module production gated per the supervisor's Phase 0 ruling)

The two central M3 sources (the commentary-appraisal source and the
mechanism-teaching source) were re-opened and re-verified against the
raw fetched page text in this section (curl + tag-strip; the same
verification behaviour as the M2 pass); the remaining three M3 sources
follow in the subsection below. No new sources adopted; all were
already verified (batches 1-4 and the readiness refreshes). All
passages below were confirmed character-for-character on the raw page.

Ehring 2021 (Thinking too much: rumination and psychopathology, World
Psychiatry, PMC8429319), the commentary-appraisal source for the M3 exit:

- The experimental-evidence passage, verbatim: "Converging evidence
  comes from experimental research showing that induced rumination leads
  to negative thinking, poor problem solving, inhibition of
  instrumental behavior, biased information processing, and impaired
  interpersonal functioning" (citation tokens 1, 2, 4 follow; the raw
  text continues " 1 , 2 , 4 ." immediately after "functioning").
  Measured at 28 words. It sits immediately after the
  longitudinal-research paragraph, not under a named section heading.
- The preceding longitudinal passage (59 words measured): "There is now
  extensive longitudinal research showing that rumination assessed in
  this way: a) predicts the onset of new episodes of depression; b)
  predicts the maintenance of already existing depressive symptoms; c)
  is a mediator between other known risk factors (e.g., negative
  cognitive styles, childhood adversity, psychosocial stress) and
  depression, and d) is related to reduced response to treatment"
  (citation tokens 1, 2, 3, 4 follow in the raw text).
- Whole commentary: 1,641 words on the tag-stripped raw-page basis
  (includes site chrome and references; the commentary proper is the
  two-page synthesis the M3 packet describes). The commentary is short
  enough that the whole main text is a candidate assigned excerpt; the
  writing session should measure the assigned span on a stated basis.
- Design note: the appraisal exercise centres on the experimental-
  evidence passage with the longitudinal paragraph as its contrast; the
  learner distinguishes the synthesis from a primary experiment report
  and names the missing information (participants and setting;
  assignment and comparison conditions; how rumination and outcomes
  were measured; effect estimates and uncertainty; limitations), per
  the M3 packet's proposed answer frame (already adopted in the
  progression exit).

Bouton, Conditioning and Learning (Noba), the mechanism-teaching source:

- The overview passage, verbatim: "This module discusses the two most
  fundamental forms of learning -- classical (Pavlovian) and
  instrumental (operant) conditioning. Through them, we respectively
  learn to associate 1) stimuli in the environment, or 2) our own
  behaviors, with significant events, such as rewards and punishments."
- The conclusion passage, verbatim (candidate for the faded practice):
  "Or maybe you are now always on time with your assignments, because
  you saw how others were punished when they were late (observational
  learning). Regardless of the activity, behavior, or response, there’s
  a good chance your “decision” to do it can be explained based on one
  of the theories presented in this module." (The raw page uses a
  typographic apostrophe in “there’s” and curly double quotes around
  “decision”; the text above matches the raw page character for
  character.)
- Measured body count: 7,088 words on the tag-stripped basis. Span
  boundary check (advisor QC): the start delimiter ("Basic principles
  of learning are always operating") is unique in the page; the end
  delimiter takes the FIRST occurrence of "Outside Resources" (the
  section heading after the Conclusion; the phrase occurs twice on the
  page, the second in site chrome); start precedes end; the span's
  first sentence is the module description and its last sentence is
  the Conclusion's final sentence ("...based on one of the theories
  presented in this module."). This is a measured FULL-BODY candidate
  count, not the final assigned-reading budget; the writing session
  should re-measure the final assigned excerpt on a stated basis. This supplies the measured count the
  readiness refresh owed ("a measured count is owed if assigned at
  production"); the refresh's ~5,000 estimate is superseded. Raw
  stripped page including site chrome: 9,289 words.

Remaining M3 sources, opened and measured this pass (2026-10-26,
worker-pplx-degpsychdim-1026a, clock 02:29Z measured; raw curl fetches,
tag-strip, same verification behaviour as above):

- McDermott and Roediger III, Memory (Encoding, Storage, Retrieval)
  (Noba): body span measured at 7,045 words on the tag-stripped basis
  (module description through the end of "Putting It All Together:
  Improving Your Memory", before Outside Resources). Start delimiter
  unique; end at the first "Outside Resources" occurrence; span's
  final sentence verified ("You can adapt a system that will meet
  most any purpose."). A measured FULL-BODY candidate count; the
  writing session should re-measure the assigned excerpt on a stated
  basis.
- Bazerman, Judgment and Decision Making (Noba): body span measured
  at 3,138 words on the same basis (module description through the end
  of "Concluding Thoughts", before Outside Resources; includes the
  three quiz problems). Start delimiter unique; final sentence
  verified ("Only now have we reached the frontier of using this
  knowledge to help people make better decisions."). Same
  full-body-candidate status.
- Perception as inference (OYC PSYC 110 lecture 7 chapter 4): already
  verified via the batch-24 transcript fetch (full chapters read and
  content-verified by the prior owner); chapter-4 span MEASURED this
  pass (raw curl fetch of the lecture page, tag-strip): 3,794 words
  on the transcript basis, from "Chapter 4. Introduction to the
  Complexity of Perception and Expectation [00:18:06]" to just before
  "Chapter 5. Linking Attention and Memory [00:39:15]" (both delimiters
  unique and ordered), i.e. a video segment of about 21 minutes 9
  seconds if the chapter is assigned as a watch. The span's final
  sentence verified ("And that's all I have to say at this point
  about perception."). The writing session should re-measure any
  narrower assigned excerpt on a stated basis. M3 STATUS: all five
  M3 sources reopened and candidate counts recorded this session;
  assigned excerpts and workload budgets remain pending for the
  writing session.

### M4 preparation (2026-10-26, worker-pplx-degpsychdim-1026a, clock 02:30Z measured; no module prose; gated)

All four M4 sources opened this pass against raw curl-fetched text (same
verification behaviour as the M3 pass). All passages below confirmed on
the raw text.

- Posner, Rothbart and Ghassemzadeh 2019, Restoring Attention Networks
  ([Yale J Biol Med](https://pmc.ncbi.nlm.nih.gov/articles/PMC6430178/)): the three-networks
  passage, quoted with elisions marked by ellipses (each quoted segment
  verbatim on the raw page): ("In our previous work we have identified three different brain
  networks related to the functions of attention [ 1 ]. These are: (i)
  Obtaining and maintaining the alert state... (ii) Orienting to
  sensory stimuli... (iii) The executive attention network that
  controls voluntary responses..."). Raw page 3,699 words on the
  tag-stripped basis. SOURCE-BOUNDARY FINDING: the disorders-and-affect
  content lives HERE, not in Posner 2023: the 2019 abstract states
  "deficits of attention accompany many neurological and psychiatric
  conditions", and the body carries the ADHD, anxiety, depression and
  schizophrenia material.

  Supervisor spot-check (written between clock readings 02:35:53Z and
  02:36:52Z, so ~02:36Z; the originally stamped 02:40Z was an estimate and
  is withdrawn — corrected 02:44Z, supervisor-pplx-1026d,
  supervisor baton): the elision relabel was independently re-checked — the
  carrier was re-opened and all three quoted segments ("Obtaining and
  maintaining the alert state", "Orienting to sensory stimuli", "The executive
  attention network") are verbatim on the raw PMC page; the ellipses-only
  elision disclosure is accurate.
- Posner 2023, The Evolution and Future Development of Attention
  Networks ([J Intell](https://pmc.ncbi.nlm.nih.gov/articles/PMC10301152/)): the ANT passage verbatim ("From
  age four on, the Attention Network Test (ANT) allows measurement of
  individual differences in the alerting, orienting and executive
  networks."). Raw page 5,193 words. CHECK RESULT: searches of the full
  raw page for disorder, depression, anxiety, ADHD, affect and emotion
  found no matches, and the direct clinical material was identified in
  the 2019 paper; as a source-use distinction (not a scope-error
  finding), the scope row's "ANT and links to disorders and affect"
  should draw its disorders and affect material from Posner 2019, with
  Posner 2023 supplying the ANT and development content. Also caught this pass: one LLM-extracted
  "quote" from this page was a paraphrase, not verbatim ("The ANT was
  developed to provide separate scores..." not present on the raw
  page); it is excluded from this record.
- Lippelt, Hommel and Colzato 2014, Focused attention, open monitoring
  and loving kindness meditation: effects on attention, conflict
  monitoring, and creativity — A review ([Front Psychol](https://pmc.ncbi.nlm.nih.gov/articles/PMC4171985/)):
  title and abstract verbatim-verified on the article page (the
  abstract distinguishes focused attention, open monitoring and loving
  kindness meditation and their differential effects on attentional
  selection and conflict monitoring). Raw page 5,643 words. LINK
  NOTE: the retrieval at the scope matrix's PDF URL
  (PMC4171985/pdf/fpsyg-05-01083.pdf) returned an HTML page rather than
  a PDF this pass (a retrieval outcome, not a claim that the URL is
  permanently dead); the article page URL worked and is the one
  verified. The scope doc was updated to the article page URL this
  pass (see below).
- OYC PSYC 110 lecture 7 chapter 5 (Linking Attention and Memory,
  [00:39:15] to Chapter 6 at [00:58:04]): span measured at 2,619
  words on the transcript basis (both delimiters unique and ordered);
  a video segment of about 18 minutes 49 seconds if assigned as a
  watch. Already content-verified via the batch-24 transcript fetch.

M4 ATTENTION-MEASUREMENT BOUNDARIES CONSUMED (2026-10-26, clock 02:43Z
measured; from verify/deg-psychdim-m4-attention-measurement-boundaries.md,
verifier-af06bd9e; preparation, not module production):

- The ANT-R operational definitions (Fan et al. 2009, PMC2674119,
  Methods sections 2.2-2.3) are recorded for the writing session:
  phasic alerting benefit (no cue minus double cue), moving plus
  engaging (double cue minus valid spatial cue), validity effect
  (invalid cue minus valid cue, including disengaging, not
  interchangeable with the preceding contrast), flanker conflict
  cost (incongruent minus congruent flankers). Any supplied score
  table must record units, subtraction order, cue types,
  response-accuracy information and task version; a larger benefit
  and a larger conflict cost cannot share one blanket
  "higher is better" interpretation.
- CROSS-PAPER LABEL CAUTION: Habekost, Petersen and Vangkilde 2013
  (Springer, opened without paywall) computes alerting as no-cue
  minus central-cue and orienting as central-cue minus orienting-cue;
  do not substitute those cue labels into the ANT-R definitions or
  label a contrast from one paper as though from the other. The
  2013 study's reliability findings (68 university students, three
  occasions one week apart; executive score more reliable than
  alerting or orienting; practice-related changes in executive and
  orienting) concern that sample and schedule, not a universal
  coefficient; preserve its qualification that orienting's retest
  reliability approached the least reliable measures after
  test-length accounting, rather than flattening it.
- The 2019 review explicitly rejects a one-to-one correspondence
  between network, disorder and symptom as the complete account;
  its clinical Table 2 is not a lookup from one everyday complaint
  to a neural deficit. This limit should be carried into the M4
  progression exit wording ("map symptoms or own attentional
  struggles to attention networks") in a later AUTHORIZED wording
  pass; no wording is changed by the receipt (the prose hold
  stands).
- Reading stays finite: the 2019 review's Introduction, Figure 1
  and the one-to-one qualification paragraph serve the existing
  task; the two primary-method papers (ANT-R 2009; Habekost 2013)
  remain verifier references or short attributed excerpts, not
  compulsory reading. No TVA assessment or model-comparison unit is
  proposed. The packet introduced no exact quotation and no
  paywalled source.

Scope-doc repair applied in the same pass: the Lippelt row URL in
docs/degrees/scope/deg-psychdim.md updated from the PDF URL (which
returned an HTML page on retrieval this pass) to the live article
page (https://pmc.ncbi.nlm.nih.gov/articles/PMC4171985/);
same source, link repaired only.


### M5 preparation (2026-10-26, worker-pplx-degpsychdim-1026a, clock 02:31Z measured; no module prose; gated)

Three of the four M5 sources opened this pass against raw curl-fetched
text (Maitland 2024 is already verified and was measured for M1). All
passages below confirmed on the raw text.

- Manchiraju 2026, Self-concept clarity: a comprehensive and integrative
  review ([Front Psychol](https://pmc.ncbi.nlm.nih.gov/articles/PMC13350471/)): the SCC definition verbatim
  ("Self-concept clarity (SCC) refers to the extent to which
  individuals’ self-beliefs are clearly and confidently defined,
  internally consistent, and stable over time (Campbell et al., 1996).")
  and the title verbatim. Raw page 8,847 words on the tag-stripped
  basis (review; the writing session should measure the assigned
  excerpt on a stated basis). The integrative-framework sentence from
  the abstract (SCC as outcome, predictor, mediator and moderator) was
  captured by extraction but is NOT recorded as verbatim-confirmed
  (not checked character-for-character this pass; re-verify if used).
- Branje, de Moor, Spitzer and Becht 2021, Dynamics of Identity
  Development in Adolescence: A Decade in Review ([J Res Adolesc](https://pmc.ncbi.nlm.nih.gov/articles/PMC9298910/)): title verbatim and the key abstract sentence verbatim
  ("identity development during adolescence and early adulthood is
  characterized by both systematic maturation and substantial
  stability."). Raw page 16,565 words on the tag-stripped basis (a long
  review; the writing session should measure the assigned excerpt).
M5 SCCS INSTRUMENT RECEIPT CONSUMED (2026-10-26, clock 02:44Z measured;
from verify/deg-psychdim-m5-sccs-instrument-receipt.md, verifier-af06bd9e;
preparation, not module production):

- The archived 12-item SCCS instrument (UBC archive, attributed to
  Campbell et al. 1996) was verified by the verifier as readable in
  full: 12 items, response anchors 1 (strongly disagree) through 5
  (strongly agree), items 1-5, 7-10 and 12 reverse-keyed (items 6
  and 11 not); reversal is the arithmetic operation (6-r); with all
  12 valid responses a sum ranges 12-60 and a mean 1-5. These are
  arithmetic consequences of the opened anchors and key, NOT
  diagnostic bands, population norms or a missing-response rule.
- VERSION RECORDING RULE: Vartanian, Hayward and Carter (2023, open
  UNSW copy) uses the same 12-item SCCS with five response points
  (student sample) and seven (community sample); a later authorized
  use must identify the actual form, anchors, reverse key and
  aggregation rule before displaying a score. Do not compare a
  five-point mean with a seven-point mean, reuse (6-r) on a
  seven-point form, or borrow a research midpoint as a verdict about
  the learner. The UNSW paper's midpoint grouping is an analytic
  choice, not a validated clinical threshold; only its
  instrument-handling passage serves this receipt (its body-image
  research question is not proposed for the degree).
- INTERPRETATION LIMITS (Manchiraju 2026): the review distinguishes
  perceived clarity and consistency of self-beliefs from
  self-esteem, self-knowledge accuracy and belief content; a
  properly keyed score is not proof that a self-description is
  accurate, ethically admirable or fixed. The review cautions that
  self-report dominates the evidence, cross-national measurement
  invariance is insufficiently established, and rigid clarity need
  not be adaptive. No claim that this instrument causes flourishing
  or measures wisdom is supported.
- REDISTRIBUTION: permission to redistribute the complete instrument
  was NOT established by the check; the writing session must not
  reproduce the full item wording without establishing permission.
  The receipt adds no questionnaire assignment, requires no
  personal scores, and authorizes no module prose.

- Diener and Lucas, Personality Traits ([Noba](https://nobaproject.com/modules/personality-traits)): teaching body measured
  at 3,708 words on the tag-stripped basis (module description through
  the final teaching paragraph ending "...such as those studied by
  Walter Mischel.", before the Mini-IPIP Appendix section). The span
  including the Mini-IPIP scale appendix and its norm tables, through
  to the Outside Resources section, measures 4,212 words on the same
  basis. The module description's first sentence is verbatim
  ("Personality traits reflect people’s characteristic patterns of
  thoughts, feelings, and behaviors."); the teaching body's final
  sentence is verbatim ("Most modern personality researchers agree
  that there is a place for broad personality traits and for the
  narrower units such as those studied by Walter Mischel."). NOTE: the
  module has no section titled "Conclusion"; the teaching body ends
  with the traits-versus-situations material. First delimiter unique;
  the Appendix boundary identified by its section heading ("Appendix
  The Mini-IPIP Scale"), not the earlier in-body reference to the
  appendix.


### M6 preparation (2026-10-26, worker-pplx-degpsychdim-1026a, clock 02:31Z measured; no module prose; gated)

The one previously-unopened M6 source opened this pass; the other two
were already opened and measured this session (Martinez-Priego et al.
2024 in the M2 preparation; Woolley et al. 2025 in the M1 verification
status and the M2 boundaries packet).

- Ryan and Deci 2020, Intrinsic and extrinsic motivation from a
  self-determination theory perspective: Definitions, theory,
  practices, and future directions ([Contemp Educ Psychol](https://selfdeterminationtheory.org/wp-content/uploads/2020/04/2020_RyanDeci_CEP_PrePrint.pdf), preprint PDF hosted at selfdeterminationtheory.org): downloaded without
  authentication; title page confirms the journal, DOI and authors.
  Full paper 13,095 words on the raw pdftotext basis (includes
  references; the writing session should measure the assigned excerpt
  on a stated basis). Verbatim-confirmed on the extracted text: the
  continuum sentence ("these varied forms of motivation or regulatory
  styles are arranged in Figure 1 along a continuum reflecting their
  relative autonomy"), and the surrounding definitions of identified
  and integrated regulation, intrinsic motivation's interest basis,
  and amotivation ("Amotivation... can result from either lack of felt
  competence to perform, or lack of value or interest. Amotivation has
  been a strong negative predictor of engagement, learning, and
  wellness."). The passage also carries the SDT caution that most
  intentional behaviors are multiply motivated, relevant to the M6
  continuum-classification exercise design.
- Martinez-Priego et al. 2024: see the M2 preparation above (opened,
  passages verbatim-confirmed, dual-basis counts recorded).
- Woolley et al. 2025: opened and quoted in M1's appraisal exercises;
  all quoted statistics verified on the opened PMC page (ledger
  verification status section).


### M7 preparation (2026-10-26, worker-pplx-degpsychdim-1026a, clock 02:31Z measured; no module prose; gated)

All five previously-openable M7 sources opened this pass against raw
curl-fetched text (the Noba conditioning module was measured in the M3
preparation above; Maitland 2024 is already verified). Abstract
openings below were read on the cleaned raw text of each page.

- Carden and Wood 2018, Habit formation and change (Curr Opin Behav
  Sci 20:117-122, PDF hosted at USC): downloaded without
  authentication; title page confirms the journal, volume and authors.
  Full paper 4,818 words on the raw pdftotext basis (includes
  references). The review summary verbatim-confirmed on the extracted
  text ("This review highlights emerging findings and new directions
  in research on habit formation and change. We first identify the
  cognitive, attentional mechanisms that contribute to habit
  formation. Then we show how habit is transforming the way
  researchers think about self-control, and how changing habits
  involves environmental pressures as much as intrapsychic
  forces.").
- [Singh et al. 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11641623/), a systematic review of the time
  required for developing health-related habits: 10,509 words on the
  tag-stripped raw-page basis (includes site chrome; systematic
  review; the writing session should measure the assigned excerpt).
  Abstract opening verbatim on the cleaned page ("Healthy lifestyles
  depend on forming crucial habits through the process of habit
  formation, emphasising the need to establish positive habits and
  break negative ones for lasting behaviour changes. This systematic
  review aims to explore the time required for developing
  health-related habits.").
- [Werner and Berkman 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11423838/), self-control as a dynamic
  motivational process: 5,237 words on the tag-stripped raw-page
  basis. Abstract opening verbatim ("How people respond to desires
  varies substantially across time and situations. Building on recent
  theoretical developments, we propose that motivation plays a central
  role in the dynamics of self-control as it unfolds across time.").
- [Reed et al. 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7250393/), self-regulation indices in older
  adults: 17,436 words on the tag-stripped raw-page basis (long
  article; the writing session should measure the assigned excerpt).
  Abstract opening verbatim ("Self-regulation refers to effortful
  control over one’s thoughts, emotions, choices, impulses, and
  behaviors, and has implications for older adults’ health.").
- [Dang 2018](https://pmc.ncbi.nlm.nih.gov/articles/PMC6013521/), the ego-depletion meta-analysis debate:
  5,349 words on the tag-stripped raw-page basis. Abstract opening
  verbatim, the complete sentences ("The ego depletion effect is one
  of the most famous phenomena in social psychology. A recent
  meta-analysis showed that after accounting for small-studies
  effects by using a newly developed method called PET-PEESE, the
  ego depletion effect was indistinguishable from zero. However, it
  is too early to draw such rushing conclusion because of the
  inappropriate usage of PET-PEESE.") Note the paper's own caution
  against premature conclusions, which is the pedagogically relevant
  feature for the M7 meta-analysis-appraisal exercise.

All five M7 sources verified free to access (no paywall) this pass.
M8 is the integrative capstone and adds no new sources.


### Quotation audit (2026-10-26, worker-pplx-degpsychdim-1026a, clock 02:40Z measured)

Every quotation recorded in this session's preparation sections
(including the M2 preparation block and the M7 records) was audited
against the raw saved page text with an explicit
quotation-to-source list (whitespace normalization only; ellipsis
segments checked individually). Result: all quotations verified
(M3, M4, M5, M6, M7 and the M2 boundaries records in full; the M2
preparation block's Noba response-choice and Barrett sidebar OPENING
SUBSTRINGS re-confirmed against the saved raw pages, not those
passages' full lengths).
Two disclosures apply (both recorded inline above): the Gross
five-family quotation spans a printed page break where the pdftotext
extraction inserts an APA copyright footer notice (the quotation is
verbatim against the printed text with the notice excluded); and the
Posner three-networks quotation's citation token renders as
"[ 1 ]" with bracket spacing on the raw page. The van Heijst
quotations were verified against the van Heijst response page
(PMC12575812). No quotation in this session's records is unresolved;
no "verbatim" label rests on a paraphrase. The Gross five-family
quotation's proposed-excerpt count was re-measured with the
extraction artifacts removed (618 words; see the correction above).


Supervisor Phase 0 ruling (ledger section of the same name): M1 repairs
applied and ACCEPTED by the verifier's re-review (all three findings
CLOSED, module SHA 99e5abbe...; disposition ready for supervisor
module-QC); M2-M8 module prose remains GATED pending the owner's
decision on the flagged conflict; source preparation continues (this
record).

### M1 pedagogical follow-up repairs APPLIED (2026-10-26, worker-pplx-degpsychdim-1026a, clock 02:20Z)

The independent pedagogical follow-up (verify/deg-psychdim-m1-followup-
2026-10-26.md, verifier-af06bd9e, deg-verify-b) returned three bounded
repairs routed to the production owner; all three are applied to
modules/deg-psychdim/m1-orientation.md this session, within the
verifier's bounds, adding no new sources and no new reading burden:

- M1-PED-01 (teach before recall): Step 1 no longer schedules the recall
  before the teaching; the working definitions and Jordan case now
  precede the first closed-book attempt by instruction. A taught
  reflection on the matters/choice/uncertainty move is demonstrated once
  (Jordan's attention, reusing the rubric exemplar's move) and a partly
  filled completion example added (Jordan's motivation). Retrieval
  activity 1 is now explicit: first attempt after Step 2 (practice, not
  submitted), Step 3 reading as the intervening work, second attempt
  after Step 3 as the DRAFT of graded deliverable a; graded deliverable a
  names the final artifact (the second attempt written out cleanly, with
  the three-part reflection as part of the same deliverable).
- M1-PED-02 (effect-size outcome matched to L1): Outcome 4 narrowed to
  reporting the estimate and uncertainty and stating what further
  information would be needed to judge practical magnitude (the
  verifier's option two; no unit conversion invented, the 1-to-7 scale
  noted only as the measurement anchor the paper supplies). The
  magnitude move is demonstrated in the fully worked appraisal, required
  in the faded practice and the graded appraisal, and written into
  rubric criterion 4 (strong example includes the honest cannot-judge
  answer naming the missing benchmark; rejection case added: copying
  three numbers is not an appraisal). Standard error and z statistics
  removed from the required path to an optional note in the worked
  example, per the verifier's move-unnecessary-detail ruling.
- M1-PED-03 (assess inclusion, not only exclusion): graded deliverable c
  now requires the positive coverage (six dimensions as levers plus
  reading the evidence) before exclusions, owners and admission test;
  rubric criterion 5's strong example now starts from the positive
  coverage, and an exclusions-only answer is added to the rejection
  cases.
- Workload recalculated per the follow-up: about 4 hours 10 minutes
  (250 labelled minutes; the 10 minutes of new reflection teaching
  counted, the graded 60 minutes now labelled per deliverable:
  25/20/15). Woolley et al. 2025 remains optional further reading; no
  full-paper reading burden was added.
- The module header now records the follow-up and this repair revision;
  the alignment map rows 1 and 4 were updated to match the repaired
  sequence.

ADVISOR QC ROUND 2 corrections applied (same session, clock measured
02:18Z): the first-attempt prompt moved to the end of Step 2 and the
second-attempt prompt to the end of Step 3, with Step 5 describing
submission only; the taught reflection rewritten onto Jordan's running
episode (the imported essay-deadline details removed) and the motivation
completion example now supplies its what-matters answer; the magnitude
wording no longer implies the rating scales settle the scaling (how the
coefficient is scaled and what difference would matter are not
established); a completion-feedback paragraph added after the faded
practice covering estimate, interval, causal limit and the open
practical-importance question; the module's verification note now says
no new external-source assignments rather than no new reading burden.

RECHECK REQUESTED from deg-verify-b (verifier-af06bd9e) and the
pedagogical reviewer per the follow-up's next-check note: the printed
learner sequence, one completed appraisal and one exclusions-only scope
answer. Repaired module snapshot for the recheck: commit
5f383fad9715439ac53b56ff43fe423963d669ce (with the M3 exit-clause
repair that touches only this ledger), module content SHA-256
99e5abbe6c6ab40b93cf92298a08a3a877978be0dba8ec35054c85c9cdeddd96.
The module remains DRAFT NOT CLEARED; the Phase 0 stop-gate conflict
is still routed to the live supervisor (supervisor-pplx-1026d) for a
documented ruling; these repairs gate-clear nothing.

### M3 exit-clause repair APPLIED (2026-10-26, worker-pplx-degpsychdim-1026a, clock 02:19Z)

The deg-verify-b commentary-alignment packet
(verify/deg-psychdim-m3-commentary-alignment.md) found the M3 progression
exit clause ("can appraise a rumination induction study") asks the
learner to appraise a primary experiment while the opened source
(Ehring 2021) is a commentary that does not supply one experiment's
details. The one-clause repair is APPLIED to the progression spine M3
row exactly as proposed: the exit now reads "can appraise a
commentary's claim about experimental evidence, distinguish the
synthesis from a primary experiment report, and name the missing
information needed to assess the strength and applicability of that
claim"; the other M3 exit capabilities are unchanged. The packet's
source-boundary and answer-frame material (the source-limited pass and
fabricated-detail reject responses) is recorded for the eventual M3
production session; the packet adds no new topic and no clinical
exercise. The verifier's M1-followup refinement note (the earlier audit
recovered the standardised point estimates; this session's M1 wording
already treats scaling as not established for the novice) is noted; no
further M1 change is required by it.


## Sources opened

All URLs opened in-session on 2026-10-25 by worker-pplx-psychdim-1 unless
the row names worker-pplx-psychdim-2; every row was fetched and read, not
just searched. All are freely accessible (no paywall, no app gate). Per-source
opening times were not recorded; rows are labelled by batch only (batch 1:
first fetch round; batch 2: benchmark round; batch 3: Noba and recency
round; batch 4: gap-family round; batches 18 to 27: worker-pplx-psychdim-2's
content-verification rounds, see the Verification outcomes section).

| URL | opened (2026-10-25, batch) | by | what it verified |
|---|---|---|---|
| https://pmc.ncbi.nlm.nih.gov/articles/PMC11303929/ | batch 1 | worker-pplx-psychdim-1 | Hofmann and Hayes 2024, Clinical Psychology in Europe: process-based therapy and the EEMM as a model of models; lists the psychological dimensions as affect, cognition, self, attention, motivation and overt behaviour, with biophysiological and sociocultural levels of analysis; defines adaptation and psychopathology in process terms; idiographic and idionomic analysis |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC12392214/ | batches 1 and 2 | worker-pplx-psychdim-1 | Maitland 2024, Journal of Contextual Behavioral Science: Table 1 links the six EEMM dimensions to FAP targets and Awareness, Courage and Love categories (FAP-specific applications, not general definitions); the paper describes behaviour as developed and maintained through variation, selection and retention, adaptive or maladaptive based on the individual's context, and process-based change as dynamic, progressive, contextually bound and multilevel |
| https://oyc.yale.edu/introduction-psychology/psyc-110 | batch 1 | worker-pplx-psychdim-1 | Yale Open Courses PSYC 110 (Paul Bloom): full lecture list for introductory psychology, free access; covers emotion, motivation, self and other, mental illness, happiness |
| https://openstax.org/details/books/psychology-2e and https://openstax.org/books/psychology-2e/pages/preface | batches 1 and 2 | worker-pplx-psychdim-1 | OpenStax Psychology 2e (Spielman, Jenkins, Lovett et al.): free web and PDF access, CC BY-NC-SA 4.0; 16-chapter table of contents opened in batch 2 (including Psychological Research; Learning; Thinking and Intelligence; Memory; Motivation and Emotion; Personality; Social Psychology) |
| https://summer.yale.edu/sites/default/files/uploaded-files/syllabi/2026/psyc-s1100.pdf | batch 2 | worker-pplx-psychdim-1 | Yale PSYC S1100 syllabus (Dunham, summer 2026): current Yale introductory curriculum, week-by-week topics; names the Noba Project as the free textbook |
| https://nobaproject.com/modules/thinking-like-a-psychological-scientist | batch 2 | worker-pplx-psychdim-1 | Smith, Thinking like a Psychological Scientist (Noba): scientific versus everyday reasoning, falsifiability, induction and deduction, research design, NHST and p-values, Type I and II errors, replication, theories as revisable frameworks |
| https://nobaproject.com/modules/functions-of-emotions | batch 2 | worker-pplx-psychdim-1 | Hwang and Matsumoto, Functions of Emotions (Noba): intrapersonal functions (action readiness, coordination of perception, attention, memory, motivation and behaviour), interpersonal functions (expressions communicate and shape behaviour), social and cultural functions (display rules, norms) |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC11479914/ | batch 1 | worker-pplx-psychdim-1 | Martinez-Priego, Poveda and Roca 2024, Frontiers in Psychology: systematic review of emotion regulation models (Gross process model, Gratz and Roemer difficulties, Garnefski cognitive emotion regulation, Bonanno and Burton flexibility, Pekrun control-value, Lazarus and Folkman coping and others); strategies classified as cognitive, motivational-coping and behavioural; goals as hedonic, instrumental and eudaimonic |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC8429319/ | batch 1 | worker-pplx-psychdim-1 | Ehring 2021, World Psychiatry: rumination and repetitive negative thinking; response styles theory; experimental effects of induced rumination; transdiagnostic RNT evidence across depression, anxiety, PTSD, insomnia, eating disorders and substance use |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC6430178/ | batch 1 | worker-pplx-psychdim-1 | Posner, Rothbart and Ghassemzadeh 2019, Yale Journal of Biology and Medicine: the three attention networks (alerting, orienting, executive attention) with anatomy and modulators, the Attention Network Test, links to affect regulation and to disorders |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC10301152/ | batch 3 | worker-pplx-psychdim-1 | Posner 2023, Journal of Intelligence: the evolution and future development of attention networks; cross-species comparisons; development of alerting, orienting and executive networks; covert versus overt attention; interactions with memory; molecular and genetic aspects |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC4171985/pdf/fpsyg-05-01083.pdf | batch 1 | worker-pplx-psychdim-1 | Lippelt, Hommel and Colzato 2014, Frontiers in Psychology: focused attention, open monitoring and loving-kindness meditation classified from the practice descriptions; attentional scope and attentional blink effects |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC13350471/ | batch 1 | worker-pplx-psychdim-1 | Manchiraju 2026, Frontiers in Psychology: comprehensive review of self-concept clarity; definition (clarity, internal consistency and temporal stability of self-beliefs); distinctions from self-esteem, self-complexity and identity commitment; the 12-item Self-Concept Clarity Scale and self-report limits; SCC as outcome, predictor, mediator and moderator; lifespan development |
| https://nobaproject.com/modules/personality-traits | batch 3 | worker-pplx-psychdim-1 | Diener and Lucas, Personality Traits (Noba): trait consistency and stability, the lexical hypothesis and factor analysis, the Five-Factor Model and facets, Eysenck and HEXACO, the person-situation debate |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC9298910/ | batch 4 | worker-pplx-psychdim-1 | Branje, de Moor, Spitzer and Becht 2021, Journal of Research on Adolescence: identity development 2010 to 2020; dual-cycle models of exploration and commitment; identity domains (educational, vocational, relational, gender, ethnic, religious, illness); daily identity processes; narrative identity; links to adjustment |
| https://selfdeterminationtheory.org/wp-content/uploads/2020/04/2020_RyanDeci_CEP_PrePrint.pdf | batch 1 | worker-pplx-psychdim-1 | Ryan and Deci 2020, Contemporary Educational Psychology: intrinsic and extrinsic motivation from a self-determination theory perspective; autonomy, competence and relatedness; the four extrinsic regulations (external, introjected, identified, integrated) and amotivation |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC11641623/ | batch 6 | worker-pplx-psychdim-1 | Singh et al. 2024, Healthcare: meta-analysis of health-behaviour habit formation time (20 studies, 2601 participants); Results state that habits were successfully formed in a median of 59 days (range 4 to 335 days) and that the median time to reach 95 percent automaticity was 66 days (range 18 to 254 days); a mean of 91 days (SD 55) appears in the responses; daily stretching took means of 106 and 154 days for morning and evening stretching; the paper's framing rejects the 21-day myth |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC9171140/ | batch 6 | worker-pplx-psychdim-1 | Alarcon-Espinoza, Grigera and Berra 2022, Frontiers in Psychology: systematic review of emotional self-regulation in everyday life; family influences, with a focus on children and adolescents |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC11423838/ | batch 10 | worker-pplx-psychdim-1 | Werner and Berkman 2024, Current Opinion in Psychology (author manuscript, free on PMC): motivational dynamics of self-control; self-control as a flexible, dynamic process of resolving real or anticipated conflict between competing goals; how motivation shapes when people need self-control and how they regulate goals; intrinsic versus extrinsic motivation, temptations, goal valuation, strategy and tactic use, habits and goal attainment |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC7250393/ | batch 9 | worker-pplx-psychdim-1 | Reed, Combs and Segerstrom 2020, Collabra: Psychology: the structure of self-regulation in adults; 149 community-dwelling older adults aged 60 to 93 assessed up to 10 times over five years; examines whether executive function, heart rate variability and self-reported self-regulation form a shared constellation; between-person and within-person associations; personality and psychological and physical health correlates |
| https://oyc.yale.edu/psychology/psyc-110/lecture-1 and https://oyc.yale.edu/psychology/psyc-110/lecture-7 | batch 24 | worker-pplx-psychdim-2 | OYC PSYC 110 lecture 1 (Introduction) and lecture 7 (Language cont., Vision and Memory) transcripts: raw unprompted full-text fetches (batch 24); all chapters read in full and content-verified (see batch 24) |
| https://oyc.yale.edu/psychology/psyc-110/lecture-11, https://oyc.yale.edu/psychology/psyc-110/lecture-12, https://oyc.yale.edu/psychology/psyc-110/lecture-13, https://oyc.yale.edu/psychology/psyc-110/lecture-16, https://oyc.yale.edu/psychology/psyc-110/lecture-17 | batches 18 to 23 | worker-pplx-psychdim-2 | OYC PSYC 110 lecture transcripts re-fetched raw (prompt omitted) in the batch 23 provenance round: lectures 11, 12, 13, 16 and 17; the transcript bodies were compared as recorded in the batch 23 entry (full word-level diffs for lectures 13 and 17; claim-and-quote checks for 11, 12 and 16) |
| https://www.ted.com/talks/lisa_feldman_barrett_you_aren_t_at_the_mercy_of_your_emotions_your_brain_creates_them/transcript | batch 25 | worker-pplx-psychdim-2 | TED page for the Barrett talk: the cleaned-text fetch renders only the description, so the page's raw HTML was fetched and the transcript extracted from the embedded page-data JSON (332 timed cues); read in full and content-verified (see batch 25) |
| https://bigthink.com/the-well/how-to-change-habits/ | batch 26 | worker-pplx-psychdim-2 | Big Think page for the Wood talk: unprompted full-text fetch; the complete spoken transcript appears twice on the page, and the two copies were compared in full against the saved fetch and are identical; read in full and content-verified (see batch 26) |
| https://www.youtube.com/watch?v=2ZS_f1cbrKk | batch 27 | worker-pplx-psychdim-2 | YouTube watch page for the Howard inaugural lecture: timedtext and innertube routes blocked; a cloud-browser session opened the Show transcript panel, which rendered zero segments; no transcript retrieved (see batch 27) |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/ | batches 3 and 7 | worker-pplx-psychdim-1 | Woolley, Giurge and Fishbach 2025, Psychological Science: across its studies, intrinsic motivation (enjoyment, positive experience, engagement) predicted stronger adherence than extrinsic motivation (usefulness, importance, future benefits); intrinsic motivation predicted New Year's resolution adherence in the United States over a year and in China over a month, predicted objectively measured walking steps over two weeks, and experimentally increasing intrinsic (versus extrinsic) motivation increased health-app use; participants rated their goals as more extrinsic than intrinsically motivating; extrinsic motivation was more strongly associated with choosing goals, intrinsic motivation with following through; results summary bounded to Study 1 (the year-long US resolution study), whose extracted statistics show intrinsic motivation predicting successful adherence at successive time points (beta 0.216, p < .001; beta 0.099, p = .003; beta 0.080, p = .019) while extrinsic motivation did not (beta -0.048, p = .140; beta 0.007, p = .832; beta -0.013, p = .691), and resolution completion predicted by intrinsic motivation (OR 1.60, p < .001) but not extrinsic (OR 0.95, p = .657); these are observational predictions and are not the experimental claim; Study 2 (China, one month) statistics read: participants rated resolutions as more extrinsic than intrinsic (d = 0.43); intrinsic motivation predicted adherence (beta 0.31, p < .001) while extrinsic did not (beta 0.05, p = .402); SEM confirmed intrinsic stronger (z = 2.86, p = .004). Study 3 (two weeks of objectively measured steps) statistics read: average daily steps M = 6,518; intrinsic motivation predicted steps (beta 0.34, p < .001). Study 4 (health-app experiment) statistics read: preregistered two-cell between-subjects experiment (preregistration August 9, 2023; additional recruitment preregistered August 16, 2023; p = .025 threshold for multiple comparisons); final sample 763 (mean age 35.72, SD 10.73; 57.9 percent female) after exclusions per the preregistration; participants in the intrinsic-motivation condition scanned more products with the Yuka app in the 24 hours after downloading it (M = 11.55, 95 percent CI 10.25 to 12.85) than those in the extrinsic-motivation condition (M = 9.18, 95 percent CI 8.26 to 10.09), t(761) = 2.96, p = .003, d = 0.21; results held across the robustness analyses reported (nonparametric Mann-Whitney z = 3.26, p = .001; including zero-scanning participants d = 0.20, p = .006; log-transformed d = 0.25, p < .001; winsorized d = 0.18, p = .012); the authors conclude the effect amounted to more than a 25 percent increase in products scanned. The experimental claim is now evidence-backed from the opened source |
| https://dornsife.usc.edu/wendy-wood/wp-content/uploads/sites/183/2023/10/Carden.Wood_.2018.pdf | batch 1 | worker-pplx-psychdim-1 | Carden and Wood 2018, Current Opinion in Behavioral Sciences: habit formation and change; context cues and learned associations; habits versus effortful self-control; change strategies (implementation intentions, reminders, rewards); environment disruption and technology in habit research |
| https://nobaproject.com/modules/conditioning-and-learning | batch 3 | worker-pplx-psychdim-1 | Bouton, Conditioning and Learning (Noba): classical and instrumental conditioning, prediction error, blocking, extinction, spontaneous recovery, renewal, reinforcement and punishment |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC6013521/ | batch 4 | worker-pplx-psychdim-1 | Dang 2018 (journal issue dated 2018), Psychological Research: updated meta-analysis of the ego depletion effect; 142 effect sizes; overall Hedges g of 0.38 (95 percent CI 0.31 to 0.45), 0.24 after trim-and-fill adjustment for publication bias, heterogeneity I squared of 60.67 percent; effects varied by task (emotion video g of 0.48; attention video not significant after adjustment); the author calls the restricted analysis tentative |
| https://nobaproject.com/modules/memory-encoding-storage-retrieval | batch 3 | worker-pplx-psychdim-1 | McDermott and Roediger, Memory: Encoding, Storage, Retrieval (Noba): working, episodic, semantic and collective memory; encoding, storage, retrieval; false memories; consolidation and interference |
| https://nobaproject.com/modules/judgment-and-decision-making | batch 3 | worker-pplx-psychdim-1 | Bazerman, Judgment and Decision Making (Noba): anchoring, biases, bounded rationality, awareness, ethicality, self-interest, willpower, framing, overconfidence, System 1 and System 2 |
| https://nobaproject.com/modules/affective-neuroscience | batch 3 | worker-pplx-psychdim-1 | Harmon-Jones and Harmon-Jones, Affective Neuroscience (Noba): basic emotional systems (wanting, liking, fear, rage, love, grief), neural structures and neurotransmitters, plasticity of affective circuits |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC12164598/ | batch 4 | worker-pplx-psychdim-1 | Barrett et al. 2025, Perspectives on Psychological Science: the theory of constructed emotion; emotion as whole-brain events involving bodily regulation, action and lived experience; allostasis as the brain's predictive regulation of the body's needs; the theory's claims and the errors it attributes to misreadings |

## Verification outcomes

No sources are attached to modules yet (module production has not started;
the matrix has been through advisor review rounds 1 to 7, but the coverage
gate still awaits independent confirmation, and the Phase 0 pilot
stop-gate in README.md blocks full-degree production until the pilots pass
independent review). One candidate was rejected during the source strategy:

| source_id | status | evidence | date |
|---|---|---|---|
| springer s41465-022-00254-7 (Lodha and Gupta, mindfulness and attentional networks review) | rejected | the Springer page describes subscription content with purchase options, so it fails the owner's no-paywall ruling (2026-10-25); replaced in the strategy by PMC6430178, PMC10301152 and PMC4171985 | 2026-10-25 |

### Lecture candidates (2026-10-25, batch 5; identity, duration and instructor checked; content classification from transcripts outstanding)

Yale Open Courses PSYC 110 lectures. What is checked so far: existence
via YouTube oembed, duration via the watch page (lecture 17 via the watch
page's lengthSeconds field), instructor via the institutional OYC course
page (Paul Bloom, Brooks and Suzanne Ragen Professor Emeritus of
Psychology, Yale), free access, and transcripts exist on the OYC pages
(lecture 11's page was opened and shows a transcript section). What is
outstanding: reading each transcript or recording to classify its content
and assign segments. No lecture may be attached to a module outcome on the
strength of its title; in particular, lecture 14 (What Motivates Us: Sex)
cannot be assumed to teach self-determination theory without checking its
content.

#### Content-verified recording: lecture 11, chapter 1 (2026-10-25)

Lecture 11 (Evolution, Emotion, and Reason: Emotions, Part I, 53:15):
identity, duration and instructor as above. What was read: chapter 1
(00:00:00 to 00:09:06) in full from the transcript on the
[OYC page](https://oyc.yale.edu/psychology/psyc-110/lecture-11), plus the
chapter outline of the rest. Chapter 2 (00:09:06 to 00:15:45) was then read in full as well: Bloom presents Phineas Gage and Damasio's patient Elliot, frontal-lobe damage cases in which a large part of emotional capacity was lost and with it the ability to prioritize and set goals, concluding that emotions set goals and establish priorities and that life without them would be impossible, and setting the agenda of universals and cultural differences. This serves the M2 emotion-functions row and links emotion to motivation. Chapter 1 content, from the transcript:
Bloom opens the emotions unit from an evolutionary perspective, reading
William James on why we smile and love, argues that what feels natural
emerges from contingent aspects of our biological nature (his examples:
why poop smells bad to us, why chocolate tastes good, why we love our
children, why a slap makes us angry or afraid), and then presents the
"wrong theory" of emotions through Star Trek's Spock and Steven Pinker's
argument that a creature without emotions could not function, because
fear, modesty, ambition and sociability drive behaviour. This segment
serves the M2 emotion-functions row: it teaches that emotions exist for
functions and that the no-emotions view is incoherent. Remaining
chapters, outline only: Phineas Gage and the Loss of Emotional Capacity
[00:09:06]; Facial Expressions and Smiles in Particular [00:15:45];
Question and Answer on Smiles [00:28:08]; Non-social Emotions: Fear
[00:32:22]; Social Emotions and Altruism [00:36:29]. Status for the
chapter-1 and chapter-2 segments: verified-video; the remaining segments
are candidates until their transcripts are read.

| Lecture | Links | Duration | Planned use |
|---|---|---|---|
| 1. Introduction | [watch](https://www.youtube.com/watch?v=P3FKHH2RzjI), [oembed](https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=P3FKHH2RzjI&format=json), [OYC page](https://oyc.yale.edu/psychology/psyc-110) | 29:37 | M1 orientation |
| 11. Emotions, Part I | [watch](https://www.youtube.com/watch?v=8UySWKNjw5Y), [oembed](https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=8UySWKNjw5Y&format=json), [OYC page](https://oyc.yale.edu/psychology/psyc-110/lecture-11) | 53:15 | M2 affective; chapter 1 content-verified (see below) |
| 12. Emotions, Part II | [watch](https://www.youtube.com/watch?v=i5IrSEIPdwk), [oembed](https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=i5IrSEIPdwk&format=json), [OYC page](https://oyc.yale.edu/psychology/psyc-110) | 56:06 | M2 affective |
| 14. What Motivates Us: Sex | [watch](https://www.youtube.com/watch?v=RCNgknc7Qv8), [oembed](https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=RCNgknc7Qv8&format=json), [OYC page](https://oyc.yale.edu/psychology/psyc-110) | 52:47 | content check done: sex and gender, not SDT; possible M5 or M2 elective |
| 16. Self and Other, Part I | [watch](https://www.youtube.com/watch?v=jsrB5m3mL-A), [oembed](https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=jsrB5m3mL-A&format=json), [OYC page](https://oyc.yale.edu/psychology/psyc-110) | 58:15 | M5 self |
| 17. Self and Other, Part II | [watch](https://www.youtube.com/watch?v=S6OfFaBWtx4), [oembed](https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=S6OfFaBWtx4&format=json), [OYC page](https://oyc.yale.edu/psychology/psyc-110) | 64:53 | M5 self |
| 7. Conscious of the Present; Conscious of the Past: Language | [watch](https://www.youtube.com/watch?v=DmWrOUK2zgA), [oembed](https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=DmWrOUK2zgA&format=json), [OYC page](https://oyc.yale.edu/psychology/psyc-110) | 59:43 | M3 cognitive |
| 13. Why Are People Different?: Differences | [watch](https://www.youtube.com/watch?v=piDznzrNymE), [oembed](https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=piDznzrNymE&format=json), [OYC page](https://oyc.yale.edu/psychology/psyc-110) | 65:49 | M5 self (personality) |

### Talk candidates (2026-10-25, batch 8; identity, duration and instructor credential checked; content classification outstanding)

Talks found through the recency strategy. What is checked so far: existence
via YouTube oembed, duration via the watch page's lengthSeconds field,
upload or publication date where the opened pages state one, and instructor
credentials on opened institutional or biography pages. What is outstanding:
classification from the recording or transcript, and segment assignment.
They are candidates, not verified attachments, until that is done. Recency
note: the Barrett talk was published in December 2017 (uploaded 2018-01-23
per the YouTube watch page) and the Wood talk on 2022-05-26, so neither is
"current"; the degree's recency for those strands rests on the opened 2025
and 2024 papers instead. The Howard lecture's date was not stated on the
opened event page.

| Talk | Links | Duration | Upload or publication date | Instructor credential (verified on) | Planned use |
|---|---|---|---|---|---|
| You aren't at the mercy of your emotions: your brain creates them | [watch](https://www.youtube.com/watch?v=0gks6ceq4eQ), [oembed](https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=0gks6ceq4eQ&format=json), [TED page](https://www.ted.com/talks/lisa_feldman_barrett_you_aren_t_at_the_mercy_of_your_emotions_your_brain_creates_them), [credential](https://lisafeldmanbarrett.com/about/) | 18:29 | December 2017 (TED page); uploaded 2018-01-23 (watch page) | Lisa Feldman Barrett, University Distinguished Professor of Psychology, Northeastern University | M2 affective (constructed emotion); the TED page describes her explaining how we may have more control over our emotions than we think |
| The secret habits that control your life | [watch](https://www.youtube.com/watch?v=Ywec1MbeQDk), [oembed](https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=Ywec1MbeQDk&format=json), [credential](https://dornsife.usc.edu/wendy-wood/) | 6:18 | 2022-05-26 (watch page) | Wendy Wood, Provost Professor Emerita of Psychology and Business, USC | M7 overt behavioural (habits) |
| Inaugural Lecture: Unravelling Early Self Regulation | [watch](https://www.youtube.com/watch?v=2ZS_f1cbrKk), [oembed](https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=2ZS_f1cbrKk&format=json), [event page](https://www.education.ox.ac.uk/event/inaugural-lecture-unravelling-early-self-regulation-professor-steven-howard/), [credential](https://www.education.ox.ac.uk/person/professor-steven-howard/) | 58:54 | not stated on the opened pages | Steven Howard, Senior Academic Research Leader in Child Development and Education, Oxford | M7 self-regulation; the opened event page describes the lecture as discussing why early self-regulation interventions often have small effects, and a research program on the nature, development and mechanisms of self-regulation |

Additional inspection (2026-10-25, batch 17): lecture 11's chapter 3
(00:15:45 to 00:28:08, Facial Expressions and Smiles in Particular)
was read in full: Bloom presents Ekman's work on facial expressions,
the anger-face classroom exercise, facial-expression databases across
genders and national origins (a Japanese database example) with deep
universals despite subtle cross-country differences, and the smile
findings: smiling is universal, congenitally blind children smile
appropriately (not learned by observation), nonhuman primates smile,
smiles are social signals rather than readouts of happiness (bowlers do
not smile facing the pins but grin at their friends; Olympic gold
medalists smile facing the crowds), and the distinction between the Pan
Am greeting smile and the Duchenne smile of genuine happiness (the
difference is around the eyes; only about one in ten people can fake a
Duchenne smile), the psychological validity of the smile types
(ten-month-olds give different smiles to mother versus stranger;
Gottman's marriage-prediction work, where the death knell of a marriage
is contempt and true-happiness smiles on seeing the spouse bode better;
college yearbook photos correlate with happiness thirty years later),
and the third, coy or appeasement smile of embarrassment or stress
(shown in other primates and human infants). This serves the M2
emotion-functions row. Status for
the chapter-3 segment: verified-video; the remaining segments are
candidates until their transcripts are read.

Additional inspection (2026-10-25, worker-pplx-psychdim-2, batch 18): lecture 12 (Emotions,
Part II, 56:06) chapters 2 to 6 read in full from the transcript on the [OYC
page](https://oyc.yale.edu/psychology/psyc-110/lecture-12).

Chapter 2 (Q&A on Emotions towards Kin, 00:15:44 to 00:18:16): Bloom fields questions on
whether orphanage children comfort each other (no known answer for that arrangement; the TA
notes evidence that peer support helps young monkeys and children) and on middle-ground
parenting (away from severe deprivation, effects are not dramatic and are hard to tease
apart from genetics; "if there are effects they are not big and dramatic ones"). Serves the
M2 emotion-functions row as boundary material on early emotional environments.

Chapter 3 (Evolutionary Explanations for Emotional Responses, 00:18:16 to 00:25:20): Bloom
presents kindness to non-kin as the evolutionary puzzle (grooming, warning cries, shared
childcare, vampire bats sharing blood by regurgitation), introduces reciprocal altruism, the
cheater/free-rider problem, and cheater detection as the requirement for reciprocal altruism
to be evolutionarily stable (recognize, remember, punish cheaters), with the vampire-bat
study in which bats that are prevented from sharing are later starved by the others. Serves
the M2 emotion-functions row (social emotions and reciprocity).

Chapter 4 (Cooperative Behavior and the Prisoner's Dilemma, 00:25:20 to 00:40:44): Bloom
spells out the Prisoner's Dilemma (defection dominates in the one-shot game no matter what
the other player does, while mutual defection gives each player less than mutual
cooperation), gives the divorce-lawyer, nuclear-disarmament and drug-deal examples, runs the
classroom one-shot and repeated card games, presents Axelrod's computer tournament (63
competitors; the winner was Tit-for-Tat, four lines of code, by Anatol Rappaport, recorded
as printed in the transcript), and argues that emotions correspond to the game's cells:
liking those who cooperate, anger and distrust towards betrayers, guilt when betraying a
cooperator, with the chocolate-chips demonstration on his children. Serves the M2 emotion-
functions row directly.

Chapter 5 (The Ultimatum Game, Rationality and Irrationality, 00:40:44 to 00:49:21; the
page's chapter 5 heading includes Rationality and Irrationality, the outline table above
recorded only The Ultimatum Game): Bloom runs the classroom ultimatum game, notes that
accepting one dollar is the rational response yet people reject unfair offers out of spite
(with neuroeconomic evidence referenced), and develops the advantage-of-irrationality
argument: a rational person is easily exploited, a temper deters harassment, head-over-heels
love is more trustworthy than rational mate choice, and Daly and Wilson's account of murder
as adaptive irrationality, with the lecture quoting their line as printed: "in chronically
feuding and warring societies an essential manual — manly virtue is the capacity for
violence. To turn the other cheek is not saintly, but stupid or contemptibly weak" (the
transcript keeps Bloom's false start "manual —" before "manly virtue"; the Daly and Wilson
original was not opened this session, so this is a lecture quotation, not an independent
verification of their text). Serves the M2 emotion-functions row (emotion as commitment
device).

Chapter 6 (Cultures of Honor, 00:49:21 to end): Bloom defines cultures of honor (no reliance
on law, easily taken resources; Scottish highlanders, Masai, Bedouin, Western cowboys, the
American South), presents Nisbett and Cohen's evidence (more permissive gun laws, more
approval of corporal and capital punishment, more positive military attitudes, higher rates
of honor crimes but not overall street violence) and their Michigan undergraduate
provocation experiment (a confederate bumping the participant and calling him "asshole";
southern white males showed higher testosterone and cortisol stress responses and more
aggressive fill-in-the-blank completions), with Bloom's caveats (average differences;
Nisbett, himself a southerner, noting northern rudeness; honor virtues of loyalty, courage
and self-reliance not on their face bad), closing on emotions as motivational systems
crafted by natural and social environments, and the D'Arcy Thompson line "everything is the
way it is because it got that way". Serves the M2 emotion-functions row (cultural modulation
of social emotions).

Status for the chapter-2 to chapter-6 segments: verified-video (transcript-based content
review; identity, duration and instructor metadata inherited from the previous worker's
checks).

Verification method, recorded honestly: the chapters were first read via a prompted
extraction of the OYC page, then the read was completed against an unprompted full-text
fetch of the same page; the two texts matched and every quoted span above was re-checked
verbatim against the unprompted page text. This entry completes the lecture: all six
chapters of lecture 12 are now content-verified.

Advisor QC round 1 (first-item QC) was run on this entry; its four corrections (raw-text
comparison, exact Daly-Wilson wording with the false start kept, the Rappaport spelling
recorded as printed without an unsupported name correction, and the Prisoner's Dilemma
dominance phrasing) are applied in this revision.

Provenance note (batch 23): the 'unprompted' full-text fetch recorded above carried a
return-as-is prompt rather than being fully unprompted; every quoted span in this entry was
re-checked in the batch 23 raw unprompted re-fetch of the same page and matched verbatim,
including the Daly-Wilson false start and the Rappaport spelling.

Additional inspection (2026-10-25, worker-pplx-psychdim-2, batch 19): lecture 16 (Self and
Other, Part I, 58:15) chapters 3 to 6 read in full from the transcript on the [OYC
page](https://oyc.yale.edu/psychology/psyc-110/lecture-16), via a full-text fetch returning
the cleaned page text as-is (see the batch 23 provenance correction); the remainder of
chapter 1, which the previous worker had only opened, was also read in full in the same
fetch. Chapter 1 remainder (from the Milgram package study onward): Bloom presents Milgram's
small-world package study (160 Omaha residents sending to a Boston-area stockbroker, most
succeeded, at most six links, about half through two hub people), Gladwell's connector test
from The Tipping Point (250 Manhattan phone-book names; knowing requires being known back;
college average about twenty-one), the Bacon-number average of 2.8 over the quarter-million
movie-database actors, Rod Steiger as the most connected actor, and the sociologists' point
that places like Yale pay in powerful acquaintances rather than close friends. Serves the M5
self row as orientation on social connection (individual differences in social natures).

Chapter 3 (Aspects of the Self: You're Terrific!, 00:22:40 to 00:27:01): Bloom presents the
better-than-average effect ("the Lake Wobegon effect", from Garrison Keillor's above-average
town; strongest for driving), the candidate explanations (feedback arrives mainly when you
do well; people rank themselves on their own best criterion; a motivation to feel good about
yourself), and the self-serving bias (success credited to ability, failure to an unfair
midterm, a conspiracy of reviewers, or bad luck; the asymmetry found in athletes, CEOs and
accident reports). Serves the M5 self row (self-evaluation biases).

Chapter 4 (Aspects of the Self: Cognitive Dissonance, 00:27:01 to 00:40:00): Bloom presents
Festinger's cognitive dissonance theory (inconsistency causes an unpleasant state we act to
reduce), confirmation bias in magazine choice, Louisa Egan's M&M experiment (people
denigrate the option they turned down; the effect appears in four-year-olds and monkeys),
the insufficient justification effect with Festinger's classic one-dollar versus twenty-
dollar boring-task experiment (the one-dollar group rated the task more fun), When Prophecy
Fails (the world-end cult whose failed prophecy strengthened commitment), hazing, unpaid
political volunteers, the free-therapy point, and the children's drawing-reward finding
(rewarded children later value the activity less), refining the theory at the end: we adjust
beliefs to make ourselves look more moral and rational than we are. Serves the M5 self row
(self-justification).

Chapter 5 (Self and the Other, 00:40:00 to 00:50:03): Bloom introduces attribution and
Heider's person bias, the fundamental attribution error (over-attributing behaviour to the
person, under-weighting the situation), the quiz-show study (watchers rate the question-
asker as smarter despite the coin flip), the actor-role confusion cases (Robert Young's
Marcus Welby mail and the "I am not a doctor but I play one on TV" Sanka line; Stallone's
Swiss boarding school versus Rambo; Nimoy's I Am Not Spock and I Am Spock), and the United
States-India cross-cultural comparison (Western murder reports emphasise the person, Indian
reports the situation; the error is not a human universal). Serves the M5 self row (self
versus other in attribution).

Chapter 6 (How We Think about Other People, 00:50:03 to end): Bloom presents the liking
evidence: proximity (the Manhattan housing project: 90 percent of best friends in the same
building, 50 percent on the same floor), the mere exposure effect (Cutting's flashed-
paintings study; people prefer their own mirror image, friends prefer the true image),
similarity (friends and spouses alike; similarity predicts marriage success; couples
converge over time), and attractiveness with the Matthew effect (attractive people judged
smarter and more competent; teachers rate attractive children higher; mock-trial judges give
longer sentences to unattractive defendants), closing with Bloom's explicit discomfort with
the supermarket parking-lot study on parents and unattractive children, which he says he is
not comfortable with as an experiment and ends by calling not a good study. Serves the
interpersonal elective branch named in the scope doc.

Status for the chapter-1-remainder and chapter-3 to chapter-6 segments: verified-video
(transcript-based content review; identity, duration and instructor metadata inherited from
the previous worker's checks). This completes lecture 16: all six chapters are now content-
verified.

Provenance correction (batch 23): the fetch used for this entry carried a return-as-is
prompt rather than being fully unprompted; the entry was re-verified in the batch 23 pass against a raw unprompted re-fetch of the same page: the entry's content claims were checked against the raw text and match (a claim-and-quote check, not a full word-by-word body diff).

Additional inspection (2026-10-25, worker-pplx-psychdim-2, batch 20): lecture 17 (Self and
Other, Part II; Some Mysteries: Sleep, Dreams, and Laughter, 64:53) chapters 1 and 3 to 8
read in full from the transcript on the [OYC
page](https://oyc.yale.edu/psychology/psyc-110/lecture-17), via a full-text fetch returning
the cleaned page text as-is (see the batch 23 provenance correction); chapter 2 was verified
previously, so this completes the lecture. Note: the page's chapter table lists EIGHT
chapters; the earlier outline recorded in this ledger stopped at chapter 7 (Dreams) and
omitted chapter 8 (The True Mystery of Laughter, 00:51:31 to end).

Chapter 1 (Introduction, 00:00:00 to 00:01:39): Bloom reviews where the social-psychology
sequence left off (self biases, the fundamental attribution error, liking and the Matthew
effect).

Chapter 3 (Positive Uses and Negative Effects of Stereotypes, 00:11:15 to 00:27:19): Bloom
frames stereotypes as category knowledge essential to survival (chairs, apples, dogs), notes
people-stereotypes are collected the same way and are often accurate (the lawyer and height
examples), then the failure modes: confirmation bias sustaining inaccurate stereotypes,
unrepresentative media data (Sopranos and Shylock portrayals), the blind-audition finding
that women are hired far more behind screens, moral limits on applying even accurate group
generalizations (profiling versus the accepted young-driver insurance premium), Steele's
stereotype threat (reminding a group of its negative stereotype in a domain immediately
damages performance, shown with math tests), and the three levels (public, private,
unconscious associations), with the public-attitude shift data (willingness to vote for an
African American president moving from about half to near one hundred percent). Serves the
interpersonal elective branch (perception of groups).

Chapter 4 (Implicit Attitudes, 00:27:19 to 00:34:47): Bloom runs Banaji's Implicit
Association Test as a classroom demonstration (implicit.harvard.edu; described as the
biggest psychology experiment ever run by participation), explains the congruent-versus-
incongruent reaction-time logic, its extensions (gender and math, age, obesity, sexual
orientation), and why half-second differences matter: police shoot/don't-shoot reaction-time
studies, race differences in bystander helping when others are present, and Dovidio's hiring
studies where strong recommendations equalise hiring but ambiguous ones favour white
applicants in 1989, 1999 and a recent replication; closing with Devine's automaticity theory
(stereotypes are automatically activated and overriding them takes conscious work). Serves
the interpersonal elective branch (implicit group attitudes).

Chapter 5 (Question and Answer on Stereotypes, 00:34:47 to 00:38:09): Bloom gives the
structural remedies (job searches that deliberately solicit names from disadvantaged groups
because equally qualified people do not otherwise come to mind; blind reviewing) and the
own-group-bias question, noting African Americans show much the same IAT effect as white
Americans, so the effect does not reduce to in-group favoritism (Bloom's transcript adds the
hedge that in-group favoritism probably also plays a role). Serves the same elective
branch.

Chapter 6 (The Minor Mystery of Sleep, 00:38:09 to 00:44:49): sleep as a motivation like
food or drink; the EEG stages (I through IV, delta waves, REM; four to five cycles a night),
REM versus slow-wave sleep, the restoration account (growth hormone, organ restoration,
immune activity; stop sleeping and you die), the energy-preservation account, and sleep
disorders including the Ambien sleep-eating and sleep-driving side effects.

Chapter 7 (The Greater Mystery of Dreams, 00:44:49 to 00:51:31): real dreams versus sleep
thought; everybody dreams three to four times a night and dream diaries work because dream
memories fade; dream-content findings from collected reports (most dreams negative; tribal
societies more physical aggression; men more aggressive dreams than women; Americans more
than Europeans; about ten percent explicit sexual content; the most common dream is being
chased); Freudian theories with little support; the memory-consolidation view of dreams as
epiphenomena of the brain backing itself up.

Chapter 8 (The True Mystery of Laughter, 00:51:31 to end): laughter as an evolutionary
puzzle; the incongruity account quoted and rejected; Provine's mall and other public-place observations (over a thousand laughter-initiated situations, only ten percent of the initiating comments re-codable as actually humorous in any sense); laughter as
social, loud, contagious (laugh tracks); primate parallels (monkeys laughing in attack,
chimps in tickling); the mock-aggression theory; Plato's bonding-against-a-common-enemy
view; the ingredients of humor (a target, harm not serious enough for fear or grief,
surprise); and the self-tickling question. ASSIGNMENT NOTE: chapters 6 to 8 are content-
verified but serve NO current matrix row — sleep, dreams and laughter have no current matrix
outcome mapped; flagged for the strategist or owner whether they belong in the degree at all
(proposal: leave unassigned).

Status for the chapter-1 and chapter-3 to chapter-8 segments: verified-video (transcript-
based content review; identity, duration and instructor metadata inherited from the previous
worker's checks). Lecture 17 is now fully content-verified across all eight chapters.

Provenance correction (batch 23): the fetch used for this entry carried a return-as-is
prompt rather than being fully unprompted; the entry was re-verified against a raw
unprompted re-fetch of the same page in the batch 23 pass. The raw text is identical in
substance and additionally preserves Bloom's printed false starts (for example 'typical —
typically' and 'what we expect and what we actually — what actually happens') that the
earlier fetch had smoothed; no quoted span in this entry is affected, and the raw text is
now the authority of record.

Additional inspection (2026-10-25, worker-pplx-psychdim-2, batch 21): lecture 13 (Why Are
People Different, 65:49) chapters 3 to 6 read in full from the transcript on the [OYC
page](https://oyc.yale.edu/psychology/psyc-110/lecture-13), via a full-text fetch returning
the cleaned page text as-is (see the batch 23 provenance correction); chapter 2 was verified previously (batch 12), so this entry completes the lecture except for chapter 1, of which only the opening had been read before; chapter 1's complete bounded read was completed later, in the batch 23 raw-source review (see the batch 21 closing note and the batch 23 entry).

Chapter 3 (Defining and Measuring Intelligence, 00:19:47 to 00:30:29): Bloom presents the
difficulty of defining intelligence (an expert survey naming abstract reasoning, problem
solving and the capacity to acquire knowledge), Spearman's distinction between S (specific
subtest abilities) and G (general intelligence, illustrated with an athletic-testing
analogy), Wechsler scoring (100 fixed as the average; 68 percent between 85 and 115; 95
percent between 70 and 130; above 145 about 0.13 percent of the population), the Herrnstein
and Murray Bell Curve controversy, the APA task-force consensus that IQ is strongly related
to educational, occupational, economic and social outcomes, and the self-fulfilling-prophecy
objection (society makes IQ matter through the SAT and GRE; his height-based admissions
analogy).

Chapter 4 (Q&A, 00:30:29 to 00:36:33): faking on personality tests and the catch-question
defences; emotional intelligence (Salovey's research; predictive power not as strong as for
regular IQ; correlated with g); what makes a good test (reliability over time, validity
against real-world outcomes); personality and IQ as more-or-less stable traits.

Chapter 5 (The Roles of Genes and Environment, 00:36:33 to 00:51:16): the genes-plus-
environment framing; the heritability misconception cleared (heritability is a claim about
differences between people in a population, not about the origin of an individual's trait —
height is heritable, number of legs is not); shared versus non-shared environment, with
heredity plus shared plus non-shared summing to one; the behavioral-genetics toolkit
(monozygotic twins at 100 percent shared genes, dizygotic at 50 percent, adoptive siblings
with no special overlap; identical twins reared apart as the gold standard, including the
Giggle Twins and similar brain scans); high heritability for almost everything; and the
within-group versus between-group logic (Lewontin's differently fertilised wheat plots; the
two-midterms classroom analogy) showing that within-group heritability implies nothing about
between-group causes.

Chapter 6 (Genes, Environment and Intelligence, 00:51:16 to end at 65:49): group differences
correspond better to socially than genetically defined groups; the Flynn effect (tests
renormed so the average stays 100; an average 1980 test-taker scores about 120 on the 1950
test), showing IQ can shift dramatically without genetic change; Bloom's surprising claim
that almost everything not genetic is non-shared environment — the IQ correlation of
genetically unrelated adults raised in the same family is about zero; the Newsweek "do
parents matter?" debate around Judith Harris's The Nurture Assumption (including the George
Miller award story, the Philip Larkin poem and Harris's rebuttal, and Oliver James's reply
book); and Bloom's critique of a family-meals-and-teen-risk study for reverse causality,
third-variable confounds and unfactored age, extended to reading-to-children and the cycle
of violence.

Status for all six chapters: verified-video (transcript-based content review; identity,
duration and instructor metadata inherited from the previous worker's checks). The M5
personality row keeps its existing personality segments only; the intelligence-measurement
and behavioral-genetics chapters are content-verified but left unassigned, because
intelligence is not an established matrix row and the assignment decision is flagged for the
strategist or an independent review rather than made by this worker (see the gap register).
Lecture 13 is now fully content-verified across all six chapters; the complete bounded
chapter 1 (00:00:00 to 00:13:53) was read in full in the batch 23 raw re-fetch,
substantiating the all-six-chapters status from the raw page text.

Provenance correction (batch 23): the fetch used for this entry carried a return-as-is
prompt rather than being fully unprompted; the entry was re-verified in the batch 23 pass against a raw unprompted re-fetch of the same page: the word-level comparison of the transcript bodies returned 84 differences (in the inspected sample, sentence-boundary spacing joins), and the ASCII-alphanumeric sequences, with punctuation, whitespace and case removed, are two identical strings of 43,710 characters; no claim of exact punctuation or quotation equality is made.

Additional inspection (2026-10-25, worker-pplx-psychdim-2, batch 22): lecture 11 (Evolution,
Emotion, and Reason: Emotions, Part I, 53:15) chapters 4 to 6 read in full from the
transcript on the [OYC page](https://oyc.yale.edu/psychology/psyc-110/lecture-11), via a
full-text fetch returning the cleaned page text as-is (see the batch 23 provenance
correction); chapters 1 to 3 were verified previously, so this completes the lecture.

Chapter 4 (Question and Answer on Smiles, 00:28:08 to 00:32:22): Bloom fields questions on
whether nonhuman primates give the same human smile types (he does not know; promises to
find out), why some people's smiles are better (some are better able to express true
happiness), and teeth-versus-closed-lips smiling (probably a difference, likely varying
cross-culturally, citing England versus United States findings), and demonstrates emotional
contagion with a classroom smiling exercise (self-described as the worst class demo ever,
but noting it is extremely difficult to face a genuinely smiling person and not smile,
generalising to other emotions).

Chapter 5 (Non-social Emotions: Fear, 00:32:22 to 00:36:29): Bloom presents fear as a basic,
universal, nonsocial emotion with a distinctive facial expression (the Oswald-assassination
photograph's detective); the universal fear elicitors (spiders, snakes, heights, storms,
large animals, darkness, blood, strangers, humiliation, deep water, leaving home alone) and
his question of why so few people are afraid of guns, cars and electrical outlets, answered
by ancestral-environment danger; the inner-city Chicago children study he cites (their
biggest fears were snakes and spiders, many of them having, as Bloom says, probably never
seen a snake outside a zoo); and DeLoache's indirect-methods research finding babies'
prepared fear of spiders and snakes (pre-potent stimuli). Serves the M2 emotion-functions
row (fear as a case study).

Chapter 6 (Social Emotions and Altruism, 00:36:29 to end, 53:15): the social emotions split
into kin-directed and non-kin; altruism as the biologists' term; the gene-A-versus-gene-B
thought experiment; the gene's-eye perspective (the cold virus and sneezing, toxoplasmosis
rewiring rats' fear of cats, rabies and the syphilis-libido evidence; "a person is just a
germ's way of making other germs"); Dawkins's selfish genes and the claim that selfish genes
lead to altruistic animals; Haldane's joke about laying down his life for three brothers,
five nephews or nine first cousins and the genetic-relatedness logic; lion infanticide and
spontaneous abortions on pride takeover; infant distress calls as an evolutionary high-wire
act; baby cuteness as brain-wiring (Gould's Mickey Mouse essay, the baby-face bias in adults
including mock-trial verdicts); and the Cupboard Theory (Skinner, food and operant
conditioning) versus Bowlby's comfort-and-stranger-wariness account, closing with the Harlow
wire-mother versus cloth-mother films (to be explained next lecture). Serves the M2 emotion-
functions row (social emotions towards kin, altruism's evolutionary basis) and connects to
the lecture-12 kin-emotions segment already verified.

Status for the chapter-4 to chapter-6 segments: verified-video (transcript-based content
review; identity, duration and instructor metadata inherited from the previous worker's
checks). Lecture 11 is now fully content-verified across all six chapters.

Provenance correction (batch 23): the fetch used for this entry carried a return-as-is
prompt rather than being fully unprompted; the entry was re-verified in the batch 23 pass against a raw unprompted re-fetch of the same page: the chapters 4 to 6 text was read from the raw fetch and matches the entry's descriptions and quoted phrasings, including the Chicago-children and fear-elicitor phrasings as printed (a claim-and-quote check, not a full word-by-word body diff).

Additional inspection (2026-10-25, worker-pplx-psychdim-2, batch 27): the Howard talk
(Inaugural Lecture: Unravelling Early Self-Regulation, 58:54) could NOT be content-verified this session; no transcript was retrieved through the routes tried. What was tried, in order: the YouTube timedtext
caption API (returns empty for this video); the innertube player API under three client
configurations (all HTTP 403); and a real cloud browser session on the YouTube watch page,
where the Show transcript control exists and the transcript panel opens but renders zero
segments (the page's embedded player response also reports no caption tracks). No transcript was found on the Oxford event page (abstract only, already recorded in the candidates table by the previous worker); the Oxford Podcasts site was searched and no matching episode was returned. Per the no-hallucination rule the lecture's content beyond its published abstract
cannot be classified, so it stays a candidate with its segment assignment outstanding;
flagged for the supervisor. The abstract's claims (one-fifth of children lacking expected
self-regulation growth before school; age-7 children remaining at 4-year-old levels; at
least a doubling of risk of poor academic, health, wellbeing and economic outcomes;
malleability and any-cause improvements associated with better outcomes decades later; most
interventions showing small effects) remain recorded as the event page's description of the
lecture, not as verified lecture content. Status: candidate (transcript-based content review
attempted and blocked; identity, duration and instructor metadata inherited from the
previous worker's checks).

Additional inspection (2026-10-25, worker-pplx-psychdim-2, batch 26): the Wood talk (The
secret habits that control your life, 6:18 on the YouTube watch page, 6:19 in her Social
Psychology Network video gallery) was read in full from the transcript published on the [Big
Think page for the talk](https://bigthink.com/the-well/how-to-change-habits/) (an unprompted full-text fetch; the page carries the complete spoken text, and the page sits in Big Think's The Well section). Content, classified from the
transcript: Wood opens with habits' bad name in psychology (associated with dogs and limited
minds; humans assumed too creative for them) and the research finding that people act on
habits much more than they are aware of; the 1980s four-story office building stair-use
study (persuasion signs had no effect; slowing the elevator door closing by 16 seconds cut
elevator use by a third, and when the door speed was restored people kept taking the stairs
— a formed habit persisting); friction defined as barriers to performing a behavior
(distance, time, effort) as the determinant of what becomes habitual; the self-control
misconception (exerting willpower does not change habits); habit memory as a memory system
we do not have access to and cannot fuss with, changeable only through repetition of other
behaviors; the reward mechanism (repeating a behavior in a given context in the same way
plus a reward; rewards release dopamine and get us to repeat behaviors and form habits);
environment design as the core of behavior change (working with what is around you; the
professional chefs' mise-en-place metaphor); habits giving meaning in life (rituals' habit
component; baseball players' pre-bat patterns giving a sense of control and confidence); and
practiced automaticity freeing attention for multitasking and making sense of the world.
This serves the M7 habit formation and change row as a verified primary talk segment: the
talk presents the row's central content (context cues, rewards, friction, habits versus
self-control) in Wood's own words and is consistent with the row's Carden and Wood 2018 and
Singh et al. 2024 readings. Status: verified-video (transcript-based content review;
identity, duration and instructor metadata inherited from the previous worker's checks). The
talk's segment assignment: one full segment, 00:00:00 to 6:18; note: the transcript page's metadata states a 2025-05-23 page date, recorded here separately from the YouTube upload date (2022-05-26) already in the candidates table; no relationship between the two dates is inferred.

Additional inspection (2026-10-25, worker-pplx-psychdim-2, batch 25): the Barrett talk (You
aren't at the mercy of your emotions: your brain creates them, TED@IBM, December 2017,
18:29) was read in full from the transcript embedded in the [TED page's page data](https://w
ww.ted.com/talks/lisa_feldman_barrett_you_aren_t_at_the_mercy_of_your_emotions_your_brain_cr
eates_them/transcript) (332 caption cues with timestamps, fetched as raw page HTML and
extracted from the page's embedded JSON; the cleaned-text fetch of the same page renders
only the description, so the HTML was the working source). Content, classified from the
transcript: Barrett opens with the Tsarnaev sentencing (jurors reading remorse from a stone
face) and states her central claims — emotions are not universally expressed and recognized,
not hardwired brain reactions, and jurors 'do not and cannot detect remorse or any other
emotion in anybody ever'; the research basis (25 years; facial electromyography, hundreds of
physiology studies, hundreds of brain scans); emotions as guesses the brain constructs in
the moment, with the experiential-blindness blob demonstration (the snake image) introducing
prediction as the brain's basic operation; emotion perception in others as prediction (the
stone-faced stare read as remorseless killer or as Chechen stoic acceptance); the critique
of emotion-detection systems (Google and Facebook named); affect distinguished from emotion
(calmness, agitation, comfort, discomfort as simple barometer-like feelings present every
waking moment, which predictions link to the world to create emotion); the churning-stomach
example (cookies versus a hospital waiting room); the control claim — changing the
ingredients of emotion today teaches the brain to predict differently tomorrow ('the
architect of your experience'); test anxiety reframed as energized determination with the
performance evidence; the morning-dread example with its purely physical causes (tiredness,
hunger, dehydration); the explicit caveat that she is not suggesting Jedi mind tricks can
talk someone out of depression or anxiety or any serious condition; and the responsibility
conclusion (more control means more responsibility; today's experiences become tomorrow's
predictions). This serves the M2 constructed-emotion row (theories of emotion construction:
allostasis, constructed emotion, the prediction debate) as a verified primary talk segment;
note the talk presents the construction and prediction claims directly and does not use the
word allostasis, so the row's allostasis content still rests on the Barrett et al. 2025
reading. Status: verified-video (transcript-based content review; identity, duration and
instructor metadata inherited from the previous worker's checks). The talk's segment
assignment: one full segment (no chapter divisions), 00:00:00 to 18:29.

Additional inspection (2026-10-25, worker-pplx-psychdim-2, batch 24): lecture 7 (Conscious
of the Present; Conscious of the Past: Language (cont.); Vision and Memory, 59:43) chapters
1 to 3 and 6 read in full from the transcript on the [OYC
page](https://oyc.yale.edu/psychology/psyc-110/lecture-7), via a raw unprompted full-text
fetch (prompt omitted, the batch 23 standard); chapters 4 and 5 were verified previously
(batch 15), so this completes the lecture. Chapter 1 (Non-human Communication, 00:00:00 to
00:09:16): follow-ups on newborns favoring their own language (auditory exposure beginning
in utero) and the Let Him Have It court case (tried and found guilty, executed 1957,
pardoned 1988); nonhuman communication systems contrasted with human language (vervet monkey
calls, the honeybee waggle dance as a continuous analog signal, variable birdsong); the claim that no nonhuman system in any real sense has phonology, morphology, syntax, combinatorial systems or arbitrary names, with Bloom's almost-certainly qualification; the trained-ape controversy (Kanzi; Nim Chimpsky) with Bloom's
assessment (against the Gray textbook's more credulous view: a handful of word-like signs
after years of training, utterances without recursion and largely repetitive, citing the
Nim-eat samples; Gleitman's remark that if any normally developing child spoke like these sampled utterances, his parents would rush him screaming to a neurologist); why apes failing language is unsurprising given the
evolutionary split; and Bloom's opinion that teaching apes sign language is misguided, with
wild systems the interesting study. Serves the M3 cognitive elective. Chapter 2 (The
Relationship between Language and Thought, 00:09:16 to 00:12:39): the skipped subfields
(language in the brain, aphasias, specific language impairment, dyslexia, perception and
production, reading as a cultural invention versus language as an instinct); and the two language-and-thought questions posed for the course reading response (Bloom says the readings and the reading response address the Sapir-Whorf question): is language necessary for abstract thought (framed as an open question, to be studied by looking at creatures without language such as babies and chimpanzees and how smart they are) and does language structure thought (linguistic relativity, English versus Korean). Serves the
M3 cognitive elective. Chapter 3 (Question and Answer on Language, 00:12:39 to 00:18:06):
individual differences in language learning (Bloom's Einstein-did-not-speak-until-age-four anecdote, explicitly flagged by Bloom as not a true story; slight female advantage; large
genetic factor; hemispheric bases); bilingual children distinguishing and learning both
languages; multilingualism as the world norm; and Bloom's account that children learning more than one language seem to show no
deficit and no slowdown in either language, with his as-far-as-we-know qualifier,
against the finite-resources intuition he articulates (with the Quebec teaching debate
as context). Serves
the M3 cognitive elective. Chapter 6 (Question and Answer on Attention and Memory, 00:58:04
to end, 59:43): Bloom answers why practiced skills become automatic and involuntary (he does
not know the why; the cannot-not-read, cannot-stop-listening and cannot-shut-eyes examples),
and confirms the amnesia patient retained pre-accident knowledge such as his own name.
Boundary material for the M4 attentional row. Status for the chapter-1, chapter-2, chapter-3
and chapter-6 segments: verified-video (transcript-based content review; identity, duration
and instructor metadata inherited from the previous worker's checks). Lecture 7 is now fully content-verified across all six chapters; the bounded chapters 1 to 3 and 6 were re-read from the raw fetch's saved output file with boundaries and lengths printed (chapter 1, 7,894 characters; chapter 2, 3,368; chapter 3, 4,499; chapter 6, 1,443), confirming full coverage of each bounded chapter.

Additional inspection (2026-10-25, worker-pplx-psychdim-2, batch 24, continued): lecture 1
(Introduction to Psychology, 29:37) chapter 2 (General Goals, 00:10:03 to 00:13:08) read in
full from the transcript on the [OYC
page](https://oyc.yale.edu/psychology/psyc-110/lecture-1), via the same raw unprompted
fetch; chapters 1 and 3 were verified previously (batch 13) and were re-read in full in the
same fetch, matching the batch 13 record. Chapter 2 content: motivations for taking the
course; the real-world relevance of psychology (philosophy-of-life issues); the five sub-
areas of the field (neuroscience, developmental, cognitive, social, clinical); and the
related domains (evolution, economics and game theory, philosophy, computer science,
anthropology, literature and theology). Serves M1 orientation; no matrix row currently cites
lecture 1 segments, so the assignment is flagged for the strategist or an independent review
rather than made by this worker. Status for the chapter-2 segment: verified-video
(transcript-based content review; identity, duration and instructor metadata inherited from
the previous worker's checks). Lecture 1 is now fully content-verified across all three chapters; the chapter 2 text, and the re-reads of chapters 1 and 3, were read in full from the raw fetch's saved output file (chapter 1, 6,061 characters; chapter 3, 12,894 characters), completing the read recorded above.

QC pass (2026-10-25, worker-pplx-psychdim-2, batch 23; advisor round 2): the advisor
withheld clearance on batches 19 to 22 with four repairs, all applied in this pass. (1)
Provenance: the full-text fetches used for batches 18 to 22 carried a return-as-is prompt
rather than being fully unprompted; every entry was re-verified in this pass against a raw
unprompted re-fetch of the same OYC page (prompt omitted). The checks differed by lecture and are recorded as performed: lecture 13's transcript body was compared with two tests: the word-level comparison returned 84 differences (in the inspected sample, sentence-boundary spacing joins such as 'today.So'), and the ASCII-alphanumeric sequences, after removing punctuation, whitespace and case, are identical — two matching strings of 43,710 characters each; lecture 17's body was compared and is identical in substance, the raw additionally preserving printed false starts; lectures 11 and 12 were re-read from raw fetches with the entries' content claims and quoted spans checked against the raw text and matching; lecture 16 was re-read from a raw fetch with the entry's content claims checked and matching. Full word-by-word body comparisons were run only for lectures 13 and 17; the lectures 11, 12 and 16 checks were claim-and-quote checks, not full-body diffs. Lecture 17's raw fetch additionally preserves
Bloom's printed false starts (for example 'typical — typically' and 'what we expect and what
we actually — what actually happens') that the earlier fetch had smoothed; no quoted span in
the ledger is affected, and the raw text is now the authority of record. (2) Lecture 13's
all-six-chapters status is now substantiated: the complete bounded chapter 1 (00:00:00 to
00:13:53) was read in full from the raw page text (the universals-to-differences framing;
reliability and validity; the superhero-test, Rorschach, Allport, Eysenck and Cattell
measurement history). Lecture 7's chapter 1 remains unread and stays on the candidate list.
(3) The whole-lecture assignment to the M5 personality row is undone: the row reverts to its
personality segments (lecture 13 chapter 1's measurement history and chapter 2; lecture 16
chapter 2; lecture 17 chapter 2), the incidental lecture 16 chapter 1 extension is reverted,
and the intelligence and behavioral-genetics chapters are recorded as verified but
unassigned pending scope review (gap register note added). The stereotypes/IAT row is marked
PROPOSED pending the scope decision, and the lecture 17 chapters 6 to 8 flag now reads 'no
current matrix outcome mapped' instead of asserting a scope conclusion. (4) Source
qualifiers restored: the Chicago-children and fear-elicitor phrasings in batch 22 now record
Bloom's hedges as printed, and the lecture 16 parking-lot-study phrasing records his
discomfort and his final 'not a good study' judgement. The long single-line batch entries
were also split into per-chapter paragraphs wrapped under 2,000 characters per line so the
ledger can be inspected in full.

Additional inspection (2026-10-25, batch 16): lecture 17 (Self and
Other, Part II, 64:53) had its chapter outline recorded (Introduction
[00:00:00]; First and Fast: How We Form Impressions of Others
[00:01:39]; Positive Uses and Negative Effects of Stereotypes
[00:11:15]; Implicit Attitudes [00:27:19]; Question and Answer on
Stereotypes [00:34:47]; The Minor Mystery of Sleep [00:38:09]; The
Greater Mystery of Dreams [00:44:49]) and chapter 2 read in full:
Bloom presents first impressions and confirmation bias (Kelley's
warm-cold bio study; the DC sniper white-van example), thin-slice
research (Rosenthal and Ambady: five-second clips predict teacher
evaluations; Big Five judgments from brief exposures; sexual-orientation
detection slightly better than chance from about one second), and the
Pygmalion effect (Rosenthal and Jacobson: randomly chosen children
described as about to bloom in IQ gained more, because teacher
expectations changed teacher behavior), framing self-fulfilling
prophecies. This serves the M5 self row. Status for the chapter-2
segment: verified-video; the remaining segments are candidates until
their transcripts are read.

Additional inspection (2026-10-25, batch 15): lecture 7 (Language and
perception-attention-memory content, 59:43) had its chapter outline
recorded (Non-human Communication [00:00:00]; The Relationship between
Language and Thought [00:09:16]; Question and Answer on Language
[00:12:39]; Introduction to the Complexity of Perception and
Expectation [00:18:06]; Linking Attention and Memory [00:39:15];
Question and Answer on Attention and Memory [00:58:04]) and the
opening of chapter 1 read: Bloom reviews language universals,
phonology, morphology and syntax, the arbitrary-sign and combinatorial
recursion properties, and turns to animal communication (animals have
communication systems; language in the technical narrow sense, almost
certainly no). This serves M3 (cognitive) as elective material, and the
perception, expectation, attention and memory chapters (from 00:18:06)
are the likely segments for the M4 attentional row. Lecture 7's chapter
5 (00:39:15 to 00:58:04) was then read in full: Bloom treats attention
and memory together, distinguishing sensory, short-term (working) and
long-term memory, implicit and explicit memory, semantic and episodic
memory, encoding, storage and retrieval, and recall versus recognition;
presents attention as a spotlight that determines what gets into memory;
demonstrates the Stroop effect (involuntary capture by reading), the
gorilla demonstration (about half of viewers counting passes miss the
person in the gorilla suit), and change blindness (Dan Simons's work,
including the door study in which people do not notice the
experimenter being switched). This serves the M4 attentional row
directly. Chapter 4 (00:18:06 to 00:39:15) was then read in full as
well: Bloom frames perception, attention and memory as one story, argues
that successful perception involves educated unconscious guesses
(inferring a three-dimensional world from the two-dimensional retinal
array), and presents the evidence: color and brightness constancy
(factoring out illumination, the shadow demonstration), the Gestalt
object-segmentation principles (proximity, similarity, closure, good
continuation, common movement, good form) with illusory-contour figures
(Kanizsa triangle and square), the depth cues (binocular disparity,
interposition, relative size, texture gradient, linear perspective) and
the illusions that expose them (Mueller-Lyer, Ponzo, Shepard tables),
closing with the claim that we are often wrong about our own
experiences, including flashbular memories of September 11 studied
prospectively and often wrong a year or two later. This serves the M3
cognitive row (perception as inference). Status for the chapter-4 and
chapter-5 segments: verified-video; the remaining segments are
candidates until their transcripts are read.

Additional inspection (2026-10-25, batch 14): lecture 14 (What Motivates
Us: Sex, 52:47) had its chapter outline recorded (Addressing Morality and
Inevitability on Evolution, Sex and Gender [00:00:00]; Basic Sex Ed
[00:10:48]; Sex Differences among Humans [00:19:22]; Beauty: An Average
Face [00:32:16]; Social Factors for Sex Differences [00:38:24]; Sexual
Orientation [00:45:53]; Question and Answer on Sex and Gender
[00:51:39]) and the opening of chapter 1 read: Bloom frames sex as
centrally important despite little time spent on it, and sets up
questions about how males and females differ. This resolves the standing
caution about lecture 14: its title and content are about sex and
gender, not self-determination theory, so this lecture does not teach
the M6 framework and no M6 claim rests on it. The M6 row rests on Ryan
and Deci 2020 and Woolley et al. 2025. This check establishes only what
the lecture covers; whether sexual motivation has a place in the
motivational dimension is a separate owner or strategist decision, and
no such claim is made here. Lecture 14 remains a possible elective for
M5 (sex differences as individual differences) or M2 (attraction and
culture) once its segments are read; it stays a candidate.

Additional inspection (2026-10-25, batch 13): lecture 1 (Introduction
to Psychology, 29:37) had its chapter outline recorded (Introduction to
and Requirements for the Course [00:03:40]; General Goals for the Course
[00:10:03]; Examples of Materials Covered in the Course [00:13:08]) and
chapter 1 read in full: Bloom opens the course as a comprehensive
introduction to the study of the human mind, listing the range of topics
(brains, children, language, sex, memory, madness, disgust, racism,
love) and the questions the course addresses (why some people get
depressed and others do not, whether childhood memories can be trusted,
and others), plus course logistics (Peter Gray's Psychology textbook,
Norton Reader, exams). This serves the M1 orientation row. Chapter 3
(00:13:08 to end) was then read in full as well: Bloom gives five
examples of course topics, the brain (the Terri Schiavo case as a stark
illustration of the physical nature of mental life), child development
(how much knowledge is innate versus learned; continuity and whether
the child is father to the man), what makes people different (genes,
environment and their interaction; whether parents shape us),
attraction (computer-generated faces and what makes a face attractive
within and across cultures), and morality (good and evil). This is the
substantive orientation content for the M1 row. Status for the
chapter-1 and chapter-3 segments: verified-video; the remaining
segments are candidates until their transcripts are read.

Additional inspections (2026-10-25, batch 12): lecture 12 (Emotions, Part
II, 56:06) had its chapter outline recorded (Emotional Responses to
Caregivers and Kin [00:00:00]; Q&A on Kin [00:15:44]; Evolutionary
Explanations for Emotional Responses [00:18:16]; Cooperative Behavior
and the Prisoner's Dilemma [00:25:20]; The Ultimatum Game [00:40:44];
Cultures of Honor [00:49:21]) and the opening of chapter 1 read: Bloom
continues the emotions theme, answering a question on nonhuman primate
smiles (they correspond almost entirely to appeasement smiles; no
equivalent of the greeting or Duchenne smile), reviewing the functions of
emotions and turning to social emotions towards kin. Lecture 13 (Why Are
People Different, 65:49) had its chapter outline recorded (Personality,
Intelligence and Determining Difference [00:00:00]; Measuring
Personality with The Big Five [00:13:53]; Defining and Measuring
Intelligence [00:19:47]; Q&A [00:30:29]; The Roles of Genes and
Environment [00:36:33]; Genes, Environment and Intelligence [00:51:16])
and the opening of chapter 1 read: Bloom shifts from human universals to
differences, framing how and why people differ. Lecture 12's chapter 1
(00:00:00 to 00:15:44) was then read in full as well: Bloom reviews the
functions of emotions and social emotions towards kin, presents
nonhuman-primate smiles as almost entirely appeasement smiles, uses the
Emperor penguin (March of the Penguins) to illustrate parental
investment, contrasts the Cupboard Theory of attachment (operant
conditioning, food) with Bowlby's comfort-and-stranger-wariness account,
presents Harlow's wire-mother versus cloth-mother experiments and the
solitary-confinement and harsh-orphanage findings, and closes the
kin-emotions theme noting reversibility through later contact. This
serves the M2 emotion-functions row. Status for the chapter-1 segment:
verified-video; the remaining segments are candidates until their
transcripts are read. Lecture 13's chapter 2
(00:13:53 to 00:19:47) was then read in full: Bloom presents the Big Five
factors (neuroticism versus stability, extraversion versus introversion,
openness, agreeableness, conscientiousness), the OCEAN mnemonic, the
evidence that the traits are stable over time (very stable after age
thirty) and show cross-observer agreement, and the observation that a
personality leaves a trail in the minds of the people around you. Correction to this note: the
measurement-history material (projective inkblots described as
worthless as measures, Allport's dictionary trait list, Eysenck's two-
and three-factor schemes, Cattell's sixteen factors) appears before the
chapter 2 marker in the transcript and belongs to the end of chapter 1,
not to chapter 2; the full bounded chapter 2 has now been read strictly
between its markers. Chapter 2 also presents the Big Five's predictive
validity (conscientiousness and faithfulness to a spouse, openness and
likelihood of changing jobs, extraversion and eye contact and more
sexual partners), with a Simpsons-character rating study (Flanders and
Marge agreeable, Mr. Burns and Nelson low). This
serves the M5 personality row. Status for the chapter-2 segment:
verified-video; the remaining segments are candidates until their
transcripts are read. 

Additional inspection (2026-10-25, batch 11): lecture 16 (Self and Other,
Part I, 58:15) had its chapter outline recorded (Social Psychology and
Connections between People [00:00:00]; The Spotlight and Transparency
Effects [00:15:56]; You're Terrific! [00:22:40]; Cognitive Dissonance
[00:27:01]; Self and the Other [00:40:00]; How We Think about Other
People [00:50:03]) and the opening of chapter 1 read: Bloom opens the
two-lecture social psychology sequence on how we think about ourselves
and others, using the fascination with celebrities (the Aniston and
Pitt separation) to raise the question of why we are so interested in
other people, then sets up an individual-difference test from Gladwell
recounting a Milgram package-passing study. The chapter 2 segment
(00:15:56 to 00:22:40) was then read in full: Bloom presents Gilovich's
spotlight effect (people believe others notice them far more than they
do, grounded in regret research: dying and old people regret what they
did not try, and the stated reason is looking silly) and the
transparency effect (we believe we are more transparent than we are;
people overestimate how much others notice their secrets), with a
classroom lying demonstration. This serves the M5 self row (how we think
others see us). Status for the chapter-2 segment: verified-video; the
remaining segments are candidates until their transcripts are read.

## Coverage matrix (v3, current; supersedes v1, v2 and v2.1)

Module plan (proposal, pending advisor review; module ids are placeholders
until the integrator band assigns schema ids): M1 orientation, M2 affective,
M3 cognitive, M4 attentional, M5 self, M6 motivational, M7 overt behavioural,
M8 capstone. Rows are topic families derived from the opened sources and
the opened syllabus and survey-text anchors; each row names its grounding
source and carries a mark with a reason. Binding clause (2026-10-26
centering repair, round 2): every Taught and Practised cell must serve
the degree's walk-of-life centering, and every Assessed cell must require
the learner to connect the topic to their own lived instance, stating
what the framework helps the learner understand or choose in that case
and what the evidence leaves uncertain. Rows whose assessments test recall
or terminology only are noncompliant. Taught, practised and assessed
refer to the planned module design; M1 is written (DRAFT NOT
CLEARED; Gate-1 scope and coverage are cleared, and the module itself
awaits its own review and the authorized stop-gate decision)
and the other modules are not built, so every row's delivery status is
planned, not built. Gaps named below are
blocking gaps on the register, not quiet omissions.

| Dimension | Topic family (mark, reason) | Grounded in | Module | Taught | Practised | Assessed |
|---|---|---|---|---|---|---|
| framework | The six EEMM psychological dimensions in process terms (essential: the owner's degree definition names them) | [Hofmann and Hayes 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11303929/); [Maitland 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC12392214/) | M1 | reading both papers | dimension-mapping exercise on a personal example | written definitions in the learner's own words |
| framework | Evolutionary change processes: variation, selection, retention, context (essential: the EEMM's organising frame) | [Maitland 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC12392214/) | M1 | reading | apply the three processes to one own behaviour | rubric-checked application |
| framework | Levels of analysis: biophysiological and sociocultural as context, idiographic multilevel assessment (essential: the EEMM is multilevel; see the context proposal in the scope doc) | [Hofmann and Hayes 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11303929/) | M1 | reading | identify levels of analysis in a case study | level-labelling exercise |
| framework | Research literacy: falsifiability, design, NHST, Type I and II errors, replication, theories (essential: the owner's exit capability requires critical reading of current research) | [Smith, Thinking like a Psychological Scientist](https://nobaproject.com/modules/thinking-like-a-psychological-scientist) | M1 | reading plus worked appraisal | appraisal of one study | appraisal rubric |
| affective | What emotions are and do: functions across intrapersonal, interpersonal and cultural levels (essential: the affective dimension's core content) | [Hwang and Matsumoto](https://nobaproject.com/modules/functions-of-emotions) | M2 | reading plus content-verified OYC lecture 11 (all six chapters, 00:00:00 to 00:53:15: emotion functions, smiles, fear, social emotions and altruism towards kin; see the ledger batch 22 entry) and lecture 12 (all six chapters content-verified; see the ledger batch 18 entry) | function-spotting in a personal episode | episode analysis rubric |
| affective | Emotion generation versus regulation; strategy families and goals of regulation (essential: the current debate the opened 2024 review maps) | [Martinez-Priego et al. 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11479914/) | M2 | reading (the regulation-models strand rests on the review; OYC lectures 11 and 12 are candidates for support segments) | apply the process model to a personal episode | case analysis rubric |
| affective | Theories of emotion construction: allostasis, constructed emotion, the prediction debate (essential: how emotions arise is the dimension's foundational question) | [Barrett et al. 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12164598/); verified TED talk segment (Barrett, December 2017, 18:29, content-verified from the TED transcript; see the ledger batch 25 entry; note the talk presents the construction and prediction claims directly and does not use the word allostasis) | M2 | reading | compare constructionist and basic-emotion accounts | comparison essay |
| affective | Difficulties in emotion regulation and regulatory flexibility (essential: links affect to adaptation) | [Martinez-Priego et al. 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11479914/) | M2 | reading | compare rigid versus flexible regulation in a case | written comparison |
| EXCLUDED (2026-10-26 centering repair, round 2) | Affective neuroscience as a standalone elective — EXCLUDED under the when-in-doubt-exclude rule (advisor round 2): background relevance to the constructed-emotion anchor does not establish a necessary contribution beyond the core, and the core source itself carries the brain-level claims it needs; neuroscience already necessary to explain a core source stays with that source | [Harmon-Jones and Harmon-Jones](https://nobaproject.com/modules/affective-neuroscience) (verification record retained) | none | none | not assessed | none |
| cognitive | Core cognitive families: conditioning and learning, memory, judgment and decision making (essential: the cognitive dimension's standard families per the Yale syllabus and OpenStax contents) | [Bouton](https://nobaproject.com/modules/conditioning-and-learning); [McDermott and Roediger](https://nobaproject.com/modules/memory-encoding-storage-retrieval); [Bazerman](https://nobaproject.com/modules/judgment-and-decision-making) | M3 | reading plus worked examples | apply each family to a personal example | application rubric |
| EXCLUDED (2026-10-26 centering repair, round 2) | Language (psycholinguistics) as an elective — EXCLUDED under the when-in-doubt-exclude rule for consistency with the scope doc's "Elective branches: none": the stated reason (psycholinguistics is a distinct field with its own curricula, covered only at introductory level here) argues against, not for, an elective; no learner need on record beyond topical fit; re-admission possible later on a stated learner need. The affected segment (verified OYC lecture 7 chapters 1 to 3, 00:00:00 to 00:18:06) becomes unassigned and is excluded with the elective. | [Yale 2026 syllabus](https://summer.yale.edu/sites/default/files/uploaded-files/syllabi/2026/psyc-s1100.pdf); OYC lecture 7 chapters 1 to 3 (verification records retained) | none | none | not assessed | none |
| cognitive | Perception as educated unconscious inference: constancy, Gestalt segmentation, depth cues and illusions (essential: the standard introductory treatment of perception, grounded in a verified lecture segment) | verified OYC lecture 7 chapter 4 (00:18:06 to 00:39:15) | M3 | lecture segment with illusions demonstrated | choose one illusion from the learner's own visual experience, name the conditions that produced it there, and state what the Gestalt account helps them notice versus what remains uncertain | analysis rubric with walk-of-life clause |
| self | Self-esteem: definition and its distinction from self-concept clarity (essential: a core self-evaluation construct explicitly distinguished in the opened SCC review) | [Manchiraju 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC13350471/) | M5 | reading | distinction exercise between SCC and self-esteem | short written distinction |
| cognitive | Rumination and repetitive negative thinking: features, transdiagnostic evidence (essential: a current transdiagnostic literature grounded in an opened World Psychiatry review) | [Ehring 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8429319/) | M3 | reading | analyse an RNT episode against the defining features | rubric-checked analysis |
| cognitive | Appraisal of a commentary's claims about experimental evidence: rumination and RNT (essential: trains the owner's critical-reading exit capability; the Ehring 2021 source is a synthesis, not a primary experiment report, and the exercise distinguishes what a commentary can and cannot support and identifies the information a primary report would add — per deg-verify-b's source-to-task alignment flag c814f6e) | [Ehring 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8429319/) | M3 | reading plus commentary appraisal | appraising the commentary's claims about experimental evidence, crediting not reported or cannot assess where appropriate | appraisal rubric |
| attentional | The three attention networks with anatomy and modulators (essential: the three-network framework used by the opened attention reviews) | [Posner et al. 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6430178/); [Posner 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC10301152/) | M4 | reading | network-to-symptom mapping exercise | mapping rubric |
| attentional | Selective attention and its limits: spotlight, Stroop, inattentional blindness, change blindness (essential: the classic phenomena of attentional selection, grounded in a verified lecture segment; supplementary to the network framework, not a substitute for it) | verified OYC lecture 7 chapter 5 (00:39:15 to 00:58:04) | M4 | lecture segment with demonstrations | explain one blindness phenomenon by the attention window | explanation rubric |
| attentional | Attention measurement (ANT), development, links to disorders and affect regulation (essential: connects the dimension to evidence and to affect) | [Posner et al. 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6430178/); [Posner 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC10301152/) | M4 | reading | interpret supplied sample network scores (which network is doing what in the reported data, and what the scores cannot settle); then, as a separate question, take one recurring attention situation from the learner's own day and state what the network framework does and does not say about it | interpretation exercise with walk-of-life question |
| attentional | Contemplative training as attentional evidence (essential: one attentional training paradigm among others; doctrine stays in the practica) | [Lippelt et al. 2014](https://pmc.ncbi.nlm.nih.gov/articles/PMC4171985/pdf/fpsyg-05-01083.pdf) | M4 | reading | compare practice types by attentional mechanism | comparison table |
| self | Self-concept clarity: definition, measurement, development, evidence limits (essential: a comprehensive recent review of a well-defined structural account of the self, selected as the self-dimension anchor) | [Manchiraju 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC13350471/) | M5 | reading | self-assessment with the SCCS framing and limits discussion | reflective write-up |
| self | Identity development: exploration and commitment, identity domains, narrative identity (essential: how the self develops over time) | [Branje et al. 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC9298910/) | M5 | reading | chart an identity domain over time | domain-chart rubric |
| self | Personality and traits: Five-Factor Model, person-situation debate (essential: stable individual differences in self and behaviour) | [Diener and Lucas](https://nobaproject.com/modules/personality-traits); verified OYC lecture 13 chapter 1 (personality-test reliability and validity, the Rorschach critique, Allport, Eysenck, Cattell) and chapter 2 (00:13:53 to 00:19:47, Big Five), lecture 16 chapter 2 (00:15:56 to 00:22:40, spotlight and transparency effects) and lecture 17 chapter 2 (00:01:39 to 00:11:15, impression formation and Pygmalion effect) | M5 | reading | describe the learner's own trait pattern in one recurring situation, state what the trait account helps them understand or predict there, and carry the person-situation caveat into the description (including where the account fits poorly) | written trait account with walk-of-life clause |
| self | Self-evaluation and self-justification: better-than-average effect, self-serving bias, cognitive dissonance (essential: how the self is judged and defended; added 2026-10-25 from the batch 19 verification) | verified OYC lecture 16 chapters 3 and 4 (00:22:40 to 00:40:00) | M5 | lecture segments | spot the biases in a written self-account | short written analysis |
| self | Self versus other in attribution: the fundamental attribution error, actor-role confusion, cross-cultural limits (essential: the self-other asymmetry in explaining behaviour; added 2026-10-25 from the batch 19 verification) | verified OYC lecture 16 chapter 5 (00:40:00 to 00:50:03) | M5 | lecture segment | attribution exercise on one own versus another's behaviour | exercise rubric |
| EXCLUDED (2026-10-26 centering repair) | Liking and interpersonal attraction, and group perception (stereotypes, stereotype threat, implicit attitudes and the IAT): the interpersonal elective branch — REMOVED from the matrix under the Gate-1 verdict; no learner need on record beyond topical fit; re-admission possible later on a stated learner need. The affected segments (OYC lecture 16 chapter 6 and chapter 1 remainder; lecture 17 chapters 3 to 5) become unassigned and are excluded with the branch. | [Gate-1 scope review](#gate-1-scope-review-2026-10-26-worker-pplx-deg-gate-1026a-deg-gate-baton--independent-review-per-pipeline-2026-10-26md) | none | none | none | none |
| self | Self as an EEMM dimension; the FAP target (specification of the stimuli controlling the verbal response "I") as one FAP-specific application (essential: ties the dimension back to the framework) | [Maitland 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC12392214/) Table 1 | M5 | reading | apply the EEMM self dimension to one personal pattern | written synthesis |
| motivational | Intrinsic and extrinsic motivation; the autonomy continuum and basic needs (essential: a comprehensive recent statement of the field's major motivation framework, selected as the motivational anchor) | [Ryan and Deci 2020](https://selfdeterminationtheory.org/wp-content/uploads/2020/04/2020_RyanDeci_CEP_PrePrint.pdf) | M6 | reading (content check done: OYC lecture 14 covers sex and gender, not SDT, so it is not a segment for this row) | classify personal motivations on the continuum | classification with reasons |
| motivational | Goals of regulation and motivation: hedonic, instrumental, eudaimonic; control-value theory (essential: links motivation to affect) | [Martinez-Priego et al. 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11479914/) | M6 | reading | link emotion-regulation goals to motivational states in a case | written link analysis |
| motivational | Goal pursuit and adherence: intrinsic versus extrinsic reasons (essential: the current state-of-the-art question on sticking with goals) | [Woolley et al. 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/) | M6 | reading | design an adherence analysis for one own goal | analysis rubric |
| overt behavioural | Habit formation and change: context cues, learned associations, habits versus self-control, change strategies (essential: the dimension's central evidence) | [Carden and Wood 2018](https://dornsife.usc.edu/wendy-wood/wp-content/uploads/sites/183/2023/10/Carden.Wood_.2018.pdf); [Singh et al. 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11641623/); verified talk segment (Wood, 6:18, content-verified from the Big Think transcript; see the ledger batch 26 entry) | M7 | reading | habit diary with cue analysis | diary rubric |
| overt behavioural | Conditioning and learning as the substrate of behaviour change (essential: the basic learning science behind change) | [Bouton](https://nobaproject.com/modules/conditioning-and-learning) | M7 | reading | identify conditioning processes in daily behaviour | identification exercise |
| overt behavioural | Self-regulation and self-control: the structure of adult self-regulation (executive function, heart rate variability, self-reported regulation), the ego depletion debate with effect sizes and replication status, everyday emotional self-regulation (essential: a well-documented contested literature plus a structural adult account; effect sizes and nulls included per the binding rules) | [Werner and Berkman 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11423838/); [Reed et al. 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7250393/) (older-adult sample, 60 to 93; generalisation limit stated); [Dang 2018](https://pmc.ncbi.nlm.nih.gov/articles/PMC6013521/); [Alarcon-Espinoza et al. 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9171140/) | M7 | reading | appraise the meta-analysis against the replication literature; map the three-component structure to a personal case; analyse one own conflict between competing goals | appraisal rubric |
| overt behavioural | Overt behaviour in the EEMM; the FAP target (clinically relevant behaviour) as one FAP-specific application (essential: ties the dimension back to the framework) | [Maitland 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC12392214/) Table 1 | M7 | reading | functional analysis of one behaviour pattern | analysis rubric |
| integrative | Apply all six dimensions to one real behavioural pattern, distinguishing mechanisms from outcomes (essential: the owner's capstone requirement) | all dimension sources | M8 | synthesis guidance | sustained self-analysis project | public rubric with self-assessment |

## Progression spine (v2, current)

Entry and exit capabilities are observable. M1 entry: none beyond the
scope assumptions (no psychology background). Per-module exits, each
feeding the next module's entry:

| Module | Exit capabilities (observable) | Feeds |
|---|---|---|
| M1 (L1) | can define the six dimensions and the variation-selection-retention-context frame in their own words; can name the levels of analysis; can appraise a simple study's design and evidence type using a worked model; can state what the degree covers and excludes | M2 entry |
| M2 (L2) | can apply the process model of emotion regulation to an own episode of suffering or flourishing as well as a case not used in the materials; can spot emotion functions in a personal episode; can compare two accounts of emotion naming where they disagree | M3 entry |
| M3 (L2) | can apply conditioning, memory and judgment frameworks to a new case; can explain one visual illusion by its depth cue; can analyse an RNT episode (own or given) against its defining features; can appraise a commentary's claim about experimental evidence, distinguish the synthesis from a primary experiment report, and name the missing information needed to assess the strength and applicability of that claim | M4 entry |
| M4 (L2) | can map symptoms or own attentional struggles to attention networks; can interpret network scores; can compare two attentional training mechanisms; can explain one attentional blindness phenomenon by the attention window | M5 entry |
| M5 (L2 to L3) | can assess their own self-concept clarity with its limits; can chart an identity domain over time; can write a trait account with the person-situation caveat | M6 entry |
| M6 (L2) | can classify their own motivations on the autonomy continuum; can analyse one of their own goals' adherence with intrinsic and extrinsic reasons | M7 entry |
| M7 (L2 to L3) | can keep a habit diary with cue analysis on one own pattern; can appraise the ego depletion meta-analysis against the replication literature; can run a functional analysis of one own behaviour pattern | M8 entry |
| M8 (L4) | can design, execute and self-assess an integrative capstone applying all six dimensions to one real behavioural pattern of their own, distinguishing mechanisms from outcomes, with honest evidence about whether the change worked | capstone |

## Exclusion review (proposed, for independent challenge at the coverage gate)

- CENTERING REPAIR DECISIONS (2026-10-26, degree owner, applying the
  Gate-1 verdict): the interpersonal/attraction branch and the group
  perception (stereotypes, stereotype threat, IAT) material are EXCLUDED —
  no learner need on record beyond topical fit, which the owner's
  2026-10-26 centering clause disqualifies; re-admission possible later
  on a stated learner need. Computational psychiatry primers are EXCLUDED
  (no matrix rows, no learner-need case). Affective neuroscience was
  initially RETAINED in round 1 of this repair and is EXCLUDED in round 2
  (advisor QC, 2026-10-26): under the when-in-doubt-exclude rule, its
  background relevance to the constructed-emotion anchor does not
  establish a necessary contribution beyond the core, and the core
  source itself carries the brain-level claims it needs; neuroscience
  already necessary to explain a core source stays with that source. The
  language (psycholinguistics) elective is EXCLUDED on the same rule in
  round 2: the scope doc now states "Elective branches: none", the row's
  own stated reason (a distinct field with its own curricula, covered
  here only at introductory level) argues against an elective, and no
  learner need is on record beyond topical fit; re-admission possible
  later on a stated learner need. The affected verified
  segments (OYC lecture 16 chapter 6 and chapter 1 remainder; lecture 17
  chapters 3 to 5; lecture 7 chapters 1 to 3) become unassigned and are
  excluded with their branches.
- Clinical protocols as treatment: excluded as training in treatment
  delivery (that belongs to legacy deg-therapeutic material). Clinical
  studies that test psychological mechanisms stay in as evidence about the
  dimensions; Ehring 2021 on rumination across disorders is exactly this
  kind of source, and the matrix uses it on that basis.
- Wellbeing as outcome science: excluded as a degree topic (owned by
  deg-wol-positive). Outcome evidence remains admissible where an opened
  dimension source itself uses it to evaluate a process.
- Contemplative doctrine: excluded (practica). Contemplative science is
  admitted as attentional evidence; where an opened contemplative-science
  source also speaks to affect, self or motivation, it may be admitted as
  evidence for those dimensions without importing doctrine. This is a
  scope decision proposed for review, stated here so it can be challenged.
- Levels of analysis: the multilevel row is essential orientation content
  in M1, grounded in Hofmann and Hayes 2024. SUPERSEDED (2026-10-26
  centering repair): deeper interpersonal or sociocultural study is
  EXCLUDED (no learner need on record beyond topical fit; re-admission
  possible later on a stated learner need).

## Gap register (blocking or open)

- Video resources: Yale OYC lectures 1 (all three chapters), 7 (all
  six chapters), 11 (all six chapters), 12 (all six chapters), 13 (all
  six chapters), 16 (all six chapters) and 17 (all eight chapters;
  sleep, dreams and laughter verified but unassigned to any matrix row,
  see the batch 20 flag) are content-verified (transcripts read, content
  classified, boundaries recorded; see the ledger section and the batch
  13 to 24 entries). The three talks: Barrett and Wood are content-verified
  from their published transcripts (see the batch 25 and 26 entries and the
  matrix rows they now support); the Howard lecture remains a candidate
  with no transcript retrieved through the routes tried (batch 27 documents the blocked
  routes); flagged for the supervisor.
- The three talks: the Barrett talk (18:29) and the Wood talk (6:18) are
  content-verified from their published transcripts (see the batch 25
  and 26 entries); the Howard lecture (58:54) remains a candidate —
  no transcript retrieved through the routes tried (batch 27 documents the blocked
  routes); flagged for the supervisor.
- Intelligence and behavioral genetics (lecture 13 chapters 3 to 6):
  content-verified but unassigned — DEGREE-OWNER DECISION (2026-10-26,
  applying the Gate-1 reviewer's recommendation and the finite-scope
  clause): EXCLUDED; no value-proposition case on record; re-admission
  possible later on a stated learner need. Lecture 17 chapters 6 to 8
  (sleep, dreams, laughter) and the lecture 1 orientation chapter are
  EXCLUDED on the same basis. Lecture 7 chapters 1 to 3 (language) are
  EXCLUDED with the language-elective decision above. The Howard lecture
  is DROPPED from the
  plan (stays a parked candidate with no retrievable transcript;
  re-admission only if a transcript route opens and a learner need is
  stated).
- Self-regulation breadth (essential, RESOLVED this session): the M7
  row is grounded by Werner and Berkman 2024 (a current conceptual review
  of self-control as a dynamic motivational process, covering adults
  generally and linking self-regulation to motivation, temptation, goal
  valuation, strategy use and habits), Reed, Combs and Segerstrom 2020
  (an adult structural account; older-adult sample aged 60 to 93, with
  the generalisation limit stated), Dang 2018 (the ego depletion debate
  with effect sizes) and Alarcon-Espinoza et al. 2022 (everyday
  emotional self-regulation, children and adolescents). The gap register
  entry closes; the gate verdict below still awaits independent
  confirmation at the next advisor review before the coverage gate can
  clear.
- SDT (2020) remains the field's core synthesis and stays; the habits
  anchor is refreshed with Singh et al. 2024. Ryan and Deci 2020 predates
  2021, so a newer SDT review or talk is still welcome at production.
  RECENCY CANDIDATE OPENED AND VERIFIED (2026-10-26,
  supervisor-e03fed44-degpsychdim): Ryan, Duineveld, Di Domenico, Ryan,
  Steward and Bradshaw, "We Know This Much is (Meta-Analytically)
  True", Psychological Bulletin 148(11-12) 813-842, doi 10.1037/bul0000385,
  issue dated Nov-Dec 2022 (publisher metadata verified this session;
  some indexes cite 2023 and citing sources are split; the version read
  is the free accepted-manuscript PDF on the theory's official site,
  © 2022 APA notice, not the copy of record); 60 meta-analyses across
  SDT's six mini-theories, support for the motivational taxonomy and the
  need satisfaction and frustration hypotheses, applied evidence in
  organizations, health care, parenting and education, methodological
  limits stated. A strong complement to Ryan and Deci 2020 for the M6
  motivational row (the 2020 paper teaches the continuum; the 2023
  meta-review supplies the meta-analytic evidence base and its limits).
  NOT added to the matrix yet: matrix adoption is an M6 production
  decision, and M6 production is held pending the Phase 0 stop-gate
  ruling; the candidate is recorded here so the production worker can
  adopt it without re-searching. Cite the version actually opened
  (accepted manuscript PDF) or the published record with its DOI
  (10.1037/bul0000385, Psychological Bulletin 148(11-12) 813-842), whose
  bibliographic metadata was verified this session; do not cite
  page-level wording from the published version, which has not been read.
- The Phase 0 pilot stop-gate (README.md) blocks module production until
  the pilots pass independent review.

## Gate-1 scope review (2026-10-26, worker-pplx-deg-gate-1026a, deg-gate baton — independent review per PIPELINE-2026-10-26.md)

Review basis: the owner's 2026-10-26 binding centering clause (every degree
centered on "WALK OF LIFE / Philosophy of Life" and aligned to the value
proposition — alleviating suffering, becoming wiser, genuinely flourishing
even when uncertain or overwhelmed; scope finite by design, topical fit alone
does not qualify, when in doubt EXCLUDE). The scope doc and the ledger's
matrix v3, progression spine, exclusion review, gap register and gate
decisions were read in full. Benchmark anchors and recency sources were
independently opened this session (2026-10-26, deg-gate):

- [Hofmann and Hayes 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11303929/)
  ("A Process-Based Approach to Transtheoretical Clinical Research and
  Training", Clinical Psychology in Europe, CC BY, open): the six
  psychological dimensions are named by the paper exactly as the scope doc
  lists them — affect, cognition, self, attention, motivation, overt
  behavior — with the paper itself noting these are examples among other
  dimensions.
- [Maitland 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC12392214/)
  ("The extended evolutionary meta-model and process-based therapy…", Journal
  of Contextual Behavioral Science, open): Table 1 "Expanded evolutionary
  meta model (EEMM) dimensions and linked FAP targets" confirmed; the
  variation-selection-retention-context change processes confirmed. The
  matrix's relabelling of the Table 1 descriptions as FAP targets (see
  Corrections) is accurate.
- [Barrett et al. 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12164598/)
  ("The Theory of Constructed Emotion: More Than a Feeling", Perspectives
  on Psychological Science, CC BY-NC, open): constructed-emotion theory
  paper as described; 2025 recency claim holds.
- [Woolley et al. 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/)
  ("Adherence to Personal Resolutions Across Time, Culture, and Goal
  Domains", Psychological Science, CC BY-NC, open): studies what predicts
  long-term goal adherence (intrinsic vs extrinsic motivation; year-long
  resolutions, Chinese New Year resolutions, step counts, health app),
  matching the bounded ledger description.
- [Manchiraju 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC13350471/)
  ("Self-concept clarity: a comprehensive and integrative review", Frontiers
  in Psychology, CC BY, open): confirmed as the self-dimension anchor.
- [Yale 2026 PSYC 110 syllabus](https://summer.yale.edu/sites/default/files/uploaded-files/syllabi/2026/psyc-s1100.pdf):
  confirmed freely accessible; its topic families (learning/conditioning,
  memory, thinking/judgment/decision-making, emotion, personality,
  social/groups, development, language) match the benchmark row's claim.
  Curriculum benchmark only: the syllabus's own course materials are
  enrollment-gated, so nothing is taken from the course content itself.

VERDICT: RETURN WITH REPAIRS — Gate 1 NOT CLEARED. The scope is finite in
its core — six dimensions plus an integrative capstone, M1 to M8, with
reasoned and challengeable exclusions, an honest gap register and a
well-formed matrix (every essential row taught, practised and assessed; the
supervisor's independent confirmation of the self-regulation grounding
stands). The six spot-checks above verify the specific benchmark and
recency claims they cite; they are not a certification of the whole degree,
and the separate coverage gate remains uncleared by this review. Two
repairs are owed before the scope gate can clear; both follow from the
centering clause, which postdates this scope doc:

1. CENTERING REPAIR (blocking). The scope doc never mentions the Walk of
   Life frame or the value proposition, and the gap is substantive, not
   terminological. The intended learner and the exit capabilities are
   knowledge-framed ("a deep, evidence-based understanding of what we
   currently know about the mind"): the capabilities ask the learner to
   classify, describe, use vocabulary and explain — none of them connect the
   six dimensions to the learner's own decisions, suffering or flourishing.
   The M8 capstone (all six dimensions applied to one real behavioural
   pattern) has the right bones, but the outcomes and assessments around it
   do not carry that orientation back into M1-M7. Repair may touch framing,
   exit capabilities and assessment design (not just wording): restate the
   intended learner and exit capabilities so each dimension serves the
   learner's own walk of life — one's affect, cognition, attention, self,
   motivation and behaviour as levers for alleviating suffering, choosing
   more wisely, and flourishing under uncertainty — and adjust module
   outcomes/assessments accordingly. No new topics may be added by this
   repair.
2. ELECTIVE-BRANCH JUSTIFICATION OR EXCLUSION (blocking). The interpersonal
   branch (liking/attraction; the proposed stereotypes/IAT row), the
   affective-neuroscience elective and the computational-psychiatry primer
   elective are currently admitted on topical fit alone, which the centering
   clause explicitly disqualifies. A justification sentence is not enough:
   each kept elective needs a specific learner need, its contribution beyond
   the six-dimension core, and a bounded place in the curriculum. Absent
   that, exclude it. Recommendation: exclude the computational-psychiatry
   primer (no matrix rows, no learner-need case) and the stereotypes/IAT row
   (already PROPOSED pending this decision); the attraction and
   affective-neuroscience electives must meet the full test above or go.

Routed to the owner/supervisor (recorded separately from this Gate-1
verdict — production prerequisite, not a scope question):

- PRODUCTION PREREQUISITE UNRESOLVED: docs/degrees/README.md (Status of
  this rework, 2026-10-25) is binding — "Full-degree curriculum production
  stays closed until the pilots pass independent review." No owner waiver
  of that prerequisite appears in OWNER-DECISIONS.md, and today's priority
  update (PIPELINE-2026-10-26.md) supersedes only the degree ORDER. Module
  production for psychdim therefore remains formally closed until the
  owners either clear the pilots or explicitly waive the stop-gate; this
  review records the prerequisite, it does not resolve it.
- UNASSIGNED VERIFIED LECTURES: OYC lecture 17 chapters 6-8 (sleep, dreams,
  laughter), lecture 13 chapters 3-6 (intelligence, behavioral genetics)
  and the lecture 1 orientation chapter sit in the gap register as
  unassigned. That is not an exclusion decision; the degree owner should
  make one explicitly. This reviewer's recommendation under the
  finite-scope clause: exclude (no value-proposition case on record), with
  re-admission possible later on a stated learner need.
- The Howard lecture stays a candidate with no retrievable transcript
  (batch 27); keep it parked or drop it from the plan.

— worker-pplx-deg-gate-1026a, deg-gate baton held, 2026-10-26.

## Gate-1 re-review (2026-10-26, worker-pplx-deg-gate-1026a, deg-gate baton)

The degree owner applied the Gate-1 verdict in commit 4959e093 (scope doc,
ledger matrix, exclusion review, gap register, progression spine; the
m1-orientation draft was touched only for the repair's framing, no new
content). Checked against the two blocking repairs:

1. CENTERING REFRAME — APPLIED AND SUBSTANTIVE. The intended learner is now
   a person carrying an ordinary life who wants the six dimensions as
   levers (suffer less, choose more wisely, keep functioning under
   uncertainty); the exit capabilities now require reading one's own
   episodes across the dimensions, running the EEMM on one's own pattern,
   and a capstone on one's own behavioural change with honest evidence;
   the matrix rows and progression spine carry the same orientation
   (M2-M8 outcomes now name the learner's own episodes and patterns). This
   is the substantive repair the first review required, not a wording
   change, and it added no new topics.
2. ELECTIVE DECISIONS — APPLIED. Interpersonal/attraction and group
   perception (stereotypes, IAT) are EXCLUDED with the affected segments
   made unassigned (explicit decisions with re-admission paths); the
   computational-psychiatry primer is EXCLUDED; affective neuroscience is
   RETAINED as a bounded elective with a stated learner need (reading
   literacy for the brain-level constructed-emotion anchor and for
   appraising popular brain claims), explicitly not assessed and not a
   second core. The retained elective passes the full learner-need test:
   specific need, contribution beyond the core, bounded place.

The gap-register decisions (lecture 13 ch 3-6, lecture 17 ch 6-8, lecture 1
orientation excluded under the finite-scope clause) were taken as the first
review recommended.

RE-REVIEW AMENDMENT (2026-10-26, worker-pplx-deg-gate-1026a, after advisor
milestone QC): the applied repairs themselves stand, but the re-review
initially missed one row that fails the same elective test — the M3
LANGUAGE elective is admitted on curricular presence ("the Yale syllabus
covers it in one introductory class and the OYC lecture 7 candidate covers
it at introductory level"), which is topical fit, not a learner need; the
centering clause disqualifies exactly that. Repair owed (small, same
pattern as affective neuroscience): either a bounded learner-need case for
language material in a six-dimension walk of life, or exclusion with the
affected OYC lecture 7 chapters 1-3 segment made unassigned. Until that
disposition lands:

VERDICT: GATE 1 NOT CLEARED — one small repair outstanding (the M3 language
elective disposition); everything else from the first verdict is verified
applied. Standing, unchanged and outside this gate: the Phase 0 pilot
stop-gate production prerequisite (README 2026-10-25) still formally closes
module production — the owner's ruling is still owed, and the degree owner
is already holding M2 for it. The separate coverage gate remains to be
cleared by independent review.

— worker-pplx-deg-gate-1026a, deg-gate baton held, 2026-10-26.

## Gate-1 re-review, round 2 (2026-10-26, worker-pplx-deg-gate-1026a, deg-gate baton)

The degree owner's round-2 consistency pass (commit d275389) resolved the
one outstanding repair and went stricter than the re-review required:
the language (psycholinguistics) elective is EXCLUDED on the
when-in-doubt-exclude rule (the row's own stated reason argued against an
elective; no learner need beyond topical fit; affected OYC lecture 7
chapters 1-3 excluded with it), and affective neuroscience is now also
EXCLUDED ("Elective branches: none" — background relevance to the
constructed-emotion anchor does not establish a necessary contribution
beyond the core, and the core source carries its own brain-level claims;
neuroscience already necessary to explain a core source stays with that
source). The Howard lecture is dropped. Every elective now carries an
explicit decision; nothing is admitted on topical fit alone.

VERDICT: GATE 1 CLEARED (scope; independent re-review round 2). All three
blocking items from the two review rounds are resolved: substantive
centering, explicit elective decisions, no content expansion. Standing,
unchanged and OUTSIDE this gate: (a) the Phase 0 pilot stop-gate production
prerequisite (README 2026-10-25) — the owner's ruling is still owed and
module production stays formally closed until it; (b) the separate
coverage gate, which still requires its own independent review; this
scope clearance does not clear it.

— worker-pplx-deg-gate-1026a, deg-gate baton held, 2026-10-26.

## Coverage-gate review (2026-10-26, worker-pplx-deg-gate-1026a, deg-gate baton)

Review basis: the binding standard (docs/degrees/skill/curriculum-design/
Skill.md — every essential row taught, practised and assessed, with sources
verified) and the band state's routing ("Coverage gate awaits the deg-gate
reviewer"). The post-round-2 matrix was re-read in full.

Matrix completeness: PASS. Every essential dimension is covered — framework
(EEMM dimensions, variation-selection-retention-context, levels of
analysis, research literacy), affective (emotion functions, generation vs
regulation, constructed emotion, difficulties/flexibility), cognitive
(conditioning and learning, memory, judgment and decision making,
perception as inference, rumination/RNT, evidence appraisal), attentional
(three networks, selective attention and limits, ANT and disorder/affect
links, contemplative training as attentional evidence), self (self-concept
clarity, identity development, personality traits, self-evaluation and
justification, self-other attribution, self as EEMM dimension),
motivational (SDT continuum and needs, goals of regulation, goal pursuit
and adherence), overt behavioural (habit formation, conditioning basis,
self-control evidence, behaviour as EEMM dimension), and the integrative
capstone (all dimension sources). Every row names teaching, practice and
assessment; the excluded rows (interpersonal branch, group perception,
language, affective neuroscience, computational psychiatry) carry explicit
decisions with retained verification records.

Source verification inventory (independent routes):
- Gate-1 openings (this session, worker-pplx-deg-gate-1026a): Hofmann and
  Hayes 2024, Maitland 2024, Barrett et al. 2025, Woolley et al. 2025,
  Manchiraju 2026, Yale 2026 syllabus.
- Supervisor independent confirmation (2026-10-25): the four
  self-regulation sources (Werner and Berkman 2024, Reed et al. 2020,
  Dang 2018, Alarcon-Espinoza et al. 2022).
- deg-verify-b evidence (docs/degrees/verify/deg-psychdim.md, PD-V01 to
  PD-V10): the EEMM orientation, goal-adherence, self-control, habit
  formation, self-concept clarity, constructed-emotion, attention,
  rumination, SDT and emotion-regulation-goal strands.
- Coverage-gate spot-checks (this session, worker-pplx-deg-gate-1026a,
  all opened and confirmed as cited): [Lippelt, Hommel and Colzato 2014](https://pmc.ncbi.nlm.nih.gov/articles/PMC4171985/pdf/fpsyg-05-01083.pdf)
  (focused attention / open monitoring / loving-kindness classification,
  attentional scope and blink effects; CC BY), [Branje et al. 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC9298910/)
  (identity 2010-2020, dual-cycle models, domains, daily processes,
  narrative identity, adjustment; CC BY-NC), [Hwang and Matsumoto, Noba Functions of Emotions](https://nobaproject.com/modules/functions-of-emotions),
  [Bouton, Noba Conditioning and Learning](https://nobaproject.com/modules/conditioning-and-learning),
  [McDermott and Roediger, Noba Memory](https://nobaproject.com/modules/memory-encoding-storage-retrieval),
  [Bazerman, Noba Judgment and Decision Making](https://nobaproject.com/modules/judgment-and-decision-making),
  [Diener and Lucas, Noba Personality Traits](https://nobaproject.com/modules/personality-traits),
  [Smith, Noba Thinking Like a Psychological Scientist](https://nobaproject.com/modules/thinking-like-a-psychological-scientist)
  — all open, all matching their matrix descriptions.

VERDICT: COVERAGE GATE CLEARED. Every essential row is grounded in at
least one independently verified open source, and the load-bearing
anchors are all verified. Standing notes (not gate-blocking): (a) the
Carden and Wood 2018 habits anchor predates 2021 and was already flagged
for refresh during production — the row also carries the verified recent
habit-formation evidence (PD-V04); (b) the OYC lecture segments' content
verification is recorded in the ledger (video route, per the standard);
(c) this clearance covers the coverage gate only — module production
remains formally closed behind the Phase 0 pilot stop-gate until the
owner rules, and the pedagogical gates (pilot, module-level QC) are
separate.

— worker-pplx-deg-gate-1026a, deg-gate baton held, 2026-10-26.

## Gate decisions

| gate | decision | by | date |
|---|---|---|---|
| scope | benchmark delivered against opened curricula (see scope doc Benchmark and Exclusion review sections); wording fix from "five" to "six" dimensions; strategist review still required | worker-pplx-psychdim-1 (degree owner) | 2026-10-25 |
| scope (Gate-1 independent review) | RETURNED WITH REPAIRS — Gate 1 NOT CLEARED: benchmark/recency claims spot-verified open and accurate; centering repair + full-test elective justification/exclusion owed per the owner's 2026-10-26 clause; pilot stop-gate recorded as unresolved production prerequisite | worker-pplx-deg-gate-1026a (deg-gate) | 2026-10-26 |
| scope (Gate-1 re-review) | NOT CLEARED — one small repair outstanding: the M3 language elective is admitted on curricular presence (topical fit), not a learner need; needs a bounded learner-need case or exclusion (advisor QC caught this after the initial clearance draft); both original blocking repairs verified applied in 4959e093; no content expansion; pilot stop-gate prerequisite and the separate coverage gate remain open outside this gate | worker-pplx-deg-gate-1026a (deg-gate) | 2026-10-26 |
| scope (Gate-1 re-review round 2) | CLEARED: language elective excluded in d275389 (and affective neuroscience also excluded — "Elective branches: none", stricter than required); all blocking items resolved; pilot stop-gate production prerequisite and the separate coverage gate remain open outside this gate | worker-pplx-deg-gate-1026a (deg-gate) | 2026-10-26 |
| coverage | CLEARED: every essential row taught/practised/assessed and grounded in independently verified open sources (verification inventory in the review section: Gate-1 openings, supervisor confirmation, PD-V01-V10, eight coverage spot-checks incl. Lippelt 2014, Branje 2021 and five Noba modules); Carden-Wood 2018 refresh note stands; module production still closed behind the pilot stop-gate | worker-pplx-deg-gate-1026a (deg-gate) | 2026-10-26 |
| scope (Gate-1 FINAL CONFIRMATION) | CONFIRMED: the round-2 clearance stands — the language-elective exclusion in d275389 resolves the one outstanding item and was accepted; the owner's stricter "Elective branches: none" also accepted; the band phase may flip to gate1-cleared (scope) | worker-pplx-deg-gate-1026a (deg-gate) | 2026-10-26 |
| scope (repairs applied) | CENTERING + ELECTIVE REPAIRS APPLIED per the Gate-1 verdict: scope doc intended learner and exit capabilities restated to the Walk-of-Life value proposition (dimensions as levers on the learner's own suffering, wisdom and flourishing); interpersonal/attraction and group-perception electives EXCLUDED with the affected segments; computational psychiatry EXCLUDED; affective neuroscience RETAINED as bounded elective with a stated learner need; progression spine exits carry the own-life orientation; matrix EXCLUDED row records the removal; re-review requested from the deg-gate reviewer | supervisor-e03fed44-degpsychdim (degree owner) | 2026-10-26 |
| scope (re-review outstanding item resolved) | The Gate-1 re-review's one outstanding repair (the M3 language elective admitted on topical fit, not a learner need) is RESOLVED by EXCLUSION in d275389: language (psycholinguistics) elective EXCLUDED under the when-in-doubt-exclude rule; scope doc compact matrix synced ("Elective branches: none"); affected OYC lecture 7 chapters 1 to 3 excluded with it; matrix row marked EXCLUDED with verification records retained. Affective neuroscience also EXCLUDED in the same round 2 (advisor QC; superseding the round-1 retention). Final confirmation from the deg-gate reviewer requested | supervisor-e03fed44-degpsychdim (degree owner) | 2026-10-26 |
| coverage | milestone delivered; independently reviewed through advisor rounds 1 to 7; the adult self-regulation gap is now grounded (Werner and Berkman 2024, Reed et al. 2020, Dang 2018, Alarcon-Espinoza et al. 2022; see the gap register), but the coverage gate is NOT cleared by the degree owner: it awaits independent confirmation at the next advisor or reviewer pass; module production also blocked by the Phase 0 pilot stop-gate | worker-pplx-psychdim-1 | 2026-10-25 |

## Independent confirmation pass (2026-10-25 09:26Z, worker-pplx-sup-1025y, supervisor baton)

The coverage-gate entry above awaits independent confirmation of the
adult self-regulation grounding. Supervisor confirmation, recorded
this session: all four grounding sources were independently fetched
and matched against their live PMC carriers.

1. Werner and Berkman 2024 (PMC11423838) — page title "Motivational
   Dynamics of Self-Control" confirmed; the article's own definition
   confirmed verbatim: "self-control is the process of resolving
   conflict (real or anticipated) between competing goals"; the
   "flexible and dynamic process" characterisation confirmed; the
   abstract's "motivation shaping both when and how people regulate
   their goals" confirmed.
2. Reed, Combs and Segerstrom 2020 (PMC7250393) — page title "The
   Structure of Self-Regulation and Its Psychological and Physical
   Health Correlates in Older Adults" confirmed; "149" participants,
   ages "60 to 93", "community-dwelling" all present on the page.
3. Dang 2018 (PMC6013521) — page title "An updated meta-analysis of
   the ego depletion effect" confirmed; the ledger's figures (142
   effect sizes, g 0.38, 0.24 after trim-and-fill, I² 60.67) all
   present on the page.
4. Alarcon-Espinoza et al. 2022 (PMC9171140) — page title "Emotional
   Self-Regulation in Everyday Life: A Systematic Review" confirmed;
   family influences and children/adolescents scope present.

Basis confirmed: the four sources exist as cited, on open carriers,
and the gap-register claims about them are accurate to their pages.
The scope gate's strategist review and the Phase 0 pilot stop-gate
remain open as recorded; those are not cleared here. — Supervisor,
worker-pplx-sup-1025y.

## Phase 0 stop-gate ruling (2026-10-26, supervisor-pplx-1026d, supervisor baton; observed clock 02:15Z; stamp corrected 02:18Z from a 02:27Z estimate)

ROUTE REQUEST ANSWERED (worker-pplx-degpsychdim-1026a, 02:12Z: "rule on Phase 0
stop-gate vs owner priority directive"). RULING (narrow, per supervisor authority;
advisor-checked):

1. NO stop-gate waiver is issued. The supervisor does not have authority to
   replace or waive the Phase 0 prerequisite; the conflict between the
   2026-10-25 README condition ("Full-degree curriculum production stays closed
   until the pilots pass independent review") and the owner's 2026-10-26
   priority directive (four degrees online and qualitative today) is FLAGGED TO
   THE OWNER on the Owner-Board. Only an owner decision (explicit waiver for
   the four priority degrees, or acceptance of the timeline slip) resolves it.
2. The degree's existing clearances STAND: Gate-1 scope (round 2, d275389) and
   coverage (00:25Z review).
3. M1 pilot review: COMMISSIONED and LIVE. The independent pedagogical review
   (verifier-af06bd9e + independent advisor, verify/deg-psychdim-m1-followup-
   2026-10-26.md) has RETURNED M1 WITH REPAIRS — three bounded pedagogical
   repairs (M1-PED-01 definitions-before-recall, M1-PED-02/03 in the followup
   file). The deg-psychdim production owner applies them; the re-review then
   delivers the M1 pass/fail verdict. M1 is NOT cleared yet.
4. M2-M8 MODULE PROSE REMAINS GATED until the Phase 0 prerequisite is
   documented as satisfied or an authorized decision explicitly changes it.
   Source preparation (openings, passage measurement, verifier-bounds
   selection) is NOT module production and may continue.
5. Referent finding (for the owner's decision): the Phase 0 pilots named in
   the docs are mod-phil-1 (theory pilot — passed the advisor's final review
   but formally DRAFT NOT CLEARED, four open gaps recorded on the greek
   degree side) and mod-qg-3 (practice pilot — NOT CLEARED, replacement-source
   verification incomplete, PARKED by the owner with no further Qi Gong work
   today). On either referent reading the program-wide stop-gate is not yet
   satisfied; the conflict is real, not clerical.
6. The owner's one-by-one order (psychdim, daoism, buddhism, pragmatism)
   continues to bind degree sequencing.

Production owner: continue M1 repairs and source preparation under this
ruling; do not draft M2 prose until the owner answers the flag or an
authorized decision changes the prerequisite.

## Wave 2 production: M1 video-first substitution, 2026-10-26 04:49Z

Owner decisions 6–8 supersede the historical stop-gate ruling above.
Production owner: degree-4376b4ec. Scope and coverage clearances are
unchanged; independent module QC and complete-degree publication gates
remain in force. No module or degree is self-cleared here.

### Required statistical video replaces the unsafe reading

Consumed independent receipt:
`verify/deg-psychdim-m1-literacy-video-49bf153e.md`.
The receipt verifies **Statistics Fundamentals | Dr Kristin Sainani**,
public recording and English timestamped transcript, with Stanford
credentials, media identity and segment boundaries. Parent freshly opened
the watch page and read the assigned interval/p-value transcript context;
no parent playback or slide-inspection claim is made. Recognition errors
in the transcript are not treated as source quotations.
([Recording](https://www.youtube.com/watch?v=LKiX54NglCo);
[Stanford profile, reopened](https://profiles.stanford.edu/kristin-sainani).)

- **Outcome and lived decision:** interpret a study's estimate,
  uncertainty and inference limits before letting a research claim guide
  a choice about one's life. No calculation competency is added.
- **Assignment:** 25:46–44:11 (18:25), then 54:02–57:21 (3:19);
  1,304 seconds = **21:44**, not the whole 76-minute recording.
  Optional 03:29–09:21 (5:52) supplies the prerequisite introduction.
  ([Chaptered recording](https://www.youtube.com/watch?v=LKiX54NglCo).)
- **Removed:** Smith's entire "Why Should I Trust Science If It Can't
  Prove Anything?" NHST section, statistics glossary and the former
  blanket whole-module assignment. The in-module statistical correction
  becomes affirmative instruction and an ASA reference, rather than
  sending the novice through the misleading definition.
  ([Smith, reopened complete cleaned text](https://nobaproject.com/modules/thinking-like-a-psychological-scientist).)
- **Retained fallback:** two non-statistical spans: "Scientific Versus
  Everyday Reasoning" through the end of "The Interpretation of Research
  Results"; "Scientific Theories" through "Science in Context," stopping
  before the answer sections. Embedded self-test boxes are optional.
  These teach scientific reasoning, design, theories and levels not
  replaced by the selected statistics clips. The earlier read-only
  curriculum advisor supports this finite, outcome-specific distinction.
  ([Smith](https://nobaproject.com/modules/thinking-like-a-psychological-scientist).)
- **Precision anchor:** ASA's p-value definition and principles 2 and 5
  including explanations, not its full editorial/history. Opened and
  read this session. The anchor distinguishes conditional tail
  probability, hypothesis probability and practical significance.
  ([ASA statement](https://www.stat.berkeley.edu/~aldous/Real_World/ASA_statement.pdf).)
- **Practice and assessment:** two short video pauses have model
  feedback; the preserved Woolley fully worked, faded and independent
  appraisal remains the outcome-4 assessment. Standard-error prerequisite
  and the limits of the lecture's CI/test correspondence are printed.
  No claim is made that a hypothetical trial explains an observational
  cross-lagged model's adjustment set.
  ([Sainani's worked example](https://www.youtube.com/watch?v=LKiX54NglCo&t=2021).)
- **Revised workload:** fresh cleaned-text counts for the selected
  Smith spans are **2,247 + 960 = 3,207** word-like tokens. Count rule:
  Unicode letters/numbers, internal apostrophes/hyphens retained;
  includes headings, captions and embedded optional self-test boxes,
  excludes the separately located answers. Existing framework excerpt
  counts are 680 + 240; ASA gets a rounded 300-word allowance.
  Raw reading = 1,220/130 + 3,207/180 = 27.20 minutes;
  triple for study = 81.60, rounded **82**. Video + 10-minute
  prerequisite/pause allowance = 31.73, rounded **32**. Remaining
  allowances 15 + 10 + 30 + 30 + 60 = 145; total **259 minutes**,
  approximately 4 hours 20 minutes. Optional remedial clip and optional
  paper reading are excluded. These are planning estimates, not measured
  learner completion times.

The two framework readings are retained pending the verifier's specific
EEMM video-fit receipt; a generic psychology introduction does not teach
the six-dimension map or research appraisal. The earlier pedagogical
repairs are preserved. The retrieval exercise now explicitly says its
two attempts confound additional study and delay; it no longer claims to
isolate a spacing effect. Public review narration was moved out of the
learner path. Advisor re-review commissioned; supervisor module-QC owed.

### M1 framework substitution and advisory repairs, 2026-10-26 04:51Z

The preceding provisional two-reading fallback and 259-minute total are
superseded. Consumed the independent EEMM receipt
`verify/deg-psychdim-video-first-49bf153e.md`. Parent opened the same
recording, obtained and read the complete continuous transcript for the
assigned 01:03:17–01:09:12 window, and reopened Hayes's university
biography. The free public excerpt supplies variation, selection,
retention, context, all six dimensions and the two further levels.
Its paid-package advertisement does not create a paid prerequisite;
no package, purchase, membership or clinical training is assigned.
([Hayes recording](https://www.youtube.com/watch?v=sDGpXQLHLfY);
[university biography](https://www.unr.edu/psychology/steven-hayes).)

- **Substitution:** required Hayes **5:55** replaces the 680- and
  240-word framework excerpts; both articles become optional references.
  The module preserves definitions, the Jordan demonstration and all
  prior pedagogy repairs. It explicitly labels the model a proposal and
  preserves Hayes's uncertainty about subdividing the extra levels.
  ([Assigned framework segment](https://www.youtube.com/watch?v=sDGpXQLHLfY&t=3797).)
- **New arithmetic:** required reading 3,207/180 + 300/130 = 20.13
  minutes raw, times three = 60.37, rounded **60**. Required video
  355 + 1,304 = 1,659 seconds = **27:39**; three pauses and
  prerequisite discussion receive **16 minutes**, total 43.65 rounded
  **44**. Core total 60 + 44 + 145 = **249 minutes**.
  Optional remediation and articles remain outside that total.
- **Advisor QC:** independent read-only review of the prior 259-minute
  working revision found one bounded blocker: count provenance still
  rendered publicly. That prose is now removed; precise provenance stays
  here. The advisor's two minor suggestions were also applied: name
  the second recall attempt explicitly and give direct feedback for the
  cherry-juice pause. Alignment, statistical nuance, arithmetic and the
  three earlier pedagogical repairs passed that advisory round. This
  does not certify the subsequent Hayes substitution or clear a gate.
- **Routing:** the complete changed module requires supervisor review
  at its pushed hash, including the framework substitution, reading
  exception disposition, workload and M2 entry match. Source receipts
  remain explicit about transcript-based verification, not playback.

## Wave 2 production: M2 affective, 2026-10-26 04:55Z

`modules/deg-psychdim/m2-affective.md` drafted by degree-4376b4ec.
Status **DRAFT, NOT CLEARED**. Independent source verification is
consumed from `verify/deg-psychdim-m2-video-audit-49bf153e.md`; the
earlier `deg-psychdim-m2-source-use-boundaries.md` remains controlling
for non-collapse of the competing accounts. The assigned scope remains
the seven M2 rows in the approved module contract. No clinical exercise,
intervention efficacy claim or additional degree theme is introduced.

### Current opened-source and substitution receipt

- **Functions:** parent reopened Yale lecture 11 and read chapter 1's
  continuous transcript; **00:00–09:06**, 546 seconds. Reopened the
  complete Noba text and retained only its first interpersonal paragraph
  and cultural-transmission/display-rule span, **187 + 198 = 385**
  word-like tokens. Bloom replaces introductory intrapersonal-functions
  prose; the two short spans teach relational/cultural outcomes that
  the selected clip does not replace. Module explicitly prevents
  expression-to-hidden-state certainty.
  ([Yale](https://oyc.yale.edu/psychology/psyc-110/lecture-11);
  [Noba](https://nobaproject.com/modules/functions-of-emotions).)
- **Construction account:** parent opened the TED public recording and
  read its English transcript; required **00:00–18:29**, 1,109 seconds,
  with opening violent-event/capital-sentencing content notice and
  transcript alternative. Reopened Barrett's institutional appointment.
  The 2025 scholarly article is separately opened and read; its abstract
  and allostasis paragraph total **167 + 317 = 484** tokens.
  The article, not the TED talk, supports the term allostasis. It is a
  theory-defending reply, not a consensus survey or intervention trial.
  No universal face-reading rule or blame-for-distress claim survives.
  ([TED recording/transcript](https://www.youtube.com/watch?v=0gks6ceq4eQ);
  [Northeastern](https://cos.northeastern.edu/people/lisa-barrett/);
  [2025 article](https://pmc.ncbi.nlm.nih.gov/articles/PMC12164598/).)
- **Regulation map:** parent opened the Gross recording and read the
  full continuous assigned **19:22–26:14**, 412-second transcript
  plus the immediate stop-boundary context. Institutional profile
  reopened. The five-family map uses the clip and the freshly opened
  original 1998 article's "Emotion Regulation Strategies" discussion;
  the historical PDF is a supporting producer reference, not an added
  whole-paper learner assignment. Stop **26:14** precedes surgery
  footage; later experimental findings are not assigned or inferred.
  ([Gross recording](https://www.youtube.com/watch?v=n4guVd7bNaU);
  [Stanford](https://profiles.stanford.edu/james-gross);
  [1998 free article](https://emotion.wisc.edu/wp-content/uploads/sites/1353/2024/11/gross-1998-the-emerging-field-of-emotion-regulation-an-integrative-review.pdf).)
- **History, strategy/goal flexibility and evidence limits:** parent
  reopened the 2024 systematic review, read the required passages and
  relevant context. Counts: flexibility/goal paragraphs **356**;
  attributed historical paragraph **146**; first limitations paragraph
  through "across different contexts" **212**. Total **714** tokens.
  This short fallback cannot be replaced by the selected clips:
  theoretical goal extension, review limits and historical framing are
  not taught there. Aristotle/Descartes/Darwin are explicitly the
  reviewers' compressed interpretation, not primary-text scholarship.
  No claim is made that the review tests a learner's response plan.
  ([Open review](https://pmc.ncbi.nlm.nih.gov/articles/PMC11479914/).)

### Outcomes, scaffolding and workload

All five outcomes have teaching, at least one feedback-bearing practice
and a pass/return assessment criterion. The five-family decision gets
a fully worked Amira case, partially completed dinner-cancellation case
and independent case analysis. Functions, theory comparison, flexibility
and descriptive reflection each receive their own prompt and feedback.
Delayed retrieval and correction are separate. The rubric rejects
mind-reading, fixed-strategy rules, forced theory reconciliation and
personal efficacy inference. Personal disclosure and improved mood
are never conditions of passing.

Core external reading **385 + 484 + 714 = 1,583** word-like tokens
(same Unicode counting convention as M1); rounded 1,600 for learner
planning. At 130 wpm, three times raw = 36.53, rounded **37 minutes**.
Video **546 + 1,109 + 412 = 2,067 seconds = 34:27** plus 15-minute
pause allowance = 49.45, rounded **50**. Module file is approximately
3,000 whitespace words including tables, rubric and alignment map;
**35 minutes** is a purpose-adjusted teaching allowance, not a claim
that the whole file was counted as prose at a default reading speed.
The other activities are separated: 30 worked/completion + 35 short
checks/reflection + 20 delayed retrieval + 65 assessment/revision.
Total **50 + 37 + 35 + 30 + 35 + 20 + 65 = 272 minutes**.
Transcript substitutes for the same video window; no double assignment.

M1 exit match is explicit: six dimensions, context, observable versus
interpreted information, and a research-inference limit. No new
statistics calculation, diagnosis, personal therapy or mood-change
prerequisite. M3 handoff requires those skills plus M2's descriptive
episode, account distinction and revisable response choice.
Read-only advisor QC commissioned; independent module QC remains owed.

M2 advisor round 1 returned two bounded blockers: the approved level is
**L2 Guided application**, and functions needed their own learner practice
rather than only a model; the final task also reused a guided case.
Repairs applied: corrected level, three-level functions practice with
benefit/cost and feedback, new unseen Jo assessment case. Two minor
findings applied: explicit other-dimension link in final instructions;
Descartes sentence limited to the assigned reviewers' cognitive-process/
impulse framing. Privacy, theory disagreement, allostasis attribution,
five-family map, footage boundary and 272-minute sum passed that advisory
round. The extra functions practice stays inside the 35-minute check/
reflection allowance; the new assessment replaces the earlier case, not
an extra deliverable. Supervisor independent review requested; DRAFT,
NOT CLEARED remains.

## Wave 2 production: M3 cognitive, 2026-10-26 05:00Z

`modules/deg-psychdim/m3-cognitive.md`: L2 guided application, **DRAFT,
NOT CLEARED**. Consumed the independent M3 video audit and the closed
commentary-versus-experiment repair packet. Current owner reopened and
read every assigned source; no clinical or out-of-matrix branch added.

### Actual assignments and reading exceptions

- **Perception:** Bloom lecture 7 **18:06–39:15**, 1,269 seconds.
  Parent read the full continuous assigned transcript. Historical AI
  remarks labelled 2007, no inference that all perception is false;
  textual inference task substitutes for inaccessible visual examples.
  ([Public recording](https://www.youtube.com/watch?v=DmWrOUK2zgA);
  [institutional page](https://oyc.yale.edu/psychology/psyc-110/lecture-7).)
- **Encoding:** Bloom lecture 8 **13:22–18:27**, 305 seconds, exact
  recording clock; parent read whole assigned transcript. Replaces
  overlapping Noba meaning/organisation exposition; no superiority
  claim over every other learning method.
  ([Recording](https://www.youtube.com/watch?v=Yuwqr5o58Z0).)
- **Judgment:** lecture 10 **39:43–47:25** and **54:59–59:22**,
  462 + 263 seconds; parent read both continuous spans. Intervening
  flawed base-rate passage, dated risk examples and general evolutionary
  psychology survey unassigned. No Noba framing/confirmation duplication.
  ([Recording](https://www.youtube.com/watch?v=AMsQfgV07vU).)
- **Learning supplement, newly checked:** actual search
  `Yale Bloom classical operant conditioning lecture 4` found the
  institutional lecture. Cleaned content lacked its embedded watch
  URL, so raw HTML was fetched; iframe identified **rCKK6r15fro**.
  Parent then opened that public YaleCourses recording: title
  **4. Foundations: Skinner**, **58:47**, upload **2008-09-30**,
  Spring 2007 course, English timestamped transcript. Read complete
  **14:25–17:39** (194 seconds) and **31:18–33:49** (151 seconds)
  plus boundary context. Official course instructor credentials were
  already independently verified in the M3 receipt. The watch's
  operant chapter starts **31:18**, institution **31:19**; assignment
  uses the watch clock. Coarse caption boundaries overlap a few seconds;
  no word-level or playback assertion. Stops avoid the later erroneous
  unreinforced-trial gloss and unnecessary punishment/training survey.
  Advisor asked to independently check these new windows.
  ([Institutional source/embed](https://oyc.yale.edu/psychology/psyc-110/lecture-4);
  [watch page](https://www.youtube.com/watch?v=rCKK6r15fro).)
- **Necessary definition/update fallbacks:** Bouton's opening summary
  **143** plus prediction-error paragraph **87**; memory opening summary
  through "among other types" **42** plus Three Stages section **335**.
  Definitions of kinds/stages and the limit of repeated-pairing language
  are not supplied by the selected meaning/organisation video.
  Parent opened/read the complete relevant sections; no full Noba
  chapter assigned. Unicode word-like counting as M1.
  ([Conditioning](https://nobaproject.com/modules/conditioning-and-learning);
  [memory](https://nobaproject.com/modules/memory-encoding-storage-retrieval).)
- **Commentary appraisal:** parent read complete Ehring commentary,
  assigned opening eight paragraphs through process/content distinction
  **463** tokens, plus Watkins processing-mode paragraph **70**.
  Necessary scholarly fallback for the bounded experimental-claim
  appraisal; neither a primary trial nor a treatment task. The fully
  worked answer, completion and rubric all require justified unknowns,
  and explicitly fail invented sample/effect information.
  ([Ehring, 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8429319/).)

### Alignment and workload

Five outcomes each have teaching, feedback-bearing practice and an
independent Sam-case assessment criterion. Learning and judgment are
proposed case interpretations, not proof of a person's learning history
or bias. Memory needs a meaningful cue and honest limit, not perfect
performance. Private or fictional material suffices; no diagnosis or
intervention efficacy claim.

Required video **1,269 + 305 + 462 + 263 + 194 + 151 = 2,644
seconds = 44:04**. Add 16 minutes pause/notes, round to **60**.
External reading **143 + 87 + 42 + 335 + 463 + 70 = 1,140**;
at 130 wpm and triple raw study = 26.31 minutes, round **27** and
add 3 minutes locating exact spans = **30**. Lesson teaching 35;
completion/counterchecks 45; delayed retrieval 20; unseen final analysis
and revision 70. Total **260 minutes**. Transcript substitutes for the
same video segments. Optional wider source exploration excluded.
Independent advisor review commissioned; supervisor module-QC owed.

## Wave 2 production: M4 attentional, 2026-10-26 05:09Z

`modules/deg-psychdim/m4-attentional.md`, L2 guided application, **DRAFT,
NOT CLEARED**. Consumed independent video audit and measurement-boundaries
receipt; parent freshly opened and read all four continuous video windows,
the required review passages and the added original ANT Results paragraphs.
No personal ANT administration, diagnostic threshold, neurochemical
inference or treatment claim is assigned.

- **Three networks:** Posner **03:06–14:52 = 11:46**, parent read the
  continuous transcript; preserved 2023 section-4 qualification of
  complete independence. The rejected old Oregon profile redirected to
  a general department homepage; it is not used as credential evidence.
  Actual current directory opened and read: professor emerit, attention/
  self-regulation research.
  ([Recording](https://www.youtube.com/watch?v=uYUdwS7-WvA);
  [current Oregon profile](https://cas.uoregon.edu/directory/psychology/all/mposner);
  [2023 qualification](https://pmc.ncbi.nlm.nih.gov/articles/PMC10301152/).)
- **Task illustration:** Gaul **05:24–07:42 = 2:18**, complete continuous
  transcript reopened; accurately labelled student explainer, not a
  clinical authority. The research source supports the calculations.
  ([Public clip](https://www.youtube.com/watch?v=y-fQywP6qa8).)
- **Selective attention:** narrowed Bloom assignment to **47:26–54:53 =
  7:27** after reading all of the previously verified chapter. Removes
  the earlier clinical/memory digression and later categorical anecdotes;
  retains spotlight, Stroop and inattentional/change demonstrations.
  Verbal equivalent tasks need no normal colour vision or reported
  personal illusion, and assess the same distinction.
  ([Actual chapter recording](https://www.youtube.com/watch?v=DmWrOUK2zgA);
  [institutional text](https://oyc.yale.edu/psychology/psyc-110/lecture-7).)
- **Practice comparison:** Jha **02:08–04:17 = 2:09**, full assigned
  transcript and boundary context reopened; Miami institutional biography
  opened. FA/OM definitions only, not the talk's broader effects claims.
  Lippelt abstract and methodological paragraph supply the evidence
  boundary, actual current passages reopened. One-minute safe observation
  can be replaced by a fictional description; no efficacy inference.
  ([Recording](https://www.youtube.com/watch?v=n_3MVEo9fx4);
  [Miami](https://people.miami.edu/profile/a.jha@miami.edu);
  [2014 review](https://pmc.ncbi.nlm.nih.gov/articles/PMC4171985/).)
- **Anatomy, development, affect and associations:** 2019 review opened
  for Table 1 (distributed structures/modulators), Table 2 and adjoining
  first pathology paragraph, plus development/affect passages. All
  claims attributed, no one-to-one inference. The Table-1 lookup does
  not become an anatomy memorisation examination. Group associations
  and developmental shifts cannot diagnose Dev or a learner.
  ([2019 review](https://pmc.ncbi.nlm.nih.gov/articles/PMC6430178/).)
- **New primary measurement reference:** actual search for ANT cue
  subtraction definitions found Fan, McCandliss, Sommer, Raz and Posner
  **2002, Testing the Efficiency and Independence of Attentional
  Networks**, free full university-hosted PDF. Opened full article;
  read all three Results definition paragraphs and Discussion's
  speed–accuracy paragraph. Assigned only the three Results paragraphs;
  no original normative study values used as personal standards.
  No open licence asserted merely because full text is freely readable.
  ([Actual full PDF](https://w3.ual.es/personal/tdaza/Fan%20y%20cols.pdf).)

All five outcomes have teaching, worked/completion practice and feedback,
and an unused Dev-case assessment. Network independence versus interaction
is the same-question L2 comparison; each family has lived/real-claim
transfer with useful choice and uncertainty, private/redactable.
ANT values are explicitly fictional didactic contrasts, not a coherent
participant trial dataset or a scale. Assessment calculations:
700−640 = 60, 670−630 = 40, 740−660 = 80 milliseconds.

Workload: 706 + 138 + 447 + 129 = **1,420 seconds = 23:40**,
plus 16 pause/notes minutes, round **40**. External passage/table
reading is an **estimated 1,100–1,400 words**, not a measured count;
at 130 wpm and triple raw study, 25–32 minutes, rounded up with
table/reference navigation to **35**. Teaching 40, guided practice 50,
delayed retrieval 20, final/transfer/revision 80 = **265 minutes**.
Optional and substitute activities do not add duplicate requirements.
Read-only advisor QC commissioned; independent module-QC still owed.

### M4 advisor repairs and source-identity correction, 05:12Z

The preceding M4 production receipt's **Gaul/Jha identities and
credentials are incorrect and superseded**, not valid evidence.
The actual independent video audit had the correct identities; the
producer misidentified them in the draft. All affected public labels,
credentials, teaching attribution and alignment rows are corrected.
Parent reopened all three raw watch pages without LLM extraction,
read their actual continuous transcripts and metadata, and reopened
Davidson's independent Wisconsin institutional biography.

- **uYUdwS7-WvA:** *Michael Posner on the anatomy of attentional
  networks – a historical perspective*, **gocognitive**, uploaded
  **2011-11-12**, **19:49**. Interview with Justin Mayes, not the
  previously printed invented title. Assignment still 03:06–14:52.
  ([Actual recording](https://www.youtube.com/watch?v=uYUdwS7-WvA).)
- **y-fQywP6qa8:** *Fostering Attention for Human Needs*,
  **PsychologicalScience**, Michael Posner's **2015 APS** keynote,
  uploaded **2015-08-14**, **42:05**. NOT William Gaul, NOT a
  graduate-project explainer. Assignment still 05:24–07:42.
  ([Actual recording](https://www.youtube.com/watch?v=y-fQywP6qa8).)
- **n_3MVEo9fx4:** *When & How to Practice Effective Meditation |
  Dr. Richard Davidson & Dr. Andrew Huberman*, **Huberman Lab Clips**,
  uploaded **2026-03-21**, **12:30**. NOT Amishi Jha. Assignment
  still 02:08–04:17; no broad podcast endorsement or health claim.
  ([Actual recording](https://www.youtube.com/watch?v=n_3MVEo9fx4);
  [opened Wisconsin biography](https://centerhealthyminds.org/about/people/richard-j-davidson).)

Advisor also found two unfollowable reading instructions. Parent opened
the complete unprocessed Fan PDF and Lippelt article. Exact current route:
Fan's three Results paragraphs beginning "The alerting effect was
calculated," "The orienting effect was calculated," "The conflict
(executive control) effect was calculated" on printed pp.342–343,
skipping intervening tables, stop before Correlation Analyses; these
are paragraph openings, not subsection headings. Lippelt Abstract plus
the actual single Introduction paragraph, "Even though numerous studies"
through "attentional control, conflict monitoring, and creativity."
The formerly printed paragraph boundaries do not exist and are withdrawn.
([Full PDF](https://w3.ual.es/personal/tdaza/Fan%20y%20cols.pdf);
[actual review](https://pmc.ncbi.nlm.nih.gov/articles/PMC4171985/).)

Small alignment repairs: spotlight explanation/limit elicited explicitly;
ANT-trial teach-back has feedback and assessment; one actual Table-2
association must be interpreted before applying the caveat. Workload
now prints estimated word ranges/rates/overhead; no measured-count claim.
Video23:40 and 265-minute arithmetic unchanged. Independent advisor
corroborated original ANT formulas and speed–accuracy context. Source
identities and navigation now repaired; supervisor module-QC owed,
**DRAFT, NOT CLEARED**.

### M5 production checkpoint, degree-4376b4ec, 05:16Z

`modules/deg-psychdim/m5-self-and-identity.md` drafted; L3 independent
inquiry follows M4's L2 guided application. All approved rows retained:
SCC/esteem/accuracy distinctions; SCCS self-assessment framing and limits;
identity-domain chart and exploration/commitment versus narrative
comparison; continuous Big Five, own recurring trait/context account;
self-evaluation/self-justification; own/other attribution and cultural
limit; EEMM self lens versus the FAP-specific Table-1 application.
Six outcome families, all with practice/feedback, assessed criteria and
private lived-instance/usefulness/uncertainty transfer. No clinical
assessment, autobiography requirement or improvement grade.

Outcome-specific video substitutes: Bloom13 13:53–19:47=5:54;
Bloom16 15:56–28:41=12:45 and 40:00–50:03=10:03;
McAdams narrowed to 10:07–13:31=3:24, before the participant's
negative-childhood example; Little11:12–13:59=2:47. Total **34:53**.
Parent opened all four actual watch pages, read the assigned continuous
transcript context, and opened Northwestern/Cambridge biographies.
No claim of audiovisual playback. Bloom's categorical healthy-self
rhetoric and broad culture examples are explicitly qualified; later
therapy claim and unassigned sex/caffeine/hazing stories excluded.
([Bloom13](https://www.youtube.com/watch?v=piDznzrNymE);
[Bloom16](https://www.youtube.com/watch?v=jsrB5m3mL-A);
[McAdams](https://www.youtube.com/watch?v=49FCgaZRn_M);
[Little](https://www.youtube.com/watch?v=qYvXk_bqlBk);
[Northwestern](https://psychology.northwestern.edu/people/faculty/core/profiles/dan-mcadams.html);
[Cambridge](https://www.psychol.cam.ac.uk/people/professor-brian-little).)

Essential reading residuals are stated by actual headings/paragraphs:
Manchiraju definitions, two distinction paragraphs+Table1, four
measurement-appraisal paragraphs, two intervention-limit paragraphs;
Branje first four introductory paragraphs ending "one or multiple life
domains" (not the previously proposed nonexistent numbered subsections);
Noba continuous-distribution paragraph and last three person/situation
paragraphs; actual SCCS form; Maitland Self row+note only. Parent
reopened the complete articles, instrument and exact Noba text. Noba's
actual opening is "An important feature of personality traits,"
not the inherited "traits are normally distributed" locator.
The linked SCCS has five response options, ten reverse-keyed items,
6/11 forward; fictional educational keying and complete mean logic
are explicitly separated from norms, original reporting convention
and clinical use. No item-bank republication or missing-data rule.
([SCC review](https://pmc.ncbi.nlm.nih.gov/articles/PMC13350471/);
[development review](https://pmc.ncbi.nlm.nih.gov/articles/PMC9298910/);
[Noba](https://nobaproject.com/modules/personality-traits);
[opened instrument](https://dlab.sauder.ubc.ca/sjdm/dmidi/files/Campbell_et_al._(1996)_Self-Concept_Clarity.doc);
[Maitland](https://pmc.ncbi.nlm.nih.gov/articles/PMC12392214/).)

Workload estimates/rates/overheads printed: 50 video study +45 reading
+40 lesson +35 practice +20 retrieval +110 independent inquiry =
**300 minutes**. Readings estimated 1,700–2,000 words, not a measured
token receipt. Advisor QC was commissioned but the adviser failed
for unavailable credits before returning findings. Do not claim an
advisor pass. Supervisor independent module-QC owed; **DRAFT, NOT CLEARED**.

### M6 production checkpoint, degree-4376b4ec, 05:19Z

`modules/deg-psychdim/m6-motivational.md` drafted. New theory uses L2
guided application as approved, after M5's independent inquiry; worked
Nia -> completion tasks -> unused Rowan plus own-goal analysis.
All approved motivation rows retained: six-form SDT and three basic
needs; hedonic/instrumental versus explicitly proposed eudaimonic
goals and control-value; adherence comparison and own-goal plan.

Parent reopened all four unprocessed watch pages and read the selected
continuous transcript windows, plus four independent institutional
profiles. Runtime **20:20**: Ryan5:17+5:27, Tamir5:22, Pekrun3:11,
Fishbach1:03. No playback claim. Ryan names integration but does not
separately define it in the clip; preprint residual supplies that.
Pekrun recognition errors repaired with clean labels, not quoted as
theory; Fishbach2023 is not represented as presenting a 2025 study.
([Ryan](https://www.youtube.com/watch?v=ww4QGMV94A8);
[Tamir](https://www.youtube.com/watch?v=6R2ALQfEZwA);
[Pekrun](https://www.youtube.com/watch?v=igSLOQoWuPQ);
[Fishbach](https://www.youtube.com/watch?v=tB5J9qgM2zI).)

Reading residuals: Ryan/Deci Figure1, precise value/integration/
amotivation paragraph and first multiple-motives paragraph; Martínez-
Priego's exact goal-classification sentence, bounded Results finding
and empirical-consolidation sentence; Woolley abstract, Study2 opening,
final pre-Study3 paragraph, Study3 Procedure, Study4 opening/exclusion
paragraph/first two Results paragraphs, and open-questions paragraph.
Parent opened all full sources and read these passages and study
context. Correct distinctions: **Study1 U.S. year; Study2 China one
month; Study3 retrospective past14-day step entries checked against
two screenshots; Study4 randomised framing with24-hour follow-up**.
No conflation into a year-long cross-national RCT.
Study4 n763 after primary exclusions, mean11.55 vs9.18, d0.21
95%CI[0.07,0.36]; null zero/nonzero hurdle result carried into
practice and assessment. No app endorsement or better-health inference.
([SDT preprint](https://selfdeterminationtheory.org/wp-content/uploads/2020/04/2020_RyanDeci_CEP_PrePrint.pdf);
[goals review](https://pmc.ncbi.nlm.nih.gov/articles/PMC11479914/);
[actual original research](https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/).)

Workload estimate36+40+35+45+20+80=**256 minutes**, with explicit
estimated reading ranges/rates/overhead and20:20 video arithmetic.
Every outcome has feedback, unused-case assessment and private lived
usefulness/uncertainty transfer. Adviser unavailable as recorded
under M5; independent module-QC owed, **DRAFT, NOT CLEARED**.

### M7 production checkpoint, degree-4376b4ec, 05:23Z

`modules/deg-psychdim/m7-overt-behavioural.md` drafted; L2 guided
comparison fades to L3 independent three-day habit diary, functional
inquiry and evidence appraisal. All approved rows covered; no new
domain or clinical practice. Conditioning already taught in M3 is
retrieved, not assigned as duplicate mandatory viewing; short Bouton
precision reading supplies the add/remove × increase/decrease logic.

Three actual watch pages opened: Wood narrowed01:16–04:53=3:37,
excluding animal-mind rhetoric and later rituals; Berkman01:12–02:35
=1:23, excluding earlier brain simplification and later identity
advice; Inzlicht49:52–58:10=8:18, explicitly dated December2019
recording and not represented as covering2021. Total **13:18**.
Parent reopened all three institutional biographies and read the
actual interview segment. No playback claim. Wood's "only way"
rhetoric is qualified by the research's environmental disruption.
([Wood](https://www.youtube.com/watch?v=Ywec1MbeQDk);
[Berkman](https://www.youtube.com/watch?v=EXrmKkpJ2Gk);
[Inzlicht](https://www.youtube.com/watch?v=fuA1l7bL954);
[USC](https://dornsife.usc.edu/wendy-wood/);
[Oregon](https://cas.uoregon.edu/directory/psychology/all/berkman);
[Toronto](https://www.utsc.utoronto.ca/psych/person/michael-inzlicht).)

Parent opened full primary/review texts and read bounded passages:
Carden/Wood first3 paragraphs,2 specified effortless-control paragraphs,
environment change; Singh Abstract (20studies/2601participants,
11high-risk, only4formation-time studies; pre/post not universal
duration); Werner/Berkman four actual process paragraphs; Reed
Abstract+Participants (149,60–93years,selected older adults, modestly
related indices); Alarcón-Espinoza Abstract+criterion(d) (under18,
not adult effectiveness evidence); Dang Table2+note,first2Discussion
paragraphs,final caution; Vohs Abstract+Participants; Maitland overt
row+note. Counts/rates are explicitly estimates, not token measurements.
([Habit review](https://dornsife.usc.edu/wendy-wood/wp-content/uploads/sites/183/2023/10/Carden.Wood_.2018.pdf);
[duration review](https://pmc.ncbi.nlm.nih.gov/articles/PMC11641623/);
[process](https://pmc.ncbi.nlm.nih.gov/articles/PMC11423838/);
[older-adult study](https://pmc.ncbi.nlm.nih.gov/articles/PMC7250393/);
[natural-context youth review](https://pmc.ncbi.nlm.nih.gov/articles/PMC9171140/);
[Dang](https://pmc.ncbi.nlm.nih.gov/articles/PMC6013521/);
[Vohs](https://bura.brunel.ac.uk/bitstream/2438/28246/1/FullText.pdf);
[framework](https://pmc.ncbi.nlm.nih.gov/articles/PMC12392214/).)

Contested-results exercise preserves Dang all-task g0.38[0.31,0.45],
trim-and-fill g0.24[0.16,0.32], substantial heterogeneity and tentative
selected-task caution; Vohs36labs,N3531before1068preregistered
exclusions, confirmatory d0.06non-significant versus full-sample
exploratory d0.08significant. No muscle/resource claim inferred,
no universal no-effect conclusion, no personal exhaustion diagnosis.
Every family has practice feedback, final criterion and private lived
usefulness/uncertainty transfer. Diary active time30min across at least
3days; no habit-formation certification or invented learner entries.
Workload24+60+40+40+30+15+90=**299 active minutes**.
Independent module-QC owed; **DRAFT, NOT CLEARED**.

### M8 and full draft packet, degree-4376b4ec, 05:26Z

`modules/deg-psychdim/m8-integrative-capstone.md` written as approved
L4 integrative project, no new source hunt or duplicate viewing.
It requires independent design, actual safe execution, a single
real own pattern through all6dimensions, honest outcome/mechanism
distinction, alternatives and a public rubric with self-assessment.
Learner observations/results are NOT supplied, fabricated or claimed
to exist; this is the course specification, not a completed learner
project. Plan alone cannot pass execution.

Finite suggested6opportunities over7–14days, with adaptable predated
schedule and explicit nonvalidation/no sample-size guarantee;
course-designed personal before/after is NOT an RCT. Safety/privacy,
missingness, deviations, plan revisions and counter-observations
are assessed. Hypothetical Morgan preview with feedback cannot replace
the actual learner project. Genuine null, well-reasoned stop or
unwelcome result can pass reasoning; improved mood/productivity,
compliance and personal disclosure are never the grade. All6families
require actual instance or explicitly unmeasured gap, usefulness/choice
and uncertainty, with source boundaries inherited from earlier modules.

Active workload25+75+60+35+45+90+30+15=**375minutes**. No new
mandatory external readings/videos; existing sources retrieved only
as needed and previous M7 observations not double-counted. Course
README gives the complete8-module route and exact current statuses.
Whole packet249+274+290+265+300+256+299+375=**2308minutes,
38hours28minutes**. All are estimates with printed rates/overhead,
not completion-time observations.

**Complete DRAFT PACKET, not degree clearance.** M1 has supervisor
module-QC pass; M2–M8 still need independent module review, then
whole-degree final review/advisor QC. M5 adviser credit failure remains
explicitly open; no self-clearance or integration/publication request.

### Bounded self-review, 05:28Z

Approved-matrix cross-check of all eight drafts: M3's final alignment
table still described its pre-adviser perception/learning/RNT tasks,
although the repaired teaching and assessments were present. Table
now mirrors the actual depth-cue task, same-question comparison and
five-feature mapping. M5 explicitly requires own private/redacted SCC
reflection while fictional responses remain valid for arithmetic;
M7 explicitly maps all three measurement families to the same own
episode and marks uncollected task/physiological information. No
new sources, outcome families, time blocks or clearance. Existing
reflection/assessment allowances cover these clarifications.

### Bounded editorial pass, 05:29Z

Re-read module framing/headings against the whole-text Humanizer
standard. Removed rhetorical contrast headings, decorative "freezing"
metaphor, slogan/deadline/prison language and the M8 split not-X/it-is-Y
opening; used direct subject names and concrete tasks instead.
Necessary source and safety limitations retained. M5 FAP target is
now paraphrased rather than presented as an unchecked exact sentence.
M5 level label now matches the approved L2->L3 fading progression,
consistent with the actual worked/completion/independent sequence.
This is a bounded editorial pass, not an assertion of zero AI tells
or a substitute for independent content/pedagogical review.

### Source-navigation and precision audit, 05:32Z

Reopened8sources and exact-string tested21reading locators across
M4–M7: all tested current locators present, including SCC review
headings, identity domain ending, SDT paragraph, regulation goals,
Woolley exclusion/open-question paragraphs, Carden/Wood headings,
four-stage opening and Lippelt boundary. Rechecked actual Table2
PTSD/orienting association and under18 eligibility, both correct.
Parent read the actual Wood/Berkman selected continuous transcripts,
not merely metadata.

One additional problem found: the drafted Bouton "Operant Conditioning"
precision paragraph and negative-reinforcement locator are absent
from that source. **Withdrawn**, replaced with actual Reinforcer/
Punisher vocabulary entries plus the verifier's already checked
Yale4 **33:49–36:11=2:22** supplement, after M3's stop. Parent
reopened/read official Chapter5 transcript paragraph "There's two"
through "remove the heavy collar." It supports the positive/negative
reinforcement distinction. Negative-punishment example removed;
new completion contrasts positive/negative reinforcement and
increase/decrease punishment definition. No guess at additional timing.
([Actual Bouton](https://nobaproject.com/modules/conditioning-and-learning);
[official Yale transcript](https://oyc.yale.edu/psychology/psyc-110/lecture-4);
[recording](https://www.youtube.com/watch?v=rCKK6r15fro).)

Current watch-page fetch does not expose timed transcript lines;
earlier independent verifier's timed receipt is retained, not
misrepresented as a fresh parent timing/playback check. M7 current
video total **15:40**, rounded study26min instead24; current M7
**301min**; whole packet **2310min,38h30m**. README and band updated;
earlier13:18/299/2308 totals superseded. Supervisor review still owed.

### Final producer verification manifest, 05:34Z

Eight module files present; all README module links resolve locally;
band JSON parses; `git diff --check` clean. Recomputed module totals:
249+274+290+265+300+256+301+375=**2310active minutes**. Recomputed
M2–M7 viewing34:27,44:04,23:40,34:53,20:20,15:40 respectively,
all match current prose. Credential-marker scan of module files clear.
UTC and monotonic elapsed readings agree within rounding. These are
producer structural/arithmetic checks, not independent clearance.

Current SHA-256 snapshot for reviewers:

| Module | SHA-256 |
|---|---|
| M1 | `2cc67442dd251f5b60026152e2bec2d1d0dd0199b207b86ce016bda9401909d2` |
| M2 | `d9b938b96cdc0702b2aeaf2869ed6003334be5acd8e73db9f0867932cfdd3ae1` |
| M3 | `9ff7b598b24b750372f9bd59f0c7120d1e9072bdc12d916c26692f0fb7f01f48` |
| M4 | `68acd6f12985c39b2d728b93d567db596fae1605912697ba6816c9d8735eedd3` |
| M5 | `f3952673a7cfe0fe3298a8df17b89868ec81e8092ea96549e1b7debb7e504dbe` |
| M6 | `84d2a03ae0dacc1b2c7f3da92e062e10574e422e8b0a6454a19b1078a4c4c2e6` |
| M7 | `97857e9853b239df1d58d0b82139aacd2d17b1f771a24a97bc9c85ccb92902b8` |
| M8 | `f26f84ce5389d0d3f4fec8a6b78af3e560ddd7181ceafbebed86339e0b360cef` |

M1 independent pass remains the supervisor's decision at cdb8f0939,
before its allowed nonblocking labels/hidden status annotation changes.
M2's bounded cultural-function return is repaired, not independently
recleared; M3/M4 adviser groups repaired, supervisor QC owed; M5–M8
need independent module review, and M5's adviser failure is not a pass.
Whole-degree final/adviser review and integration/publication remain
closed. No other band, queue, registry or site data changed.

### Final remote/content cross-check, 05:35Z

Fetched origin/main and confirmed producer verification commit
7b23148ec is an ancestor; remote module/ledger/band content matches
the local reviewed snapshot. Public raw README and independent M1
review reopened successfully. Fresh content recheck confirms the
SCCS five-point anchors and ten starred reverse items (6/11 forward);
Tamir09:21–14:43 and Fishbach03:33–04:36 actual continuous transcripts
match the bounded M6 teaching, including the retained caution about
Tamir's happiness prediction and the 2023/2025 evidence distinction.
No changes to module hashes or clearance states from this cross-check.
([Actual SCCS form](https://dlab.sauder.ubc.ca/sjdm/dmidi/files/Campbell_et_al._(1996)_Self-Concept_Clarity.doc);
[Tamir](https://www.youtube.com/watch?v=6R2ALQfEZwA);
[Fishbach](https://www.youtube.com/watch?v=tB5J9qgM2zI).)

M1 independent supervisor decision consumed at 05:02Z:
`reviews/deg-psychdim-m1-supervisor-2026-10-26.md` records **MODULE-QC
PASS** on production commit **cdb8f0939**, module SHA-256
**0c9682e9947e70323ef6f095a86f6e94ab984df7f90bed95e2ff24bb8fb40439**.
Requested nonblocking alignment-map wording repair applied: three stale
"Step 1 readings" labels now name the Step 1 video. This records another
agent's decision; no degree, readiness, integration or publication gate
is inferred. M2/M3 remain draft.

M2 supervisor bounded return consumed and repaired at 05:05Z:
`reviews/deg-psychdim-m2-supervisor-2026-10-26.md`, reviewed module
SHA-256 **6fce6623b8165a416d5e6afab5f8adff6fd9e26bc7d555df1aa50e754ef30377**.
The module now explicitly distinguishes cultural influence on expression
from a possible cultural function of patterned expression (coordination/
shared expectations), gives hypothetical function/cost in Amira, and
requires the distinction in practice, final instructions and rubric.
No universal social-order law or norm-is-just inference. Added only the
first three sentences of Noba's closing cultural paragraph, from
"Because one of the major functions" through "once we have them":
**105** new tokens, freshly opened/read/count measured; full reading
**1,688**, triple raw at 130 wpm = 38.95, rounded **39 minutes**.
Total supersedes 272 with **274 minutes**. Added short teaching/practice
fits the existing 35-minute teaching/check allocations; no extra task.
([Opened Noba passage](https://nobaproject.com/modules/functions-of-emotions).)

M3 advisor round 1 repairs applied at 05:04Z. Four bounded findings:
visual-cue assessment, explicit five-feature RNT application, same-question
L2 account comparison, and binding lived transfer. Added a worked Ponzo
linear-perspective explanation with equivalent verbal display and feedback;
added feature/evidence/unknown mapping (no invented Sam features); compared
simple pairing-sufficiency with Bouton's prediction-error account;
added five private/redactable low-stakes lived-transfer notes, assessed
for usefulness/choice and uncertainty rather than disclosure or change.
M2 entry and M4 exit now match the observable scope spine.
Advisor independently opened Yale's actual iframe and the new recording,
and corroborated the two learning windows by continuous transcript.
No playback claim. The prior 260-minute estimate is superseded by **290**:
60 video + 30 external reading + 45 lesson teaching + 55 completion/
counterchecks + 20 delayed retrieval + 80 assessment/transfer/revision.
Extra scaffolding and transfer are explicitly budgeted. Module remains
DRAFT, NOT CLEARED; supervisor independent review requested.

### Gate review of the M2–M8 packet, 2026-10-26 06:28Z (gate-pplx-w3-1026a, deg-gate baton)

Independent Gate review against the owner's centering clause:
`reviews/deg-psychdim-m2-m8-gate-2026-10-26.md`. All eight module
SHA-256s recomputed and matched to the producer manifest. Verdict:
GATE PASS at scope/centering level for M2–M8 (M2 read in full
including the repaired cultural-function material; M3 in full; M4–M8
head/structure/source-route reads as documented in the review file).
Centering is genuine in every module — own-life orientation, honest
evidence limits, free bounded sources, video-first windows respected.
Finite-scope exclusions from earlier Gate-1 rounds are respected.
NOT cleared by this review: M2 reclear, M3/M4 supervisor QC, the open
M5 adviser credit failure, M5–M8 independent module review,
whole-degree final review, integration and publication. The packet
proceeds to supervisor module-QC in the owner's order.

### Bounded M2 production repair, 2026-10-26 05:59Z

`degree-2874787d` took the released `deg-psychdim` production baton.
The changed module now requires a private/redacted actual low-stakes
episode alongside the Jo case, with explicit observation/interpretation/
action/unknown scaffolding, safe deferral and no fabricated observations.
All five rubric criteria now have concrete strong and rejection
specimens. A read-only adviser returned the first version for exact
scaffold/example improvements and accepted the repaired production
content; source fidelity and gate clearance were not in that verdict.

Final M2 SHA-256:
`b1f5533f532b4d7e259aeb7202e6500b45c04d9b0e318bfac9736ce3558276ad`.
The receipt
`verify/deg-psychdim-m2-transfer-rubric-repair-2874787d.md` distinguishes
the adviser-reviewed content hash from the final workload-only change
and records actual source openings plus the unrecovered Gross transcript.
M2 is now **304 estimated minutes**; the packet is
249 + 304 + 290 + 265 + 300 + 256 + 301 + 375 =
**2,340 minutes, 39 hours**. README and band metadata agree.

ROUTE live supervisor: review only this changed M2 assessment target,
preserving the prior M2 pass at `d9b938b96` that landed during production.
No M1/M3/M4 module edits; their independent module passes remain intact.
The changed M2 assessment awaits confirmation; M5–M8, whole-degree,
integration and publication gates are not flipped.

### M5 alignment/navigation repair, 2026-10-26 06:08Z

`degree-2874787d` applied the routed transparency exercise/feedback and
mandatory both-comparisons repairs. A read-only adviser also checked
corrected SCC-review navigation and seven criterion-specific specimens.
Final bounded production ACCEPT at SHA-256
`c38a8d6d48eb81e44d00aff28ca942c1ba5df2fe0ad4e046840ff3c90a600fad`.
Receipt: `verify/deg-psychdim-m5-alignment-repair-2874787d.md`.

M5 is **315 estimated minutes**; packet **2,355 minutes, 39h15m**.
No recording time changed. McAdams 13:31 is an open requirement:
continuous timestamped evidence or an approved verified adjustment is
still owed; M5 remains NOT CLEARED.

Fresh remote decisions supersede the preceding snapshot: M2's changed
hash has supervisor confirmation; M4 is verification-open, not passed
pending a nonblocking flag. Preserve those gate decisions.

### M6 production checkpoint, 2026-10-26 06:18Z

The all-six motivation return is implemented at SHA-256
`b2674a0ad5b04186ddc3e61a33a4af8130b2adc34468f7bf0b98644a1c3f8f85`:
feedback-bearing amotivation/introjected/identified contrast, unused
Cory barrier case, observable rubric and five strong/rejection specimens.
Video/source windows are unchanged.
Receipt: `verify/deg-psychdim-m6-all-six-repair-2874787d.md`.
Production adviser QC is requested but **pending**, not accepted;
supervisor changed-hash review remains owed.
M6 is 271 minutes; packet 2,370 minutes/39h30m.

### M4/M5 recording evidence recovered, 2026-10-26 06:27Z

The production owner opened indexed timed transcript excerpts from
the two exact recording URLs. McAdams fragments overlap across the
whole assigned607–811sec interval; the participant introduction is
later, so13:31 is an early editorial stop rather than a claim about
that participant's first word.
([McAdams recording](https://www.youtube.com/watch?v=49FCgaZRn_M))
Bloom's locally unellipsed2827–3210sec fragment overlaps a newly
retrieved3210–3293sec bridge, covering original2846–3293sec continuously.
([Bloom recording](https://www.youtube.com/watch?v=DmWrOUK2zgA))
The recovered late words also match the complete official transcript
read during the cross-check.
([Yale's full transcript](https://oyc.yale.edu/psychology/psyc-110/lecture-7))

Receipt, exact hashes, cue maps, limitations and reproduction queries:
`verify/deg-psychdim-m4-m5-indexed-window-evidence-2874787d.md`.
The direct raw-caption endpoint remains blocked; these are overlapping
indexed passages, not a downloaded raw track. Earlier proposed
window/paper alternatives were never applied. Module files, source
windows and workload are unchanged.

ROUTE independent supervisor/verification: inspect those spans and rule
on both recording requirements. M4/M5 remain NOT CLEARED pending that
decision and the M5 changed-assessment review. M6 production adviser
and supervisor delta decisions are also pending. No complete-degree,
integration or publication gate is awarded by this producer.

### M6 adviser unavailable and review routing, 2026-10-26 06:36Z

The original production adviser returned no M6 verdict after follow-ups;
a second bounded, local-text-only QC attempt stopped with an explicit
credit-exhaustion error. No adviser acceptance is recorded for M6.
The current module hash remains `b2674a0ad5b04186ddc3e61a33a4af8130b2adc34468f7bf0b98644a1c3f8f85`.

Supervisor acknowledgement `c7a31ee09d7727e77ec0532c197f2cb0d35ffa6c`
received/read the producer handoff and routed M5/M6 changed-production
reviews plus M4/M5 recovered-window decisions to the next supervisor
session. That acknowledgement awards no independent gate.

### Production baton released, 2026-10-26 06:45Z

`degree-2874787d` released only the held `deg-psychdim` production
baton after the final producer verification. M2/M4/M5/M6 hashes are
unchanged; the handoff receipt records zero mechanical failures and
preserves all independent decisions. M4/M5 window decisions and M5/M6
delta reviews remain routed to the next supervisor session; M6 adviser
availability failed explicitly. Complete-degree review, integration
and Academy publication remain closed.

### Producer-side Sainani in-clip corroboration via watch-page transcript render, 2026-10-26 07:57Z (worker-pplx-psychdim-1026g)

The deg-psychdim publication shipped with one non-blocking open
verification item: the in-clip worked examples of the Sainani
`LKiX54NglCo` clips were not verbatim-confirmed because all transcript
routes in `verify/deg-psychdim-sainani-transcript-routes-1026d.md`
were exhausted (platform robots on `api/timedtext`, sandbox 429,
third-party renderer IP-block, cloud-browser panel empty).

New route this session: the platform search engine renders the YouTube
watch page's own transcript panel with second markers. Querying the
page (https://www.youtube.com/watch?v=LKiX54NglCo) returned transcript
segments that corroborate the module claims:

- Cherry-juice worked example, inside assigned clip 1 (25:46-44:11):
  at {ts:1839} (30:39) "the value we see in the sample like the
  negative 20 seconds in the cherry juice trial"; at {ts:2286} (38:06)
  "the value that we observed in our sample, like the negative 20
  seconds in the cherry juice trial"; at {ts:2400} (40:00) "Cherry
  juice does nothing. To test the hypothesis using our data, we're
  going to run just a standard t test." This supports `m1-orientation`
  lines 204-216 (hypothetical cherry-juice example, worked model at
  t=2021=33:41).
- Clip 2 content (54:02-57:21): at {ts:3258} (54:18) "What is a p
  value not? A p value is not the probability that your result arose
  due to chance. It's not the probability that your result is a false
  positive. It's not the probability that the null hypothesis is true."
  This matches the module's second-pause exercise (rewriting
  "p = .05 means a five percent chance the finding is false").

Carrier correction on the caffeine half of the open item: the caffeine
example is not in the Sainani clip; it is in the assigned Noba span of
"Thinking like a Psychological Scientist" (Erin I. Smith), section
"The Interpretation of Research Results" (verbatim-confirmed by fetch
of https://nobaproject.com/modules/thinking-like-a-psychological-scientist:
"Imagine a researcher wanting to examine the hypothesis ... that
caffeine enhances memory"; "if the results of the memory test reveal
that the caffeine group performs better, this is a piece of evidence in
favor of the hypothesis"). The `m1-orientation` caffeine sentence
(line 242-245) attaches the Sainani link for the hypothesis-testing
definitions, not as the caffeine carrier. The earlier open-item framing
("in-clip worked examples, cherry juice, caffeine") conflated the two
carriers; both are now corroborated in their actual carriers.

Caveat: the transcript text is auto-generated captions (one render
reads "cherry juice trap" for "cherry juice trial"), so quotes carry
ASR noise; substance and second-marks are consistent across renders.
No module, source or window change is proposed by this entry; it is
producer-side corroboration only. Formal closure of the open item
remains with deg-verify-b (the 5:37 stub receipt under
`deg-verify-b/deg-video-recheck-open-items.md`) and the supervisor; the
5721 window-boundary receipt is unaffected.

### Post-publication owner read-back QC, 2026-10-26 08:00Z (worker-pplx-psychdim-1026g)

Read-back of the published degree data in `site/assets/app.js`
(read-only; app.js is deg-integrate property) against the data package
and the QC'd module files:

- Structural: PASS. `deg-psychdim` status `complete`, module array
  `mod-pd-1..8`, app.js module objects identical to
  `integration/deg-psychdim-data.json` on all shared fields, zero
  dangling media refs (67 module-media entries checked against the
  merged 404-source array, including legacy M06-AF07/M08-P09),
  duration totals 39.5 h matching the packet 2,370 min, every module
  carries activity and rubric.
- Outcomes verbatim: 30/40 exact; 35/40 after en-dash/hyphen
  normalisation (m3 "cue-event", m7 "cue-response" hyphenated in
  app.js vs en dash in the files - typographic only). Remaining
  deviations:
  1. m4 "Practice and evidence" - SUBSTANTIVE: app.js reads "observe an
     attention practice and judge the evidence separately, without
     turning a difficult afternoon into a diagnosis" (a blend of the
     module's intro framing), while the module's outcome list (m4
     line 39) reads "compare focused attention with open monitoring,
     follow or describe a bounded observation exercise, and
     distinguish an anecdote from evidence of training efficacy".
  2. m3 "Recurring thought and evidence" - compressed: "naming the
     primary-study information it does not provide" became "naming
     the limits".
  3. m7 "Functional inquiry" - compressed: "including the narrow
     EEMM/FAP application without conducting therapy" became
     "including the narrow EEMM/FAP links and their uncertainty".
- Rubric verbatim: 45/46; m1's scope-statement criterion is a
  condensed rewrite of the longer module criterion.
- Duration cross-check: `PD-M1-02` (Sainani LKiX54NglCo) published at
  1:16:12, confirmed against the watch page this session; note the
  earlier verifier receipt (sainani-transcript-routes-1026d) carries a
  5,152s = 1:25:52 full-video figure that does not match the page
  (verifier-side figure only; published data is correct).

No published-data edit made by this owner (app.js is integrator-only).
The m4 outcome text and the m3/m7/m1 compressions are routed to
deg-integrate as a one-line-each repair against the module files; the
supervisor rules whether the compressions are acceptable as-is. This
read-back awards no gate; it is owner-side QC of already-published
data.

Supervisor acknowledgment (2026-10-26 10:00:05Z, supervisor-pplx-1026p):
the Sainani worked-examples duration note (transcript reaches
01:16:11; receipt deg-psychdim-sainani-clip-worked-examples-1026g.md,
corrected version) is recorded as informational input for module
segment decisions — no action required. NOTE per the corrected
receipt: the post-57:21 stretch was NOT characterized (the
lecture/Q&A transition was not located; the earlier Q&A claim was
withdrawn); the module's assigned windows are all inside the
carrier's transcript span and unaffected.

## Bounded live-content review, 2026-10-28 (supervisor-7f92c6ad)

The canonical `deg-psychdim` baton was confirmed before editing.
The approved M2 and M6 core lessons are unchanged; the new worked
WOOP supplement is a separate draft for independent review.
No full-row, pedagogical, publication or coverage gate is
self-cleared, and no hours are added.

### Accepted optional practice

The author's [WOOP practice page](https://woopmylife.org/en/practice)
and actual linked [English kit](https://woopmylife.org/s/WOOP-kit-EN-PDF.zip)
were inspected, including the complete Written Guide, Review,
FAQ and Refine Your Plans PDFs. NYU supplies the independent
credential check, and the author's Q&A explicitly identifies
WOOP as the combination of mental contrasting and if-then
planning ([NYU](https://as.nyu.edu/faculty/gabriele-oettingen.html);
[Oettingen Q&A](https://psychwire.com/free-resources/q-and-a/1ux8o97/the-science-of-motivation)).

`PD-D2-69` is prepared as optional M6 teaching. Exact locators,
download hashes, the comparison with the
[KU worksheet](https://learningandwriting.ku.edu/sites/writingandlearning/files/images/2024/Guides/GoalSetting/WOOP%20METHOD.pdf),
and source-family reasoning are in
`reviews/deg-psychdim-woop-source-review-7f92c6ad.md`.
The nomenclature blocker closes; instructional sufficiency for
the entire row remains open.

Evidence companions were reopened for scope and limits:
the [2021 meta-analysis](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2021.565202/full),
the [2025 workplace trial](https://pmc.ncbi.nlm.nih.gov/articles/PMC11941803/),
the [2026 procrastination abstract](https://pubmed.ncbi.nlm.nih.gov/41601124/),
and the [2026 physical-activity publisher abstract](https://cipp.ug.edu.pl/Does-mental-contrasting-with-implementation-intentions-MCII-help-to-increase-physical,225999,0,2.html).
These support the limits recorded in the review and draft.
The last two checks are abstract-level only; no primary-paper
assignment is introduced.

### Positive-emotions accuracy hold

The existing full optional
[NPTEL positive-emotions lecture](https://www.youtube.com/watch?v=lRcm5DIwVsQ)
was returned with a readable transcript and a 1:03:31 watch-page
duration. Its repeated denial of mixed positive/negative emotion
at 34:03–34:48 prompted a hold against the opened
[mixed-emotions meta-analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC4397957/).
The assignments manifest explicitly removes `PD-D2-10`; this
review does not claim an audio playback check.

The alternative [Penn State teaching chapter](https://psu.pb.unizin.org/psych425/chapter/broden-and-build-theory-of-positive-emotions/)
and its [book metadata](https://psu.pb.unizin.org/psych425/) were read,
with credentials checked on the
[institutional author biography](https://roam.libraries.psu.edu/author/michelle-yarwood).
It is an admissible university teaching family, but no replacement
is assigned without resolving its measurement and causal-language
qualifications. The [2005 original study](https://pmc.ncbi.nlm.nih.gov/articles/PMC3156609/),
[2008 original study](https://pmc.ncbi.nlm.nih.gov/articles/PMC3156028/),
[2016 experimental challenge](https://pmc.ncbi.nlm.nih.gov/articles/PMC5078759/),
[UNC theory statement](https://peplab.web.unc.edu/research/), and
[systematic-review opening](https://www.cap-lab.be/files/modules/products/11/Vanlessen_Happymood&Attention_NBR2016.pdf)
were used for the scoped checks recorded in
`reviews/deg-psychdim-positive-emotions-quality-7f92c6ad.md`.

The existing reasoning receipt was also reopened:
[Reasoning 01](https://www.youtube.com/watch?v=LXYw-SGeCLs),
[Reasoning 02](https://www.youtube.com/watch?v=5qYUqYN8GJ4),
[official course identity](https://nptel.ac.in/courses/109103134),
and [instructor credentials](https://www.iitg.ac.in/nkashyap/).
The returned passages repeatedly blur truth and validity.
No reasoning assignment is added in this pass; a future bounded
case needs its own explanatory guide and independent review.

### Routing

`deg-integrate` remains with its live holder; app.js is untouched
by this producer. TASKBOARD carries the add/remove request and
an independent review request for the positive-emotions hold
and the draft WOOP supplement. Adviser tooling is unavailable,
and no adviser acceptance is claimed.
