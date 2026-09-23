// popup modal for nav-strip buttons — no page scroll, hero never moves
var overlay = document.getElementById('modal-overlay');

function openPanel(name) {
  document.querySelectorAll('.modal-panel').forEach(function (p) { p.classList.remove('active'); });
  document.getElementById('panel-' + name).classList.add('active');
  overlay.classList.add('open');
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

// Download CV is a plain link to assets/Shoaib_Ikram_CV.pdf with the
// download attribute — no JavaScript needed for it on a normal site.
