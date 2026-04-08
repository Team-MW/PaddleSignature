import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BusinessCTA = ({ toggleHover }) => {
  return (
    <section className="business-cta-section" style={{ padding: '8rem 0', background: 'var(--white)' }}>
      <div className="container">
         <div className="cta-box-premium" style={{ background: 'var(--cream)', border: '1px solid var(--border)' }}>
            <div className="cta-text-content">
               <span className="badge-terracotta">B2B & Séminaires</span>
               <h2 className="serif h2-cta" style={{ color: 'var(--dark-green)' }}>Un lieu pensé <br/><span className="italic">Pour Vos Équipes.</span></h2>
               <p className="cta-p" style={{ color: 'var(--text-muted)' }}>Sortez du cadre ! Padel Signature vous propose une salle VIP de 31,6 m², des terrains privatisables équipés de LED personnalisables et un bar lounge R+1 pour vos événements professionnels, team-buildings et séminaires d'entreprise à Montauban.</p>
               <div className="app-store-links">
                  <Link to="/entreprises" className="btn btn-primary" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Découvrir nos offres B2B</Link>
               </div>
            </div>
            <div className="cta-visual-phone" style={{ position: 'relative', overflow: 'hidden', height: '100%', display: 'flex', alignItems: 'center' }}>
               <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Salle VIP séminaire Padel Signature Montauban" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
            </div>
         </div>
      </div>
    </section>
  );
};

export default BusinessCTA;
