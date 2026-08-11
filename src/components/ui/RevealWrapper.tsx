import { useEffect, useRef } from 'react';

interface RevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: 0 | 1 | 2 | 3;
  tag?: string;
}

const delayClasses: Record<number, string> = {
  0: '',
  1: 'reveal-delay-1',
  2: 'reveal-delay-2',
  3: 'reveal-delay-3',
};

/**
 * RevealWrapper — Wraps children with scroll-reveal animation
 * Equivalent to className="reveal" + IntersectionObserver from app.blade.php
 */
export default function RevealWrapper({
  children,
  className = '',
  style,
  delay = 0,
}: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

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

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delayClasses[delay] ?? '';
  const fullClass = `reveal ${delayClass} ${className}`.trim();

  return (
    <div ref={ref} className={fullClass} style={style}>
      {children}
    </div>
  );
}
