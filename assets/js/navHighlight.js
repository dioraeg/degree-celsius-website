export function navHighlight({ selector, navSelector }) {
  const sections = [...document.querySelectorAll(selector)];
  const links = [...document.querySelectorAll(navSelector)];
  if (!sections.length || !links.length || !('IntersectionObserver' in window)) return;

  const map = new Map(
    links
      .filter(a => a.hash)
      .map(a => [a.hash.replace('#',''), a])
  );

  const setActive = id => {
    links.forEach(a => a.removeAttribute('aria-current'));
    const link = map.get(id);
    if (link) link.setAttribute('aria-current', 'page');
  };

  const io = new IntersectionObserver(entries => {
    // Pick the most visible section near the top
    const best = entries
      .filter(e => e.isIntersecting)
      .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (best) setActive(best.target.id);
  }, { rootMargin: '-20% 0px -70% 0px', threshold: [0.25, 0.5, 0.75] });

  sections.forEach(s => io.observe(s));
}
