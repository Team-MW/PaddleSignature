import React from 'react';
import { Link } from 'react-router-dom';

const AbonnementBanner = ({ toggleHover }) => {
  return (
    <div className="abonnement-banner-container mt-60">
      {/* Card Abonnement */}
      <div className="abonnement-card">
        <div className="abo-card-left">
          <div className="abo-badge">SANS ENGAGEMENT</div>
          <h3 className="serif abo-title">Abonnement heures creuses</h3>
          <p className="abo-desc">
            Pour ceux qui jouent régulièrement en journée. Accès illimité aux créneaux heures creuses, places limitées.
          </p>
        </div>
        
        <div className="abo-card-right">
          <div className="abo-price-block">
            <div className="abo-price-main">
              <span className="abo-price-value serif">500 €</span>
              <span className="abo-price-period">/an</span>
            </div>
            <div className="abo-price-sub">ou 50 € par mois</div>
          </div>
          <Link to="/infos#reservation-form" className="btn btn-terracotta abo-btn" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            Je m'abonne
          </Link>
        </div>
      </div>

      {/* Banner Equipement */}
      <div className="equipement-banner">
        <div className="eq-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="eq-icon"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m4.93 19.07 1.41-1.41"/><path d="m17.66 6.34 1.41-1.41"/></svg>
          <span className="eq-text-main">Location raquettes <strong className="eq-price">3 €</strong></span>
        </div>
        <div className="eq-divider"></div>
        <div className="eq-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="eq-icon"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
          <span className="eq-text-main">Test raquette <strong className="eq-price">10 €</strong></span>
          <span className="eq-text-sub">déduit si achat</span>
        </div>
        <div className="eq-divider"></div>
        <div className="eq-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="eq-icon"><circle cx="12" cy="12" r="10"/><path d="M6 12c0-1.7.7-3.2 1.8-4.2C9 6.7 10.4 6 12 6s3 .7 4.2 1.8C17.3 8.8 18 10.3 18 12c0 1.7-.7 3.2-1.8 4.2C15 17.3 13.6 18 12 18s-3-.7-4.2-1.8C6.7 15.2 6 13.7 6 12Z"/></svg>
          <span className="eq-text-main">Balles <strong className="eq-price">7 €</strong></span>
          <span className="eq-text-sub">le tube</span>
        </div>
      </div>
    </div>
  );
};

export default AbonnementBanner;
