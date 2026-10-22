# Deep links to entries (owner feature, 2026-10-22)

Every entry in the compendium now has its own web address. You can link a
card from a Substack essay the same way you link any page: write the
words, hyperlink them, paste the address.

## The address format

```
https://clemvillatte.github.io/flourishing-compendium/#card=<entry name>
```

The entry name is the page's file name, with spaces encoded as %20. For
example, the Psychological flexibility card:

```
https://clemvillatte.github.io/flourishing-compendium/#card=Psychological%20flexibility
```

Opening such an address lands the reader on that card directly, with the
tree opened to its place in the library. An entry id (P055, K149, C123)
works too.

## Two ways to copy it

- Open the card in the wiki. The address bar always mirrors the card you
  are reading, so the address can be copied straight from the browser.
- Every card has a Copy link button next to the existing Copy button. One
  click puts the full address on the clipboard.

## Notes

- While browsing the wiki, the address bar keeps step with the open card,
  so any card you are reading can be linked immediately.
- The Randomiser view does not change the address; whatever card you last
  opened in the wiki stays in the address bar.
- An address whose name does not match any card leaves the site on its
  default view, nothing breaks.
- This removes the old limitation recorded in docs/MOBILE-HANDOFF.md and
  docs/DEGREE-CMP-HANDOFF-3.md (the app previously had no URL routing).
