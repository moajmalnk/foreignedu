import { useState, useEffect, useRef } from 'react';

function easeOutQuart(t) {
  return 1 - (1 - t) ** 4;
}

export default function useCountUp(target, duration = 2000, start = 0) {
  const [displayValue, setDisplayValue] = useState(start);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || hasAnimated.current) return;
          hasAnimated.current = true;

          const startTime = performance.now();
          const diff = target - start;

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutQuart(progress);
            const value = Math.round(start + diff * eased);
            setDisplayValue(value);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, start]);

  return { ref, displayValue };
}
