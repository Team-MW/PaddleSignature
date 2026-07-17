import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Modular Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ComingSoon from './pages/ComingSoon';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Club = lazy(() => import('./pages/Club'));
const Entreprises = lazy(() => import('./pages/Entreprises'));
const Tarifs = lazy(() => import('./pages/Tarifs'));
const ContactPage = lazy(() => import('./pages/Contact'));
const NosLocaux = lazy(() => import('./pages/NosLocaux'));
const EventBuilder = lazy(() => import('./pages/EventBuilder'));
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'));
const Sponsoring = lazy(() => import('./pages/Sponsoring'));
const CSE = lazy(() => import('./pages/CSE'));
const PolitiqueConfidentialite = lazy(() => import('./pages/PolitiqueConfidentialite'));

// Configuration de maintenance temporaire
const IS_MAINTENANCE_MODE = true;

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
  const [isUnderConstruction, setIsUnderConstruction] = useState(() => {
    return IS_MAINTENANCE_MODE && sessionStorage.getItem('site_access') !== 'granted';
  });
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Empty function for toggleHover to prevent errors in child components
  const toggleHover = () => {};

  const grantAccess = () => {
    sessionStorage.setItem('site_access', 'granted');
    setIsUnderConstruction(false);
  };

  // Si le site est en construction
  if (isUnderConstruction) {
    return (
      <Router>
        <div className="app-main-wrapper">
          <ScrollToTop />
          <ComingSoon toggleHover={toggleHover} grantAccess={grantAccess} />
        </div>
      </Router>
    );
  }

  return (
    <Router>
      <div className="app-main-wrapper">
        <ScrollToTop />
        
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
              <Route path="/creer-evenement" element={<EventBuilder />} />
              <Route path="/tarifs" element={<Tarifs toggleHover={toggleHover} />} />
              <Route path="/nos-locaux" element={<NosLocaux toggleHover={toggleHover} />} />
              <Route path="/contact" element={<ContactPage toggleHover={toggleHover} />} />
              <Route path="/sponsoring" element={<Sponsoring toggleHover={toggleHover} />} />
              <Route path="/cse" element={<CSE toggleHover={toggleHover} />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            </Routes>
          </Suspense>
        </main>

        <Footer toggleHover={toggleHover} />
      </div>
    </Router>
  );
}

