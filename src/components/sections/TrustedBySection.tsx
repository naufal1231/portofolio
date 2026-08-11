import { brands } from '../../data/brands';
import RevealWrapper from '../ui/RevealWrapper';

/**
 * TrustedBySection — Scrolling marquee strip of client brands
 * Converted from Blade marquee section with @foreach + CSS animation
 */
export default function TrustedBySection() {
  // Duplicate brands for seamless infinite loop
  const doubled = [...brands, ...brands];

  return (
    <section className="py-16 border-t border-b border-pg-border bg-pg-bg-card overflow-hidden">
      <RevealWrapper className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-pg-text-sec">
          — Dipercaya oleh klien &amp; organisasi —
        </p>
      </RevealWrapper>

      {/* Marquee container */}
      <div className="relative overflow-hidden">
        <div className="marquee-track">
          {doubled.map((brand, i) => (
            <div
              key={`${brand.abbr}-${i}`}
              className="flex items-center gap-2 mx-10 opacity-40 hover:opacity-70 transition-opacity grayscale hover:grayscale-0 cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-pg-border flex items-center justify-center text-xs font-bold text-pg-text-sec">
                {brand.abbr}
              </div>
              <span className="font-semibold text-sm text-pg-text whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
