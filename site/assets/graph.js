/* ═════════════════════════════════════════════════════════════════════
   GRAPH VIEW — an Obsidian-like knowledge graph of the whole compendium.
   Nodes: principles, kernels, concepts, theories, stories, hubs.
   Edges: every resolved [[wiki link]] between them.
   Vanilla canvas force-directed layout — no libraries, works offline.
   ═════════════════════════════════════════════════════════════════════ */
(function () {
'use strict';

/* ---------- state ---------- */
let G = null;                 // {nodes, edges, nodeById}
let inited = false;
let running = false;
let alpha = 0;                // physics heat
let cam = { x: 0, y: 0, zoom: 0.3 };
let camAnim = null;           // {fromX..} camera glide
let hover = null, selected = null, dragged = null;
let panning = false, moved = 0;
let lastMouse = null;
let lastClickNode = null, lastClickT = 0;   // dblclick fallback: the node may ease away between the two clicks
let needsRender = true;
let labelMinDeg = 14;         // always-on labels: the ~140 most connected nodes
/* physics tuning, exposed as sliders in the Layout settings popover.
   1 = the shipped default. Persisted per browser. */
const PHYS_DEF = { rep: 1, spring: 1, linkLen: 1, nodeSize: 1, gravity: 1, degEmph: 0, belts: true, nb2: true };
let phys = { ...PHYS_DEF };
/* preview build: layout settings are session-only (in-memory) */
function savePhys() { /* preview build: nothing to persist */ }
/* Node radius from degree. phys.degEmph (0–1) bends the curve: at 0 the size
   is PROPORTIONAL to the connection count; towards 1 the mapping becomes
   super-linear so heavily-connected nodes visually dominate. The radius
   ceiling GROWS with the emphasis so the biggest hubs stay distinguishable
   from each other at the strong end (only ~deg ≥ 70 reaches it at 100%).
   The deg-8 node stays ~5px at every emphasis level (the anchor); low-degree
   nodes shrink slightly and hubs grow as the emphasis rises. */
function nodeRadius(deg) {
  const emph = phys.degEmph || 0;
  const e = 1 + 0.5 * emph;
  const cap = 46 + 34 * emph;   // 46px at 0% → 80px at 100%
  return 2 + Math.min(cap, 3.0 * phys.nodeSize * Math.pow(deg / 8, e));
}
function applyNodeSizes() {
  if (!G) return;
  for (const n of G.nodes) n.r = nodeRadius(n.deg);
  G.paintOrder = G.nodes.slice().sort((a, b) => b.r - a.r);   // keep big-under/small-over paint order
  // node radii changed — the belts' weighted angular slots are sized from them,
  // so rebuild the slots for the current selection AND re-fit the view: the
  // rings grow with the nodes, and a fit computed for the old radii would
  // leave the outer belt off screen
  if (selected && selected.visible && phys.belts) { setSpread(selected); fitToBelts(); }
  // bigger radii can make the frozen layout overlap — re-separate it. Cheap
  // when already clean (one confirming pass, early break), and it must run
  // even without a selection: the size/emphasis sliders work while frozen.
  declutter();
}
let adj = null;               // id -> [neighbor nodes] (mini graph)
let scopeValue = 'all';
let findMatches = [], findIdx = 0;   // search cache (shared: bindEvents' handlers + fcGraph.focus reset it)
// Launch defaults: principles + kernels on (the user's "principles only" wish —
// concepts/theories/stories are 4,500+ nodes and make the first launch laggy;
// the full set is one click away on the toggle bar).
const kindOn = { principle: true, kernel: true, concept: false, theory: false, story: false, saying: false };
const KIND_LABEL = { principle: 'Principle', kernel: 'Kernel', concept: 'Concept', theory: 'Theory', story: 'Story', saying: 'Saying' };
const KIND_PLURAL = { principle: 'Principles', kernel: 'Kernels', concept: 'Concepts', theory: 'Theories', story: 'Stories', saying: 'Sayings' };

/* ---------- dom ---------- */
const $ = id => document.getElementById(id);
let canvas, ctx, wrap, scopeSel, togglesEl, findInp, legendEl, arrangingEl, drawer;
const gd = {};   // drawer element refs

/* ---------- helpers ---------- */
function kindOf(e) {
  if (e.type === 'principle') return 'principle';
  if (e.type === 'kernel') return 'kernel';
  if (e.type === 'concept') return ((e.tags || []).indexOf('theory') >= 0) ? 'theory' : 'concept';
  if (e.type === 'story') return 'story';
  if (e.type === 'hub') return 'hub';
  if (e.type === 'discipline') return 'discipline';
  if (e.type === 'saying') return 'saying';
  return null;
}

function cssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

let colorCache = null, colorKey = '';
function colors() {
  const key = (document.documentElement.getAttribute('data-theme') || '') + '|' + (document.body.className.match(/dark|light/) || '');
  if (colorCache && colorKey === key) return colorCache;
  colorCache = {
    principle: cssVar('--g-principle') || cssVar('--gold') || '#8f7017',
    kernel: cssVar('--g-kernel') || cssVar('--verm') || '#b34328',
    concept: cssVar('--g-concept') || '#5f7d8c',
    theory: cssVar('--g-theory') || '#8a5f9e',
    story: cssVar('--g-story') || '#6f8f5f',
    hub: cssVar('--g-hub') || cssVar('--text'),
    discipline: cssVar('--g-disc') || cssVar('--faint'),
    saying: cssVar('--g-saying') || '#b08bc0',
    edge: cssVar('--g-edge') || 'rgba(90,84,60,0.13)',
    text: cssVar('--text'),
    halo: cssVar('--gold-bright') || '#ae8b1c',
    bg: cssVar('--bg')
  };
  colorKey = key;
  return colorCache;
}

/* ---------- node sprites (aesthetic pass) ----------
   Nodes are drawn from small pre-rendered sprites instead of flat fills:
   a faint outer glow, a gently graded core and a fine rim, rendered once
   per kind colour and rebuilt on theme change. The core radius is exactly
   n.r, so hit-testing, label collision, radii and layout are untouched; the
   glow reaches 1.3× that and is deliberately subtle (dense overlaps must
   not read as a particle field). Tiny on-screen nodes (< ~2.4px) stay flat
   fills — shading is invisible at that size and crispness matters more.
   Nodes drawn near/above sprite resolution (the few biggest hubs, zoomed
   in) are rendered as vector gradients so they never look soft. */
const SPRITE_GLOW = 1.3;
let nodeSprites = null, nodeSpriteKey = null, nodeSpriteLight = false;
function parseColor(s) {
  s = String(s || '').trim();
  let m = s.match(/^#([0-9a-f]{6})$/i);
  if (m) return [parseInt(m[1].slice(0, 2), 16), parseInt(m[1].slice(2, 4), 16), parseInt(m[1].slice(4, 6), 16)];
  m = s.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
  if (m) return [parseInt(m[1] + m[1], 16), parseInt(m[2] + m[2], 16), parseInt(m[3] + m[3], 16)];
  m = s.match(/^rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/i);
  if (m) return [+m[1], +m[2], +m[3]];
  return [128, 128, 128];
}
function mixC(rgb, target, t) { return [rgb[0] + (target[0] - rgb[0]) * t, rgb[1] + (target[1] - rgb[1]) * t, rgb[2] + (target[2] - rgb[2]) * t]; }
function rgbaC(rgb, a) { return 'rgba(' + Math.round(rgb[0]) + ',' + Math.round(rgb[1]) + ',' + Math.round(rgb[2]) + ',' + a + ')'; }
function buildNodeSprites(c) {
  const S = 192;                      // sprite resolution — ample for on-screen node sizes
  const coreR = S / 2 / SPRITE_GLOW;  // core fits inside; halo reaches the canvas edge
  const bg = parseColor(c.bg);
  nodeSpriteLight = (bg[0] * 0.299 + bg[1] * 0.587 + bg[2] * 0.114) > 150;
  const kinds = ['principle', 'kernel', 'concept', 'theory', 'story', 'saying'];
  nodeSprites = {};
  for (const k of kinds) {
    const base = parseColor(c[k]);
    const spr = document.createElement('canvas');
    spr.width = spr.height = S;
    const g = spr.getContext('2d');
    const cx = S / 2, cy = S / 2;
    // halo — narrow and faint; light on dark themes, a marker tint on light ones
    const halo = g.createRadialGradient(cx, cy, coreR * 0.55, cx, cy, S / 2);
    halo.addColorStop(0, rgbaC(base, nodeSpriteLight ? 0.13 : 0.2));
    halo.addColorStop(1, rgbaC(base, 0));
    g.fillStyle = halo;
    g.beginPath(); g.arc(cx, cy, S / 2, 0, 6.2832); g.fill();
    // core — gentle top-left grading (no specular pop), base colour at the edge
    const grad = g.createRadialGradient(cx - coreR * 0.22, cy - coreR * 0.22, coreR * 0.1, cx, cy, coreR);
    grad.addColorStop(0, rgbaC(mixC(base, [255, 255, 255], nodeSpriteLight ? 0.3 : 0.22), 1));
    grad.addColorStop(1, rgbaC(base, 1));
    g.fillStyle = grad;
    g.beginPath(); g.arc(cx, cy, coreR, 0, 6.2832); g.fill();
    // fine rim — a slight darkening gives definition on both themes
    g.strokeStyle = rgbaC(mixC(base, [0, 0, 0], 0.22), 0.85);
    g.lineWidth = Math.max(1.5, S / 128);
    g.beginPath(); g.arc(cx, cy, coreR - g.lineWidth / 2, 0, 6.2832); g.stroke();
    nodeSprites[k] = spr;
  }
  nodeSpriteKey = colorKey;
}
function drawNode(n, c, z, dpr) {
  const x = dispX(n), y = dispY(n);
  const sr = n.r * z;                    // on-screen core radius (CSS px)
  if (!nodeSprites || sr < 2.4) {       // tiny node (or sprites not built yet): flat fill, crisp
    ctx.fillStyle = c[n.kind] || c.hub;
    ctx.beginPath(); ctx.arc(x, y, n.r, 0, 6.2832); ctx.fill();
    return;
  }
  const R = n.r * SPRITE_GLOW;
  if (2 * R * z * dpr > 176) {          // at/above sprite resolution in DEVICE px: vector render (few nodes)
    const base = parseColor(c[n.kind] || c.hub);
    const halo = ctx.createRadialGradient(x, y, n.r * 0.55, x, y, R);
    halo.addColorStop(0, rgbaC(base, nodeSpriteLight ? 0.13 : 0.2));
    halo.addColorStop(1, rgbaC(base, 0));
    ctx.fillStyle = halo;
    ctx.beginPath(); ctx.arc(x, y, R, 0, 6.2832); ctx.fill();
    const grad = ctx.createRadialGradient(x - n.r * 0.22, y - n.r * 0.22, n.r * 0.1, x, y, n.r);
    grad.addColorStop(0, rgbaC(mixC(base, [255, 255, 255], nodeSpriteLight ? 0.3 : 0.22), 1));
    grad.addColorStop(1, rgbaC(base, 1));
    ctx.fillStyle = grad;
    ctx.beginPath(); ctx.arc(x, y, n.r, 0, 6.2832); ctx.fill();
    ctx.strokeStyle = rgbaC(mixC(base, [0, 0, 0], 0.22), 0.85);
    ctx.lineWidth = Math.max(0.75, 1.5 / z);
    ctx.beginPath(); ctx.arc(x, y, n.r - ctx.lineWidth / 2, 0, 6.2832); ctx.stroke();
    return;
  }
  ctx.drawImage(nodeSprites[n.kind] || nodeSprites.hub, x - R, y - R, R * 2, R * 2);
}

/* ---------- graph build ---------- */
function buildGraph() {
  const data = window.wikiData;
  const byFile = new Map(), byId = new Map();
  for (const e of data) {
    if (e.file && !byFile.has(e.file)) byFile.set(e.file, e);
    if (e.id && !byId.has(e.id)) byId.set(e.id, e);
  }
  const nodes = [], nodeById = new Map();
  const entryByFile = byFile;
  for (const e of data) {
    const k = kindOf(e);
    if (!k) continue;
    const n = { e, id: e.id, kind: k, deg: 0, x: 0, y: 0, vx: 0, vy: 0, ox: 0, oy: 0, r: 3, hidden: false };
    nodes.push(n);
    nodeById.set(e.id, n);
  }
  const linkRe = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;
  const edges = [], seen = new Set();
  for (const n of nodes) {
    const c = n.e.content || '';
    if (c.indexOf('[[') < 0) continue;
    linkRe.lastIndex = 0;
    let m;
    while ((m = linkRe.exec(c)) !== null) {
      const t = (m[1] || '').trim();
      if (!t) continue;
      const target = byFile.get(t) || byId.get(t);
      if (!target || target.id === n.id) continue;
      const tn = nodeById.get(target.id);
      if (!tn) continue;
      const key = n.id < target.id ? n.id + '\u0001' + target.id : target.id + '\u0001' + n.id;
      if (seen.has(key)) continue;
      seen.add(key);
      edges.push([n, tn]);
      n.deg++; tn.deg++;
    }
  }
  for (const n of nodes) n.r = nodeRadius(n.deg);
  // Always-on labels are limited to the ~140 most connected nodes (hubs and
  // anchors); everything else is labelled only through the hover chain
  // (focus → its neighbours → their neighbours), still collision-checked.
  const degs = nodes.map(n => n.deg).sort((a, b) => b - a);
  labelMinDeg = degs[Math.min(140, degs.length - 1)] || 1;
  const byDeg = nodes.slice().sort((a, b) => b.deg - a.deg);
  // paint order: LARGE nodes first, small ones on top — a small node that a
  // big one would cover stays visible and clickable (mirrors the hit-test,
  // which prefers the smallest node containing the pointer)
  const paintOrder = nodes.slice().sort((a, b) => b.r - a.r);
  G = { nodes, edges, nodeById, byDeg, paintOrder, entryByFile };
  adj = new Map();
  for (const [a, b] of edges) {
    if (!adj.has(a.id)) adj.set(a.id, []);
    if (!adj.has(b.id)) adj.set(b.id, []);
    adj.get(a.id).push(b);
    adj.get(b.id).push(a);
  }
  if (scopeSel) buildScopeOptions();
}

/* ---------- scope ---------- */
function groupTitleMap() {
  const m = new Map();
  for (const e of window.wikiData) {
    if (e.type === 'navnode' && e.id && e.title) m.set(e.id, e.title);
  }
  return m;
}

function buildScopeOptions() {
  const titles = groupTitleMap();
  const tracks = { 'NAV-PHILOSOPHY': 'Philosophy track', 'NAV-PSYCHOLOGY': 'Psychology track' };
  const groups = new Map(); // groupId -> trackId
  for (const n of G.nodes) {
    if (n.kind !== 'principle' && n.kind !== 'kernel') continue;
    const pp = (n.e._navigation || {}).primaryPath || [];
    if (pp.length) groups.set(pp[pp.length - 1], pp[0]);
  }
  let html = '<option value="all">Everything</option>';
  for (const [tid, tlabel] of Object.entries(tracks)) {
    const opts = [...groups.entries()].filter(([, tr]) => tr === tid)
      .sort((a, b) => (titles.get(a[0]) || a[0]).localeCompare(titles.get(b[0]) || b[0]));
    if (!opts.length) continue;
    html += `<optgroup label="${tlabel}">`;
    for (const [gid] of opts) {
      const t = titles.get(gid) || gid;
      html += `<option value="${gid}">${t}</option>`;
    }
    html += '</optgroup>';
  }
  scopeSel.innerHTML = html;
  scopeSel.value = scopeValue = 'all';
}

function applyScope(val) {
  scopeValue = val;
  const vis = new Set();
  const conceptish = k => k === 'concept' || k === 'theory' || k === 'hub' || k === 'discipline';
  for (const n of G.nodes) {
    const pp = (n.e._navigation || {}).primaryPath || [];
    if (val === 'all' || pp.indexOf(val) >= 0) vis.add(n.id);
  }
  if (val !== 'all') {
    // concept-ish nodes appear when linked to something visible
    for (let i = 0; i < 3; i++) {   // small fixed-point iteration (concept→principle→concept)
      let changed = false;
      for (const [a, b] of G.edges) {
        const av = vis.has(a.id), bv = vis.has(b.id);
        if (av && !bv && conceptish(b.kind)) { vis.add(b.id); changed = true; }
        if (bv && !av && conceptish(a.kind)) { vis.add(a.id); changed = true; }
      }
      if (!changed) break;
    }
  }
  for (const n of G.nodes) n.hidden = !vis.has(n.id);
  applyToggles();
}

function applyToggles() {
  for (const n of G.nodes) n.toggledOff = !kindOn[n.kind];
  for (const n of G.nodes) n.visible = !n.hidden && !n.toggledOff;
  needsRender = true;
}

/* ---------- layout ---------- */
function seedPositions() {
  // park hidden nodes far away so they never take part in the layout
  for (const n of G.nodes) if (!n.visible) { n.x = 1e7; n.y = 1e7; n.vx = n.vy = 0; }
  if (scopeValue !== 'all') {
    // scoped graph: seed the visible nodes as a roomy random disk — springs and
    // repulsion then organise clusters naturally (a single-book 'ring' seed
    // collapses onto one radial line, which the physics cannot recover from).
    const vis = G.nodes.filter(n => n.visible);
    const R = Math.sqrt(vis.length) * 46;
    for (const n of vis) {
      const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * R;
      n.x = Math.cos(a) * r; n.y = Math.sin(a) * r;
      n.vx = n.vy = 0;
    }
    return;
  }
  // 'everything': principles/kernels cluster by book on a big ring; concepts start near center
  const groups = new Map();
  let i = 0;
  for (const n of G.nodes) {
    if (!n.visible) continue;
    const pp = (n.e._navigation || {}).primaryPath || [];
    const gid = (n.kind === 'principle' || n.kind === 'kernel' || n.kind === 'story') && pp.length ? pp[pp.length - 1] : null;
    if (gid && !groups.has(gid)) { groups.set(gid, (i++) * 2 * Math.PI / 24); }
  }
  const R = 140 + groups.size * 26;
  for (const n of G.nodes) {
    if (!n.visible) continue;
    const pp = (n.e._navigation || {}).primaryPath || [];
    const gid = (n.kind === 'principle' || n.kind === 'kernel' || n.kind === 'story') && pp.length ? pp[pp.length - 1] : null;
    if (gid) {
      const a = groups.get(gid) || 0;
      n.x = Math.cos(a) * R * (0.55 + Math.random() * 0.5);
      n.y = Math.sin(a) * R * (0.55 + Math.random() * 0.5);
    } else {
      const a = Math.random() * Math.PI * 2, r = Math.random() * (R * 0.5);
      n.x = Math.cos(a) * r; n.y = Math.sin(a) * r;
    }
    n.vx = n.vy = 0;
  }
}

function step() {
  const nodes = [];
  for (const n of G.nodes) if (n.visible) nodes.push(n);
  // grid repulsion
  const cell = 160;
  const grid = new Map();
  for (const n of nodes) {
    const k = Math.floor(n.x / cell) + ',' + Math.floor(n.y / cell);
    let arr = grid.get(k);
    if (!arr) { arr = []; grid.set(k, arr); }
    arr.push(n);
  }
  const R = 160, R2 = R * R, REP = 4200 * alpha * phys.rep;
  for (const n of nodes) {
    const cx = Math.floor(n.x / cell), cy = Math.floor(n.y / cell);
    for (let gx = cx - 1; gx <= cx + 1; gx++) for (let gy = cy - 1; gy <= cy + 1; gy++) {
      const arr = grid.get(gx + ',' + gy);
      if (!arr) continue;
      for (const o of arr) {
        if (o === n) continue;
        let dx = n.x - o.x, dy = n.y - o.y;
        let d2 = dx * dx + dy * dy;
        if (d2 > R2) continue;
        if (d2 < 1) {
          // Nodes exactly on top of each other: push the PAIR in opposite
          // directions so they actually separate. The old +0.7/+0.7 for both
          // nodes pushed coincident piles along the same diagonal at max
          // speed — nodes "floating" away and a collapsed layout.
          d2 = 1;
          const s = n.id < o.id ? 1 : -1;
          dx = 0.7 * s; dy = 0.7 * s;
        }
        const d = Math.sqrt(d2);
        const f = REP / Math.max(d2, 30);
        n.vx += (dx / d) * f; n.vy += (dy / d) * f;
      }
    }
  }
  // springs on edges
  for (const [a, b] of G.edges) {
    if (!a.visible || !b.visible) continue;
    const dx = b.x - a.x, dy = b.y - a.y;
    const d = Math.sqrt(dx * dx + dy * dy) || 0.01;
    const L = (46 + Math.min(a.deg, b.deg) * 1.6) * phys.linkLen;
    const f = (d - L) * 0.005 * (0.35 + alpha * 0.65) * phys.spring;
    const ux = dx / d, uy = dy / d;
    a.vx += ux * f; a.vy += uy * f;
    b.vx -= ux * f; b.vy -= uy * f;
  }
  // gentle gravity + integrate
  for (const n of nodes) {
    n.vx -= n.x * 0.0002 * phys.gravity; n.vy -= n.y * 0.0002 * phys.gravity;
    n.vx *= 0.86; n.vy *= 0.86;
    if (n === dragged) continue;
    n.x += Math.max(-10, Math.min(10, n.vx));
    n.y += Math.max(-10, Math.min(10, n.vy));
  }
  // radius-aware collision, AFTER integration — the repulsion above is
  // distance-based and lets nodes of different sizes rest ON each other
  // (small kernels buried inside big principles). A positional correction
  // at the end of every tick means every RENDERED frame is separation-clean:
  // warmup, settle and live drag alike. declutter() at the freeze points is
  // the final polish. Displacement is inversely weighted by radius (big
  // nodes barely move) and the dragged node never moves — the pile opens
  // around it. Passes loop until a full pass makes no correction (every pair
  // clear) with a cap: a jammed pile needs a few rounds, and a single pass can
  // push a node back onto an already-corrected neighbour. Steady state is
  // cheap — one corrective pass plus one confirming pass.
  // During WARMUP the pass runs every 4th tick only (mid-arrangement the
  // nodes are dimmed and label-less, so transient overlaps are invisible —
  // only the frozen end state must be clean, and the declutter() at freeze
  // guarantees that); visible physics (drag/settle) always runs it.
  if (warmTicks === 0 || warmTicks % 4 === 0) {
  const maxPass = warmTicks > 0 ? 1 : 16;
  // collision grid cell: must cover the largest required separation
  // (2 × max radius + clearance) or an overlapping pair can sit in cells two
  // indices apart and escape the ±1-cell search (max radius is 82px at full
  // degree emphasis → 166px separation > the 160px repulsion cell)
  let colMaxR = 0;
  for (const n of nodes) if (n.r > colMaxR) colMaxR = n.r;
  const ccell = Math.max(cell, colMaxR * 2 + 8);
  for (let pass = 0; pass < maxPass; pass++) {
    const cgrid = new Map();
    for (const n of nodes) {
      const k = Math.floor(n.x / ccell) + ',' + Math.floor(n.y / ccell);
      let arr = cgrid.get(k);
      if (!arr) { arr = []; cgrid.set(k, arr); }
      arr.push(n);
    }
    let corrected = false;
    for (const n of nodes) {
      const gx = Math.floor(n.x / ccell), gy = Math.floor(n.y / ccell);
      for (let ox = -1; ox <= 1; ox++) for (let oy = -1; oy <= 1; oy++) {
        const arr = cgrid.get((gx + ox) + ',' + (gy + oy));
        if (!arr) continue;
        for (const o of arr) {
          if (o === n || String(o.id) <= String(n.id)) continue;   // each pair once
          let dx = o.x - n.x, dy = o.y - n.y;
          const min = n.r + o.r + 2;
          let d2 = dx * dx + dy * dy;
          if (d2 >= min * min) continue;
          corrected = true;
          let d = Math.sqrt(d2);
          let ux, uy;
          if (d > 0.01) { ux = dx / d; uy = dy / d; }
          else { const ang = hash01(n.id) * 6.2832; ux = Math.cos(ang); uy = Math.sin(ang); d = 0.01; }
          const push = (min - d) * 0.7;
          if (n === dragged) { o.x += ux * push; o.y += uy * push; }
          else if (o === dragged) { n.x -= ux * push; n.y -= uy * push; }
          else {
            const wn = o.r / (n.r + o.r), wo = n.r / (n.r + o.r);
            n.x -= ux * push * wn; n.y -= uy * push * wn;
            o.x += ux * push * wo; o.y += uy * push * wo;
          }
        }
      }
    }
    if (!corrected) break;   // fully separated — skip the remaining passes
  }
  }
  alpha *= 0.997;
}

let warmTicks = 0, fitAfterWarmup = false;
let pendingFocus = null;   // node to select+center once the warmup reveal lands
/* Live physics: while the user drags a node or slides a force slider, the
   simulation keeps running (small alpha) so neighbours trail the dragged node
   and the layout morphs under the slider — direct feedback, no full re-layout.
   On release, a short bounded settle runs and the graph freezes again.
   NOTE: drag gestures only start physics once the drag threshold is crossed
   (a plain click must NOT leave the simulation running forever). */
let liveMode = false, settleTicks = 0;
let dragPhysics = false;      // live physics started by a node drag (vs sliders)
const LIVE_STEP = 1 / 240;   // visible physics: fixed 240 steps/second
let liveAcc = 0;             // accumulated simulated time owed (bounded catch-up)

/* Focus spread ("make room") — v2, presentation-layer offsets.
   While a node is selected, non-connected nodes are pushed away from it so the
   connected subgraph gets the stage; deselecting (X / empty click) or picking
   another node gathers the graph back together. 
   The simulation's base layout (n.x/n.y) is NEVER modified by the spread —
   each node carries a presentation offset (n.ox/n.oy) that is animated toward
   a per-node target. Everything rendered, hit-tested or centred uses the
   DISPLAYED position (base + offset). Benefits: retraction returns to the
   current layout (including deliberate drags and slider edits), switching the
   selection retargets smoothly in one pass, and no momentum → no oscillation. */
let spreadCenter = null, spreadNbSet = null, spreadBrSet = null, spreadNb2Set = null;
let spreadRings = null, spreadSlots = null;   // belt mode: population arrays + per-node ring slots
let spreadActive = false;      // offsets may be non-zero — keep easing until they gather back to 0
const SPREAD_MINR = 850;      // target clearance radius around the selection
/* on phones the "make room" push moves every nearby node each frame — the
   big reorganisation the user doesn't want there. Belts still gather; the
   rest of the graph simply stays put. */
let spreadNoRoom = false;
try {
  const _mq = window.matchMedia('(max-width:920px)');
  spreadNoRoom = _mq.matches;
  if (_mq.addEventListener) _mq.addEventListener('change', ev => { spreadNoRoom = ev.matches; });
} catch (e) {}
function setSpread(n) {
  spreadCenter = n || null;
  spreadNbSet = null;
  spreadBrSet = null;
  spreadNb2Set = null;
  if (n && adj) {
    spreadNbSet = new Set([n]);
    for (const m of (adj.get(n.id) || [])) spreadNbSet.add(m);
    // NODE+2 (rhizome): the neighbours of the neighbours — pulled toward the
    // selection too, but held OUTSIDE the neighbours' band so they never sit
    // closer to X than the Y nodes do. Rendered at half intensity.
    spreadNb2Set = new Set();
    for (const m of (adj.get(n.id) || [])) {
      for (const p of (adj.get(m.id) || [])) {
        if (p !== n && p.visible && !spreadNbSet.has(p)) spreadNb2Set.add(p);
      }
    }
    if (!spreadNb2Set.size) spreadNb2Set = null;
    spreadActive = true;
  }
  // NEIGHBOUR BELTS (phys.belts): instead of proportional pulls toward
  // overlapping bands (which let far-away neighbours settle inside the N+2
  // band — the intertwining the user reported), every population gets an
  // EXPLICIT ring target: Y (neighbours) on an inner belt, Z (neighbours of
  // neighbours) on an outer belt with a guaranteed empty gap between them,
  // bridge partners on a thin ring inside the gap, context fully beyond the
  // outer belt. Angles are assigned once per selection — sorted by the node's
  // base angle around the selection (related nodes stay adjacent on the belt),
  // then evenly spaced so no arc is overloaded.
  spreadRings = null; spreadSlots = null;
  if (n && phys.belts && spreadNbSet) {
    const mk = (set, excl1, excl2) => {
      if (!set) return null;
      const arr = [];
      for (const m of set) {
        if (m === n || !m.visible) continue;
        if (excl1 && excl1.has(m)) continue;          // Y takes priority
        if (excl2 && excl2.has(m)) continue;          // then Z — bridges get what's left
        arr.push(m);
      }
      if (!arr.length) return null;
      const ang = m => {
        const dx = m.x - n.x, dy = m.y - n.y;
        return (dx || dy) ? Math.atan2(dy, dx) : (hash01('g' + m.id) - 0.5) * 6.2832;
      };
      arr.sort((a, b) => ang(a) - ang(b));
      return arr;
    };
    const yArr = mk(spreadNbSet);
    if (yArr) {
      const zArr = phys.nb2 ? mk(spreadNb2Set, spreadNbSet) : null;
      const bArr = mk(spreadBrSet, spreadNbSet, spreadNb2Set || new Set());
      spreadRings = { y: yArr, z: zArr, b: bArr };
      spreadSlots = new Map();
      // exclusive populations: Y, then Z, then bridge-only — a node that is
      // both a second-hop neighbour and a bridge partner sits on the Z belt.
      // Y ANGLES are size-weighted: each node's arc is proportional to its
      // rendered diameter (+pad), so a big node never overlaps its belt
      // neighbours — the ring radius (beltGeometry) grows to fit the total.
      const TAU = 6.2832, APAD = 8;
      for (const pop of ['y', 'b']) {
        const arr = spreadRings[pop];
        if (!arr) continue;
        let total = 0;
        const arcs = arr.map(m => { const a = 2 * (m.r || 4) + APAD; total += a; return a; });
        let acc = 0;
        arr.forEach((m, i) => {
          const frac = (acc + arcs[i] / 2) / total;   // node sits at the centre of its own arc
          const slack = Math.max(0, arcs[i] - 2 * (m.r || 4)) / total;   // free angle it may jitter in
          acc += arcs[i];
          spreadSlots.set(m, { pop, frac, slack });
        });
      }
      // Z (NODE+2): each second-hop node is assigned to ONE anchor — the Y
      // neighbour it connects to (least-loaded first, so tails stay balanced) —
      // and stacks RADIALLY BEHIND that anchor: same angle, one row per
      // child. The Y→Z link is then a short radial segment that never
      // crosses the Y belt — no jumble of lines in every direction.
      if (zArr) {
        const yIdx = new Map(); yArr.forEach((m, i) => yIdx.set(m.id, i));
        const load = new Map(); yArr.forEach(m => load.set(m, 0));
        const kids = new Map();
        // deterministic order: by degree then id, so the least-loaded choice
        // is stable across rebuilds (kind toggles, sliders, Reset)
        const ordered = [...zArr].sort((a, b) => (a.deg - b.deg) || (a.id < b.id ? -1 : 1));
        for (const m of ordered) {
          let best = null;
          for (const y of (adj.get(m.id) || [])) {
            if (!yIdx.has(y.id)) continue;              // anchor must be a belt-Y node
            const l = load.get(y);                      // node-object keys — consistently
            if (!best || l < load.get(best) || (l === load.get(best) && yIdx.get(y.id) < yIdx.get(best.id))) best = y;
          }
          if (!best) best = yArr[0];                    // unreachable: every Z has a Y neighbour
          load.set(best, load.get(best) + 1);
          const arr = kids.get(best) || [];
          spreadSlots.set(m, { pop: 'z', anchor: best, idx: arr.length });
          arr.push(m); kids.set(best, arr);
        }
        spreadRings.zKids = kids;   // keyed by anchor NODE — beltGeometry uses its radius
      }
    }
  }
  wake();   // applySpread animates toward the new targets (or back to zero)
}
/* Belt geometry — recomputed every easing pass so the rings always fit the
   CURRENT node sizes (the Node size / Connection emphasis sliders change
   radii live) and the current population counts. The Y ring radius derives
   from the circumference the neighbours need (2r + pad per node, 72% fill).
   The Z belt is NOT a ring: each Z node sits behind its anchor Y node, one
   row per child (zIn + idx · rowH) — so the belt's outer edge grows with the
   LONGEST tail, and the whole belt stays close to the Y ring (the gap is
   ≥ max(70, 18% of the Y radius), roughly half the old ring gap). Bridge
   partners keep a thin ring inside the gap; context clears beyond the tails. */
function beltGeometry(c) {
  const PAD = 8, FILL = 0.72, TAU = 6.2832;
  const circ = arr => arr.reduce((a, m) => a + 2 * (m.r || 4) + PAD, 0);
  const avgR = arr => arr.reduce((a, m) => a + (m.r || 4), 0) / arr.length;
  const band = arr => Math.max(36, Math.min(150, avgR(arr) * 3.2));
  const g = { y: spreadRings.y, z: spreadRings.z, b: spreadRings.b };
  g.yR = Math.max(150, circ(g.y) / (TAU * FILL));
  g.yW = band(g.y);
  const yOut = g.yR + g.yW / 2;
  const gap = Math.max(70, g.yR * 0.18);
  if (g.z && g.z.length) {
    g.zIn = yOut + gap;
    // per-chain packing with a per-chain START RADIUS: a child's angular
    // width (2r+8)/R shrinks as R grows, while its anchor's slot is fixed at
    // (2r_anchor+8)/yR. A chain whose biggest child is wider than the
    // anchor's slot starts further out, where the child fits inside the
    // slot — so every chain stays within its anchor's sector and adjacent
    // chains can never collide, whatever the size mix. Children then stack
    // radially (one diameter + pad per row).
    g.zRad = new Map();   // node id → ABSOLUTE radius
    let maxEnd = 0;
    for (const [anchor, kidsArr] of spreadRings.zKids) {
      const aR = anchor.r || 4;
      let off = g.zIn;
      for (const k of kidsArr) {
        const kr = k.r || 4;
        // min radius at which THIS child's angular width fits the anchor's slot
        const need = g.yR * (2 * kr + 8) / (2 * aR + 8);
        if (off < need) off = need;
        g.zRad.set(k.id, off + kr);
        off += 2 * kr + 10;
      }
      if (off > maxEnd) maxEnd = off;
    }
    g.zOut = maxEnd;
  } else {
    g.zIn = g.zOut = 0; g.zRad = null;
  }
  const out = g.z ? g.zOut : yOut;
  g.bR = g.b ? yOut + gap * 0.45 : 0;
  g.bW = g.b ? Math.min(56, gap * 0.35) : 0;
  g.ctxR = Math.max(SPREAD_MINR, out + 110);
  return g;
}
/* QA/debug hook: belt statistics of the current selection (displayed coords).
   Not used by the app itself — lets browser QA verify the belts never mix.
   Measures RENDERED footprints (distance ± node radius), not just centres. */
window.__beltDebug = function () {
  if (!spreadCenter || !spreadSlots || !spreadRings || !spreadRings.y) return null;
  const c = spreadCenter, geo = beltGeometry(c);
  const dist = n => Math.hypot(dispX(n) - dispX(c), dispY(n) - dispY(c));
  const stat = arr => {
    if (!arr || !arr.length) return null;
    let inner = Infinity, outer = -Infinity;
    for (const m of arr) {
      const d = dist(m), r = m.r || 4;
      inner = Math.min(inner, d - r); outer = Math.max(outer, d + r);
    }
    // within-belt clearance: TRUE nearest pair over ALL pairs (not just angular
    // neighbours) — centre distance minus both radii
    let minClear = null;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        const gap2 = Math.hypot(dispX(arr[i]) - dispX(arr[j]), dispY(arr[i]) - dispY(arr[j])) - (arr[i].r || 4) - (arr[j].r || 4);
        if (minClear === null || gap2 < minClear) minClear = gap2;
      }
    }
    return { n: arr.length, inner: +inner.toFixed(1), outer: +outer.toFixed(1), minClear: minClear === null ? null : +minClear.toFixed(1) };
  };
  const ys = stat(spreadRings.y), zs = stat(spreadRings.z);
  return {
    focus: c.id + ' · ' + (c.e && c.e.title || ''), deg: c.deg,
    belts: { y: ys, z: zs, b: stat(spreadRings.b) },
    footprintGap: (ys && zs) ? +(zs.inner - ys.outer).toFixed(1) : null,
    geo: { yR: +geo.yR.toFixed(0), yW: +geo.yW.toFixed(0), zIn: +geo.zIn.toFixed(0), zOut: +geo.zOut.toFixed(0), ctxR: +geo.ctxR.toFixed(0) }
  };
};
/* Fit the camera so the focus AND both belts are on screen at once — without
   this the outer belt easily starts 1,500+ px from the focus and lands outside
   the viewport, defeating the belts' purpose. Smooth glide, same as centerOn. */
function fitToBelts() {
  if (!spreadCenter || !spreadRings || !spreadRings.y || !phys.belts) return;
  const geo = beltGeometry(spreadCenter);
  // fit to whichever outer edge is live: the Z tails, or just the Y ring
  const ext = (geo.z ? geo.zOut : geo.yR + geo.yW / 2) + 90;
  const w = canvas.clientWidth, h = canvas.clientHeight;
  const zoom = Math.max(0.02, Math.min((w - 150) / (2 * ext), (h - 150) / (2 * ext), 1.6));
  camAnim = { t0: Date.now(), dur: 460, x0: cam.x, y0: cam.y, z0: cam.zoom, x1: spreadCenter.x, y1: spreadCenter.y, z1: zoom };
  wake();
}
/* deterministic per-node pseudo-random in [0,1) — stable targets, no flicker */
function hash01(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return ((h >>> 0) % 1000) / 1000;
}
/* One easing pass: move every node's offset toward its target.
   Targets are recomputed from the CURRENT base layout each pass, so the room
   follows the selected node when it is dragged and re-fits after slider morphs.
   The grabbed node's offsets are PRESERVED (never cleared here) — a press must
   not snap a displaced node back to its base position; the offset is folded
   into base only if the drag threshold is actually crossed.
   Sets module flags: spreadDirty (an offset changed — a render is needed, even
   for the final snap) and spreadAnimating (more easing is still due). */
let spreadDirty = false, spreadAnimating = false;
let nb2Hidden = null;   // set by render when N+2 is toggled OFF — shared with hit()
/* Displayed-coordinate separation for the spread state. The belt/spread
   easing moves nodes via ox/oy offsets on top of a FROZEN base layout, so
   neither the physics collision nor declutter() (both base x/y) can see the
   positions the user is looking at — the belt targets and the radial
   context-push can stack nodes. This pass separates the DISPLAYED circles
   (dispX/dispY) by nudging the same offsets, with the usual radius weighting;
   the dragged node never moves. Runs each frame while the spread eases — the
   belt pull weakens as the easing converges, so separation always wins at
   rest. Minimal by design: it only acts on pairs that actually overlap, so
   ring geometry is preserved everywhere else. */
function separateDisplayed() {
  if (!G) return;
  const vis = G.nodes.filter(n => n.visible);
  if (vis.length < 2) return;
  let maxR = 2;
  for (const n of vis) if (n.r > maxR) maxR = n.r;
  const CELL = Math.max(48, maxR * 2 + 8);
  const ITER = 3, STRENGTH = 0.5, PAD = 3;
  let movedAny = false;
  for (let it = 0; it < ITER; it++) {
    const grid = new Map();
    for (const n of vis) {
      const k = Math.floor(dispX(n) / CELL) + ',' + Math.floor(dispY(n) / CELL);
      let a = grid.get(k); if (!a) { a = []; grid.set(k, a); } a.push(n);
    }
    let moved = false;
    for (const n of vis) {
      const gx = Math.floor(dispX(n) / CELL), gy = Math.floor(dispY(n) / CELL);
      for (let ox = -1; ox <= 1; ox++) for (let oy = -1; oy <= 1; oy++) {
        const a = grid.get((gx + ox) + ',' + (gy + oy));
        if (!a) continue;
        for (const m of a) {
          if (m === n || String(m.id) <= String(n.id)) continue;   // each pair once
          let dx = dispX(m) - dispX(n), dy = dispY(m) - dispY(n);
          let d = Math.hypot(dx, dy);
          const min = n.r + m.r + PAD;
          if (d >= min) continue;
          moved = true; movedAny = true;
          let ux, uy;
          if (d > 0.01) { ux = dx / d; uy = dy / d; }
          else { const ang = hash01(n.id) * 6.2832; ux = Math.cos(ang); uy = Math.sin(ang); d = 0.01; }
          const push = (min - d) * STRENGTH;
          if (n === dragged) { m.ox += ux * push; m.oy += uy * push; }
          else if (m === dragged) { n.ox -= ux * push; n.oy -= uy * push; }
          else {
            const wn = m.r / (n.r + m.r), wm = n.r / (n.r + m.r);
            n.ox -= ux * push * wn; n.oy -= uy * push * wn;
            m.ox += ux * push * wm; m.oy += uy * push * wm;
          }
        }
      }
    }
    if (!moved) break;
  }
  if (movedAny) spreadDirty = true;   // a render is needed
}
function applySpread(dt) {
  if (!G) return;
  spreadDirty = false;
  spreadAnimating = false;
  const c = spreadCenter;
  // belt geometry computed once per pass — the rings follow live node sizes
  const geo = (c && phys.belts && spreadSlots) ? beltGeometry(c) : null;
  const k = 1 - Math.exp(-5 * dt);   // smooth, non-overshooting approach
  for (const n of G.nodes) {
    if (!n.visible) {
      if (n.ox || n.oy) { n.ox = 0; n.oy = 0; spreadDirty = true; }
      continue;
    }
    if (n === dragged) continue;   // grabbed: keep its offsets, no spread updates
    let tx = 0, ty = 0;
    if (c && c.visible && n !== c) {
      const dx = n.x - c.x, dy = n.y - c.y;   // base positions — offsets stay separate
      const d = Math.hypot(dx, dy);
      // adaptive band around the selection — grows with the selection's degree
      // so a 100-connection hub gets a wider gathering ring than a leaf node
      const deg = Math.max(4, c.deg || 4);
      const inner = Math.max(110, Math.sqrt(deg) * 24);
      const outer = inner * 2;
      if (geo) {
        // BELT MODE: explicit ring targets — Y and Z each land exactly on
        // their own belt (with per-node angle/radius jitter), so the two
        // populations can never intertwine, whatever distance they started at
        const s = spreadSlots.get(n);
        if (s) {
          if (s.pop === 'z') {
            // NODE+2 tail: purely RADIAL behind its anchor (same angle incl.
            // the anchor's jitter), one row per child. The chain's start
            // radius (geo.zRad) already guarantees it fits inside the
            // anchor's angular slot — no sideways fan, no collisions.
            const as = spreadSlots.get(s.anchor);
            const ang = as.frac * 6.2832 + (hash01('a' + s.anchor.id) - 0.5) * as.slack * 6.2832;
            const rad = geo.zRad ? geo.zRad.get(n.id) : geo.zIn + s.idx * 24;
            tx = c.x + Math.cos(ang) * rad - n.x;
            ty = c.y + Math.sin(ang) * rad - n.y;
          } else {
            const R = s.pop === 'y' ? geo.yR : geo.bR;
            const W = s.pop === 'y' ? geo.yW : geo.bW;
            const jit = Math.max(0, W - 2 * (n.r || 4));
            const rad = R + (hash01('d' + n.id) - 0.5) * jit;
            // weighted slot angle + jitter confined to the node's own free arc
            const ang = s.frac * 6.2832 + (hash01('a' + n.id) - 0.5) * s.slack * 6.2832;
            tx = c.x + Math.cos(ang) * rad - n.x;
            ty = c.y + Math.sin(ang) * rad - n.y;
          }
        } else {
          // context: eased fully beyond the outer belt — pushed out to the
          // clearance radius exactly (never left smeared inside the Z belt),
          // but never pulled inward either
          const target = Math.max(d, geo.ctxR + hash01('x' + n.id) * 90);
          if (d > 1) {
            tx = dx / d * (target - d);
            ty = dy / d * (target - d);
          } else {
            const a = hash01(n.id) * 6.2832;
            tx = Math.cos(a) * target; ty = Math.sin(a) * target;
          }
        }
      } else if (spreadNbSet && spreadNbSet.has(n)) {
        // NEIGHBOUR: gather toward the band, PROPORTIONALLY — a node far
        // beyond its target glides in strongly, a node already close barely
        // moves (pull is proportional to the excess distance), and the
        // per-node target spread keeps the cluster from clumping solid
        if (d > inner && d > 1) {
          const target = inner + (outer - inner) * (0.3 + hash01('n' + n.id) * 0.5);
          // clamp: a node already inside its personal target never gets pushed
          // OUT — pull is zero there, not negative
          const pull = Math.max(0, d - target) * (0.72 + hash01('q' + n.id) * 0.18);
          tx = -dx / d * pull;
          ty = -dy / d * pull;
        }
      } else if (spreadNb2Set && spreadNb2Set.has(n)) {
        // NODE+2 (rhizome): attracted toward the selection, but held OUTSIDE
        // the neighbours' band — never closer to X than the Y nodes are.
        // A Z node already inside the Y band is gently pushed back out.
        if (d > 1) {
          const zIn = outer * 1.1, zOut = outer * 2.1;
          const target = zIn + (zOut - zIn) * (0.25 + hash01('z' + n.id) * 0.5);
          if (d > target) {
            // outside its target ring: pull IN (attract toward X)
            const pull = (d - target) * (0.6 + hash01('y' + n.id) * 0.15);
            tx = -dx / d * pull;
            ty = -dy / d * pull;
          } else if (d < zIn) {
            // inside the neighbours' band: push OUT so it never sits closer than Y
            const push = (zIn - d) * 0.6;
            tx = dx / d * push;
            ty = dy / d * push;
          }
        }
      } else if (spreadBrSet && spreadBrSet.has(n)) {
        // inferred-bridge partner: same proportional pull, but its band sits
        // just OUTSIDE the neighbours' — weaker evidence, slightly further out
        if (d > outer * 0.95 && d > 1) {
          const bIn = outer * 0.95, bOut = outer * 1.55;
          const target = bIn + (bOut - bIn) * (0.25 + hash01('b' + n.id) * 0.5);
          const pull = Math.max(0, d - target) * (0.72 + hash01('p' + n.id) * 0.18);
          tx = -dx / d * pull;
          ty = -dy / d * pull;
        }
      } else if (d < SPREAD_MINR && !spreadNoRoom) {
        let ux, uy;
        if (d > 1) { ux = dx / d; uy = dy / d; }
        else { const a = hash01(n.id) * 6.2832; ux = Math.cos(a); uy = Math.sin(a); }
        // push strength 0.72–0.9 of the deficit: nodes end up spread over a
        // soft band inside the radius (no hard ring), easing to 0 at the boundary
        const push = (SPREAD_MINR - d) * (0.72 + hash01('r' + n.id) * 0.18);
        tx = ux * push; ty = uy * push;
      }
    }
    const ex = tx - n.ox, ey = ty - n.oy;
    if (Math.abs(ex) < 0.5 && Math.abs(ey) < 0.5) {
      if (n.ox !== tx || n.oy !== ty) { n.ox = tx; n.oy = ty; spreadDirty = true; }   // settle exactly
    }
    else { n.ox += ex * k; n.oy += ey * k; spreadDirty = true; spreadAnimating = true; }
  }
  if (!spreadAnimating && !spreadCenter) spreadActive = false;   // gathered back — done
}
/* displayed (base + spread offset) coordinates — the only positions the user sees */
function dispX(n) { return n.x + n.ox; }
function dispY(n) { return n.y + n.oy; }
/* ---------- overlap decluttering ----------
   The force layout has no collision handling, so visible nodes routinely come
   to rest on top of each other (small nodes buried under big ones). After the
   layout freezes — and again after parked nodes are re-seeded by a kind toggle
   — one bounded relaxation pass nudges the RESTING positions apart so nodes
   no longer sit on each other. Design constraints:
   - displacement is inversely weighted by radius: big nodes barely move, small
     nodes slide around them, so the macro layout (hubs, clusters) is preserved;
   - it runs synchronously at the freeze/unpark moment, before the reveal, so
     the user never sees the adjustment happen;
   - it is bounded (fixed iteration count, proportional nudge), so dense clusters
     spread a little, never explode. */
function declutter() {
  if (!G) return;
  const vis = G.nodes.filter(n => n.visible);
  if (vis.length < 2) return;
  let maxR = 2;
  for (const n of vis) if (n.r > maxR) maxR = n.r;
  const CELL = Math.max(48, maxR * 2 + 8);
  const ITER = 60, STRENGTH = 0.6, PAD = 3;
  for (let it = 0; it < ITER; it++) {
    const grid = new Map();
    for (const n of vis) {
      const k = Math.floor(n.x / CELL) + ',' + Math.floor(n.y / CELL);
      let a = grid.get(k); if (!a) { a = []; grid.set(k, a); }
      a.push(n);
    }
    let moved = false;
    for (const n of vis) {
      const gx = Math.floor(n.x / CELL), gy = Math.floor(n.y / CELL);
      for (let ox = -1; ox <= 1; ox++) for (let oy = -1; oy <= 1; oy++) {
        const a = grid.get((gx + ox) + ',' + (gy + oy));
        if (!a) continue;
        for (const m of a) {
          if (m === n || String(m.id) <= String(n.id)) continue;   // each pair once
          const dx = m.x - n.x, dy = m.y - n.y;
          let d = Math.hypot(dx, dy);
          const min = n.r + m.r + PAD;
          if (d >= min) continue;
          moved = true;
          let ux, uy;
          if (d > 0.01) { ux = dx / d; uy = dy / d; }
          else { const ang = hash01(n.id) * 6.2832; ux = Math.cos(ang); uy = Math.sin(ang); d = 0.01; }
          const overlap = (min - d) * STRENGTH;
          const wn = m.r / (n.r + m.r), wm = n.r / (n.r + m.r);
          n.x -= ux * overlap * wn; n.y -= uy * overlap * wn;
          m.x += ux * overlap * wm; m.y += uy * overlap * wm;
        }
      }
    }
    if (!moved) break;   // fully separated early — done
  }
}
/* a node being dragged has its offset folded into its base position so the
   springs (which act on base coordinates) make neighbours trail it */
function foldOffset(n) {
  if (n.ox || n.oy) { n.x += n.ox; n.y += n.oy; n.ox = 0; n.oy = 0; }
}
function liveStart() {
  if (warmTicks > 0) return;            // a full (re)layout is already running
  if (alpha < 0.35) alpha = 0.35;
  liveMode = true;
  wake();
}
function liveStop(settle) {
  liveMode = false;
  if (warmTicks > 0) return;
  if (settle > 0) { settleTicks = settle; if (alpha < 0.3) alpha = 0.3; wake(); }
  else { freezeSim(); declutter(); }   // freeze points always end decluttered
}
function warmup(ticks) {
  alpha = 1;
  warmTicks = ticks;
}

// Hard freeze: the layout is done, nodes never drift again. Physics only runs
// during the bounded warmup after a (re)layout or scope change — this is what
// stops the "floating particles" behaviour and keeps nodes easy to click.
function freezeSim() {
  alpha = 0;
  for (const n of G.nodes) { n.vx = 0; n.vy = 0; }
}

function fitView() {
  const nodes = G.nodes.filter(n => n.visible);
  if (!nodes.length) return;
  // percentile bbox — ignore runaway outliers so one stray node can't shrink the view
  const xs = nodes.map(n => dispX(n)).sort((a, b) => a - b);
  const ys = nodes.map(n => dispY(n)).sort((a, b) => a - b);
  const q = (arr, p) => arr[Math.min(arr.length - 1, Math.max(0, Math.round(p * (arr.length - 1))))];
  const minX = q(xs, 0.005), maxX = q(xs, 0.995), minY = q(ys, 0.005), maxY = q(ys, 0.995);
  const w = canvas.clientWidth, h = canvas.clientHeight;
  const pad = 70;
  const zoom = Math.min((w - pad * 2) / Math.max(maxX - minX, 1), (h - pad * 2) / Math.max(maxY - minY, 1), 1.6);
  cam.zoom = Math.max(0.02, Math.min(zoom, 1.6));
  cam.x = (minX + maxX) / 2; cam.y = (minY + maxY) / 2;
}

function restart(fit) {
  alpha = 1;
  // 1600 ticks ≈ the point where alpha decays below 0.008 — the same total
  // settling the old endless loop reached, now bounded and then frozen
  if (fit) { warmup(window.matchMedia && window.matchMedia('(max-width:920px)').matches ? 900 : 1600); fitAfterWarmup = true; }
  dragged = null; panning = false;   // an in-progress drag cannot survive a re-layout
  liveMode = false; settleTicks = 0; // neither can live physics
  dragPhysics = false;
  if (G) for (const n of G.nodes) { n.ox = 0; n.oy = 0; }   // spread offsets don't survive a re-layout
  if (arrangingEl) arrangingEl.hidden = !fit;
  needsRender = true;
  wake();
}

/* ---------- rendering ---------- */
function render() {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const w = canvas.clientWidth, h = canvas.clientHeight;
  if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
  }
  const c = colors();
  if (nodeSpriteKey !== colorKey) buildNodeSprites(c);   // rebuild on theme change
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = c.bg;
  ctx.fillRect(0, 0, w, h);
  const z = cam.zoom;
  // world-space viewport (padded) for cheap culling — the pad covers the
  // largest possible node radius (up to 82px at max emphasis) at any zoom
  const vw = w / z, vh = h / z;
  const padW = Math.max(80 / z, 90);
  const vx0 = cam.x - vw / 2 - padW, vx1 = cam.x + vw / 2 + padW;
  const vy0 = cam.y - vh / 2 - padW, vy1 = cam.y + vh / 2 + padW;
  const arranging = warmTicks > 0;   // during layout: no edges/labels, dimmed nodes
  // when a node is hovered/selected, the rest of the graph recedes: only the
  // focus node, its neighbours and their edges stay at full strength
  const focus = hover || selected;
  let nbSet = null, nb2Set = null;
  if (focus) {
    nbSet = new Set([focus]);
    for (const m of (adj.get(focus.id) || [])) nbSet.add(m);
    // NODE+2 (rhizome): neighbours of neighbours. ALWAYS computed — the
    // second-hop population is also what "Show N+2" OFF hides (drawing,
    // labels, hit-testing); phys.nb2 only gates whether it is SHOWN at
    // half intensity with its dotted edges.
    nb2Set = new Set();
    for (const m of (adj.get(focus.id) || [])) {
      for (const p of (adj.get(m.id) || [])) {
        if (p !== focus && p.visible && !nbSet.has(p)) nb2Set.add(p);
      }
    }
    if (!nb2Set.size) nb2Set = null;
  }
  // nodes hidden because N+2 is toggled OFF — consulted by rendering, labels
  // AND hit-testing so the OFF state is a true N+1-only focus
  nb2Hidden = (focus && !phys.nb2 && nb2Set) ? nb2Set : null;
  ctx.translate(w / 2, h / 2);
  ctx.scale(z, z);
  ctx.translate(-cam.x, -cam.y);
  // background edges: gated at low zoom — thousands of hairlines only
  // visualise noise when the whole graph is on screen (also a perf win).
  // The FOCUS NEIGHBOURHOOD below is NOT gated: the camera fit lands at a
  // modest zoom (~0.3–0.5) and the orange X→Y links and the yellow dotted
  // Y→Z links must stay visible there or the belts read as disconnected dot
  // populations.
  if (!arranging && z >= 0.25) {
    ctx.strokeStyle = c.edge;
    ctx.lineWidth = 0.8 / z;
    ctx.globalAlpha = focus ? 0.05 : 1;   // context edges almost vanish while focused
    ctx.beginPath();
    for (const [a, b] of G.edges) {
      if (!a.visible || !b.visible) continue;
      if (nb2Hidden && (nb2Hidden.has(a) || nb2Hidden.has(b))) continue;   // N+2 OFF: no second-hop edges at all
      if (hover !== a && hover !== b && selected !== a && selected !== b) {
        // the focus neighbourhood's Y→Z edges are the focus pass's business —
        // drawing them here too (even faintly) re-creates the mesh behind the
        // belts. X→Y edges all touch the focus, so they are already excluded.
        if (nb2Set && ((nbSet.has(a) && nb2Set.has(b)) || (nb2Set.has(a) && nbSet.has(b)))) continue;
        if ((dispX(a) < vx0 && dispX(b) < vx0) || (dispX(a) > vx1 && dispX(b) > vx1)) continue;
        if ((dispY(a) < vy0 && dispY(b) < vy0) || (dispY(a) > vy1 && dispY(b) > vy1)) continue;
        ctx.moveTo(dispX(a), dispY(a)); ctx.lineTo(dispX(b), dispY(b));
      }
    }
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
  // FOCUS NEIGHBOURHOOD — always drawn (any zoom), on top of the background:
  // X→Y in clear orange, Y→Z (NODE+2) as yellow dotted lines
  if (!arranging && focus) {
    ctx.strokeStyle = '#E34234';
    ctx.globalAlpha = 0.85;
    ctx.lineWidth = 1.4 / z;
    ctx.beginPath();
    for (const [a, b] of G.edges) {
      if (!a.visible || !b.visible) continue;
      if (a === focus || b === focus) { ctx.moveTo(dispX(a), dispY(a)); ctx.lineTo(dispX(b), dispY(b)); }
    }
    ctx.stroke();
    // NODE+2: edges from the neighbours (Y) out to their own neighbours (Z) —
    // the rhizome beyond the focus. Yellow dotted at ~40% intensity.
    // In belt mode each Z node is ASSIGNED to one anchor Y node, and ONLY that
    // edge is drawn — drawing every Y–Z edge made each outer node fan lines
    // to all its neighbours across the belt: an unreadable criss-cross web.
    if (nb2Set && phys.nb2) {   // N+2 edges only while the view is ON (nodes are hidden otherwise)
      ctx.strokeStyle = '#EDBF3C';
      ctx.globalAlpha = 0.4;
      ctx.lineWidth = 1.0 / z;
      ctx.setLineDash([2 / z, 4 / z]);
      ctx.beginPath();
      for (const [a, b] of G.edges) {
        if (!a.visible || !b.visible) continue;
        if (a === focus || b === focus) continue;
        const za = nb2Set.has(a) && nbSet.has(b);   // a is Z, b is Y
        const zb = nb2Set.has(b) && nbSet.has(a);   // b is Z, a is Y
        if (!za && !zb) continue;
        // anchor-only, and NOT just while the focus is the selection: if the Z
        // node has an assigned anchor (belt layout active), only that edge is
        // drawn — hovering another node must not fan the mesh back open
        if (za) { const s = spreadSlots && spreadSlots.get(a); if (s && s.pop === 'z' && s.anchor !== b) continue; }
        if (zb) { const s = spreadSlots && spreadSlots.get(b); if (s && s.pop === 'z' && s.anchor !== a) continue; }
        ctx.moveTo(dispX(a), dispY(a)); ctx.lineTo(dispX(b), dispY(b));
      }
      ctx.stroke();
      ctx.setLineDash([]);
    }
    ctx.globalAlpha = 1;
  }
  // nodes — hidden entirely during the arranging phase so the user never
  // sees the "floating particles" of an unsettled layout; the finished,
  // frozen graph is revealed in one piece
  if (!arranging) {
    // ONE global radius-descending pass — big nodes sit under small ones
    // everywhere, including across the focus/context boundary (a big focused
    // node can no longer cover a small context node). Focus membership only
    // sets opacity, never paint order.
    const dim = !!nbSet;
    for (const n of G.paintOrder) {
      if (!n.visible) continue;
      if (nb2Hidden && nb2Hidden.has(n)) continue;     // N+2 OFF: second hop fully hidden
      if (dispX(n) < vx0 || dispX(n) > vx1 || dispY(n) < vy0 || dispY(n) > vy1) continue;
      let a = 1;
      if (dim) {
        if (nbSet.has(n)) a = 1;                        // X + Y: full intensity
        else if (nb2Set && nb2Set.has(n)) a = 0.5;      // NODE+2 (Z): half intensity
        else a = 0.15;                                  // context: receded
      }
      ctx.globalAlpha = a;
      drawNode(n, c, z, dpr);
    }
    ctx.globalAlpha = 1;
  }
  // static rings for hover/selection (no per-frame animation → no idle rAF).
  // Selection is a double ring, unmistakable at any zoom; hover a light single ring.
  // A node that is both hovered and selected gets the selection ring once (not twice).
  if (!arranging) {
    const ringNodes = (hover && hover === selected) ? [selected] : [hover, selected];
    for (const n of ringNodes) {
      if (!n || !n.visible) continue;
      ctx.strokeStyle = c.halo;
      if (n === selected) {
        ctx.lineWidth = 1.6 / z;
        ctx.globalAlpha = 0.35;
        ctx.beginPath();
        ctx.arc(dispX(n), dispY(n), n.r + 9, 0, 6.2832);
        ctx.stroke();
        ctx.globalAlpha = 1;
        ctx.lineWidth = 2.2 / z;
        ctx.beginPath();
        ctx.arc(dispX(n), dispY(n), n.r + 4, 0, 6.2832);
        ctx.stroke();
      } else {
        ctx.lineWidth = 1.2 / z;
        ctx.beginPath();
        ctx.arc(dispX(n), dispY(n), n.r + 3, 0, 6.2832);
        ctx.stroke();
      }
    }
  }
  if (!arranging) drawLabels(dpr, w, h, z, c);
}

/* ---------- labels (screen-space, collision-checked) ----------
   Labels are drawn at a FIXED screen font size and only when they fit:
   each candidate is rejected if its rectangle would overlap an already-placed
   label or any node dot. Zooming in simply creates room for more labels —
   there is no zoom level at which "all" labels appear. Priority:
   1. the hovered/selected node (always, on a backing pill)
   2. its direct neighbours (checked against collisions, but first in line)
   3. everything else, most-connected first, within a per-viewport budget. */
function drawLabels(dpr, w, h, z, c) {
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.font = '600 11px ' + (cssVar('--font-ui') || 'sans-serif');
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'left';
  const budget = Math.max(14, Math.min(90, Math.round(w * h / 14000)));
  const CELL = 28;
  const grid = new Map();
  function insert(r) {
    for (let gx = Math.floor(r.x0 / CELL); gx <= Math.floor(r.x1 / CELL); gx++)
      for (let gy = Math.floor(r.y0 / CELL); gy <= Math.floor(r.y1 / CELL); gy++) {
        const k = gx + ',' + gy; let a = grid.get(k); if (!a) { a = []; grid.set(k, a); }
        a.push(r);
      }
  }
  function hits(r) {
    for (let gx = Math.floor(r.x0 / CELL); gx <= Math.floor(r.x1 / CELL); gx++)
      for (let gy = Math.floor(r.y0 / CELL); gy <= Math.floor(r.y1 / CELL); gy++) {
        const a = grid.get(gx + ',' + gy); if (!a) continue;
        for (const o of a) if (r.x0 < o.x1 && r.x1 > o.x0 && r.y0 < o.y1 && r.y1 > o.y0) return true;
      }
    return false;
  }
  const toScreen = n => ({ x: (dispX(n) - cam.x) * z + w / 2, y: (dispY(n) - cam.y) * z + h / 2 });
  // node dots are obstacles too — labels may not cover them (margin covers
  // the largest enlarged hubs whose centers sit just outside the viewport)
  for (const n of G.nodes) {
    if (!n.visible) continue;
    const p = toScreen(n);
    if (p.x < -130 || p.x > w + 130 || p.y < -130 || p.y > h + 130) continue;
    const rr = n.r * z + 3;
    insert({ x0: p.x - rr, y0: p.y - rr, x1: p.x + rr, y1: p.y + rr });
  }
  let placed = 0;
  // label cap for the pass in progress — the focus neighbourhood (Y and Z
  // belts) gets a much higher cap than the generic always-on pass: with a
  // selection active the user is trying to READ the belts, and the collision
  // grid (not the cap) is what keeps the view uncluttered. Zooming in
  // spreads the belt dots apart and lets progressively more labels through.
  let cap = budget;
  const strongQueue = [];   // focus labels draw last, so their pill covers what's under
  function tryLabel(n, strong) {
    if (!strong && placed >= cap) return;
    const p = toScreen(n);
    if (p.x > w + 40 || p.y < 10 || p.y > h - 10) return;
    let title = n.e.title, tw = labelW(n);
    if (tw > 300) { title = title.slice(0, 40) + '\u2026'; tw = Math.min(300, ctx.measureText(title).width); }
    const r = { x0: p.x + n.r * z + 3, y0: p.y - 7, x1: p.x + n.r * z + 7 + tw, y1: p.y + 7 };
    if (!strong && (r.x0 < 2 || r.x1 > w - 2)) return;   // would run off either edge — skip
    if (!strong) {
      if (hits(r)) return;
      insert(r);
    }
    if (strong) {   // deferred: drawn after everything else, on a backing pill
      strongQueue.push({ n, title, tw, r, y: p.y });
      return;
    }
    ctx.fillStyle = c.text;
    ctx.globalAlpha = 0.9;
    ctx.fillText(title, r.x0 + 2, p.y);
    ctx.globalAlpha = 1;
    placed++;
  }
  function labelW(n) {
    if (n._lw == null) n._lw = ctx.measureText(n.e.title).width;
    return n._lw;
  }
  const focus = hover || selected;
  let nbSet = null, nb2Set = null;
  if (focus) {
    nbSet = new Set([focus]);
    for (const m of (adj.get(focus.id) || [])) nbSet.add(m);
    nb2Set = new Set();
    for (const m of (adj.get(focus.id) || [])) {
      for (const p of (adj.get(m.id) || [])) {
        if (p !== focus && p.visible && !nbSet.has(p)) nb2Set.add(p);
      }
    }
    if (!nb2Set.size) nb2Set = null;
  }
  if (focus && focus.visible) {
    // focus label first (drawn last, on a backing pill) — but reserve its
    // rectangle in the collision grid now so other labels avoid it
    tryLabel(focus, true);
    {
      const p = toScreen(focus);
      const tw0 = Math.min(labelW(focus), 300);
      insert({ x0: p.x + focus.r * z + 3, y0: p.y - 7, x1: p.x + focus.r * z + 7 + tw0, y1: p.y + 7 });
    }
    // Hover chain: label the focus node's neighbours (Y), and then the
    // neighbours of those neighbours (A/B/C beyond Y) — the low-degree nodes
    // the user wants to read while exploring a chain. All collision-checked.
    const seen = new Set([focus.id]);
    const hop1 = (adj.get(focus.id) || []).filter(m => m.visible);
    hop1.sort((a, b) => b.deg - a.deg);
    cap = Math.max(budget, 350);   // belts are the reading surface — let them through
    for (const n of hop1) {
      if (placed >= cap) break;
      seen.add(n.id);
      tryLabel(n, false);
    }
    const hop2 = [];
    for (const m of hop1) {
      for (const p of (adj.get(m.id) || [])) {
        if (p.visible && !seen.has(p.id) && !(nb2Hidden && nb2Hidden.has(p))) { seen.add(p.id); hop2.push(p); }
      }
    }
    hop2.sort((a, b) => b.deg - a.deg);
    for (const n of hop2) {
      if (placed >= cap) break;
      tryLabel(n, false);
    }
    cap = budget;   // back to the tight cap for the generic always-on pass
  }
  // always-on labels: the most connected nodes above the degree threshold
  // (byDeg is sorted descending, so stop at the threshold). While a node is
  // focused, only its tethered subgraph is labelled — the receded mass
  // would only add noise. The threshold is ZOOM-AWARE: zooming in spreads
  // the dots apart and makes room, so progressively lower-degree nodes
  // become eligible — at close zoom every visible node in view can be
  // labelled (the collision grid still decides what actually fits). A
  // low-degree node is never PERMANENTLY disqualified just for being
  // small.
  const effMin = Math.max(1, Math.round(labelMinDeg * Math.min(1, 0.45 / Math.max(z, 0.05))));
  cap = Math.min(400, Math.round(budget * (0.6 + Math.max(z, 0.1))));
  let examined = 0;
  for (const n of G.byDeg) {
    if (n.deg < effMin || placed >= cap || examined > 2500) break;
    if (!n.visible) continue;
    if (nb2Hidden && nb2Hidden.has(n)) continue;   // N+2 OFF: second hop unlabelled too
    if (n === focus) continue;
    if (focus && !nbSet.has(n) && !(nb2Set && nb2Set.has(n))) continue;
    examined++;
    tryLabel(n, false);
  }
  // focus labels last, on a backing pill so they stay legible over the rest
  for (const q of strongQueue) {
    ctx.fillStyle = c.bg; ctx.globalAlpha = 0.92;
    ctx.fillRect(q.r.x0 - 2, q.r.y0 - 1, q.tw + 8, 15);
    ctx.globalAlpha = 1;
    ctx.fillStyle = c.text;
    ctx.fillText(q.title, q.r.x0 + 2, q.y);
  }
}

/* ---------- loop ---------- */
function frame() {
  if (!running) return;
  const animatingCam = camAnim != null;
  if (camAnim) {
    const t = Math.min(1, (Date.now() - camAnim.t0) / camAnim.dur);
    const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    cam.x = camAnim.x0 + (camAnim.x1 - camAnim.x0) * e;
    cam.y = camAnim.y0 + (camAnim.y1 - camAnim.y0) * e;
    cam.zoom = camAnim.z0 + (camAnim.z1 - camAnim.z0) * e;
    needsRender = true;
    if (t >= 1) camAnim = null;
  }
  if (warmTicks > 0) {
    // time-sliced: run as many ticks as fit in the frame budget so the tab
    // never janks, whatever the machine's speed. During the arranging phase
    // nothing is interactive (dimmed nodes, no labels, only a spinner), so a
    // generous 30ms budget is used — roughly 2.5x faster wall-clock arrange
    // than the old 12ms cap with the identical final layout.
    const t0 = performance.now();
    while (warmTicks > 0 && performance.now() - t0 < 30) { step(); warmTicks--; }
    needsRender = true;
    if (warmTicks === 0) {
      freezeSim();
      declutter();   // separate overlapping nodes before the reveal + fit
      if (fitAfterWarmup) { fitAfterWarmup = false; fitView(); }
      if (arrangingEl) arrangingEl.hidden = true;
      // if a node is still selected, its cleared room re-opens around the fresh layout
      if (selected && selected.visible) setSpread(selected);
      if (pendingFocus) { const n = pendingFocus; pendingFocus = null; centerOn(n); select(n); }
    }
  }
  if (liveMode || settleTicks > 0) {
    // VISIBLE physics run at a FIXED timestep (accumulated real time, bounded
    // catch-up) so the motion speed is the same on fast and slow machines and
    // at any frame rate — a pure ms budget or per-frame step count is not.
    const now = performance.now();
    const dt = Math.min(0.05, (now - (frame.lastLiveT || now)) / 1000);
    frame.lastLiveT = now;
    liveAcc = Math.min(liveAcc + dt, 0.08);   // bounded catch-up (~19 steps)
    const t0 = performance.now();
    while ((liveMode || settleTicks > 0) && liveAcc >= LIVE_STEP && performance.now() - t0 < 12) {
      step();
      liveAcc -= LIVE_STEP;
      if (!liveMode) settleTicks--;
    }
    if (!liveMode && settleTicks === 0) { freezeSim(); declutter(); }   // settle ends decluttered, like every freeze
    needsRender = true;
  } else {
    frame.lastLiveT = 0;   // leaving visible physics — reset the timing accumulator
    liveAcc = 0;
  }
  // spread easing runs AFTER the physics step so offsets target the geometry
  // that is actually being rendered this frame
  if (warmTicks === 0 && (spreadCenter !== null || spreadActive)) {
    const now = performance.now();
    const dt = Math.min(0.05, (now - (frame.lastSpreadT || now)) / 1000);
    frame.lastSpreadT = now;
    applySpread(dt);
    separateDisplayed();   // keep the DISPLAYED circles separated while the belts ease
    if (spreadDirty) needsRender = true;   // includes the final snap — must render
  } else {
    frame.lastSpreadT = performance.now();
  }
  if (needsRender) { render(); needsRender = false; }
  // idle: the graph is frozen and static (no pulse animation), so the loop
  // stops entirely; interaction handlers call wake() to restart it.
  // NOTE: re-read camAnim here — centerOn() may have been called by the warmup
  // reveal (pendingFocus) AFTER the stale `animatingCam` was computed above;
  // using the stale flag would stop the loop and never play the camera move.
  if (warmTicks > 0 || liveMode || settleTicks > 0 || camAnim != null || spreadAnimating) {
    requestAnimationFrame(frame);
  } else {
    running = false;
  }
}
function wake() {
  needsRender = true;
  if (!running) { running = true; requestAnimationFrame(frame); }
}

/* ---------- interaction ---------- */
function toWorld(sx, sy) {
  const w = canvas.clientWidth, h = canvas.clientHeight;
  return { x: (sx - w / 2) / cam.zoom + cam.x, y: (sy - h / 2) / cam.zoom + cam.y };
}
function hit(sx, sy) {
  if (warmTicks > 0) return null;   // no hit-testing on nodes that are still being arranged
  const p = toWorld(sx, sy);
  // Two-step pick, so a small node sitting on a big one stays clickable:
  // 1. among nodes whose disk CONTAINS the point, the SMALLEST wins
  //    (ties: nearest centre, then stable id — never array order);
  // 2. otherwise the nearest centre within the +5px halo (the old rule).
  let inside = null, insideR = 1e9, insideD = 1e9, insideId = '';
  let near = null, nd = 1e9;
  for (const n of G.nodes) {
    if (!n.visible) continue;
    if (nb2Hidden && nb2Hidden.has(n)) continue;   // N+2 OFF: second hop not clickable
    const dx = dispX(n) - p.x, dy = dispY(n) - p.y;
    const d = dx * dx + dy * dy;
    if (d < n.r * n.r) {
      const r = n.r, id = String(n.id);
      if (r < insideR - 1e-9 ||
          (Math.abs(r - insideR) <= 1e-9 && (d < insideD - 1e-9 ||
            (Math.abs(d - insideD) <= 1e-9 && id < insideId)))) {
        inside = n; insideR = r; insideD = d; insideId = id;
      }
    }
    const rr = (n.r + 5 / cam.zoom) ** 2;
    if (d < rr && d < nd) { nd = d; near = n; }
  }
  return inside || near;
}
function escHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* Compact markdown for the node drawer: headings, lists, bold/italic and
   clickable [[wikilinks]]; everything else passes through as plain text. */
function gdMarkdown(src) {
  const inline = s => escHtml(s)
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '<a class="gdl-link" data-t="$1">$2</a>')
    .replace(/\[\[([^\]]+)\]\]/g, '<a class="gdl-link" data-t="$1">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
    .replace(/(^|[\s(>"'])\*([^*\n]+)\*(?=[\s.,!?;:)"]|$)/g, '$1<i>$2</i>');
  let txt = String(src || '');
  const truncated = txt.length > 2200;
  if (truncated) txt = txt.slice(0, 2200);
  const lines = txt.split('\n');
  let out = '', para = [];
  const flush = () => { if (para.length) { out += '<p>' + para.map(inline).join('<br>') + '</p>'; para = []; } };
  for (const ln of lines) {
    if (!ln.trim()) { flush(); continue; }
    let m = ln.match(/^(#{1,3})\s+(.*)$/);
    if (m) { flush(); out += '<h' + m[1].length + '>' + inline(m[2]) + '</h' + m[1].length + '>'; continue; }
    m = ln.match(/^\s*[-*+]\s+(.*)$/);
    if (m) { flush(); out += '<div class="gd-li">• ' + inline(m[1]) + '</div>'; continue; }
    if (/^```/.test(ln)) { flush(); continue; }   // skip code fences in preview
    para.push(ln);
  }
  flush();
  if (truncated) out += '<div class="gd-trunc">Preview — open in Library for the full entry.</div>';
  return out;
}

// Open the left detail drawer for a node: kind, title, a content preview
// with clickable links, and its top connections (clickable to navigate).
/* short tradition labels for principles — derived from the id prefix
   (D = Daoist, S = Stoic, AF = Affect book, ...) so the drawer shows at a
   glance which tradition a principle belongs to */
const BOOK_LABEL = {
  D: 'Daoist', B: 'Buddhist', P: 'Pragmatist/Process', A: 'Aristotelian', S: 'Stoic',
  R: 'Relational', E: 'Existential', Y: 'Yoga-Vedanta', SP: 'Spinozist', K: 'Kyoto/Tibetan',
  M: 'Mesoamerican', X: 'Extra', AF: 'Affect', CO: 'Cognition', AT: 'Attention',
  SE: 'Self', MO: 'Motivation', BE: 'Overt Behaviour', BI: 'Biophysiological', SO: 'Sociocultural',
  V1K: 'Kernels', V2K: 'Kernels', ST: 'Stories'
};
function bookOf(e) {
  const m = /^([A-Z]+\d*)/.exec(String(e.id || ''));
  return m ? (BOOK_LABEL[m[1]] || BOOK_LABEL[m[1].replace(/\d+$/, '')]) : null;
}
function openDrawer(n) {
  const c = colors();
  gd.dot.style.background = c[n.kind] || c.text;
  gd.kind.textContent = (KIND_LABEL[n.kind] || n.kind) +
    (n.kind === 'principle' && bookOf(n.e) ? ' · ' + bookOf(n.e) : '');
  gd.title.textContent = n.e.title;
  gd.deg.textContent = n.deg + (n.deg === 1 ? ' connection' : ' connections');
  gd.content.innerHTML = gdMarkdown(n.e.content);
  const nbs = (adj.get(n.id) || []).slice().sort((a, b) => b.deg - a.deg);
  const top = nbs.slice(0, 12);
  gd.conns.innerHTML = top.map(m =>
    '<button class="gd-conn" type="button" data-id="' + escHtml(m.id) + '">' +
    '<span class="gdot" style="background:' + (c[m.kind] || c.text) + '"></span>' +
    '<span class="gd-conn-t">' + escHtml(m.e.title) + '</span>' +
    '<span class="gd-conn-d">' + m.deg + '</span>' +
    '<span class="gd-conn-x" data-x="' + escHtml(m.id) + '" title="Remove this connection">✕</span></button>').join('') +
    (nbs.length > 12
      ? '<button class="gd-manage" type="button">Manage all ' + nbs.length + ' connections (add / remove)</button>'
      : '');
  gd.body.scrollTop = 0;
  // on phones the sheet starts collapsed: a peek with title + connection count
  drawer.classList.toggle('sheet-collapsed', window.matchMedia('(max-width:920px)').matches);
  drawer.hidden = false;
}

function select(n) {
  selected = n;
  if (n) openDrawer(n);
  else if (drawer) drawer.hidden = true;
  // "make room": while a node is selected, non-connected nodes are eased away
  // from it (a presentation-layer offset — the frozen layout itself never
  // moves). Deselecting eases everything back together.
  setSpread(n);
  // no automatic camera travel on plain clicks — the target stays under the
  // cursor, which makes click/dbl-click predictable (search and the
  // "Center on node" button go through centerOn, which fits the belts)
  wake();
}
function centerOn(n) {
  // target the node's BASE position: the focused node becomes the spread centre,
  // so its presentation offset eases to 0 — the camera must land where it settles
  camAnim = { t0: Date.now(), dur: 420, x0: cam.x, y0: cam.y, z0: cam.zoom, x1: n.x, y1: n.y, z1: Math.max(cam.zoom, 0.8) };
  // deliberate centre-and-select (search, drawer button): in belt mode, build
  // the node's rings and glide out so BOTH belts are on screen
  if (phys.belts && n.visible) { setSpread(n); fitToBelts(); }
  wake();
}

/* Live edge updates: when a connect/disconnect is committed (from the drawer,
   the standalone dialog or the manage-all list), update the graph model in place
   so the change is visible immediately — the site rebuild will confirm it. */
function applyEdgeChange(aId, bId, removed) {
  if (!G || !adj) return;
  const na = G.nodeById.get(aId), nb = G.nodeById.get(bId);
  if (!na || !nb) return;
  if (removed) {
    G.edges = G.edges.filter(([x, y]) => !((x === na && y === nb) || (x === nb && y === na)));
    adj.set(na.id, (adj.get(na.id) || []).filter(n => n !== nb));
    adj.set(nb.id, (adj.get(nb.id) || []).filter(n => n !== na));
    na.deg = Math.max(0, na.deg - 1); nb.deg = Math.max(0, nb.deg - 1);
    const strip = (entry, otherEntry) => {
      entry.content = String(entry.content || '').replace(/\[\[([^|\]]+)(?:\|([^\]]+))?\]\]/g, (mm, t, alias) => {
        const tt = String(t || '').trim();
        return (tt === otherEntry.file || tt === otherEntry.id) ? (alias || otherEntry.title || tt) : mm;
      });
    };
    strip(na.e, nb.e); strip(nb.e, na.e);
  } else {
    if (!G.edges.some(([x, y]) => (x === na && y === nb) || (x === nb && y === na))) {
      G.edges.push([na, nb]);
      if (!adj.has(na.id)) adj.set(na.id, []);
      if (!adj.has(nb.id)) adj.set(nb.id, []);
      adj.get(na.id).push(nb); adj.get(nb.id).push(na);
      na.deg++; nb.deg++;
    }
    na.e.content = (na.e.content || '') + ' [[' + (nb.e.file || nb.e.id) + ']]';
  }
  na.r = nodeRadius(na.deg); nb.r = nodeRadius(nb.deg);
  if (selected && (selected === na || selected === nb)) openDrawer(selected);
  wake();
}
window.addEventListener('fc:edge', ev => {
  const d = (ev && ev.detail) || {};
  if (d.a && d.b) applyEdgeChange(d.a, d.b, !!d.removed);
});

function bindEvents() {
  canvas.addEventListener('mousedown', ev => {
    const r = canvas.getBoundingClientRect();
    const n = hit(ev.clientX - r.left, ev.clientY - r.top);
    lastMouse = { x: ev.clientX, y: ev.clientY };
    moved = 0;
    // live physics starts only once the drag threshold is crossed — a plain
    // click must NOT leave the simulation running forever
    if (n) dragged = n;
    else panning = true;
    wake();
  });
  window.addEventListener('mousemove', ev => {
    if (!lastMouse) return;
    const dx = ev.clientX - lastMouse.x, dy = ev.clientY - lastMouse.y;
    moved += Math.abs(dx) + Math.abs(dy);
    if (dragged) {
      const p = toWorld(...(r => [ev.clientX - r.left, ev.clientY - r.top])(canvas.getBoundingClientRect()));
      if (!dragPhysics && moved >= 5) {   // threshold crossed → neighbours now trail the node
        foldOffset(dragged);
        dragPhysics = true;
        liveStart();
      }
      if (dragPhysics) { dragged.x = p.x; dragged.y = p.y; dragged.vx = dragged.vy = 0; }
      else { dragged.ox = p.x - dragged.x; dragged.oy = p.y - dragged.y; }   // display-only until the threshold
    } else if (panning) {
      cam.x -= dx / cam.zoom; cam.y -= dy / cam.zoom;
    }
    lastMouse = { x: ev.clientX, y: ev.clientY };
    wake();
  });
  window.addEventListener('mouseup', () => {
    const wasDrag = !!dragged && moved >= 5;   // a real drag (not a click) → settle
    if (moved < 5) {
      if (dragged) { select(dragged); lastClickNode = dragged; lastClickT = Date.now(); }
      else if (panning && !hover) select(null);   // click on empty space closes the drawer
    }
    dragged = null; panning = false; lastMouse = null;
    if (wasDrag && dragPhysics) liveStop(120);   // short bounded settle (~0.5s at 240 steps/s) so trailing neighbours come to rest
    dragPhysics = false;
    wake();
  });
  canvas.addEventListener('mousemove', ev => {
    const r = canvas.getBoundingClientRect();
    hover = hit(ev.clientX - r.left, ev.clientY - r.top);
    canvas.style.cursor = hover ? 'pointer' : (panning ? 'grabbing' : 'grab');
    wake();
  });
  canvas.addEventListener('mouseleave', () => { hover = null; wake(); });
  canvas.addEventListener('dblclick', ev => {
    const r = canvas.getBoundingClientRect();
    let n = hit(ev.clientX - r.left, ev.clientY - r.top);
    if (!n && Date.now() - lastClickT < 600) n = lastClickNode;   // the clicked node may have eased away (spread) between the two clicks
    if (n && window.fcWiki && window.fcWiki.open) { window.fcWiki.open(n.e.file); }
  });
  canvas.addEventListener('wheel', ev => {
    ev.preventDefault();
    const r = canvas.getBoundingClientRect();
    const sx = ev.clientX - r.left, sy = ev.clientY - r.top;
    const before = toWorld(sx, sy);
    cam.zoom = Math.max(0.02, Math.min(8, cam.zoom * Math.exp(-ev.deltaY * 0.0012)));
    const after = toWorld(sx, sy);
    cam.x += before.x - after.x; cam.y += before.y - after.y;
    camAnim = null;
    wake();
  }, { passive: false });
  // touch
  let pinch = null;
  canvas.addEventListener('touchstart', ev => {
    if (ev.touches.length === 1) {
      const r = canvas.getBoundingClientRect();
      const n = hit(ev.touches[0].clientX - r.left, ev.touches[0].clientY - r.top);
      lastMouse = { x: ev.touches[0].clientX, y: ev.touches[0].clientY };
      moved = 0;
      if (n) dragged = n;
      else panning = true;
    } else if (ev.touches.length === 2) {
      dragged = null; panning = false;
      if (dragPhysics) { liveStop(60); dragPhysics = false; }   // pinch takes over — settle the trail
      const [a, b] = ev.touches;
      pinch = { d: Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY) };
    }
    wake();
  }, { passive: true });
  canvas.addEventListener('touchmove', ev => {
    ev.preventDefault();
    if (ev.touches.length === 2 && pinch) {
      const [a, b] = ev.touches;
      const d = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      const f = d / pinch.d;
      const r = canvas.getBoundingClientRect();
      const mx = (a.clientX + b.clientX) / 2 - r.left, my = (a.clientY + b.clientY) / 2 - r.top;
      const before = toWorld(mx, my);
      cam.zoom = Math.max(0.02, Math.min(8, cam.zoom * f));
      const after = toWorld(mx, my);
      cam.x += before.x - after.x; cam.y += before.y - after.y;
      pinch.d = d;
    } else if (ev.touches.length === 1 && lastMouse) {
      const t = ev.touches[0];
      const dx = t.clientX - lastMouse.x, dy = t.clientY - lastMouse.y;
      moved += Math.abs(dx) + Math.abs(dy);
      if (dragged) {
        const r = canvas.getBoundingClientRect();
        const p = toWorld(t.clientX - r.left, t.clientY - r.top);
        if (!dragPhysics && moved >= 8) {   // threshold crossed → live physics
          foldOffset(dragged);
          dragPhysics = true;
          liveStart();
        }
        if (dragPhysics) { dragged.x = p.x; dragged.y = p.y; dragged.vx = dragged.vy = 0; }
        else { dragged.ox = p.x - dragged.x; dragged.oy = p.y - dragged.y; }
      } else if (panning) {
        cam.x -= dx / cam.zoom; cam.y -= dy / cam.zoom;
      }
      lastMouse = { x: t.clientX, y: t.clientY };
    }
    wake();
  }, { passive: false });
  canvas.addEventListener('touchend', ev => {
    if (ev.touches.length === 0) {
      const wasDrag = !!dragged && moved >= 8;
      if (moved < 8 && dragged) { select(dragged); lastClickNode = dragged; lastClickT = Date.now(); }
      dragged = null; panning = false; lastMouse = null; pinch = null;
      if (wasDrag && dragPhysics) liveStop(120);
      dragPhysics = false;
    }
    wake();
  });
  // gesture cancellation (system interrupt, tab blur): end any in-progress
  // drag/pan cleanly so physics can never be left running by a lost gesture
  const endGesture = () => {
    if (dragged || panning || dragPhysics) {
      dragged = null; panning = false; lastMouse = null; pinch = null;
      if (dragPhysics) { liveStop(120); dragPhysics = false; }
    }
    wake();
  };
  canvas.addEventListener('touchcancel', endGesture);
  window.addEventListener('blur', endGesture);

  // controls
  scopeSel.addEventListener('change', () => {
    applyScope(scopeSel.value);
    if (selected && !selected.visible) select(null);
    if (hover && !hover.visible) hover = null;
    findMatches = []; findIdx = 0;
    seedPositions();
    restart(true);
    updateGraphMeta();
  });
  $('graphResetBtn').addEventListener('click', () => {
    seedPositions();
    restart(true);
  });
  // drawer wiring
  drawer = $('graphDrawer');
  gd.dot = $('gdDot'); gd.kind = $('gdKind'); gd.title = $('gdTitle'); gd.deg = $('gdDeg');
  gd.content = $('gdContent'); gd.conns = $('gdConns'); gd.body = drawer.querySelector('.gdrawer-body');
  $('gdClose').addEventListener('click', () => select(null));
  // mobile: the node card is a bottom sheet — tapping its header toggles
  // between the collapsed peek (title + count) and the full card
  const mqMobile = window.matchMedia('(max-width:920px)');
  const ghead = drawer ? drawer.querySelector('.gdrawer-head') : null;
  if (ghead) ghead.addEventListener('click', function (ev) {
    if (!mqMobile.matches) return;
    if (ev.target.closest('.gd-close')) return;
    drawer.classList.toggle('sheet-collapsed');
  });
  // mobile: graph controls hide behind the ☰ button
  const menuBtn = document.getElementById('graphMenuBtn');
  if (menuBtn) menuBtn.addEventListener('click', function () {
    const gv = document.getElementById('graphView');
    if (gv) gv.classList.toggle('controls-open');
  });
  $('gdOpenBtn').addEventListener('click', () => {
    if (selected && window.fcWiki && window.fcWiki.open) window.fcWiki.open(selected.e.file);
  });
  $('gdCenterBtn').addEventListener('click', () => { if (selected && warmTicks === 0) centerOn(selected); });
  const gdConnBtn = $('gdConnectBtn');
  if (gdConnBtn) gdConnBtn.addEventListener('click', () => {
    if (selected && window.fcEditor2 && window.fcEditor2.graphConnect) window.fcEditor2.graphConnect(selected.e);
  });
  // navigate the graph from inside the drawer: connection rows and [[links]]
  drawer.addEventListener('click', ev => {
    const bp = ev.target.closest('.gd-bridge-p');
    if (bp) {
      const n = G.nodeById.get(bp.dataset.id);
      if (n && n.visible) select(n);
      else if (n && window.fcWiki && window.fcWiki.open) window.fcWiki.open(n.e.file || n.e.id);
      return;
    }
    const mg = ev.target.closest('.gd-manage');
    if (mg && selected && window.fcEditor2 && window.fcEditor2.manageConnections) {
      window.fcEditor2.manageConnections(selected.e, (adj.get(selected.id) || []).map(n => n.id));
      return;
    }
    const xbtn = ev.target.closest('.gd-conn-x');
    if (xbtn) {
      const now = Date.now();
      if (xbtn.dataset.armed && now - +xbtn.dataset.armed < 3000) {
        const src = selected;                       // capture before the async call
        const other = G.nodeById.get(xbtn.dataset.x);
        if (src && other && window.fcEditor2 && window.fcEditor2.graphDisconnect) {
          window.fcEditor2.graphDisconnect(src.e, other.e, function () {});
        }
      } else if (window.fcEditor2 && window.fcEditor2.configured && !window.fcEditor2.configured()) {
        if (window.fcEditor2.welcome) window.fcEditor2.welcome();
      } else {
        xbtn.dataset.armed = String(now);
        xbtn.classList.add('arm');
        xbtn.textContent = '✓?';
        setTimeout(function () {
          xbtn.classList.remove('arm');
          delete xbtn.dataset.armed;
          xbtn.textContent = '✕';
        }, 3000);
      }
      return;
    }
    const conn = ev.target.closest('.gd-conn');
    if (conn) {
      const n = G.nodeById.get(conn.dataset.id);
      if (n && n.visible) select(n);
      else if (n && window.fcWiki && window.fcWiki.open) window.fcWiki.open(n.e.file || n.e.id);
      return;
    }
    const link = ev.target.closest('.gdl-link');
    if (link) {
      const t = link.dataset.t;
      const entry = G.entryByFile.get(t) || (G.nodeById.get(t) ? G.nodeById.get(t).e : null);
      if (entry) {
        const n = G.nodeById.get(entry.id);
        if (n && n.visible) select(n);
        else if (window.fcWiki && window.fcWiki.open) window.fcWiki.open(entry.file || entry.id);
      } else if (window.fcWiki && window.fcWiki.open) {
        window.fcWiki.open(t);
      }
    }
  });
  window.addEventListener('keydown', ev => {
    if (ev.key === 'Escape' && selected) select(null);
  });
  // find-as-you-type with Enter to cycle matches
  // (findMatches/findIdx live in module scope so fcGraph.focus can reset them too)
  findInp.addEventListener('input', () => {
    if (warmTicks > 0) { findMatches = []; return; }   // the final fit would override the camera anyway
    const q = findInp.value.trim().toLowerCase();
    findMatches = q ? G.nodes.filter(n => n.visible && n.e.title.toLowerCase().includes(q)) : [];
    findIdx = 0;
    if (findMatches.length) centerOn(findMatches[0]), select(findMatches[0]);
  });
  findInp.addEventListener('keydown', ev => {
    if (ev.key === 'Enter' && findMatches.length && warmTicks === 0) {
      findIdx = (findIdx + 1) % findMatches.length;
      centerOn(findMatches[findIdx]); select(findMatches[findIdx]);
    }
  });
  // toggles
  for (const k of Object.keys(kindOn)) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'gtoggle' + (kindOn[k] ? ' on' : '');
    b.dataset.kind = k;
    const dot = document.createElement('span'); dot.className = 'gdot';
    b.appendChild(dot);
    b.appendChild(document.createTextNode(KIND_PLURAL[k]));
    b.addEventListener('click', () => {
      kindOn[k] = !kindOn[k];
      b.classList.toggle('on', kindOn[k]);
      applyToggles();
      // The graph is frozen (no reheat): nodes toggled back on were parked far
      // off-screen by seedPositions() — give them a real position next to
      // their visible neighbours so they actually appear. Re-layout is available
      // for a proper re-arrangement. Separation runs even when nothing was
      // parked: hidden nodes keep their coordinates and the graph may have
      // moved while they were hidden.
      unparkNewlyVisible();
      separateShown(kindOn[k] ? G.nodes.filter(n => n.kind === k && n.visible).length : 0);
      if (selected && !selected.visible) select(null);
      // the selection's belt populations are stale after a visibility change —
      // a newly visible neighbour must join the Y belt, not be pushed out as
      // context. Rebuild the rings and re-fit so both belts stay on screen.
      if (selected && selected.visible) {
        setSpread(selected);
        if (phys.belts && spreadSlots) fitToBelts();
      }
      if (hover && !hover.visible) hover = null;
      findMatches = []; findIdx = 0;   // cached search results may point at hidden nodes
      updateGraphMeta();
      needsRender = true;
      wake();
    });
    togglesEl.appendChild(b);
  }
  // layout-settings popover: sliders for the force model + node size
  const physBtn = $('graphPhysBtn'), physPanel = $('graphPhys');
  const PHYS_ROWS = [
    ['rep', 'gphysRep'], ['spring', 'gphysSpring'], ['linkLen', 'gphysLink'],
    ['nodeSize', 'gphysNode'], ['degEmph', 'gphysDeg'], ['gravity', 'gphysGrav']
  ];
  if (physBtn && physPanel) {
    const fmt = (k, v) => k === 'degEmph' ? Math.round(v * 100) + '%' : v.toFixed(1) + '\u00d7';
    const syncRow = (key, inpId) => {
      const inp = $(inpId), val = $(inpId + 'V');
      if (inp) inp.value = phys[key];
      if (val) val.textContent = fmt(key, phys[key]);
    };
    physBtn.addEventListener('click', ev => { ev.stopPropagation(); physPanel.hidden = !physPanel.hidden; });
    $('gphysClose').addEventListener('click', () => { physPanel.hidden = true; });
    document.addEventListener('click', ev => {
      if (!physPanel.hidden && !physPanel.contains(ev.target) &&
          !physBtn.contains(ev.target)) physPanel.hidden = true;
    });
    for (const [key, inpId] of PHYS_ROWS) {
      const inp = $(inpId);
      if (!inp) continue;
      syncRow(key, inpId);
      inp.addEventListener('input', () => {
        phys[key] = +inp.value;
        const val = $(inpId + 'V');
        if (val) val.textContent = fmt(key, phys[key]);
        if (key === 'nodeSize' || key === 'degEmph') { applyNodeSizes(); needsRender = true; wake(); }  // live, no physics
        else liveStart();   // continuous morph while sliding — direct feedback
      });
      inp.addEventListener('change', () => {
        savePhys();
        if (key !== 'nodeSize' && key !== 'degEmph') liveStop(180);   // release → short settle, then freeze
      });
    }
    $('gphysReset').addEventListener('click', () => {
      phys = { ...PHYS_DEF };
      savePhys();
      for (const [key, inpId] of PHYS_ROWS) syncRow(key, inpId);
      syncBelts();
      // sizes back to defaults FIRST (applyNodeSizes rebuilds slots + refits),
      // then rebuild the belts for the current selection — a fit computed with
      // the old radii would be stale
      applyNodeSizes();
      if (selected && selected.visible) {
        setSpread(selected);
        if (phys.belts && spreadSlots) fitToBelts();
      }
      liveStart(); liveStop(180);   // morph back to the default equilibrium, then settle
    });
    // neighbour-belts toggle → N+2 VIEW switch: ON shows both belts (Y ring +
    // Z tails behind each Y node), OFF hides the second belt entirely (Z nodes
    // recede with the context, Y→Z links are not drawn) and the camera
    // re-fits to the direct-neighbour ring alone.
    const beltsInp = $('gphysBelts');
    const syncBelts = () => { if (beltsInp) beltsInp.checked = !!phys.nb2; };
    syncBelts();
    if (beltsInp) beltsInp.addEventListener('change', () => {
      phys.nb2 = beltsInp.checked;
      if (selected && selected.visible) {
        setSpread(selected);
        if (phys.belts && spreadSlots) fitToBelts();
      }
      wake();
    });
  }
  // resize
  if (window.ResizeObserver) {
    new ResizeObserver(() => { needsRender = true; wake(); }).observe(wrap);
  } else {
    window.addEventListener('resize', () => { needsRender = true; wake(); });
  }
  // theme changes re-read colors (main graph; the mini graph has its own
  // lifecycle below, installed at load so it works without visiting Graph)
  new MutationObserver(() => { colorCache = null; needsRender = true; wake(); })
    .observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
}

/* ---------- legend ---------- */
function buildLegend() {
  const c = colors();
  const counts = {};
  for (const n of G.nodes) if (n.visible) counts[n.kind] = (counts[n.kind] || 0) + 1;
  legendEl.innerHTML = Object.keys(KIND_LABEL)
    .filter(k => counts[k])
    .map(k => `<span class="gl-item"><span class="gdot" style="background:${c[k]}"></span>${KIND_PLURAL[k]} · ${counts[k].toLocaleString()}</span>`)
    .join('');
}

function updateGraphMeta() {
  buildLegend();
  const vis = G.nodes.filter(n => n.visible).length;
  findInp.placeholder = `Find a node… (${vis.toLocaleString()} nodes)`;
}

function toast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast.t);
  toast.t = setTimeout(() => t.classList.remove('show'), 2400);
}

// Nodes hidden at layout time are "parked" at 1e7 — when their kind is toggled
// back on in the frozen graph, place them beside their visible neighbours
// (or in the current view if they have none) instead of leaving them off-screen.
function unparkNewlyVisible() {
  let unparked = 0;
  for (const n of G.nodes) {
    if (!n.visible || (Math.abs(n.x) < 1e6 && Math.abs(n.y) < 1e6)) continue;
    const nbs = (adj.get(n.id) || []).filter(m => m.visible && Math.abs(m.x) < 1e6);
    if (nbs.length) {
      let sx = 0, sy = 0;
      for (const m of nbs) { sx += dispX(m); sy += dispY(m); }
      n.x = sx / nbs.length + (Math.random() - 0.5) * 60 - n.ox;
      n.y = sy / nbs.length + (Math.random() - 0.5) * 60 - n.oy;
    } else {
      const a = Math.random() * Math.PI * 2, r = Math.random() * 260;
      n.x = cam.x + Math.cos(a) * r;
      n.y = cam.y + Math.sin(a) * r;
    }
    n.vx = n.vy = 0;
    unparked++;
  }
  if (unparked > 400) toast('Re-layout will spread the newly shown nodes');
  return unparked;
}

/* Separation after a visibility increase. Runs for EVERY batch of shown
   nodes, parked or not: nodes that were toggled off keep their coordinates,
   and the graph may have moved while they were hidden (drags, spreads), so
   re-showing them can collide. Big batches (> 150) stack at their neighbours'
   centroids — the positional relaxation alone cannot spread a pile that
   dense (and its radius-weighted nudges jumble the clean layout around it).
   The physics is collision-aware now, so a short bounded warmup spreads a
   big batch properly; the frame loop freezes + declutters it like every other
   layout, and the arranging pill keeps the state legible. */
function separateShown(count) {
  if (count <= 0) return;
  if (count > 150) {
    if (arrangingEl) arrangingEl.hidden = false;
    warmup(420);
  } else {
    declutter();
  }
}

/* ---------- mini graph (local constellation on principle/kernel cards) ---------- */
const MG_KIND_ORDER = { principle: 0, kernel: 1, theory: 2, concept: 3, story: 4, saying: 5 };
const MG_MAX = 36;

function mgRender(host) {
  const entry = window.__currentEntry;
  if (!entry || !G || !adj) return;
  const center = G.nodeById.get(entry.id);
  if (!center) return;
  let nbs = (adj.get(entry.id) || []).slice();
  if (!nbs.length) return;
  nbs.sort((a, b) => (MG_KIND_ORDER[a.kind] ?? 9) - (MG_KIND_ORDER[b.kind] ?? 9) || a.e.title.localeCompare(b.e.title));
  const capped = nbs.length > MG_MAX;
  nbs = nbs.slice(0, MG_MAX);

  const c = colors();
  // section-style block: same heading language as "Practice kernels" etc.,
  // with an icon-only "Open in Graph" button at the end of the heading row
  const wrapEl = document.createElement('div');
  wrapEl.className = 'mg-section';
  wrapEl.innerHTML =
    '<div class="mg-head"><span class="mg-hb"></span><span class="mg-title">Local graph</span>' +
    '<span class="mg-fill"></span>' +
    '<button type="button" class="mg-open-btn" title="Open in Graph" aria-label="Open in Graph">' +
    '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<circle cx="6" cy="18" r="2.6"/><circle cx="18" cy="17" r="2.6"/><circle cx="12" cy="6" r="2.6"/>' +
    '<path d="M7.6 16.1 10.7 8.2M13.4 8.1l3.2 6.5M8.6 18l7.8-.7"/></svg></button></div>';
  const cv = document.createElement('canvas');
  cv.className = 'mg-canvas';
  wrapEl.appendChild(cv);
  const noteEl = document.createElement('div');
  noteEl.className = 'mg-note';
  wrapEl.appendChild(noteEl);
  host.appendChild(wrapEl);

  wrapEl.querySelector('.mg-open-btn').addEventListener('click', () => {
    if (window.fcGraph && window.fcGraph.focus) window.fcGraph.focus(entry.id);
  });

  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const W = Math.max(280, host.clientWidth || 600);
  const H = Math.min(330, Math.max(210, 190 + nbs.length * 4));
  cv.width = W * dpr; cv.height = H * dpr;
  cv.style.width = W + 'px'; cv.style.height = H + 'px';
  const ctx2 = cv.getContext('2d');
  ctx2.scale(dpr, dpr);

  // layout positions, relative to the centre node at (0,0)
  const Rx = Math.max(90, W / 2 - 84), Ry = Math.max(70, H / 2 - 44);
  const pos = new Map();
  const startAngle = -Math.PI / 2;
  nbs.forEach((n, i) => {
    const t = startAngle + (i / nbs.length) * Math.PI * 2;
    const wob = (i % 2) ? 1.12 : 0.94;            // stagger alternate nodes outward
    pos.set(n.id, { x: Math.cos(t) * Rx * wob, y: Math.sin(t) * Ry * wob });
  });
  pos.set(center.id, { x: 0, y: 0 });

  // local view state: pan (tx/ty) + zoom, like the main graph
  const view = { tx: 0, ty: 0, zoom: 1 };
  const noteBase = () => (capped ? (adj.get(entry.id).length - MG_MAX) + ' more not shown · ' : '') +
    'scroll to zoom · drag to pan · click a node to open';
  noteEl.textContent = noteBase();

  const sp = id => {
    const p = pos.get(id);
    return { x: W / 2 + view.tx + p.x * view.zoom, y: H / 2 + view.ty + p.y * view.zoom };
  };

  const trunc = (s, n) => s.length > n ? s.slice(0, n - 1) + '…' : s;
  let hover = null;

  function draw() {
    ctx2.clearRect(0, 0, W, H);
    // neighbour↔neighbour edges (faint)
    ctx2.strokeStyle = c.edge; ctx2.lineWidth = 1;
    for (const n of nbs) {
      for (const m of (adj.get(n.id) || [])) {
        if (!pos.has(m.id)) continue;   // guard BEFORE sp() — sp() would read undefined
        const p2 = sp(m.id);
        const p1 = sp(n.id);
        ctx2.globalAlpha = hover && (hover === n || hover === m) ? 0.5 : 0.14;
        ctx2.beginPath(); ctx2.moveTo(p1.x, p1.y); ctx2.lineTo(p2.x, p2.y); ctx2.stroke();
      }
    }
    // spokes to centre
    for (const n of nbs) {
      const p = sp(n.id);
      const cp = sp(center.id);
      ctx2.globalAlpha = hover === n ? 0.85 : 0.3;
      ctx2.strokeStyle = hover === n ? c.halo : c.edge;
      ctx2.lineWidth = hover === n ? 1.6 : 1;
      ctx2.beginPath(); ctx2.moveTo(cp.x, cp.y); ctx2.lineTo(p.x, p.y); ctx2.stroke();
    }
    ctx2.globalAlpha = 1;
    // nodes
    for (const n of nbs) {
      const p = sp(n.id);
      const col = c[n.kind] || c.text;
      if (hover === n) { ctx2.fillStyle = col; ctx2.globalAlpha = .18; ctx2.beginPath(); ctx2.arc(p.x, p.y, 13 * view.zoom, 0, 7); ctx2.fill(); ctx2.globalAlpha = 1; }
      ctx2.fillStyle = col;
      ctx2.beginPath();
      ctx2.arc(p.x, p.y, (3.4 + Math.min(2.4, Math.sqrt(n.deg) * 0.35)) * view.zoom, 0, 7);
      ctx2.fill();
    }
    // centre
    const cp = sp(center.id);
    ctx2.fillStyle = c.halo;
    ctx2.beginPath(); ctx2.arc(cp.x, cp.y, 7.5 * view.zoom, 0, 7); ctx2.fill();
    // labels: fixed 10px, greedy rect-collision — the entry title first,
    // then neighbours in degree order; labels that don't fit are skipped
    ctx2.textAlign = 'center';
    ctx2.font = '10px system-ui, sans-serif';
    const placed = [];
    const hitR = (r) => placed.some(p =>
      !(r.x + r.w < p.x || r.x > p.x + p.w || r.y + r.h < p.y || r.y > p.y + p.h));
    const drawLabel = (txt, x, yBase, color, weight) => {
      const wT = ctx2.measureText(txt).width;
      const r = { x: x - wT / 2 - 3, y: yBase - 9, w: wT + 6, h: 13 };
      if (hitR(r)) return false;
      placed.push(r);
      ctx2.fillStyle = color;
      ctx2.font = weight + ' 10px system-ui, sans-serif';
      ctx2.fillText(txt, x, yBase);
      return true;
    };
    // entry title (always shown, below the centre node)
    drawLabel(trunc(entry.title, 26), cp.x, cp.y + 7.5 * view.zoom + 16, c.text, '700');
    for (const n of [...nbs].sort((a, b) => b.deg - a.deg)) {
      const p = sp(n.id);
      const txt = trunc(n.e.title, 18);
      const col = c.text.startsWith('#') ? c.text + 'cc' : c.text;
      const isH = hover === n;
      for (const dy of [-9, 15, -22, 28]) {   // above / below, then further out
        if (drawLabel(txt, p.x, p.y + dy * view.zoom, isH ? c.text : col, isH ? '700' : '')) break;
      }
    }
  }
  draw();

  function pick(ev) {
    const rect = cv.getBoundingClientRect();
    const mx = (ev.clientX - rect.left), my = (ev.clientY - rect.top);
    let best = null, bd = 22;
    for (const n of nbs) {
      const p = sp(n.id);
      const d = Math.hypot(p.x - mx, p.y - my);
      if (d < bd) { bd = d; best = n; }
    }
    if (!best) {
      const cp = sp(center.id);
      if (Math.hypot(cp.x - mx, cp.y - my) < 14) best = center;
    }
    return best;
  }

  // ---- zoom / pan / click ----
  cv.addEventListener('wheel', ev => {
    ev.preventDefault();
    const rect = cv.getBoundingClientRect();
    const mx = ev.clientX - rect.left, my = ev.clientY - rect.top;
    const z2 = Math.min(4, Math.max(0.5, view.zoom * Math.exp(-ev.deltaY * 0.0012)));
    if (z2 === view.zoom) return;
    // keep the layout point under the cursor fixed while zooming
    view.tx = mx - W / 2 - ((mx - W / 2 - view.tx) / view.zoom) * z2;
    view.ty = my - H / 2 - ((my - H / 2 - view.ty) / view.zoom) * z2;
    view.zoom = z2;
    draw();
  }, { passive: false });

  let panning = null;   // {x, y, moved}
  cv.addEventListener('pointerdown', ev => {
    panning = { x: ev.clientX, y: ev.clientY, moved: 0 };
    cv.setPointerCapture(ev.pointerId);
  });
  cv.addEventListener('pointermove', ev => {
    if (panning) {
      const dx = ev.clientX - panning.x, dy = ev.clientY - panning.y;
      panning.moved += Math.abs(dx) + Math.abs(dy);
      panning.x = ev.clientX; panning.y = ev.clientY;
      if (panning.moved > 4) { view.tx += dx; view.ty += dy; cv.style.cursor = 'grabbing'; }
      draw();
      return;
    }
    const n = pick(ev);
    cv.style.cursor = n ? 'pointer' : 'grab';
    if (n !== hover) { hover = n; draw(); noteEl.textContent = n ? n.e.title : noteBase(); }
  });
  cv.addEventListener('pointerup', ev => {
    const wasPan = panning && panning.moved > 4;
    panning = null;
    cv.style.cursor = 'grab';
    if (wasPan) return;   // a drag is not a click
    const n = pick(ev);
    if (n && n !== center) window.fcWiki.open(n.e.file || n.e.id);
  });
  cv.addEventListener('mouseleave', () => {
    if (hover) { hover = null; draw(); noteEl.textContent = noteBase(); }
    cv.style.cursor = 'default';
  });
  cv.addEventListener('dblclick', () => { view.tx = 0; view.ty = 0; view.zoom = 1; draw(); });
}

// Inject the mini graph into principle/kernel read panes.
// Standalone lifecycle — works without ever opening the Graph tab:
//   • entry changes (readInner mutations)
//   • theme changes (fresh colors)
//   • read-pane width changes (canvas re-rendered at the new size)
// One refresh function for all three; it disconnects the mutation observer
// around its own writes so it never re-triggers itself.
(function () {
  const host = document.getElementById('readInner');
  if (!host) return;
  let mo = null;
  function refresh() {
    if (mo) mo.disconnect();
    try {
      const e = window.__currentEntry;
      const old = document.getElementById('miniGraphSection');
      if (old) old.remove();
      if (!e || (e.type !== 'principle' && e.type !== 'kernel')) return;
      ensureGraphData();
      const sec = document.createElement('div');
      sec.id = 'miniGraphSection';
      // sit directly above the article's first section heading ("Practice
      // kernels" on principles; e.g. "Operationalises" on kernels) so the
      // graph reads as part of the card's flow, not a banner at the top
      const art = host.querySelector('.art');
      const anchor = art && (art.querySelector('h3.sec-kernels') || art.querySelector('h3.sec-h'));
      if (anchor) art.insertBefore(sec, anchor);          // heading lives inside .art
      else if (art) art.insertAdjacentElement('afterend', sec);
      else host.appendChild(sec);
      mgRender(sec);
    } finally {
      if (mo) mo.observe(host, { childList: true, subtree: false });
    }
  }
  mo = new MutationObserver(refresh);
  mo.observe(host, { childList: true, subtree: false });
  // in case an entry was already rendered before graph.js loaded
  refresh();
  // theme changes → redraw with fresh colors (independent of Graph activation;
  // colorCache is module-scope — clear it HERE, the bindEvents observer only
  // covers the case where the Graph tab was already opened)
  new MutationObserver(() => {
    if (document.getElementById('miniGraphSection')) { colorCache = null; refresh(); }
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  // read-pane width changes → redraw at the new size
  if (window.ResizeObserver) {
    let lastW = host.clientWidth || 0;
    new ResizeObserver(() => {
      const w = host.clientWidth || 0;
      if (Math.abs(w - lastW) > 40) { lastW = w; refresh(); }
    }).observe(host);
  }
})();

/* ---------- public api ---------- */
function ensureGraphData() {
  if (!G) buildGraph();
}

// QA-only hook: completes an in-progress warmup synchronously (the frame loop
// time-slices it for jank-free rendering, which is too slow for automated QA
// on a throttled headless browser). Mirrors the frame loop's warmup-end block.
window.__qaFinishWarmup = () => {
  const t0 = performance.now();
  while (warmTicks > 0) { step(); warmTicks--; }
  freezeSim();
  declutter();
  if (fitAfterWarmup) { fitAfterWarmup = false; fitView(); }
  if (arrangingEl) arrangingEl.hidden = true;
  if (selected && selected.visible) setSpread(selected);
  if (pendingFocus) { const n = pendingFocus; pendingFocus = null; centerOn(n); select(n); }
  needsRender = true;
  return { ms: Math.round(performance.now() - t0), vis: G ? G.nodes.filter(n => n.visible).length : 0 };
};

// small debug/introspection hook (positions + camera) — used for QA
window.__graphDebug = (id) => {
  if (!G) return null;
  if (id) {
    const n = G.nodeById.get(id);
    return n ? { x: dispX(n), y: dispY(n), ox: n.ox, oy: n.oy, r: n.r, visible: !!n.visible } : null;
  }
  const vis = G.nodes.filter(n => n.visible);
  const xs = vis.map(n => dispX(n)).sort((a, b) => a - b), ys = vis.map(n => dispY(n)).sort((a, b) => a - b);
  let maxOff = 0;
  for (const n of vis) maxOff = Math.max(maxOff, Math.hypot(n.ox, n.oy));
  return {
    cam: { ...cam },
    warmTicks,
    alpha,
    liveMode,
    settleTicks,
    running,
    vis: vis.length,
    spread: spreadCenter ? (() => {
      let md = Infinity;
      for (const n of vis) {
        if (n === spreadCenter || (spreadNbSet && spreadNbSet.has(n))) continue;
        md = Math.min(md, Math.hypot(dispX(n) - dispX(spreadCenter), dispY(n) - dispY(spreadCenter)));
      }
      return { id: spreadCenter.id, minDist: isFinite(md) ? Math.round(md) : null, maxOffset: Math.round(maxOff), spreadActive };
    })() : { center: null, spreadActive, maxOffset: Math.round(maxOff) },
    bbox: { minX: xs[0], maxX: xs[xs.length - 1], minY: ys[0], maxY: ys[ys.length - 1] }
  };
};

window.fcGraph = {
  activate() {
    if (!inited) {
      canvas = $('graphCanvas'); ctx = canvas.getContext('2d');
      wrap = canvas.parentElement; scopeSel = $('graphScope'); togglesEl = $('graphToggles');
      findInp = $('graphFind'); legendEl = $('graphLegend');
      arrangingEl = $('graphArranging');
      ensureGraphData();
      // Library-first flow: the mini graph may have built G before this UI
      // existed — buildScopeOptions() inside buildGraph never saw scopeSel.
      if (scopeSel.options.length <= 1) buildScopeOptions();
      bindEvents();
      applyScope('all');
      seedPositions();
      inited = true;
      updateGraphMeta();
      restart(true);
    }
    wake();
  },
  /* Open-in-Graph: switch to the graph view and center on this entry.
     Called by the mini graph's icon button. Safe before the first activation
     (the kind is switched on up-front so the warmup positions it properly). */
  focus(id) {
    ensureGraphData();
    const n = G && G.nodeById.get(id);
    if (window.fcSwitchView) window.fcSwitchView('graph');   // activates the graph
    if (!n) return;
    if (!kindOn[n.kind]) {
      kindOn[n.kind] = true;
      if (inited && togglesEl) {
        const b = togglesEl.querySelector('[data-kind="' + n.kind + '"]');
        if (b) b.classList.add('on');
        applyToggles();
        unparkNewlyVisible();
        separateShown(G.nodes.filter(m => m.kind === n.kind && m.visible).length);
        if (selected && !selected.visible) select(null);
        if (hover && !hover.visible) hover = null;
        findMatches = []; findIdx = 0;
        updateGraphMeta();
        needsRender = true;
      }
      // not inited yet: activate() (called by switchView) builds the UI with
      // kindOn already true, so the node is placed by the warmup itself
    }
    // the current scope may exclude this entry (e.g. Shared Discovery Layer
    // while the entry is a Philosophy principle) — fall back to Everything
    if (inited && n.hidden) {
      if (scopeSel) scopeSel.value = 'all';
      applyScope('all');
      unparkNewlyVisible();
      separateShown(G.nodes.filter(m => m.visible).length);
      findMatches = []; findIdx = 0;
      updateGraphMeta();
      needsRender = true;
    }
    if (warmTicks > 0) pendingFocus = n;   // centered + selected at the reveal
    else { centerOn(n); select(n); }
    wake();
  }
};
})();
