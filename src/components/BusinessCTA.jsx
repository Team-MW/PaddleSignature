import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BusinessFeature = ({ emoji, title, text }) => (
  <div className="business-feature-item">
    <div className="biz-emoji">{emoji}</div>
    <div className="biz-content">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  </div>
);

const BusinessCTA = ({ toggleHover }) => {
  return (
    <section id="entreprises" className="business-premium-section" style={{ paddingBottom: '2rem' }}>
      <div className="container">
        <div className="business-grid-modern">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="business-text-block"
          >
            <div className="biz-eyebrow">
              <span className="biz-eyebrow-line"></span> ENTREPRISES
            </div>
            <h2 className="serif xl-title" style={{ marginBottom: '3rem' }}>
              Recevez vos équipes <br/>
              <span className="italic" style={{ color: 'var(--terracotta)' }}>et vos clients.</span>
            </h2>
            
            <div className="business-features-list">
              <BusinessFeature 
                emoji="🎟️" 
                title="Offre CSE" 
                text="Des crédits à offrir à vos salariés, utilisables au club à tarif négocié. Une seule facture pour le CSE." 
              />
              <BusinessFeature 
                emoji="🤝" 
                title="Séminaires & Team Building" 
                text="Une journée clé en main : salle jusqu’à 16 places assises (en configuration U), barre de visioconférence dernière génération sans fil, terrains et traiteur. Du café à l'afterwork." 
              />
              <BusinessFeature 
                emoji="📣" 
                title="Sponsoring" 
                text="Votre marque sur l'écran géant et les écrans dynamiques du club, un créneau réservé et une forte présence sur nos différents réseaux." 
              />
            </div>

            <div className="business-cta-wrapper" style={{ marginTop: '3rem' }}>
              <Link to="/entreprises" className="btn btn-primary" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <span>Nos offres entreprises</span>
              </Link>
            </div>
          </motion.div>

          <div className="business-visual-block">
            <div className="biz-main-img-wrapper" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
              <img src="/salle-de-seminaire.jpeg" alt="Entreprise Padel Signature" className="biz-img" style={{ objectFit: 'cover' }} />
              <div className="biz-img-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCTA;
