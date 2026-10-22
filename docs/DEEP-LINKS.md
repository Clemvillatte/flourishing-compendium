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

## Every tab and page has an address too

The same idea now covers the views, not just the cards:

```
#view=rand      Randomiser
#view=wiki      Library (a specific entry keeps its #card= address)
#view=graph     Graph
#view=edit      Editor (the sidebar over the Library)
#view=academy   Academy home
#view=gallery   Discovery gallery (Flourishing Gallery)
#degree=<id>    An Academy degree page, e.g. #degree=deg-cmp
#practice=<id>  A degree page scrolled to its guided practice sessions
#module=<id>    An Academy module page, e.g. #module=mod-cmp-1
#explorer       Source explorer (More videos)
```

Opening any of these addresses lands on that page. While you browse, the
address bar mirrors the view you are in, and switching tabs or pages
updates it. An address whose id does not match anything (a degree or
module that does not exist) leaves the site on its default view, nothing
breaks. The Randomiser now carries its own address while it is open.

## Notes

- While browsing the wiki, the address bar keeps step with the open card,
  so any card you are reading can be linked immediately.
- While a card is open in the Library, its #card= address owns the address
  bar; the other views take the bar back over as soon as you switch to
  them.
- An address whose name does not match any card leaves the site on its
  default view, nothing breaks.
- This removes the old limitation recorded in docs/MOBILE-HANDOFF.md and
  docs/DEGREE-CMP-HANDOFF-3.md (the app previously had no URL routing).
