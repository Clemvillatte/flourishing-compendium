# QC receipt: the four ctext.org spans in others.md — eye-verified verbatim (2026-10-26)

Worker: worker-pplx-audit-1026a (audit baton).

CORRECTION (2026-10-26 09:45Z, measured): this receipt was first pushed
with a reconstructed "~09:55Z" check-time stamp — wrong. The measured
record: the checks ran between the baton claim (09:31:15Z commit stamp)
and a clock reading of 09:36:04Z local corroborated by GitHub's HTTP Date
header (09:36:12Z); the receipt and its ledger entry landed with commit
4eb1a45a3 by that reading. The original receipt also mis-stated the fourth
flagged item (it named the Yi-position inline quote) and claimed "no other
files changed" (the same commit also appended the ledger entry to
docs/enrichment/sources/dossiers/others.md; no dossier BODY changed). This
version corrects all three points; the check results themselves are
unchanged.

## The four flagged spans, mapped to the verifier output

A fresh run of `dossier_quote_verify.py` on
docs/enrichment/dossiers/others.md reports exactly 4 NOT FOUNDs of 16
quotes checked. They map one-to-one to the flags in the dosr-band quote map
("Analects Xian Wen x2; Mencius Teng-wen-gong I; Mencius Teng-wen-gong II")
as follows — the verifier splits the Analects 14.34 block quote into its
two quoted sentences:

1. "What do you say concerning the principle that injury should be
   recompensed with kindness?" — [Analects, Xian Wen](https://ctext.org/analects/xian-wen)
2. "With what then will you recompense kindness? Recompense injury with
   justice, and recompense kindness with kindness." — [Analects, Xian Wen](https://ctext.org/analects/xian-wen)
3. "Moreover, Heaven gives birth to creatures in such a way that they have
   one root, and Yi makes them to have two roots. This is the cause of his
   error." — [Mencius, Teng Wen Gong I](https://ctext.org/mengzi/teng-wen-gong-i)
4. "Mo's principle is 'to love all equally,' which does not acknowledge the
   peculiar affection due to a father." — [Mencius, Teng Wen Gong II](https://ctext.org/mengzi/teng-wen-gong-ii)

Method: cloud-browser session; ctext.org's bot wall blocks this platform's
fetcher (broken_content_ip_block, re-confirmed this session) but the browser
serves the pages normally.

## Verification on the carriers (checks run 09:31-09:36Z, measured window)

- Analects 14.34 ([Xian Wen, item 34](https://ctext.org/analects/xian-wen)):
  the carrier passage — "Some one said, 'What do you say concerning the
  principle that injury should be recompensed with kindness?' The Master
  said, 'With what then will you recompense kindness? Recompense injury with
  justice, and recompense kindness with kindness.'" — contains BOTH flagged
  fragments (items 1 and 2) word-for-word.
- Mencius Teng Wen Gong I ([carrier](https://ctext.org/mengzi/teng-wen-gong-i)):
  Mencius' reply on Yi Zhi contains item 3 word-for-word ("Moreover, Heaven
  gives birth to creatures in such a way that they have one root, and Yi
  makes them to have two roots. This is the cause of his error.").
- Mencius Teng Wen Gong II ([carrier](https://ctext.org/mengzi/teng-wen-gong-ii)):
  the doctrines-that-fill-the-age passage contains item 4 word-for-word
  ("Mo's principle is 'to love all equally,' which does not acknowledge
  the peculiar affection due to a father.").

Extra evidence beyond the flags (not a flagged item — it sits in a
paragraph without a URL, so the verifier never checked it): the dossier's
inline Yi-position quote ("we are to love all without difference of degree;
but the manifestation of love must begin with our parents") is an exact
substring of the same Teng Wen Gong I carrier passage ("To me it sounds
that we are to love all without difference of degree; but the manifestation
of love must begin with our parents.").

## Verdict

- All four flagged spans are VERBATIM on their ctext.org Legge carriers; the
  dosr-band quote map is now 49 of 49 items adjudicated (43 false
  positives, 2 repairs pushed earlier, 4 ctext spans confirmed verbatim this
  session). No dossier text changes are needed.
- Blocked-host note for future verifiers: ctext.org stays on the map's
  blocked-hosts list for the platform fetcher (403/broken-content IP
  block); a cloud-browser session passes the wall. Do not reclassify the
  host as open for the fetcher — route ctext eye-checks through a browser.

Correction commit: follows the original push (4eb1a45a3); see the commit
message for the full list of corrections, including the disclosed removal
of one exact-duplicate OWNER-BOARD line by the earlier rebase conflict
cleanup.
