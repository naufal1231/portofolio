import { useEffect } from 'react';

/**
 * use3DInteractiveEngine — Full port of app.js 3D effects to React
 *
 * Ported from: resources/js/app.js
 * Includes:
 *  1. Hero 3D Particle Mesh (true 3D projection with focal length)
 *  2. Hero Avatar 3D Parallax Depth
 *  3. 3D Card Tilt + Dynamic Spotlight Follow Effect
 *  4. Magnetic Button Hover Effect
 *  5. Interactive Cursor Ring with Fluid Easing
 *  6. Live Stat Count-Up Animation
 */

// ─────────────────────────────────────────
// 1. HERO 3D PARTICLE MESH ENGINE
// ─────────────────────────────────────────
export function useHero3DCanvas(canvasId: string, heroId: string) {
  useEffect(() => {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
    let animationFrameId: number;

    const resize = () => {
      width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const particleCount = isMobile ? 25 : 55;
    const focalLength = 400;

    // True 3D Particle class with perspective projection
    class Particle3D {
      x: number = 0;
      y: number = 0;
      z: number = 0;
      vx: number = 0;
      vy: number = 0;
      vz: number = 0;
      size: number = 0;
      color: string = '';

      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = (Math.random() - 0.5) * width * 1.5;
        this.y = (Math.random() - 0.5) * height * 1.5;
        this.z = init ? Math.random() * 600 : 600;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.vz = (Math.random() - 0.5) * 0.5 - 0.2;
        this.size = Math.random() * 2.5 + 1.5;
        this.color = Math.random() > 0.4 ? '#B6FF3C' : '#7AC500';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.z += this.vz;

        if (this.z <= 10) this.z = 600;
        if (this.z > 650) this.z = 10;
        if (Math.abs(this.x) > width) this.x = -this.x;
        if (Math.abs(this.y) > height) this.y = -this.y;

        // Mouse repulsion in 3D space
        const scale = focalLength / (focalLength + this.z);
        const projX = this.x * scale + width / 2;
        const projY = this.y * scale + height / 2;
        const dx = projX - mouse.x;
        const dy = projY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          const force = (140 - dist) / 140;
          this.x += (dx / dist) * force * 4;
          this.y += (dy / dist) * force * 4;
        }
      }

      render(): { x: number; y: number; z: number; alpha: number } {
        const scale = focalLength / (focalLength + this.z);
        const projX = this.x * scale + width / 2;
        const projY = this.y * scale + height / 2;
        const alpha = Math.min(1, Math.max(0.1, 1 - this.z / 600));

        ctx!.beginPath();
        ctx!.arc(projX, projY, this.size * scale, 0, Math.PI * 2);
        ctx!.fillStyle = this.color;
        ctx!.globalAlpha = alpha * 0.8;
        ctx!.fill();

        return { x: projX, y: projY, z: this.z, alpha };
      }
    }

    const particles: Particle3D[] = Array.from({ length: particleCount }, () => new Particle3D());

    // Mouse interaction on hero section
    const heroSection = document.getElementById(heroId);
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove);
      heroSection.addEventListener('mouseleave', handleMouseLeave);
    }

    function animate() {
      ctx!.clearRect(0, 0, width, height);
      ctx!.globalAlpha = 1;

      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      const rendered = particles.map((p) => {
        p.update();
        return p.render();
      });

      // Connect nearby particles with glowing lines
      for (let i = 0; i < rendered.length; i++) {
        for (let j = i + 1; j < rendered.length; j++) {
          const p1 = rendered[i];
          const p2 = rendered[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * Math.min(p1.alpha, p2.alpha) * 0.35;
            ctx!.beginPath();
            ctx!.moveTo(p1.x, p1.y);
            ctx!.lineTo(p2.x, p2.y);
            ctx!.strokeStyle = '#B6FF3C';
            ctx!.globalAlpha = lineAlpha;
            ctx!.lineWidth = 1;
            ctx!.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      if (heroSection) {
        heroSection.removeEventListener('mousemove', handleMouseMove);
        heroSection.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [canvasId, heroId]);
}


// ─────────────────────────────────────────
// 2. HERO AVATAR & BADGES 3D PARALLAX DEPTH
// ─────────────────────────────────────────
export function useHeroParallax(heroId: string) {
  useEffect(() => {
    if (window.matchMedia('(max-width: 1024px)').matches) return;

    const hero = document.getElementById(heroId);
    if (!hero) return;

    const avatar = hero.querySelector('.photo-grayscale') as HTMLElement | null;
    const headline = hero.querySelector('h1') as HTMLElement | null;
    const badgeLeft = hero.querySelector('.parallax-left') as HTMLElement | null;
    const badgeRight = hero.querySelector('.parallax-right') as HTMLElement | null;

    let currentX = 0, currentY = 0;
    let targetX = 0, targetY = 0;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      targetX = (e.clientX - centerX) / (rect.width / 2);
      targetY = (e.clientY - centerY) / (rect.height / 2);
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);

    function renderParallax() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      if (avatar) {
        avatar.style.transform = `perspective(1000px) rotateY(${currentX * 6}deg) rotateX(${-currentY * 4}deg) translateZ(30px)`;
      }
      if (headline) {
        headline.style.transform = `translate3d(${currentX * -15}px, ${currentY * -10}px, 0)`;
      }
      if (badgeLeft) {
        badgeLeft.style.transform = `translate3d(${currentX * 18}px, ${currentY * 12}px, 0)`;
      }
      if (badgeRight) {
        badgeRight.style.transform = `translate3d(${currentX * 22}px, ${currentY * 15}px, 0)`;
      }

      animId = requestAnimationFrame(renderParallax);
    }
    renderParallax();

    return () => {
      cancelAnimationFrame(animId);
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [heroId]);
}


// ─────────────────────────────────────────
// 3. 3D CARD TILT + SPOTLIGHT EFFECT
// ─────────────────────────────────────────
export function use3DCardTilt() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    // Re-run whenever DOM changes (for dynamically rendered cards)
    const applyTilt = () => {
      const cards = document.querySelectorAll<HTMLElement>(
        '.pg-card-interactive, .project-card'
      );

      cards.forEach((card) => {
        if (card.dataset.tiltApplied) return;
        card.dataset.tiltApplied = 'true';

        const onMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          card.style.setProperty('--spot-x', `${x}px`);
          card.style.setProperty('--spot-y', `${y}px`);

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = -((y - centerY) / centerY) * 8;
          const rotateY = ((x - centerX) / centerX) * 8;

          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        };

        const onMouseLeave = () => {
          card.style.transform =
            'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        };

        card.addEventListener('mousemove', onMouseMove);
        card.addEventListener('mouseleave', onMouseLeave);
      });
    };

    applyTilt();

    // MutationObserver to catch dynamically added cards
    const observer = new MutationObserver(applyTilt);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);
}


// ─────────────────────────────────────────
// 4. MAGNETIC BUTTON HOVER EFFECT
// ─────────────────────────────────────────
export function useMagneticButtons() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const applyMagnetic = () => {
      const buttons = document.querySelectorAll<HTMLElement>(
        '.btn-primary, .btn-secondary'
      );

      buttons.forEach((btn) => {
        if (btn.dataset.magneticApplied) return;
        btn.dataset.magneticApplied = 'true';

        const onMouseMove = (e: MouseEvent) => {
          const rect = btn.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const dx = (e.clientX - centerX) * 0.35;
          const dy = (e.clientY - centerY) * 0.35;
          btn.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale(1.04)`;
        };

        const onMouseLeave = () => {
          btn.style.transform = 'translate3d(0, 0, 0) scale(1)';
        };

        btn.addEventListener('mousemove', onMouseMove);
        btn.addEventListener('mouseleave', onMouseLeave);
      });
    };

    applyMagnetic();

    const observer = new MutationObserver(applyMagnetic);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);
}


// ─────────────────────────────────────────
// 5. INTERACTIVE CURSOR RING
// ─────────────────────────────────────────
export function useCustomCursor() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    // Create cursor elements
    let dot = document.querySelector<HTMLElement>('.cursor-dot');
    let ring = document.querySelector<HTMLElement>('.cursor-ring');

    if (!dot) {
      dot = document.createElement('div');
      dot.className = 'cursor-dot';
      document.body.appendChild(dot);
    }
    if (!ring) {
      ring = document.createElement('div');
      ring.className = 'cursor-ring';
      document.body.appendChild(ring);
    }

    const dotEl = dot;
    const ringEl = ring;

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dotEl.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };
    window.addEventListener('mousemove', onMouseMove);

    function renderCursorRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ringEl.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      animId = requestAnimationFrame(renderCursorRing);
    }
    renderCursorRing();

    // Grow ring on interactive elements
    const onEnter = () => ringEl.classList.add('active');
    const onLeave = () => ringEl.classList.remove('active');

    const applyHover = () => {
      document
        .querySelectorAll('a, button, .pg-card-interactive, .project-card, input, textarea')
        .forEach((el) => {
          el.addEventListener('mouseenter', onEnter);
          el.addEventListener('mouseleave', onLeave);
        });
    };
    applyHover();

    const observer = new MutationObserver(applyHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
      dotEl.remove();
      ringEl.remove();
    };
  }, []);
}


// ─────────────────────────────────────────
// 6. STAT COUNT-UP ANIMATION
// ─────────────────────────────────────────
export function useStatCountUp() {
  useEffect(() => {
    const statElements = document.querySelectorAll<HTMLElement>('.stat-count');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const target = entry.target as HTMLElement;
          const rawText = target.innerText.trim();
          const match = rawText.match(/^(\d+)(\+)?$/);

          if (match) {
            const finalVal = parseInt(match[1], 10);
            const suffix = match[2] ?? '';
            const duration = 1200;
            const startTime = performance.now();

            function updateCount(now: number) {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeProgress = 1 - Math.pow(1 - progress, 4); // EaseOutQuart
              const current = Math.floor(easeProgress * finalVal);
              target.innerText = `${current}${suffix}`;
              if (progress < 1) {
                requestAnimationFrame(updateCount);
              } else {
                target.innerText = `${finalVal}${suffix}`;
              }
            }

            requestAnimationFrame(updateCount);
          }
          observer.unobserve(target);
        });
      },
      { threshold: 0.5 }
    );

    statElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
