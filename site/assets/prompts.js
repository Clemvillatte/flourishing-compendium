/* Creative sparks: a bank of short, open didactic sparks for the writer.
   Two parts in one file, like randomizer-model.js:
   1. FCPrompts (pure model): the shuffle bag, the family filter, history. Testable in Node.
   2. The panel (browser only): the "Spark" entry in the Writing Editor (the srcdoc iframe),
      not the home page. Sparks are drawn at random, and each carries live links back to
      the principles, kernels and dossiers a spark grows from.
   The bank lives in prompts-bank.json and is authored offline against
   docs/enrichment/CREATIVE-PROMPT-GENERATION.md. Nothing is generated at runtime. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.FCPrompts = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  /* Fisher-Yates over a copy, using the supplied rng (0 <= r < 1). */
  function shuffle(list, rng) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* A shuffle bag: every spark in the current filter is shown once before any repeats,
     and the first spark of a new round never equals the last one shown. */
  function create(prompts, rng) {
    rng = rng || Math.random;
    var all = (prompts || []).filter(function (p) { return p && p.id && p.text; });
    var family = 'all';
    var bag = [];
    var history = [];   /* ids shown, oldest first */
    var cursor = -1;    /* position inside history while stepping back and forward */

    function pool() {
      return family === 'all' ? all : all.filter(function (p) { return p.family === family; });
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
    function setFamily(f) {
      family = (f === 'all' || all.some(function (p) { return p.family === f; })) ? f : 'all';
      bag = [];
      /* Stepping forward from an older spark starts fresh in the new filter. */
      cursor = history.length - 1;
    }
    return {
      next: next,
      prev: prev,
      setFamily: setFamily,
      family: function () { return family; },
      size: function () { return pool().length; },
      canGoBack: function () { return cursor > 0; },
      current: function () { return cursor >= 0 ? byId(history[cursor]) : null; },
      families: function () {
        var seen = {};
        var out = [];
        all.forEach(function (p) {
          if (p.family && !seen[p.family]) { seen[p.family] = true; out.push(p.family); }
        });
        return out;
      }
    };
  }

  /* Plain text for the clipboard. */
  function asPlainText(p) {
    if (!p) return '';
    return p.text || '';
  }

  return { create: create, shuffle: shuffle, asPlainText: asPlainText };
});

/* ---------------- browser panel (inside the Writing Editor srcdoc iframe) ---------------- */
(function () {
  if (typeof document === 'undefined') return;
  var FCP = (typeof self !== 'undefined' ? self : window).FCPrompts;
  if (!FCP) return;

  var bankUrl = 'assets/prompts-bank.json';
  var model = null, loading = null, panel = null;

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

  /* Resolve a principle or kernel id via the parent compendium (it holds wikiData).
     The parent replies on the same channel with a 'spark-card' message carrying the
     card's title and a fragment for in-app navigation; a deleted card is simply left out. */
  var pendingLookup = 0;
  function lookupCard(kind, id) {
    return new Promise(function (resolve) {
      var want = kind + ':' + id;
      var chan = function (ev) {
        var d = ev.data;
        if (d && d.type === 'spark-card' && d.for === want) {
          window.removeEventListener('message', chan);
          resolve(d.card || null);
        }
      };
      window.addEventListener('message', chan);
      pendingLookup++;
      parent.postMessage({ type: 'spark-card-lookup', kind: kind, ref: id }, '*');
      /* guard against no parent / no reply */
      setTimeout(function () {
        window.removeEventListener('message', chan);
        resolve(null);
      }, 2500);
    });
  }

  /* Build the Spark panel inside the editor iframe's document. */
  function build() {
    if (panel) return panel;
    panel = el('div', { id: 'fcSparkPanel', role: 'complementary', 'aria-labelledby': 'fcSparkHeading', hidden: '' });
    var head = el('div', { 'class': 'sp-head' });
    head.appendChild(el('h2', { id: 'fcSparkHeading', text: 'A spark' }));
    var close = el('button', { type: 'button', 'class': 'sp-close', 'aria-label': 'Hide the spark panel', text: '\u00d7' });
    close.addEventListener('click', closePanel);
    head.appendChild(close);
    panel.appendChild(head);

    var chips = el('div', { 'class': 'sp-chips', role: 'group', 'aria-label': 'Theme' });
    panel.appendChild(chips);

    var body = el('div', { 'class': 'sp-body', 'aria-live': 'polite', 'aria-atomic': 'true' });
    panel.appendChild(body);

    var why = el('details', { 'class': 'sp-why' });
    why.appendChild(el('summary', { text: 'Explore connections' }));
    why.appendChild(el('div', { 'class': 'sp-why-body' }));
    panel.appendChild(why);

    var bar = el('div', { 'class': 'sp-actions' });
    var prevBtn = el('button', { type: 'button', 'class': 'sp-btn', id: 'fcSparkPrev', text: 'Previous' });
    var nextBtn = el('button', { type: 'button', 'class': 'sp-btn sp-primary', id: 'fcSparkNext', text: 'Another spark' });
    var copyBtn = el('button', { type: 'button', 'class': 'sp-btn', id: 'fcSparkCopy', text: 'Copy' });
    bar.appendChild(prevBtn); bar.appendChild(nextBtn); bar.appendChild(copyBtn);
    panel.appendChild(bar);

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
    return panel;
  }

  function renderChips() {
    var chips = panel.querySelector('.sp-chips');
    chips.textContent = '';
    ['all'].concat(model.families()).forEach(function (f) {
      var b = el('button', { type: 'button', 'class': 'sp-chip', 'data-family': f, 'aria-pressed': String(model.family() === f), text: f });
      b.addEventListener('click', function () {
        model.setFamily(f);
        renderChips();
        show(model.next());
      });
      chips.appendChild(b);
    });
  }

  function show(p) {
    var body = panel.querySelector('.sp-body');
    var whyBox = panel.querySelector('.sp-why');
    var prevBtn = panel.querySelector('#fcSparkPrev');
    body.textContent = '';
    if (!p) {
      body.appendChild(el('p', { 'class': 'sp-empty', text: 'There is no spark to show for this theme yet.' }));
      whyBox.hidden = true;
      prevBtn.disabled = !(model && model.canGoBack());
      return;
    }
    whyBox.hidden = false;
    whyBox.open = false;
    body.appendChild(el('p', { 'class': 'sp-kind', text: p.family }));
    body.appendChild(el('p', { 'class': 'sp-text', text: p.text }));
    if (p.sensitive) {
      body.appendChild(el('p', { 'class': 'sp-care', text: 'This is a writing spark, not therapy. Skip anything that sits too close.' }));
    }
    var wb = whyBox.querySelector('.sp-why-body');
    wb.textContent = '';
    var jobs = (p.connections || []).map(function (c) {
      return lookupCard(c.kind === 'kernel' ? 'kernel' : 'principle', c.ref).then(function (card) {
        if (!card) return;
        var line = el('p', { 'class': 'sp-conn' });
        if (c.why) line.appendChild(el('span', { 'class': 'sp-conn-why', text: c.why + ' ' }));
        var a = el('a', { href: card.fragment || '#', text: card.title || c.ref });
        a.addEventListener('click', function (ev) {
          ev.preventDefault();
          parent.postMessage({ type: 'spark-navigate', fragment: card.fragment || '' }, '*');
        });
        line.appendChild(a);
        wb.appendChild(line);
      });
    });
    if (p.dossier) {
      jobs.push(lookupCard('dossier', p.dossier).then(function (card) {
        if (!card) return;
        var dl = el('p', { 'class': 'sp-conn' });
        var da = el('a', { href: card.fragment || '#', text: 'Dossier: ' + card.title });
        da.addEventListener('click', function (ev) {
          ev.preventDefault();
          parent.postMessage({ type: 'spark-navigate', fragment: card.fragment || '' }, '*');
        });
        dl.appendChild(da);
        wb.appendChild(dl);
      }));
    }
    Promise.all(jobs).then(function () { prevBtn.disabled = !model.canGoBack(); });
    prevBtn.disabled = !model.canGoBack();
  }

  function openPanel() {
    if (!panel) build();
    panel.hidden = false;
    var body = panel.querySelector('.sp-body');
    if (model) { renderChips(); if (!model.current()) show(model.next()); else show(model.current()); panel.querySelector('#fcSparkNext').focus(); return; }
    body.textContent = '';
    body.appendChild(el('p', { 'class': 'sp-empty', text: 'Loading the sparks\u2026' }));
    loadBank().then(function () {
      renderChips(); show(model.next());
      panel.querySelector('#fcSparkNext').focus();
    }).catch(function () {
      body.textContent = '';
      body.appendChild(el('p', { 'class': 'sp-empty', text: 'The sparks could not be loaded just now. Check your connection and press the Spark button again.' }));
      loading = null;
    });
  }
  function closePanel() {
    if (!panel) return;
    panel.hidden = true;
  }

  /* The Spark entry lives in the editor iframe, wired from the parent via postMessage.
     The parent (site/assets/app.js) calls window.fcSparkOpen on the iframe. */
  window.fcSparkOpen = function () { openPanel(); };
  window.fcSparkClose = function () { closePanel(); };
  window.fcSparkIsOpen = function () { return panel && !panel.hidden; };
})();
