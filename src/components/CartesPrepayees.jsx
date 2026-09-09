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
          to="/infos#reservation-form" 
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
            Jouez plus, <span className="italic" style={{ color: 'var(--terracotta)' }}>payez moins</span>
          </h2>
          
          <p className="cartes-desc">
            Vous créditez le montant de votre choix, nous ajoutons un bonus. 1 crédit = 1 euro · utilisables partout dans le club · valables un an.
          </p>
        </div>

        <div className="prepaid-grid">
          <PrepaidCard
            title="Découverte"
            subtitle="Pour essayer"
            price="135 €"
            creditsInfo="162 crédits, soit 27 offerts"
            features={[
              "12 parties au lieu de 10, dont 2 offertes"
            ]}
            toggleHover={toggleHover}
          />
          
          <PrepaidCard
            title="Confort"
            subtitle="Pour jouer régulièrement"
            price="270 €"
            creditsInfo="338 crédits, soit 68 offerts"
            features={[
              "25 parties au lieu de 20, dont 5 offertes"
            ]}
            isHighlighted={true}
            badge="LE PLUS CHOISI"
            toggleHover={toggleHover}
          />
          
          <PrepaidCard
            title="Signature"
            subtitle="Pour les habitués"
            price="540 €"
            creditsInfo="702 crédits, soit 162 offerts"
            features={[
              "52 parties au lieu de 40, dont 12 offertes"
            ]}
            toggleHover={toggleHover}
          />
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '20px' }}>Nombre de parties calculé sur la base d'une partie en heure pleine. En heures creuses, vous en jouez davantage. Tout se passe dans l'application <span className="font-padel">Padel</span> <span className="font-signature">Signature</span>.</p>

      </div>
    </section>
  );
};

export default CartesPrepayees;
