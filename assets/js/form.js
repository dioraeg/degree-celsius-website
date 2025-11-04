export function formEnhancements({ form }) {
  if (!form) return;
  const btn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', () => {
    if (btn) {
      btn.disabled = true;
      btn.setAttribute('aria-busy', 'true');
      btn.textContent = 'Sending…';
    }
  });
}
