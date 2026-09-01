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
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '720px', margin: '0 auto' }}>
          {[
            { 
              icon: <Palette size={22} />, 
              title: 'Le club à vos couleurs', 
              desc: "Votre marque sur l'écran géant du couloir des terrains, à l'entrée et à l'étage. Le temps de l'événement, le club entier passe à vos couleurs." 
            },
            { 
              icon: <Coffee size={22} />, 
              title: 'Traiteur', 
              desc: 'Petit-déjeuner, cocktail déjeunatoire ou pauses gourmandes.' 
            },
            { 
              icon: <Camera size={22} />, 
              title: 'Photo et vidéo', 
              desc: "La journée captée en images, fichiers remis après l'événement." 
            },
            { 
              icon: <Moon size={22} />, 
              title: 'Afterwork prolongé', 
              desc: 'Le clubhouse privatisé pour prolonger la soirée entre collaborateurs.' 
            }
          ].map((item, i) => (
            <div key={i} style={{ 
              background: 'white', 
              borderRadius: '12px', 
              padding: '1.5rem', 
              border: '1px solid var(--border)', 
              display: 'flex', 
              gap: '1.2rem', 
              alignItems: 'flex-start' 
            }}>
              <div style={{ minWidth: '46px', width: '46px', height: '46px', borderRadius: '10px', backgroundColor: 'rgba(211, 167, 131, 0.15)', color: '#D3A783', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {item.icon}
              </div>
              <div style={{ textAlign: 'left' }}>
                <strong style={{ display: 'block', color: 'var(--dark-green)', fontFamily: 'var(--font-serif)', fontSize: '1.15rem', marginBottom: '4px' }}>{item.title}</strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5', display: 'block' }}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Tarif par personne, établi sur devis. Il baisse à mesure que le groupe s'agrandit.
        </div>
        
        <div className="text-center" style={{ marginTop: '3rem' }}>
          <Link 
            to="/infos#reservation-form" 
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
