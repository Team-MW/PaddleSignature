import React from 'react';

const AcademieSection = ({ toggleHover }) => {
  return (
    <section className="academie-section">
      <div className="container">
        
        <div className="academie-header">
          <div className="academie-subtitle-wrapper">
            <span className="community-line"></span>
            <span className="community-subtitle">ACADÉMIE</span>
          </div>
          
          <h2 className="serif xl-title mb-20">
            Progressez <span className="italic" style={{ color: 'var(--terracotta)' }}>toute l'année</span>
          </h2>
          
          <p className="academie-desc">
            Des séances d'1h30 en groupe de 4, réparties par niveau. On travaille des exercices, on remet en situation, on progresse vraiment.
          </p>
          <p className="academie-desc academie-desc-coach">
            Encadrement par notre coach Sébastien Lapena, plus de 20 ans d'expérience en tennis et padel.
          </p>
          <p className="academie-desc-meta">
            25 séances sur l'année · hors périodes de vacances scolaires
          </p>
        </div>

        <div className="academie-blocks">
          <article className="academie-block">
            <span className="academie-block-badge">Adultes</span>
            <h3 className="serif academie-block-title">Lundi et mardi</h3>
            <p className="academie-block-time">16h30 – 21h00</p>
            <p className="academie-block-detail">
              Créneaux d'1h30 selon vos disponibilités et votre niveau. Tous niveaux.
            </p>
            <div className="academie-block-price">625 € l'année</div>
            <div className="academie-block-divider"></div>
            <p className="academie-block-start">Dès la semaine du 28 septembre</p>
          </article>

          <article className="academie-block">
            <span className="academie-block-badge">Enfants</span>
            <h3 className="serif academie-block-title">Mercredi</h3>
            <p className="academie-block-time">16h30 – 18h00</p>
            <p className="academie-block-detail">
              Deux groupes : 9-12 ans et 13-17 ans.
            </p>
            <div className="academie-block-price">370 € l'année</div>
            <div className="academie-block-divider"></div>
            <p className="academie-block-start">Dès le mercredi 30 septembre</p>
          </article>
        </div>

        <div className="academie-footer">
          <span className="academie-welcome-badge">Pack de bienvenue offert</span>
          <p className="academie-footer-note">
            Les groupes sont limités à 4 joueurs. Appelez-nous pour vous inscrire, on vous place dans le groupe qui vous correspond.
          </p>
          <a
            href="tel:0531970301"
            className="btn btn-terracotta academie-phone-btn"
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
          >
            05 31 97 03 01
          </a>
          <p className="academie-footer-cta">Appelez-nous pour vous inscrire</p>
        </div>

      </div>
    </section>
  );
};

export default AcademieSection;
