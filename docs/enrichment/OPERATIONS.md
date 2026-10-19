# Operations: batons, supervision and handover

How the enrichment project runs with multiple agents. Read this together with
`docs/enrichment/TASKBOARD.md` (band claims, parallel rules) and `docs/ENRICHMENT-HANDOFF.md`.

## Agent names (owner convention, 2026-10-19)

Your agent name is the local part of your yopmail email: agent0001@yopmail.com -> `agent0001`.
Use it everywhere: baton claims, state files, commits. This lets the owner map every action
in the repo to the account (and session) that produced it.

## Continuous operation (owner directive, 2026-10-19)

Finishing an item, band, QC pass, or monitoring cycle is a checkpoint, NOT a reason to stop.
Read `OWNER-UPDATE-2026-10-19.md` for the current correction requests and maintenance scope.

- Workers save, validate, clock in, then immediately take the next unfinished item. When a
  band is complete, finish its state, release that band's baton, claim the next available
  principle band, and continue. If none is available, ask the supervisor to mint one and do
  non-conflicting verification while waiting; do not silently retire or wait for owner approval
  to continue already-authorized work.
- The supervisor NEVER voluntarily ends monitoring because a pass is complete or the board
  is quiet. Pull, review deltas, run checks, sample sources, resolve flags, replenish bands,
  save, clock in, then repeat. When genuinely idle, use a bounded wait of at most five minutes,
  then recheck. Do not emit a final "pass complete" answer and abandon the baton.
- Stop only on an explicit owner pause/stop or an unavoidable execution/access limit. If the
  platform forces an end, save immediately, record the exact next action, and release or hand
  over the baton if possible. Never pretend an ended session is still monitoring; repository
  instructions alone cannot keep a terminated runtime alive.
- Check this directive after every pull and before choosing the next item. Short progress
  messages are checkpoints, not requests for permission to keep working.

## Token efficiency (owner directive, 2026-10-19)

The project runs on Free Trial accounts. Tokens are spent only on meaningful work: reading
sources, writing pages, validating, saving. Follow the Token-efficient superskill in every
session: no filler narration, no redundant re-reads or searches, no verbose status updates.
Cheap first (local scripts, one search), expensive only when it changes the result.

## Batons

There are two kinds of baton:

- **Supervisor baton** (`supervisor`): exactly one. The supervisor keeps an eye on GitHub and
  drives the project: reviews commits, samples quality (advisor QC), updates instructions,
  targets and attributions, runs integration (`enrich_apply.py` + validate + build), mints
  new bands, keeps `handoff.md` and the QC log current. The supervisor mostly monitors
  silently and does NOT enrich concept pages while holding the baton.
- **Worker batons** (`worker-<band>`): one per band. A worker enriches the concepts of their
  band following `docs/enrichment/PROTOCOL.md`.

## Taking a baton (decision procedure)

When you start a session (or come back from a break):

1. `python3 scripts/baton.py status` — see what is held and what is stale.
2. If the supervisor baton is free or stale: take it —
   `python3 scripts/baton.py clock-in supervisor <YourAgentName>` — and do supervisor work.
3. Otherwise (a live supervisor exists): take a worker baton — claim an OPEN band on the
   TASKBOARD first, then `python3 scripts/baton.py clock-in <band> <YourAgentName>`.
4. Push the baton file: `scripts/enrich_save.sh "baton: <name> claims <baton>"`.

## Clock-in (the heartbeat)

- Clock in when you claim, at EVERY milestone (each finished concept, each state change), and
  at least every 15 minutes while working: `python3 scripts/baton.py clock-in <baton> <YourAgentName>`
  then push. The clock-in writes a UTC timestamp the other agents can see on GitHub.
- **20 minutes without a clock-in = the baton is considered abandoned.** The next agent passing
  (a worker for a worker baton, anyone for the supervisor baton) takes it over with
  `clock-in` (the script records the takeover automatically) and resumes the predecessor's work
  from the last update: `handoff.md`, the band state file, the TASKBOARD, and any drafts in
  `docs/enrichment/drafts/<band>/`.
- Release a worker baton when changing bands; immediately claim the next available band.
  Release on an explicit stop or unavoidable shutdown so the next agent does not wait
  20 minutes. A completed supervisor pass is NOT a reason to release the supervisor baton.

## Supervisor duties (in order)

Current priority (owner directive, 2026-10-19): ALL item types need work; principles first.
Many principle bodies are AI-sounding and the "Plain words" sections are broken replicates;
verbatim source quotes are wanted (owner's primary-source library: `docs/PRIMARY-SOURCES.md`;
principles protocol: `docs/enrichment/PROTOCOL-PRINCIPLES.md`). Direct idle workers to
principle bands before concept bands while the principles queue is untouched.

1. `git pull` and review new commits (`git log --oneline` since your last look).
2. Run the health check: `python3 scripts/build.py` (must succeed) and
   `python3 scripts/enrich_validate.py` on every concept newly marked done in the band state
   files (must be all ok).
3. Sample quality: pick 1-2 newly enriched pages, re-verify quotes against their cited URLs,
   and record the result in the QC log below. Use your advisor for this.
4. Run integration when proposals are pending and the target bands are free:
   `python3 scripts/enrich_apply.py` (band-aware, atomic) → validate → build → push.
5. Keep the board honest: mint bands as queues shrink, update targets, and note attribution
   (which agent enriched what) in the batch notes.
6. Update `handoff.md` and this file when rules change. Clock in when done.

## QC log

| Date | Agent | What was checked | Result |
|---|---|---|---|
| 2026-10-19 | genuineflourishing32 (supervisor) | D023 (p1e) sample | DDJ 48 Legge quote verified verbatim vs Gutenberg pg216; DDJ 20 fragment was NOT verbatim ("happy and exultant... full feast" — Legge: "look satisfied and pleased; as if enjoying a full banquet"). Corrected in place to the Legge wording; validator ok. Reminder to all workers: fragments quoted inside body sentences must still match the opened source word-for-word |
| 2026-10-19 | genuineflourishing26 (supervisor) | concept verification sweep (owner request) | systematic hallucination hunt: 2,077 of 2,261 concept pages cite no URL in Sources (1,486 high-suspicion, 522 medium, 69 low). Many are real concepts with garbled titles (e.g. "Nudge theory Thaler", "Collective effervescence theory Durkheim") -> fix is renaming to the actual concept; true hallucinations (e.g. "The rehearsal of virtue") get links migrated then deleted. Queue + binding process saved to `concept-verification-queue.md`; worked through the normal enrichment pass, Daoism/Buddhism/Pragmatism first |
| 2026-10-19 | genuineflourishing26 (supervisor) | concept namespace audit (owner request) | scanned all 2,261 concept titles: 4 clear principle-style pages (incl. owner-cited "Pursue becoming, not arrival"), 24 comparison pages, owner-flagged hallucination "The rehearsal of virtue" (seed with no citable source; note Premeditatio malorum already exists, deg=16). Queue + process rules saved to `concept-namespace-audit.md`; IS-IT-A-CONCEPT check added as PROTOCOL.md §1 step 0; TASKBOARD updated. Missing granular concepts recorded: Becoming, Identified motivation, Introjected motivation |
| 2026-10-19 | genuineflourishing26 (supervisor, took over from dead genuineflourishing25) | plain-words replicates (owner request) | built a 5-gram overlap detector across all 2,180 principles with Plain words: 417 pages >=50% copied from their own body (361 more at 30-49%) — the early-project pattern the owner flagged. Queue saved to `plain-words-replicates.md`; PROTOCOL-PRINCIPLES.md quality bar now carries the SP065 real example; TASKBOARD carries the standing repair note. SP065 itself fixed as exemplar (plain words now re-derives the fear-vs-strength test; validator ok). Note: genuineflourishing25 also held p1b — now stale, free for takeover |
| 2026-10-19 | genuineflourishing26 (maintenance) | skimmability + graph-mode links (owner request) | graph drawer now renders external `[text](url)` links as hyperlinks and `>` blockquotes as gold callouts (graph.js + style.css, cache-ver bumped to 20261019v); `.art h4` subheadings enlarged to 16px with gold dash marker (were smaller than body text); PROTOCOL/PROTOCOL-PRINCIPLES updated: verbatim quotes as standalone blockquotes, "In the compendium" as bulleted list, owner rule allowing new concept pages when relevant to the goal and not already represented, owner priority (Daoism/Buddhism/Pragmatism first), token-efficiency directive. Peak experiences reworked as exemplar: B-cognition quote now standalone blockquote, dense compendium paragraph replaced by the ID list, unsupported flow comparison ("flow is common/repeatable, peaks rare/unbidden") corrected to what [Wikipedia, Peak experience](https://en.wikipedia.org/wiki/Peak_experience) actually says (shared characteristics; difference = stimulation level); validator ok, build ok |
| 2026-10-19 | genuineflourishing25 (continuous supervisor) | shared maintenance | 17 isolated safety regressions pass; portable build succeeds; explicit-base validation of BI012, CO072, E012 passes structural checks. Evidence issues remain, so validator success is not acceptance. Independent code review requested. |
| 2026-10-19 | genuineflourishing25 (continuous supervisor) | archived w1b records after b6fcc59 | Earlier integration silently skipped the 179 legacy target/concept records, then archived the file. All 179 targets can be explicitly resolved against current metadata; 153 proposed linked concepts are absent from current target bodies. Exact recovery copy saved outside live proposals pending evidence review. No production integration run by this supervisor. |
| 2026-10-19 | Agent A | Ubuntu v2 (advisor review) | fixed: SAJP 32(2), etymology, Tutu splice, amnesty scope, neutral debate wording |
| 2026-10-19 | Agent A | Freedom + Virtue (advisor review) | fixed: Epictetus attribution, Dhammapada claim scoped, habituation scoped, VIA claim dropped to evidence |
| 2026-10-19 | Agent A | Attention + Care (advisor review) | fixed: gorilla wording, Weil context, Noddings sourcing, Heidegger distinction; apply-script heading bug repaired (Oikeiosis, Ren) |
| 2026-10-19 | w1b agent | The relational self, To the things themselves | quote attributions fixed (advisor round 2) |
| 2026-10-19 | genuineflourishing24 (supervisor) | D133 (p1d) sample | CORRECTED: first entry wrongly said Legge quotes verbatim; the DDJ 29 blockquote reads "in its grasp" where the opened Gutenberg Legge has "in his grasp" (one-word deviation, quote attribution still Legge). Fix routed to the p1d worker (taskboard note). Bradshaw 2025 r-values and k=238 verified verbatim vs opened sources |
| 2026-10-19 | genuineflourishing24 (supervisor) | p1a batch (D001, A063, D055, R005) + D087 repair | advisor-reviewed each item; all quotes verbatim vs opened sources (D087: ETH Zurich Legge Zhuangzi PDF, contiguous butterfly-dream passage); validator ok |
| 2026-10-19 | genuineflourishing24 (supervisor) | integration b6fcc59 full-delta preservation check | script check across ALL 196 content files changed by the apply: 0 lost wikilinks, 0 changed front-matter blocks. The earlier "census" wording covered only the 62 files the validator inspected; this row supersedes it |
| 2026-10-19 | genuineflourishing21 (supervisor) | D087 (p1a) sampled | PARTIAL VERIFICATION, corrections pending: Legge butterfly quote verified verbatim (matched against the fetched silkqin page text); the excerpt establishes "Transformation of Things" but not the romanization or D087's interpretation sentence; Tandfonline wuhua citation only abstract-verified. Flags for p1a worker: confirm or re-scope the interpretation citation; protocol wants the source quote as a separate blockquote line (D087 embeds it inline); the math-course example and the equipment/hand aphorism are unsupported as written. RESOLVED by genuineflourishing24 (p1a): quote now standalone blockquote, contiguous and verbatim vs the opened ETH Zurich Legge edition; interpretation scoped to the passage; example is an imagined decision; Tandfonline retained as further reading only |
| 2026-10-19 | genuineflourishing21 (supervisor) | Peak experiences (w1d) sampled | PARTIAL VERIFICATION, corrections pending: Landsman/B-values/emotions (Wikipedia), universality (oaks.nvg), B-cognition (Sefaria) and 1964:19 core-religion (Dialnet PDF) quotes verified as matching the fetched page/PDF extracts; flow-comparison claims (common vs rare, repeatable vs unbidden) and the claims that K228/K107 practices train the peak's perceptual mode lack an opened source — flagged to w1d worker |
| 2026-10-19 | genuineflourishing21 (supervisor) | full delta since 08:45 UTC (22 content files at HEAD 76325b4) | validate 22/22 ok (17 concept/principle files + 5 principle rewrites that landed during the pass); preservation vs baseline c2a3ee4 ok: front-matter byte-identical, no original [[link]] markup lost, reflections block byte-identical, principle statements unchanged; build ok |
| 2026-10-19 | genuineflourishing21 (supervisor) | integration (enrich_apply) | DEFERRED: live workers hold target bands (w1d fresh, p1a/p1b/p1c fresh); apply guard does not see principle manifests (reads only 'concepts' keys); proposals/w1b.json uses a target/concept schema the apply script cannot read (needs normalization by the w1b worker) |
| 2026-10-19 | genuineflourishing24 (supervisor) | integration (enrich_apply, commit b6fcc59) | applied 265 recip + 3 inline across 222 files, 31 deferred (busy bands: p1c/p1d fresh), 4 archived. Working-tree validation vs pre-apply HEAD surfaced 56 FAILs; error-category census showed ALL are pre-existing seed-page conditions (prose too short, seed dashes, seed banned words, no Sources URL) with zero link loss, zero front-matter changes, zero unresolvable links. Post-commit: 0 checked 0 failed; build ok. TOOLING NOTE for the lead: the validator applies enrichment bars to any file modified vs HEAD, so apply-only changes to seed pages trigger false FAILs; consider exempting files whose only delta is an applied Related-concepts section |
