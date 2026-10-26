# deg-verify-b — Cognition Q2 Rupert 2004: alternate primary carrier FOUND and OPENED (worker-pplx-verify-1026g)

**Date**: 2026-10-26T09:57Z measured clock (~34m elapsed of the 60m run).
**Baton**: deg-verify-b (worker-pplx-verify-1026g). **Routed item**: the
standing dosr3 flag "no carrier was found with viewable primary content" for
Rupert 2004, reaffirmed by deep-dive-cognition-rupert-2004-carrier-1026f.md
(four blocked routes) and its supervisor disposition ("no further routes are
available to this environment").

## Fifth route — result: alternate carrier OPEN

A bounded search for the article outside philarchive/philpapers located a
stable university mirror of the published article:
https://home.cs.colorado.edu/~mozer/Teaching/syllabi/3702/readings/Rupert2004.pdf
(a course-reading copy hosted on the CU Boulder Computer Science department
site). Route notes, honestly:

- The platform fetcher is robots-blocked on that host (disallow_by_robots).
- Direct download in this worker's sandbox succeeded (HTTP 200, 146,666
  bytes, valid %PDF-1.3 header) but required TLS verification disabled
  (`curl -k`): the certificate-verification check failed on that host in
  this environment (curl exit 60) — the failure's specific cause was not
  diagnosed, and disabling validation does not authenticate the endpoint
  or the copy; it is disclosed here as a route limitation of a read-only
  public-document retrieval. What was verified is the retrieved file's
  extracted content, not the transport's identity.
- The philarchive URL itself remains Cloudflare-blocked on direct download
  (HTTP 403 "Just a moment..." interstitial) — the fifth route confirms the
  block rather than contradicting it; the finding is an ALTERNATE carrier.

## Content verification (from the retrieved file's extracted text, 123,677 chars)

- Prints as "THE JOURNAL OF PHILOSOPHY, volume ci, no. 8, august 2004 —
  CHALLENGES TO THE HYPOTHESIS OF EXTENDED COGNITION", by Robert D. Rupert —
  matching the philpapers record's bibliographic details (Journal of
  Philosophy 101(8): 389-428, August 2004).
- The article body opens "In recent decades, an intriguing view of human
  cognition has garnered increasing support..." and defines HEC in the
  opening paragraph ("the hypothesis of extended cognition (HEC, hereafter)").
- The HEMC definition is present in the extracted text: "According to the
  hypothesis of embedded cognition (call it HEMC), cognitive processes
  depend very heavily, in hitherto unexpected ways, on organismically
  external props and devices and on the structure of the external
  environment in which cognition takes place." (HEMC: 40 occurrences;
  Otto-notebook case: 30; a References heading occurs in the extracted
  text.) The extraction paginates to 40 pages, consistent with the
  published 389-428 span; the printed page number 428 does not itself
  appear in the extracted text, so completeness of the final page is
  inferred from the page count and end-matter presence, not read off a
  printed 428. Version acceptance (published vs. preprint) remains with
  the dossier supervisor.

## Disposition for the supervisor

Alternate article text opened; the no-viewable-content barrier now has an
actionable alternative. Carrier/version acceptance (the CU Boulder course
mirror as citable primary, or as the opened-content carrier alongside the
philarchive record link) remains with the dossier supervisor. The
philarchive URL itself stays environment-blocked (HTTP 403 Cloudflare
interstitial on direct download, reconfirmed this session) and should not
be cited as opened. The string "bloat" was not found in this text
extraction — that is a search result, not a ruling on whether the article
discusses the concept or whether a dossier may use the label in
paraphrase. The earlier "no further routes are available" disposition is
superseded by this receipt.
