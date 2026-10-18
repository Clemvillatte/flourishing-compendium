/* ═══════════════════════════════════════════════════════════════
   BOOT LOADER — The Flourishing Compendium
   Fetches the gzipped datasets, decompresses them, assigns the
   window.* globals the app expects, then loads app + extras
   scripts in their original order. ═══════════════════════════════ */
(function () {
  'use strict';

  var splash = document.getElementById('bootSplash');
  var splashMsg = document.getElementById('bootSplashMsg');

  function fail(msg) {
    if (splashMsg) {
      splashMsg.textContent = 'Could not open the library — ' + msg;
      splashMsg.classList.add('err');
    }
    if (window.console && console.error) console.error('[boot]', msg);
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.async = false;
      s.onload = resolve;
      s.onerror = function () { reject(new Error('failed to load ' + src)); };
      document.head.appendChild(s);
    });
  }

  function loadDataset(name, url) {
    return fetch(url)
      .then(function (r) {
        if (!r.ok) throw new Error(url + ' → HTTP ' + r.status);
        return r.arrayBuffer();
      })
      .then(function (buf) {
        var stream = new Blob([buf]).stream().pipeThrough(new DecompressionStream('gzip'));
        return new Response(stream).text();
      })
      .then(function (txt) {
        window[name] = JSON.parse(txt);
      });
  }

  if (!window.DecompressionStream || !window.fetch || !window.Promise) {
    fail('this browser is too old. Please update to a recent version of Chrome, Edge, Firefox or Safari.');
    return;
  }

  var VER = window.FC_VER ? '?v=' + window.FC_VER : '';

  var t0 = Date.now();
  Promise.all([
    loadDataset('wikiData', 'data/wikiData.json.gz' + VER),
    loadDataset('randData', 'data/randData.json.gz' + VER),
    loadDataset('fcAuthored', 'data/fcAuthored.json.gz' + VER)
  ])
    .then(function () { return loadScript('assets/app.js' + VER); })
    .then(function () { return loadScript('assets/extras.js' + VER); })
    .then(function () { return loadScript('assets/graph.js' + VER); })
    .then(function () {
      // give the first paint a beat so the view swap doesn't flash
      var wait = Math.max(0, 250 - (Date.now() - t0));
      setTimeout(function () {
        if (splash) {
          splash.classList.add('done');
          setTimeout(function () { if (splash.parentNode) splash.parentNode.removeChild(splash); }, 500);
        }
      }, wait);
    })
    .catch(function (e) {
      fail((e && e.message) || 'unknown error');
    });
})();
