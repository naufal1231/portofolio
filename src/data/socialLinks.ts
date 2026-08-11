import type { SocialLink } from '../types';

// ─── SOCIAL LINKS — Data dari DatabaseSeeder.php ───
// Sumber: database/seeders/DatabaseSeeder.php (Seed #3)

export const socialLinks: SocialLink[] = [
  {
    id: '1',
    platform: 'GitHub',
    url: 'https://github.com/naufal1231',
    icon: 'code',
    isActive: true,
  },
  {
    id: '2',
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/guntur-naufal',
    icon: 'work',
    isActive: true,
  },
  {
    id: '3',
    platform: 'Instagram',
    url: 'https://instagram.com/guntur.naufal',
    icon: 'camera_alt',
    isActive: true,
  },
];

export const activeSocialLinks = socialLinks.filter((s) => s.isActive);
