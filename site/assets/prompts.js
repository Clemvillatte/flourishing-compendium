/* Creative prompts: a curated bank of writing prompts, drawn at random.
   Two parts in one file, like randomizer-model.js:
   1. FCPrompts (pure model): the shuffle bag, the genre filter, history. Testable in Node.
   2. The panel (browser only): the button in the header, the dialog, links back to the
      principles and dossiers a prompt grows from.
   The bank lives in prompts-bank.json and is authored offline against
   docs/enrichment/CREATIVE-PROMPT-GENERATION.md. Nothing is generated at runtime. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.FCPrompts = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var GENRES = ['poetry', 'fiction', 'essay', 'memoir'];

  /* Fisher-Yates over a copy, using the supplied rng (0 <= r < 1). */
  function shuffle(list, rng) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* A shuffle bag: every prompt in the current filter is shown once before any repeats,
     and the first prompt of a new round never equals the last one shown. */
  function create(prompts, rng) {
    rng = rng || Math.random;
    var all = (prompts || []).filter(function (p) { return p && p.id && p.text; });
    var genre = 'all';
    var bag = [];
    var history = [];   /* ids shown, oldest first */
    var cursor = -1;    /* position inside history while stepping back and forward */

    function pool() {
      return genre === 'all' ? all : all.filter(function (p) { return p.genre === genre; });
    }
    function byId(id) {
      for (var i = 0; i < all.length; i++) if (all[i].id === id) return all[i];
      return null;
    }
    function refill() {
      var ids = pool().map(function (p) { return p.id; });
      bag = shuffle(ids, rng);
      var last = history.length ? history[history.length - 1] : null;
      if (bag.length > 1 && bag[0] === last) {
        var k = 1 + Math.floor(rng() * (bag.length - 1));
        var t = bag[0]; bag[0] = bag[k]; bag[k] = t;
      }
    }
    function next() {
      if (cursor < history.length - 1) { cursor++; return byId(history[cursor]); }
      if (!pool().length) return null;
      if (!bag.length) refill();
      var id = bag.shift();
      history.push(id);
      cursor = history.length - 1;
      return byId(id);
    }
    function prev() {
      if (cursor <= 0) return null;
      cursor--;
      return byId(history[cursor]);
    }
    function setGenre(g) {
      genre = (g === 'all' || GENRES.indexOf(g) >= 0) ? g : 'all';
      bag = [];
      /* Stepping forward from an older prompt starts fresh in the new filter. */
      cursor = history.length - 1;
    }
    return {
      next: next,
      prev: prev,
      setGenre: setGenre,
      genre: function () { return genre; },
      size: function () { return pool().length; },
      canGoBack: function () { return cursor > 0; },
      current: function () { return cursor >= 0 ? byId(history[cursor]) : null; },
      genres: function () {
        return GENRES.filter(function (g) { return all.some(function (p) { return p.genre === g; }); });
      }
    };
  }

  /* Plain text for the clipboard. */
  function asPlainText(p) {
    if (!p) return '';
    var out = [p.title ? p.title : '', p.text, p.done_when ? 'You are done when: ' + p.done_when : ''];
    return out.filter(Boolean).join('\n\n');
  }

  return { GENRES: GENRES, create: create, shuffle: shuffle, asPlainText: asPlainText };
});

/* ---------------- browser panel ---------------- */
(function () {
  if (typeof document === 'undefined') return;
  var FCP = (typeof self !== 'undefined' ? self : window).FCPrompts;
  if (!FCP) return;

  var GENRE_LABEL = { all: 'Any form', poetry: 'Poetry', fiction: 'Fiction', essay: 'Essay', memoir: 'Memoir' };
  var bankUrl = (function () {
    var s = document.currentScript;
    if (s && s.src) return s.src.replace(/prompts\.js(\?.*)?$/, 'prompts-bank.json$1');
    return 'assets/prompts-bank.json';
  })();

  var model = null, loading = null, panel = null, opener = null;

  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === 'text') n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { n.appendChild(c); });
    return n;
  }

  function loadBank() {
    if (loading) return loading;
    loading = fetch(bankUrl, { cache: 'no-cache' }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }).then(function (j) {
      model = FCP.create(j.prompts || []);
      return model;
    }).catch(function (e) { loading = null; throw e; });
    return loading;
  }

  /* Resolve a principle id to a live entry; a deleted principle is simply left out. */
  function principleEntry(id) {
    var data = window.wikiData || [];
    for (var i = 0; i < data.length; i++) {
      if (data[i].type === 'principle' && data[i].id === id) return data[i];
    }
    return null;
  }
  function dossierEntry(id) {
    var list = ((window.fcDossiersData || {}).dossiers) || [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id && list[i].status === 'published') return list[i];
    }
    return null;
  }

  function build() {
    panel = el('div', { id: 'fcPromptPanel', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'fcPromptHeading', hidden: '' });
    var card = el('div', { 'class': 'cpr-card' });

    var head = el('div', { 'class': 'cpr-head' });
    head.appendChild(el('h2', { id: 'fcPromptHeading', text: 'A writing prompt' }));
    var close = el('button', { type: 'button', 'class': 'cpr-close', 'aria-label': 'Close the prompt window', text: '\u00d7' });
    close.addEventListener('click', closePanel);
    head.appendChild(close);
    card.appendChild(head);

    var chips = el('div', { 'class': 'cpr-chips', role: 'group', 'aria-label': 'Form' });
    card.appendChild(chips);

    var body = el('div', { 'class': 'cpr-body', 'aria-live': 'polite', 'aria-atomic': 'true' });
    card.appendChild(body);

    var why = el('details', { 'class': 'cpr-why' });
    why.appendChild(el('summary', { text: 'Where this prompt comes from' }));
    why.appendChild(el('div', { 'class': 'cpr-why-body' }));
    card.appendChild(why);

    var bar = el('div', { 'class': 'cpr-actions' });
    var prevBtn = el('button', { type: 'button', 'class': 'cpr-btn', id: 'fcPromptPrev', text: 'Previous' });
    var nextBtn = el('button', { type: 'button', 'class': 'cpr-btn cpr-primary', id: 'fcPromptNext', text: 'New prompt' });
    var copyBtn = el('button', { type: 'button', 'class': 'cpr-btn', id: 'fcPromptCopy', text: 'Copy' });
    bar.appendChild(prevBtn); bar.appendChild(nextBtn); bar.appendChild(copyBtn);
    card.appendChild(bar);

    card.appendChild(el('p', { 'class': 'cpr-note', text: 'Prompts are written to start your own writing. Nothing you write is sent anywhere.' }));
    panel.appendChild(card);
    document.body.appendChild(panel);

    prevBtn.addEventListener('click', function () { var q = model && model.prev(); if (q) show(q); });
    nextBtn.addEventListener('click', function () { show(model && model.next()); });
    copyBtn.addEventListener('click', function () {
      var p = model && model.current();
      if (!p) return;
      var txt = FCP.asPlainText(p);
      var done = function () {
        copyBtn.textContent = 'Copied';
        setTimeout(function () { copyBtn.textContent = 'Copy'; }, 1500);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(done, done);
      else {
        var ta = el('textarea', { readonly: '' }); ta.value = txt; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); } catch (e) { /* best effort */ }
        document.body.removeChild(ta); done();
      }
    });
    panel.addEventListener('mousedown', function (ev) { if (ev.target === panel) closePanel(); });
    return panel;
  }

  function renderChips() {
    var chips = panel.querySelector('.cpr-chips');
    chips.textContent = '';
    ['all'].concat(model.genres()).forEach(function (g) {
      var b = el('button', { type: 'button', 'class': 'cpr-chip', 'data-genre': g, 'aria-pressed': String(model.genre() === g), text: GENRE_LABEL[g] || g });
      b.addEventListener('click', function () {
        model.setGenre(g);
        renderChips();
        show(model.next());
      });
      chips.appendChild(b);
    });
  }

  function show(p) {
    var body = panel.querySelector('.cpr-body');
    var whyBox = panel.querySelector('.cpr-why');
    var prevBtn = panel.querySelector('#fcPromptPrev');
    body.textContent = '';
    if (!p) {
      body.appendChild(el('p', { 'class': 'cpr-empty', text: 'There is no prompt to show for this form yet.' }));
      whyBox.hidden = true;
      prevBtn.disabled = !(model && model.canGoBack());
      return;
    }
    whyBox.hidden = false;
    whyBox.open = false;
    body.appendChild(el('p', { 'class': 'cpr-kind', text: (GENRE_LABEL[p.genre] || p.genre) + (p.title ? ' \u00b7 ' + p.title : '') }));
    body.appendChild(el('p', { 'class': 'cpr-text', text: p.text }));
    if (p.done_when) {
      body.appendChild(el('p', { 'class': 'cpr-done' }, [el('strong', { text: 'You are done when: ' }), document.createTextNode(p.done_when)]));
    }
    if (p.sensitive) {
      body.appendChild(el('p', { 'class': 'cpr-care', text: 'This is a writing exercise, not therapy. Skip anything that sits too close, or give it to a character.' }));
    }
    /* "Where this prompt comes from" */
    var wb = whyBox.querySelector('.cpr-why-body');
    wb.textContent = '';
    if (p.why) wb.appendChild(el('p', { text: p.why }));
    var links = el('p', { 'class': 'cpr-links' });
    (p.principles || []).forEach(function (id) {
      var e = principleEntry(id);
      if (!e) return;
      var a = el('a', { href: '#card=' + encodeURIComponent(e.file || e.id), text: e.id + ' ' + (e.title || '') });
      a.addEventListener('click', closePanel);
      links.appendChild(a);
    });
    (p.dossiers || []).forEach(function (id) {
      var d = dossierEntry(id);
      if (!d) return;
      var a = el('a', { href: '#dossier=' + encodeURIComponent(d.id), text: 'Dossier: ' + d.title });
      a.addEventListener('click', closePanel);
      links.appendChild(a);
    });
    if (links.childNodes.length) wb.appendChild(links);
    prevBtn.disabled = !model.canGoBack();
  }

  function focusables() {
    return Array.prototype.slice.call(panel.querySelectorAll('button:not([disabled]), a[href], summary'))
      .filter(function (n) { return !n.closest('[hidden]'); });
  }

  function onKey(ev) {
    if (!panel || panel.hidden) return;
    if (ev.metaKey || ev.ctrlKey || ev.altKey) return;   /* leave browser shortcuts alone */
    var k = ev.key;
    /* While the dialog is open its keys are its own: nothing reaches the Randomiser,
       Library or Graph shortcuts behind it. The default action (Enter or Space on a
       focused button) still runs because only propagation is stopped. */
    ev.stopImmediatePropagation();
    if (k === 'Escape') { ev.preventDefault(); closePanel(); return; }
    if (k === 'Tab') {
      var f = focusables();
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (ev.shiftKey && document.activeElement === first) { ev.preventDefault(); last.focus(); }
      else if (!ev.shiftKey && document.activeElement === last) { ev.preventDefault(); first.focus(); }
      return;
    }
    if (!model) return;
    if (k === 'n' || k === 'N' || k === 'ArrowRight') { ev.preventDefault(); show(model.next()); }
    else if (k === 'p' || k === 'P' || k === 'ArrowLeft') { ev.preventDefault(); var q = model.prev(); if (q) show(q); }
    else if (k === 'c' || k === 'C') { ev.preventDefault(); var b = panel.querySelector('#fcPromptCopy'); if (b) b.click(); }
  }

  function openPanel() {
    opener = document.activeElement;
    if (!panel) build();
    panel.hidden = false;
    document.body.classList.add('cpr-open');
    var body = panel.querySelector('.cpr-body');
    if (model) { renderChips(); if (!model.current()) show(model.next()); else show(model.current()); panel.querySelector('#fcPromptNext').focus(); return; }
    body.textContent = '';
    body.appendChild(el('p', { 'class': 'cpr-empty', text: 'Loading the prompts\u2026' }));
    loadBank().then(function () {
      renderChips(); show(model.next());
      panel.querySelector('#fcPromptNext').focus();
    }).catch(function () {
      body.textContent = '';
      body.appendChild(el('p', { 'class': 'cpr-empty', text: 'The prompts could not be loaded just now. Check your connection and press the Prompt button again.' }));
      loading = null;
    });
  }
  function closePanel() {
    if (!panel) return;
    panel.hidden = true;
    document.body.classList.remove('cpr-open');
    if (opener && opener.focus && document.contains(opener)) opener.focus();
  }

  document.addEventListener('keydown', onKey, true);
  document.addEventListener('click', function (ev) {
    var t = ev.target && ev.target.closest ? ev.target.closest('#promptBtn') : null;
    if (t) { ev.preventDefault(); if (panel && !panel.hidden) closePanel(); else openPanel(); }
  });
  window.fcOpenPrompts = openPanel;
})();
