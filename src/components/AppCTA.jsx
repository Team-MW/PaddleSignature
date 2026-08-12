import React from 'react';
import { motion } from 'framer-motion';

const AppCTA = ({ toggleHover }) => {
  return (
    <section className="app-luxury-section" style={{ paddingTop: '10rem', paddingBottom: '10rem', backgroundColor: 'var(--white)' }}>
      <div className="container cta-flex-container">
        <div className="cta-text-content" style={{ maxWidth: '550px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--terracotta)', fontWeight: 'bold', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2rem', backgroundColor: 'rgba(164, 87, 41, 0.1)', padding: '0.6rem 1.2rem', borderRadius: '50px' }}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            GUIDE DE RÉSERVATION
          </div>

          <h2 className="serif" style={{ fontSize: '4rem', marginBottom: '1rem', lineHeight: '1', color: 'var(--dark-green)', textTransform: 'uppercase' }}>
            RÉSERVEZ EN<br/>
            <span style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>4 ÉTAPES</span>
          </h2>
          
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '4rem' }}>
            Simple, rapide et 100% en ligne. Votre terrain vous attend !
          </p>

          <div style={{ 
            background: 'var(--off-white)', 
            border: '1px solid rgba(27, 52, 43, 0.05)', 
            borderRadius: '24px', 
            padding: '3rem 2rem', 
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              background: 'rgba(164, 87, 41, 0.1)', 
              borderRadius: '24px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '1.5rem',
              color: 'var(--terracotta)'
            }}>
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>
            </div>
            
            <h3 style={{ color: 'var(--dark-green)', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              TÉLÉCHARGEZ L'APP
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              Réservez et gérez vos crédits en un clic
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#" className="btn-app-download" onMouseEnter={toggleHover} onMouseLeave={toggleHover} style={{ 
                display: 'flex', alignItems: 'center', gap: '0.5rem', 
                padding: '0.8rem 2rem', borderRadius: '50px', 
                border: '1.5px solid var(--terracotta)', color: 'var(--terracotta)', 
                fontWeight: '600', textTransform: 'none', background: 'transparent'
              }}>
                <svg width="20" height="20" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                iOS
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.livexperience.padelsignature" className="btn-app-download" onMouseEnter={toggleHover} onMouseLeave={toggleHover} style={{ 
                display: 'flex', alignItems: 'center', gap: '0.5rem', 
                padding: '0.8rem 2rem', borderRadius: '50px', 
                border: '1.5px solid var(--terracotta)', color: 'var(--terracotta)', 
                fontWeight: '600', textTransform: 'none', background: 'transparent'
              }}>
                <svg width="20" height="20" viewBox="0 0 512 512" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                Android
              </a>
            </div>
          </div>

        </div>
        
        <div className="cta-visual-phone">
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="phone-mockup-wrapper"
          >
            <div className="phone-screen-container" style={{ boxShadow: 'var(--shadow-lg)' }}>
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=70&w=600&auto=format&fit=crop" alt="Mobile App Experience" className="phone-img" loading="lazy" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AppCTA;
