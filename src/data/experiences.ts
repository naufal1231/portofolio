import type { Experience } from '../types';

// ─── EXPERIENCES — Data dari DatabaseSeeder.php ───
// Sumber: database/seeders/DatabaseSeeder.php (Seed #6)

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Internship Software Engineer',
    company: 'PT Teknografi Tri Cawanaska',
    description:
      'Mengembangkan sistem informasi berbasis web yang dirancang untuk membantu pengelolaan data club renang secara terpusat. Sistem ini mengintegrasikan data atlet, pelatih, keanggotaan, program latihan, serta riwayat aktivitas dalam satu platform sehingga proses administrasi dan pemantauan perkembangan atlet menjadi lebih terstruktur dan efisien.',
    yearStart: 2026,
    yearEnd: null,
    isCurrent: true,
    category: 'developer',
  },
  {
    id: '2',
    role: 'Freelance Developer',
    company: 'Freelance',
    description:
      'Mengerjakan berbagai project untuk klien perorangan maupun bisnis kecil hingga menengah. Fokus utama pada pengembangan sistem web fungsional, landing page, dan integrasi API pihak ketiga untuk meningkatkan efisiensi operasional bisnis.',
    yearStart: 2024,
    yearEnd: null,
    isCurrent: true,
    category: 'developer',
  }
];

export const devExperiences = experiences
  .filter((e) => e.category === 'developer')
  .sort((a, b) => b.yearStart - a.yearStart);
