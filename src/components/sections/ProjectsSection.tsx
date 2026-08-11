import { projects } from '../../data/projects';
import RevealWrapper from '../ui/RevealWrapper';

/**
 * ProjectsSection — Full projects list with detailed cards
 * Converted from Blade #projects section with @forelse($projects)
 * Grid: every 3rd project spans full width (like original)
 */
export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 border-t border-pg-border">
      <div className="max-w-7xl mx-auto px-6">
        <RevealWrapper className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-pg-black">
              Selected Works
            </h2>
          </div>
        </RevealWrapper>

        {projects.length === 0 ? (
          <p className="text-pg-text-sec col-span-2">Belum ada proyek.</p>
        ) : (
          <RevealWrapper className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group project-card ${
                  index % 3 === 0 ? 'md:col-span-2' : ''
                }`}
              >
                {/* Thumbnail */}
                <div
                  className={`relative ${
                    index % 3 === 0 ? 'aspect-[16/6]' : 'aspect-[4/3]'
                  } rounded-3xl overflow-hidden mb-5 border border-pg-border bg-pg-bg-alt`}
                >
                  {project.thumbnailUrl ? (
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={project.thumbnailUrl}
                      alt={project.title}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center flex-col gap-3">
                      <span
                        className="material-symbols-outlined text-6xl"
                        style={{ color: '#B6FF3C' }}
                      >
                        laptop_mac
                      </span>
                      <span className="text-sm font-medium text-pg-text-sec">
                        {project.title}
                      </span>
                    </div>
                  )}

                  {/* Tech tags overlay */}
                  <div className="absolute top-4 right-4 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-pg-black border border-pg-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Index number */}
                  <div className="absolute bottom-4 left-4 font-mono text-white/40 text-lg font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Project info */}
                <div className="px-1">
                  <h3 className="font-bold text-2xl text-pg-black mb-2">{project.title}</h3>
                  <p className="text-pg-text-sec leading-relaxed text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.category && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-pg-bg-alt text-pg-text-sec border border-pg-border">
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </span>
                    )}
                    {project.year && (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-pg-bg-alt text-pg-text-sec border border-pg-border">
                        {project.year}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-6">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-semibold text-sm text-pg-black hover:gap-2.5 transition-all"
                      >
                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-semibold text-sm text-pg-text-sec hover:text-pg-black transition-all"
                      >
                        <span className="material-symbols-outlined text-[18px]">code</span>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </RevealWrapper>
        )}
      </div>
    </section>
  );
}
