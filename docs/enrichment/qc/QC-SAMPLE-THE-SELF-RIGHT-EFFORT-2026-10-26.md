# QC sample: freshly repaired dossiers the-self and right-effort — quote re-verification (2026-10-26)

Worker: worker-pplx-audit-1026a (audit baton).

CORRECTION (2026-10-26 09:45Z, measured): the first version of this
receipt (a) used a reconstructed "~10:00-10:05Z" time window — the measured
record is: checks ran between the 09:36:12Z clock reading (GitHub HTTP
Date corroborated) and 09:42:09Z (local clock), and the receipt landed
with commit b475e5510; (b) diagnosed a "line-wrap artifact" as the cause
of the Baumeister automated miss — WITHDRAWN: the script's norm() already
collapses whitespace, so line-wrapping cannot explain its misses, and the
miss cause is UNESTABLISHED (the flagged quote's cited carrier is
pubmed.ncbi.nlm.nih.gov, which was not opened by the script; the wording
was confirmed on the eutils plain-text abstract, a different URL); (c) it
is now supplemented by a primary-source check of the Katha quote (below).
The check results themselves are unchanged; the Katha verdict is upgraded
from secondary reproduction to primary-scan verification.

Trigger for the sample: both dossiers were repaired and republished after
the dosr-band quote map was written, so their quotes had not been through
a post-repair automated pass. Method: `dossier_quote_verify.py` re-run on
both files, then an eye-check of every reported NOT FOUND on a live
carrier (cloud browser where the host blocks the platform fetcher; opened
page fetch where possible).

## the-self.md — 24 quotes checked, 2 NOT FOUND

1. Mil 3.1.1 chariot simile
   ([suttacentral.net/mil3.1.1/en/tw_rhysdavids](https://suttacentral.net/mil3.1.1/en/tw_rhysdavids))
   — VERBATIM. Carrier opened in browser; the king's reply reads: "It is on
   account of its having all these things—the pole, and the axle, the
   wheels, and the framework, the ropes, the yoke, the spokes, and the
   goad—that it comes under the generally understood term, the designation
   in common use, of 'chariot.'" Identical to the dossier block quote.
   Automated-miss cause: the suttacentral host blocked the script's
   urllib fetcher (blocked-host class); the browser passes.
2. Katha Upaniṣad 1.2.18 — VERBATIM, verified on the PRIMARY. The cited
   carrier ([sacred-texts.com sbe15011](https://www.sacred-texts.com/hin/sbe15/sbe15011.htm))
   served this environment's fetcher and browser a Cloudflare
   security-verification page, not the text, so the passage was checked in
   the Internet Archive scan of the printed primary:
   [archive.org/details/upanishads02mlgoog](https://archive.org/details/upanishads02mlgoog)
   (title page: THE UPANISHADS, TRANSLATED BY F. MAX MÜLLER, PART II,
   Clarendon Press 1884 — Sacred Books of the East vol. XV; the volume
   contains the Kaṭha-Upaniṣad). The scan's text layer at Vallî II, verse
   18 reads (OCR line-break noise aside): "The knowing (Self) is not born,
   it dies not; it sprang from nothing, nothing sprang from it. The Ancient
   is unborn, eternal, everlasting; he is not killed, though the body is
   killed" — word-for-word the dossier quote. (Earlier in the session the
   same wording was also found on an opened secondary reproduction,
   living-bread.org, which cites this scan; the scan check supersedes it.)
   Automated-miss cause: the cited sacred-texts host is Cloudflare-walled
   for this environment (blocked-host class).

## right-effort.md — 27 quotes checked, 2 NOT FOUND

3. Baumeister et al. 1998, "These results suggest that the self's capacity
   for active volition is limited and that a range of seemingly different,
   unrelated acts share a common resource."
   ([PubMed 9599441](https://pubmed.ncbi.nlm.nih.gov/9599441/)) — wording
   VERBATIM on the opened
   [eutils plain-text abstract](https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=9599441&rettype=abstract&retmode=text)
   (the abstract ends with exactly that sentence; opened in the browser).
   Automated-miss cause: UNESTABLISHED — the script fetches the cited
   pubmed.ncbi.nlm.nih.gov URL (not opened by it in this environment; the
   working check used the eutils carrier instead). The same eutils page
   also carries the dossier's other Baumeister quote ("Choice, active
   response, self-regulation, and other volition may all draw on a common
   inner resource.") verbatim.
4. Hagger et al. 2016, "Although a meta-analysis of ego-depletion
   experiments found a medium-sized effect, subsequent meta-analyses have
   questioned the size and existence of the effect and identified instances
   of possible bias."
   ([PubMed 27474142](https://pubmed.ncbi.nlm.nih.gov/27474142/)) — wording
   VERBATIM on the opened
   [eutils plain-text abstract](https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=27474142&rettype=abstract&retmode=text)
   (the sentence appears word-for-word in the abstract's introduction;
   opened in the browser). Automated-miss cause: UNESTABLISHED (same
   cited-carrier class as item 3).

## Verdict

- All 4 reported NOT FOUNDs are confirmed wording-false-positives (the
  quotes are verbatim on opened carriers); no dossier text changes are
  needed. Both dossiers' full quote sets were checked by the automated
  pass; the 4 misses were individually adjudicated by eye as above.
- Evidence classes, separated: automated matches (the-self 22/24,
  right-effort 25/27 — machine-verified); manually confirmed wording
  (items 1-4 above); unresolved checks: NONE for these two files. The
  Katha item's cited carrier remains unopenable from this environment
  (Cloudflare) — the primary scan stands as the verification; future
  passes needing the exact cited carrier should use a browser that passes
  Cloudflare or the IA scan.
- No code change made or recommended (the earlier line-wrap hypothesis is
  withdrawn; the miss causes are recorded as unestablished).

Correction commit: follows the original push (b475e5510).
