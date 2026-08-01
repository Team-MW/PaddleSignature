import React from 'react';
import { Link } from 'react-router-dom';

const EntreprisePartenariats = ({ toggleHover }) => {
  return (
    <section className="partenariats-section">
      <div className="container">
        
        <div className="text-center mb-80" style={{ maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <div className="community-subtitle-wrapper" style={{ justifyContent: 'center' }}>
            <span className="community-line"></span>
            <span className="community-subtitle" style={{ color: '#D3A783' }}>PARTENARIATS</span>
            <span className="community-line"></span>
          </div>
          <h2 className="serif xl-title mb-20 text-white">
            Associez votre marque <span className="italic" style={{ color: '#D3A783' }}>au club.</span>
          </h2>
          <p className="text-white" style={{ fontSize: '1.1rem', lineHeight: '1.6', opacity: '0.9' }}>
            Deux façons d'être présent : votre marque à l'écran, un créneau rien qu'à vous. On assemble selon vos objectifs et votre budget, on cale ensemble ce qui vous convient.
          </p>
        </div>

        <div className="partenariat-block">
          <h3 className="serif text-white">
            <span style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', color: '#D3A783', fontFamily: 'var(--font-sans)', marginBottom: '0.5rem' }}>VISIBILITÉ</span>
            Votre marque, à l'écran.
          </h3>
          <p className="mb-40 text-white" style={{ opacity: '0.8', maxWidth: '600px' }}>
            Oubliez le panneau publicitaire figé. Nos écrans à affichage dynamique basculent en un instant, et le temps de votre créneau, le club passe à vos couleurs.
          </p>
          
          <div className="partenariat-list">
            <div className="partenariat-item">
              <h4 className="serif partenariat-item-title">Votre logo sur l'écran géant</h4>
              <p className="partenariat-item-desc text-white">En grand, au bord des terrains, tout au long de votre créneau.</p>
            </div>
            <div className="partenariat-item">
              <h4 className="serif partenariat-item-title">Le club à vos couleurs</h4>
              <p className="partenariat-item-desc text-white">L'affichage dynamique bascule à l'entrée, au couloir des terrains et à l'étage.</p>
            </div>
            <div className="partenariat-item">
              <h4 className="serif partenariat-item-title">Le mur des partenaires</h4>
              <p className="partenariat-item-desc text-white">Devant lequel posent les vainqueurs de nos tournois.</p>
            </div>
            <div className="partenariat-item">
              <h4 className="serif partenariat-item-title">Du club aux réseaux</h4>
              <p className="partenariat-item-desc text-white">Notre site, nos réseaux et nos newsletters, auprès de toute notre communauté.</p>
            </div>
          </div>
        </div>

        <div className="partenariat-block">
          <h3 className="serif text-white">
            <span style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', color: '#D3A783', fontFamily: 'var(--font-sans)', marginBottom: '0.5rem' }}>CRÉNEAUX RÉSERVÉS</span>
            Un créneau rien qu'à vous.
          </h3>
          <p className="mb-40 text-white" style={{ opacity: '0.8', maxWidth: '600px' }}>
            Un créneau récurrent pour vos équipes et vos clients, avec un terrain à votre nom dans l'application. À vous de choisir le rythme.
          </p>
          
          <div className="partenariat-list">
            <div className="partenariat-item">
              <h4 className="serif partenariat-item-title">Chaque semaine</h4>
              <p className="partenariat-item-desc text-white">Un rendez-vous hebdomadaire fixe, pour ancrer une vraie habitude.</p>
            </div>
            <div className="partenariat-item">
              <h4 className="serif partenariat-item-title">Chaque mois</h4>
              <p className="partenariat-item-desc text-white">Un créneau mensuel, pour recevoir clients ou collaborateurs.</p>
            </div>
            <div className="partenariat-item">
              <h4 className="serif partenariat-item-title">Chaque trimestre</h4>
              <p className="partenariat-item-desc text-white">Un temps fort régulier, à votre rythme.</p>
            </div>
            <div className="partenariat-item">
              <h4 className="serif partenariat-item-title">Un terrain à votre nom</h4>
              <p className="partenariat-item-desc text-white">Votre marque sur un court dans l'application de réservation.</p>
            </div>
          </div>
          
          <p className="mt-40 text-white text-center" style={{ fontStyle: 'italic', opacity: '0.8' }}>
            Les positions sont limitées et exclusives par secteur d'activité. On en discute ensemble, selon vos besoins.
          </p>
        </div>

        <div className="text-center mt-60">
          <Link 
            to="/contact" 
            className="btn btn-terracotta"
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            style={{ backgroundColor: 'white', color: 'var(--dark-green)' }}
          >
            Construisons votre partenariat
          </Link>
        </div>

      </div>
    </section>
  );
};

export default EntreprisePartenariats;
