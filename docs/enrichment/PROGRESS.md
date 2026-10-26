# Enrichment progress dashboard

As of 2026-10-26 00:11 UTC (input revision `7c4b3190f`). Scope: principles and concepts enrichment, plus a count-only view of the separate stories pipeline. Refreshed at every supervisor pass and at every shift start; next update due by 01:11 UTC.

"Recorded done" = listed in a band state file after validation; it does not by itself certify that every claim passed source QC. "Not recorded done" = the remaining backlog.

## Overall

| Type | Recorded done | Not recorded done | Total | Done % |
|---|---|---|---|---|
| Principles | 2182 | 0 | 2182 | 100.0% |
| Concepts | 2263 | 0 | 2263 | 100.0% |
| **Combined** | **4445** | **0** | **4445** | **100.0%** |

## Stories (separate pipeline)

Published story pages (content/stories/ST*.md): 468. The per-lane rows below are LANE-REPORTED statuses from the lane state files, NOT reconciled against actual registrations (a lane may report "ready" for a story already published; the published-page count above is the reconciled figure). qc_pending = awaiting lane QC; other = returned or backlinks pending. Lanes are listed in STORIES-TASKBOARD.md; storytellers never touch concept/principle pages.

| Lane | Published (lane-reported) | Ready (lane-reported) | QC pending | Other |
|---|---|---|---|---|
| s1a | 0 | 56 | 16 | 3 |
| s1b | 0 | 33 | 0 | 5 |
| s1c | 0 | 38 | 1 | 0 |
| s1d | 3 | 5 | 2 | 0 |
| s1e | 2 | 6 | 0 | 0 |
| s1f | 0 | 10 | 0 | 0 |
| **All lanes** | **5** | **148** | **19** | **8** |

## Kernels and thinkers (enrichment programs)

Kernel pages live in `content/kernels/`; thinker pages in `content/thinkers/`. Recorded-done counts come from the kernel band state files. The kernel queue is not trimmed of already-enriched items, so raw queue length overstates the remaining work; the rows below separate them. Metric shown: recorded-done coverage of existing kernel pages = (distinct kernel IDs in band done lists that have a current page) / (kernel pages). No completion percentage is shown for thinkers or stories: no completion denominator is defined for either program (the thinkers band t1a, minted 2026-10-22, covers a 12-thinker slice of the queue).

| Program | Pages | Done entries (bands) | Distinct done K-IDs | Done K-IDs with a page | Recorded-done coverage of pages | Queue (raw) | Queued IDs not in done |
|---|---|---|---|---|---|---|---|
| Kernels | 316 | 1761 (cmp, k1a, k1b, k1c, k1d, k1e, k1f, kpr, maintenance, t2a, t2b, t2c) | 316 | 316 | 100.0% | 216 | 0 |
| Thinkers | 60 | N/A (no done-count percentage; see note) | — | — | N/A: no defined completion denominator | 59 | — |

- Thinker reconciliation: 60 thinker page(s) exist (T001, T002, T003, T004, T005…); the thinker queue holds 59 entries; thinkers band t1a minted 2026-10-22 with 12 thinkers assigned, 12 recorded done. No completion percentage is computed: the program has no defined completion denominator.
- Kernel reconciliation: 206 kernel IDs are recorded in more than one done entry (duplicate records, counted once; the current overlap is ['K109', 'K112', 'K115', 'K117', 'K118', 'K119', 'K123', 'K124', 'K126', 'K128', 'K129', 'K130', 'K132', 'K133', 'K134', 'K137', 'K138', 'K139', 'K142', 'K143', 'K145', 'K147', 'K148', 'K149', 'K155', 'K157', 'K159', 'K160', 'K162', 'K166', 'K169', 'K170', 'K171', 'K173', 'K174', 'K175', 'K176', 'K179', 'K181', 'K183', 'K185', 'K186', 'K187', 'K188', 'K189', 'K190', 'K191', 'K197', 'K198', 'K202', 'K203', 'K205', 'K206', 'K207', 'K208', 'K209', 'K210', 'K212', 'K213', 'K214', 'K217', 'K218', 'K219', 'K220', 'K224', 'K225', 'K226', 'K228', 'K231', 'K232', 'K233', 'K235', 'K238', 'K240', 'K241', 'K243', 'K244', 'K247', 'K248', 'K249', 'K250', 'K251', 'K252', 'K253', 'K254', 'K257', 'K258', 'K259', 'K260', 'K261', 'K262', 'K263', 'K264', 'K265', 'K266', 'K267', 'K268', 'K269', 'K270', 'K271', 'K272', 'K273', 'K274', 'K276', 'K277', 'K278', 'K279', 'K280', 'K281', 'K282', 'K283', 'K284', 'K285', 'K286', 'K287', 'K288', 'K290', 'K291', 'K292', 'K293', 'K294', 'K295', 'K296', 'K297', 'K298', 'K303', 'K304', 'K305', 'K309', 'K310', 'K311', 'K312', 'K313', 'K314', 'K315', 'K317', 'K318', 'K320', 'K321', 'K322', 'K324', 'K327', 'K328', 'K329', 'K330', 'K333', 'K336', 'K337', 'K342', 'K348', 'K350', 'K351', 'K355', 'K356', 'K357', 'K358', 'K359', 'K360', 'K361', 'K362', 'K363', 'K364', 'K365', 'K366', 'K367', 'K368', 'K369', 'K370', 'K371', 'K372', 'K373', 'K374', 'K375', 'K376', 'K377', 'K380', 'K381', 'K383', 'K385', 'K386', 'K387', 'K388', 'K389', 'K390', 'K391', 'K392', 'K393', 'K394', 'K395', 'K396', 'K397', 'K398', 'K399', 'K400', 'K401', 'K402', 'K403', 'K404', 'K405', 'K407', 'K408', 'K411', 'K414', 'K415', 'K417', 'K419'] — recorded both by K-ID and by title); 4 done entries are recorded by title rather than K-ID (matched to their K-pages by title); 0 recorded-done kernel IDs have no current page; 0 kernel pages are not recorded done; 0 queued IDs are absent from the done set (a queue-set figure, not a page count — the queue is not trimmed of done items and needs reconciliation).
- Stories carry no completion denominator in their registry; the Stories section above reports counts only.

## Principles by forest

| Forest | Recorded done | Total | Done % |
|---|---|---|---|
| B — Buddhist Principles | 198 | 198 | 100.0% |
| P — Pragmatist and Process Principles | 196 | 196 | 100.0% |
| D — Daoist Principles | 192 | 192 | 100.0% |
| S — Classical Stoicism | 140 | 140 | 100.0% |
| Y — Yoga-Vedanta Principles | 132 | 132 | 100.0% |
| R — Relational Philosophies | 130 | 130 | 100.0% |
| A — Aristotelian Virtue Ethics and Practical Wisdom | 122 | 122 | 100.0% |
| E — Existentialism and Phenomenology | 113 | 113 | 100.0% |
| SP — Spinozism Principles | 96 | 96 | 100.0% |
| AF — Affect | 84 | 84 | 100.0% |
| CO — Cognition | 83 | 83 | 100.0% |
| SE — Self | 82 | 82 | 100.0% |
| PP — Positive Psychology and Wellbeing Science | 82 | 82 | 100.0% |
| AT — Attention | 78 | 78 | 100.0% |
| BE — Overt Behavior | 78 | 78 | 100.0% |
| MO — Motivation | 76 | 76 | 100.0% |
| SO — Sociocultural | 76 | 76 | 100.0% |
| BI — Biophysiological | 72 | 72 | 100.0% |
| K — Kyoto-School and Tibetan Principles | 71 | 71 | 100.0% |
| M — Mesoamerican Principles | 55 | 55 | 100.0% |
| X — Extra Principles | 26 | 26 | 100.0% |

## Reconciliation notes

- Recorded-done principle IDs with no current page: 16 (K115 Willingness practice, K159 Affect labeling, K371 Importance and confidence rulers, K373 Notice the fixing reflex, K374 What happened to you, K375 Setback not relapse, K376 Give complex affirmations, K377 Offer two or three options, K380 The Two Teachers, K381 Compassionate Thinking…)
- Recorded-done concept titles with no current page (even after normalizing punctuation): 21 (2026-10-25 publish-then-review pass: advisor QC fixes applied (unsupported opposition removed, resource-account framing neutralized, Logie 2016 original opened and quoted, 5 on-theme cards linked), checks green, published, Character as habits, Language spinning beyond the world, MBCT, affect…)
- Concept records are matched to pages on alphanumeric-normalized titles, so renames between colon and dash forms do not show as unmatched; true renames or deletions appear above and are counted as done, not as backlog.

Generated by `python3 scripts/enrich_progress_report.py` — read-only; never touches the queues.
