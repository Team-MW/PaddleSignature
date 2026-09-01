import React from 'react';

const EntrepriseEspaces = () => {
  return (
    <section className="entreprise-espaces-section">
      <div className="container">
        <div className="grid-2 gap-100 align-items-center">
          <div>
            <div className="community-subtitle-wrapper" style={{ justifyContent: 'flex-start' }}>
              <span className="community-line"></span>
              <span className="community-subtitle">NOS ESPACES</span>
            </div>
            
            <h2 className="serif xl-title mb-20">
              Un club conçu <span className="italic" style={{ color: 'var(--terracotta)' }}>pour recevoir.</span>
            </h2>
            
            <p className="mb-20 text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              Quatre terrains, une salle séminaire privatisable et un clubhouse avec vue sur les courts. Le tout au même endroit, avec un parking sur place.
            </p>
            
            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              Le <span className="font-padel">padel</span> s'apprend en quelques minutes. Vos équipes ou vos clients jouent ensemble dès la première fois, quel que soit leur niveau. Personne ne reste sur le côté.
            </p>
          </div>
          
          <div className="espaces-stats-grid">
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">terrains</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1</div>
              <div className="stat-label">salle séminaire</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1</div>
              <div className="stat-label">clubhouse</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">46</div>
              <div className="stat-label">places parking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntrepriseEspaces;
