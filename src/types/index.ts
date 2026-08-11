// ─── TypeScript Interfaces matching the Laravel database schema ───

export interface Profile {
  name: string;
  firstName: string;
  devTitle: string;
  devSubheadline: string;
  devAbout: string;
  devBio: string;
  devCvUrl: string;
  devAvatarUrl: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
}

export interface Skill {
  id: string;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  percentage: number;
  yearsOfExperience: number;
  category: 'developer' | 'swimming' | 'general';
  isActive: boolean;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  tags: string[];
  features: string[];
  demoUrl: string | null;
  githubUrl: string | null;
  challenge: string | null;
  solution: string | null;
  client: string | null;
  year: number;
  isFeatured: boolean;
  thumbnailUrl: string | null;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  category: 'developer' | 'swimming';
  priceEstimate: string | null;
  icon: string;
  isActive: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  description: string;
  yearStart: number;
  yearEnd: number | null;
  isCurrent: boolean;
  category: 'developer' | 'swimming';
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl: string | null;
  category: 'developer' | 'swimming';
}

export interface Achievement {
  id: string;
  title: string;
  date: string;
  category: 'personal' | 'athlete';
  medalType: 'gold' | 'silver' | 'bronze' | 'none';
  description: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  message: string;
  rating: number;
  category: 'developer' | 'swimming';
  avatarUrl: string | null;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
  isActive: boolean;
}

export interface Brand {
  name: string;
  abbr: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
}

export interface Blog {
  id: string;
  categoryId: string | null;
  title: string;
  slug: string;
  content: string;
  isPublished: boolean;
  publishedAt: string | null;
}

export interface Message {
  name: string;
  email: string;
  subject: string;
  message: string;
}
