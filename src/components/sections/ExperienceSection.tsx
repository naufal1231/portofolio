import { devExperiences } from '../../data/experiences';
import RevealWrapper from '../ui/RevealWrapper';

/**
 * ExperienceSection — Work experience timeline
 * Converted from Blade #experience with alternating timeline layout
 */
export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-pg-bg-card border-t border-pg-border">
      <div className="max-w-7xl mx-auto px-6">
        <RevealWrapper className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-pg-black">
            Pengalaman Kerja
          </h2>
        </RevealWrapper>

        {/* Timeline */}
        <RevealWrapper className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-pg-gray-5">
          {devExperiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-pg-border bg-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 timeline-dot-dev">
                <span className="w-3 h-3 rounded-full" style={{ background: '#B6FF3C' }} />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] pg-card-interactive p-8">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div className="font-bold text-lg" style={{ color: '#7AC500' }}>
                    {exp.company}
                  </div>
                  <time className="text-xs font-medium text-pg-text-sec px-3 py-1 rounded-full bg-pg-bg-alt border border-pg-border">
                    {exp.yearStart}
                    {exp.yearEnd ? ` – ${exp.yearEnd}` : ' – Present'}
                  </time>
                </div>
                <h4 className="font-bold text-pg-black text-base mb-2">{exp.role}</h4>
                <p className="text-pg-text-sec leading-relaxed text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </section>
  );
}
