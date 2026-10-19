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
| 2026-10-19 | Agent A | Ubuntu v2 (advisor review) | fixed: SAJP 32(2), etymology, Tutu splice, amnesty scope, neutral debate wording |
| 2026-10-19 | Agent A | Freedom + Virtue (advisor review) | fixed: Epictetus attribution, Dhammapada claim scoped, habituation scoped, VIA claim dropped to evidence |
| 2026-10-19 | Agent A | Attention + Care (advisor review) | fixed: gorilla wording, Weil context, Noddings sourcing, Heidegger distinction; apply-script heading bug repaired (Oikeiosis, Ren) |
| 2026-10-19 | w1b agent | The relational self, To the things themselves | quote attributions fixed (advisor round 2) |
| 2026-10-19 | genuineflourishing21 (supervisor) | D087 (p1a) sampled | PARTIAL VERIFICATION, corrections pending: Legge butterfly quote verified verbatim (matched against the fetched silkqin page text); the excerpt establishes "Transformation of Things" but not the romanization or D087's interpretation sentence; Tandfonline wuhua citation only abstract-verified. Flags for p1a worker: confirm or re-scope the interpretation citation; protocol wants the source quote as a separate blockquote line (D087 embeds it inline); the math-course example and the equipment/hand aphorism are unsupported as written |
| 2026-10-19 | genuineflourishing21 (supervisor) | Peak experiences (w1d) sampled | PARTIAL VERIFICATION, corrections pending: Landsman/B-values/emotions (Wikipedia), universality (oaks.nvg), B-cognition (Sefaria) and 1964:19 core-religion (Dialnet PDF) quotes verified as matching the fetched page/PDF extracts; flow-comparison claims (common vs rare, repeatable vs unbidden) and the claims that K228/K107 practices train the peak's perceptual mode lack an opened source — flagged to w1d worker |
| 2026-10-19 | genuineflourishing21 (supervisor) | full delta since 08:45 UTC (22 content files at HEAD 76325b4) | validate 22/22 ok (17 concept/principle files + 5 principle rewrites that landed during the pass); preservation vs baseline c2a3ee4 ok: front-matter byte-identical, no original [[link]] markup lost, reflections block byte-identical, principle statements unchanged; build ok |
| 2026-10-19 | genuineflourishing21 (supervisor) | integration (enrich_apply) | DEFERRED: live workers hold target bands (w1d fresh, p1a/p1b/p1c fresh); apply guard does not see principle manifests (reads only 'concepts' keys); proposals/w1b.json uses a target/concept schema the apply script cannot read (needs normalization by the w1b worker) |
