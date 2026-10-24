# Dossier structural voice audit

Latest owner clarification: the mission covers every AI-sounding output
type in the WHOLE PROJECT. This dossier inventory is one diagnostic slice.
It cannot be represented as completion of the broader editorial task.

## Owner's actual correction

The owner is identifying the recurring rhetorical construction
"This is not X, it is Y" and "not X, but Y". The task is to remove this
recognisable scaffold throughout dossiers. Improving the semantic
accuracy of X or Y leaves the structural problem in place.

The owner also rejected decorative metaphors, overloaded quotations and
link underlining. These are separate defects. Do not substitute an audit
of one defect for work on the others.

## Current review status

GF is an unfinished candidate, not an approved exemplar. Its opening and
classical section have been rewritten. Underlining has been removed from
dossier CSS. Further structural review is required across its full body
and across the other22 dossiers.

An independent advisor read the opening two prose lines of all23 dossiers
and samples from the bodies of Attention and Life's Purpose. This was a
partial review, not a full semantic or factual audit. The advisor found
repeated metaphor definitions, forced contrasts, generic claims about
traditions agreeing, and card-gloss catalogues.

## Repeatable structural inventory

Run `python3 scripts/dossier_voice_audit.py`. It reports file, line, pattern
and complete visible prose for all23 dossier manuscripts. Tests:
`python3 scripts/tests/test_dossier_voice_audit.py`.

The inventory excludes blockquoted primary passages. It deliberately
flags legitimate comparisons and evidence caveats for human review too.
Preserve facts, qualifications, source quotations and internal links.
Recast rhetorical scaffolds into direct statements. For competing views,
explain each view separately. Do not mechanically delete every negation.

The tool is a diagnostic aid. Zero matches cannot certify natural prose.
Read each complete dossier after revision. Obtain owner validation of GF
before using it for a six-agent rollout. Coordinate baton ownership and
avoid overwriting active workers' files.

## Persisted inventory

`docs/enrichment/sources/dossiers/voice-audit-2026-10-24.jsonl` contains
23 dossier records and166 candidate lines. GF has13 candidates at this
checkpoint, comprising12 “rather than” instances and one adjacent-sentence
candidate. These counts include legitimate qualifications and comparisons.
The exact direct “not X, but Y” detector has no GF matches; that does not
make GF approved, nor show that all structurally equivalent forms are gone.
