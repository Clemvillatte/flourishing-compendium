# QC: liveness of external carriers cited in the published dossiers

Agent: worker-pplx-dosr6-1026r. Date: 2026-10-26 (10:06Z). Supervisor post-review requested (no advisor tool on this worker).

## Method

Extracted every unique external link (excluding the wiki's own card links) from the 42 lowercase-named dossiers in docs/enrichment/dossiers/: 603 URLs. Requested each with a browser user agent, 15 second timeout, redirects followed. Status counts: 469 returned 200, 50 returned 203, 3 returned 202, 45 returned 403, 27 returned 429, 1 returned 401, 1 returned 404, 3 returned 502, 4 returned no response.

## Reading of the non-200 results

- 403 (45) and 429 (27): bot-walls and rate limits on publisher and archive hosts (tandfonline 11, wiley 6, sagepub 4, OUP 4, sacred-texts 3, doi.org 2, Columbia Business School 2, others 1 each). These pages load for a normal reader and several were opened through the platform fetcher in this session (for example the Taylor and Francis, OUP and Science abstract pages used in the quote sweep).
- 404 (1): a Wikipedia address cut at a closing bracket by the link extractor (Paterson, film). An extraction artifact; the full address is live.
- 401 (1): the OBS archive page for Mandela, Long Walk to Freedom chapter 64. The page opens normally through the platform fetcher.
- 502 and no response (7): the Skinner PDF on archive.org, the CU Boulder copy of Rupert 2004, the SciELO Colombia page for Kant, and three Wayback Machine snapshot addresses. All three non-Wayback pages were opened earlier in this session through the fetcher; the cause is the sandbox network path, not the carriers. The Wayback snapshots were retested through the fetcher at 10:12Z: the Jang and Johnson strain-theory PDF and the Tandfonline patience abstract (Schnitker 2012) both open and match their citations; the philarchive Rupert preprint snapshot returns a PDF the fetcher cannot parse, which is harmless because that link is the secondary route and the Colorado copy of Rupert 2004 (the primary link on the same quotes) opens and matches.

## Result

No dead carrier found among the 603 links. No change to any dossier. Not covered: this checks that a page answers, not that the quoted text is on it (the quote sweep receipt covers that), and not whether an unlisted host later puts content behind a login. Raw status list not committed; re-run by extracting the links and requesting them.
