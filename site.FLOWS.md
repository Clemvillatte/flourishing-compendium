# Existing site flows and GF review

Scope: preserve the existing editorial design. No redesign or data schema change.

## Cold boot and primary navigation
- Start: existing GitHub Pages URL, fresh cloud browser.
- Expect: Randomiser draws an entry, Library opens the collection,
  Academy opens its tabs. No caught or uncaught script errors.
- Baseline defect: removed optional `stats` element is written without a
  null guard, aborting Wiki initialisation and then Randomiser/Academy.

## Dossier reading
- Academy, Dossiers, Genuine Flourishing.
- Expect: latest manuscript, distinct question-led headings, readable
  paragraphs, no evidence-status badges or rejected quotation wall.
- Contents link jumps to its section. Internal card link opens the
  intended entry. Back navigation returns to reading.
- Desktop and375px: content fits, links work, navigation remains available.

## Library and search
- Library, type a known title, open one entry.
- Expect: matching title and readable body.

## Graph
- Graph tab.
- Expect: graph view opens, no new console errors.

## Local-only controls
- Theme toggle and Randomiser next draw.
- Expect: visible theme/entry change. No external forms, account actions,
  downloads or durable user browser changes.

## Dataset and registry preservation
- Existing15 published dossiers,16 roadmap entries,6 groups unchanged.
- GF147 original card occurrence multiset unchanged.
- Registry rebuild only for genuine-flourishing.
