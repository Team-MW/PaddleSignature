import React from 'react';
import { Link } from 'react-router-dom';

const EntrepriseCollaborateurs = ({ toggleHover }) => {
  return (
    <section className="collaborateurs-section">
      <div className="container">
        <div className="grid-2 gap-100 align-items-center">
          
          <div className="order-2-mobile">
            <div className="community-subtitle-wrapper" style={{ justifyContent: 'flex-start' }}>
              <span className="community-line"></span>
              <span className="community-subtitle">POUR VOS COLLABORATEURS</span>
            </div>
            
            <h2 className="serif xl-title mb-20">
              La carte crédit <span className="italic" style={{ color: 'var(--terracotta)' }}>entreprise.</span>
            </h2>
            
            <p className="mb-20 text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              Offrez le padel à vos équipes, sans gérer les réservations une par une.
            </p>
            
            <div className="steps-list">
              <div className="step-item">
                <div className="step-number">01</div>
                <div>
                  <h4 className="step-title">NOUS OUVRONS VOTRE COMPTE</h4>
                  <p className="step-desc">Un compte au nom de l'entreprise, entièrement dématérialisé.</p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">02</div>
                <div>
                  <h4 className="step-title">VOUS CRÉDITEZ LE MONTANT DE VOTRE CHOIX</h4>
                  <p className="step-desc">Nous ajoutons un bonus, qui augmente avec le montant crédité.</p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">03</div>
                <div>
                  <h4 className="step-title">VOS ÉQUIPES RÉSERVENT</h4>
                  <p className="step-desc">Vous répartissez les crédits vers l'application de chaque collaborateur. Utilisables partout dans le club.</p>
                </div>
              </div>
            </div>
            
            <Link 
              to="/infos" 
              className="btn btn-terracotta mt-20"
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover}
            >
              En discuter avec nous
            </Link>
          </div>
          
          <div className="order-1-mobile">
            <div className="repere-box">
              <span className="repere-eyebrow">Le repère</span>
              <div className="serif repere-price">à partir de 10 €</div>
              <p className="repere-desc mb-20">
                Avec les bonus, la partie revient à partir de 10 € par joueur.
              </p>
              <p className="repere-desc">
                Vous décidez ensuite du tarif auquel vous refacturez vos équipes, ou vous prenez la totalité en charge. On en discute ensemble.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default EntrepriseCollaborateurs;
