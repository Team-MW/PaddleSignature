import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Modular Components
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ComingSoon from './pages/ComingSoon';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Club = lazy(() => import('./pages/Club'));
const Entreprises = lazy(() => import('./pages/Entreprises'));
const Tarifs = lazy(() => import('./pages/Tarifs'));
const InfosPratiques = lazy(() => import('./pages/InfosPratiques'));
const NosLocaux = lazy(() => import('./pages/NosLocaux'));
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'));

// Configuration de maintenance temporaire
const isUnderConstruction = true;

// Loading fallback
const PageLoader = () => (
  <div style={{ 
    height: '100vh', 
    width: '100%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    background: '#1B342B',
    color: 'white',
    fontFamily: 'serif'
  }}>
    <div className="animate-pulse">Padel Signature...</div>
  </div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Mode prévisualisation privé pour l'administrateur et les développeurs
  const [previewMode, setPreviewMode] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const urlPreview = params.get('preview');
    if (urlPreview === 'true') {
      localStorage.setItem('padel_preview', 'true');
      return true;
    }
    if (urlPreview === 'false') {
      localStorage.removeItem('padel_preview');
      return false;
    }
    return localStorage.getItem('padel_preview') === 'true';
  });
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleHover = () => setIsHovered(!isHovered);

  // Si le site est en construction et qu'on n'est pas en mode prévisualisation
  if (isUnderConstruction && !previewMode) {
    return (
      <Router>
        <div className="app-main-wrapper" style={{ cursor: 'none' }}>
          <ScrollToTop />
          <CustomCursor mousePos={mousePos} isHovered={isHovered} />
          <ComingSoon toggleHover={toggleHover} />
        </div>
      </Router>
    );
  }

  return (
    <Router>
      <div className="app-main-wrapper" style={{ cursor: 'none' }}>
        <ScrollToTop />
        <CustomCursor mousePos={mousePos} isHovered={isHovered} />
        
        <Navbar 
          isScrolled={isScrolled} 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen} 
          toggleHover={toggleHover}
        />

        <main style={{ minHeight: '100vh' }}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home toggleHover={toggleHover} />} />
              <Route path="/club" element={<Club toggleHover={toggleHover} />} />
              <Route path="/entreprises" element={<Entreprises toggleHover={toggleHover} />} />
              <Route path="/tarifs" element={<Tarifs toggleHover={toggleHover} />} />
              <Route path="/nos-locaux" element={<NosLocaux toggleHover={toggleHover} />} />
              <Route path="/infos-pratiques" element={<InfosPratiques toggleHover={toggleHover} />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
            </Routes>
          </Suspense>
        </main>

        <Footer toggleHover={toggleHover} />

        {/* Badge indicateur discret de prévisualisation avec bouton pour quitter */}
        {previewMode && (
          <div className="cs-preview-badge">
            <span>Aperçu Privé</span>
            <button 
              onClick={() => {
                localStorage.removeItem('padel_preview');
                window.location.href = '/?preview=false';
              }}
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover}
              className="cs-preview-badge-btn"
            >
              Quitter
            </button>
          </div>
        )}
      </div>
    </Router>
  );
}

