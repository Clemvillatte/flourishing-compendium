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
      if (r.status === 401 || r.status === 403) throw { code: r.status, message: 'GitHub rejected the token — open ⚙ Settings and paste a valid token (Contents: Read & write).' };
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
    if (!configured()) { settings(); return; }
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
      '<button data-cmd="link" title="Web link">🔗</button>' +
      '<span class="fce-sp"></span>' +
      '<button data-cmd="preview" title="Toggle preview">👁 Preview</button>' +
      '</div>' +
      '<div class="fce-main">' +
      '<textarea class="fce-ta" spellcheck="true"></textarea>' +
      '<div class="fce-preview"><div class="fce-preview-inner"></div></div>' +
      '<div class="fce-ac" hidden></div>' +
      '</div>' +
      '<div class="fce-foot">' +
      '<span class="fce-note">Ctrl/Cmd+S to save · drafts autosave to this browser until saved</span>' +
      '<span class="fce-status"></span>' +
      '<button class="fce-btn ghost" data-act="cancel">Close</button>' +
      '<button class="fce-btn primary" data-act="save">Save to GitHub</button>' +
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

    /* [[ autocomplete ]] */
    var acEl = ov.querySelector('.fce-ac');
    function hideAC() { acEl.hidden = true; ac.items = []; ac.span = null; }
    function updateAC() {
      var pos = ta.selectionStart;
      var upto = ta.value.slice(0, pos);
      var m = upto.match(/\[\[([^\[\]|\n]*)$/);
      if (!m || m[1].length < 1) { hideAC(); return; }
      var q = m[1].toLowerCase();
      var matches = [];
      var data = window.wikiData || [];
      for (var i = 0; i < data.length && matches.length < 10; i++) {
        var e2 = data[i];
        var t = (e2.title || e2.id || '');
        if (t.toLowerCase().indexOf(q) === 0 || e2.id.toLowerCase().indexOf(q) === 0) matches.push(e2);
      }
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
      var after = ta.value.slice(ta.selectionStart);
      var before = ta.value.slice(0, ac.start);
      ta.value = before + target.id + ']]' + after;
      var np = ac.start + target.id.length + 2;
      ta.focus(); ta.setSelectionRange(np, np);
      hideAC();
      ta.dispatchEvent(new Event('input'));
    }
    acEl.addEventListener('mousedown', function (ev) {
      var it = ev.target.closest('.fce-ac-item');
      if (it) { ac.sel = +it.dataset.i; acceptAC(); }
    });

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
      }).then(function () {
        statusEl.textContent = 'Saved ✓ — the site rebuilds in about a minute';
        toast('Saved to GitHub — the site will update itself shortly');
        try { localStorage.removeItem(draftKey); } catch (e) {}
        parts.body = body;
      }).catch(function (err) {
        statusEl.textContent = '';
        toast(err.message || 'Save failed', false);
      });
    }

    ov.querySelector('[data-act="save"]').addEventListener('click', doSave);
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
    if (!configured()) { settings(); return; }
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
      '<label>Reflection questions (one per line, optional)' +
      '<textarea id="fceNewRefl" rows="3" placeholder="A question the reader should sit with…"></textarea></label>' +
      '</div>' +
      '<div class="fce-foot">' +
      '<span class="fce-status"></span>' +
      '<button class="fce-btn ghost" data-act="cancel">Cancel</button>' +
      '<button class="fce-btn primary" data-act="create">Create entry</button>' +
      '</div></div>';

    ov.querySelector('[data-act="cancel"]').addEventListener('click', function () { ov.remove(); });
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
      var t = ov.querySelector('#fceToken').value.trim();
      var repo = ov.querySelector('#fceRepo').value.trim();
      fetch('https://api.github.com/repos/' + repo, {
        headers: { 'Authorization': 'Bearer ' + (t || token()), 'Accept': 'application/vnd.github+json' }
      }).then(function (r) {
        if (r.ok) statusEl.textContent = 'Connection OK ✓';
        else statusEl.textContent = 'Failed (' + r.status + ') — check repo name and token';
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
    configured: configured
  };

  /* ---------- nav buttons (injected once DOM is ready) ---------- */
  function mountNav() {
    var bar = document.querySelector('.vtab-bar, #tabs, nav');
    if (!bar) bar = document.getElementById('tabGraph') && document.getElementById('tabGraph').parentNode;
    if (!bar) return;
    if (document.getElementById('fcAddBtn')) return;
    var add = document.createElement('button');
    add.id = 'fcAddBtn'; add.className = 'vtab'; add.type = 'button';
    add.title = 'Add a new principle, concept, kernel, story or saying';
    add.textContent = '+ Add';
    add.addEventListener('click', openNew);
    var gear = document.createElement('button');
    gear.id = 'fcGearBtn'; gear.className = 'vtab'; gear.type = 'button';
    gear.title = 'Editor settings (GitHub repo + token)';
    gear.textContent = '⚙';
    gear.addEventListener('click', settings);
    var graph = document.getElementById('tabGraph');
    if (graph && graph.parentNode === bar) {
      bar.insertBefore(gear, graph.nextSibling);
      bar.insertBefore(add, gear);
    } else { bar.appendChild(add); bar.appendChild(gear); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountNav);
  else mountNav();

  /* ---------- styles ---------- */
  var css = '' +
    '.fce-overlay{position:fixed;inset:0;z-index:100000;background:rgba(20,16,10,.55);display:flex;align-items:center;justify-content:center;padding:24px}' +
    '.fce-shell{background:#faf6ee;color:#2b2114;border-radius:14px;box-shadow:0 24px 80px rgba(0,0,0,.45);width:min(1100px,96vw);height:min(86vh,900px);display:flex;flex-direction:column;overflow:hidden}' +
    '.fce-shell.narrow{width:min(640px,96vw);height:auto}' +
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
    '.fce-foot{display:flex;align-items:center;gap:10px;padding:14px 20px;border-top:1px solid #e4d9c3}' +
    '.fce-note{flex:1;font-size:12px;color:#8a7a5f}' +
    '.fce-linkbtn{background:none;border:none;color:#8a6d2f;text-decoration:underline;cursor:pointer;font-size:12px;padding:0}' +
    '.fce-status{font-size:12.5px;color:#6b5a3d}' +
    '.fce-btn{border-radius:9px;padding:9px 18px;font-size:14px;cursor:pointer;border:1px solid transparent}' +
    '.fce-btn.primary{background:#8a6d2f;color:#fff}' +
    '.fce-btn.primary:hover{background:#75591f}' +
    '.fce-btn.ghost{background:transparent;border-color:#cbb98f;color:#5d4b28}' +
    '.fce-btn.ghost:hover{background:#f0e7d2}' +
    '.fce-form{padding:8px 22px 4px;display:flex;flex-direction:column;gap:12px}' +
    '.fce-form label{display:flex;flex-direction:column;gap:4px;font-size:13px;font-weight:600;color:#5d4b28}' +
    '.fce-form input,.fce-form select,.fce-form textarea{border:1px solid #d9cbb0;border-radius:8px;padding:9px 11px;font-size:14px;background:#fffdf8;color:#2b2114;font-family:inherit}' +
    '.fce-form textarea{font:14px/1.6 ui-monospace,Menlo,Consolas,monospace;resize:vertical}' +
    '.fce-hint{font-size:12px;color:#9a8a6f;font-weight:400}' +
    '.fce-toast{position:fixed;bottom:26px;left:50%;transform:translateX(-50%) translateY(20px);background:#3a2f1c;color:#f5ecd9;padding:12px 22px;border-radius:10px;font-size:14px;z-index:100002;opacity:0;transition:all .25s;box-shadow:0 8px 30px rgba(0,0,0,.4)}' +
    '.fce-toast.on{opacity:1;transform:translateX(-50%) translateY(0)}' +
    '.fce-toast.err{background:#5c2422}' +
    '@media (max-width:800px){.fce-main{flex-direction:column}.fce-preview{border-left:0;border-top:1px solid #e4d9c3}}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);
})();
