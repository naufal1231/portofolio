import { devTestimonials } from '../../data/testimonials';
import RevealWrapper from '../ui/RevealWrapper';

/**
 * TestimonialsSection — Client testimonials grid
 * Converted from Blade #testimonials section with star ratings
 */
export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 border-t border-pg-border">
      <div className="max-w-7xl mx-auto px-6">
        <RevealWrapper className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-pg-black">
            Ulasan &amp; Testimoni
          </h2>
        </RevealWrapper>

        <RevealWrapper className="grid md:grid-cols-2 gap-8">
          {devTestimonials.map((testi) => (
            <div
              key={testi.id}
              className="pg-card-interactive p-8 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Big quote mark */}
              <span className="absolute top-4 right-6 text-8xl font-serif leading-none select-none text-lime-200">
                "
              </span>

              <div className="relative z-10">
                {/* Star rating */}
                <div className="flex text-amber-400 gap-1 mb-5">
                  {Array.from({ length: testi.rating }).map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[16px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>

                <p className="text-pg-black italic leading-relaxed text-base mb-6">
                  "{testi.message}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-5 border-t border-pg-border relative z-10">
                {testi.avatarUrl ? (
                  <img
                    src={testi.avatarUrl}
                    alt={testi.clientName}
                    className="w-12 h-12 rounded-full object-cover border-2 border-pg-border"
                  />
                ) : (
                  <div
                    className="w-12 h-12 rounded-full border-2 border-pg-border flex items-center justify-center font-bold text-sm"
                    style={{ background: '#E8FFD1', color: '#7AC500' }}
                  >
                    {testi.clientName.substring(0, 2)}
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-pg-black text-sm">{testi.clientName}</h4>
                  <p className="text-pg-text-sec text-xs">
                    {testi.role}
                    {testi.company ? ` · ${testi.company}` : ''}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </section>
  );
}
