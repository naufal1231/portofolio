import { devServices } from '../../data/services';
import RevealWrapper from '../ui/RevealWrapper';

// Map service icon names to Material Symbols
const iconMap: Record<string, string> = {
  terminal: 'terminal',
  account_tree: 'account_tree',
  shopping_cart: 'shopping_cart',
  devices: 'devices',
  build: 'build',
  dashboard: 'dashboard',
  rocket_launch: 'rocket_launch',
  public: 'public',
  badge: 'badge',
  memory: 'memory',
};

/**
 * ServicesSection — Services/pricing cards
 * Converted from Blade #services section with @forelse($devServices)
 */
export default function ServicesSection() {
  return (
    <section id="services" className="py-24 border-t border-pg-border">
      <div className="max-w-7xl mx-auto px-6">
        <RevealWrapper className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-pg-black">
            Layanan Jasa
          </h2>
        </RevealWrapper>

        <RevealWrapper className="grid lg:grid-cols-3 gap-8">
          {devServices.length === 0 ? (
            <p className="text-pg-text-sec col-span-3">Belum ada layanan terdaftar.</p>
          ) : (
            devServices.map((service) => (
              <div key={service.id} className="flex flex-col pg-card-interactive p-8 group">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform"
                  style={{ background: '#E8FFD1' }}
                >
                  <span
                    className="material-symbols-outlined text-3xl"
                    style={{ color: '#7AC500' }}
                  >
                    {iconMap[service.icon] ?? 'rocket_launch'}
                  </span>
                </div>

                <h3 className="font-bold text-2xl text-pg-black mb-4">{service.name}</h3>
                <p className="text-pg-text-sec mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>

                {service.priceEstimate && (
                  <div className="flex justify-between items-center pt-6 border-t border-pg-border">
                    <span className="text-xs font-medium uppercase tracking-wider text-pg-text-sec">
                      Estimasi
                    </span>
                    <span className="font-bold text-xl" style={{ color: '#7AC500' }}>
                      {service.priceEstimate}
                    </span>
                  </div>
                )}
              </div>
            ))
          )}
        </RevealWrapper>
      </div>
    </section>
  );
}
