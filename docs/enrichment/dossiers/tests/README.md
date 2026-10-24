# Dossier checker regression fixtures

Run by hand after changing scripts/dossier_check.py. Five must FAIL
(exit 1), each for exactly its own reason; one must PASS; a published
dossier (the-self.md, anger.md) must still pass.

Fixture 1 — no external carrier at all:

    python3 scripts/dossier_check.py docs/enrichment/dossiers/tests/fixture-no-carrier.md

Expected: "no external carrier links found (every quote needs one)".

Fixture 2 — an external carrier in the opening question only, no quoted
passage after it:

    python3 scripts/dossier_check.py docs/enrichment/dossiers/tests/fixture-question-carrier-only.md

Expected: "no quoted passage carries an external carrier link (the opening
question is not a quotation)".

Fixture 3 — no Story section at all (the 4th section after Practice):

    python3 scripts/dossier_check.py docs/enrichment/dossiers/tests/fixture-story-missing.md

Expected: 'no "## Story:" section (4th section after Practice,
owner-directed 2026-10-24)'.

Fixture 4 — Story section placed before Practice:

    python3 scripts/dossier_check.py docs/enrichment/dossiers/tests/fixture-story-misplaced.md

Expected: 'the "## Story:" section must come after Practice'.

Fixture 5 — Story section present but holding no story card link:

    python3 scripts/dossier_check.py docs/enrichment/dossiers/tests/fixture-story-empty.md

Expected: "the Story section holds no story card link".

Fixture 6 (must PASS) — an em dash inside inline quoted matter in a
logline is legitimate quoted material, not a humanizer violation:

    python3 scripts/dossier_check.py docs/enrichment/dossiers/tests/fixture-story-quote-dash.md

Expected: OK, exit 0.

The checker is a STRUCTURAL preflight (card links resolve, shape present,
at least one externally-carried quotation, the 4th Story section after
Practice with story card links) — it is not evidence verification; quote
fidelity is checked by the evidence ledger process.
