import type { Testimonial } from '../types';

// ─── TESTIMONIALS — Data dari DatabaseSeeder.php ───
// Sumber: database/seeders/DatabaseSeeder.php (Seed #13)

export const testimonials: Testimonial[] = [
  {
    id: '1',
    clientName: 'Ibra Alfahro',
    role: 'Mahasiswa',
    company: 'Mahasiswa',
    message:
      'Pengembangan sistem web berjalan dengan baik dan sesuai ekspektasi. Proses pengerjaan cepat, komunikasi lancar, dan hasil akhirnya sangat memuaskan. Highly recommended!',
    rating: 5,
    category: 'developer',
    avatarUrl: null,
  },
];

export const devTestimonials = testimonials.filter(
  (t) => t.category === 'developer'
);
