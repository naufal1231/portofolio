import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import { use3DCardTilt, useMagneticButtons, useCustomCursor, useStatCountUp } from './hooks/use3DEffects';

/**
 * App — Root component with routing + global 3D effects
 *
 * Global 3D effects (ported from app.js):
 *  - use3DCardTilt:      3D perspective tilt + spotlight on all .pg-card-interactive
 *  - useMagneticButtons: Magnetic pull on all .btn-primary / .btn-secondary
 *  - useCustomCursor:    Custom cursor ring with fluid easing
 *  - useStatCountUp:     Count-up animation for .stat-count elements
 *
 * React Router replaces Laravel web.php routing
 */
export default function App() {
  // ── Initialize global 3D interaction effects ──
  use3DCardTilt();
  useMagneticButtons();
  useCustomCursor();
  useStatCountUp();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />

        {/* 404 Fallback */}
        <Route
          path="*"
          element={
            <MainLayout>
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-8xl font-extrabold text-pg-black mb-4">404</h1>
                  <p className="text-pg-text-sec text-xl mb-8">Halaman tidak ditemukan.</p>
                  <a href="/" className="btn-primary">← Kembali ke Beranda</a>
                </div>
              </div>
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
