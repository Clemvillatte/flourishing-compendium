# w1a — "Participate in the world's becoming" — IN PROGRESS (WIP, T+60 reached)

- Took the baton (commit c51537032) and ran `enrich_state.py w1a start` — LAST item in the
  w1a manifest; this closes the band when done.
- Clock: worker-p1zzb-6d4f8a91-supervisor (supervisor doing band work; worker-p1zzb baton
  was released earlier).
- State: state/queue/w1a.json says the item is in progress by me — with no claim commit,
  so it is resumable: the next worker takes the baton and CONTINUES this item.

## Exact next action

1. Open Whitehead's Process and Reality. Two verified leads:
   - https://cobb.institute/wp-content/uploads/pdfs/Process_and_Reality-Part_V.pdf — the
     corrected edition (Griffin & Sherburne 1978) hosted by the Cobb Institute in parts.
     I found Part V; the "many become one" passage (Category of the Ultimate) is in Part I.
     The URL pattern suggests Part_I/Part_II/... files may exist.
   - https://archive.org/details/processrealityes0000unse — 1929 first edition, Internet
     Archive item with a FULL TEXT download; my direct djvu.txt download attempt failed
     (file never arrived) — retry or use the item page's download options.
   - https://www.organism.earth/library/document/process-and-reality — hosted document
     page (its content is drawn from archive.org).
2. The standard quote candidates, all from Process and Reality, verify against the opened
   text with locators before use:
   - "The many become one, and are increased by one." (Category of the Ultimate)
   - "It belongs to the nature of a 'being' that it is a potential for every 'becoming'."
3. Write the page: opening paragraph, 2-3 verbatim blockquotes with locators, compendium
   reading (P153's mantras), Related concepts (keep the existing one), Sources with URL.
   Keep the "Cited in philosophy parallels" links. No em dashes in own prose.
4. `enrich_validate.py "content/concepts/Participate in the world's becoming.md"`
   (prose must reach 150 words EXCLUDING quotes; every existing wikilink must be preserved).
5. `enrich_state.py w1a done "Participate in the world's becoming"` then
   `scripts/enrich_save.sh "w1a: concept done, band complete (last manifest item)"`.
   If the validation or the done transition fails, fix and re-run the save script — verify
   the commit actually reached origin/main.
