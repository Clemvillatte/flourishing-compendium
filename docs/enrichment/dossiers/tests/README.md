# Dossier checker regression fixtures

Run by hand after changing scripts/dossier_check.py. Both must FAIL (exit 1).
A published dossier (the-self.md, anger.md) must still pass.

Fixture 1 — no external carrier at all:

    python3 scripts/dossier_check.py docs/enrichment/dossiers/tests/fixture-no-carrier.md

Expected: "no external carrier links found (every quote needs one)".

Fixture 2 — an external carrier in the opening question only, no quoted
passage after it:

    python3 scripts/dossier_check.py docs/enrichment/dossiers/tests/fixture-question-carrier-only.md

Expected: "no quoted passage carries an external carrier link (the opening
question is not a quotation)".

The checker is a STRUCTURAL preflight (card links resolve, shape present,
at least one externally-carried quotation) — it is not evidence
verification; quote fidelity is checked by the evidence ledger process.
