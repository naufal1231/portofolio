import { devSkills } from '../../data/skills';
import SkillBar from '../ui/SkillBar';
import RevealWrapper from '../ui/RevealWrapper';

/**
 * SkillsSection — Skills grid with progress bars
 * Converted from Blade #skills section with @foreach($devSkills)
 */
export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-pg-bg-card border-t border-pg-border">
      <div className="max-w-7xl mx-auto px-6">
        <RevealWrapper className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-pg-black">
            Keahlian &amp; Pengalaman
          </h2>
        </RevealWrapper>

        <RevealWrapper className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devSkills.map((skill) => {
            const levelLabel =
              skill.level === 'expert'
                ? 'Expert'
                : skill.level === 'advanced'
                ? 'Advanced'
                : skill.percentage >= 60
                ? 'Mid'
                : 'Beginner';

            return (
              <div key={skill.id} className="pg-card-interactive p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-pg-black text-base">{skill.name}</span>
                  <span
                    className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase"
                    style={{ background: '#E8FFD1', color: '#7AC500' }}
                  >
                    {levelLabel}
                  </span>
                </div>

                {skill.percentage > 0 && (
                  <>
                    <SkillBar percentage={skill.percentage} />
                    <p className="mt-2 text-right text-xs text-pg-text-sec font-medium">
                      {skill.percentage}%
                    </p>
                  </>
                )}
              </div>
            );
          })}
        </RevealWrapper>
      </div>
    </section>
  );
}
