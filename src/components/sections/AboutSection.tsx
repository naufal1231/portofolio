import { profile } from '../../data/profile';
import RevealWrapper from '../ui/RevealWrapper';

const aboutCards = [
  {
    icon: 'code',
    title: 'Clean Code',
    desc: 'SOLID & maintainable practices',
    bg: '#E8FFD1',
    color: '#7AC500',
  },
  {
    icon: 'account_tree',
    title: 'Scalable Arch',
    desc: 'Microservices & APIs',
    bg: '#EDE9FE',
    color: '#7C3AED',
  },
  {
    icon: 'devices',
    title: 'User-Centric UI',
    desc: 'Responsive & accessible design',
    bg: '#DBEAFE',
    color: '#2563EB',
  },
  {
    icon: 'bolt',
    title: 'High Performance',
    desc: '99.9% uptime, fast responses',
    bg: '#FEE2E2',
    color: '#DC2626',
  },
];

/**
 * AboutSection — About me section
 * Converted from Blade #about section
 */
export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <RevealWrapper className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-pg-black">
            Tentang Saya
          </h2>
        </RevealWrapper>

        <RevealWrapper className="grid md:grid-cols-2 gap-16 items-center mb-16">
          {/* Left: Bio text */}
          <div>
            <div className="min-h-[100px]">
              <p className="text-pg-text-sec text-lg leading-relaxed whitespace-pre-line">
                {profile.devAbout}
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <a href="#contact" className="btn-primary">Mari Berdiskusi →</a>
            </div>
          </div>

          {/* Right: Info cards */}
          <div className="grid grid-cols-2 gap-4">
            {aboutCards.map((card) => (
              <div key={card.title} className="pg-card-interactive p-6 group">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: card.bg }}
                >
                  <span className="material-symbols-outlined" style={{ color: card.color }}>
                    {card.icon}
                  </span>
                </div>
                <h3 className="font-bold text-pg-black text-sm mb-1">{card.title}</h3>
                <p className="text-pg-text-sec text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
