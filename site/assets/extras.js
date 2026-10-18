
/* ==== F3: Surprising connections panel (cross-tradition) ==== */
/* ==== F4: Essay-outline export ==== */
(function(){
'use strict';
// lazily resolve byFile/byId from the main app
function resolve() {
  // main app exposes byFile/byId as top-level const — accessible via eval on window scope? No — they're in an IIFE.
  // Fallback: rebuild indexes from wikiData directly.
  const byFile = new Map(), byId = new Map();
  for (const e of window.wikiData) {
    if (!byFile.has(e.file)) byFile.set(e.file, e);
    if (!byId.has(e.id)) byId.set(e.id, e);
  }
  return {byFile, byId};
}
let CONN = null;
function buildConnIndex(byFile, byId) {
  if (CONN) return CONN;
  CONN = new Map();
  const linkRe = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
  // 1) direct links
  for (const e of window.wikiData) {
    if (!e.content) continue;
    let m;
    const out = new Set();
    linkRe.lastIndex = 0;
    while ((m = linkRe.exec(e.content)) !== null) {
      const target = m[1].trim();
      const resolved = byFile.get(target) || byId.get(target);
      if (resolved && resolved !== e) out.add(resolved.id);
    }
    if (out.size) CONN.set(e.id, out);
  }
  // 2) 2-hop via shared stories/concepts
  const entryById = new Map();
  for (const e of window.wikiData) entryById.set(e.id, e);
  const twoHop = new Map();
  for (const e of window.wikiData) {
    if (e.type !== 'principle') continue;
    const out = CONN.get(e.id) || new Set();
    const hop2 = new Set();
    for (const mid of out) {
      const midE = entryById.get(mid);
      if (!midE || midE.type === 'principle') continue;
      const midOut = CONN.get(mid) || [];
      for (const t2 of midOut) {
        const t2E = entryById.get(t2);
        if (t2E && t2E.type === 'principle' && t2E.id !== e.id) hop2.add(t2);
      }
    }
    if (hop2.size) twoHop.set(e.id, hop2);
  }
  for (const [k,v] of twoHop) {
    const cur = CONN.get(k) || new Set();
    v.forEach(x => cur.add(x));
    CONN.set(k, cur);
  }
  return CONN;
}
window.buildConnectionsPanel = function(e) {
  try {
    const {byFile, byId} = resolve();
    buildConnIndex(byFile, byId);
    const read = document.getElementById('read');
    if (!read) return;
    const out = CONN.get(e.id) || new Set();
    const inc = new Set();
    for (const [src, outs] of CONN) if (outs.has(e.id)) inc.add(src);
    const all = new Set([...out, ...inc]);
    all.delete(e.id);
    // find shared intermediaries (2-hop path) for ranking
    const sharedCount = new Map(); // targetId -> {count, via:Set}
    for (const tid of all) {
      const t = byId.get(tid);
      if (!t) continue;
      sharedCount.set(tid, {count:0, via:new Set()});
    }
    // For each direct out-link (story/concept), find which principles (in `all`) also link to it
    for (const mid of out) {
      const midE = byId.get(mid);
      if (!midE || midE.type === 'principle') continue;
      // find all principles that link to midE
      for (const [src, srcOut] of CONN) {
        if (!srcOut.has(mid)) continue;
        const srcE = byId.get(src);
        if (!srcE || srcE.type !== 'principle') continue;
        if (sharedCount.has(src)) {
          const sc = sharedCount.get(src);
          sc.count += 1;
          sc.via.add(midE.title);
        }
      }
    }
    // Rank: prefer cross-book principles with more shared intermediaries
    const e_book = (e._legacy && e._legacy.book) || e.file || '';
    const cross = [], same = [];
    for (const [tid, sc] of sharedCount) {
      const t = byId.get(tid);
      if (!t || t.type !== 'principle' || t.id === e.id) continue;
      const t_book = (t._legacy && t._legacy.book) || t.file || '';
      const entry = {t, count: sc.count, via: sc.via};
      if (t_book !== e_book) cross.push(entry);
      else same.push(entry);
    }
    const picks = (cross.length ? cross : same)
      .sort((a,b) => b.count - a.count)
      .slice(0,5);
    const esc = s => String(s||'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const escAttr = s => String(s||'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    let h = '<div class="conn-panel"><div class="conn-head"><span class="conn-label">Surprising connections</span><span class="conn-note">Cross-tradition principles</span></div>';
    if (!picks.length) {
      h += '<div class="conn-empty">No cross-tradition principles link here yet. Try a related story or concept.</div></div>';
    } else {
      h += '<ul class="conn-list">';
      for (const p of picks) {
        const viaArr = Array.from(p.via).slice(0,2);
        h += '<li class="conn-item"><a class="conn-link" href="#" data-file="' + escAttr(p.t.file) + '" data-id="' + escAttr(p.t.id) + '"><span class="conn-kind">' + esc(p.t.type) + '</span> ' + esc(p.t.title) + '</a>';
        if (viaArr.length) h += '<span class="conn-via">via ' + viaArr.map(v => esc(v)).join(', ') + '</span>';
        h += '</li>';
      }
      h += '</ul></div>';
    }
    const art = read.querySelector('.art');
    if (!art) return;
    const prev = read.querySelector('.conn-panel');
    if (prev) prev.remove();
    art.insertAdjacentHTML('afterend', h);
    const panel = read.querySelector('.conn-panel');
    if (!panel) return;
    panel.querySelectorAll('.conn-link').forEach(a => {
      a.addEventListener('click', ev => {
        ev.preventDefault();
        const t = byFile.get(a.dataset.file) || byId.get(a.dataset.id);
        if (t && typeof window.__selectEntry === 'function') window.__selectEntry(t);
      });
    });
  } catch(err) { /* fail silent */ }
};


// F4: Essay-outline export (saved principles -> markdown)
window.getEssayCollection = getEssayCollection;
window.addToEssayCollection = addToEssayCollection;
window.removeFromEssayCollection = removeFromEssayCollection;
window.updateEssayCountBadge = updateEssayCountBadge;
let __essayMem = null;
function getEssayCollection() {
  try {
    const v = (window.FC_XMEM && 'fc.essayCollection' in window.FC_XMEM) ? window.FC_XMEM['fc.essayCollection'] : null;
    if (v) return JSON.parse(v);
  } catch(e) {}
  if (__essayMem === null) __essayMem = [];
  return __essayMem;
}
function saveEssayCollection(list) {
  __essayMem = list;
  (window.FC_XMEM || (window.FC_XMEM = {}))['fc.essayCollection'] = JSON.stringify(list);
}
function addToEssayCollection(id) {
  const list = getEssayCollection();
  if (!list.includes(id)) list.push(id);
  saveEssayCollection(list);
  updateEssayCountBadge();
}
function removeFromEssayCollection(id) {
  const list = getEssayCollection().filter(x => x !== id);
  saveEssayCollection(list);
  updateEssayCountBadge();
}
function updateEssayCountBadge() {
  const badge = document.getElementById('essayCountBadge');
  if (badge) badge.textContent = String(getEssayCollection().length);
  const btn = document.getElementById('essayAddBtn');
  if (btn && window.__currentEntry) {
    const inList = getEssayCollection().includes(window.__currentEntry.id);
    btn.textContent = inList ? '− Remove from essay' : '+ Add to essay';
    btn.setAttribute('aria-pressed', String(inList));
  }
}
function exportEssayOutline() {
  const {byId} = resolve();
  const ids = getEssayCollection();
  if (!ids.length) { alert('Add some principles/stories/kernels to the essay collection first (click "+ Add to essay")'); return; }
  // Show the MD/PDF chooser; on choice, run the matching writer.
  showExportFormatDialog((fmt) => {
    if (fmt === 'md') exportEssayMarkdown(ids, byId);
    else if (fmt === 'pdf') exportEssayPDF(ids, byId);
  });
}

function showExportFormatDialog(cb) {
  // Reuse an existing dialog if present
  let dlg = document.getElementById('exportFormatDialog');
  if (dlg) dlg.remove();
  dlg = document.createElement('dialog');
  dlg.id = 'exportFormatDialog';
  dlg.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);border:1px solid rgba(127,127,127,.4);border-radius:12px;padding:22px;max-width:340px;box-shadow:0 8px 32px rgba(0,0,0,.25);font-family:\'Source Serif 4\',Georgia,serif;color:inherit;background:var(--bg,#fff);z-index:9999;';
  const isDark = document.body.classList.contains('dark') || document.documentElement.getAttribute('data-theme') === 'dark';
  dlg.innerHTML = `
    <h3 style="font-family:'Fraunces',Georgia,serif;font-weight:600;margin:0 0 8px;font-size:1.15em;">Export essay</h3>
    <p style="font-size:.9em;opacity:.7;margin:0 0 16px;">Choose a format for the essay collection.</p>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <button data-fmt="md" style="all:unset;box-sizing:border-box;width:100%;padding:9px 12px;border:1px solid rgba(127,127,127,.35);border-radius:8px;cursor:pointer;font-family:'Source Serif 4',Georgia,serif;font-size:.95em;display:flex;align-items:center;gap:8px;">
        <span aria-hidden="true">📄</span><span><strong>Markdown (.md)</strong><br><span style="font-size:.78em;opacity:.65;">Plain-text outline for notes/editors</span></span>
      </button>
      <button data-fmt="pdf" style="all:unset;box-sizing:border-box;width:100%;padding:9px 12px;border:1px solid rgba(127,127,127,.35);border-radius:8px;cursor:pointer;font-family:'Source Serif 4',Georgia,serif;font-size:.95em;display:flex;align-items:center;gap:8px;">
        <span aria-hidden="true">🖨</span><span><strong>PDF (print)</strong><br><span style="font-size:.78em;opacity:.65;">Typeset with Fraunces headings & Source Serif 4 body</span></span>
      </button>
      <button data-fmt="cancel" style="all:unset;box-sizing:border-box;width:100%;padding:7px;border:none;cursor:pointer;font-family:'Source Serif 4',Georgia,serif;font-size:.85em;opacity:.65;background:none;">Cancel</button>
    </div>`;
  document.body.appendChild(dlg);
  dlg.style.background = isDark ? '#1a1a1a' : '#fff';
  dlg.style.color = isDark ? '#eaeaea' : '#222';
  dlg.showModal();
  dlg.querySelectorAll('button').forEach(b => {
    b.addEventListener('click', () => { dlg.close(); dlg.remove(); if (b.dataset.fmt !== 'cancel') cb(b.dataset.fmt); });
  });
}

function exportEssayMarkdown(ids, byId) {
  let md = '# Essay Outline\n\nGenerated ' + new Date().toISOString().slice(0,10) + '\n\n';
  for (const id of ids) {
    const e = byId.get(id);
    if (!e) continue;
    md += '---\n\n## ' + (e.title || id) + '\n\n';
    if (e.type) md += '_Kind: ' + e.type + '_\n\n';
    md += (e.content || '') + '\n\n';
  }
  md += '\n---\n\n## Sources\n\nSee "Recommended Reading — Primary Sources (Open Access)" hub entry.\n';
  const blob = new Blob([md], {type:'text/markdown'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'essay-outline-' + new Date().toISOString().slice(0,10) + '.md';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

function exportEssayPDF(ids, byId) {
  // Escape helper for HTML string building.
  const esc = s => String(s||'').replace(/[&<>"']/g, c => ({'&':'&','<':'<','>':'>','"':'"',"'":'&#39;'}[c]));
  // Convert simple markdown-ish markup to HTML for the PDF body.
  const mdToHtml = md => {
    let h = esc(md);
    h = h.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    h = h.replace(/(^|\n)### ([^\n]+)/g, '$1<h3>$2</h3>');
    h = h.replace(/(^|\n)## ([^\n]+)/g, '$1<h2>$2</h2>');
    h = h.replace(/(^|\n)# ([^\n]+)/g, '$1<h1>$2</h1>');
    h = h.replace(/(^|\n)- ([^\n]+)/g, '$1<li>$2</li>');
    h = h.replace(/(^|\n)([^\n<][^\n]*)(?=\n|$)/g, (m,p,c) => /<(h[123]|li|strong)/.test(c) ? m : p + '<p>' + c + '</p>');
    return h;
  };

  let body = '<h1>Essay Outline</h1><p class="meta">Generated ' + new Date().toISOString().slice(0,10) + '</p>';
  for (const id of ids) {
    const e = byId.get(id);
    if (!e) continue;
    body += '<hr><h2>' + esc(e.title || id) + '</h2>';
    if (e.type) body += '<p class="kind">Kind: ' + esc(e.type) + '</p>';
    body += mdToHtml(e.content || '');
  }
  body += '<hr><h2>Sources</h2><p>See "Recommended Reading — Primary Sources (Open Access)" hub entry.</p>';

  const win = window.open('', '_blank');
  if (!win) { alert('Popup blocked — allow popups for this file to export PDF.'); return; }
  const styles = document.querySelector('style') ? document.querySelector('style').textContent : '';
  // Find just the @font-face blocks we added (Fraunces + Source Serif 4) — copy those only, plus a small print stylesheet.
  const ffRe = /@font-face \{[^}]*font-family:'(Fraunces|Source Serif 4)'[^}]*\}/g;
  let ffCss = '', m;
  while ((m = ffRe.exec(styles)) !== null) ffCss += m[0] + '\n';

  // Build the print document with proper string concatenation (no nested template-literal backticks).
  const headPart = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Essay Outline</title>\n<style>\n'
    + ffCss
    + '\n@page { margin: 20mm 18mm; }\n'
    + 'html { -webkit-print-color-adjust: exact; }\n'
    + "body { font-family: 'Source Serif 4', Georgia, 'Times New Roman', serif; font-size: 11pt; line-height: 1.55; color: #1a1a1a; max-width: 6.5in; margin: 0 auto; }\n"
    + "h1, h2, h3 { font-family: 'Fraunces', Georgia, serif; line-height: 1.2; }\n"
    + 'h1 { font-size: 22pt; font-weight: 600; margin: 0 0 4pt; }\n'
    + 'h2 { font-size: 15pt; font-weight: 600; margin: 14pt 0 6pt; break-after: avoid; }\n'
    + 'h3 { font-size: 12pt; font-weight: 500; margin: 10pt 0 4pt; break-after: avoid; }\n'
    + 'p { margin: 0 0 8pt; }\n'
    + '.meta, .kind { font-size: 9pt; color: #777; margin-bottom: 8pt; }\n'
    + 'hr { border: none; border-top: 0.6pt solid #bbb; margin: 14pt 0; }\n'
    + 'strong { font-weight: 600; }\n'
    + 'li { margin-bottom: 3pt; }\n'
    + 'a { color: inherit; text-decoration: underline dotted; }\n'
    + '</sty' + 'le></head><body>';
  const scriptPart = '<' + 'script>window.addEventListener(\'load\', function(){ setTimeout(function(){ window.print(); }, 350); });</' + 'script>';
  win.document.write(headPart + body + scriptPart + '</bo' + 'dy></ht' + 'ml>');
  win.document.close();
}
window.__essayOutlineExport = exportEssayOutline;
document.addEventListener('keydown', function(ev){
  if ((ev.metaKey||ev.ctrlKey) && ev.shiftKey && ev.key.toLowerCase()==='s') {
    ev.preventDefault(); exportEssayOutline();
  }
});
// wire the visible export button + clear button
(function(){
  const btn = document.getElementById('essayExportBtn');
  if (btn) btn.addEventListener('click', exportEssayOutline);
  const clr = document.getElementById('essayClearBtn');
  if (clr) clr.addEventListener('click', function(){
    if (!getEssayCollection().length) { return; }
    saveEssayCollection([]);
    updateEssayCountBadge();
    if (typeof window.__toast === 'function') window.__toast('Essay collection cleared');
    else if (typeof window.toast === 'function') window.toast('Essay collection cleared');
  });
  // update badge on load
  setTimeout(updateEssayCountBadge, 100);
  // keep badge fresh
  setInterval(updateEssayCountBadge, 2000);
})();

// Add an inline CSS for .conn-panel
(function(){
  const css = document.createElement('style');
  css.textContent = `
.conn-panel { margin-top: 16px; padding: 14px 16px; border: 1px solid var(--border, rgba(127,127,127,.35)); border-radius: 10px; background: var(--bg2, rgba(127,127,127,.06)); }
.conn-head { display:flex; flex-direction:column; gap:2px; margin-bottom:8px; }
.conn-label { font-weight:600; font-size:.95em; }
.conn-note { font-size:.78em; opacity:.65; }
.conn-list { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:6px; }
.conn-item { font-size:.92em; }
.conn-empty { font-size:.9em; opacity:.55; padding:2px 0; }
.conn-via { display:block; font-size:.78em; opacity:.55; margin-top:2px; padding-left:8px; }
.conn-kind { display:inline-block; font-size:.7em; text-transform:uppercase; letter-spacing:.04em; opacity:.6; margin-right:6px; padding:1px 6px; border-radius:999px; border:1px solid currentColor; opacity:.55; }
.conn-link { color:inherit; text-decoration:underline dotted; }
.conn-link:hover, .conn-link:focus-visible { text-decoration:underline solid; }
@media (max-width: 768px) { .conn-panel { padding: 12px; } .conn-item { font-size:.88em; } }
`;
  document.head.appendChild(css);
})();
})();

// Cleanup: remove any stray text nodes that leaked from script parsing
(function(){
  function cleanupStrayText(){
    const body = document.body;
    if (!body) return;
    const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, null);
    const toRemove = [];
    let node;
    while (node = walker.nextNode()) {
      // Only remove text nodes directly in BODY that look like JS code
      if (node.parentElement === body && node.textContent.trim().length > 50) {
        toRemove.push(node);
      }
    }
    toRemove.forEach(n => n.remove());
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cleanupStrayText);
  } else {
    cleanupStrayText();
  }
  // Also run after a short delay to catch late additions
  setTimeout(cleanupStrayText, 100);
})();

;

window.RL = (function(){
  'use strict';
  var state = { tool:null, open:false, busy:false, consensusLoaded:false };
  var history = []; // {role, content}
  var MAX_TURNS = 20;

  // No built-in persona or study instructions. Only the user's optional text is sent.
  var PROMPT_KEY = 'gfl.pollinations.systemPrompt.v1';
  var customPrompt = '';
  customPrompt = (window.FC_XMEM && PROMPT_KEY in window.FC_XMEM) ? window.FC_XMEM[PROMPT_KEY] : '';

  var $ = function(id){ return document.getElementById(id); };
  $('rlSystemPrompt').value = customPrompt;
  $('rlPromptBadge').textContent = customPrompt.trim() ? 'Custom' : 'None';
  $('rlPromptStatus').textContent = customPrompt.trim() ? 'Custom prompt loaded from this browser.' : 'No custom system prompt.';

  function savePrompt(){
    customPrompt = $('rlSystemPrompt').value;
    $('rlPromptBadge').textContent = customPrompt.trim() ? 'Custom' : 'None';
    try {
      (window.FC_XMEM || (window.FC_XMEM = {}))[PROMPT_KEY] = customPrompt;
      $('rlPromptStatus').textContent = customPrompt.trim() ? 'Saved in this browser. Applies to your next message.' : 'Saved: no website-added system prompt.';
    } catch (err) {
      $('rlPromptStatus').textContent = 'Browser storage unavailable. Your changes work for this visit only; download a backup.';
    }
  }
  function clearPrompt(){
    $('rlSystemPrompt').value = '';
    savePrompt();
  }
  function downloadPrompt(){
    var url = URL.createObjectURL(new Blob([$('rlSystemPrompt').value], {type:'text/plain;charset=utf-8'}));
    var link = document.createElement('a');
    link.href = url;
    link.download = 'Flourishing-Library-system-prompt.txt';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(function(){ URL.revokeObjectURL(url); }, 1000);
  }
  function importPrompt(input){
    var file = input.files && input.files[0];
    if (!file) return;
    if (file.size > 1024 * 1024){
      $('rlPromptStatus').textContent = 'Please choose a plain-text prompt smaller than 1 MB.';
      input.value = '';
      return;
    }
    var reader = new FileReader();
    reader.onload = function(){
      $('rlSystemPrompt').value = String(reader.result || '');
      savePrompt();
      input.value = '';
    };
    reader.onerror = function(){
      $('rlPromptStatus').textContent = 'Could not read that file. Please try another plain-text backup.';
      input.value = '';
    };
    reader.readAsText(file);
  }

  // ---------- markdown-lite renderer (safe: input is HTML-escaped first) ----------
  function md(raw){
    var t = String(raw == null ? '' : raw);
    t = t.replace(/&/g,'&'+'amp;').replace(/</g,'&'+'lt;').replace(/>/g,'&'+'gt;');
    var stash = [];
    t = t.replace(/```([\s\S]*?)```/g, function(m, c){
      stash.push('<pre><code>' + c.replace(/^[a-zA-Z0-9_-]*\n/, '') + '</code></pre>');
      return '\u0000PRE' + (stash.length - 1) + '\u0000';
    });
    t = t.replace(/`([^`\n]+)`/g, '<code>$1</code>');
    t = t.replace(/\*\*([^*\n]+)\*\*/g, '<b>$1</b>');
    t = t.replace(/(^|[\s(])\*([^*\n]+)\*(?=[\s.,!?)]|$)/g, '$1<i>$2</i>');
    t = t.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, function(m, txt, url){
      return '<a href="' + url.replace(/["<>\u0000]/g,'') + '" target="_blank" rel="noopener">' + txt + '</a>';
    });
    t = t.replace(/^###\s+(.+)$/gm, '<div style="font-weight:700;margin:7px 0 2px">$1</div>');
    t = t.replace(/^##\s+(.+)$/gm, '<div style="font-weight:700;font-size:13.5px;margin:8px 0 2px">$1</div>');
    t = t.replace(/^#\s+(.+)$/gm, '<div style="font-weight:700;font-size:14px;margin:8px 0 2px">$1</div>');
    t = t.replace(/^[•\-*]\s+(.+)$/gm, '<div style="padding-left:13px;text-indent:-9px;margin:2px 0">&bull; $1</div>');
    t = t.replace(/^(\d+)\.\s+(.+)$/gm, '<div style="padding-left:17px;text-indent:-13px;margin:2px 0">$1. $2</div>');
    // markdown tables: consecutive | rows (separator row |---|---| dropped, first row = header)
    t = t.replace(/((?:^[ \t]*\|.*(?:\n|$))+)/gm, function(block){
      var rows = block.replace(/\n$/, '').split('\n');
      var kept = [];
      for (var i = 0; i < rows.length; i++){
        if (/^[ \t]*\|?[ \t]*:?-{2,}[-:| \t]*\|?[ \t]*$/.test(rows[i])) continue; // separator
        kept.push(rows[i]);
      }
      if (!kept.length) return block;
      var html = '<table class="rl-md-table">';
      for (var j = 0; j < kept.length; j++){
        var cells = kept[j].replace(/^[ \t]*\|/, '').replace(/\|[ \t]*$/, '').split('|');
        var tag = (j === 0 ? 'th' : 'td');
        html += '<tr>';
        for (var k = 0; k < cells.length; k++) html += '<' + tag + '>' + cells[k].trim() + '</' + tag + '>';
        html += '</tr>';
      }
      return html + '</table>';
    });
    // blockquotes: consecutive lines starting with > (already escaped to >)
    t = t.replace(/((?:^&gt;[ \t]?.*(?:\n|$))+)/gm, function(block){
      var lines = block.replace(/\n$/, '').split('\n');
      var inner = [];
      for (var i = 0; i < lines.length; i++){
        var l = lines[i].replace(/^&gt;[ \t]?/, '');
        l = l.replace(/^[•\-*]\s+(.+)$/, '<div style="padding-left:13px;text-indent:-9px;margin:2px 0">&bull; $1</div>');
        inner.push(l);
      }
      return '<blockquote class="rl-md-quote">' + inner.join('<br>') + '</blockquote>';
    });
    // horizontal rules: a line of only --- / *** / ___ (table separators already consumed)
    t = t.replace(/^[ \t]*(?:-{3,}|\*{3,}|_{3,})[ \t]*$/gm, '<hr class="rl-md-hr">');
    t = t.replace(/\n{2,}/g, '\n').replace(/\n/g, '<br>');
    t = t.replace(/\u0000PRE(\d+)\u0000/g, function(m, i){ return stash[+i]; });
    return t;
  }

  // ---------- drawer open/close ----------
  var TOOLS = {
    chat:      { title:'AI Chat',                 sub:'In-page AI — Pollinations.ai (free, no account)',
                 ext:'<a href="#" onclick="RL.openPopup(\'https://www.perplexity.ai/\'); return false">Perplexity &#8599;</a><a href="#" onclick="RL.openPopup(\'https://gemini.google.com/\'); return false">Gemini &#8599;</a>' },
    papers:    { title:'Find Research Papers',    sub:'Live search — Semantic Scholar, with OpenAlex fallback',
                 ext:'<a href="https://www.semanticscholar.org/" target="_blank" rel="noopener">Semantic Scholar &#8599;</a>' },
    consensus: { title:'Consensus',              sub:'Embedded — ask research questions',
                 ext:'<a href="https://consensus.app/" target="_blank" rel="noopener">Consensus &#8599;</a>' }
  };

  function showPanel(tool){
    $('rlPanelChat').style.display = tool === 'chat' ? 'flex' : 'none';
    $('rlPanelPapers').style.display = tool === 'papers' ? 'flex' : 'none';
    $('rlPanelConsensus').style.display = tool === 'consensus' ? 'flex' : 'none';
  }

  function open(tool){
    var cfg = TOOLS[tool];
    $('rlTitle').textContent = cfg.title;
    $('rlSub').textContent = cfg.sub;
    $('rlExt').innerHTML = cfg.ext;
    showPanel(tool);
    state.tool = tool; state.open = true;
    document.body.classList.add('rl-open');
    $('rlDrawer').classList.add('rl-open');
    if (tool === 'consensus' && !state.consensusLoaded){
      state.consensusLoaded = true;
      $('rlConsensusFrame').src = 'https://consensus.app/';
    }
    if (tool === 'chat'){
      setTimeout(function(){ $('rlInput').focus(); }, 280);
      renderMsgs();
    }
  }
  function close(){
    state.open = false; state.tool = null;
    backToResultsQuiet();
    document.body.classList.remove('rl-open');
    $('rlDrawer').classList.remove('rl-open');
  }
  function backToResultsQuiet(){
    state.paperView = false; exitFull();
    $('rlPaperView').style.display = 'none';
    $('rlPaperFrame').src = 'about:blank';
    $('rlPaperSearchRow').style.display = 'flex';
    $('rlPaperResults').style.display = 'flex';
  }
  function toggle(tool){
    if (state.open && state.tool === tool){ close(); return; }
    open(tool);
  }
  // Chat bubbles open the chat panel without toggling it closed (close via the X button or Esc).
  function openChat(model){
    open('chat');
    // populate the model dropdown from the live Pollinations list (falls back to openai-fast)
    if (!state.modelsFetched){
      state.modelsFetched = true;
      fetch('https://text.pollinations.ai/models')
        .then(function(r){ return r.ok ? r.json() : null; })
        .then(function(list){
          if (!list || !list.length) return;
          var sel = $('rlModel');
          var cur = sel.value;
          sel.innerHTML = '';
          for (var i = 0; i < list.length; i++){
            var o = document.createElement('option');
            o.value = list[i].name;
            o.textContent = list[i].name;
            sel.appendChild(o);
          }
          for (var j = 0; j < sel.options.length; j++){
            if (sel.options[j].value === cur || sel.options[j].value === 'openai-fast'){ sel.selectedIndex = j; break; }
          }
        })
        .catch(function(){ /* keep the default option */ });
    }
    if (model){
      var sel = $('rlModel');
      for (var i = 0; i < sel.options.length; i++){
        if (sel.options[i].value === model){ sel.selectedIndex = i; break; }
      }
    }
  }

  // Opens a site in a popup window — top-level windows cannot be blocked by the site
  // and keep the user's existing logins; sits alongside the library.
  function openPopup(url){
    window.open(url, '_blank', 'noopener,width=1060,height=1000,scrollbars=1');
  }
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && state.open) close();
  });

  // ---------- AI chat ----------
  function renderMsgs(){
    var box = $('rlMsgs'); if (!box) return;
    if (!history.length){
      box.innerHTML = '<div class="rl-empty">Ask a study question, e.g.<br><i>Compare Stoic and Daoist approaches to acceptance</i><br>or <i>Explain effect size vs statistical significance</i><br><br>Note: the chat cannot see your library entries or notes — it answers from the AI model only.</div>';
      return;
    }
    var html = '';
    for (var i = 0; i < history.length; i++){
      var m = history[i];
      var cls = 'rl-bubble ' + (m.role === 'user' ? 'rl-user' : 'rl-ai');
      if (m.role === 'assistant' && m.error) cls = 'rl-bubble rl-err';
      var cursor = (state.busy && m.role === 'assistant' && i === history.length - 1) ? '<span class="rl-cursor"></span>' : '';
      html += '<div class="' + cls + '">' + md(m.content) + cursor + '</div>';
    }
    box.innerHTML = html;
    box.scrollTop = box.scrollHeight;
  }

  function newChat(){
    if (state.busy) return;
    history = [];
    renderMsgs();
  }

  function send(){
    if (state.busy) return;
    var input = $('rlInput');
    var text = input.value.trim();
    if (!text) return;
    input.value = '';
    history.push({role:'user', content:text});
    var aiMsg = {role:'assistant', content:''};
    history.push(aiMsg);
    state.busy = true;
    $('rlSend').disabled = true;
    renderMsgs();

    var model = ($('rlModel').value || 'openai-fast');
    var msgs = [];
    if (customPrompt.trim()) msgs.push({role:'system', content:customPrompt});
    var convo = history.slice(0, -1); // all but the empty assistant placeholder
    if (convo.length > MAX_TURNS) convo = convo.slice(-MAX_TURNS);
    for (var i = 0; i < convo.length; i++) msgs.push({role:convo[i].role, content:convo[i].content});

    // Pollinations.ai — free, no account, no key, CORS-open, OpenAI-compatible.
    // Works from any origin (including file://). Streams Server-Sent Events.
    (async function(){
      try {
        var resp = await fetch('https://text.pollinations.ai/openai', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ model: model, messages: msgs, stream: true })
        });
        if (!resp.ok) throw new Error('HTTP ' + resp.status + (resp.status === 429 ? ' — rate limited, try again in a moment' : ''));
        var reader = resp.body.getReader();
        var dec = new TextDecoder();
        var buf = '';
        while (true){
          var chunk = await reader.read();
          if (chunk.done) break;
          buf += dec.decode(chunk.value, { stream: true });
          var lines = buf.split('\n');
          buf = lines.pop(); // keep the incomplete trailing line
          for (var li = 0; li < lines.length; li++){
            var line = lines[li].trim();
            if (line.indexOf('data:') !== 0) continue;
            var payload = line.slice(5).trim();
            if (!payload || payload === '[DONE]') continue;
            try {
              var evt = JSON.parse(payload);
              var delta = evt.choices && evt.choices[0] && (evt.choices[0].delta || evt.choices[0].message);
              if (delta && delta.content){
                aiMsg.content += delta.content;
                renderMsgs();
              }
            } catch (pe){ /* partial JSON — wait for more */ }
          }
        }
        if (!aiMsg.content){
          aiMsg.content = '*(empty response — try again)*';
          aiMsg.error = true;
        }
      } catch (err){
        var msg = (err && err.message) || String(err);
        aiMsg.content = (aiMsg.content ? aiMsg.content + '\n\n' : '') +
          '**' + msg + '**\n\nCould not reach the AI service (Pollinations.ai). Check that you are online — ' +
          'the free service can also be briefly rate-limited; waiting a moment usually fixes it.';
        aiMsg.error = true;
      } finally {
        state.busy = false;
        $('rlSend').disabled = false;
        renderMsgs();
      }
    })();
  }

  // ---------- Semantic Scholar paper search (with OpenAlex fallback) ----------
  // ---------- paper reader (in-drawer; PDFs via Google Docs Viewer; pages in a popup window) ----------
  var papersCache = [];

  // Publisher pages mostly refuse iframe embedding, so a paper opens as an in-drawer reader card
  // (always works), with: Read PDF -> Google Docs Viewer in the drawer (embeds nearly all PDFs);
  // Paper page -> popup window (top-level, cannot be blocked, sits alongside the library).
  function viewPaper(i){
    var p = papersCache[i];
    if (!p) return;
    state.paperView = true; state.paper = p;
    $('rlPaperSearchRow').style.display = 'none';
    $('rlPaperResults').style.display = 'none';
    $('rlPaperView').style.display = 'flex';
    backToPaper();
    var tab = $('rlPaperTabLink');
    tab.href = p.url || '#';
    tab.style.display = (p.url && p.url !== '#') ? '' : 'none';
    var r = $('rlPaperReader');
    var authors = (p.authors || []).map(function(a){ return a.name; }).join(', ') || 'Unknown authors';
    var abs = p.abstract || 'No abstract available for this paper.';
    var pdfBtn = (p.openAccessPdf && p.openAccessPdf.url)
      ? '<button class="rl-pdfbtn" onclick="RL.readPdf()">Read PDF &#10530;</button>' : '';
    var pageBtn = (p.url && p.url !== '#')
      ? '<button class="rl-mini" style="font-size:12px;padding:6px 12px" onclick="RL.openPaperPage()">Paper page (popup)</button>' : '';
    var scholar = 'https://scholar.google.com/scholar?q=' + encodeURIComponent(p.title || '');
    r.innerHTML =
      '<div style="padding:12px 14px 4px;font-weight:700;font-size:14px;line-height:1.4">' + esc(p.title) + '</div>' +
      '<div class="rl-paper-meta" style="padding:0 14px">' + esc(authors) + (p.year ? ' &middot; ' + p.year : '') +
      (p.venue ? ' &middot; ' + esc(p.venue) : '') + (p.citationCount != null ? ' &middot; ' + p.citationCount.toLocaleString() + ' citations' : '') + '</div>' +
      '<div class="rl-reader-abs">' + esc(abs) + '</div>' +
      '<div class="rl-reader-actions">' + pdfBtn + pageBtn +
      '<a class="rl-extlink" href="' + scholar + '" target="_blank" rel="noopener">Google Scholar &#8599;</a></div>';
  }

  function readPdf(){
    var p = state.paper; if (!p || !p.openAccessPdf || !p.openAccessPdf.url) return;
    $('rlPaperReader').style.display = 'none';
    $('rlPdfWrap').style.display = 'flex';
    var pdf = $('rlPdfTabLink');
    pdf.href = p.openAccessPdf.url;
    // Render the PDF via Google Docs Viewer — it fetches the PDF itself, so publisher
    // iframe-blocking does not apply, and it embeds nearly all publicly reachable PDFs.
    $('rlPaperFrame').src = 'https://docs.google.com/viewer?url=' + encodeURIComponent(p.openAccessPdf.url) + '&embedded=true';
  }

  function backToPaper(){
    $('rlPdfWrap').style.display = 'none';
    $('rlPaperFrame').src = 'about:blank';
    $('rlPaperReader').style.display = 'flex';
  }

  function openPaperPage(){
    var p = state.paper; if (!p || !p.url) return;
    // A top-level popup window cannot be blocked by publishers (unlike an iframe),
    // and it sits alongside the library instead of replacing it.
    window.open(p.url, '_blank', 'noopener,width=1000,height=1000,scrollbars=1');
  }

  function backToResults(){
    state.paperView = false; state.paper = null;
    exitFull();
    $('rlPaperView').style.display = 'none';
    backToPaper();
    $('rlPaperSearchRow').style.display = 'flex';
    $('rlPaperResults').style.display = 'flex';
  }

  function toggleFull(){
    var d = $('rlDrawer');
    var on = d.classList.toggle('rl-full');
    document.body.classList.toggle('rl-fullwin', on);
    var btn = $('rlFullBtn');
    if (btn) btn.innerHTML = on ? 'Exit full window &#10529;' : 'Full window &#10530;';
  }
  function exitFull(){
    var d = $('rlDrawer');
    if (d.classList.contains('rl-full')) toggleFull();
  }

  function renderPapersList(papers){
    papersCache = papers;
    state.paperView = false;
    $('rlPaperView').style.display = 'none';
    $('rlPaperSearchRow').style.display = 'flex';
    var box = $('rlPaperResults');
    box.style.display = 'flex';
    if (!papers.length){ box.innerHTML = '<div class="rl-empty">No papers found for that query.</div>'; return; }
    var html = '';
    for (var i = 0; i < papers.length; i++){
      var p = papers[i];
      var authors = (p.authors || []).slice(0,3).map(function(a){ return a.name; }).join(', ') +
        ((p.authors || []).length > 3 ? ' et al.' : '');
      var link = (p.openAccessPdf && p.openAccessPdf.url) || p.url || '#';
      if (link !== '#') link = esc(link);
      var abs = p.abstract ? p.abstract : 'No abstract available.';
      if (abs.length > 320) abs = abs.slice(0, 320).replace(/\s+\S*$/, '') + '\u2026';
      html += '<div class="rl-paper">' +
        '<div class="rl-paper-title"><a href="' + esc(p.url) + '" target="_blank" rel="noopener" onclick="RL.viewPaper(' + i + ');return false;">' + esc(p.title) + '</a></div>' +
        '<div class="rl-paper-meta">' + esc(authors) + (p.year ? ' &middot; ' + p.year : '') +
        (p.venue ? ' &middot; ' + esc(p.venue) : '') + (p.citationCount != null ? ' &middot; ' + p.citationCount.toLocaleString() + ' citations' : '') + '</div>' +
        '<div class="rl-paper-abs">' + esc(abs) + '</div>' +
        '<div style="margin-top:5px"><a href="' + link + '" target="_blank" rel="noopener" style="font-size:11px;color:var(--link-text,#7d6219)" onclick="RL.viewPaper(' + i + ');return false;">' +
        'View paper &#8594;</a></div>' +
        '</div>';
    }
    box.innerHTML = html;
  }

  function searchPapers(){
    var q = $('rlPaperQ').value.trim();
    var box = $('rlPaperResults');
    if (!q) return;
    box.innerHTML = '<div class="rl-empty">Searching&hellip;</div>';
    fetch('https://api.semanticscholar.org/graph/v1/paper/search?query=' + encodeURIComponent(q) +
      '&fields=title,year,authors,venue,citationCount,abstract,url,openAccessPdf&limit=10')
      .then(function(r){
        if (r.status === 429) throw new Error('__rate');
        if (!r.ok) throw new Error('Search failed (HTTP ' + r.status + ').');
        return r.json();
      })
      .then(function(d){
        renderPapersList(((d && d.data) || []).map(function(p){ return p; }));
      })
      .catch(function(e){
        var m = e && e.message || String(e);
        var isRate = (m === '__rate') || /Failed to fetch|NetworkError|Load failed/i.test(m);
        if (!isRate){
          box.innerHTML = '<div class="rl-empty">' + esc(m) + '</div>';
          return;
        }
        // Semantic Scholar is unreachable or rate-limited — fall back to OpenAlex (free, open, CORS-enabled)
        box.innerHTML = '<div class="rl-empty">Semantic Scholar is busy — trying OpenAlex&hellip;</div>';
        fetch('https://api.openalex.org/works?search=' + encodeURIComponent(q) + '&per-page=10&mailto=genuine-flourishing-library%40example.com')
          .then(function(r){
            if (!r.ok) throw new Error('HTTP ' + r.status);
            return r.json();
          })
          .then(function(d){
            var papers = (d && d.results || []).map(function(w){
              // reconstruct the abstract from OpenAlex's inverted index
              var abs = '';
              if (w.abstract_inverted_index){
                var words = [];
                Object.keys(w.abstract_inverted_index).forEach(function(word){
                  w.abstract_inverted_index[word].forEach(function(pos){ words[pos] = word; });
                });
                abs = words.join(' ');
              }
              return {
                title: w.display_name || '(untitled)',
                year: w.publication_year,
                authors: (w.authorships || []).map(function(a){ return { name: (a.author && a.author.display_name) || '' }; }),
                venue: (w.primary_location && w.primary_location.source && w.primary_location.source.display_name) || null,
                citationCount: w.cited_by_count,
                abstract: abs || null,
                url: w.doi || w.id || '#',
                openAccessPdf: ((w.best_oa_location && w.best_oa_location.pdf_url) || (w.primary_location && w.primary_location.pdf_url)) ?
                  { url: (w.best_oa_location && w.best_oa_location.pdf_url) || (w.primary_location && w.primary_location.pdf_url) } : null
              };
            });
            renderPapersList(papers);
            var tag = document.createElement('div');
            tag.className = 'rl-empty';
            tag.style.padding = '2px 6px';
            tag.textContent = 'Results via OpenAlex (Semantic Scholar was rate-limited)';
            box.appendChild(tag);
          })
          .catch(function(e2){
            box.innerHTML = '<div class="rl-empty">Could not reach Semantic Scholar or OpenAlex just now (often a short rate limit). Wait a few seconds and search again.</div>';
          });
      });
  }

  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&'+'amp;').replace(/</g,'&'+'lt;').replace(/>/g,'&'+'gt;').replace(/"/g,'&'+'quot;'); }

  return { savePrompt:savePrompt, clearPrompt:clearPrompt, downloadPrompt:downloadPrompt, importPrompt:importPrompt,
           toggle:toggle, close:close, open:open, openChat:openChat, openPopup:openPopup, send:send, newChat:newChat, searchPapers:searchPapers,
           viewPaper:viewPaper, backToResults:backToResults, toggleFull:toggleFull, readPdf:readPdf, backToPaper:backToPaper, openPaperPage:openPaperPage };
})();
