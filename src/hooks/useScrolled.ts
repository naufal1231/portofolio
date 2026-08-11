import { useState, useEffect } from 'react';

/**
 * useScrolled — Detects whether page has been scrolled past a threshold
 * Menggantikan Alpine.js x-data="{ scrolled: false }" @scroll.window di Navbar
 */
export function useScrolled(threshold = 40): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}
