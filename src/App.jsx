import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Modular Components
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Club = lazy(() => import('./pages/Club'));
const Entreprises = lazy(() => import('./pages/Entreprises'));
const Tarifs = lazy(() => import('./pages/Tarifs'));
const InfosPratiques = lazy(() => import('./pages/InfosPratiques'));
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'));

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
              <Route path="/infos-pratiques" element={<InfosPratiques toggleHover={toggleHover} />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
            </Routes>
          </Suspense>
        </main>

        <Footer toggleHover={toggleHover} />
      </div>
    </Router>
  );
}
