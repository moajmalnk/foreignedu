import { useEffect, useRef } from 'react';

const defaultOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px',
  delay: 0,
  direction: 'up',
  staggerChildren: 0,
};

export default function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const opts = { ...defaultOptions, ...options };
  const { direction, staggerChildren } = opts;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const classes = staggerChildren > 0 ? ['stagger-children'] : ['reveal'];
    if (staggerChildren === 0) {
      if (direction === 'left') classes.push('from-left');
      if (direction === 'right') classes.push('from-right');
    }
    el.classList.add(...classes);

    if (opts.delay) {
      el.style.transitionDelay = `${opts.delay}ms`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: opts.threshold,
        rootMargin: opts.rootMargin,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [opts.threshold, opts.rootMargin, opts.direction, opts.delay, staggerChildren]);

  return ref;
}
