# QC note — humanizer campaign across free DOS bands (worker-pplx-1025-launchb, 2026-10-25)

Scope: the owner's directive on the "not X, but Y" / "rather than"
rhetorical construction, applied to the dossiers in free DOS bands
(batons claimed per band; no other band's files touched).

## Passes with repairs (all pushed, checks green: dossier_check exit 0, density 0)

- dos28 sadness-and-grief: 10 voice-audit candidates -> 0. 14 scaffold
  repairs + 11 advisor-QC repairs (contrast scaffolds, decorative
  metaphors, page-as-agent narration, categorical judgments scoped).
  Commit c848ddcb4.
- dos18 right-view: 5 -> 3 candidates. 2 repairs (dependent-origination
  opening scaffold; Stoic double contrast); 3 keeps documented. Commit
  59437d8cc.
- dos19 right-intention: 9 -> 3. 6 repairs; 3 keeps documented (vow,
  Seneca's conclusion, ACT doctrine). Commit 84e220245.
- dos23 right-effort: 9 -> 8. 1 repair (factor-definition "rather than
  by quantity"); 8 keeps documented (middle path, lute string,
  assent, grit quote, card framings). Commits 05b73b960 + b66f01ecf.
- dos10 motivation: 5 -> 4. 1 repair (Dewey interest metaphor); 4 keeps
  (SDT definitions, McClelland, verbatim Kant). Commit 90041726b.
- dos24 right-mindfulness: 10 -> 8. 2 repairs (opening "actual rather
  than assumed"; "rather than dimly"); 8 keeps documented. Commit
  95c9524ed.
- dos27 fear: 16 -> 14. 2 repairs ("mark that difference rather than
  paper over it"; Retention "a record rather than a feeling"); 14
  keeps documented. Commit f834ba5d9.

## Verification passes, zero repairs needed (candidates all doctrine/quote content)

- dos20 right-speech: 7/7 kept (3 verbatim quotes). Commit df3adfa53.
- dos21 right-action: 6/6 kept. Commit abb71bb01.
- dos26 gratitude: 14/14 kept (3 verbatim quotes). Commit afb702722.
- dos3 cognition: 11/11 kept. Commit dc5c0c821.
- Reviewed without text change: right-livelihood (17), creation (12),
  lifes-purpose (6), decision-making (5), uncertainty (2), wisdom (2)
  — all candidates judged doctrine, verbatim quote, evidence-scoping or
  card framing; no baton claimed for these (no text change owed).

## Bookkeeping

- dos30: stale batch flag cleared — the GST/SP031 restoration
  (worker-pplx-dos30-1025e, supervisor-audited) is now reflected in the
  flagged note. Commit 9c97a0a48.
- Ledger entries for every pass, in each dossier's sources ledger, with
  repairs, keeps and check stats documented.

## Standing observations for the supervisor

- The voice-audit tool's candidates are dominated by legitimate
  doctrine/quote content; the genuine scaffolds cluster in opening
  paragraphs, Retention paragraphs and transition sentences. Any future
  pass should read those three locations first.
- gratitude, creation and lifes-purpose carry verbatim quotes inside
  their flagged lines — those must never be "repaired".

## Verification pass on the campaign's own items (11:05Z, current origin/main head)

All 7 modified dossiers re-checked green on the current head:
dossier_check exit 0 and density 0 dense for sadness-and-grief (35
links), right-view (42), right-intention (67), right-effort (41),
motivation (51), right-mindfulness (49), fear (46). Quote verification:
sadness-and-grief 32/32 found; the 12 not-found spans across the other
six (right-view 2, right-intention 3, right-effort 2, motivation 2,
right-mindfulness 1, fear 2) are all PMC fetch artifacts on
pmc.ncbi.nlm.nih.gov carriers — the checker-artifact pattern documented
in earlier ledger rounds (spans verified against opened texts; the
fetcher cannot read the PMC page). No quote was touched by any pass in
this campaign, so no new quote defects are possible from this work.
## Live-data splices (app.js)

The Dossiers view serves prose from `window.fcDossiersData` compiled into
`site/assets/app.js`; markdown repairs do not reach the site until a re-splice.
This worker re-spliced with `scripts/dossier_registry_build.py --rebuild=<slug>`
(deterministic; markdown read-only):

- the seven repaired dossiers above (commit fb101fc56) — repaired prose now
  compiled in, scaffolds compiled out;
- attention + goals (b16054a8d) — resolves the 11:03Z dos8 live-site flag;
- full-registry pass over all 40 published dossiers (3e1b4b293) — found 4 more
  stale entries (anxiety, genuine-flourishing, right-speech, shame-and-guilt),
  whose markdown of record had pushed gloss-to-prose and humanizer repairs never
  re-spliced; block-count shifts match those commits (e.g. anxiety 141->112
  blocks is the dos8 gloss-to-prose conversion, not data loss; entries 40->40).

Operational note: running `scripts/dossier_build.py` with no arguments is
destructive (it gutted app.js and overwrote the-self.md in a scratch run;
both reverted cleanly before any push). Use the registry build only.
