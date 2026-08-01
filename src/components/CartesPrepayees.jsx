import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrepaidCard = ({ title, subtitle, price, creditsInfo, features, isHighlighted, badge, toggleHover }) => {
  return (
    <div className={`prepaid-card ${isHighlighted ? 'highlighted' : ''}`}>
      {badge && <div className="prepaid-badge">{badge}</div>}
      
      <div className="prepaid-header">
        <h3 className="serif prepaid-title">{title}</h3>
        <p className="prepaid-subtitle">{subtitle}</p>
      </div>
      
      <div className="prepaid-price-block">
        <div className="prepaid-price serif">{price}</div>
        <div className="prepaid-credits">{creditsInfo}</div>
      </div>
      
      <ul className="prepaid-features">
        {features.map((feature, idx) => (
          <li key={idx}>
            <Check size={16} className="terracotta-accent" /> {feature}
          </li>
        ))}
      </ul>
      
      <div className="prepaid-footer">
        <Link 
          to="/contact#reservation-form" 
          className={`btn ${isHighlighted ? 'btn-terracotta' : 'btn-outline-dark'} prepaid-btn`}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          Acheter
        </Link>
      </div>
    </div>
  );
};

const CartesPrepayees = ({ toggleHover }) => {
  return (
    <section className="cartes-prepayees-section">
      <div className="container">
        
        <div className="cartes-header">
          <div className="community-subtitle-wrapper" style={{ justifyContent: 'flex-start' }}>
            <span className="community-line"></span>
            <span className="community-subtitle">CARTES PRÉPAYÉES</span>
          </div>
          
          <h2 className="serif xl-title mb-20">
            Jouez plus, <span className="italic" style={{ color: 'var(--terracotta)' }}>payez moins.</span>
          </h2>
          
          <p className="cartes-desc">
            Vous créditez le montant de votre choix, nous ajoutons un bonus. 1 crédit = 1 euro · utilisables partout dans le club · valables un an.
          </p>
        </div>

        <div className="prepaid-grid">
          <PrepaidCard
            title="Découverte"
            subtitle="Pour essayer"
            price="100 €"
            creditsInfo="115 crédits, soit 15 offerts"
            features={[
              "Environ 8 parties dont 1 offerte",
              "Soit 11,74 € la partie"
            ]}
            toggleHover={toggleHover}
          />
          
          <PrepaidCard
            title="Confort"
            subtitle="Pour jouer régulièrement"
            price="250 €"
            creditsInfo="300 crédits, soit 50 offerts"
            features={[
              "Environ 22 parties dont 3 offertes",
              "Soit 11,25 € la partie"
            ]}
            isHighlighted={true}
            badge="LE PLUS CHOISI"
            toggleHover={toggleHover}
          />
          
          <PrepaidCard
            title="Signature"
            subtitle="Pour les habitués"
            price="500 €"
            creditsInfo="625 crédits, soit 125 offerts"
            features={[
              "Environ 46 parties dont 9 offertes",
              "Soit 10,80 € la partie"
            ]}
            toggleHover={toggleHover}
          />
        </div>

        <div className="cartes-footer-note">
          Nombre de parties calculé sur la base d'une partie en heure pleine. En heures creuses, vous en jouez davantage. Tout se passe dans l'application Padel Signature.
        </div>

      </div>
    </section>
  );
};

export default CartesPrepayees;
