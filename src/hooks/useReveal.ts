import { useEffect, useRef } from 'react';

/**
 * useReveal — Custom hook untuk scroll reveal animation
 * Menggantikan IntersectionObserver dari app.blade.php
 *
 * Usage:
 *   const ref = useReveal<HTMLDivElement>();
 *   <div ref={ref} className="reveal">...</div>
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe the element itself and all .reveal children
    if (el.classList.contains('reveal')) {
      observer.observe(el);
    }
    el.querySelectorAll('.reveal').forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * useSectionReveal — Init reveal on all .reveal elements within a parent ref
 * Useful for sections with multiple reveal elements
 */
export function useSectionReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const parent = ref.current;
    if (!parent) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    );

    parent.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}
