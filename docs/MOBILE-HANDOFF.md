# Mobile Responsiveness — Handoff

## What this is
The site (https://clemvillatte.github.io/flourishing-compendium/) works on desktop but is unusable on phones (tested: iPhone 16e, Chrome). The user (non-technical writer, the site's owner) asked for a careful mobile pass: Randomiser super-minimal, Library actually usable, Graph with collapsible panels and a collapsible node card, etc.

## Repo & deploy essentials
- Repo: /home/user/workspace/repo — clone of Clemvillatte/flourishing-compendium, branch main. `gh` CLI and git push are pre-configured (push goes through git-agent-proxy).
- Source of truth: content/*.md → scripts/build.py → site/data/wikiData.json.gz (gitignored; GitHub Actions "Build and deploy to Pages" builds it on every push, ~25-30s).
- Live check: `gh run list --repo Clemvillatte/flourishing-compendium --limit 1`, then `curl -s -o /tmp/f.js "https://clemvillatte.github.io/flourishing-compendium/assets/<file>.js?nocache=$(date +%s)" && md5sum /tmp/f.js site/assets/<file>` (must match).
- The user actively edits the site (editor writes commits directly to main). ALWAYS `git fetch origin && git rebase origin/main` before pushing; pushes get rejected otherwise.
- Git identity is configured locally. Never use or echo the user's GitHub token (it was once exposed in a screenshot; they were advised to regenerate it). QA in the browser must stub `window.fetch` (intercept api.github.com, return canned md, record PUTs) and set a dummy token `localStorage.setItem('fcgh_token','qa-dummy')` — never make real writes from QA.

## Architecture (files that matter here)
- site/index.html — all views' markup: #topbar (brand + #viewTabs + .topbar-utils), #stage > #randView / #wikiView / #graphView / #academyView, #cols (treeCol/listCol/readCol) inside wikiView, graph view has .graph-top (.graph-controls with #graphScope, #graphToggles, #graphFind, #graphResetBtn, #graphPhysBtn, #graphPhys panel), .graph-canvas-wrap (#graphCanvas, #graphArranging, #graphDrawer (.gdrawer), #graphLegend, .graph-hint).
- site/assets/style.css (~1410 lines) — one RESPONSIVE section near the end (existing breakpoints: 1220/1100/980/768/600; graph: 700). View switching is body classes: body.rand-mode / .wiki-mode / .graph-mode / .academy-mode (see app.js switchView).
- site/assets/app.js — Library read view renderer is renderEntry(e) (~line 612): builds #read markup, entryMeta buttons (Copy / +Add to essay / Edit ✏️ / Open in Graph →). Randomiser card renderer is render() (~line 2269, card-footer with Open in Library/Open in Graph). fcWiki.open(target) opens a Library page. switchView(v) at ~1473, window.fcSwitchView exported.
- site/assets/graph.js — the graph view. G (nodes/edges), activate(), focus(id) (switches to graph view + centers), openDrawer/renderDrawer for .gdrawer, gdConnectBtn → window.fcEditor2.graphConnect(selected.e). Drawer conn rows (.gd-conn) with .gd-conn-x two-click disconnect, .gd-manage "Manage all N connections". applyEdgeChange(a,b,removed) updates the live model on fc:edge events.
- site/assets/editor2.js — editor overlay (#editorSidebar), connect dialogs (openConnectStandalone for graph, buildEditorUI picker), commitConnect/graphDisconnect (GitHub API via api() helper — uses cache:'no-store'), checkbox batch connect (checkedIds + .fce-conn-batch). window.fcEditor2 = {open, openNew, graphConnect, graphDisconnect, manageConnections, ...}.
- Tests: /home/user/workspace/fc-test/test.js — jsdom, loads REAL editor2.js + real wikiData, 74 checks, stateful file mock (resetFiles(), recorded.failPaths for PUT failures). Run: `cd /home/user/workspace/fc-test && node test.js`. Add tests for any editor2.js behavior change.

## Mobile design decisions (agreed with the user)
1. **Global**: iOS 100vh bug → use 100dvh with fallback; bottom tab bar for view switching on phones; larger touch targets (min 44px); hide decorative text.
2. **Randomiser**: super minimal — hide the filter bar behind a "Filters" toggle; compact header; card + Next button dominate.
3. **Library**: read-first. The search/list column becomes a slide-over sheet opened from a floating "Browse" button; tree column hidden. Entry meta buttons wrap and stay tappable.
4. **Graph**: controls (.graph-top) hidden behind a floating menu button (☰); drawer becomes a bottom sheet with two states — collapsed (title + connection count peeking at the bottom edge) and expanded (tap to open). Legend + hint hidden on phones. The canvas gets the full screen.
5. **Editor**: full-screen overlay below ~600px.

## Status
- [x] Handoff written (this file)
- [x] Implemented and deployed: bottom tab bar (fixed, safe-area aware), dvh fix, Randomiser Filters button (toolbar hidden until tapped), Library Browse slide-over sheet (closes on entry pick / view switch), Graph ☰ menu button + collapsible controls + drawer as collapsed-by-default bottom sheet (tap header to expand), editor full-screen <600px, research rail raised above the tab bar
- [x] Academy: watched videos now dim + "✓ Watched" badge on the row (live-updates when toggled in the player), and watch state persists in localStorage key 'acadWatched' (previously lost on every reload)
- [x] jsdom tests pass (74/74)
- [x] Live-verified in cloud browser with iPhone metrics (390x844): tabs, no horizontal overflow, Randomiser filters, Library browse sheet open/pick/close, Academy watched badge + persistence, graph menu button + hidden controls + hidden legend
- [ ] NOT live-verified: the graph drawer bottom-sheet expand/collapse gesture (cloud browser cannot finish the graph arrange under mobile emulation — it needs 5+ min there; a real phone is much faster). Code is in graph.js openDrawer (sheet-collapsed class) + the gdrawer-head click handler; CSS in the ≤820px block. VERIFY ON A REAL PHONE: select a node → sheet peeks at the bottom → tap header → expands → tap again → collapses. If the peek hides the canvas too much, tune .gdrawer max-height (64dvh) or start expanded instead.
- [ ] Also verify on a real phone: graph touch pan/pinch (handlers exist: touchstart/touchmove in graph.js), and overall performance of the arrange on phone hardware. If the arrange is too slow on the phone, consider starting with fewer kinds visible (kindOn concept:false default helps) or reducing warmup ticks.
- Note: fcSwitchView('academy') alone does not render the Academy — click the #tabAcademy button (its click handler calls renderAcademy).
- QA in cloud browser with iPhone metrics: browser_use skill → browser_start({transport:'cloud', url}), then browser_cdp Emulation.setDeviceMetricsOverride {width:390,height:844,deviceScaleFactor:3,mobile:true}; poll `window.wikiData.length > 1000` before testing; the graph arrange takes 15-120s in the cloud (poll #graphArranging hidden, FIRST wait for it to become visible to avoid the race); always browser_stop({}) at the end.

## Gotchas
- The graph arrange overlay (#graphArranging) is hidden BEFORE activate() starts — wait for it to turn visible, then hidden, when measuring.
- Cloud browser is released after ~idle timeouts — a session may die mid-QA; just restart.
- graph.js drawer markup: .gdrawer-head (kicker + gdClose + gdTitle + gdDeg), .gdrawer-body, .gdrawer-foot (gdConnectBtn, gdOpenBtn, gdCenterBtn). Any new collapse toggle must not break gdClose.
- body classes drive view visibility — mobile CSS should key off the same classes, plus a `body.fc-mobile` class or matchMedia inline.
- Don't touch: research panel (extras.js, Pollinations — known hallucination issue, user aware), build.py, content/*.
