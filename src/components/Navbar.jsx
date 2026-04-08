import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ isScrolled, mobileMenuOpen, setMobileMenuOpen, toggleHover }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isTarifsPage = location.pathname === '/tarifs'; // Tarifs hero is also dark green
  const overDarkBg = (isHomePage || isTarifsPage) && !isScrolled;

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${overDarkBg ? 'navbar-over-dark' : ''}`}>
        <div className="container nav-content">
          <Link to="/">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="logo-container"
              onMouseEnter={toggleHover} 
              onMouseLeave={toggleHover}
            >
              <img src="/logo.png" alt="Padel Signature Logo" style={{ height: '45px', objectFit: 'contain' }} />
            </motion.div>
          </Link>

          <div className="nav-links desktop-only" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <Link to="/club" className="nav-link">Le Club</Link>
            <Link to="/entreprises" className="nav-link">Entreprises</Link>
            <Link to="/tarifs" className="nav-link">Tarifs</Link>
            <Link to="/infos-pratiques" className="nav-link">Infos</Link>
            <a href="https://live-experience.com" target="_blank" className="btn btn-primary" style={{padding: '0.8rem 2.5rem'}}>
               <span>Réserver</span>
            </a>
          </div>

          <button className="mobile-only" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="mobile-menu-overlay"
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0, left: 0,
              background: 'var(--dark-green)', color: 'white',
              display: 'flex', flexDirection: 'column', padding: '4rem',
              zIndex: 2000
            }}
          >
             <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '8rem' }}>
                <img src="/logo.png" alt="Padel Signature Logo" style={{ height: '35px', objectFit: 'contain' }} />
                <button onClick={() => setMobileMenuOpen(false)} style={{ color: 'white' }}><X size={32}/></button>
             </div>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                <Link to="/club" onClick={() => setMobileMenuOpen(false)} className="serif" style={{ fontSize: '3rem' }}>Le Club</Link>
                <Link to="/entreprises" onClick={() => setMobileMenuOpen(false)} className="serif" style={{ fontSize: '3rem' }}>Entreprises</Link>
                <Link to="/tarifs" onClick={() => setMobileMenuOpen(false)} className="serif" style={{ fontSize: '3rem' }}>Tarifs</Link>
                <Link to="/infos-pratiques" onClick={() => setMobileMenuOpen(false)} className="serif" style={{ fontSize: '3rem' }}>Infos Pratiques</Link>
             </div>
             <div style={{ marginTop: 'auto', display: 'flex', gap: '2rem' }}>
                <Instagram size={20}/>
                <Facebook size={20}/>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
