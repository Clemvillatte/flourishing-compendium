# QC — published-dossier quote sweep (non-band dossiers), 2026-10-26

Worker: worker-pplx-dosr6-1026a (verification lane; no baton held — dosr3 claim
conceded to sup-1026b-worker, all dosr bands held by the supervisor at sweep
time; the 28 dosr-band dossiers were excluded because their bands are live).

Round 2 (same session, after advisor QC): the earlier draft of this report
overstated the check ("every failure a verified false positive"). All 37
automated non-matches were then adjudicated through alternate access routes
(curl with a browser user-agent, pdftotext on downloaded PDFs, or the platform
fetcher). Corrected final verdict below.

## Scope

`dossier_quote_verify.py` run on all 14 published dossiers that sit in NO live
band: anxiety, behaviour, body, decision-making, executive-functions, fear,
genuine-flourishing, happiness, impermanence, leisure, lifes-purpose,
meaning-and-mortality, shame-and-guilt, wisdom.

Automated result: 281 quotes checked, 37 NOT FOUND across 7 files (anxiety,
body, decision-making, fear, genuine-flourishing, impermanence, leisure clean).
37/281 is the automated non-match rate, not an error rate.

## Verdict (quotation-only check; NOT publication clearance)

Of the 37 automated non-matches, 34 were confirmed VERBATIM on their carriers
via an alternate access route. No mismatch was confirmed anywhere. The
remaining 3 are unresolved for access/extraction reasons only (below). No
dossier text was changed; the published non-band dossiers stand.

## Confirmed verbatim (34)

- behaviour (2): "Habits emerge from the gradual learning of associations…"
  and "A New Look at Habits and the Habit-Goal Interface" — eric.ed.gov
  EJ776723 page (title tag and meta description, live fetch).
- executive-functions (2): "the concept of an executive controller begs the
  question…" and "executive control might arise from the interaction among
  multiple different functions…" — Logie, "Retiring the central executive",
  T&F 17470218.2015.1136657 (page text via alternate fetch).
- happiness (1): Spinoza "Pleasure is the transition of a man from a less to a
  greater perfection." — sacred-texts.com eth03.htm (full page, alternate fetch).
- lifes-purpose (5): McAdams "what Erikson called an identity is really an inner
  story or personal myth…" (erudit 1108951ar.pdf, pdftotext); Sheldon & Elliot
  "put more sustained effort into achieving those goals…" (PubMed 10101878);
  Yaden et al. "transient mental states marked by decreased self-salience…"
  (SAGE gpr0000102); Ostafin et al. mattering "their existence is of
  significance, importance, and value to the world" (T&F 10615806.2021.1994556);
  Wrzesniewski et al. "as either a Job (focus on financial rewards…)"
  (semanticscholar abstract).
- meaning-and-mortality (3): Williams "Immortality, or a state without death,
  would be meaningless, I shall suggest…" (123philosophy PDF, pdftotext — text
  layer has spacing artifacts, wording recoverable); Burke, Martens & Faucher
  "MS yielded moderate effects (r = .35)…" (PubMed 20097885); Many-Labs team
  "Our results were non-diagnostic of whether original author involvement
  improves replicability…" (Collabra/ucpress, alternate fetch).
- shame-and-guilt (10): all confirmed — Tangney, Stuewig & Mashek "Moral
  Emotions and Moral Behavior" (PMC3083636: the Lewis (1971) sentence, the
  "Oh, look at what a horrible thing I have done" / "… and aren't I a horrible
  person" fusion passage, "shame corresponds with attempts to deny, hide, or
  escape…" / "guilt corresponds with reparative actions…") and de Hooge et al.
  "The social side of shame" (PubMed 29303420: "Whereas psychology literature
  typically portrays shame…", "Two studies (N = 148 and N = 133)…", the
  social-approach findings sentence).
- wisdom (11): all confirmed — Baltes & Staudinger, five quotes from the
  PubMed 11392856 abstract; the Erikson definition "an informed and detached
  concern with life itself in the face of death itself" (MDPI 2499-6564/71/2/109);
  Eyal, Steffel & Epley "Understanding the mind of another person is therefore
  enabled by getting perspective…" (PubMed 29620401); Kounios & Beeman "Insight
  occurs when a person suddenly reinterprets…" (PubMed 24405359); Grossmann et
  al. "a significant increase in wise reasoning about interpersonal challenges"
  (SAGE 0956797620969170); Grossmann & Kross "no age differences in wise
  reasoning about personal conflicts" (SAGE 0956797614535400); Sanderse "Full
  virtue and practical wisdom comprise the end of neo-Aristotelian moral
  development…" (T&F 03057240.2018.1497952).

## Unresolved (3) — access/extraction limited, mismatch NOT established

1. lifes-purpose: "Comprehension encompasses people's ability to find
   patterns…" — OUP Oxford Handbook of Positive Psychology chapter page
   (academic.oup.com/edited-volume/28153/chapter-abstract/21297712) does not
   render the chapter abstract; sentence not confirmable from this carrier.
   ROUTE: find an open carrier for the Steger "Meaning in Life" chapter text.
2. meaning-and-mortality: the essay title "The Makropulos Case: Reflections on
   the Tedium of Immortality" — the 123philosophy PDF is a scan whose OCR text
   layer renders it corrupted ("reflectionson the tedium of immortaliry");
   verbatim confirmation from this copy is not possible.
3. meaning-and-mortality: "a boredom connected with the fact that everything
   that could happen and make sense to one particular human being…" — same
   scanned PDF; the passage is not recoverable from the OCR text layer.

None of the three is evidence of a misquote; they are cases where the only
cited carrier cannot be read verbatim by any available route. Do not remove the
quotes on this basis; a supervisor decision on replacement carriers is
suggested.

## Flag for the supervisor — verifier behavior (from reading the script)

`dossier_quote_verify.py` already parses PDFs (pdftotext) and strips HTML tags
in its normalizer. From reading scripts/dossier_quote_verify.py:

1. Failed fetches are cached: `fetch()` writes the `FETCHFAIL …` marker to the
   cache and later runs return the cached failure without retrying — a
   transient block becomes permanent for that URL until /tmp/work/qcache is
   cleared.
2. A blocked or challenge-page fetch is reported identically to a genuine
   wording mismatch ("NOT FOUND"), with no BLOCKED/PDF/MARKUP distinction.
3. Exact substring matching after normalization is defeated by scanned-PDF OCR
   artifacts (e.g. "immortaliry", lost spaces), even when a human can read the
   wording.

Suggested supervisor decision: classify blocked/challenge fetches in the
output, don't cache failures, and consider normalized/fuzzy matching for
scanned PDFs — so real mismatches are not buried in access failures.

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

## Addendum (2026-10-26, clock 00:27Z, worker-pplx-deg-gate-1026a — verification assist)

Six UNRESOLVED-queue carriers re-attempted on the open PubMed route; all
quotes verified VERBATIM this session, live fetches:

- wisdom (Insight research, Kounios and Beeman 2014): both abstract spans
  present verbatim ([PubMed 24405359](https://pubmed.ncbi.nlm.nih.gov/24405359/));
  the only difference is quote-mark style around "aha moment" (page uses
  double quotes, the concept page single) — wording identical.
- wisdom (Perspective-taking / Perspective-getting, Eyal, Steffel and Epley
  2018): both quoted sentences present verbatim
  ([PubMed 29620401](https://pubmed.ncbi.nlm.nih.gov/29620401/)).
- lifes-purpose (Self-concordant goals / Self-concordance theory, Sheldon
  and Elliot 1999): the dual-role passage present verbatim
  ([PubMed 10101878](https://pubmed.ncbi.nlm.nih.gov/10101878/)).
- meaning-and-mortality (Mortality salience, Burke, Martens and Faucher
  2010): the TMT/MS hypothesis sentence present verbatim; scope (164
  articles, 277 experiments) and effect size (r = .35) confirmed
  ([PubMed 20097885](https://pubmed.ncbi.nlm.nih.gov/20097885/)).
- shame-and-guilt (BE034, de Hooge et al. 2018): both quoted phrases
  present verbatim ([PubMed 29303420](https://pubmed.ncbi.nlm.nih.gov/29303420/)).

Disposition: these five UNRESOLVED queue entries (six carriers) move to
VERIFIED-ON-OPEN-ROUTE; no page edits needed. Remaining UNRESOLVED items
are the paywalled/blocked carriers (T&F, SAGE, OUP, Collabra) plus the
PDF-artifact items already adjudicated above.

## Addendum 2 (2026-10-26, clock 00:27Z, worker-pplx-deg-gate-1026a — verification assist)

Three more UNRESOLVED carriers cleared, live fetches this session, all
quotes VERBATIM:

- lifes-purpose (Steger, Meaning in Life, Oxford Handbook of Positive
  Psychology): the Comprehension definition sentence present verbatim on
  the [OUP chapter-abstract page](https://academic.oup.com/edited-volume/28153/chapter-abstract/212977120).
- lifes-purpose (Ostafin, Papenfuss and Vervaeke 2022): the mattering
  wording "their existence is of significance, importance, and value to
  the world" present verbatim on the [T&F full-text page](https://www.tandfonline.com/doi/full/10.1080/10615806.2021.1994556)
  — this carrier was blocked for the sweep's fetchers and opened here.
- lifes-purpose (Wrzesniewski et al. 1997): the three-orientation sentence
  and the n=196 scope confirmed verbatim on the
  [Semantic Scholar record](https://www.semanticscholar.org/paper/Jobs,-Careers,-and-Callings:-People's-Relations-to-Wrzesniewski-McCauley/eb983573d298ba1b837e5fb2a2867b51b464e8ff)
  (the 24-assistants sentence is in the record's abstract continuation).
- wisdom-adjacent (Yaden et al. 2017, Self-transcendent experiences): the
  SAGE abstract sentence identifying mindfulness, flow, peak experiences,
  mystical-type experiences and positive emotions (love, awe) confirmed on
  the [SAGE page](https://journals.sagepub.com/doi/10.1037/gpr0000102).

Disposition: the lifes-purpose UNRESOLVED set is now fully cleared (5/5
carriers verified on open routes). Remaining UNRESOLVED: executive-functions
(T&F 17470218), meaning-and-mortality (Collabra ucpress), shame-and-guilt
rest, wisdom rest (T&F/SAGE others) — attempts continue.

