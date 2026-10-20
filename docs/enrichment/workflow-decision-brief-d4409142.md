# Workflow acceleration: owner decision brief

Independent advisor assessment, 20 October 2026. The quantitative snapshot is
commit `cf6472d5`, 05:45:59 UTC; other workers continued committing afterwards.
This is a read-only feasibility assessment, not authorization to change the
workflow or launch workers.

## Recommendation

Keep the evidence and writing standards. Approve a 60–90-minute representative
pilot before committing to a 24-hour whole-queue target. The current workflow is
not demonstrably optimal: available principles, source reuse and supervision can
be scheduled better, while the sourcing, preservation and QC gates remain
necessary ([repository protocols](https://github.com/Clemvillatte/flourishing-compendium),
[principle requirements](https://github.com/Clemvillatte/flourishing-compendium/blob/cf6472d5/docs/enrichment/PROTOCOL-PRINCIPLES.md)).

A few-hour finish for the whole queue is not credible with the current staffing.
A 24-hour target is conditionally plausible with substantially more productive
workers and adequate supervision and QC, subject to the assumptions below.
Neither the pilot nor scaling has been implemented.

## Scope and remaining work

The advisor independently reconciled unique queue identifiers with completion
records belonging to their own manifests. At the frozen snapshot, 1,280
principles and 1,978 concepts remained, 3,258 queued records altogether; this is
seven fewer than the earlier estimate because work continued during assessment
([snapshot repository](https://github.com/Clemvillatte/flourishing-compendium/tree/cf6472d5),
[earlier estimate and counting method](https://github.com/Clemvillatte/flourishing-compendium/blob/cf6472d5/docs/enrichment/remaining-estimate-d4409142.md)).

These are administrative completion records, not independently certified pages.
One concept record, Character as habits, refers to a merged page needing
administrative reconciliation rather than rewriting; the queued pass also
excludes an independent audit of all past work and untriaged stories, sayings
and practice kernels ([operations record](https://github.com/Clemvillatte/flourishing-compendium/blob/cf6472d5/docs/enrichment/OPERATIONS.md),
[scope limits](https://github.com/Clemvillatte/flourishing-compendium/blob/cf6472d5/docs/enrichment/remaining-estimate-d4409142.md)).

The remaining graph is mostly low-degree: 1,959 existing concept pages have
fewer than 15 connections, and 18 have 15–29; one queue record has no current
page because of the merge. Low degree makes the existing concept fast-track
potentially applicable, but ownership, unresolved findings and source-defined
existence must still be checked ([snapshot](https://github.com/Clemvillatte/flourishing-compendium/tree/cf6472d5),
[concept eligibility rules](https://github.com/Clemvillatte/flourishing-compendium/blob/cf6472d5/docs/enrichment/PROTOCOL.md)).

Most cannot simply be declared adequate: the advisor found fewer than 40
explanatory words in 1,966 of the 1,977 existing remaining concepts. That
calculation indicates substantial real writing work, rather than a large
backlog of already-finished pages ([snapshot content and queue records](https://github.com/Clemvillatte/flourishing-compendium/tree/cf6472d5)).

## Timing: assumptions rather than promises

At its fixed snapshot the advisor counted 83 net own-manifest completion
additions in the preceding hour, 289 in three hours and 448 in six hours.
These imply roughly 75–96 administrative completions per hour, not audited
acceptances; rebases, inherited work and repairs limit extrapolation
([snapshot history](https://github.com/Clemvillatte/flourishing-compendium/commits/cf6472d5),
[counting caveats](https://github.com/Clemvillatte/flourishing-compendium/blob/cf6472d5/docs/enrichment/remaining-estimate-d4409142.md)).

At those rates, the remaining queue alone represents approximately 34–44 hours
of production if the rate were sustained. This arithmetic excludes uncounted
acceptance and integration work, and does not establish that a continuously
available fleet actually exists.

For staffing scenarios, the advisor assumed 3–5 direct minutes per item, 25%
additional time for QC, coordination and repair, and 75% productive utilization.
These are planning assumptions, not a measured corpus-wide average.

| Target duration | Content-worker concurrency required under those assumptions |
|---|---:|
| 3 hours | approximately 91–151 |
| 6 hours | approximately 46–76 |
| 12 hours | approximately 23–38 |
| 24 hours | approximately 12–19 |

Dedicated supervision and sufficient advisor/QC capacity are additional needs.
An aggressive two-minute direct average would bring the 24-hour arithmetic
close to eight workers, but that average has not been demonstrated across the
remaining corpus. More workers can also create push contention and QC queues.

The model is:

\[
H = \frac{3{,}258 \times m}{60} \times 1.25,
\qquad
T = \frac{H}{W \times 0.75}
\]

Here \(m\) is assumed direct minutes per item, \(H\) includes the overhead
allowance, and \(W\) is the number of content workers. This estimates labour
capacity, not a resource-cost budget or guaranteed elapsed time.

## What should and should not change

- **Scheduling improvements:** keep enough principle reserves ready; group
  related items by sources within permitted ownership; reuse passages actually
  opened when they genuinely support another item; read changed instructions
  rather than repeatedly rereading unchanged material. These approaches fit
  the existing proportional-research directives, but no operational change is
  being made before your decision ([principle speed directives](https://github.com/Clemvillatte/flourishing-compendium/blob/cf6472d5/docs/enrichment/PROTOCOL-PRINCIPLES.md),
  [taskboard](https://github.com/Clemvillatte/flourishing-compendium/blob/cf6472d5/docs/enrichment/TASKBOARD.md)).
- **Quality gates to retain:** source passages actually opened; exact quotation
  and locator checks; honest separation of empirical evidence, interpretation
  and practice advice; source notes; protected metadata and original links;
  validation; first-item, milestone and uncertainty-triggered advisor review
  ([concept protocol](https://github.com/Clemvillatte/flourishing-compendium/blob/cf6472d5/docs/enrichment/PROTOCOL.md),
  [principle protocol](https://github.com/Clemvillatte/flourishing-compendium/blob/cf6472d5/docs/enrichment/PROTOCOL-PRINCIPLES.md)).
- **Persistence and supervision:** retain state-change and per-item pushes and
  dedicated supervisor capacity. The advisor found inconsistent once-per-item
  versus every-state wording, and a tension between dedicated supervision and
  supervisor-held concept work; clarify those rather than silently adopting
  whichever interpretation is faster ([taskboard](https://github.com/Clemvillatte/flourishing-compendium/blob/cf6472d5/docs/enrichment/TASKBOARD.md),
  [operations](https://github.com/Clemvillatte/flourishing-compendium/blob/cf6472d5/docs/enrichment/OPERATIONS.md)).
- **No new principle fast-track:** degree below 30 and 40–120 words was an
  assessment hypothesis, not an owner-approved rule. The governing standard
  remains 40–300 prose words with specific explanation, genuine Plain words,
  a concrete example and all evidence/preservation/QC duties; a shorter text
  may fit the existing range without waiving any duty
  ([committed principle protocol](https://github.com/Clemvillatte/flourishing-compendium/blob/cf6472d5/docs/enrichment/PROTOCOL-PRINCIPLES.md)).

## Your choices

| Choice | What you would authorize | Trade-off |
|---|---|---|
| A. Pilot first, then decide | A 60–90-minute scheduling/measurement pilot; no automatic fleet expansion or rule change | Best information before committing to a deadline; no promise of whole-queue completion |
| B. Keep the current approach | Same scope, safeguards and staffing; accept a multi-day horizon | Lowest disruption, but coordination delays remain unless separately addressed |
| C. Prioritize essay-ready material | A named subset for completion within 24 hours, with the rest explicitly deferred | Most defensible route to useful material quickly; not a claim that the whole wiki is finished |
| D. Run a 24-hour production tranche | Same quality requirements; maximize accepted output in a fixed window, then reforecast | A clear timebox without a misleading whole-corpus promise |

The recommended choice is A, followed by a separate decision about conditional
scaling or C if the measured result does not support a whole-queue deadline.
Choosing A alone does not authorize launching 12–24 workers.

## Proposed pilot, only if approved

Use four disjoint owned workloads and approximately 20–40 representative
items, covering principles, low-degree concepts, normal-track concepts and
awkward-source cases. Measure source acquisition, drafting, pushes, QC waiting,
repairs and accepted output separately. Confirm representative sustained output
in a later two-hour window before broad expansion.

Keep all existing gates, including every-state/item pushes, batons, opened
sources and ledgers, explicit validator baselines, first-item/every-fifth/
uncertainty advisor checks and supervisor milestones. Expand only if accepted
throughput supports the deadline with slack and the QC backlog remains bounded
([current operating safeguards](https://github.com/Clemvillatte/flourishing-compendium/blob/cf6472d5/docs/enrichment/TASKBOARD.md)).

An unresolved invented quotation, unsupported factual addition or preservation
violation stops expansion for repair. The response to a failed pilot is a
reforecast or narrower scope, not lower content standards.

## Status at delivery

No workflow document, queue, shared progress file or validation rule has been
changed for acceleration. The independent assessment did not launch production
workers or change repository files. Ordinary enrichment continued only under
the existing protocol while the assessment ran; all local completed work was
checkpointed to GitHub before presenting these choices.
