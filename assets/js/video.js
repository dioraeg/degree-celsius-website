export function respectReducedData({ selector }) {
  const videos = document.querySelectorAll(selector);
  if (!videos.length) return;

  const saveData = navigator.connection?.saveData === true;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (saveData || prefersReducedMotion) {
    videos.forEach(v => {
      // Avoid fetching extra data until user presses play
      v.preload = 'none';
    });
  }
}
