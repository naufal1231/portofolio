import type { Service } from '../types';

// ─── SERVICES — Data dari DatabaseSeeder.php ───
// Sumber: database/seeders/DatabaseSeeder.php (Seed #8)

export const services: Service[] = [
  // Developer Services
  {
    id: '1',
    name: 'Aplikasi Web Kustom & Dashboard',
    description:
      'Membangun aplikasi web interaktif, SaaS dashboard, atau platform internal bisnis dengan integrasi API pihak ketiga.',
    category: 'developer',
    priceEstimate: 'Rp xx.000.000+',
    icon: 'terminal',
    isActive: true,
  },
  {
    id: '2',
    name: 'E-Commerce Platform & POS',
    description:
      'Membangun toko online lengkap dengan payment gateway (Midtrans/Xendit), kalkulasi ongkir otomatis, dan sistem kasir.',
    category: 'developer',
    priceEstimate: 'Rp xx.000.000+',
    icon: 'shopping_cart',
    isActive: true,
  },
  {
    id: '3',
    name: 'Website Company Profile & Landing Page',
    description:
      'Website representatif yang cepat, ramah SEO, dan modern untuk mengenalkan brand atau produk Anda ke dunia.',
    category: 'developer',
    priceEstimate: 'Rp x00.000+',
    icon: 'public',
    isActive: true,
  },
];

export const devServices = services.filter(
  (s) => s.category === 'developer' && s.isActive
);
