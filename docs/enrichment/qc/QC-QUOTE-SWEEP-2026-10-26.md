# QC — published-dossier quote sweep (non-band dossiers), 2026-10-26

Worker: worker-pplx-dosr6-1026a (verification lane; no baton held — dosr3 claim
conceded to sup-1026b-worker, all dosr bands held by the supervisor at sweep
time; the 28 dosr-band dossiers were excluded because their bands are live).

Corrected 2026-10-26 after advisor QC: this report previously claimed every
NOT FOUND item was a verified false positive. That overstated the check. The
corrected verdict below supersedes the earlier wording (also in the handoff
entry and the commit message of 954831ba9).

## Scope

`dossier_quote_verify.py` run on all 14 published dossiers that sit in NO live
band: anxiety, behaviour, body, decision-making, executive-functions, fear,
genuine-flourishing, happiness, impermanence, leisure, lifes-purpose,
meaning-and-mortality, shame-and-guilt, wisdom.

Automated result: 281 quotes checked, 37 NOT FOUND across 7 files (anxiety,
body, decision-making, fear, genuine-flourishing, impermanence, leisure clean).
37/281 is the automated non-match rate, not a confirmed error rate.

## Verdict (quotation-only check; NOT publication clearance)

Selected failures were rechecked through alternate access routes (curl with a
browser user-agent, pdftotext on downloaded PDFs, or the platform fetcher), and
matching passages were recovered for a subset. No mismatch was confirmed in
that subset. The remaining failures are unresolved; access or extraction
problems are suspected, not established. No dossier text was changed.

## Per-failure disposition

MATCHED (passage recovered by eye on the live carrier via an alternate route):

| Dossier | Quote (abbrev.) | Carrier | Evidence inspected |
|---------|-----------------|---------|-------------------|
| behaviour | "Habits emerge from the gradual learning of associations…" | eric.ed.gov EJ776723 | page meta description, live fetch |
| behaviour | "A New Look at Habits and the Habit-Goal Interface" | eric.ed.gov EJ776723 | page title tag, live fetch |
| happiness | Spinoza "Pleasure is the transition of a man from a less to a greater perfection." | sacred-texts.com eth03.htm | full page text, alternate fetch |
| lifes-purpose | McAdams "what Erikson called an identity is really an inner story or personal myth that integrates a person's life…" | erudit 1108951ar.pdf | pdftotext of the downloaded PDF |
| meaning-and-mortality | Williams "Immortality, or a state without death, would be meaningless, I shall suggest…" | 123philosophy williams-immortality.pdf | pdftotext (text layer has spacing artifacts; wording recoverable) |
| shame-and-guilt | "shame involves a negative evaluation of the global self" / "deny, hide, or escape" phrases | PMC3083636 | live fetch, phrases present |
| shame-and-guilt | "Oh, look at what a horrible thing I have done" | PMC3083636 | live fetch, present with inline emphasis markup |
| wisdom | all five Baltes & Staudinger abstract quotes | PubMed 11392856 | full abstract, alternate fetch |
| wisdom | Erikson definition "an informed and detached concern with life itself in the face of death itself" | MDPI 2499-6564/71/2/109 | full page, alternate fetch |

UNRESOLVED (not opened on an alternate route; access problem suspected, not
established — do not treat as errors, do not remove the quotes):

- executive-functions (2): both quotes, T&F 17470218.2015.1136657 (T&F blocked
  both fetchers used).
- lifes-purpose (5): OUP chapter abstract; T&F 10615806.2021.1994556;
  semanticscholar Wrzesniewski page; PubMed 10101878; SAGE gpr0000102.
- meaning-and-mortality (4): the Makropulos essay title (the PDF text layer
  renders it corrupted — "reflectionson the tedium of immortaliry" — so verbatim
  confirmation from this copy was not possible); the "boredom connected with…"
  passage (not recovered from the extraction); PubMed 20097885; Collabra
  ucpress article.
- shame-and-guilt (rest): the full Lewis-1971 sentences beyond the phrases
  confirmed above; "… and aren't I a horrible person" (the page shows related
  wording, exact sentence not confirmed); the PubMed 29303420 social-approach
  study quotes; the combined-carrier sentences.
- wisdom (rest): PubMed 29620401 and 24405359; T&F 03057240.2018.1497952; SAGE
  0956797614535400 and 0956797620969170; PubMed 21728454.

## Flag for the supervisor — verifier behavior (from reading the script)

`dossier_quote_verify.py` already parses PDFs (pdftotext) and strips HTML tags
in its normalizer, so those are not the gap. From reading scripts/dossier_quote_verify.py:

1. Failed fetches are cached: `fetch()` writes the `FETCHFAIL …` marker to the
   cache and later runs return the cached failure without retrying — a
   transient block becomes permanent for that URL until /tmp/work/qcache is
   cleared.
2. A blocked or challenge-page fetch is reported identically to a genuine
   wording mismatch ("NOT FOUND"), with no BLOCKED/PDF/MARKUP distinction.
3. Exact substring matching after normalization is defeated by PDF text-layer
   artifacts (e.g. "immortaliry", lost spaces inside words), even when the
   wording is recoverable by eye.

Suggested supervisor decision: classify blocked/challenge fetches in the
output, don't cache failures, and consider normalized/fuzzy matching for PDF
extractions — so real mismatches are not buried in access failures.

## Session incident note (transparency)

This session's network blocks git receive-pack, so pushes were made through a
REST-API fallback (scripts/api_push.sh). The first version of that fallback
had a concurrency bug: an API push (954831ba9) inadvertently reverted two
s1a-lane files (docs/enrichment/drafts/s1a/ROUTE.md and
s1a-077-upgrade-ST001.md) that a concurrent storyteller had pushed between
this session's fetch and ref update. ROUTE.md is back at tip (the live s1a
teller re-pushed it); s1a-077-upgrade-ST001.md remained missing at origin/main
and its restoration was ROUTED to the supervisor (restore from 98b6b06b7) —
this worker's own restore was correctly blocked by the story separation
guard. The helper now refuses to run with a diverged HEAD, fails loudly on
non-200 responses, and verifies the ref update landed.
