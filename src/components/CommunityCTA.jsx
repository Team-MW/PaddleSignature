import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, Clock, Trophy, Info } from 'lucide-react'; // Assuming lucide-react is installed

const CommunityCTA = () => {
  return (
    <section className="community-section" style={{ paddingTop: '2rem' }}>
      <div className="container community-flex-container">
        
        {/* Left Content */}
        <div className="community-text-content">
          <div className="community-subtitle-wrapper">
            <span className="community-line"></span>
            <span className="community-subtitle">NOTRE COMMUNAUTÉ</span>
          </div>
          
          <h2 className="community-title">
            Rejoignez la communauté<br />sur <span className="whatsapp-green">
              <svg viewBox="0 0 24 24" width="40" height="40" fill="#25D366" className="whatsapp-icon-inline" style={{ verticalAlign: 'middle', marginRight: '8px' }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>WhatsApp.</span>
          </h2>
          
          <p className="community-description">
            Trouvez des partenaires, restez informé des tournois et des créneaux de dernière minute, faites partie de la vie du club.
          </p>
          
          <div className="community-chips">
            <div className="community-chip">
              <Users size={16} /> Trouver des partenaires
            </div>
            <div className="community-chip">
              <Clock size={16} /> Créneaux de dernière minute
            </div>
            <div className="community-chip">
              <Trophy size={16} /> Tournois et événements
            </div>
            <div className="community-chip">
              <Info size={16} /> Infos du club
            </div>
          </div>
          
          <a href="#" className="btn btn-primary" style={{ background: '#25D366', borderColor: '#25D366', color: 'white' }}>
            <span>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg> Rejoindre le groupe
            </span>
          </a>
        </div>

      {/* Right Content - Phone Mockup Image */}
        <div className="community-visual">
          <div className="community-visual-block relative">
            <img 
              src="/wattapp.jpg" 
              alt="Application Communauté Padel" 
              className="community-mockup-img"
              style={{ maxWidth: '350px', width: '100%', height: 'auto', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CommunityCTA;
