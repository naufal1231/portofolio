import { projects } from '../../data/projects';
import RevealWrapper from '../ui/RevealWrapper';

/**
 * WorksPreviewSection — Featured projects mosaic grid (take 4)
 * Converted from Blade section "Proyek Pilihan" with mosaic layout
 */
export default function WorksPreviewSection() {
  const featured = projects.slice(0, 4);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Green gradient background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none works-gradient"
        style={{ opacity: 0.85 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <RevealWrapper className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-pg-black">
              Proyek Pilihan
            </h2>
          </div>
          <a href="#projects" className="btn-primary mt-6 md:mt-0">
            Lihat Semua →
          </a>
        </RevealWrapper>

        {/* Mosaic grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project, index) => (
            <RevealWrapper
              key={project.id}
              className={`project-card rounded-3xl overflow-hidden bg-white border border-pg-border shadow-sm self-start ${
                index === 0 ? 'md:col-span-2 md:row-span-1' : ''
              } ${index === 3 ? 'md:col-span-2' : ''}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div
                className={`relative ${
                  index === 0 || index === 3 ? 'aspect-[16/7]' : 'aspect-[4/3]'
                } overflow-hidden bg-pg-bg-alt`}
              >
                {project.thumbnailUrl ? (
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    src={project.thumbnailUrl}
                    alt={project.title}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-pg-bg-alt to-pg-border">
                    <span className="material-symbols-outlined text-5xl" style={{ color: '#B6FF3C' }}>
                      laptop_mac
                    </span>
                    <span className="text-xs font-medium text-pg-text-sec">{project.title}</span>
                  </div>
                )}

                {/* Overlay with project name */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
                  <div>
                    <h3 className="font-bold text-white text-lg">{project.title}</h3>
                    {project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-medium text-white/80 bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
