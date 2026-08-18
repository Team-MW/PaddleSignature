import React, { useState } from 'react';

const tabsData = {
  matinee: [
    { time: '09h00', title: 'ACCUEIL', desc: 'Café au clubhouse, vestiaires à disposition.' },
    { time: '09h30', title: 'SESSION DE TRAVAIL', desc: 'La salle séminaire privatisée, équipée pour vos présentations.' },
    { time: '10h30', title: 'SUR LES TERRAINS', desc: 'Initiation, tournoi ou américano. Raquettes et balles fournies.' },
    { time: '12h30', title: 'DÉJEUNER', desc: 'Sur place au clubhouse, ou formule traiteur.' },
  ],
  apresMidi: [
    { time: '14h00', title: 'ACCUEIL', desc: 'Café au clubhouse, vestiaires à disposition.' },
    { time: '14h30', title: 'SESSION DE TRAVAIL', desc: 'La salle séminaire privatisée, équipée pour vos présentations.' },
    { time: '15h30', title: 'SUR LES TERRAINS', desc: 'Initiation, tournoi ou américano. Raquettes et balles fournies.' },
    { time: '17h30', title: 'AFTERWORK', desc: 'Sur place au clubhouse avec planches à partager.' },
  ],
  journee: [
    { time: '09h00', title: 'ACCUEIL', desc: 'Café au clubhouse, vestiaires à disposition.' },
    { time: '09h30', title: 'SESSION DE TRAVAIL', desc: 'La salle séminaire privatisée, équipée pour vos présentations.' },
    { time: '12h30', title: 'DÉJEUNER', desc: 'Sur place au clubhouse, ou formule traiteur.' },
    { time: '14h00', title: 'SUR LES TERRAINS', desc: 'Initiation, tournoi ou américano. Raquettes et balles fournies.' },
  ]
};

const EntrepriseEvenements = () => {
  const [activeTab, setActiveTab] = useState('matinee');
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

        <div className="seminaire-card">
          <h3 className="serif h3-title mb-20 text-center" style={{ fontSize: '1.4rem' }}>À quoi ressemble une journée chez nous.</h3>
          
          <div className="badges-group mb-40" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
            <button 
              onClick={() => setActiveTab('matinee')}
              style={{ 
                background: 'transparent', 
                border: activeTab === 'matinee' ? 'none' : '1px solid var(--border)', 
                color: activeTab === 'matinee' ? 'var(--terracotta)' : 'var(--dark-green)', 
                fontWeight: activeTab === 'matinee' ? 'bold' : 'normal',
                padding: activeTab === 'matinee' ? '0' : '0.4rem 1.2rem', 
                borderRadius: '50px', 
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                cursor: 'pointer'
              }}>
              Matinée
            </button>
            <button 
              onClick={() => setActiveTab('apresMidi')}
              style={{ 
                background: 'transparent', 
                border: activeTab === 'apresMidi' ? 'none' : '1px solid var(--border)', 
                color: activeTab === 'apresMidi' ? 'var(--terracotta)' : 'var(--dark-green)', 
                fontWeight: activeTab === 'apresMidi' ? 'bold' : 'normal',
                padding: activeTab === 'apresMidi' ? '0' : '0.4rem 1.2rem', 
                borderRadius: '50px', 
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                cursor: 'pointer'
              }}>
              Après-midi
            </button>
            <button 
              onClick={() => setActiveTab('journee')}
              style={{ 
                background: 'transparent', 
                border: activeTab === 'journee' ? 'none' : '1px solid var(--border)', 
                color: activeTab === 'journee' ? 'var(--terracotta)' : 'var(--dark-green)', 
                fontWeight: activeTab === 'journee' ? 'bold' : 'normal',
                padding: activeTab === 'journee' ? '0' : '0.4rem 1.2rem', 
                borderRadius: '50px', 
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                cursor: 'pointer'
              }}>
              Journée complète
            </button>
          </div>

          <div className="timeline-container mx-auto" style={{ maxWidth: '500px' }}>
            {tabsData[activeTab].map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-time">{item.time}</div>
                <div className="timeline-content">
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-desc" style={{ fontSize: '0.9rem', opacity: 0.8 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-muted mb-40 text-center mx-auto" style={{ fontSize: '0.85rem', fontStyle: 'italic', borderTop: '1px solid var(--border)', paddingTop: '1.5rem', maxWidth: '500px' }}>
            Trois formats parmi d'autres. On construit le vôtre selon votre durée, votre effectif et vos objectifs.
          </p>
          
          <div className="premium-list mx-auto" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '500px' }}>
            <div className="business-card-premium" style={{ padding: '1.5rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: '8px', boxShadow: 'none' }}>
              <h4 className="serif mb-10 text-center" style={{ fontSize: '1.2rem', color: 'var(--dark-green)' }}>Les terrains</h4>
              <p className="text-muted text-center" style={{ fontSize: '0.9rem' }}>De 1 à 4 terrains pendant 1h30. Raquettes, balles et boissons comprises. Vos visuels sur les écrans du club.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntrepriseEvenements;
