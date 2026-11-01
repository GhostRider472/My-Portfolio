import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently in view using IntersectionObserver.
 * Returns the id of the active section.
 */
export function useScrollSpy(sectionIds: string[], offset = 100): string {
  const [active, setActive] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        {
          // Trigger when section's top passes the offset threshold
          rootMargin: `-${offset}px 0px -${window.innerHeight - offset - 1}px 0px`,
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds, offset]);

  return active;
}
