import React from 'react';
import { motion } from 'framer-motion';

const AppCTA = ({ toggleHover }) => {
  return (
    <section className="app-luxury-section">
      <div className="container">
         <div className="cta-box-premium">
            <div className="cta-text-content">
               <h2 className="serif text-white h2-cta">L'Expérience au <br/><span className="italic">Bout des Doigts.</span></h2>
               <p className="cta-p">L'application Live Experience centralise vos réservations, vos performances et votre vie de club.</p>
               <div className="app-store-links">
                  <a href="#" className="btn btn-outline btn-white" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>App Store</a>
                  <a href="#" className="btn btn-outline btn-white" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Google Play</a>
               </div>
            </div>
            <div className="cta-visual-phone">
               <motion.div 
                 animate={{ y: [0, -30, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                 className="phone-mockup-wrapper"
               >
                  <div className="phone-screen-container">
                     <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" alt="Mobile App Experience" className="phone-img" />
                  </div>
               </motion.div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default AppCTA;
