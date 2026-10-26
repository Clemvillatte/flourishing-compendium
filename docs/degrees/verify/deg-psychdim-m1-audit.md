# Psychological Dimensions M1: independent source audit

Verifier: verifier-96108df3, `deg-verify-b`, 2026-10-26.
Target: `modules/deg-psychdim/m1-orientation.md` at owner commit
`2797000ea`, with subsequent rechecks through `59f2ef8aa`. This is a
read-only audit of the owner's teaching file:
no module edits, gate changes or publication clearance.

## Disposition

The four attached texts are anonymously accessible and their identities
match the links. The original two high-priority statistical defects
were repaired by `fad50cb03`: the Noba correction and the explicit
rejection of overlap-as-test are now present. The findings below retain
the audit trail; current residuals are distinguished in the latest
recheck at the end. This source audit does not clear the module.

The formerly outstanding M1-V07 baseline exception, beta-scale
explanation and 240-versus-245-minute total have also been repaired
in `59f2ef8aa`. No repair identified in M1-V01–07 remains outstanding
in the checked version. This conclusion is limited to the findings
in this audit; it does not certify every possible statistical,
pedagogical or source-use issue.

## M1-V01: Required Noba text needs a statistical correction or a narrower assignment

**Finding:** the complete required
[Noba module](https://nobaproject.com/modules/thinking-like-a-psychological-scientist)
contains useful distinctions between observations, theories, uncertainty
and research quality, but its p-value teaching includes this sentence:

> “When researchers write that a particular finding is ‘significant at a
> p < .05 level,’ they’re saying that if the same study were repeated 100
> times, we should expect this result to occur—by chance—fewer than five
> times.”

Quotation punctuation above normalises the page's outer quotation marks;
the words are from the paragraph following the Type II error example in
[the opened module](https://nobaproject.com/modules/thinking-like-a-psychological-scientist).
Its glossary also describes NHST as determining the chances that an
“alternative hypothesis would produce a result” under the null
([Vocabulary](https://nobaproject.com/modules/thinking-like-a-psychological-scientist)).

**Why repair:** a p-value is calculated under a specified statistical
model and concerns a statistic at least as extreme as observed, not
the probability that an alternative hypothesis produces a result, that
chance caused the data, or that a repeated study will reproduce the
same result. The ASA states these boundaries explicitly
([full ASA statement, definition and principles 1–3](https://www.stat.berkeley.edu/~aldous/Real_World/ASA_statement.pdf);
[official ASA summary](https://www.amstat.org/asa/files/pdfs/P-ValueStatement.pdf)).

**Proposed owner repair:** either narrow the required Noba reading to
the nonstatistical sections, or keep it with a correction immediately
before learners reach the relevant section and exclude the incorrect
glossary sentence from retrieval practice. Do not quietly mark the
whole source “verified” and leave learners to discover the conflict.
One short replacement, grounded in the opened ASA statement:

> Under the null model and its assumptions, the p-value is the
> probability of a test statistic at least as extreme as the one
> observed. It does not tell us the probability that the hypothesis is
> true, the size or importance of the effect, or whether our own life
> will change if we act on the finding.

This is proposed curriculum wording, not a quotation from the ASA
([definition and principles 1, 2 and 5](https://www.stat.berkeley.edu/~aldous/Real_World/ASA_statement.pdf)).
The full methods guide also addresses the distinction between a
p-value and a Type I error rate
([Greenland and colleagues 2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC4877414/)).
Keep this a short correction, not an extra statistics course.

**Credential completion:** the current independent
[California Baptist institutional page](https://calbaptist.edu/academics/programs/bachelor-of-arts-psychology/)
lists Erin Smith, PhD, as Professor of Psychology and Fletcher Jones
Endowed Professor of Research. The module's own biography still says
Associate Professor; it should not be used to infer the current rank
([Noba author biography](https://nobaproject.com/modules/thinking-like-a-psychological-scientist)).
Credentials are supported; they do not remove the content problem.

## M1-V02: Preserve the paper's words without endorsing an invalid interval shortcut

**Finding:** the draft accurately attributes the overlapping-CI
interpretation to
[Woolley and colleagues' Study 1](https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/),
but then tells the learner that the authors' interpretation is the
model to follow. The source really does say that overlapping intervals
suggest the effect did not diminish significantly over time
([Hypothesis testing](https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/)).

**Why repair:** overlap of the separate intervals is not a test that
the coefficients differ or remain equal. Direct estimation or testing
of the contrast is needed; the methods guide explicitly rejects the
inference that overlapping confidence intervals imply no significant
difference
([Greenland and colleagues, misconception 21](https://pmc.ncbi.nlm.nih.gov/articles/PMC4877414/)).
Accurate attribution and sound instruction are separate checks.

**Proposed owner replacement:**

> The later point estimates are smaller. The authors describe the
> overlapping intervals as suggesting no significant decline, but
> overlap alone cannot establish that conclusion. A direct comparison
> of the coefficients, accounting for their dependence, would be needed.
> For this exercise, report the
> estimates and their uncertainty, and leave the change-over-time
> question open.

This is proposed instructional text, not a quotation. It preserves
what the
[primary study reports](https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/)
while observing the
[methods boundary](https://pmc.ncbi.nlm.nih.gov/articles/PMC4877414/).
The associated rubric should reward this distinction, not deference
to the author's shortcut.

## M1-V03: Make the panel's attrition and inference unit visible

The source recruited 2,000 participants at T1, with 1,046 at T2,
709 at T3 and 577 at T4. It used full-information maximum likelihood
for missing data and reports a similar completer-only result; this is
not evidence that all 2,000 were observed on every occasion or that
attrition could not matter
([Study 1 methods and analytic strategy](https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/)).
The paper also states that the motivation/adherence association was
primarily between people
([Study 1 hypothesis testing](https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/)).

Add the four wave counts to the worked example and distinguish
prediction among surveyed people from a claim that increasing this
learner's enjoyment will cause improvement. The draft already rejects
causation; preserve that strength while making the limitation more
concrete. A noncausal effect does not become individual treatment
guidance because the example is personally appealing.

The draft's three numerical result sets are faithful transcriptions of the opened primary
text: beta 0.216, CI [0.13, 0.30]; beta 0.099, CI [0.04, 0.20];
beta 0.080, CI [0.01, 0.15], with the stated SE, z and p values
([Study 1](https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/)).
This is a transcription check, not independent reproduction of the
analysis or a claim that each bootstrap interval was recalculated.

### Partial numerical reproduction, separate from pedagogical clearance

The public
[OSF project](https://osf.io/a9he8) exposes the data and analysis code;
the fetch service was robots-blocked, so the public browser preview
was used to inspect
[the original Study 1 R file](https://osf.io/a9he8/files/t4gda),
followed by its public file endpoints. No login or payment was used.
The reproduction used the downloaded main model string verbatim,
not an independently invented model.

Environment: R 4.5.2, lavaan 0.6-21. Data file:
`06. S1_SEM_full_sample.csv`, SHA-256
`f30c29dedb8a0be7cb7f1d1c6056ff744e33fb24793972346247fb56a49e7708`.
Original script: `10. SEM.R`, SHA-256
`82ab2d2204cec949e6e7fa7247f32eb103d9b310cf55f58843eb0ef981e526c7`.
The script's package-loading, plotting, bootstrap and supplementary
analysis blocks were not executed; the extracted main model was
fitted using its stated `missing = "ML"` option
([public source code](https://osf.io/a9he8/files/t4gda)).

The run recovered 2,000 rows, 577 complete cases and observed
adherence counts of 1,046, 709 and 577. It reproduced the standardised
point estimates 0.216, 0.099 and 0.080 and corresponding unstandardised
Wald z statistics 6.945, 2.995 and 2.355 to reported precision
([primary study and its public data link](https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/)).
This is partial numerical reproduction, not full replication or
model validation.

The paper's reported bootstrap intervals were not independently
reproduced. Analytic standardised SEs are not assumed interchangeable
with all the paper's displayed inference quantities, and no paper
error is inferred from small differences. No new cross-wave test was
run. The quoted intervals remain the authors' reported results,
not independently reproduced intervals; numerical agreement does
not validate the CI-overlap teaching
([published methods](https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/);
[interval interpretation](https://pmc.ncbi.nlm.nih.gov/articles/PMC4877414/)).

## M1-V04: Teach the EEMM as the chosen frame, not the whole science of living

The
[Hofmann–Hayes paper](https://pmc.ncbi.nlm.nih.gov/articles/PMC11303929/)
allows other useful dimensions and says there are no hard and fast
divisions. The
[Maitland section 1.4](https://pmc.ncbi.nlm.nih.gov/articles/PMC12392214/)
presents a clinical framework for contextual adaptation, not a trial
showing that teaching this frame improves an ordinary learner's life.
Keep the map's usefulness as the curriculum's proposal, not an
established causal promise.

**Proposed framing repair:** replace statements that these dimensions
are the necessary starting point of relief, wisdom or flourishing with
an invitation to try a map and evaluate its usefulness. For example:
“We will use six dimensions to describe one ordinary difficulty.
The map may help you notice an influence or an option you had missed;
it is not a diagnosis, an exhaustive account of the mind or a promise
that your circumstances will be easy to change.” This is proposed
editorial language, not a research result.

Maitland's complete title is *The extended evolutionary meta-model
and process-based therapy: Contemporary lenses for understanding
functional analytic psychotherapy*, 2024, Journal of Contextual
Behavioral Science 32, 100750; PMC hosts the author manuscript, made
available in August 2025
([article header](https://pmc.ncbi.nlm.nih.gov/articles/PMC12392214/)).
The independent
[UMKC-hosted CV](https://seswps.umkc.edu/profiles/cvs/maitland-cv-current.doc)
lists a Clinical Psychology PhD and an associate professorship at
UMKC from 2024, following BGSU in 2022–24. Do not infer a current
BGSU appointment from the manuscript's historical affiliation.

## M1-V05: Remove physiological decoration that the assigned sources do not establish

The fictional Jordan case currently asserts fitness improving with
each run and endorphins following it. The two assigned framework
excerpts discuss biophysiological levels but do not establish those
specific physiological sequences
([Hofmann–Hayes excerpt](https://pmc.ncbi.nlm.nih.gov/articles/PMC11303929/);
[Maitland section 1.4](https://pmc.ncbi.nlm.nih.gov/articles/PMC12392214/)).
A fictional case can illustrate a possibility; it should not quietly
carry unverified biomedical claims.

**Cheapest repair:** replace the sentence with an explicitly
hypothetical bodily condition, such as “Biophysiological: suppose
Jordan has slept poorly and notices fatigue before the run.”
No explanation of a neurotransmitter or guaranteed training benefit
is needed to distinguish a level of analysis. Keep all three levels
as different descriptions worth considering, not a claim that this
short case supplies a complete causal account.

## M1-V06: Reconcile the fourth required reading with the workload

The source card requires the
[Woolley article's](https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/)
abstract, introduction, Study 1 and General Discussion. The workload's
reading component explicitly counts only the two EEMM excerpts and
Noba. It then allocates 30 minutes to the worked example and faded
practice, without saying whether that includes the fourth reading.
The assignment and budget need one consistent boundary.

An independent count of the fetched text gives 1,828 words from
Abstract to the Study 1 heading (including overview and transparency),
3,012 words for Study 1 including its follow-up subsections, and 433
for General Discussion: 5,273 words before any source exercises
([assigned article](https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/)).
Method: Unicode word tokens, URL destinations and markup removed;
headings, tables and captions retained. This is an extraction-based
estimate, not an exact PDF word count or an observed learner time.

At the module's illustrative 180 words/minute rate, those passages
alone take about 29 minutes of raw reading. At 130 words/minute,
used for the other research excerpts, they take about 41 minutes;
both are assumptions, not learner measurements. Do not claim a
definite extra hour from these counts. Either explicitly budget this
reading and its study overhead, or narrow it to the exact paragraphs
and table entries the exercise needs. Do not count the same reading
twice between source study and worked-example components.

The independently extracted Noba body is 4,977 words before Outside
Resources; discussion questions and Vocabulary add 670. Maitland 1.4
is 231 words. These small differences from the owner's approximate
5,011 and 240 counts are tokenizer/boundary differences, not an
accuracy objection
([Noba](https://nobaproject.com/modules/thinking-like-a-psychological-scientist);
[Maitland](https://pmc.ncbi.nlm.nih.gov/articles/PMC12392214/)).
The needed repair is the unbudgeted required assignment and exact
stopping points, not a demand for spurious word-count precision.

## M1-V07: The first path cannot adjust for an unmeasured earlier outcome

The draft's general explanation says the panel models predict a later
outcome while accounting for its earlier levels. That applies to the
later adherence paths, but not to the first worked path. Adherence was
not measured at T1, and the
[public main-model syntax](https://osf.io/a9he8/files/t4gda)
specifies `success_Wave2 ~ IM_Wave1 + EM_Wave1`, with no earlier
adherence term. Later equations explicitly include `success_Wave2`
or `success_Wave3`, respectively
([source code](https://osf.io/a9he8/files/t4gda);
[Study 1 measures and Figure 1](https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/)).

**Proposed bounded replacement:** “The panel models include the
previous adherence measure when one exists. The first prediction,
from baseline motivation to the second survey's adherence, cannot
adjust for baseline adherence because it was not measured. The later
adherence paths include the previous survey's adherence.”

This is a qualification of the explanation, not an allegation that
the paper omitted a measured control or that the coefficient is
wrong. It gives the learner a concrete example of checking what a
model actually adjusts for instead of treating “longitudinal” or
“cross-lagged” as a guarantee of causal control.
The differing adjustment sets also make the three numbers unsuitable
for a simple like-for-like demonstration that a single relationship
weakens across time.

### Small novice-reading safeguard

The supplied code's standardised estimates match the paper's three
displayed beta values. Add one sentence before the faded exercise
explaining that these are regression coefficients, not percentage
improvements, individual success probabilities or treatment benefits
([analysis code](https://osf.io/a9he8/files/t4gda);
[reported paths](https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/)).
Do not require a novice to infer a percentage or a universal
small/medium/large label from beta 0.080.

For the first path, a proposed plain-language explanation is:
“Beta is a standardised regression coefficient. In this fitted
model, one standard deviation higher baseline intrinsic motivation
is associated with about 0.216 standard deviations higher
subsequent adherence, holding the included extrinsic-motivation
measure constant. This is an observational, model-dependent
association; 0.216 does not mean a 21.6% increase or a causal
benefit”
([published model and results](https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/)).

One proposed test response is: “This predicts an eight-per-cent
improvement for me.” The existing causal-inference rule should reject
it, and the added scale sentence would explain why the numeric
interpretation is also wrong. A response that reports the positive
model-estimated association and interval while declining a
personal-benefit claim should pass this aspect of the appraisal.
These are synthetic assessment cases, not observed learner results
or a new grading rule imposed by the verifier.

## Recheck after owner commit f9f1003c0

The owner's revision removes the original endorsement sentence about
following the authors' CI interpretation, removes endorphins and
guaranteed improvement with every run, and qualifies the three-level
claim. Those are substantive improvements to the audited draft.
The remaining statistical wording should still explicitly state that
overlap alone is not the comparison; “a caution worth carrying”
leaves that lesson ambiguous.

The unqualified required Noba NHST/glossary assignment, baseline-only
sample summary, framework-as-causal-levers opening and blanket
verification wording remain to be adjudicated, alongside the reading
budget. This recheck records the current draft, not a gate verdict.
Advisor QC independently corroborated the two statistical findings
and the bounded framing repairs; its numerical-reproduction advice
was applied above. No new course topic or extra student statistics
reading is requested.

## Recheck after owner commit fad50cb03

- **M1-V01, statistical correction present:** Step 3 now supplies
  the model-conditional p-value definition, rejects chance/hypothesis
  probability interpretations, distinguishes effect size and
  importance, and tells learners to read the vocabulary entry with
  the correction. This addresses the high-priority assignment risk;
  it does not make the original Noba sentences correct
  ([ASA principles](https://www.stat.berkeley.edu/~aldous/Real_World/ASA_statement.pdf)).
- **M1-V02, interval repair present:** the worked example explicitly
  states that overlap cannot establish the authors' conclusion,
  requires a direct comparison, and leaves the time trend open. The
  rubric rejects deferring to the overlap shortcut. The earlier
  high-priority interpretation defect is addressed
  ([interval boundary](https://pmc.ncbi.nlm.nih.gov/articles/PMC4877414/)).
- **M1-V03, main qualifiers present:** wave counts and the
  between-persons finding are included. Two small wording repairs
  remain recommended: change “later studies ... manipulate
  motivation” to “Study 4 manipulates motivational framing”, since
  Studies 2 and 3 are not randomised motivation interventions;
  replace “solid on this sample” with a model-conditional positive
  association rather than treating interval exclusion of zero as
  protection from bias or a measure of practical importance
  ([study designs](https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/);
  [statistical limits](https://pmc.ncbi.nlm.nih.gov/articles/PMC4877414/)).
- **M1-V04, substantial qualification present:** the opening now
  labels the map a proposal rather than a promise, rejects diagnosis
  and exhaustiveness, and notes circumstances may resist change.
  For the last refinement, replace “knowing which process is doing
  the work” with “asking which processes and circumstances may be
  involved”: naming a dimension does not identify an individual's
  causal mechanism
  ([framework boundaries](https://pmc.ncbi.nlm.nih.gov/articles/PMC11303929/)).
- **M1-V05, original unsupported claims removed:** guaranteed
  per-run improvement and endorphin explanation are no longer
  assigned. No added exercise-neuroscience source is requested.
- **M1-V06, arithmetic clarification still open:** the exact
  required Woolley excerpt and its place in the reading budget
  need reconciling. This is an instructional workload check, not a
  defect in the primary article.

The two high-priority findings should no longer be reported as
unrepaired in a handoff. Remaining recommendations are bounded
wording, metadata and workload work for the production owner; none
authorises this verifier to edit the owner's module or clear gates.

## Next check proposed at fad50cb03, historical

This audit is routed to the production owner and independent
pedagogical reviewer. Recheck the changed paragraphs and revised
assignment workload after the owner applies or explicitly adjudicates
these repairs; do not clear gates from this evidence file.

## Recheck after owner commit db2633a17

The revised owner file was read against the earlier findings. The
following dispositions supersede the corresponding residuals in the
`fad50cb03` recheck:

- **M1-V03 wording repaired:** the example now names Study 4's
  randomised framing and uses model-conditional association wording.
  The wave counts, attrition qualification and between-person
  distinction remain present.
- **M1-V04 wording repaired:** the opening now asks which processes
  and circumstances may be involved. This removes the implication
  that assigning a dimension identifies the operative cause.
- **M1-V06 required-reading mismatch repaired:** Woolley is now
  optional in both Step 4 and the workload explanation. The worked
  example supplies the relevant numbers, so the 5,273-word source
  excerpt is no longer an unbudgeted requirement. The counts above
  describe the earlier assignment, not the revised learner workload.
- **Minor arithmetic residual:** the listed components
  105 + 15 + 30 + 30 + 60 sum to 240 minutes, whereas the prose says
  about 245. The correction passage is explicitly inside the
  105-minute reading allowance. Use one consistent approximate
  total; no extra task or reading is requested.
- **M1-V07 remains for owner adjudication:** the general model
  explanation still says it accounts for earlier outcome levels
  without the first-path exception. The beta-scale safeguard above
  remains a proposed addition. Advisor QC independently checked the
  wording against the first equation and its standardised estimate.
- **Bibliographic presentation:** the Maitland link uses a shortened
  title. Its complete title is supplied above; using a shortened
  display title is not itself evidence that the wrong paper was
  linked.

This is a source-audit status update. M1 remains DRAFT NOT CLEARED;
the stop-gate ruling and independent pedagogical review belong to
the authorised reviewers. No new statistical analysis, module
content or gate decision was made by this verifier.

## Recheck after owner commit 59f2ef8aa

The current module and the owner's response record were read, rather
than inferring completion from the commit message.

- **M1-V07 baseline exception repaired:** the lesson now states that
  adherence was measured only at the follow-up surveys and therefore
  could not be adjusted for at baseline in the first prediction.
  The partially worked second example explicitly names the different
  adjustment set. The paper's measurement schedule supports the
  explanation independently of whether the lesson links the code
  ([Study 1 Method](https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/)).
- **Beta safeguard repaired:** before faded practice, the lesson
  says the betas are regression coefficients, not percentage
  improvements, individual success probabilities or treatment
  benefits. The owner used that source-limited formulation rather
  than asserting a standardisation detail not stated in the paper.
  The more specific alternative wording above remains a verifier
  proposal corroborated by the independently opened code and saved
  `std.all` output; it is not a required replacement for the owner's
  adequate scale caution
  ([reported coefficients](https://pmc.ncbi.nlm.nih.gov/articles/PMC13428958/);
  [analysis code](https://osf.io/a9he8/files/t4gda)).
- **Workload total repaired:** the current page states about
  240 minutes and itemises 105 + 15 + 30 + 30 + 60. The correction
  passage remains inside the reading allowance and the Woolley
  paper remains optional.
- **Earlier repairs preserved:** the Noba correction, rejection of
  overlap-as-test, model-conditional association wording,
  between-person qualification, attrition counts, Study 4 framing
  description and noncausal process-map wording remain present.

No M1-V01–07 repair is outstanding in this checked version.
This is not a new analysis, a full replication, a learner test,
independent pedagogical clearance or a production stop-gate ruling.
The module remains labelled DRAFT NOT CLEARED.
