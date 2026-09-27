
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

