# Enrichment progress dashboard

As of 2026-10-23 06:13 UTC (input revision `454f7eb`). Scope: principles and concepts enrichment, plus a count-only view of the separate stories pipeline. Refreshed at every supervisor pass and at every shift start; next update due by 07:13 UTC.

"Recorded done" = listed in a band state file after validation; it does not by itself certify that every claim passed source QC. "Not recorded done" = the remaining backlog.

## Overall

| Type | Recorded done | Not recorded done | Total | Done % |
|---|---|---|---|---|
| Principles | 2170 | 12 | 2182 | 99.5% |
| Concepts | 2168 | 93 | 2261 | 95.9% |
| **Combined** | **4338** | **105** | **4443** | **97.6%** |

## Stories (separate pipeline)

Published story pages (content/stories/ST*.md): 433. The per-lane rows below are LANE-REPORTED statuses from the lane state files, NOT reconciled against actual registrations (a lane may report "ready" for a story already published; the published-page count above is the reconciled figure). qc_pending = awaiting lane QC; other = returned or backlinks pending. Lanes are listed in STORIES-TASKBOARD.md; storytellers never touch concept/principle pages.

| Lane | Published (lane-reported) | Ready (lane-reported) | QC pending | Other |
|---|---|---|---|---|
| s1a | 0 | 16 | 20 | 3 |
| s1b | 0 | 23 | 0 | 3 |
| s1c | 0 | 38 | 1 | 0 |
| s1d | 3 | 7 | 0 | 0 |
| s1e | 2 | 0 | 6 | 0 |
| s1f | 0 | 2 | 1 | 0 |
| **All lanes** | **5** | **86** | **28** | **6** |

## Kernels and thinkers (enrichment programs)

Kernel pages live in `content/kernels/`; thinker pages in `content/thinkers/`. Recorded-done counts come from the kernel band state files. The kernel queue is not trimmed of already-enriched items, so raw queue length overstates the remaining work; the rows below separate them. Metric shown: recorded-done coverage of existing kernel pages = (distinct kernel IDs in band done lists that have a current page) / (kernel pages). No completion percentage is shown for thinkers or stories: no completion denominator is defined for either program (the thinkers band t1a, minted 2026-10-22, covers a 12-thinker slice of the queue).

| Program | Pages | Done entries (bands) | Distinct done K-IDs | Done K-IDs with a page | Recorded-done coverage of pages | Queue (raw) | Queued IDs not in done |
|---|---|---|---|---|---|---|---|
| Kernels | 316 | 134 (k1a, k1b, kpr) | 133 | 133 | 42.1% | 216 | 119 |
| Thinkers | 21 | N/A (no done-count percentage; see note) | — | — | N/A: no defined completion denominator | 36 | — |

- Thinker reconciliation: 21 thinker page(s) exist (T001, T002, T003, T004, T005…); the thinker queue holds 36 entries; thinkers band t1a minted 2026-10-22 with 12 thinkers assigned, 8 recorded done. No completion percentage is computed: the program has no defined completion denominator.
- Kernel reconciliation: 1 kernel IDs are recorded in more than one done entry (duplicate records, counted once; the current overlap is ['K112'] — recorded both by K-ID and by title); 4 done entries are recorded by title rather than K-ID (matched to their K-pages by title); 0 recorded-done kernel IDs have no current page; 183 kernel pages are not recorded done; 119 queued IDs are absent from the done set (a queue-set figure, not a page count — the queue is not trimmed of done items and needs reconciliation).
- Stories carry no completion denominator in their registry; the Stories section above reports counts only.

## Principles by forest

| Forest | Recorded done | Total | Done % |
|---|---|---|---|
| M — Mesoamerican Principles | 53 | 55 | 96.4% |
| Y — Yoga-Vedanta Principles | 129 | 132 | 97.7% |
| SP — Spinozism Principles | 94 | 96 | 97.9% |
| B — Buddhist Principles | 195 | 198 | 98.5% |
| K — Kyoto-School and Tibetan Principles | 70 | 71 | 98.6% |
| P — Pragmatist and Process Principles | 195 | 196 | 99.5% |
| D — Daoist Principles | 192 | 192 | 100.0% |
| S — Classical Stoicism | 140 | 140 | 100.0% |
| R — Relational Philosophies | 130 | 130 | 100.0% |
| A — Aristotelian Virtue Ethics and Practical Wisdom | 122 | 122 | 100.0% |
| E — Existentialism and Phenomenology | 113 | 113 | 100.0% |
| AF — Affect | 84 | 84 | 100.0% |
| CO — Cognition | 83 | 83 | 100.0% |
| SE — Self | 82 | 82 | 100.0% |
| PP — Positive Psychology and Wellbeing Science | 82 | 82 | 100.0% |
| AT — Attention | 78 | 78 | 100.0% |
| BE — Overt Behavior | 78 | 78 | 100.0% |
| MO — Motivation | 76 | 76 | 100.0% |
| SO — Sociocultural | 76 | 76 | 100.0% |
| BI — Biophysiological | 72 | 72 | 100.0% |
| X — Extra Principles | 26 | 26 | 100.0% |

## Reconciliation notes

- Recorded-done principle IDs with no current page: 4 (A040-A041-A047 recreation, E038-S051 recreation, K060 recreation, PP059)
- Recorded-done concept titles with no current page (even after normalizing punctuation): 11 (Aristotle, Baruch Spinoza, Character as habits, Epictetus, Friedrich Nietzsche…)
- Concept records are matched to pages on alphanumeric-normalized titles, so renames between colon and dash forms do not show as unmatched; true renames or deletions appear above and are counted as done, not as backlog.

Generated by `python3 scripts/enrich_progress_report.py` — read-only; never touches the queues.
