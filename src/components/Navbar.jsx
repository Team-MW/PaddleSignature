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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-menu-overlay"
          >
             <div className="mobile-menu-header">
                <img src="/logo.png" alt="Padel Signature Logo" className="mobile-logo" />
                <button className="close-btn" onClick={() => setMobileMenuOpen(false)}><X size={32}/></button>
             </div>
             
             <nav className="mobile-nav">
                {[
                  { name: 'Le Club', path: '/club' },
                  { name: 'Entreprises', path: '/entreprises' },
                  { name: 'Tarifs', path: '/tarifs' },
                  { name: 'Infos Pratiques', path: '/infos-pratiques' }
                ].map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link 
                      to={item.path} 
                      onClick={() => setMobileMenuOpen(false)} 
                      className="mobile-link serif"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-40"
                >
                  <a href="https://live-experience.com" target="_blank" className="btn btn-primary btn-full-width">
                     <span>Réserver un court</span>
                  </a>
                </motion.div>
             </nav>

             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="mobile-menu-footer"
             >
                <div className="mobile-socials">
                  <a href="#"><Instagram size={24}/></a>
                  <a href="#"><Facebook size={24}/></a>
                </div>
                <p className="mobile-copyright">© 2024 Padel Signature</p>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
