var overlay = document.getElementById('modal-overlay');

function openPanel(name) {
  document.querySelectorAll('.modal-panel').forEach(function (p) { p.classList.remove('active'); });
  document.getElementById('panel-' + name).classList.add('active');
  overlay.classList.add('open');

  document.querySelectorAll('.nav-links button').forEach(function (b) {
    b.classList.toggle('is-open', b.dataset.panel === name);
  });
}
function closeModal() {
  overlay.classList.remove('open');
}
document.getElementById('modal-close').addEventListener('click', closeModal);
overlay.addEventListener('click', function (e) {
  if (e.target === overlay) closeModal();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});

(function () {
  var tone = document.getElementById('bg-tone');
  if (!tone) return;
  var events = ['click', 'touchstart', 'keydown', 'pointerdown'];

  function removeListeners() {
    events.forEach(function (ev) { document.removeEventListener(ev, startOnInteraction); });
  }
  function startOnInteraction() {
    var p = tone.play();
    if (p && p.then) {
      p.then(removeListeners).catch(function () {});
    } else {
      removeListeners();
    }
  }

  var attempt = tone.play();
  if (attempt && attempt.catch) {
    attempt.catch(function () {
      events.forEach(function (ev) { document.addEventListener(ev, startOnInteraction); });
    });
  }
})();
