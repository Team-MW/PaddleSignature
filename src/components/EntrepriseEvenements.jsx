import React from 'react';

const EntrepriseEvenements = () => {
  return (
    <section className="evenements-section">
      <div className="container">
        
        <div className="text-center mb-80" style={{ maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <div className="community-subtitle-wrapper" style={{ justifyContent: 'center' }}>
            <span className="community-line"></span>
            <span className="community-subtitle">ÉVÉNEMENTS</span>
            <span className="community-line"></span>
          </div>
          <h2 className="serif xl-title mb-20">
            Séminaires, team building, <span className="italic" style={{ color: 'var(--terracotta)' }}>privatisations.</span>
          </h2>
          <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Vous réservez les terrains, puis vous composez votre journée. On s'occupe du reste : matériel, boissons, encadrement, mise en place.
          </p>
        </div>

        <div className="grid-2 gap-100">
          <div>
            <h3 className="serif h3-title mb-40">À quoi ressemble une journée chez nous.</h3>
            
            <div className="badges-group mb-40">
              <span className="badge-terracotta">Matinée</span>
              <span className="badge-terracotta" style={{ background: 'var(--cream)', color: 'var(--text-main)' }}>Après-midi</span>
              <span className="badge-terracotta" style={{ background: 'var(--cream)', color: 'var(--text-main)' }}>Journée complète</span>
            </div>

            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-time">09h00</div>
                <div className="timeline-content">
                  <h4 className="timeline-title">ACCUEIL</h4>
                  <p className="timeline-desc">Café au clubhouse, vestiaires à disposition.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-time">09h30</div>
                <div className="timeline-content">
                  <h4 className="timeline-title">SESSION DE TRAVAIL</h4>
                  <p className="timeline-desc">La salle séminaire privatisée, équipée pour vos présentations.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-time">10h30</div>
                <div className="timeline-content">
                  <h4 className="timeline-title">SUR LES TERRAINS</h4>
                  <p className="timeline-desc">Initiation, tournoi ou américano. Raquettes et balles fournies.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-time">12h30</div>
                <div className="timeline-content">
                  <h4 className="timeline-title">DÉJEUNER</h4>
                  <p className="timeline-desc">Sur place au clubhouse, ou formule traiteur.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="serif h3-title mb-40" style={{ color: 'var(--dark-green)' }}>Trois formats parmi d'autres. <br /><span className="italic" style={{ fontSize: '1.2rem', fontFamily: 'var(--font-sans)', fontWeight: '400', display: 'block', marginTop: '10px' }}>On construit le vôtre selon votre durée, votre effectif et vos objectifs.</span></h3>
            
            <div className="premium-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="business-card-premium" style={{ padding: '1.5rem', background: 'var(--cream)' }}>
                <h4 className="serif mb-10" style={{ fontSize: '1.3rem' }}>Les terrains</h4>
                <p className="text-muted" style={{ fontSize: '0.95rem' }}>De 1 à 4 terrains pendant 1h30. Raquettes, balles et boissons comprises. Vos visuels sur les écrans du club.</p>
              </div>
              
              <div className="business-card-premium" style={{ padding: '1.5rem', background: 'var(--cream)' }}>
                <h4 className="serif mb-10" style={{ fontSize: '1.3rem' }}>Terrains et salle séminaire</h4>
                <p className="text-muted" style={{ fontSize: '0.95rem' }}>La formule terrains, avec notre salle séminaire privatisée et équipée : écran, wifi, climatisation.</p>
              </div>
              
              <div className="business-card-premium" style={{ padding: '1.5rem', background: 'var(--cream)' }}>
                <h4 className="serif mb-10" style={{ fontSize: '1.3rem' }}>Terrains et coaching</h4>
                <p className="text-muted" style={{ fontSize: '0.95rem' }}>La formule terrains, avec un coach dédié sur vos courts. Initiation, tournoi ou américano selon les niveaux.</p>
              </div>
              
              <div className="business-card-premium" style={{ padding: '1.5rem', background: 'var(--dark-green)', color: 'white' }}>
                <h4 className="serif mb-10" style={{ fontSize: '1.3rem', color: 'white' }}>La formule complète</h4>
                <p style={{ fontSize: '0.95rem', opacity: '0.8' }}>Terrains, salle séminaire, coaching et écrans à vos couleurs. La journée organisée de bout en bout.</p>
              </div>
            </div>
            
            <p className="mt-20 text-muted" style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>
              Tarif par personne, établi sur devis. Il baisse à mesure que le groupe s'agrandit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntrepriseEvenements;
