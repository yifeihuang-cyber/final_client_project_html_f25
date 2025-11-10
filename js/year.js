document.addEventListener('DOMContentLoaded', function () {
  const y = String(new Date().getFullYear());
  document.querySelectorAll('.js-year').forEach(el => el.textContent = y);
});
