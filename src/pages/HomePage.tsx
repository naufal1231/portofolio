import HeroSection from '../components/sections/HeroSection';
import TrustedBySection from '../components/sections/TrustedBySection';
import WorksPreviewSection from '../components/sections/WorksPreviewSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ServicesSection from '../components/sections/ServicesSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';

/**
 * HomePage — Main SPA page assembling all sections
 * Converted from: GET / → PortfolioHome Livewire component
 *
 * All sections are scroll-anchored:
 * #hero, #about, #skills, #services, #projects, #experience, #testimonials, #contact
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <WorksPreviewSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <HowItWorksSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
