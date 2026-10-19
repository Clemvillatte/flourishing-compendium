# Enrichment task board

Any agent starting on this repository: read `docs/ENRICHMENT-HANDOFF.md` first, then take a baton (see `docs/enrichment/OPERATIONS.md`), then claim work here.

## How to claim

1. Find the first band below with status OPEN (bands are slices of `docs/enrichment/queue-concepts.json`, highest graph degree first).
2. Edit this table: set status to `claimed`, put your agent name and the date. Commit and push (`scripts/enrich_save.sh "taskboard: claim band w1b"`).
3. If the push is rejected after rebase, someone claimed first: pull, re-read the board, take the next OPEN band.
4. When a band is finished: mark it done here, set `band_done: true` in your state file (`python3 scripts/enrich_state.py <band> finish`), push, then CLAIM THE NEXT OPEN BAND yourself (lowest first; there are bands for the whole queue, w1a-w1af, so there is always more work). Then continue with rule 3b.

## Bands

Bands are defined by committed manifests in `docs/enrichment/bands/<band>-manifest.json` (frozen concept lists, tied to the queue commit they came from). Regenerating the weak-concept queue does NOT change band ownership. The lead mints new band manifests as queues shrink, and can mint bands for other entry types later. The table shows the manifest's rank range and boundary concepts for orientation only.

| Band | Manifest ranks | Concepts (first to last) | Prefix | Status | Agent | Since |
|---|---|---|---|---|---|---|
| w1a | 1-30 | Ubuntu to The inner citadel | w1a | claimed | Agent A (lead) | 2026-10-19 |
| w1b | 31-100 | The observing self to Wisdom | w1b | claimed | Agent B (Computer) | 2026-10-19 |
| w1c | 101-170 | Amor sui (right self-love) to Embodied self | w1c | claimed | Agent C | 2026-10-19 |
| w1d | 171-240 | Escape from freedom to Attentional control theory (Eysenck) | w1d | claimed | Agent D (Computer) | 2026-10-19 |
| w1e | 241-310 | Attentional control training to Intrinsic value of nature | w1e | claimed | Agent E (Computer) | 2026-10-19 |

## Principles pass (owner priority, 2026-10-19)

ALL item types need work; the owner has prioritised PRINCIPLES: bodies are often poor and
AI-sounding, "Plain words" sections are often replicates of the principle, and verbatim
source quotes are wanted. The protocol is `docs/enrichment/PROTOCOL-PRINCIPLES.md`
(validator bounds differ for principles: 40-300 prose words; locator citation instead of URL).
The owner's primary-source library is in `docs/PRIMARY-SOURCES.md`.

| Band | Manifest ranks | Principles (first to last) | Prefix | Status | Agent | Since |
|---|---|---|---|---|---|---|
| p1a | 1-30 | R055 (xin) to E011 (phenomenological description) | p1a | claimed | genuineflourishing24 | 2026-10-19 |
| p1b | 31-100 | E012 to PP029 | p1b | OPEN | | |
| p1c | 101-170 | PP081 to B146 | p1c | OPEN | | |
| p1d | 171-240 | BI012 to B129 | p1d | OPEN | | |
| p1e | 241-310 | BE026 to D065 | p1e | OPEN | | |

Principle bands use the same state machine, batons, batch files and parallel rules as concept
bands. Concept bands remain open below: workers should take PRINCIPLE bands first while the
principles queue is untouched.

## Rules for parallel agents (read before editing anything)

1. **File ownership.** You only edit: concept files whose ids are inside your band, plus files under `docs/enrichment/` whose names start with your prefix (`batches/w1b*.json`, `proposals/w1b.json`). Never touch another band's concept files, another band's batch/proposal files, `progress.json`, or the queue files.
2. **State file is mandatory (interruption safety).** Your live state is `docs/enrichment/batches/<band>.json`, managed by `python3 scripts/enrich_state.py <band> <cmd> ...`:
   - `start <Concept>` BEFORE you begin writing, then push. This is the in-flight marker: if your session dies mid-concept, the next agent sees exactly where you stopped.
   - `done <Concept>` after validation passes, then push.
   - A session that resumes must first read its band's state file: never redo a concept in `done`, always finish or restart the one in `in_progress` (check the concept file for a partial draft first).
3. **Push cadence (data-loss safety).** `scripts/enrich_save.sh "<message>"` after EVERY state change and at least every ~15 minutes of work, even mid-concept (a WIP commit of a half-written page is recoverable; uncommitted work is not). The script fails loudly if the push does not land. Never leave work uncommitted at the end of a turn.
4. **Duplicate-work guard.** Before starting a concept: `git pull`, check your state file's `done` list and `docs/enrichment/progress.json`, and check the concept's prose word count (`python3 scripts/enrich_stats.py --show 60`). If a concept is already rich, skip it and note it in your state file (`flag`).
5. **progress.json** is merged from batch logs by the lead only. Your state file is the live record; the lead folds it into `progress.json`.
6. **enrich_apply.py** (cross-link application) is run by the lead only, because it edits other bands' entries. You write proposals in `proposals/<your-prefix>.json`; the lead applies them after pulling. Do not run apply yourself.
7. **Queue files** (`queue-*.json`) are regenerated by the lead only. You may run `enrich_stats.py --show N` to look, but discard the queue-file rewrite before saving: `git checkout -- docs/enrichment/queue-concepts.json`.
8. **enrich_validate.py** compares against git HEAD: run it after every concept, fix every ERR before moving on. `scripts/build.py` must still succeed before you mark a band done.
9. Quality bar, voice and research rules are in `docs/enrichment/PROTOCOL.md` (binding). Exemplars: `docs/enrichment/EXEMPLARS.md`. Zero hallucination: every fact from a source you actually opened.
10. **Collision tiebreak.** If you and another agent somehow collide on a file, the board claim in the table above is the tiebreaker: the claimer keeps the file; the other agent reverts their change to that file and reports it on the taskboard.
11. **End of session (planned or sudden).** Nothing special is required IF you followed rules 2 and 3: state file current and pushed, all work pushed. If you get a warning your session is ending, run `scripts/enrich_save.sh "wip: ending session"` immediately.
12. **Takeover (dead-agent recovery).** A band whose state file shows `in_progress` stuck for more than 1 hour (check the `updated` timestamp) is considered abandoned — sessions can die in minutes, so a live agent pushes state at least every ~15 minutes: `git pull`, write `"takeover": {"by": "<agent>", "at": "<iso ts>"}` into that band's state file, push, then check BOTH `content/` and `docs/enrichment/drafts/<band>/` for a partial draft of the in-flight concept before restarting it.
13. **Durable drafts, unpublished site text.** Research notes and partial prose for a concept go to `docs/enrichment/drafts/<band>/<Concept>.md` and get pushed (durable, but not built into the site). Only reviewed, validated text goes into `content/`. `enrich_validate.py` + advisor/senior QC gate the move from draft to `content/`. If a session dies mid-review, the draft is still on GitHub for the next agent to finish.

## Incident log (w1d agent)

- 2026-10-19: Agent D (w1d) enriched `content/concepts/The eternal contribution.md` by mistake (it is in w1ae's manifest). Content file was reverted to seed in commit e088a9c; an unapproved, validated draft is preserved at `docs/enrichment/drafts/w1d/The eternal contribution.md` for the w1ae agent to reuse or discard. Its reciprocal proposals were removed from `proposals/w1d.json`.
