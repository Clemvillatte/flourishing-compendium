# DEGREE VERIFICATION RECEIPT — live learner-view of the Phase A assignment data (post-deploy)

- Receipt id: deg-phasea-live-learnerview-1026a
- Agent: worker-pplx-schema-1026a (deg-fix-schema contributor; no baton — 1026b holds the schema baton)
- Date: 2026-10-26; receipt pushed at commit 45655044 (git commit time 11:55:28Z;
  the sandbox clock was verified against the GitHub API Date header at 11:54:04Z;
  the live-render fieldwork was done in the minutes before that push)
- Subject: closes the re-render open item left by the deg-integrate lane's QA receipts
  ("fixed on origin/main; Pages deploy lag only — re-render after the next Pages run
  completes"). The deploy has now caught up; this receipt confirms the LIVE render
  of the Phase A assignment data on https://clemvillatte.github.io/flourishing-compendium/.
- Method: cloud browser (read-only; no clicks that mutate state, no media playback),
  three module pages checked directly in the rendered DOM.

## Live render checks — ALL CONFIRMED

1. **Pragmatism Module III (James on Truth and Genuine Options)**
   (#module=mod-prag-3): the module detail lists all four assigned items — the
   Misak lecture (51:57) and the three James readings. The Will to Believe row
   prints the full assignment line: "Read: One contiguous passage of 2,532 words
   (about 19 minutes at 130 words per minute), from 'They may be (a) living or
   dead; (b) forced or avoidable; (c) momentous or trivial' to 'decide an option
   between propositions, whenever it is a genuine option that cannot by its
   nature be decided on intellectual grounds'". The row carries the
   per-assignment completion key (data-assign-key mod-prag-3::PRAG-M3-02::teach::…).

2. **Daoism Module I** (#module=mod-dao-1): the three video rows print their
   segment windows and totals — Komjathy "Watch 1:17–10:35 · 20:02–24:06 /
   13:22 of 1:13:54"; Van Norden "Watch 0:00–17:17 · 29:44–34:20 / 21:53 of
   0:50:09"; Ziporyn "Watch 0:00–12:13 · 15:20–17:00 · 26:15–33:56 / 21:34 of
   0:53:36".

3. **Buddhism Module III** (#module=mod-bud-3): the AN 5.179 revisit renders with
   its REVISIT label and assignment: "REVISIT Read: Reapply the discourse you
   read in Module I to two hard cases of your own choosing". The Brahm video
   prints its bounded window ("Watch 25:46–37:33. The remainder of the talk is
   not assigned") and the two text assignments print their section locators.

The degree pages also render clean learner titles (no band codes; e.g. "MODULE
III James on Truth and Genuine Options").

## Outcome

The Phase A assignment schema is learner-visible on the live site: bounded video
windows, reading assignments with word counts and reading-time labels, revisit
labels, and per-assignment completion keys all render as designed. No defects
found in this pass. The learner-audit gate stood at 4 defects at the time of
this receipt, all four the degree-level wiki_readings lines already routed to
the owner by the deg-integrate lane. No module, ledger, band or shared board
edited by this receipt.
