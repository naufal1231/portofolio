import type { Skill } from '../types';

// ─── SKILLS — Data dari DatabaseSeeder.php ───
// Sumber: database/seeders/DatabaseSeeder.php (Seed #5)

export const skills: Skill[] = [
  // Developer Skills
  {
    id: '1',
    name: 'Laravel',
    level: 'expert',
    percentage: 95,
    yearsOfExperience: 5,
    category: 'developer',
    isActive: true,
  },
  {
    id: '2',
    name: 'PHP',
    level: 'expert',
    percentage: 92,
    yearsOfExperience: 6,
    category: 'developer',
    isActive: true,
  },
  {
    id: '3',
    name: 'React.js / Next.js',
    level: 'advanced',
    percentage: 88,
    yearsOfExperience: 4,
    category: 'developer',
    isActive: true,
  },
  {
    id: '4',
    name: 'MySQL / PostgreSQL',
    level: 'advanced',
    percentage: 90,
    yearsOfExperience: 5,
    category: 'developer',
    isActive: true,
  },
  {
    id: '5',
    name: 'TailwindCSS / Bootstrap',
    level: 'expert',
    percentage: 95,
    yearsOfExperience: 5,
    category: 'developer',
    isActive: true,
  },
  {
    id: '6',
    name: 'Livewire & Alpine.js',
    level: 'advanced',
    percentage: 88,
    yearsOfExperience: 3,
    category: 'developer',
    isActive: true,
  },
  {
    id: '7',
    name: 'Docker & Cloud VPS',
    level: 'intermediate',
    percentage: 75,
    yearsOfExperience: 2,
    category: 'developer',
    isActive: true,
  },

  // Swimming Skills
  {
    id: '8',
    name: 'Gaya Bebas (Freestyle)',
    level: 'expert',
    percentage: 95,
    yearsOfExperience: 8,
    category: 'swimming',
    isActive: true,
  },
  {
    id: '9',
    name: 'Gaya Dada (Breaststroke)',
    level: 'expert',
    percentage: 95,
    yearsOfExperience: 8,
    category: 'swimming',
    isActive: true,
  },
  {
    id: '10',
    name: 'Gaya Punggung & Kupu-kupu',
    level: 'advanced',
    percentage: 90,
    yearsOfExperience: 7,
    category: 'swimming',
    isActive: true,
  },
  {
    id: '11',
    name: 'Analisis Biomekanika Renang',
    level: 'advanced',
    percentage: 85,
    yearsOfExperience: 4,
    category: 'swimming',
    isActive: true,
  },
  {
    id: '12',
    name: 'First Aid & Water Rescue (CPR)',
    level: 'expert',
    percentage: 98,
    yearsOfExperience: 5,
    category: 'swimming',
    isActive: true,
  },
  {
    id: '13',
    name: 'Penyusunan Program Latihan Fisik',
    level: 'advanced',
    percentage: 88,
    yearsOfExperience: 5,
    category: 'swimming',
    isActive: true,
  },
];

export const devSkills = skills
  .filter((s) => s.category === 'developer' && s.isActive)
  .sort((a, b) => b.percentage - a.percentage);
