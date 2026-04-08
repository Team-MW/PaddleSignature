import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ heroRef, toggleHover, scale }) => {
  return (
    <header className="hero" ref={heroRef} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <motion.div className="hero-fullscreen-bg" style={{ scale }}>
         <img src="/hero-bg.jpg" alt="Padel Signature Montauban" />
         <div className="hero-overlay"></div>
      </motion.div>

      <div className="container hero-content-centered">
         <motion.div 
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
         >
           <h1 className="serif">
             Padel <br/> 
             <span className="italic" style={{ color: 'var(--terracotta)' }}>Signature</span>
           </h1>
           <h2 className="hero-desc-centered">
             Le 1er complexe de <strong>padel indoor premium à Montauban</strong>. 
             Vivez une expérience unique où le sport de haut niveau rencontre l'excellence de notre bar lounge et espaces entreprises.
           </h2>
           <div className="hero-cta-centered">
             <a href="https://live-experience.com" target="_blank" className="reserve-link" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
               Réserver un terrain
             </a>
             <div className="scroll-arrow">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
             </div>
           </div>
         </motion.div>
      </div>
    </header>
  );
};

export default Hero;
