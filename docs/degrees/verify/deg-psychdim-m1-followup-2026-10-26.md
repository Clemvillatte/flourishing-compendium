# Psychological Dimensions M1: independent pedagogical follow-up

Verifier: verifier-af06bd9e, deg-verify-b. Opened and checked 2026-10-26.
Reviewed snapshot: `c49c1f772e5cda50efd50de92181c7a77b60ae94`, module content
SHA-256 `57b79648fb9d5d0cc7be298adcb3d61c63de414508127b82793b25e43fef0c2b`.

## Decision and ownership

**Return for three bounded pedagogical repairs.** The earlier numerical
and statistical repairs remain sound in this snapshot. This is a review
of the learner path, not a reopening of the entire degree or permission
to cross an unresolved owner gate.

The deg-psychdim worker owns module edits. This verifier has not changed
module pages, the source ledger, the scope, or any gate status. The Phase 0
stop-gate wording remains unresolved in the repository; the supervisor
must reconcile it with the owner's current production directive rather
than treating a source or teaching review as authorization.

An independent advisor reviewed the module against
`skill/curriculum-design/Skill.md` and the Humanizer. The verifier checked
the following findings against the current module and opened primary
evidence independently. Line numbers below identify this snapshot, not
permanent locations after repair.

## Repairs routed to the production owner

### M1-PED-01: teach the definitions before asking for recall

**Location:** module lines 53–102, 287–313 and 347–361.

Step 1 tells the learner to do Retrieval activity 1 before the second
reading pass. That activity asks for definitions and personal examples,
but the working definitions and the Jordan demonstration are in Step 2.
The assigned research excerpts name the framework; they do not replace
that beginner lesson. ([Hofmann and Hayes, opening article text](https://pmc.ncbi.nlm.nih.gov/articles/PMC11303929/);
[Maitland, section 1.4](https://pmc.ncbi.nlm.nih.gov/articles/PMC12392214/).)

The second recall attempt is called the submitted deliverable. The final
assignment then adds what matters, what understanding or choice follows,
and what remains uncertain for each example. There is a useful complete
attention exemplar in the rubric, so the repair is to bring that teaching
forward and practise its components, not to invent a new assessment.

**Bounded repair:** place the definitions and Jordan demonstration before
the first closed-book attempt. Demonstrate the matters/choice/uncertainty
reflection in the teaching sequence, let the learner complete another
partly filled example, and say whether the second recall attempt is a
draft or the final artifact. Put intervening work between the two recall
attempts so the intended spacing is explicit.

**Acceptance check:** a novice following the printed sequence has been
taught each component before recall and has practised each component
that criterion 1 can reject. Definitions, submission instructions and
the rubric must describe the same final artifact.

### M1-PED-02: make the effect-size outcome match the L1 lesson

**Location:** module lines 43–44, 197–283 and 380–391.

Outcome 4 promises appraisal of effect size. The worked sequence and
strong rubric answer mainly demonstrate reporting a coefficient and
interval, while rightly warning against percentage, treatment-benefit
and personal-success interpretations. The assigned Noba reading teaches
scientific reasoning and significance testing, but does not supply the
missing regression-coefficient lesson. ([Noba, “Thinking like a
Psychological Scientist”](https://nobaproject.com/modules/thinking-like-a-psychological-scientist).)

The source gives the motivation and adherence questionnaires 1-to-7
response scales, but those measurement anchors alone do not establish
that the displayed beta can be read as an unstandardized point change.
Do not invent a unit conversion or infer standardization from the beta
symbol alone. Statistical significance is not a measure of practical
importance. ([Woolley, Giurge and Fishbach, Study 1 measures and results](https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/);
[ASA statement, principle 5](https://www.stat.berkeley.edu/~aldous/Real_World/ASA_statement.pdf).)

The earlier `deg-psychdim-m1-audit.md` records a bounded numerical check
that recovered the standardised point estimates; it did not independently
reproduce the reported bootstrap intervals. This follow-up concerns what
the novice is taught and required to demonstrate, not a claim that all
standardisation evidence is unresolved. This pass reopened the authors'
main R script and checked its SHA-256 against that record, but did not
rerun its model or bootstrap. ([Authors' Study 1 analysis script](https://osf.io/download/t4gda/).)

**Bounded repair:** either teach a magnitude interpretation whose scale is
verified from the study's materials, or narrow the L1 outcome to reporting
the estimate and uncertainty and explaining what further information
would be needed to judge practical magnitude. Model that answer, provide
a completion exercise with feedback, and make the rubric require the same
competency. Move unnecessary SE, z and named-estimator detail to optional
notes, or explain why each retained term is needed for a required decision.

**Acceptance check:** the learner can explain the estimate at the declared
level, including why practical magnitude cannot yet be judged when that
is the defensible answer. Copying three numbers alone must not satisfy a
claim to have appraised magnitude.

### M1-PED-03: assess what the degree includes, not only its exclusions

**Location:** module lines 45–46, 316–340 and 392–402.

Outcome 5 and the assignment ask what the degree covers and excludes.
Criterion 5 and its strong example can pass an answer that gives only
exclusions, their owners and the admission test. That leaves the positive
coverage requested by the task absent from the pass criterion.

**Bounded repair:** require the six-dimension process focus and reading the
evidence behind it, as well as exclusions and their owners. Start the
strong example with that positive coverage, preferably connected to
understanding an ordinary difficulty or choice. Add an exclusions-only
answer to the rejection cases.

**Acceptance check:** an answer containing every exclusion but no statement
of what the degree teaches cannot pass criterion 5.

## Source recheck: preserve these earlier repairs

- **Framework, publication year and source type:** the opened Hofmann and
  Hayes article is a 2024 framework paper, not an intervention-outcome
  trial; Maitland's paper is a 2024 publication whose author manuscript
  became available on PMC in 2025. Neither source establishes treatment
  effectiveness merely by describing a model.
  ([Hofmann and Hayes](https://pmc.ncbi.nlm.nih.gov/articles/PMC11303929/);
  [Maitland](https://pmc.ncbi.nlm.nih.gov/articles/PMC12392214/).)
- **Sample and waves:** Study 1 recruited 2,000 US Mechanical Turk
  participants and followed up at roughly four-month intervals, with
  1,046, 709 and 577 respondents at successive follow-ups. Motivation was
  measured at T1; adherence was first measured at T2.
  ([Study 1, participants, procedure and questionnaires](https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/).)
- **Reported estimates:** the three intrinsic-motivation predictions are
  beta 0.216, CI [0.13, 0.30]; beta 0.099, CI [0.04, 0.20]; and beta
  0.080, CI [0.01, 0.15]. These match the module's numbers.
  ([Study 1, hypothesis testing](https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/).)
- **Between-person inference:** the paper says the association was
  primarily driven by between-person variance. Retain the module's
  distinction between differences among people and a promise that
  increasing one's own enjoyment will improve one's own adherence.
  ([Study 1, hypothesis testing](https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/).)
- **Attrition:** the paper reports full-information maximum likelihood
  and a completer-only check with similar results. Retain the caution
  that these do not establish that attrition is harmless.
  ([Study 1, analytic strategy](https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/).)
- **Interval comparisons:** overlapping intervals are not themselves a
  test of the difference between estimates. Retain the module's
  correction of the paper's shortcut rather than teaching the shortcut
  as a general rule.
  ([Greenland and colleagues, misinterpretation 21](https://pmc.ncbi.nlm.nih.gov/articles/PMC4877414/).)

All the sources cited above were opened as free text or free PDF.
No exact quotation is introduced by this review. The corrected statistics
are evidence for retaining the relevant passages, not a reason to add
more statistical machinery to a no-prerequisite lesson.

## Nonblocking judgments and next check

The ordinary-life opening, six-part Jordan case and personal reflections
give M1 a substantive Walk of Life purpose. The scope should stay finite:
this review requests no additional psychological topic.

The printed workload is approximately four hours, and the advisor found
no material arithmetic undercount. Recalculate after the teaching repairs
and make the writing allowance for each deliverable visible. The source
paper is optional reading in the present draft; do not silently add a
full-paper reading burden when repairing the coefficient lesson.

After production repair, recheck the printed learner sequence, one
completed appraisal and one exclusions-only scope answer. Keep this
follow-up as a record and add the resolution against each finding rather
than deleting the review history.
