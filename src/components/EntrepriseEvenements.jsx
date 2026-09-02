import React, { useState } from 'react';

const tabsData = {
  matinee: [
    { time: '09h00', title: 'ACCUEIL', desc: 'Café au clubhouse, vestiaires à disposition.' },
    { time: '09h30', title: 'SESSION DE TRAVAIL', desc: 'La salle séminaire privatisée, équipée pour vos présentations.' },
    { time: '10h30', title: 'SUR LES TERRAINS', desc: 'Initiation, tournoi ou américano. Raquettes et balles fournies.' },
    { time: '12h30', title: 'DÉJEUNER', desc: 'Sur place au clubhouse, ou formule traiteur.' },
  ],
  apresMidi: [
    { time: '13h30', title: 'ACCUEIL', desc: 'Café au clubhouse, vestiaires à disposition.' },
    { time: '13h45', title: 'SESSION DE TRAVAIL', desc: 'La salle séminaire privatisée, équipée pour vos présentations.' },
    { time: '15h00', title: 'SUR LES TERRAINS', desc: 'Initiation, tournoi ou américano. Raquettes et balles fournies.' },
    { time: '16h00', title: 'AFTERWORK', desc: 'Sur place au clubhouse avec planches à partager.' },
  ],
  journee: [
    { time: '09h00', title: 'ACCUEIL', desc: 'Café au clubhouse, vestiaires à disposition.' },
    { time: '09h30', title: 'SESSION DE TRAVAIL', desc: 'La salle séminaire privatisée, équipée pour vos présentations.' },
    { time: '12h30', title: 'DÉJEUNER', desc: 'Sur place au clubhouse, ou formule traiteur.' },
    { time: '13h45', title: 'SUR LES TERRAINS', desc: 'Initiation, tournoi ou américano. Raquettes et balles fournies.' },
    { time: '16h00', title: 'AFTERWORK', desc: 'Sur place au clubhouse avec planches à partager.' },
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
            Séminaires, team building, <span className="italic" style={{ color: 'var(--terracotta)' }}>privatisations</span>
          </h2>
          <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Vous réservez les terrains, puis vous composez votre journée. On s'occupe du reste : matériel, boissons, encadrement, mise en place.
          </p>
        </div>

        <div className="seminaire-card">
          <h3 className="serif h3-title mb-20 text-center" style={{ fontSize: '1.4rem' }}>À quoi ressemble une journée chez nous</h3>
          
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

          <div className="timeline-container" style={{ maxWidth: '600px', margin: '0 auto' }}>
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
          
          <p className="text-muted mb-40 text-center" style={{ fontSize: '0.85rem', fontStyle: 'italic', borderTop: '1px solid var(--border)', paddingTop: '1.5rem', maxWidth: '600px', margin: '2rem auto 2.5rem auto' }}>
            Trois formats parmi d'autres. On construit le vôtre selon votre durée, votre effectif et vos objectifs.
          </p>
          
          <div className="premium-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.5rem', textAlign: 'left' }}>
              <h4 className="serif mb-10" style={{ fontSize: '1.2rem', color: 'var(--dark-green)' }}>Les terrains</h4>
              <p className="text-muted" style={{ fontSize: '0.9rem', margin: 0 }}>De 1 à 4 terrains pendant 1h30. Raquettes, balles et boissons comprises. Vos visuels sur les écrans du club.</p>
            </div>
            
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.5rem', textAlign: 'left' }}>
              <h4 className="serif mb-10" style={{ fontSize: '1.2rem', color: 'var(--dark-green)' }}>Terrains et salle séminaire</h4>
              <p className="text-muted" style={{ fontSize: '0.9rem', margin: 0 }}>La formule terrains, avec notre salle séminaire privatisée et équipée : écran, wifi, climatisation.</p>
            </div>
            
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.5rem', textAlign: 'left' }}>
              <h4 className="serif mb-10" style={{ fontSize: '1.2rem', color: 'var(--dark-green)' }}>Terrains et coaching</h4>
              <p className="text-muted" style={{ fontSize: '0.9rem', margin: 0 }}>La formule terrains, avec un coach dédié sur vos courts. Initiation, tournoi ou américano selon les niveaux.</p>
            </div>
            
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.5rem', textAlign: 'left' }}>
              <h4 className="serif mb-10" style={{ fontSize: '1.2rem', color: 'var(--dark-green)' }}>La formule complète</h4>
              <p className="text-muted" style={{ fontSize: '0.9rem', margin: 0 }}>Terrains, salle séminaire, coaching et écrans à vos couleurs. La journée organisée de bout en bout.</p>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '1rem', textAlign: 'left' }}>
              Tarif par personne, établi sur devis. Il baisse à mesure que le groupe s'agrandit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntrepriseEvenements;
