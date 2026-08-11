import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

/**
 * MainLayout — Main layout wrapper
 * Wraps pages with Navbar + content slot + Footer
 * Converted from layouts/app.blade.php
 */
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="bg-white text-pg-text font-sans overflow-x-hidden min-h-screen selection:bg-pg-accent selection:text-pg-black">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
