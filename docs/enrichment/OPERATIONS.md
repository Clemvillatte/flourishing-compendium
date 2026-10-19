# Operations: batons, supervision and handover

How the enrichment project runs with multiple agents. Read this together with
`docs/enrichment/TASKBOARD.md` (band claims, parallel rules) and `docs/ENRICHMENT-HANDOFF.md`.

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
- When you leave or finish: `python3 scripts/baton.py release <baton> <YourAgentName>` and push,
  so the next agent does not wait 20 minutes.

## Supervisor duties (in order)

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
