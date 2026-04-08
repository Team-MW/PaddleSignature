import React from 'react';
import { motion } from 'framer-motion';

const AppCTA = ({ toggleHover }) => {
  return (
    <section className="app-luxury-section">
      <div className="container cta-flex-container">
        <div className="cta-text-content">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="app-soon-badge"
          >
            Application bientôt disponible
          </motion.span>
          <h2 className="serif text-white h2-cta">L'Expérience au <br/><span className="italic">Bout des Doigts.</span></h2>
          <p className="cta-p">L'application Live Experience centralisera vos réservations, vos performances et votre vie de club. Restez connecté à votre passion.</p>
          <div className="app-store-placeholders">
            <div className="store-badge-fake">App Store</div>
            <div className="store-badge-fake">Google Play</div>
          </div>
        </div>
        <div className="cta-visual-phone">
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="phone-mockup-wrapper"
          >
            <div className="phone-screen-container">
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=70&w=600&auto=format&fit=crop" alt="Mobile App Experience" className="phone-img" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppCTA;
