/* ═══════════════════════════════════════════════════════════════════
   fcEditor2 — a proper editor for the Flourishing Compendium.
   • Big split-view markdown editor with live preview + toolbar
   • [[wiki link]] autocomplete
   • Save writes the entry's markdown file straight to GitHub
     (the site rebuilds itself ~1 min later via GitHub Actions)
   • "+ Add" wizard for new principles / concepts / kernels / stories / sayings
   Everything is self-contained: styles are injected, no other file needed.
   ═══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ---------- config ---------- */
  var DEFAULTS = { repo: window.FC_GH_REPO || '', branch: 'main' };
  function cfg() {
    try {
      return JSON.parse(localStorage.getItem('fcgh') || '{}');
    } catch (e) { return {}; }
  }
  function saveCfg(c) { localStorage.setItem('fcgh', JSON.stringify(c)); }
  function token() { return localStorage.getItem('fcgh_token') || ''; }
  function gh() {
    var c = cfg();
    return { repo: c.repo || DEFAULTS.repo, branch: c.branch || DEFAULTS.branch };
  }
  function configured() { return !!(token() && gh().repo); }

  /* ---------- md path helpers (mirror scripts/build.py) ---------- */
  var TYPE_DIRS = {
    principle: 'principles', kernel: 'kernels', concept: 'concepts',
    story: 'stories', saying: 'sayings',
    layer: 'structure', section: 'structure', chapter: 'structure',
    book: 'structure', volume: 'structure', reference: 'structure', navnode: 'structure'
  };
  function mdPath(e) {
    return 'content/' + (TYPE_DIRS[e.type] || 'other') + '/' + e.file + '.md';
  }
  /* Split a stored md file exactly the way build.py does. */
  function splitMd(text) {
    if (text.indexOf('---\n') !== 0) return null;
    var end = text.indexOf('\n---\n', 4);
    if (end < 0) return null;
    var fmText = text.slice(0, end + 5);
    var rest = text.slice(end + 5);
    var m = rest.match(/\n\n<!-- fc: reflections\n([\s\S]*)\n-->$/);
    var refl = null;
    if (m) { refl = m[1]; rest = rest.slice(0, m.index); }
    return { fmText: fmText, body: rest, refl: refl };
  }

  /* ---------- GitHub API ---------- */
  function api(method, path, body) {
    var g = gh();
    var opts = {
      method: method,
      headers: {
        'Authorization': 'Bearer ' + token(),
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
      }
    };
    if (body) {
      opts.body = JSON.stringify(body);
      opts.headers['Content-Type'] = 'application/json';
    }
    return fetch('https://api.github.com/repos/' + g.repo + path, opts).then(function (r) {
      if (r.ok) return r.json();
      if (r.status === 401 || r.status === 403) {
        return r.json().catch(function () { return {}; }).then(function (j) {
          var msg = (j && j.message) || '';
          var hint;
          if (r.status === 403 && /not accessible/i.test(msg)) {
            hint = 'Your key can see this repository but is not allowed to write to it. Fix (no new key needed): on the GitHub token page, click your token → Permissions → + Add permissions → search "Contents" → tick it → set Read and write → Update. Then simply try saving again.';
          } else if (r.status === 401) {
            hint = 'GitHub did not recognize this key — copy it fresh from the GitHub token page and paste it again in ⚙ Settings.';
          } else {
            hint = 'GitHub refused the request: ' + msg;
          }
          throw { code: r.status, message: hint };
        });
      }
      if (r.status === 404) throw { code: 404, message: 'File or repo not found — check the repo name in ⚙ Settings.' };
      if (r.status === 409 || r.status === 422) throw { code: r.status, message: 'The file changed since it was loaded — close and reopen the entry to get the latest version, then re-apply your edit.' };
      return r.json().then(function (j) {
        throw { code: r.status, message: (j && j.message) || ('GitHub error ' + r.status) };
      });
    });
  }
  function b64(str) { return btoa(unescape(encodeURIComponent(str))); }
  function unb64(b) { return decodeURIComponent(escape(atob(b.replace(/\n/g, '')))); }

  /* ---------- toast ---------- */
  function toast(msg, ok) {
    var t = document.createElement('div');
    t.className = 'fce-toast' + (ok === false ? ' err' : '');
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.classList.add('on'); }, 10);
    setTimeout(function () { t.classList.remove('on'); setTimeout(function () { t.remove(); }, 400); }, ok === false ? 7000 : 4000);
  }
  function modalOverlay() {
    var ov = document.createElement('div');
    ov.className = 'fce-overlay';
    ov.addEventListener('mousedown', function (ev) { if (ev.target === ov) ov.remove(); });
    return ov;
  }

  /* ═══════════════ THE EDITOR ═══════════════ */
  var ac = { items: [], sel: 0, span: null, start: -1 };

  function open(entry) {
    if (!configured()) { welcome(); return; }
    var ov = modalOverlay();
    var path = mdPath(entry);
    api('GET', '/contents/' + encodeURIComponent(path).replace(/%2F/g, '/') + '?ref=' + gh().branch)
      .then(function (f) {
        var text = unb64(f.content);
        var parts = splitMd(text);
        if (!parts) { toast('Could not parse the stored markdown for this entry', false); return; }
        buildEditorUI(ov, entry, path, f.sha, parts);
      })
      .catch(function (err) { toast(err.message || String(err), false); });
  }

  /* ---------- shared link helpers (autocomplete + connect picker + add wizard) ---------- */
  var LINKABLE = { principle: 1, kernel: 1, concept: 1, story: 1, saying: 1, hub: 1, discipline: 1 }; // types the graph draws as nodes
  function isLinkable(e2) { return !!(e2 && LINKABLE[e2.type]); }
  function linkTargetOf(e2) { return e2.file || e2.id; }
  function searchEntries(q, limit, excludeId, onlyLinkable) {
    q = String(q || '').trim().toLowerCase();
    var out = [];
    if (!q) return out;
    var data = window.wikiData || [];
    var scored = [];
    for (var i = 0; i < data.length; i++) {
      var e2 = data[i];
      if (!e2 || e2.id === excludeId) continue;
      if (onlyLinkable && !isLinkable(e2)) continue;
      var t = (e2.title || e2.id || '').toLowerCase();
      var id2 = (e2.id || '').toLowerCase();
      var sc = 0;
      if (t === q) sc = 5;                       // exact title match
      else if (t.indexOf(q) === 0) sc = 4;        // title starts with the query
      else if (id2.indexOf(q) === 0) sc = 3;      // id starts with it
      else if (t.split(/\s+/).some(function (w) { return w.indexOf(q) === 0; })) sc = 3; // a word of the title starts with it
      else if (t.indexOf(q) >= 0) sc = 2;         // title contains it anywhere
      else if (id2.indexOf(q) >= 0) sc = 1;       // id contains it anywhere
      if (sc) scored.push([sc, e2]);
    }
    scored.sort(function (a, b) {
      var ta2 = String(a[1].title || a[1].id || ''), tb = String(b[1].title || b[1].id || '');
      return (b[0] - a[0]) || (ta2.length - tb.length) || ta2.localeCompare(tb);
    });
    for (var j = 0; j < limit && j < scored.length; j++) out.push(scored[j][1]);
    return out;
  }

  /* ---------- shared suggestion engine (editor + add wizard) ---------- */
  var STOP = { the: 1, a: 1, an: 1, of: 1, and: 1, or: 1, to: 1, in: 1, on: 1, for: 1, with: 1, as: 1, versus: 1, vs: 1,
    not: 1, from: 1, do: 1, does: 1, can: 1, will: 1, just: 1, your: 1, you: 1, they: 1, them: 1, their: 1,
    this: 1, that: 1, these: 1, those: 1, what: 1, when: 1, where: 1, how: 1, own: 1, same: 1, other: 1,
    into: 1, over: 1, under: 1, again: 1, once: 1, here: 1, there: 1, all: 1, any: 1, both: 1, each: 1,
    more: 1, most: 1, some: 1, such: 1, than: 1, then: 1, too: 1, very: 1, about: 1, against: 1, between: 1,
    through: 1, during: 1, before: 1, after: 1, above: 1, below: 1, up: 1, down: 1, out: 1, off: 1, why: 1,
    who: 1, its: 1, it: 1, is: 1, are: 1, was: 1, were: 1, be: 1, been: 1, being: 1, have: 1, has: 1, had: 1,
    having: 1, no: 1, nor: 1, but: 1, if: 1, because: 1, until: 1, while: 1 };
  function tokensOf(text) {
    return String(text || '').toLowerCase().split(/[^a-z\u00e0-\u00ff0-9-]+/).filter(function (w) { return w.length > 2 && !STOP[w]; });
  }
  var __sugCache = { maps: null, n: -1 };
  function suggestionMaps() {
    var data = window.wikiData || [];
    if (!__sugCache.maps || __sugCache.n !== data.length) {
      var byId = new Map(), byFile = new Map();
      for (var i = 0; i < data.length; i++) {
        var e2 = data[i];
        if (e2.id && !byId.has(e2.id)) byId.set(e2.id, e2);
        if (e2.file && !byFile.has(e2.file)) byFile.set(e2.file, e2);
      }
      __sugCache = { maps: { byId: byId, byFile: byFile }, n: data.length };
    }
    return __sugCache.maps;
  }
  function incomingLinkers(id, file) { // entries whose content links TO this one (graph edges are undirected)
    var maps = suggestionMaps();
    var res = new Set();
    var data = window.wikiData || [];
    var re = /\[\[([^|\]]+)(?:\|[^\]]+)?\]\]/g, m;
    for (var i = 0; i < data.length; i++) {
      var e2 = data[i];
      if (!e2.content || e2.content.indexOf('[[') < 0 || e2.id === id) continue;
      re.lastIndex = 0;
      while ((m = re.exec(e2.content)) !== null) {
        var t = (m[1] || '').trim();
        var tgt = maps.byId.get(t) || maps.byFile.get(t);
        if (tgt && (tgt.id === id || (file && tgt.file === file))) { res.add(e2.id); break; }
      }
    }
    return res;
  }
  function computeSuggestions(opts) {
    // opts: { title, tags, bodyText, linkedIds:Set } — linkedIds already includes self + outgoing + incoming
    // Returns [{e, why}] — heuristic candidates with a human-readable reason.
    var maps = suggestionMaps();
    var linked = opts.linkedIds;
    var myTags = new Set(opts.tags || []);
    var myTok = new Set(tokensOf(opts.title + ' ' + String(opts.bodyText || '').slice(0, 6000)));
    var nn = new Map(); // neighbour-of-neighbour: entries that my current links link to
    var nnVia = new Map(); // id -> the intermediate link's title (for the reason)
    var re = /\[\[([^|\]]+)(?:\|[^\]]+)?\]\]/g, m;
    while ((m = re.exec(String(opts.bodyText || ''))) !== null) {
      var src = maps.byId.get((m[1] || '').trim()) || maps.byFile.get((m[1] || '').trim());
      if (!src || !src.content) continue;
      var re2 = /\[\[([^|\]]+)(?:\|[^\]]+)?\]\]/g, m2;
      while ((m2 = re2.exec(src.content)) !== null) {
        var t2 = (m2[1] || '').trim();
        var c2 = maps.byId.get(t2) || maps.byFile.get(t2);
        if (c2 && LINKABLE[c2.type] && !linked.has(c2.id)) {
          nn.set(c2.id, (nn.get(c2.id) || 0) + 1);
          if (!nnVia.has(c2.id)) nnVia.set(c2.id, src.title || src.id);
        }
      }
    }
    var scored = [];
    var data = window.wikiData || [];
    for (var j = 0; j < data.length; j++) {
      var c = data[j];
      if (!LINKABLE[c.type] || linked.has(c.id)) continue;
      var why = null;
      var sc = (nn.get(c.id) || 0) * 3;
      if (nn.get(c.id)) why = 'via ' + (nnVia.get(c.id) || 'your connections');
      var tags = c.tags || [];
      var sharedTags = [];
      for (var k = 0; k < tags.length; k++) if (myTags.has(tags[k])) { sc += 2; sharedTags.push(tags[k]); }
      if (!why && sharedTags.length) why = 'shared tag: ' + sharedTags[0];
      var ct = new Set(tokensOf(c.title)); // dedupe: repeated title words count once
      var overlap = [];
      ct.forEach(function (w) { if (myTok.has(w)) overlap.push(w); });
      sc += overlap.length;
      if (!why && overlap.length) why = 'similar words: ' + overlap.slice(0, 2).join(', ');
      if (sc > 0) scored.push([sc, c, why]);
    }
    scored.sort(function (a, b) { return (b[0] - a[0]) || String(a[1].title || a[1].id).localeCompare(String(b[1].title || b[1].id)); });
    return scored.slice(0, 8).map(function (x) { return { e: x[1], why: x[2] }; });
  }

  function buildEditorUI(ov, entry, path, sha, parts) {
    var g = gh();
    ov.innerHTML =
      '<div class="fce-shell">' +
      '<div class="fce-head">' +
      '<div class="fce-title">' + escHtml(entry.title) + ' <span class="fce-id">' + escHtml(entry.id) + '</span></div>' +
      '<div class="fce-sub">Editing <code>' + escHtml(path) + '</code> on <code>' + escHtml(g.repo) + '</code> · branch <code>' + escHtml(g.branch) + '</code></div>' +
      '</div>' +
      '<div class="fce-toolbar">' +
      '<button data-cmd="bold" title="Bold (Ctrl+B)"><b>B</b></button>' +
      '<button data-cmd="italic" title="Italic (Ctrl+I)"><i>I</i></button>' +
      '<button data-cmd="h2" title="Heading">H</button>' +
      '<button data-cmd="ul" title="Bullet list">•≡</button>' +
      '<button data-cmd="ol" title="Numbered list">1≡</button>' +
      '<button data-cmd="quote" title="Blockquote">❝</button>' +
      '<button data-cmd="wlink" title="Wiki link — link to another entry ([[...]])">[[…]]</button>' +
      '<button data-cmd="connect" title="Connect this entry to another — search or pick a suggestion; the link shows in the graph">⇄ Connect</button>' +
      '<button data-cmd="link" title="Web link">🔗</button>' +
      '<span class="fce-sp"></span>' +
      '<button data-cmd="preview" title="Toggle preview">👁 Preview</button>' +
      '</div>' +
      '<div class="fce-main">' +
      '<textarea class="fce-ta" spellcheck="true"></textarea>' +
      '<div class="fce-preview"><div class="fce-preview-inner"></div></div>' +
      '<div class="fce-ac" hidden></div>' +
      '<div class="fce-conn" hidden style="display:none">' +
      '<div class="fce-conn-box">' +
      '<input class="fce-conn-q" type="text" placeholder="Connect to… type any part of a name (e.g. examined)">' +
      '<div class="fce-conn-list"></div>' +
      '<div class="fce-conn-hint">↑ ↓ to choose · Enter to connect · Esc to close</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="fce-foot">' +
      '<span class="fce-note">Ctrl/Cmd+S to save · your draft is kept in this browser until you save</span>' +
      '<span class="fce-status"></span>' +
      '<button class="fce-btn ghost" data-act="cancel">Close</button>' +
      '<button class="fce-btn primary" data-act="save">Save</button>' +
      '<button class="fce-btn ghost fce-mini" data-act="settings" title="Editor settings">⚙</button>' +
      '</div>' +
      '</div>';

    var ta = ov.querySelector('.fce-ta');
    var preview = ov.querySelector('.fce-preview');
    var previewInner = ov.querySelector('.fce-preview-inner');
    ta.value = parts.body;

    /* draft autosave */
    var draftKey = 'fce-draft:' + entry.id;
    var draft = null;
    try { draft = localStorage.getItem(draftKey); } catch (e) {}
    if (draft !== null && draft !== parts.body) {
      var note = ov.querySelector('.fce-note');
      note.innerHTML = 'A <b>draft from this browser</b> differs from the saved file — <button class="fce-linkbtn" data-act="usedraft">load draft</button> · <button class="fce-linkbtn" data-act="dropdraft">discard draft</button>';
    }
    function autosave() {
      try { localStorage.setItem(draftKey, ta.value); } catch (e) {}
    }
    var saveTimer = null;
    ta.addEventListener('input', function () {
      clearTimeout(saveTimer);
      saveTimer = setTimeout(autosave, 800);
      renderPreview();
      updateAC();
    });

    function renderPreview() {
      if (typeof mdToHtml !== 'function') return;
      previewInner.innerHTML = mdToHtml(ta.value);
    }
    renderPreview();

    /* toolbar */
    ov.querySelectorAll('.fce-toolbar button').forEach(function (b) {
      b.addEventListener('click', function () {
        var cmd = b.dataset.cmd;
        if (cmd === 'preview') {
          preview.classList.toggle('hidden');
          b.classList.toggle('active');
          return;
        }
        if (cmd === 'connect') { openConnect(); return; }
        wrapSelection(cmd);
      });
    });

    function wrapSelection(cmd) {
      var s = ta.selectionStart, epos = ta.selectionEnd, v = ta.value;
      var sel = v.slice(s, epos);
      var before = v.slice(0, s), after = v.slice(epos);
      var mid;
      if (cmd === 'bold') mid = sel ? '**' + sel + '**' : '****';
      else if (cmd === 'italic') mid = sel ? '*' + sel + '*' : '**';
      else if (cmd === 'h2') mid = '\n## ' + (sel || 'Heading') + '\n';
      else if (cmd === 'ul') mid = sel ? sel.replace(/^/gm, '- ') : '- ';
      else if (cmd === 'ol') mid = sel ? sel.replace(/^/gm, '1. ') : '1. ';
      else if (cmd === 'quote') mid = '\n> ' + (sel || '') + '\n';
      else if (cmd === 'wlink') mid = '[[' + (sel || '') + ']]';
      else if (cmd === 'link') mid = '[' + (sel || 'text') + '](https://)';
      else mid = sel;
      ta.value = before + mid + after;
      var np = s + mid.length;
      ta.focus();
      if (cmd === 'bold' || cmd === 'italic' || cmd === 'wlink') ta.setSelectionRange(s + 2, np - 2);
      else ta.setSelectionRange(np, np);
      ta.dispatchEvent(new Event('input'));
    }

    /* keyboard */
    ta.addEventListener('keydown', function (ev) {
      if (ev.key === 's' && (ev.metaKey || ev.ctrlKey)) { ev.preventDefault(); doSave(); return; }
      if (ev.key === 'b' && (ev.metaKey || ev.ctrlKey)) { ev.preventDefault(); wrapSelection('bold'); return; }
      if (ev.key === 'i' && (ev.metaKey || ev.ctrlKey)) { ev.preventDefault(); wrapSelection('italic'); return; }
      if (ac.items.length) {
        if (ev.key === 'ArrowDown') { ev.preventDefault(); ac.sel = (ac.sel + 1) % ac.items.length; paintAC(); return; }
        if (ev.key === 'ArrowUp') { ev.preventDefault(); ac.sel = (ac.sel - 1 + ac.items.length) % ac.items.length; paintAC(); return; }
        if (ev.key === 'Enter' || ev.key === 'Tab') { ev.preventDefault(); acceptAC(); return; }
        if (ev.key === 'Escape') { ev.preventDefault(); hideAC(); return; }
      }
    });

    /* ---------- link helpers (see top-level searchEntries / linkTargetOf) ---------- */
    function insertWikiLink(e2) {
      var s = ta.selectionStart, epos = ta.selectionEnd, v = ta.value;
      var before = v.slice(0, s), after = v.slice(epos);
      var m = before.match(/\[\[([^\[\]|\n]*)$/);
      if (m) {
        before = before.slice(0, before.length - m[0].length);
        if (after.slice(0, 2) === ']]') after = after.slice(2);
      }
      var mid = '[[' + linkTargetOf(e2) + ']]';
      ta.value = before + mid + after;
      var np = before.length + mid.length;
      ta.focus();
      ta.setSelectionRange(np, np);
      ta.dispatchEvent(new Event('input'));
    }

    /* [[ autocomplete ]] */
    var acEl = ov.querySelector('.fce-ac');
    function hideAC() { acEl.hidden = true; ac.items = []; ac.span = null; }
    function updateAC() {
      var pos = ta.selectionStart;
      var upto = ta.value.slice(0, pos);
      var m = upto.match(/\[\[([^\[\]|\n]*)$/);
      if (!m || m[1].length < 1) { hideAC(); return; }
      var matches = searchEntries(m[1], 10, entry.id);
      if (!matches.length) { hideAC(); return; }
      ac.items = matches; ac.sel = 0; ac.start = pos - m[1].length;
      acEl.innerHTML = matches.map(function (e2, idx) {
        return '<div class="fce-ac-item' + (idx === 0 ? ' sel' : '') + '" data-i="' + idx + '">' +
          '<span class="fce-ac-t">' + escHtml(e2.title || e2.id) + '</span>' +
          '<span class="fce-ac-k">' + escHtml(e2.id) + ' · ' + escHtml(e2.type) + '</span></div>';
      }).join('');
      acEl.hidden = false;
      var r = document.createElement('div');
      var rc = ta.getBoundingClientRect();
      // position below cursor line: approximate with textarea line height
      acEl.style.left = rc.left + 16 + 'px';
      acEl.style.top = (rc.top + Math.min(ta.scrollHeight, 420)) + 'px';
    }
    function paintAC() {
      acEl.querySelectorAll('.fce-ac-item').forEach(function (el, i) {
        el.classList.toggle('sel', i === ac.sel);
      });
    }
    function acceptAC() {
      var target = ac.items[ac.sel];
      if (!target) { hideAC(); return; }
      hideAC();
      insertWikiLink(target);
    }
    acEl.addEventListener('mousedown', function (ev) {
      var it = ev.target.closest('.fce-ac-item');
      if (it) { ac.sel = +it.dataset.i; acceptAC(); }
    });

    /* ---------- connect picker: search + suggested connections ---------- */
    var connEl = ov.querySelector('.fce-conn');
    var connQ = ov.querySelector('.fce-conn-q');
    var connList = ov.querySelector('.fce-conn-list');
    var conn = { items: [], sel: 0 };

    function suggestConnections() {
      var linked = new Set([entry.id]);
      var re = /\[\[([^|\]]+)(?:\|[^\]]+)?\]\]/g, m;
      while ((m = re.exec(ta.value)) !== null) {
        var t = (m[1] || '').trim();
        var e2 = suggestionMaps().byId.get(t) || suggestionMaps().byFile.get(t);
        if (e2) linked.add(e2.id);
      }
      incomingLinkers(entry.id, entry.file).forEach(function (x) { linked.add(x); });
      return computeSuggestions({ title: entry.title, tags: entry.tags, bodyText: ta.value, linkedIds: linked });
    }
    function renderConn(items, heading, emptyMsg) {
      conn.items = items; conn.sel = 0;
      if (!items.length) {
        connList.innerHTML = '<div class="fce-conn-empty">' + escHtml(emptyMsg || 'Nothing matches — try fewer letters.') + '</div>';
        return;
      }
      var h = heading ? '<div class="fce-conn-head">' + escHtml(heading) + '</div>' : '';
      connList.innerHTML = h + items.map(function (it, idx) {
        var e2 = it.e || it;
        return '<div class="fce-ac-item fce-conn-item' + (idx === 0 ? ' sel' : '') + '" data-i="' + idx + '">' +
          '<span class="fce-ac-t">' + escHtml(e2.title || e2.id) + '</span>' +
          '<span class="fce-ac-k">' + escHtml(e2.type) + (it.why ? ' · ' + escHtml(it.why) : '') + '</span></div>';
      }).join('');
      connList.querySelectorAll('.fce-conn-item').forEach(function (el) {
        el.addEventListener('mousedown', function (ev) { ev.preventDefault(); chooseConn(+el.dataset.i); });
      });
    }
    function chooseConn(i) {
      var t = conn.items[i];
      if (!t) return;
      t = t.e || t;
      insertWikiLink(t);
      statusEl.textContent = 'Connected to ' + (t.title || t.id) + ' — Save to publish';
      closeConnect();
    }
    function openConnect() {
      connEl.hidden = false; connEl.style.display = 'flex';
      connQ.value = '';
      renderConn(suggestConnections(), 'Suggested connections', 'No suggestions yet — write a little more, or type a name to search.');
      connQ.focus();
    }
    function closeConnect() { connEl.hidden = true; connEl.style.display = 'none'; conn.items = []; ta.focus(); }
    connQ.addEventListener('input', function () {
      if (!connQ.value.trim()) {
        renderConn(suggestConnections(), 'Suggested connections', 'No suggestions yet — write a little more, or type a name to search.');
        return;
      }
      renderConn(searchEntries(connQ.value, 12, entry.id, true), '');
    });
    connQ.addEventListener('keydown', function (ev) {
      if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') {
        ev.preventDefault();
        if (!conn.items.length) return;
        conn.sel = (conn.sel + (ev.key === 'ArrowDown' ? 1 : -1) + conn.items.length) % conn.items.length;
        connList.querySelectorAll('.fce-conn-item').forEach(function (el, i2) { el.classList.toggle('sel', i2 === conn.sel); });
        var selEl = connList.querySelector('.fce-conn-item.sel');
        if (selEl && selEl.scrollIntoView) selEl.scrollIntoView({ block: 'nearest' });
      } else if (ev.key === 'Enter') {
        ev.preventDefault(); chooseConn(conn.sel);
      } else if (ev.key === 'Escape') {
        ev.preventDefault(); closeConnect();
      }
    });
    connEl.addEventListener('mousedown', function (ev) { if (ev.target === connEl) closeConnect(); });

    /* save */
    var statusEl = ov.querySelector('.fce-status');
    function doSave() {
      var body = ta.value;
      var newText = parts.fmText + body + (parts.refl !== null ? '\n\n<!-- fc: reflections\n' + parts.refl + '\n-->' : '');
      statusEl.textContent = 'Saving…';
      api('PUT', '/contents/' + encodeURIComponent(path).replace(/%2F/g, '/'), {
        message: 'Edit ' + entry.id + ' — ' + entry.title,
        content: b64(newText),
        sha: sha,
        branch: gh().branch
      }).then(function (j) {
        if (j && j.content && j.content.sha) sha = j.content.sha;
        statusEl.textContent = 'Saved — your site updates itself in about a minute';
        toast('Saved — your site will update itself in about a minute');
        try { localStorage.removeItem(draftKey); } catch (e) {}
        parts.body = body;
      }).catch(function (err) {
        statusEl.textContent = '';
        toast(err.message || 'Save failed', false);
      });
    }

    ov.querySelector('[data-act="save"]').addEventListener('click', doSave);
    var sBtn = ov.querySelector('[data-act="settings"]');
    if (sBtn) sBtn.addEventListener('click', settings);

    /* delete (content entries only, two-click confirmation) */
    if (DELETABLE.indexOf(entry.type) !== -1) {
      var delBtn = document.createElement('button');
      delBtn.className = 'fce-del'; delBtn.type = 'button';
      delBtn.textContent = 'Delete this entry';
      var foot = ov.querySelector('.fce-foot');
      foot.insertBefore(delBtn, foot.firstChild);
      var armed = false, armTimer = null;
      delBtn.addEventListener('click', function () {
        if (!armed) {
          armed = true;
          delBtn.classList.add('arm');
          delBtn.textContent = 'Really delete? Click again';
          armTimer = setTimeout(function () {
            armed = false;
            delBtn.classList.remove('arm');
            delBtn.textContent = 'Delete this entry';
          }, 6000);
          return;
        }
        clearTimeout(armTimer);
        delBtn.disabled = true;
        delBtn.textContent = 'Deleting\u2026';
        delEntry(entry).then(function (ok) {
          if (ok) { ov.remove(); }
          else {
            armed = false;
            delBtn.disabled = false;
            delBtn.classList.remove('arm');
            delBtn.textContent = 'Delete this entry';
          }
        });
      });
    }
    ov.querySelector('[data-act="cancel"]').addEventListener('click', function () {
      if (ta.value !== parts.body && !confirm('Close without saving? (a draft is kept in this browser)')) return;
      ov.remove();
    });
    ov.querySelectorAll('[data-act="usedraft"],[data-act="dropdraft"]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (b.dataset.act === 'usedraft') { ta.value = draft; renderPreview(); }
        else { try { localStorage.removeItem(draftKey); } catch (e) {} }
        ov.querySelector('.fce-note').textContent = 'Ctrl/Cmd+S to save · drafts autosave to this browser until saved';
      });
    });

    document.body.appendChild(ov);
    ta.focus();
  }

  /* ═══════════════ ADD-ENTRY WIZARD ═══════════════ */
  function openNew() {
    if (!configured()) { welcome(); return; }
    var ov = modalOverlay();
    ov.innerHTML =
      '<div class="fce-shell narrow">' +
      '<div class="fce-head"><div class="fce-title">Add a new entry</div>' +
      '<div class="fce-sub">It is committed to GitHub as a markdown file; the site picks it up on the next rebuild.</div></div>' +
      '<div class="fce-form">' +
      '<label>Type' +
      '<select id="fceNewType">' +
      '<option value="concept">Concept (theory, practice, idea)</option>' +
      '<option value="principle">Principle (actionable guidance)</option>' +
      '<option value="kernel">Kernel (compact practice)</option>' +
      '<option value="story">Story</option>' +
      '<option value="saying">Saying (aphorism)</option>' +
      '</select></label>' +
      '<label>Title<input id="fceNewTitle" placeholder="e.g. Deliberate rest"></label>' +
      '<label>Tags (comma-separated)<input id="fceNewTags" placeholder="e.g. rest, recovery"></label>' +
      '<label>Content (markdown — you can use [[wiki links]])' +
      '<textarea id="fceNewBody" rows="10" placeholder="Write the entry here…"></textarea></label>' +
      '<label>Connect to other entries (optional — type a name; links show in the graph)' +
      '<input id="fceNewConn" placeholder="e.g. Examined" autocomplete="off">' +
      '<div class="fce-newconn-list" hidden></div></label>' +
      '<label>Suggested connections (based on what you typed — click to add)' +
      '<div class="fce-newsugg" id="fceNewSugg"><div class="fce-conn-empty">Write a title or some content and candidates will appear here.</div></div></label>' +
      '<label>Reflection questions (one per line, optional)' +
      '<textarea id="fceNewRefl" rows="3" placeholder="A question the reader should sit with…"></textarea></label>' +
      '</div>' +
      '<div class="fce-foot">' +
      '<span class="fce-status"></span>' +
      '<button class="fce-btn ghost" data-act="cancel">Cancel</button>' +
      '<button class="fce-btn primary" data-act="create">Create entry</button>' +
      '</div></div>';

    ov.querySelector('[data-act="cancel"]').addEventListener('click', function () { ov.remove(); });
    var nConn = ov.querySelector('#fceNewConn');
    var nList = ov.querySelector('.fce-newconn-list');
    var nBody = ov.querySelector('#fceNewBody');
    var nSugg = ov.querySelector('#fceNewSugg');
    function renderWizSugg() {
      var title = ov.querySelector('#fceNewTitle').value.trim();
      var tags = ov.querySelector('#fceNewTags').value.split(',').map(function (x) { return x.trim(); }).filter(Boolean);
      var linked = new Set();
      var re = /\[\[([^|\]]+)(?:\|[^\]]+)?\]\]/g, m;
      while ((m = re.exec(nBody.value)) !== null) {
        var t = (m[1] || '').trim();
        var tgt = suggestionMaps().byId.get(t) || suggestionMaps().byFile.get(t);
        if (tgt) linked.add(tgt.id);
      }
      var items = computeSuggestions({ title: title, tags: tags, bodyText: nBody.value, linkedIds: linked });
      if (!items.length) {
        nSugg.innerHTML = '<div class="fce-conn-empty">No candidates yet — keep writing, or search by name above.</div>';
        return;
      }
      nSugg.innerHTML = items.map(function (it, i) {
        var e2 = it.e || it;
        return '<div class="fce-ac-item fce-conn-item" data-i="' + i + '"><span class="fce-ac-t">' + escHtml(e2.title || e2.id) + '</span><span class="fce-ac-k">' + escHtml(e2.type) + (it.why ? ' · ' + escHtml(it.why) : '') + '</span></div>';
      }).join('');
      nSugg.querySelectorAll('.fce-conn-item').forEach(function (el) {
        el.addEventListener('mousedown', function (ev) {
          ev.preventDefault();
          var e2 = items[+el.dataset.i];
          if (!e2) return;
          e2 = e2.e || e2;
          if (nBody.value && !/\s$/.test(nBody.value)) nBody.value += ' ';
          nBody.value += '[[' + linkTargetOf(e2) + ']]';
          renderWizSugg();
        });
      });
    }
    var wizSuggTimer = null;
    function scheduleWizSugg() {
      clearTimeout(wizSuggTimer);
      wizSuggTimer = setTimeout(renderWizSugg, 300);
    }
    ['#fceNewTitle', '#fceNewBody', '#fceNewTags'].forEach(function (sel) {
      ov.querySelector(sel).addEventListener('input', scheduleWizSugg);
    });
    renderWizSugg();
    nConn.addEventListener('input', function () {
      var q = nConn.value.trim();
      if (!q) { nList.hidden = true; nList.innerHTML = ''; return; }
      var items = searchEntries(q, 8, null, true);
      nList.hidden = false;
      nList.innerHTML = items.length ? items.map(function (e2, i) {
        return '<div class="fce-ac-item" data-i="' + i + '"><span class="fce-ac-t">' + escHtml(e2.title || e2.id) + '</span><span class="fce-ac-k">' + escHtml(e2.type) + '</span></div>';
      }).join('') : '<div class="fce-conn-empty">Nothing matches — try fewer letters.</div>';
      nList.querySelectorAll('.fce-ac-item').forEach(function (el) {
        el.addEventListener('mousedown', function (ev) {
          ev.preventDefault();
          var e2 = items[+el.dataset.i];
          if (!e2) return;
          if (nBody.value && !/\s$/.test(nBody.value)) nBody.value += ' ';
          nBody.value += '[[' + linkTargetOf(e2) + ']]';
          nConn.value = '';
          nList.hidden = true;
          nList.innerHTML = '';
        });
      });
    });
    ov.querySelector('[data-act="create"]').addEventListener('click', function () {
      var type = ov.querySelector('#fceNewType').value;
      var title = ov.querySelector('#fceNewTitle').value.trim();
      var tags = ov.querySelector('#fceNewTags').value.split(',').map(function (s) { return s.trim(); }).filter(Boolean);
      var body = ov.querySelector('#fceNewBody').value;
      var refl = ov.querySelector('#fceNewRefl').value.split('\n').map(function (s) { return s.trim(); }).filter(Boolean);
      var statusEl = ov.querySelector('.fce-status');
      if (!title || !body.trim()) { statusEl.textContent = 'A title and some content are required.'; return; }

      var id, file, schema, fm;
      if (type === 'concept' || type === 'saying' || type === 'story') {
        id = title; file = title; schema = 2;
        fm = { schema: schema, id: id, type: type, title: title, file: file, tags: tags };
      } else {
        var n = 1;
        (window.wikiData || []).forEach(function (e) { var m = e.id && e.id.match(/^U(\d+)$/); if (m) n = Math.max(n, +m[1] + 1); });
        id = 'U' + String(n).padStart(3, '0');
        file = id + ' — ' + title;
        fm = { schema: 0, id: id, type: type, title: title, file: file, tags: tags, number: String(n) };
      }
      var lines = ['---'];
      Object.keys(fm).forEach(function (k) {
        if (k === 'schema') { lines.push('schema: ' + fm[k]); return; }
        lines.push(k + ': ' + JSON.stringify(fm[k]));
      });
      lines.push('---');
      var text = lines.join('\n') + '\n' + body;
      if (refl.length) text += '\n\n<!-- fc: reflections\n' + refl.join('\n%%\n') + '\n-->';
      var path = 'content/' + TYPE_DIRS[type] + '/' + file + '.md';

      statusEl.textContent = 'Creating…';
      api('PUT', '/contents/' + encodeURIComponent(path).replace(/%2F/g, '/'), {
        message: 'Add ' + type + ': ' + title,
        content: b64(text),
        branch: gh().branch
      }).then(function () {
        ov.remove();
        toast('Created "' + title + '" — the site will show it after the rebuild (~1 min)');
      }).catch(function (err) {
        statusEl.textContent = '';
        toast(err.message || 'Create failed', false);
      });
    });
    document.body.appendChild(ov);
  }

  /* ═══════════════ DELETE ENTRY (atomic: file + order manifest in one commit) ═══════════════ */
  var DELETABLE = ['principle', 'kernel', 'concept', 'story', 'saying'];
  function delEntry(entry) {
    var path = mdPath(entry);
    var g = gh();
    var ctx = {};
    return Promise.resolve()
      .then(function () { return api('GET', '/git/ref/heads/' + g.branch); })
      .then(function (ref) {
        ctx.headSha = ref.object.sha;
        return api('GET', '/git/commits/' + ctx.headSha);
      })
      .then(function (c) {
        ctx.baseTree = c.tree.sha;
        return api('GET', '/contents/content/_order.json?ref=' + encodeURIComponent(g.branch));
      })
      .then(function (f) {
        var manifest = JSON.parse(unb64(f.content));
        ctx.manifest = manifest.filter(function (p) { return p !== path; });
        var body = '[\n' + ctx.manifest.map(function (p) { return JSON.stringify(p); }).join(',\n') + '\n]';
        return api('POST', '/git/blobs', { content: b64(body), encoding: 'base64' });
      })
      .then(function (b) {
        ctx.blobSha = b.sha;
        return api('POST', '/git/trees', {
          base_tree: ctx.baseTree,
          tree: [
            { path: 'content/_order.json', mode: '100644', type: 'blob', sha: ctx.blobSha },
            { path: path, mode: '100644', type: 'blob', sha: null }
          ]
        });
      })
      .then(function (t) {
        ctx.treeSha = t.sha;
        return api('POST', '/git/commits', {
          message: 'Delete ' + entry.id + ' \u2014 ' + entry.title,
          tree: ctx.treeSha,
          parents: [ctx.headSha]
        });
      })
      .then(function (c) {
        return api('PATCH', '/git/refs/heads/' + g.branch, { sha: c.sha, force: false });
      })
      .then(function () {
        toast('Deleted \u2014 the site updates itself in about a minute');
        return true;
      })
      .catch(function (err) {
        toast(err.message || 'Delete failed', false);
        return false;
      });
  }

  /* ═══════════════ WELCOME (one-time, plain-language setup) ═══════════════ */
  function welcome() {
    var ov = modalOverlay();
    ov.innerHTML =
      '<div class="fce-shell narrow fce-welcome">' +
      '<div class="fce-head">' +
      '<div class="fce-title">Make this wiki yours to edit</div>' +
      '<div class="fce-sub">A one-time connection, about two minutes. After that, editing is simply: open a page → <b>Edit</b> → write → <b>Save</b>.</div>' +
      '</div>' +
      '<div class="fce-welcome-body">' +
      '<div class="fce-step"><span class="fce-stepn">1</span><div><b>Get your key from GitHub.</b> ' +
      'Open <a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener">this token page</a> (it opens in a new tab) and click through:<br>' +
      '• Name it anything (for example <i>wiki</i>)<br>' +
      '• <i>Repository access</i> → <i>Only select repositories</i> → choose <b>flourishing-compendium</b><br>' +
      '• Under <i>Permissions</i>, click <b>+ Add permissions</b>, type <b>Contents</b> in the search, tick it, and set it to <b>Read and write</b><br>' +
      '• <i>Generate token</i>, then copy the code it shows (it starts with <code>github_pat_</code>)</div></div>' +
      '<div class="fce-step"><span class="fce-stepn">2</span><div><b>Paste it below.</b> It stays in this browser and is only ever sent to GitHub to save your edits.</div></div>' +
      '<div class="fce-step"><input id="fceWelcomeToken" type="password" placeholder="github_pat_…" autocomplete="off"></div>' +
      '</div>' +
      '<div class="fce-foot">' +
      '<span class="fce-status"></span>' +
      '<button class="fce-btn primary" data-act="done">Finish — start editing</button>' +
      '</div>' +
      '<div class="fce-alt">Prefer to skip this? You can also edit on <a href="https://github.com/Clemvillatte/flourishing-compendium/tree/main/content" target="_blank" rel="noopener">github.com</a>: open any file under <i>content/</i>, click the pencil, edit, commit. <a href="#" class="fce-adv">Advanced settings</a></div>' +
      '</div>';

    ov.querySelector('[data-act="done"]').addEventListener('click', function () {
      var t = ov.querySelector('#fceWelcomeToken').value.trim();
      var statusEl = ov.querySelector('.fce-status');
      if (!t) { statusEl.textContent = 'Paste the token from step 1 first (or use the github.com way below).'; return; }
      statusEl.textContent = 'Checking…';
      fetch('https://api.github.com/repos/' + (cfg().repo || DEFAULTS.repo) + '/contents/content/_order.json', {
        headers: { 'Authorization': 'Bearer ' + t, 'Accept': 'application/vnd.github+json' }
      }).then(function (r) {
        if (r.ok) {
          localStorage.setItem('fcgh_token', t);
          if (!cfg().repo) saveCfg({ repo: DEFAULTS.repo, branch: 'main' });
          ov.remove();
          toast('Connected — editing is now: Edit → write → Save');
        } else if (r.status === 403 || r.status === 404) {
          statusEl.textContent = 'This key cannot see the repository\u2019s files. On its GitHub page: Repository access \u2192 Only select repositories \u2192 flourishing-compendium, then Permissions \u2192 + Add permissions \u2192 search "Contents" \u2192 tick it \u2192 Read and write.';
        } else {
          statusEl.textContent = 'That key was not accepted (' + r.status + ') — please copy it again from GitHub.';
        }
      });
    });
    ov.querySelector('.fce-adv').addEventListener('click', function (ev) {
      ev.preventDefault();
      ov.remove();
      settings();
    });
    ov.querySelector('.fce-alt a[href*="github.com/Clem"]').addEventListener('click', function (ev) {
      ov.remove();
    });
    document.body.appendChild(ov);
    var inp = ov.querySelector('#fceWelcomeToken');
    if (inp) inp.focus();
  }

  /* ═══════════════ SETTINGS ═══════════════ */
  function settings() {
    var ov = modalOverlay();
    var c = cfg();
    ov.innerHTML =
      '<div class="fce-shell narrow">' +
      '<div class="fce-head"><div class="fce-title">Editor settings</div>' +
      '<div class="fce-sub">Your token stays in this browser (localStorage) and is only ever sent to api.github.com.</div></div>' +
      '<div class="fce-form">' +
      '<label>Repository (owner/name)<input id="fceRepo" placeholder="yourname/flourishing-compendium" value="' + escAttr(c.repo || DEFAULTS.repo) + '"></label>' +
      '<label>Branch<input id="fceBranch" value="' + escAttr(c.branch || 'main') + '"></label>' +
      '<label>GitHub token — fine-grained, with <b>Contents: Read and write</b> on this repo' +
      '<input id="fceToken" type="password" placeholder="github_pat_…" value=""></label>' +
      '<div class="fce-hint">Create one at github.com → Settings → Developer settings → Fine-grained tokens. Give it access to this single repository with Contents read/write.</div>' +
      '</div>' +
      '<div class="fce-foot">' +
      '<span class="fce-status"></span>' +
      '<button class="fce-btn ghost" data-act="cancel">Cancel</button>' +
      '<button class="fce-btn ghost" data-act="test">Test connection</button>' +
      '<button class="fce-btn primary" data-act="save">Save</button>' +
      '</div></div>';
    ov.querySelector('[data-act="cancel"]').addEventListener('click', function () { ov.remove(); });
    var statusEl = ov.querySelector('.fce-status');
    ov.querySelector('[data-act="test"]').addEventListener('click', function () {
      var t = ov.querySelector('#fceToken').value.trim() || token();
      var repo = ov.querySelector('#fceRepo').value.trim();
      statusEl.textContent = 'Checking…';
      fetch('https://api.github.com/repos/' + repo + '/contents/content/_order.json', {
        headers: { 'Authorization': 'Bearer ' + t, 'Accept': 'application/vnd.github+json' }
      }).then(function (r) {
        if (r.status === 401) { statusEl.textContent = 'This key was not accepted — copy it fresh from GitHub.'; return; }
        if (r.status === 403 || r.status === 404) { statusEl.textContent = 'The key works, but cannot see this repository\u2019s files: on the token page, + Add permissions → search "Contents" → tick it → Read and write.'; return; }
        if (!r.ok) { statusEl.textContent = 'Check failed (' + r.status + ')'; return; }
        statusEl.textContent = 'Key accepted, repository access OK \u2713 (saving also needs Contents = Read and write)';
      });
    });
    ov.querySelector('[data-act="save"]').addEventListener('click', function () {
      saveCfg({
        repo: ov.querySelector('#fceRepo').value.trim(),
        branch: ov.querySelector('#fceBranch').value.trim() || 'main'
      });
      var t = ov.querySelector('#fceToken').value.trim();
      if (t) localStorage.setItem('fcgh_token', t);
      ov.remove();
      toast('Settings saved');
    });
    document.body.appendChild(ov);
  }

  /* ---------- helpers ---------- */
  function escHtml(s) { return String(s).replace(/[&<>"']/g, function (ch) { return ({ '&': '&' + 'amp;', '<': '&' + 'lt;', '>': '&' + 'gt;', '"': '&' + 'quot;', "'": '&' + '#39;' })[ch]; }); }
  function escAttr(s) { return escHtml(s); }

  /* ---------- public ---------- */
  window.fcEditor2 = {
    open: open,
    openNew: openNew,
    settings: settings,
    configured: configured,
    welcome: welcome,
    graphConnect: openConnectStandalone,
    graphDisconnect: graphDisconnect,
    manageConnections: manageConnections
  };

  /* ---------- one discreet "+ New entry" link in the Library list header ---------- */
  function mountLibraryButton() {
    var bar = document.getElementById('filterBar');
    if (!bar || document.getElementById('fcNewBtn')) return;
    var b = document.createElement('button');
    b.id = 'fcNewBtn'; b.type = 'button';
    b.title = 'Write a new principle, concept, kernel, story or saying';
    b.textContent = '+ New entry';
    b.addEventListener('click', openNew);
    bar.appendChild(b);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountLibraryButton);
  else mountLibraryButton();

  /* ═══════════════ GRAPH DRAWER: connect / disconnect (no editor needed) ═══════════════ */
  function openConnectStandalone(entry) {
    if (!configured()) { welcome(); return; }
    var g = gh();
    var ov = modalOverlay();
    ov.innerHTML =
      '<div class="fce-shell narrow" style="width:min(560px,96vw);height:auto">' +
      '<div class="fce-head"><div class="fce-title">Connect ' + escHtml(entry.title) + '</div>' +
      '<div class="fce-sub">Pick the other entry — the link shows in the graph after the site rebuilds (~1 min)</div></div>' +
      '<div class="fce-gconn">' +
      '<input class="fce-conn-q" type="text" placeholder="Connect to… type any part of a name (e.g. examined)">' +
      '<div class="fce-conn-list"></div>' +
      '<div class="fce-conn-hint">↑ ↓ to choose · Enter to connect · Esc to close</div>' +
      '</div></div>';
    var q = ov.querySelector('.fce-conn-q');
    var list = ov.querySelector('.fce-conn-list');
    var conn = { items: [], sel: 0 };
    function linkedSet() {
      var linked = new Set([entry.id]);
      var re = /\[\[([^|\]]+)(?:\|[^\]]+)?\]\]/g, m;
      while ((m = re.exec(String(entry.content || ''))) !== null) {
        var e2 = suggestionMaps().byId.get((m[1] || '').trim()) || suggestionMaps().byFile.get((m[1] || '').trim());
        if (e2) linked.add(e2.id);
      }
      incomingLinkers(entry.id, entry.file).forEach(function (x) { linked.add(x); });
      return linked;
    }
    function render(items, heading) {
      conn.items = items; conn.sel = 0;
      if (!items.length) {
        list.innerHTML = '<div class="fce-conn-empty">Nothing matches — try fewer letters.</div>';
        return;
      }
      var h = heading ? '<div class="fce-conn-head">' + escHtml(heading) + '</div>' : '';
      list.innerHTML = h + items.map(function (it, idx) {
        var e2 = it.e || it;
        return '<div class="fce-ac-item fce-conn-item' + (idx === 0 ? ' sel' : '') + '" data-i="' + idx + '">' +
          '<span class="fce-ac-t">' + escHtml(e2.title || e2.id) + '</span>' +
          '<span class="fce-ac-k">' + escHtml(e2.type) + (it.why ? ' · ' + escHtml(it.why) : '') + '</span></div>';
      }).join('');
      list.querySelectorAll('.fce-conn-item').forEach(function (el) {
        el.addEventListener('mousedown', function (ev) { ev.preventDefault(); choose(+el.dataset.i); });
      });
    }
    function choose(i) {
      var t = conn.items[i];
      if (!t) return;
      t = t.e || t;
      var lt = linkTargetOf(t);
      q.disabled = true;
      list.innerHTML = '<div class="fce-conn-empty">Connecting to ' + escHtml(t.title || t.id) + '…</div>';
      commitConnect(entry, t).then(function (r) {
        ov.remove();
        if (r && r.already) toast('Already connected to ' + (t.title || t.id));
        else toast('Connected to ' + (t.title || t.id) + ' — the graph updates after the rebuild (~1 min)');
      }).catch(function (err) {
        q.disabled = false;
        list.innerHTML = '<div class="fce-conn-empty">' + escHtml(err.message || 'Connect failed') + '</div>';
        toast(err.message || 'Connect failed', false);
      });
    }
    q.addEventListener('input', function () {
      if (!q.value.trim()) {
        render(computeSuggestions({ title: entry.title, tags: entry.tags, bodyText: entry.content, linkedIds: linkedSet() }), 'Suggested connections');
        return;
      }
      render(searchEntries(q.value, 12, entry.id, true), '');
    });
    q.addEventListener('keydown', function (ev) {
      if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') {
        ev.preventDefault();
        if (!conn.items.length) return;
        conn.sel = (conn.sel + (ev.key === 'ArrowDown' ? 1 : -1) + conn.items.length) % conn.items.length;
        list.querySelectorAll('.fce-conn-item').forEach(function (el, i2) { el.classList.toggle('sel', i2 === conn.sel); });
      } else if (ev.key === 'Enter') {
        ev.preventDefault(); choose(conn.sel);
      } else if (ev.key === 'Escape') {
        ev.preventDefault(); ov.remove();
      }
    });
    render(computeSuggestions({ title: entry.title, tags: entry.tags, bodyText: entry.content, linkedIds: linkedSet() }), 'Suggested connections');
    document.body.appendChild(ov);
    q.focus();
  }

  /* insert a [[link]] into entry's file, before the Sources section when present */
  function commitConnect(entry, target) {
    var g = gh();
    var path = mdPath(entry);
    return api('GET', '/contents/' + encodeURIComponent(path).replace(/%2F/g, '/') + '?ref=' + g.branch)
      .then(function (f) {
        var text = unb64(f.content);
        var parts = splitMd(text);
        if (!parts) return Promise.reject(new Error('Could not parse the stored markdown'));
        var lt = linkTargetOf(target);
        if (parts.body.indexOf('[[' + lt) >= 0) return { already: true };
        var body = parts.body;
        var link = '[[' + lt + ']]';
        var m = /^(##\s+Sources\b.*)$/m.exec(body);
        if (m) {
          body = body.slice(0, m.index).replace(/\s+$/, '') + '\n\n' + link + '\n\n' + body.slice(m.index);
        } else {
          if (body && !/\n$/.test(body)) body += '\n';
          body += '\n' + link;
        }
        var newText = parts.fmText + body + (parts.refl !== null ? '\n\n<!-- fc: reflections\n' + parts.refl + '\n-->' : '');
        return api('PUT', '/contents/' + encodeURIComponent(path).replace(/%2F/g, '/'), {
          message: 'Connect ' + entry.id + ' ↔ ' + target.id,
          content: b64(newText),
          sha: f.sha,
          branch: g.branch
        }).then(function () {
          window.dispatchEvent(new CustomEvent('fc:edge', { detail: { a: entry.id, b: target.id, removed: false } }));
          return { already: false };
        });
      });
  }

  /* remove every [[link]] between a and b, from whichever file(s) hold them.
     Sequential on purpose: a partial failure is reported honestly and can be retried. */
  function graphDisconnect(a, b, cb) {
    if (!configured()) { welcome(); cb && cb(false); return; }
    var g = gh();
    var results = []; // 'changed' | 'absent' per file
    var chain = Promise.resolve();
    [[a, b], [b, a]].forEach(function (pair) {
      var src = pair[0], tgt = pair[1];
      chain = chain.then(function () {
        var names = [tgt.file, tgt.id].filter(Boolean);
        var path = mdPath(src);
        return api('GET', '/contents/' + encodeURIComponent(path).replace(/%2F/g, '/') + '?ref=' + g.branch)
          .then(function (f) {
            var text = unb64(f.content);
            var newText = text.replace(/\[\[([^|\]]+)(?:\|([^\]]+))?\]\]/g, function (mm, t, alias) {
              t = String(t || '').trim();
              if (names.indexOf(t) >= 0) return alias || tgt.title || t;
              return mm;
            });
            if (newText === text) { results.push('absent'); return; }
            return api('PUT', '/contents/' + encodeURIComponent(path).replace(/%2F/g, '/'), {
              message: 'Disconnect ' + a.id + ' — ' + b.id,
              content: b64(newText),
              sha: f.sha,
              branch: g.branch
            }).then(function () { results.push('changed'); });
          });
      });
    });
    chain.then(function () {
      if (results.indexOf('changed') < 0) { toast('No link found between these entries', false); cb && cb(false); return; }
      window.dispatchEvent(new CustomEvent('fc:edge', { detail: { a: a.id, b: b.id, removed: true } }));
      toast('Disconnected — removed from the graph');
      cb && cb(true);
    }).catch(function (err) {
      if (results.indexOf('changed') >= 0) {
        // one file cleaned, the other failed: the edge may still exist via the other side — retry to finish.
        // Report failure so the UI keeps the row/edge for a retry.
        toast('One file updated, the other failed — try again to complete', false);
        cb && cb(false);
      } else {
        toast(err.message || 'Disconnect failed', false);
        cb && cb(false);
      }
    });
  }

  /* graph drawer: manage ALL connections (searchable) — the top-12 list only shows the first rows */
  function manageConnections(entry, ids) {
    if (!configured()) { welcome(); return; }
    var maps = suggestionMaps();
    var targets = (ids || []).map(function (id) { return maps.byId.get(id); }).filter(Boolean);
    var ov = modalOverlay();
    ov.innerHTML =
      '<div class="fce-shell narrow" style="width:min(560px,96vw);height:auto">' +
      '<div class="fce-head"><div class="fce-title">Connections of ' + escHtml(entry.title) + '</div>' +
      '<div class="fce-sub">Removing a connection removes the [[link]] from the entry text — both entries are kept.</div></div>' +
      '<div class="fce-gconn">' +
      '<input class="fce-conn-q" type="text" placeholder="Filter by name…">' +
      '<div class="fce-conn-list"></div>' +
      '<div class="fce-conn-hint">Click ✕ once, then again to remove · Esc to close</div>' +
      '</div></div>';
    var q = ov.querySelector('.fce-conn-q');
    var list = ov.querySelector('.fce-conn-list');
    function render() {
      var f = String(q.value || '').trim().toLowerCase();
      var items = targets.filter(function (t) {
        return !f || String(t.title || t.id).toLowerCase().indexOf(f) >= 0 || String(t.id || '').toLowerCase().indexOf(f) >= 0;
      });
      if (!items.length) { list.innerHTML = '<div class="fce-conn-empty">No matching connections.</div>'; return; }
      list.innerHTML = items.map(function (t) {
        var ix = targets.indexOf(t);
        return '<div class="fce-ac-item fce-conn-item"><span class="fce-ac-t">' + escHtml(t.title || t.id) + '</span>' +
          '<span class="fce-conn-x2" data-i="' + ix + '" title="Remove this connection">✕</span></div>';
      }).join('');
      list.querySelectorAll('.fce-conn-x2').forEach(function (el) {
        el.addEventListener('click', function () {
          var t = targets[+el.dataset.i];
          if (!t) return;
          if (el.dataset.armed && Date.now() - +el.dataset.armed < 3000) {
            el.textContent = '…';
            graphDisconnect(entry, t, function (ok) {
              if (ok) {
                targets = targets.filter(function (x) { return x !== t; });
                render();
              } else {
                delete el.dataset.armed; el.classList.remove('arm'); el.textContent = '✕';
              }
            });
          } else {
            el.dataset.armed = String(Date.now());
            el.classList.add('arm');
            el.textContent = '✓?';
            setTimeout(function () {
              if (!el.dataset.armed) return;
              delete el.dataset.armed; el.classList.remove('arm'); el.textContent = '✕';
            }, 3000);
          }
        });
      });
    }
    q.addEventListener('input', render);
    q.addEventListener('keydown', function (ev) { if (ev.key === 'Escape') { ev.preventDefault(); ov.remove(); } });
    render();
    document.body.appendChild(ov);
    q.focus();
  }

  /* ---------- styles ---------- */
  var css = '' +
    '.fce-overlay{position:fixed;inset:0;z-index:100000;background:rgba(20,16,10,.55);display:flex;align-items:center;justify-content:center;padding:24px}' +
    '.fce-shell{background:#faf6ee;color:#2b2114;border-radius:14px;box-shadow:0 24px 80px rgba(0,0,0,.45);width:min(1100px,96vw);height:min(86vh,900px);display:flex;flex-direction:column;overflow:hidden}' +
    '.fce-shell.narrow{width:min(640px,96vw);height:auto;max-height:min(94vh,900px);overflow:auto}' +
    '.fce-head{padding:18px 22px 10px}' +
    '.fce-title{font-family:Georgia,serif;font-size:21px;font-weight:700}' +
    '.fce-title .fce-id{font-size:13px;color:#9a8a6f;font-weight:400;margin-left:8px}' +
    '.fce-sub{font-size:12.5px;color:#8a7a5f;margin-top:3px}' +
    '.fce-sub code{background:#efe6d5;padding:1px 5px;border-radius:5px;font-size:11px}' +
    '.fce-toolbar{display:flex;gap:4px;padding:6px 16px;border-bottom:1px solid #e4d9c3;flex-wrap:wrap}' +
    '.fce-toolbar button{background:#fff;border:1px solid #d9cbb0;border-radius:8px;min-width:34px;height:30px;cursor:pointer;font-size:13px;color:#4a3a22}' +
    '.fce-toolbar button:hover{background:#f3ead8}' +
    '.fce-toolbar .fce-sp{flex:1}' +
    '.fce-toolbar button.active{background:#e8d9b8}' +
    '.fce-main{flex:1;display:flex;position:relative;min-height:0}' +
    '.fce-ta{flex:1;resize:none;border:0;outline:none;padding:18px 20px;font:14px/1.65 ui-monospace,"SF Mono",Menlo,Consolas,monospace;background:#fffdf8;color:#2b2114;min-height:0}' +
    '.fce-preview{flex:1;border-left:1px solid #e4d9c3;overflow:auto;padding:18px 22px;background:#fbf7ef}' +
    '.fce-preview.hidden{display:none}' +
    '.fce-preview-inner{font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#33281a;max-width:60ch}' +
    '.fce-preview-inner h1,.fce-preview-inner h2,.fce-preview-inner h3{font-family:Georgia,serif;margin:.7em 0 .3em}' +
    '.fce-preview-inner a{color:#8a6d2f}' +
    '.fce-ac{position:fixed;z-index:100001;background:#fff;border:1px solid #cbb98f;border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,.25);max-height:280px;overflow:auto;min-width:300px}' +
    '.fce-ac-item{padding:7px 12px;cursor:pointer;display:flex;justify-content:space-between;gap:14px}' +
    '.fce-ac-item.sel,.fce-ac-item:hover{background:#f3ead4}' +
    '.fce-ac-t{font-size:13.5px}' +
    '.fce-ac-k{font-size:11px;color:#9a8a6f}' +
    '.fce-conn[hidden]{display:none}' +
    '.fce-conn{position:absolute;inset:0;z-index:100003;background:rgba(20,16,10,.35);display:flex;align-items:flex-start;justify-content:center;padding-top:56px}' +
    '.fce-conn-box{background:#fffdf8;border:1px solid #cbb98f;border-radius:12px;box-shadow:0 16px 50px rgba(0,0,0,.35);width:min(560px,92%);overflow:hidden}' +
    '.fce-conn-q{width:100%;box-sizing:border-box;border:0;border-bottom:1px solid #e4d9c3;padding:14px 16px;font-size:15px;outline:none;background:#fffdf8;color:#2b2114;font-family:Georgia,serif}' +
    '.fce-conn-list{max-height:340px;overflow:auto}' +
    '.fce-conn-head{padding:9px 12px 3px;font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:#9a8a6f}' +
    '.fce-conn-empty{padding:16px 14px;font-size:13px;color:#9a8a6f}' +
    '.fce-conn-hint{padding:8px 14px;font-size:11.5px;color:#9a8a6f;border-top:1px solid #eee3cc}' +
    '.fce-newconn-list{background:#fff;border:1px solid #cbb98f;border-radius:10px;max-height:220px;overflow:auto;margin-top:4px}' +
    '.fce-newsugg{background:#fffdf8;border:1px solid #e4d9c3;border-radius:10px;max-height:220px;overflow:auto;margin-top:4px}' +
    '.fce-gconn{padding:12px 22px 18px}' +
    '.fce-conn-x2{flex:none;padding:2px 8px;border-radius:5px;font-size:12px;color:#9a8a6f;cursor:pointer;user-select:none}' +
    '.fce-conn-x2:hover{background:#b04938;color:#fff}' +
    '.fce-conn-x2.arm{background:#b04938;color:#fff;font-weight:700}' +
    '.fce-foot{display:flex;align-items:center;gap:10px;padding:14px 20px;border-top:1px solid #e4d9c3}' +
    '.fce-note{flex:1;font-size:12px;color:#8a7a5f}' +
    '.fce-linkbtn{background:none;border:none;color:#8a6d2f;text-decoration:underline;cursor:pointer;font-size:12px;padding:0}' +
    '.fce-status{font-size:12.5px;color:#6b5a3d}' +
    '.fce-btn{border-radius:9px;padding:9px 18px;font-size:14px;cursor:pointer;border:1px solid transparent}' +
    '.fce-btn.primary{background:#8a6d2f;color:#fff}' +
    '.fce-btn.primary:hover{background:#75591f}' +
    '.fce-btn.ghost{background:transparent;border-color:#cbb98f;color:#5d4b28}' +
    '.fce-btn.ghost:hover{background:#f0e7d2}' +
    '.fce-mini{padding:9px 11px}' +
    '.fce-form{padding:8px 22px 4px;display:flex;flex-direction:column;gap:12px}' +
    '.fce-form label{display:flex;flex-direction:column;gap:4px;font-size:13px;font-weight:600;color:#5d4b28}' +
    '.fce-form input,.fce-form select,.fce-form textarea{border:1px solid #d9cbb0;border-radius:8px;padding:9px 11px;font-size:14px;background:#fffdf8;color:#2b2114;font-family:inherit}' +
    '.fce-form textarea{font:14px/1.6 ui-monospace,Menlo,Consolas,monospace;resize:vertical}' +
    '.fce-hint{font-size:12px;color:#9a8a6f;font-weight:400}' +
    '.fce-toast{position:fixed;bottom:26px;left:50%;transform:translateX(-50%) translateY(20px);background:#3a2f1c;color:#f5ecd9;padding:12px 22px;border-radius:10px;font-size:14px;z-index:100002;opacity:0;transition:all .25s;box-shadow:0 8px 30px rgba(0,0,0,.4)}' +
    '.fce-toast.on{opacity:1;transform:translateX(-50%) translateY(0)}' +
    '.fce-toast.err{background:#5c2422}' +
    '.fce-welcome .fce-step{display:flex;gap:14px;margin:16px 0;align-items:flex-start}' +
    '.fce-stepn{flex:0 0 26px;height:26px;border-radius:50%;background:#8a6d2f;color:#fff;font-size:13px;display:flex;align-items:center;justify-content:center;font-weight:700}' +
    '.fce-welcome .fce-step input{margin-top:2px;border:1px solid #d9cbb0;border-radius:8px;padding:10px 12px;font-size:14px;width:100%;background:#fffdf8}' +
    '.fce-welcome-body{padding:4px 26px 10px}' +
    '.fce-welcome .fce-step div{font-size:14.5px;line-height:1.65;color:#3d2f1a}' +
    '.fce-welcome .fce-step a{color:#8a6d2f}' +
    '.fce-alt{padding:12px 24px 16px;font-size:12.5px;color:#9a8a6f;border-top:1px solid #eee3cc}' +
    '.fce-alt a{color:#8a6d2f}' +
    '#fcNewBtn{background:none;border:1px solid #cbb98f;border-radius:8px;color:#8a6d2f;font-size:12px;padding:3px 10px;cursor:pointer;margin-left:10px;vertical-align:1px}' +
    '#fcNewBtn:hover{background:#f3ead4}' +
    '.fce-del{background:none;border:none;color:#b04938;cursor:pointer;font-size:12.5px;text-decoration:underline;padding:4px 2px}' +
    '.fce-del.arm{background:#b04938;color:#fff;border-radius:6px;text-decoration:none;padding:6px 10px}' +
    '.fce-del:disabled{opacity:.5;cursor:default}' +
    '@media (max-width:800px){.fce-main{flex-direction:column}.fce-preview{border-left:0;border-top:1px solid #e4d9c3}}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);
})();
