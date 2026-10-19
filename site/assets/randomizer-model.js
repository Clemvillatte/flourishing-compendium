(function (root, factory) {
  const model = factory();
  if (typeof module === 'object' && module.exports) module.exports = model;
  else root.FCRandomizer = model;
})(typeof globalThis === 'object' ? globalThis : this, function () {
  'use strict';
  const EXTRA_TYPES = ['concept', 'theory', 'story', 'saying'];
  const LABELS = { concept: 'Concepts', theory: 'Theories', story: 'Stories', saying: 'Sayings' };
  function kindOf(entry) {
    if (entry.type === 'concept' &&
        ((entry.tags || []).includes('theory') ||
         ((entry._navigation || {}).primaryPath || []).includes('NAV-SHARED-THEORY'))) return 'theory';
    return entry.type;
  }
  function currentText(entry) {
    if (!entry || !entry.content || !entry.content.trim()) return null;
    const chunks = entry.content.split(/^##[ \t]+(.+?)[ \t]*\r?$/m);
    const out = { x: chunks[0].trim(), p: [], f: [], r: [], fresh: true, t: entry.title };
    const sections = { 'psychology parallels': 'p', 'philosophy parallels': 'f', practice: 'r' };
    for (let i = 1; i < chunks.length; i += 2) {
      const key = sections[chunks[i].toLowerCase()];
      if (key) {
        out[key] = chunks[i + 1].trim().split(/\n(?=- )|\n\s*\n/).map(s => s.replace(/^- /, '').trim()).filter(Boolean);
      } else {
        out.x += '\n\n## ' + chunks[i] + '\n\n' + chunks[i + 1].trim();
      }
    }
    return out;
  }
  function create(sourceBooks, wiki) {
    const byTarget = new Map();
    wiki.forEach(e => { byTarget.set(e.id, e); if (e.file) byTarget.set(e.file, e); });
    const books = sourceBooks.map(b => ({ ...b, e: b.e.map(e => ({ ...e })) }));
    const categoryCount = books.length;
    const memberships = new Map();
    const add = (id, category) => {
      if (!memberships.has(id)) memberships.set(id, new Set());
      memberships.get(id).add(category);
    };
    books.forEach((b, bi) => b.e.forEach(e => {
      if (e.w) add(e.w, bi);
      const current = byTarget.get(e.w);
      const text = currentText(current);
      if (text) Object.assign(e, text);
      e.kind = kindOf(current || {}) || (/Kernels/.test(b.bookFile) ? 'kernel' : 'principle');
      e.categories = new Set([bi]);
    }));
    const links = e => [...(e.content || '').matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)]
      .map(m => byTarget.get(m[1].trim())).filter(Boolean);
    // One-hop, explicit links only. Never infer a tradition from a word in the prose.
    const direct = new Map([...memberships].map(([id, cats]) => [id, new Set(cats)]));
    wiki.forEach(e => {
      const own = direct.get(e.id);
      links(e).forEach(target => {
        if (own) own.forEach(c => add(target.id, c));
        const targetCats = direct.get(target.id);
        if (targetCats) targetCats.forEach(c => add(e.id, c));
      });
    });
    EXTRA_TYPES.forEach(kind => {
      const entries = wiki.filter(e => kindOf(e) === kind).map((e, i) => ({
        n: i + 1, w: e.id, t: e.title, x: e.content || '', c: '',
        p: [], f: [], r: [], kind, wiki: true,
        categories: memberships.get(e.id) || new Set()
      }));
      books.push({ id: 'wiki-' + kind, vol: 'Companion', volFile: '',
        book: LABELS[kind], bookFile: '', extra: true, e: entries });
    });
    const categories = books.slice(0, categoryCount).map((b, i) => {
      const first = b.e.map(e => byTarget.get(e.w)).find(Boolean);
      const path = first && (first._navigation || {}).primaryPath || [];
      const node = byTarget.get(path[path.length - 1]);
      // The current psychology principles share a legacy philosophy path; their
      // own book names are the authoritative category labels.
      const label = b.id.startsWith('pack5-') ? b.bookFile.replace(/^[A-Z]+ — /, '')
        : node ? node.title : b.book.replace(/^Book [IVXLC]+ — /, '');
      return { index: i, label, count: b.e.length, volume: b.vol.split(' — ')[0] };
    });
    return { books, categories, categoryCount };
  }
  function matches(entry, selected, enabled, totalCategories, layer) {
    if (!['principle', 'kernel'].includes(entry.kind) && !enabled.has(entry.kind)) return false;
    if (!selected.size) return false;
    if (selected.size !== totalCategories && ![...entry.categories].some(c => selected.has(c))) return false;
    return !layer || entry.c === layer;
  }
  return { create, kindOf, currentText, matches, EXTRA_TYPES, LABELS };
});
