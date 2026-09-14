/**
 * Shared scroll plumbing for the redesigned pages.
 *
 * Everything runs off a single rAF-throttled, passive scroll/resize listener so
 * the timeline fill, progress bar, dots and parallax all update in one frame.
 */

export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Registers `frame` on scroll and resize, rAF-throttled, and runs it once
 * immediately so the first paint is already correct.
 */
export function onScrollFrame(frame: () => void): void {
  let ticking = false;

  const handler = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      frame();
      ticking = false;
    });
  };

  window.addEventListener('scroll', handler, { passive: true });
  window.addEventListener('resize', handler, { passive: true });
  frame();
}

/**
 * Reveals every `[data-reveal]` element whose top has crossed the threshold.
 *
 * A scroll-handler sweep rather than an IntersectionObserver: IO can miss
 * elements that are scrolled past between callbacks. Each element is revealed
 * at most once; `onReveal` fires only on that transition.
 */
export function makeRevealSweep(
  threshold = 0.92,
  onReveal?: (el: HTMLElement) => void,
): () => void {
  const done = new WeakSet<HTMLElement>();

  return () => {
    const limit = window.innerHeight * threshold;
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      if (done.has(el)) return;
      if (el.getBoundingClientRect().top >= limit) return;
      done.add(el);
      el.classList.add('is-revealed');
      onReveal?.(el);
    });
  };
}

/** Hero titles drift up as the page scrolls. */
export function parallaxHero(el: HTMLElement | null, rate = -0.15): () => void {
  if (!el || prefersReducedMotion()) return () => {};
  return () => {
    el.style.transform = `translate3d(0, ${window.scrollY * rate}px, 0)`;
  };
}

/**
 * Counts an element from 0 to `target` over `duration`, ease-out-cubic,
 * preserving the prefix/suffix of the original string. Runs once per element.
 */
export function countUp(el: HTMLElement, duration = 1100): void {
  if (el.dataset.counted === '1') return;
  el.dataset.counted = '1';

  const target = Number(el.dataset.countTarget);
  if (!Number.isFinite(target) || target <= 0) return;

  const prefix = el.dataset.countPrefix ?? '';
  const suffix = el.dataset.countSuffix ?? '';
  const format = (n: number) => prefix + n.toLocaleString('en-US') + suffix;

  if (prefersReducedMotion()) {
    el.textContent = format(target);
    return;
  }

  const start = performance.now();
  const step = (now: number) => {
    const k = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - k, 3);
    el.textContent = format(Math.round(target * eased));
    if (k < 1) requestAnimationFrame(step);
  };

  el.textContent = format(0);
  requestAnimationFrame(step);
}
