// Mobile menu
(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();

// Hide events that already happened (moved to "Past events" on the Events page)
(function () {
  var now = new Date();
  var today = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
  document.querySelectorAll('[data-events]').forEach(function (list) {
    var past = list.parentNode.querySelector('[data-past]');
    var pastItems = [];
    list.querySelectorAll('[data-date]').forEach(function (item) {
      if (item.getAttribute('data-date') < today) {
        if (past) { pastItems.unshift(item); } else { item.remove(); }
      }
    });
    if (past && pastItems.length) {
      pastItems.forEach(function (i) { past.appendChild(i); });
      past.closest('details').hidden = false;
    }
    if (list.hasAttribute('data-events') && list.tagName === 'UL') {
      // Home page: show only the next 3
      Array.prototype.slice.call(list.children, 3).forEach(function (i) { i.remove(); });
    }
    if (!list.querySelector('[data-date]')) {
      var empty = list.parentNode.querySelector('.empty');
      if (empty) empty.hidden = false;
      list.hidden = true;
    }
  });
})();
