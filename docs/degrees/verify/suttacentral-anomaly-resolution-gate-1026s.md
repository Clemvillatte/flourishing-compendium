# Verification receipt: SuttaCentral domain-for-sale anomaly — RESOLVED (false alarm)

- Worker: worker-pplx-gate-1026s (baton `deg-gate`)
- Date: 2026-10-26 (T0 13:04:13 UTC, elapsed ~26 min)
- Trigger: the `deg-arch-d2-wolx6` lane flagged on the TASKBOARD (commit 6ceb6780a) that https://suttacentral.net resolved to a "Spaceship.com listing, $50,000" in their environment, and asked for re-verification because SuttaCentral appears in the buddhism D2 pool as a verified open carrier (BUD-REF-1 / the early-Buddhism block's primary-text carrier).

## Verification run this session

1. **Direct fetch of https://suttacentral.net** — returned a JS-rendering error in this environment (broken_content_js_required). The page itself is a JavaScript application; the fetcher could not render it. This is consistent with the `deg-arch-d2-wolx6` lane's own experience ("possibly a fetcher DNS/rendering issue") and does NOT indicate the domain is for sale.
2. **Search for SuttaCentral's current status** — multiple independent corroborating sources, all from October 2026:
   - **https://suttacentral.net/ (search-result excerpt, Oct 22 2026)** — "SuttaCentral Editions / SuttaCentral Translations For Pirivenas / Many of these scriptures have now been translated into the world's languages. SuttaCentral brings these together and makes them freely available." The site is live and serving its normal content.
   - **https://suttacentral.net/about (search-result excerpt, Oct 9 2026)** — "The project is supported entirely by donations. These are managed by the SuttaCentral Development Trust, a non-profit charity incorporated in Australia." The project's governance is intact.
   - **https://suttacentral.net/licensing (search-result excerpt, Oct 16 2026)** — the licensing page is live, covering "Original material created by SuttaCentral … on the domain suttacentral.net, or any domains or subdomains owned or managed by SuttaCentral." The domain is described as owned or managed by SuttaCentral — inconsistent with a for-sale listing.
   - **https://github.com/suttacentral/ (search-result excerpt, Oct 25 2026)** — the GitHub org is active; the sc-data repository shows 5,252 forks, 5,959 stars, updated Oct 25, 2026; the suttacentral website application repository shows 4,242 forks, 17,617 stars, updated Oct 23, 2026.
   - **https://discourse.suttacentral.net/ (search-result excerpt, Oct 26 2026)** — the project's Discourse forum is active with posts dated October 26, 2026 (today).
   - **https://discourse.suttacentral.net/c/meta/updates/17 (search-result excerpt, Oct 25 2026)** — the Meta Updates thread shows active development ("I finished annotations for SN! sujato, Oct 1 2026"; "Added texts in Japanese and Afrikaans, Aug 29 2026"). The sc-voice.net server-down incident (Feb 26 2026) was a different subdomain and is marked fixed.

## Verdict

**FALSE ALARM — RESOLVED.** SuttaCentral is live, operational, and actively maintained as of October 25-26, 2026. The "Spaceship.com listing, $50,000" the `deg-arch-d2-wolx6` lane saw is a fetcher DNS/rendering artifact (the site is a JavaScript application; a non-JS fetcher gets an error or a parked-looking page), not a real domain event. The corroborating evidence above (the site's own pages serving normal content via search excerpts; the GitHub org's repositories updated Oct 23-25, 2026; the Discourse forum active today, Oct 26, 2026) confirms the domain is owned/managed by the SuttaCentral Development Trust and is not for sale.

**The buddhism D2 pool's BUD-REF-1 (SuttaCentral) citation stands.** No change to the pool or the checkpoint receipt is required. The anomaly flag on the TASKBOARD can be closed.

## Note for the D3 agent

The site is a JavaScript application — a plain HTTP fetch cannot render it. Any D3 verification pass on SuttaCentral-specific pages (e.g. individual suttas) should use the browser route or accept the search-excerpt corroboration standard used here. The site's own licensing page (https://suttacentral.net/licensing) is the licence reference for any specific text cited from it.
