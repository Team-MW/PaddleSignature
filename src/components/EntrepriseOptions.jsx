import React from 'react';
import { Palette, Coffee, Camera, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

const EntrepriseOptions = ({ toggleHover }) => {
  return (
    <section className="options-section">
      <div className="container">
        
        <div className="community-subtitle-wrapper" style={{ justifyContent: 'center' }}>
          <span className="community-line"></span>
          <span className="community-subtitle">LES OPTIONS</span>
          <span className="community-line"></span>
        </div>
        
        <div className="options-grid">
          <div className="option-card">
            <Palette size={32} className="option-icon" />
            <h4 className="serif option-title">Le club à vos couleurs</h4>
            <p className="option-desc">Votre marque sur l'écran géant du couloir des terrains, à l'entrée et à l'étage. Le temps de l'événement, le club entier passe à vos couleurs.</p>
          </div>
          
          <div className="option-card">
            <Coffee size={32} className="option-icon" />
            <h4 className="serif option-title">Traiteur</h4>
            <p className="option-desc">Petit-déjeuner, cocktail déjeunatoire ou pauses gourmandes.</p>
          </div>
          
          <div className="option-card">
            <Camera size={32} className="option-icon" />
            <h4 className="serif option-title">Photo et vidéo</h4>
            <p className="option-desc">La journée captée en images, fichiers remis après l'événement.</p>
          </div>
          
          <div className="option-card">
            <Moon size={32} className="option-icon" />
            <h4 className="serif option-title">Afterwork prolongé</h4>
            <p className="option-desc">Le clubhouse privatisé pour prolonger la soirée entre collaborateurs.</p>
          </div>
        </div>
        
        <div className="text-center mt-60">
          <Link 
            to="/contact" 
            className="btn btn-terracotta"
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
          >
            Demander un devis
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default EntrepriseOptions;
