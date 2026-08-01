import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

const AcademieSection = ({ toggleHover }) => {
  return (
    <section className="academie-section">
      <div className="container">
        
        <div className="academie-header">
          <div className="academie-subtitle-wrapper">
            <span className="academie-badge">À PARTIR DE SEPTEMBRE 2026</span>
            <span className="community-line"></span>
            <span className="community-subtitle">ACADÉMIE</span>
          </div>
          
          <h2 className="serif xl-title mb-20">
            Une saison <span className="italic" style={{ color: 'var(--terracotta)' }}>complète.</span>
          </h2>
          
          <p className="academie-desc">
            25 séances sur l'année, en groupe et par niveau. Une formule pour progresser dans la durée.
          </p>
        </div>

        <div className="academie-card">
          <div className="academie-card-header">
            <h3 className="serif text-white academie-card-title">25 séances sur l'année</h3>
            <p className="academie-card-subtitle">Une séance par semaine, en groupe de 4 et par niveau.</p>
          </div>
          
          <div className="academie-list">
            <div className="academie-list-item">
              <User size={20} className="academie-icon" />
              <div className="academie-item-text">
                <span className="font-bold text-white">Enfants</span>
                <span className="academie-item-desc">7 à 12 ans · groupe de 4, par niveau</span>
              </div>
            </div>
            
            <div className="academie-list-item">
              <User size={20} className="academie-icon" />
              <div className="academie-item-text">
                <span className="font-bold text-white">Jeunes</span>
                <span className="academie-item-desc">13 à 17 ans · groupe de 4, par niveau</span>
              </div>
            </div>
            
            <div className="academie-list-item">
              <User size={20} className="academie-icon" />
              <div className="academie-item-text">
                <span className="font-bold text-white">Adultes</span>
                <span className="academie-item-desc">groupe de 4, par niveau</span>
              </div>
            </div>
          </div>
        </div>

        <div className="academie-footer">
          <p className="academie-footer-note">Tarifs communiqués prochainement.</p>
          <Link 
            to="/contact" 
            className="btn btn-terracotta" 
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
          >
            Se préinscrire
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AcademieSection;
