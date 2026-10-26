# QC sample: freshly repaired dossiers the-self and right-effort — quote re-verification (2026-10-26)

Worker: worker-pplx-audit-1026a (audit baton). Checks run 2026-10-26
~10:00-10:05Z (UTC, clock-checked). Trigger: both dossiers were repaired and
republished after the dosr-band quote map was written, so their quotes had
not been through a post-repair automated pass. Method:
`dossier_quote_verify.py` re-run on both files, then an eye-check of every
reported NOT FOUND on the live carrier (cloud browser where the host blocks
the platform fetcher; opened page fetch where possible).

## the-self.md — 24 quotes checked, 2 NOT FOUND

1. Mil 3.1.1 chariot simile (suttacentral.net/mil3.1.1/en/tw_rhysdavids) —
   VERBATIM. Carrier opened in browser; the king's reply reads: "It is on
   account of its having all these things—the pole, and the axle, the
   wheels, and the framework, the ropes, the yoke, the spokes, and the
   goad—that it comes under the generally understood term, the designation
   in common use, of 'chariot.'" Identical to the dossier block quote. The
   automated miss is a blocked-host false positive (suttacentral blocks the
   script's fetcher; the browser passes).
2. Katha Upaniṣad 1.2.18 (sacred-texts.com/hin/sbe15/sbe15011.htm) —
   VERBATIM. sacred-texts.com served the platform fetcher and the browser a
   Cloudflare security-verification page (not the text), so the quote was
   verified against the same public-domain Müller SBE vol. XV wording opened
   on an independent carrier (living-bread.org, which states it was checked
   against the Internet Archive scan upanishads02mlgoog) and corroborated
   word-for-word by several other opened search results (brhat.in,
   mapsara.org): "The knowing (Self) is not born, it dies not; it sprang
   from nothing, nothing sprang from it. The Ancient is unborn, eternal,
   everlasting; he is not killed, though the body is killed." Identical to
   the dossier quote. NOTE for future passes: the dossier's carrier link is
   Cloudflare-walled for this environment; the passage verifies on the
   alternates above.

## right-effort.md — 27 quotes checked, 2 NOT FOUND

3. Baumeister et al. 1998, "These results suggest that the self's capacity
   for active volition is limited and that a range of seemingly different,
   unrelated acts share a common resource." (PubMed 9599441) — VERBATIM. The
   eutils plain-text abstract was opened in the browser; the abstract ends
   with exactly that sentence. The automated miss is a line-wrap artifact:
   the plain-text carrier breaks "These results" and "suggest" across
   lines, so the literal substring match fails while the normalized text is
   exact. The same page also carries the dossier's other Baumeister quote
   ("Choice, active response, self-regulation, and other volition may all
   draw on a common inner resource.") verbatim.
4. Hagger et al. 2016, "Although a meta-analysis of ego-depletion
   experiments found a medium-sized effect, subsequent meta-analyses have
   questioned the size and existence of the effect and identified instances
   of possible bias." (PubMed 27474142) — VERBATIM. The eutils plain-text
   abstract was opened in the browser; the sentence appears word-for-word in
   the abstract's introduction (PubMed blocks the script's fetcher; the
   browser passes).

## Verdict

- 4 of 4 reported NOT FOUNDs are false positives; every quote checked is
  verbatim on its carrier. No dossier text changes needed.
- Both freshly repaired dossiers pass the automated quote check after
  eye-adjudication: the-self 24/24, right-effort 27/27.
- Tool note (no code change made, flagged for the supervisor/owner):
  dossier_quote_verify.py's literal substring match fails on carriers that
  wrap lines inside sentences (eutils plain text) — a normalized-whitespace
  comparison would remove this false-positive class.

Pushed with this receipt; no dossier files changed by this pass.
