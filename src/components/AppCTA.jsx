import React from 'react';
import { motion } from 'framer-motion';

const AppCTA = ({ toggleHover }) => {
  return (
    <section className="app-luxury-section" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="container cta-flex-container">
        <div className="cta-text-content" style={{ maxWidth: '600px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--terracotta)', fontWeight: 'bold', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            <span style={{ width: '30px', height: '2px', backgroundColor: 'var(--terracotta)' }}></span> RÉSERVATION
          </div>
          <h2 className="serif text-white h2-cta" style={{ marginBottom: '1.5rem', lineHeight: '1.1' }}>
            Comment réserver ?
          </h2>
          <p className="cta-p" style={{ marginBottom: '3rem', maxWidth: '500px', fontSize: '1.1rem' }}>
            Quatre étapes, quelques secondes. Tout se passe sur l'application Padel Signature ou depuis votre navigateur.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div className="serif italic" style={{ fontSize: '2.5rem', color: 'var(--terracotta)', lineHeight: '1' }}>01</div>
              <div>
                <h4 style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>TÉLÉCHARGEZ L'APPLICATION</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', margin: 0 }}>Installez l'application Padel Signature sur iOS et Android, ou réservez directement depuis votre navigateur.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div className="serif italic" style={{ fontSize: '2.5rem', color: 'var(--terracotta)', lineHeight: '1' }}>02</div>
              <div>
                <h4 style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>CRÉEZ VOTRE COMPTE</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', margin: 0 }}>Renseignez vos informations pour accéder à votre espace joueur et activer vos notifications.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div className="serif italic" style={{ fontSize: '2.5rem', color: 'var(--terracotta)', lineHeight: '1' }}>03</div>
              <div>
                <h4 style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>CHOISISSEZ VOTRE CRÉNEAU</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', margin: 0 }}>Consultez les disponibilités en temps réel et sélectionnez le jour, l'horaire et le terrain. Les heures creuses sont à tarif réduit.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div className="serif italic" style={{ fontSize: '2.5rem', color: 'var(--terracotta)', lineHeight: '1' }}>04</div>
              <div>
                <h4 style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>RÉGLEZ COMME VOUS VOULEZ</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', margin: 0 }}>Payez la totalité du terrain, seulement votre part, ou utilisez vos crédits. Annulation possible jusqu'à 24 heures avant.</p>
              </div>
            </div>
          </div>
          
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px' }}>
            <p className="cta-p" style={{ fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>Votre prochain match commence ici.</p>
            <p className="cta-p" style={{ marginBottom: '2rem', fontSize: '0.95rem' }}>Réservez votre terrain en quelques secondes et retrouvez vos créneaux directement depuis votre application.</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="#reservation-form" className="btn" style={{ backgroundColor: 'white', color: 'var(--dark-green)', padding: '1rem 2rem', fontWeight: 'bold', textTransform: 'none', letterSpacing: 'normal' }} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                Réserver en ligne
              </a>
              <div className="store-badge-fake">App Store</div>
              <div className="store-badge-fake">Google Play</div>
            </div>
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
