import type { Project } from '../types';

// ─── PROJECTS — Data dari DatabaseSeeder.php ───
// Sumber: database/seeders/DatabaseSeeder.php (Seed #9)

export const projects: Project[] = [
  {
    id: '1',
    title: 'Company Profile TTC',
    slug: 'company-profile-ttc',
    category: 'Company Profile',
    description:
      'Website company profile profesional yang dirancang untuk membangun identitas digital perusahaan, memperkenalkan layanan dan produk, serta meningkatkan kepercayaan calon pelanggan. Website dibuat dengan pendekatan modern, responsif, dan berorientasi pada pengalaman pengguna sehingga informasi perusahaan dapat disampaikan secara jelas dan menarik.',
    tags: ['HTML', 'Tailwind CSS', 'JS'],
    features: [
      'Interactive UI',
      'Responsive Design',
      'Company Overview',
      'Contacr & Inquiry',
    ],
    demoUrl: 'https://analytics-saas-demo.com',
    githubUrl: 'https://github.com/guntur-dev/saas-analytics',
    challenge:
      'Menyajikan informasi perusahaan yang cukup kompleks',
    solution:
      'Menyusun informasi berdasarkan prioritas pengguna dengan struktur navigasi yang sederhana dan hierarki konten yang jelas.',
    client: 'PT Teknografi Tri Cawanaska',
    year: 2026,
    isFeatured: true,
    thumbnailUrl: '/images/compro.png',
  },
  {
    id: '2',
    title: 'Sistem Database - Marabunta Swimming Club',
    slug: 'sistem-database-marabunta',
    category: 'Custom Web',
    description:
      'Sistem informasi berbasis web yang dirancang untuk membantu pengelolaan data club renang secara terpusat. Sistem ini mengintegrasikan data atlet, pelatih, keanggotaan, program latihan, serta riwayat aktivitas dalam satu platform sehingga proses administrasi dan pemantauan perkembangan atlet menjadi lebih terstruktur dan efisien.',
    tags: ['Laravel', 'Html', 'MySQL', 'CSS'],
    features: [
      'Dashboard Management',
      'Manajemen Data Atlet',
      'Riwayat Performa Atlet',
      'Authentication & Role Management',
    ],
    demoUrl: 'https://demo.e-commerce.com',
    githubUrl: 'https://github.com/guntur-dev/ecommerce-enterprise',
    challenge:
      'Mengelola data atlet yang saling berkaitan',
    solution:
      'Relational Database Structure',
    client: 'MARABUNTA SWIMMING CLUB',
    year: 2026,
    isFeatured: true,
    thumbnailUrl: '/images/internal.png',
  },
];

export const featuredProjects = projects.filter((p) => p.isFeatured);
