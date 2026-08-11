import { useState } from 'react';
import { useScrolled } from '../hooks/useScrolled';

const navLinks = [
  { label: 'Tentang', href: '#about' },
  { label: 'Keahlian', href: '#skills' },
  { label: 'Layanan', href: '#services' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Pengalaman', href: '#experience' },
];

/**
 * Navbar — Fixed top navigation
 * Converted from Blade + Alpine.js to React useState
 * - Scrolled state: useScrolled hook (replaces @scroll.window Alpine)
 * - Mobile menu: useState (replaces x-data mobileMenuOpen)
 * - Transitions: CSS classes (replaces x-transition)
 */
export default function Navbar() {
  const scrolled = useScrolled(40);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    // Smooth scroll to section
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-pg-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">

          {/* Brand / Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="flex items-center gap-2 font-bold text-xl tracking-tight text-pg-accent-dark hover:opacity-75 transition-opacity"
          >
            GUNTUR
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-sm font-medium text-pg-text-sec hover:text-pg-black transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="btn-primary text-sm hidden md:inline-flex"
            >
              Hubungi Saya →
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-pg-text-sec hover:text-pg-black rounded-lg hover:bg-pg-bg-alt transition-all"
              aria-label="Toggle mobile menu"
              id="mobile-menu-btn"
            >
              <span className="material-symbols-outlined">
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden bg-white border-b border-pg-border px-6 py-4 space-y-3 overflow-hidden transition-all duration-200 ${
            mobileOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 py-0'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="block text-sm font-medium text-pg-text-sec hover:text-pg-black py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="btn-primary w-full justify-center mt-2"
          >
            Hubungi Saya →
          </a>
        </div>
      </div>
    </header>
  );
}
