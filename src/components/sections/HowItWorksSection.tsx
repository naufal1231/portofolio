import RevealWrapper from '../ui/RevealWrapper';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Saya memahami kebutuhan, tujuan bisnis, dan kendala teknis Anda secara mendalam sebelum menulis satu baris kode pun.',
    cardClass: 'step-card-1',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Merancang arsitektur, database, dan UI/UX yang scalable. Iterasi cepat dengan feedback loop yang transparan.',
    cardClass: 'step-card-2',
  },
  {
    number: '03',
    title: 'Deliver',
    description:
      'Pengiriman tepat waktu, pengujian menyeluruh, deployment, dan dukungan pasca-launch untuk ketenangan pikiran Anda.',
    cardClass: 'step-card-3',
  },
];

/**
 * HowItWorksSection — 3-step process section
 * Hardcoded content from Blade (not from DB)
 */
export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-pg-bg-card border-t border-pg-border">
      <div className="max-w-7xl mx-auto px-6">
        <RevealWrapper className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-pg-black">
            Here's how it works
          </h2>
          <p className="text-pg-text-sec mt-4 max-w-lg mx-auto">
            Pendekatan saya dalam setiap project dari pemahaman kebutuhan hingga pengiriman produk akhir.
          </p>
        </RevealWrapper>

        {/* 3 steps */}
        <div className="relative">
          {/* Dotted connector line (desktop only) */}
          <div className="hidden md:block absolute top-[72px] left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] border-t-2 border-dashed border-pg-gray-5 z-0" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <RevealWrapper
                key={step.number}
                delay={(i as 0 | 1 | 2 | 3)}
                className={`pg-card-interactive ${step.cardClass} p-8 relative z-10`}
              >
                <span
                  className="text-6xl font-black mb-4 block"
                  style={{ color: '#B6FF3C' }}
                >
                  {step.number}
                </span>
                {/* Timeline dot (desktop) */}
                <div
                  className="hidden md:flex absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 items-center justify-center bg-white z-20"
                  style={{ borderColor: '#B6FF3C' }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: '#B6FF3C' }} />
                </div>
                <h3 className="font-bold text-2xl text-pg-black mb-3">{step.title}</h3>
                <p className="text-pg-text-sec leading-relaxed text-sm">{step.description}</p>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
