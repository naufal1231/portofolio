import { activeSocialLinks } from '../data/socialLinks';

/**
 * Footer — Site footer with social links
 * Converted from Blade @foreach($socialLinks) to React
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-pg-border bg-pg-bg-card">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand */}
        <div className="font-bold text-xl text-pg-black tracking-tight">
          GUNTUR
        </div>

        {/* Copyright */}
        <p className="text-pg-text-sec text-sm text-center">
          © {year} Guntur Naufal Imaduddin. Built with passion &amp; code.
        </p>

        {/* Social Links */}
        <div className="flex gap-5">
          {activeSocialLinks.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-pg-text-sec hover:text-pg-black transition-colors"
            >
              {social.platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
