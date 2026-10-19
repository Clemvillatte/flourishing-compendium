# Mobile Responsiveness — Handoff

## What this is
The site (https://clemvillatte.github.io/flourishing-compendium/) works on desktop but is unusable on phones (tested: iPhone 16e, Chrome). The user (non-technical writer, the site's owner) asked for a careful mobile pass: Randomiser super-minimal, Library actually usable, Graph with collapsible panels and a collapsible node card, etc.

## Repo & deploy essentials
- Repo: /home/user/workspace/repo — clone of Clemvillatte/flourishing-compendium, branch main. `gh` CLI and git push are pre-configured (push goes through git-agent-proxy).
- Source of truth: content/*.md → scripts/build.py → site/data/wikiData.json.gz (gitignored; GitHub Actions "Build and deploy to Pages" builds it on every push, ~25-30s).
- Live check: `gh run list --repo Clemvillatte/flourishing-compendium --limit 1`, then `curl -s -o /tmp/f.js "https://clemvillatte.github.io/flourishing-compendium/assets/<file>.js?nocache=$(date +%s)" && md5sum /tmp/f.js site/assets/<file>` (must match).
- CACHE-BUSTING (learned the hard way): index.html pins THREE assets directly with `?v=` (style.css, boot.js, editor2.js) AND defines the master version inline: `<script>window.FC_VER = '20261018e';</script>` (~line 297). boot.js appends `?v=FC_VER` to app.js/extras.js/graph.js AND the three data/*.json.gz datasets. BUMP FC_VER (and the three ?v= strings) ON EVERY DEPLOY or browsers keep serving stale JS. The GitHub Actions build may do this — verify before pushing manually.
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


## Round 2 (user feedback fixes) — all deployed & QA-verified
- Academy was unreachable FROM THE GRAPH view: the academy-local switchView hijack (app.js ~line 2712) removed rand/wiki body classes but not 'graph-mode', so both views stayed visible. Fixed (both academy and gallery branches now remove graph-mode).
- Graph "can't touch anything / particle accelerator": the mobile .graph-top strip (absolute, full-width) had default pointer-events and swallowed touches near the top. Fixed: .graph-top pointer-events:none, .graph-controls auto (≤820px CSS).
- Graph speed on phones: warmup ticks 900 on ≤820px (1600 on desktop) — arrange ~44% faster. Render loop was already optimized (needsRender gating, viewport culling, node sprites, DPR cap 2, low-zoom edge gating). Data payload is 2MB gzipped — the remaining cost is physics + 4.3k nodes; that's the honest limit without deeper work.
- Randomiser minimal on phone: round gold star-icon draw button (SVG in #drawBtn, label hidden ≤820px), prev/next/today hidden, card eyebrow + pool position hidden, research rail hidden on mobile.
- Library: Browse sheet now has #libSectionSelect — a dropdown of every section built from the tree (.trow elements), picking one clicks the tree row (works though the tree is hidden). listMeta and #fcNewBtn hidden on mobile. Sheet has bottom padding so the tab bar doesn't cover the last row.
- QA pattern for Academy: use tab clicks (document.getElementById('tabAcademy').click()), NOT fcSwitchView — only the tab listener calls the academy hijack that renders.


## Round 3 (DONE — deployed & QA-verified)
All four items below are DONE. Additionally: the phone breakpoint was raised 820px → 920px (iPhone landscape is 844px wide and was falling back to the desktop header); openFromList now syncs state.cursor (the ◀ ▶ buttons and ↑/↓ keys previously needed TWO presses after opening an entry — first press landed on the current entry).
1. Header mobile: hide #helpBtn, #essayExportBtn, #essayClearBtn, #substackBtn, #contentBackupBtn in the ≤820px CSS block (they overflow off-screen, especially in landscape). Keep theme toggle.
2. Library: prev/next arrows in the read view — add stepEntry(d) helper in app.js (same logic as the ArrowUp/Down keyboard handler at ~line 1462: clamp state.cursor, openFromList, scrollIntoView), buttons #readPrev/#readNext rendered in renderEntry's entryMeta, plus a position indicator.
3. Remove the "Your notes (this entry)" draft panel: buildDraftPanel(e) call at app.js ~line 636 and wireDraftPanel() at ~677 (the panel is obsolete now that Edit exists; the draft data/draftGet/draftSet functions can stay dormant).
4. Graph mobile belts-only: in graph.js spread step (~line 891), the `else if (d < SPREAD_MINR)` branch pushes ALL nearby non-belt nodes outward ("make room") — on ≤820px skip that push (window.matchMedia('(max-width:820px)').matches) so only the belt members animate; everything else stays put. This is the user's "nodes don't move, just show the belts" request and removes the mobile lag.

## Round 4 (user feedback: graph STILL unusable on mobile) — DONE, QA-verified in preview
The user reported that selecting/deselecting/switching nodes still caused a chaotic animated reorganisation with heavy lag — "the animation of all the nodes makes it impossible". Two changes, both in graph.js:
1. **Phones snap, desktop glides**: new `spreadSnap` flag (same ≤920px media query + change listener as spreadNoRoom, set at graph.js ~line 515). In `applySpread` (~line 810), `k = spreadSnap ? 1 : 1-exp(-5*dt)` — belt targets are applied in ONE pass instead of eased over ~1-2s of frames; `spreadAnimating` is never set on phones, so the render loop stops immediately after the snap frame. Selecting, deselecting or switching a node is now a single (heavier) frame, then the canvas is fully static — no animation, no per-frame CPU. `separateDisplayed()` gets 3 extra passes on the snap frame only (no easing frames follow, so separation must converge up front). Desktop easing is untouched.
2. **N+2 off by default on phones** (load-time, graph.js ~line 27): `if (matchMedia('(max-width:920px)').matches) phys.nb2 = false`. Rationale: the user called the far belt "unperceivable" and asked for "N+1 or (N+1 > N+2)"; fitting a 96-node Z belt zooms out to ~0.05 where the graph is dots. With N+1-only, focus lands at a readable zoom (~0.45). The "Show N+2 (second belt)" toggle in the physics panel still works. Desktop default unchanged (N+2 on).
- QA hook added: `window.__physDebug()` returns the live physics settings (read-only).
- Verified in a preview deploy (see QA pattern below): desktop easing intact (offsets animate 0→1565→2244→2294 with z-belt 96 present); phone mode: deselect snaps to 0 in one frame (loop stops), select snaps straight to final 2294 (identical after 400ms, `running:false`), switching A→B→A all one-frame snaps; drawer bottom sheet + no horizontal overflow at 390px; phone-width load gives nb2:false, desktop-width load nb2:true; N+2-off view screenshotted (A001, 11-node Y belt, labels readable, zoom 0.465).
- NOT verified on a real phone: actual iPhone fluidity — ask the user to hard-refresh and try select/deselect/switch on the graph.

### Round 4 QA pattern (preview deploy — how to test local changes in the cloud browser)
The old cloud QA loaded the live site, which can't test local changes, and the sandbox browser transport is unavailable. Working pattern:
1. `python3 scripts/build.py` (repo root) regenerates site/data/*.json.gz (gitignored).
2. `deploy_website` on `site/` with `should_validate: false` (validation blocks on localStorage, which is all try/catch-guarded in the app — safe). Navigate the cloud browser to the returned internal_url.
3. **Bump `FC_VER` + the three `?v=` strings in index.html BEFORE deploying** — the proxy/browser serve stale JS otherwise (symptom: `__physDebug` undefined on the new build).
4. Arrange at DESKTOP metrics (default viewport): `tabGraph`.click() → wait for #graphArranging to become visible → `window.__qaFinishWarmup()` (the eval may time out — the sync warmup keeps running in-page; poll `__graphDebug().warmTicks === 0` after ~30-60s). Phone-emulated warmup can CRASH the tab — don't finish warmup under phone metrics.
5. Then `Emulation.setDeviceMetricsOverride {width:390,height:844,deviceScaleFactor:3,mobile:true}` — spreadSnap/spreadNoRoom flip live via the matchMedia listener; test select/deselect/switch via synthetic canvas events (see `__qaSelect` helper pattern in the transcript: mousedown on canvas at the node's screen position + mouseup on window, `moved` stays 0 → plain select).
6. Phone-only load defaults (like nb2) must be verified with a fresh page load WHILE the device override is active.
7. NOTE: /home/user/workspace/fc-test (jsdom suite) is NOT present in a fresh sandbox; it only covers editor2.js, which this round didn't touch.
