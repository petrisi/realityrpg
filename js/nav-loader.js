/* nav-loader.js — fetch partials and inject them into placeholder slots.
 *
 * Each page needs:
 *   <div id="slot-header"></div>
 *   <div id="slot-footer"></div>
 *   <script src="js/nav-loader.js"></script>
 *
 * The header partial contains <nav id="site-nav"> which is then populated
 * with partials/nav.html. The active nav link is auto-highlighted.
 */
(function () {
  'use strict';

  /* Resolve the project root from the page's own URL
   * (strip the page filename to get the directory containing js/ and partials/) */
  function getBase() {
    var a = document.createElement('a');
    a.href = location.href;
    a.pathname = a.pathname.replace(/\/[^/]*$/, '');
    return a.pathname + '/';
  }

  var projectRoot = getBase();

  /* Generic fetch-and-replace: fetch a partial, parse it, inject its
   * contents into the element with the given id and remove the slot. */
  async function loadSlot(slotId, partialPath) {
    var slot = document.getElementById(slotId);
    if (!slot) return;
    try {
      var url = projectRoot + partialPath + '?v=' + Date.now();
      var resp = await fetch(url);
      if (!resp.ok) throw new Error(partialPath + ' → ' + resp.status);
      var text = await resp.text();
      var parser = new DOMParser();
      var doc = parser.parseFromString(text, 'text/html');
      var frag = document.createDocumentFragment();
      var bodyChildren = doc.body.childNodes;
      for (var i = 0; i < bodyChildren.length; i++) {
        frag.appendChild(document.importNode(bodyChildren[i], true));
      }
      slot.parentNode.replaceChild(frag, slot);
    } catch (e) {
      console.warn('[nav-loader] failed to load ' + partialPath, e);
    }
  }

  /* Load nav.html into <nav id="site-nav"> */
  async function loadNav() {
    var nav = document.getElementById('site-nav');
    if (!nav) return;
    try {
      var url = projectRoot + 'partials/nav.html?v=' + Date.now();
      var resp = await fetch(url);
      if (!resp.ok) throw new Error('nav.html → ' + resp.status);
      nav.innerHTML = await resp.text();
    } catch (e) {
      console.warn('[nav-loader] failed to load nav.html', e);
    }
  }

  /* Highlight the nav link for the current page.
   *
   * Strategy:
   *   1. Exact match on href (e.g. page = core-mechanics.html → href="core-mechanics.html")
   *   2. If no exact match, check a fallback map for known aliases
   *      (e.g. index-poc.html → index.html during POC testing)
   *   3. If still nothing, leave no active state (better than wrong highlight)
   */
  function setActiveLink() {
    var page = (location.pathname.split('/').pop()) || 'index.html';

    /* Try exact match first */
    var link = document.querySelector('.site-nav a[href="' + page + '"]');

    /* Fallback: map known test/alias pages to their real nav target */
    if (!link) {
      var aliasMap = {
        'index-poc.html': 'index.html'
      };
      var real = aliasMap[page];
      if (real) {
        link = document.querySelector('.site-nav a[href="' + real + '"]');
      }
    }

    if (link) link.classList.add('active');
  }

  /* Bootstrap */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      loadSlot('slot-header', 'partials/header.html')
        .then(function () {
          return loadSlot('slot-footer', 'partials/footer.html');
        })
        .then(loadNav)
        .then(setActiveLink);
    });
  } else {
    loadSlot('slot-header', 'partials/header.html')
      .then(function () {
        return loadSlot('slot-footer', 'partials/footer.html');
      })
      .then(loadNav)
      .then(setActiveLink);
  }
})();
