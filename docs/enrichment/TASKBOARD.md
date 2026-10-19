# Enrichment task board

Any agent starting on this repository: read `docs/ENRICHMENT-HANDOFF.md` first, then take a baton (see `docs/enrichment/OPERATIONS.md`), then claim work here.

Owner update, 2026-10-19: read `OWNER-UPDATE-2026-10-19.md`. A pass is not a stopping
point. Continue to the next unfinished item or next available principle band; the supervisor
keeps monitoring. Only an explicit owner stop or unavoidable runtime limit ends work.

Standing repair queue (owner request, 2026-10-19): `plain-words-replicates.md` — 417
principles whose Plain words copy their own body. Principles-band workers must fix the
entries in their band as part of each item. Daoism, Buddhism and Pragmatism first.

Concept namespace audit (owner request, 2026-10-19): `concept-namespace-audit.md` — the
concepts namespace contains principles ("Pursue becoming, not arrival"), comparisons
("Identified versus introjected motivation"), and at least one hallucinated page
("The rehearsal of virtue"). Concept workers must apply the IS-IT-A-CONCEPT check
(PROTOCOL.md §1 step 0) and flag/fix per the audit's process rules.

Concept verification sweep (owner request, 2026-10-19): `concept-verification-queue.md` —
2,077 concept pages cite no source (1,486 high-suspicion, many with garbled titles like
"Nudge theory Thaler"). Verification happens through the normal enrichment pass: verify
existence in an opened source, fix the title to the actual concept, or delete if no source
defines it. Daoism, Buddhism and Pragmatism first.

## How to claim

1. Pull, then find an OPEN, released, or stale PRINCIPLE band first. Check `python3 scripts/baton.py status`: a fresh unreleased baton overrides an outdated OPEN label. A stale baton is available after 20 minutes, even if the table still says claimed. If no principle band is available, request a reserve from the supervisor and do non-conflicting verification or concept work meanwhile.
2. Edit this table: set status to `claimed`, put your agent name and the date. Commit and push (`scripts/enrich_save.sh "taskboard: claim band w1b"`).
3. If the push is rejected after rebase, someone claimed first: pull, re-read the board, take the next OPEN band.
4. When a band is finished: mark it done here, set `band_done: true` in your state file (`python3 scripts/enrich_state.py <band> finish`), release its baton, push, then claim the next available PRINCIPLE band. Continue without waiting for owner approval. Concept manifests w1a-w1af exist even where the table omits their rows; check manifests and batons before claiming one.

## Bands

Bands are defined by committed manifests in `docs/enrichment/bands/<band>-manifest.json` (frozen concept lists, tied to the queue commit they came from). Regenerating the weak-concept queue does NOT change band ownership. The lead mints new band manifests as queues shrink, and can mint bands for other entry types later. The table shows the manifest's rank range and boundary concepts for orientation only.

| Band | Manifest ranks | Concepts (first to last) | Prefix | Status | Agent | Since |
|---|---|---|---|---|---|---|
| w1a | 1-30 | Ubuntu to The inner citadel | w1a | released | genuineflourishing31 | 2026-10-19 |
| w1b | 31-100 | The observing self to Wisdom | w1b | OPEN | — | 2026-10-19 |
| w1c | 101-170 | Amor sui (right self-love) to Embodied self | w1c | claimed | Agent C | 2026-10-19 |
| w1d | 171-240 | Escape from freedom to Attentional control theory (Eysenck) | w1d | claimed | genuineflourishing35 (took over dead genuineflourishing37) | 2026-10-19 |
| w1e | 241-310 | Attentional control training to Intrinsic value of nature | w1e | claimed | genuineflourishing36 (takeover from dead Agent E) | 2026-10-19 |

## Principles pass (owner priority, 2026-10-19)

ALL item types need work; the owner has prioritised PRINCIPLES: bodies are often poor and
AI-sounding, "Plain words" sections are often replicates of the principle, and verbatim
source quotes are wanted. The protocol is `docs/enrichment/PROTOCOL-PRINCIPLES.md`
(validator bounds differ for principles: 40-300 prose words; locator citation instead of URL).
The owner's primary-source library is in `docs/PRIMARY-SOURCES.md`.

| Band | Manifest ranks | Principles (first to last) | Prefix | Status | Agent | Since |
|---|---|---|---|---|---|---|
| p1a | 1-30 | R055 (xin) to E011 (phenomenological description) | p1a | done (30/30; band closed 12:13 UTC) | genuineflourishing31 | 2026-10-19 |
| p1b | 31-100 | E012 to PP029 | p1b | DONE (all 70 items rewritten) | genuineflourishing42 | 2026-10-20 |
| p1c | 101-170 | PP081 to B146 | p1c | claimed | genuineflourishing29 | 2026-10-19 |
| p1d | 171-240 | BI012 to B129 | p1d | claimed | genuineflourishing42 (took released band) | 2026-10-20 |
| p1e | 241-310 | BE026 to D065 | p1e | claimed | worker-p1e-4f2c9b1d (took over released band; 43/70 done; P157 citation repair first) | 2026-10-20 |
| p1f | 311-370 | D074 to BI001 | p1f | claimed | genuineflourishing41 (took over stale genuineflourishing33; 20/60 done, D/B/P items QC-passed) | 2026-10-20 |
| p1g | 371-430 | BI009 to Y015 | p1g | claimed | agent-p1l-worker-27c22a8e (takeover from stale genuineflourishing35; 23/60 done) | 2026-10-20 |
| p1h | 431-490 | Y026 to D096 | p1h | claimed | worker-p1h-8a3d7e29 (took over stale genuineflourishing35; 12/60 done) | 2026-10-20 |
| p1i | selected ranks 491-615 | D115 to B148 (30 priority items) | p1i | claimed | genuineflourishing39 | 2026-10-19 |
| p1j | selected ranks 616-695 | B153 to P189 (30 priority items) | p1j | done (30/30; band closed by genuineflourishing32) | genuineflourishing32 | 2026-10-19 |
| p1k | selected ranks 696-806 | P192 to B183 (30 priority items) | p1k | done (30/30; band closed by genuineflourishing32) | genuineflourishing32 | 2026-10-19 |
| p1l | selected ranks 840-901 | D032 to P082 (30 priority items) | p1l | done (30/30; band closed by agent-p1l-worker-27c22a8e) | agent-p1l-worker-27c22a8e | 2026-10-20 |
| p1m | selected ranks 902-1036 | P090 to B152 (30 priority items) | p1m | claimed | worker-p1m-fd2db49a (session-specific role identifier; no verified yopmail identity) | 2026-10-20 |
| p1n | selected ranks 1037-1142 | B164 to P036 (30 priority items) | p1n | OPEN | unclaimed | 2026-10-19 |
| p1o | selected ranks 1143-1320 | P040 to B042 (30 priority items) | p1o | OPEN | unclaimed | 2026-10-19 |
| p1p | selected ranks 1321-1386 | B046 to D028 (30 priority items) | p1p | OPEN | unclaimed | 2026-10-19 |
| p1q | selected ranks 1387-1411 + 1469-1473 | D033 to P020 (30 priority items) | p1q | OPEN | unclaimed | 2026-10-20 |

Reserve manifests p1i-p1q contain ONLY previously unassigned B/D/P numeric IDs (Buddhism,
Daoism, and Pragmatist/process principles), in existing degree order. Their rank bounds
are non-contiguous: `selected_ranks` and the manifest's IDs are authoritative. No existing
band or queue was changed. Workers waiting for a principle slot may claim these now.
Supervisor replenishment: `python3 scripts/enrich_manifest.py p1n --type principle --priority --count 30`
refuses existing manifest overwrites and overlapping assignments. Keep several OPEN
reserves, so nine workers can find separate work without waiting on one supervisor.

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
11. **There is NO end-of-session save — you cannot foresee your own death.** Sessions die
    suddenly with no warning, and there is no reliable way to know yours is ending. The
    ONLY protection is rule 3: save and push after every state change and at least every
    ~15 minutes, mid-concept included. Treat every minute of unsaved work as already
    lost. Never stop working to wait or clean up: the next item starts immediately; the
    baton clock-in (frequent) is what tells the board you are alive.
12. **Takeover (dead-agent recovery).** The heartbeat is authoritative: 20 minutes without a clock-in makes a baton available, as OPERATIONS.md specifies. Do not wait an hour for an old `in_progress` marker. Pull, claim with `baton.py clock-in`, record takeover in the band state, push, then inspect BOTH `content/` and any historical `drafts/<band>/` before resuming the unfinished item. A stale timestamp permits takeover; it does not prove the previous runtime terminated. Never edit a fresh worker's files.
13. **Speed directive takes precedence.** Write to the owned content file, validate, and push once per completed item; push mid-item by the 15-minute safety limit. Do not create a separate draft file for every item. Existing drafts remain recovery material; research notes may still be saved. Advisor QC is required on the first item and every fifth, plus genuine uncertainty. Preserve the evidence gate: a pushed WIP is recoverable work, not a claim of verified completion.
14. **Check new supervisor findings at milestones.** After pulling, inspect new Supervisor
    notes below since your last checked commit, especially corrections for your band.
    Use a small `git diff` rather than rereading the entire protocols. Repair your own
    flagged items before expanding the queue; do not let an old done marker conceal a
    newer evidence rejection.

## Incident log (w1d agent)

- 2026-10-19 (genuineflourishing36, w1e): note for the supervisor — (1) "Character as habits"
  is blocked on your namespace disposition (see Pending dispositions in concept-namespace-audit.md;
  page content final, validated, all quotes verified against the raw James ch. IV text). (2) All
  principle bands p1a-p1h are claimed by live agents; the weak-principles queue still has ~1,600
  items beyond rank 490 — please mint p1i+ when you can. I continue on w1e concepts meanwhile.

- 2026-10-19 (genuineflourishing37): lost the p1h claim race to genuineflourishing35 (my clock-in was local-only while the GitHub connector authorization was pending; the remote board claim wins per rule 10). My in-flight D007 rewrite and verbatim DDJ 42 (Legge) + Zhuangzi (ETH Legge PDF: Cook Ding, xinzhai, zuowang) research notes are preserved at `docs/enrichment/drafts/p1h/D007-handover-genuineflourishing37.md` for the p1h worker to reuse or discard. Supervisor: please mint p1i or point me at a principle band when one frees up; until then I hold w1d and work its queue (Phenomenological methods repair first, per OWNER-UPDATE).
- 2026-10-19: Agent D (w1d) enriched `content/concepts/The eternal contribution.md` by mistake (it is in w1ae's manifest). Content file was reverted to seed in commit e088a9c; an unapproved, validated draft is preserved at `docs/enrichment/drafts/w1d/The eternal contribution.md` for the w1ae agent to reuse or discard. Its reciprocal proposals were removed from `proposals/w1d.json`.

## Supervisor notes

- 2026-10-20 (supervisor-1a2b3c, CURRENT — p1f owner genuineflourishing41): E109 quote
  sample passed (all four Zarathustra Prologue quotes verbatim vs opened Gutenberg Common),
  but these categorical interpretation claims are not established by the opened passages:
  "not a person or a biological type"; "You cannot arrive at the far end and stop";
  "the figure exists only as the direction of the crossing"; "the only form the figure
  takes". Either ground each in the opened text (with locator) or rephrase as the
  compendium's labelled reading rather than Nietzsche's position. Plain words also leans
  on the crossing metaphor; consider re-deriving in everyday terms. No supervisor edit made
  to your live file.

- 2026-10-20 (supervisor-1a2b3c, CURRENT — p1d owner genuineflourishing42): A111 quote
  sample now fully verified against the opened MIT Classics pages; one minor convention
  note: "make [men] insolent" is an editorial bracket on Jowett's "them" — either keep the
  bracket as a marked editorial clarification or restore the source's "them". Not an error;
  no supervisor edit made to your live file.

- 2026-10-19 (supervisor-193794fd, PROPOSAL PROSE): `why` is copied into public Related
  concepts text, not retained as a private supervisor justification. Before your next
  proposal update, convert your pending “stub”, “cites no principle”, “rewritten body” and
  source-check commentary to short relationship clauses; keep audit reasoning in `notes`.
  The supervisor now has scoped `--proposal` / `--dry-run` integration and will not
  bulk-publish these internal notes. No need to reread all protocols or redo finished bodies.
- 2026-10-19 (supervisor-193794fd, NEW NARROW REPAIRS): independent source sample at
  fb661ad6 rejects one psychology-parallel claim each in D003 (p1b) and B027 (p1h).
  D003: replace unverified plural “meta-analyses” with the identified 2026 qualitative
  systematic review and qualified flow association. B027: Baer 2006's opened abstract
  supports symptom prediction, not the unqualified well-being/emotion-regulation claim.
  Exact replacements, opened URLs and access limits: `SUPERVISOR-QC-2026-10-19.md`.
  Live band owners should reopen and repair these items; no body rewrite is requested.
  Primary quotations passed the advisor sample. Supervisor has not changed live content/state.
- 2026-10-19 (supervisor-193794fd): Character as habits disposition is MERGE INTO HABIT
  as an attributed James reading. Migration remains pending ownership/backlink checks;
  no deletion is authorized before preservation and validation. No more standalone
  enrichment cycles are needed. Details: concept-namespace-audit.md.
- 2026-10-19 (supervisor-193794fd, CURRENT): BI012 and CO072 are now repaired and
  independently advisor-approved, following the rejection below. Supervisor claimed
  the stale p1d baton, reopened/repaired/validated each item and preserved all original
  metadata/wikilink markup. Both are done again. p1d is released; continue its remaining
  work without clearing the other flagged items. CO072's overstrong inherited title and
  deliberate-practice link label need a metadata/markup exception for cleaner naming;
  both are explicitly qualified in the current text.
- 2026-10-19 (supervisor-193794fd, CURRENT): p1e owner: narrow citation cleanup on P157.
  Its two quotations match the opened APA PDF, but the hanging `(Hayes, Strosahl and Wilson,
  2011.)` is not the quoted article: Hayes, Pistorello and Levin (2012), The Counseling
  Psychologist 40(7), 976–1002. Keep the older reference only if it independently supports
  a separately labelled claim. The supervisor did not edit this live band's content.
- 2026-10-19 (supervisor-193794fd, historical rejection, now repaired): advisor evidence QC
  rejected BI012 and CO072 despite their `done` markers. BI012 still
  presents bodily mood as Epictetus's position, retains the unsupported thyroid/motivation
  anecdote and clinical-priority advice, and describes stub concepts as developed
  arguments. CO072 still generalizes moral habituation and retrospective musician
  comparisons to cognitive endurance; the mindfulness RCT tests a different intervention.
  Its social-media detraining story and muscle claim remain unsupported. Full repair
  request and opened URLs: `OWNER-UPDATE-2026-10-19.md`, "Supervisor re-verification".
  Validator success is not evidence acceptance. No live worker's content was edited.
- 2026-10-19 (supervisor-193794fd): the old D133 `its/his grasp` request is structurally
  resolved: current text says `his`. This local check does not re-verify the full quotation
  or the chapter-64 source. Historical notes below are retained as history, not current status.

- 2026-10-19 (genuineflourishing24, supervisor): E068 (p1d) was FAILING validation (prose 307 > 300) at the c714190 fix; RESOLVED by the p1d agent (b971d43/9dd23e7) — validator ok as of this supervisor pass. No action needed.
- 2026-10-19 (genuineflourishing24, supervisor): D133 (p1d): the DDJ 29 blockquote reads "he who would hold it in its grasp loses it" where the Gutenberg Legge has "in his grasp" — p1d worker, please correct the one word (or re-verify against the silkqin page if you used a different Legge printing and cite it), and note that D133's chapter-64 fragment cites silkqin which the fetcher cannot open (robots). Also from the owner update: BI012 and CO072 corrections (OWNER-UPDATE-2026-10-19.md) remain your priorities before new pages.

## Worker notes

- 2026-10-19 (genuineflourishing27): p1b released mid-band (owner directive). Session: 17 items done (E012 closure, R065, B066, D053, D050, P001, D016, B002, A039, B065, D057, P037, R001, S006, A004, B056, D038) — all pushed, validated vs baseline c2a3ee4, QC'd at items 10 and 15 (milestone repairs recorded in the B065/A004 ledgers). Speed directive adopted throughout (no drafts, one commit per item, batched research: NE Chase #8438 and the Zhuangzi ETH PDF each served 2 items). Also consolidated p1d's unpushed A043/A049/A077 patch series after the connector outage. Next p1b items: D082, D091, P165 (QC due at item 20 = P165), then the rest of the manifest (~38 items left). Per-item ledgers in docs/enrichment/sources/p1b/; drafts dir holds only pre-directive v1 drafts (kept for history). Known-good source URLs are listed per item in each ledger. GitHub connector was unstable tonight (two token expirations, provider-side); if pushes 401, ask the owner to re-auth and re-run enrich_save.sh.
- 2026-10-19 (genuineflourishing31): p1a complete (30/30 items; this session: SO044, P139, D078, E003, E011, D039, B001, D019, D141, D037, D031, D080, A078, A091, A037, E007, P073, A023, A053; earlier: R055 through S011 by predecessors). Validator clean, build ok, band state finished. All principle bands p1b-p1h are claimed: requesting the supervisor mint a new principle band (p1i) for me; meanwhile doing non-conflicting verification work (plain-words replicate re-check of p1a). Source ledger: sources/p1a/ledger.md; proposals: docs/enrichment/proposals/p1a.json (2 reciprocals from SO044, unapplied).
- 2026-10-19 (genuineflourishing31): verification while waiting for a new band: re-ran the 5-gram plain-words/body overlap detector across all 30 p1a items; zero items at >=30% overlap (the repair-queue threshold). Band is clean of replicates. Standing by for a minted principle band; will recheck the board after a bounded wait.
- 2026-10-19: genuineflourishing31 (w1a, shutdown) handed off after enriching Ubuntu, Freedom, Virtue, Attention, Care, Gratitude (Agent A), then Acceptance, Mindfulness, Humility. Ledger: sources/w1a/ledger.md; proposals: docs/enrichment/proposals/w1a.json (Acceptance, Mindfulness, Humility inline + earlier items). Unapplied proposals remain for the next agent. Humility validated (Tangney quote via opened PMC secondary). Next w1a items: Parasympathetic activation, Impermanence, Deliberate practice, Right speech, Self-as-context, Equanimity, ...; note several manifest items are principle-style or comparisons and need the IS-IT-A-CONCEPT check (see concept-namespace-audit.md; "Pursue becoming, not arrival" is owner-flagged). w1a baton released.
