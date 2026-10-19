# Owner update: continuous work and evidence corrections

Issued with owner authorization on 19 October 2026. This update supplements OPERATIONS
and both content protocols; it does not transfer existing band ownership.

## Keep working

The owner's explicit direction is that agents keep going unless explicitly asked to stop.
Completing a pass or band is not an end of assignment. Workers move to the next available
priority work. The supervisor must continue monitoring the board and the repository,
including during quiet periods, with bounded waits and regular heartbeats.

Do not voluntarily end with a "session complete" or "pass complete" message while authorized
work remains. If a platform/runtime limit forces an end, push all recoverable work, record
the next action, and make the interruption honest. No instruction can guarantee that a
terminated runtime keeps executing.

## Current maintenance scope

The owner authorized genuineflourishing25 in the audit task to repair shared instructions,
integration safety, build-root portability, and validator preservation checks under the
separate `maintenance` baton. This is NOT a claim of the supervisor or a content band.
The maintenance agent will not run production integration, change queues/progress, or edit
another worker's content. The live supervisor keeps authority over those operations.

Supervisor: pull and review these changes before the next integration. Continue other
monitoring and QC; no general work stoppage is requested.

The read-only proposal preflight found one unresolved target in `proposals/w1b.json`:
reciprocal record 31 (zero-based), `content/concepts/Li: ritual propriety.md` linking to `Ren`.
The responsible worker or supervisor must resolve the intended entry explicitly; do not
guess a replacement. The repaired integration script rejects unresolved records before
any writes, rather than archiving and silently losing them. Legacy `target`/`concept`
records are now supported, so bulk normalization of that worker's file is unnecessary.

## Targeted correction requests

- **p1d, BI012:** correct the Carter quotation's "in a word" to "in one word". Distinguish
  Epictetus's body/choice distinction from the compendium's modern interpretation of mood.
  Remove unsupported clinical-priority advice; the Bode paper establishes a modest association
  with clinical depression, not an individual diagnosis or a causal account of motivation.
  The thyroid example needs a checkable source or replacement. Do not claim stub concepts
  develop an argument they do not contain. Recheck the current version, since some wording
  has already changed.
  Opened sources: https://classics.mit.edu/Epictetus/epicench.html and
  https://pubmed.ncbi.nlm.nih.gov/34524390/
- **p1d, CO072:** Aristotle's stone passage concerns moral habituation, not evidence of
  general cognitive endurance. Ericsson's musician comparisons do not establish general
  endurance or social-media detraining. Mark analogies as analogies and remove unsupported
  causal claims in the retained example. A later added training study does not automatically
  support the whole regimen or generalization. Obtain independent advisor approval of the
  inference, not only quote fidelity.
  Opened sources: https://classics.mit.edu/Aristotle/nicomachaen.2.ii.html and
  https://gwern.net/doc/psychology/1993-ericsson.pdf
- **p1b, E012:** attribute the slipping-back reading to Walsh. Trace "once and for all" to
  Husserl's Crisis §40, p. 150, quoted by Walsh p. 217; Walsh uses it as part of repeated
  habitual practice, not an objection to it. Use Walsh pp. 222–223 for renewed practice.
  Opened source: https://journals.ku.edu/auslegung/article/download/12981/12277/25612
- **Responsible concept worker:** on "Phenomenological methods in psychology", verify or
  soften the claim that experience sampling grew from Husserlian phenomenology. A study
  using ESM does not establish that genealogy.
  Opened history: https://pmc.ncbi.nlm.nih.gov/articles/PMC2773515/

These requests are repairs within existing ownership, not reasons to stop the whole team.
Prioritize the affected page before starting another new page in that band. Supervisor:
track acknowledgment and verify the correction rather than treating this notice as proof
that the worker has acted.

## Evidence gate

Before publication or a done transition:

- Check every new factual claim against an actually opened source, not merely a relevant
  title, abstract, or quotation.
- Verify quoted words exactly in the named translation. Record locator and opened URL.
- Keep observation, association, causal evidence, philosophical interpretation, and practical
  suggestion distinct. A striking analogy is not empirical evidence.
- Plain words must explain rather than repeat and must not introduce unsupported facts.
- Keep an item-level source ledger under `sources/<band>/` with supported passages,
  limitations, and access failures. Increment source counts honestly using `enrich_state.py`.
- Obtain advisor QC on the first item and at milestones; resolve identified errors before
  moving a draft into `content/` or calling it done. Preserve protected originals, and flag
  inherited unsupported claims instead of silently treating them as verified.

Research should remain proportional. A few directly supporting sources are preferable to
many loosely relevant citations; evidence quality takes precedence over throughput.
