import { useEffect } from 'react';

/** Native scrolling with progressive, once-only reveals for static and filtered cards. */
export default function Motion({ reduced }: { reduced: boolean }) {
  useEffect(() => {
    if (reduced || !('IntersectionObserver' in window)) return;
    const main = document.querySelector('main');
    if (!main) return;
    const seen = new WeakSet<Element>();
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('motion-visible');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.06, rootMargin: '0px 0px -24px 0px' });
    const selector = '.section-heading, .project-card, .project-tile, .credential-card, .credentials-intro, .about-story, .about-capability-grid article, .skills-compact-list > div, .about-bottom, .contact-grid';
    const register = () => {
      main.querySelectorAll<HTMLElement>(selector).forEach((node, index) => {
        if (seen.has(node)) return;
        seen.add(node);
        const box = node.getBoundingClientRect();
        node.style.setProperty('--reveal-delay', `${(index % 3) * 65}ms`);
        node.classList.add('motion-item');
        if (box.top < window.innerHeight && box.bottom > 0) node.classList.add('motion-visible');
        else observer.observe(node);
      });
    };
    register();
    const mutations = new MutationObserver(register);
    mutations.observe(main, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      mutations.disconnect();
      main.querySelectorAll<HTMLElement>('.motion-item').forEach(node => {
        node.classList.remove('motion-item', 'motion-visible');
        node.style.removeProperty('--reveal-delay');
      });
    };
  }, [reduced]);
  return null;
}
