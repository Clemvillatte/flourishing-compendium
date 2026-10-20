# Remaining enrichment estimate

Snapshot: 20 October 2026, approximately 05:30 UTC. Prepared by session
d4409142 from a fresh clone and origin/main, with the live supervisor active.

## Working estimate

The queued principles-and-concepts pass has approximately 3,265 items left:
1,281 principles and 1,984 concepts. For planning, allow 3–7 days of sustained
multi-worker operation, then a further 1–2 weeks for an evidence and consistency
audit if the owner wants that separate scope. These are conditional judgement
ranges, not a completion promise. Runtime interruptions, worker availability,
access problems and failed QC can extend elapsed time substantially.

The 3–7-day range assumes roughly six productive workers, with work redistributed
as bands close. At an assumed blended 5–10 minutes per queued item, 3,265 items
require about 272–544 worker-hours before overhead. Adding 25% for coordination,
QC and repair gives roughly 340–680 worker-hours, or 57–113 hours with six workers
working continuously. Calendar planning needs slack beyond that arithmetic.
The audit range is a provisional allowance, not a measured estimate: no full
audit manifest has been counted.

## Counting method

Read each committed principle/concept manifest and count its own items present in
that band's `done` list. Count each identifier once. Do not count off-manifest
repair records as extra completed items. Compare those identifiers with the
current committed queues without regenerating or editing either queue.

| Measure | Principles | Concepts |
|---|---:|---:|
| Current content pages | 2,183 | 2,260 |
| Entries in committed weak queue | 1,773 | 2,189 |
| Unique manifest assignments | 928 | 2,189 |
| Manifest items recorded done | 890 | 205 |
| Queue items among those done | 492 | 205 |
| Queued items not recorded done | 1,281 | 1,984 |
| Unassigned queue items | 1,243 | 0 |

The principle queue is a changing weak-page snapshot. Some completed manifest
items are no longer in that queue; subtracting all 890 completion records from
1,773 would undercount the backlog. Conversely, a completion marker is not proof
that every retained assertion has been independently audited.

The completed-manifest count leaves 1,293 current principle pages and 2,055
current concept pages without a manifest completion record, 3,348 pages in total.
That is an upper review pool, not evidence that every one needs rewriting:
some pages were already adequate and excluded from the weak queues. There may
also be repaired or enriched pages whose work is recorded elsewhere.

## Observed throughput and scope limits

Comparing current batch `done` lists with their versions before the oldest commit
in each recent log window gave the following net completion additions:

| Window | Principles | Concepts | Combined per hour |
|---|---:|---:|---:|
| Last hour | 40 | 80 | 120 |
| Last three hours | 234 | 85 | about 106 |
| Last six hours | 357 | 85 | about 74 |

These are state additions, not independent acceptance counts. Fast-track work,
skip-ahead checks, reopenings, inherited flags and record corrections can affect
them. Extrapolating the recent 106–120/hour burst would suggest about 27–31 hours
for the queued pass, but that is an optimistic arithmetic floor and is not the
planning forecast.

“Finish the wiki” is wider than this pass unless the owner defines otherwise.
The repository also has 305 kernel, 336 story and 128 saying pages, plus 505
structure files. They have not been individually triaged here, and this estimate
does not silently classify all of them as either finished or needing rewriting.
Outstanding source repairs and proposal integration remain separate acceptance
work. No claim of zero hallucinations follows from these counts.

Repository inspected: [flourishing-compendium](https://github.com/Clemvillatte/flourishing-compendium).
The reproducible local evidence is the committed `bands/*-manifest.json`,
`batches/*.json`, `queue-principles.json`, `queue-concepts.json`, current
`content/` filenames and Git history. No queue or shared progress file was changed.
