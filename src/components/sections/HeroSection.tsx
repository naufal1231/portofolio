import { useEffect } from 'react';
import { profile } from '../../data/profile';
import RevealWrapper from '../ui/RevealWrapper';
import { useHero3DCanvas, useHeroParallax } from '../../hooks/use3DEffects';

/**
 * HeroSection — Main hero/landing section
 * Converted from Blade section #hero
 *
 * 3D Effects (ported from resources/js/app.js):
 *  - useHero3DCanvas: True 3D particle mesh with perspective projection, z-axis, mouse repulsion
 *  - useHeroParallax: Avatar & badges parallax depth movement on mouse move
 *
 * (Card tilt, magnetic buttons, cursor ring are applied globally in App.tsx)
 */
export default function HeroSection() {
  // ── True 3D Particle Mesh (exact port from initHero3DCanvas in app.js) ──
  useHero3DCanvas('hero-3d-canvas', 'hero');

  // ── 3D Parallax Depth on Mouse Move ──
  useHeroParallax('hero');

  const firstName = profile.firstName;

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100svh' }}
    >
      {/* Full-bleed gradient background */}
      <div className="absolute inset-0 z-0 transition-all duration-700 hero-gradient" />

      {/* ── True 3D Interactive Particle Mesh Canvas ── */}
      <canvas
        id="hero-3d-canvas"
        className="absolute inset-0 z-[1] pointer-events-none w-full h-full"
      />

      {/* ── DESKTOP layout (lg+) ── */}
      <div className="hidden lg:block relative w-full h-full" style={{ minHeight: '100svh' }}>

        {/* Title — with parallax class */}
        <RevealWrapper
          delay={1}
          className="absolute inset-x-0 top-[110px] text-center z-10 px-6"
        >
          <h1
            className="font-extrabold tracking-tight text-pg-black leading-none"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)' }}
          >
            Hi I'm {firstName}
          </h1>
          <p
            className="font-serif-italic text-pg-black mt-2"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)', lineHeight: '1.05' }}
          >
            Software Engineer
          </p>
        </RevealWrapper>

        {/* Center Photo — with parallax */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex justify-center">
          <RevealWrapper
            delay={2}
            className="flex items-end justify-center"
            style={{
              height: '78%',
              width: '420px',
            }}
          >
            <img
              className="h-full w-auto object-contain object-bottom photo-grayscale select-none"
              src={profile.devAvatarUrl}
              alt={`${profile.name} — Full Stack Developer`}
              draggable={false}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </RevealWrapper>
        </div>

        {/* LEFT column — Available pill + Trusted by — data-parallax target */}
        <RevealWrapper className="parallax-left absolute left-8 xl:left-[7%] bottom-[10%] z-30 flex flex-col gap-6">
          <div className="flex items-start gap-3 max-w-[230px]">
            <div className="flex -space-x-2 shrink-0 mt-0.5">
              <div className="w-8 h-8 rounded-full border-2 border-white shadow flex items-center justify-center text-[10px] font-bold" style={{ background: '#B6FF3C', color: '#111' }}>GN</div>
              <div className="w-8 h-8 rounded-full border-2 border-white shadow flex items-center justify-center text-[10px] font-bold bg-teal-300 text-gray-800">AB</div>
              <div className="w-8 h-8 rounded-full border-2 border-white shadow flex items-center justify-center text-[10px] font-bold bg-orange-300 text-gray-800">CD</div>
            </div>
            <p className="text-[13px] leading-snug text-pg-text">
              Trusted by over <strong className="text-pg-black">25+</strong>{' '}
              <span>happy clients across various projects.</span>
            </p>
          </div>
        </RevealWrapper>

        {/* RIGHT column — Description + CTA — data-parallax target */}
        <RevealWrapper className="parallax-right absolute right-8 xl:right-[7%] bottom-[10%] z-30 flex flex-col gap-5 items-end max-w-[240px]">
          <p className="text-[14px] leading-relaxed text-pg-text text-right">
            {profile.devSubheadline}
          </p>
          <a href="#contact" className="btn-primary text-sm px-6 py-3">→ Get in Touch</a>
        </RevealWrapper>

        {/* Stats bar — very bottom */}
        <RevealWrapper className="absolute inset-x-0 bottom-0 z-30 border-t border-black/10">
          <div className="max-w-7xl mx-auto px-8 py-5 grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-extrabold text-pg-black stat-count">5+</p>
              <p className="text-[11px] font-medium text-pg-text-sec uppercase tracking-wider">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-extrabold text-pg-text-sec stat-count">25+</p>
              <p className="text-[11px] font-medium text-pg-text-sec uppercase tracking-wider">Projects Done</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-extrabold text-pg-black stat-count">10+</p>
              <p className="text-[11px] font-medium text-pg-text-sec uppercase tracking-wider">API Integrations</p>
            </div>
          </div>
        </RevealWrapper>
      </div>

      {/* ── MOBILE layout (<lg) ── */}
      <div className="lg:hidden relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-10 gap-5">
        {/* H1 */}
        <RevealWrapper>
          <h1>
            <span className="block text-4xl font-extrabold tracking-tight text-pg-black leading-tight">
              Hi I'm {firstName}
            </span>
            <span className="block text-3xl font-serif-italic mt-1 text-pg-black">
              Full Stack Developer
            </span>
          </h1>
        </RevealWrapper>

        {/* Photo — circular on mobile */}
        <RevealWrapper delay={1} className="relative">
          <div className="w-52 h-52 rounded-full overflow-hidden mx-auto shadow-xl border-4 border-white/60">
            <img
              className="w-full h-full object-cover photo-grayscale"
              src={profile.devAvatarUrl}
              alt={`${profile.name} — Developer`}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://placehold.co/200x200/E8FFD1/7AC500?text=GN';
              }}
            />
          </div>
        </RevealWrapper>

        {/* Description */}
        <RevealWrapper delay={2}>
          <p className="text-pg-text-sec text-sm leading-relaxed max-w-xs mt-4">
            {profile.devSubheadline}
          </p>
        </RevealWrapper>

        {/* CTA */}
        <RevealWrapper delay={3} className="flex gap-3 flex-wrap justify-center">
          <a href="#contact" className="btn-primary text-sm">Get in Touch →</a>
          <a href="#projects" className="btn-secondary text-sm">Lihat Proyek</a>
        </RevealWrapper>

        {/* Skill tags mobile */}
        <RevealWrapper className="flex flex-wrap gap-2 justify-center">
          <span className="pg-pill"><span className="pg-pill-dot" style={{ background: '#FF6B35' }} />Full Stack Dev</span>
          <span className="pg-pill"><span className="pg-pill-dot" style={{ background: '#4E9AF1' }} />Laravel &amp; React</span>
          <span className="pg-pill"><span className="pg-pill-dot" style={{ background: '#10B981' }} />Clean Code</span>
        </RevealWrapper>

        {/* Stats mobile */}
        <RevealWrapper className="grid grid-cols-3 gap-4 w-full pt-6 border-t border-black/10">
          <div className="text-center">
            <p className="text-2xl font-extrabold text-pg-black stat-count">5+</p>
            <p className="text-[10px] font-medium text-pg-text-sec uppercase tracking-wider">Years</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-extrabold text-pg-black stat-count">25+</p>
            <p className="text-[10px] font-medium text-pg-text-sec uppercase tracking-wider">Projects</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-extrabold text-pg-black stat-count">10+</p>
            <p className="text-[10px] font-medium text-pg-text-sec uppercase tracking-wider">APIs</p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
