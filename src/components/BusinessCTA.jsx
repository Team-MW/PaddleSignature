import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Users, Layout, ChevronRight } from 'lucide-react';

const BusinessFeature = ({ icon: Icon, text }) => (
  <div className="biz-feat-item">
    <div className="biz-feat-icon">
      <Icon size={18} />
    </div>
    <span className="biz-feat-text">{text}</span>
  </div>
);

const BusinessCTA = ({ toggleHover }) => {
  return (
    <section id="entreprises" className="business-premium-section">
      <div className="container">
        <div className="business-grid-modern">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="business-text-block"
          >
            <span className="badge-terracotta">B2B & Séminaires</span>
            <h2 className="serif xl-title">
              Élevez Vos <br/>
              <span className="italic">Événements d'Équipe.</span>
            </h2>
            <p className="business-intro">
              Sortez du cadre conventionnel. Padel Signature offre un environnement unique alliant sport, détente et professionnalisme pour vos collaborateurs.
            </p>
            
            <div className="business-features-list">
              <BusinessFeature icon={Target} text="Séminaires & Réunions (Salle VIP 32m²)" />
              <BusinessFeature icon={Users} text="Team Building & Tournois Privés" />
              <BusinessFeature icon={Layout} text="Privatisation Totale & Bar Lounge" />
            </div>

            <div className="business-cta-wrapper">
              <Link to="/entreprises" className="btn btn-primary" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <span>Découvrir nos offres B2B</span>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="business-visual-block"
          >
            <div className="biz-main-img-wrapper" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Premium Business Lounge Padel Signature" className="biz-img" />
              <div className="biz-img-overlay"></div>
            </div>
            <div className="biz-floating-card">
              <p className="serif italic">"Plus qu'un terrain, un lieu de cohésion."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCTA;
