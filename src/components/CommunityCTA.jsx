import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, Clock, Trophy, Info } from 'lucide-react'; // Assuming lucide-react is installed

const CommunityCTA = () => {
  return (
    <section className="community-section">
      <div className="container community-flex-container">
        
        {/* Left Content */}
        <div className="community-text-content">
          <div className="community-subtitle-wrapper">
            <span className="community-line"></span>
            <span className="community-subtitle">NOTRE COMMUNAUTÉ</span>
          </div>
          
          <h2 className="community-title">
            Rejoignez la communauté<br />sur <span className="whatsapp-green"><MessageCircle className="whatsapp-icon-inline" size={40} fill="currentColor" /> WhatsApp.</span>
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
          
          <a href="#" className="btn btn-primary">
            <span><MessageCircle size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} /> Rejoindre le groupe</span>
          </a>
        </div>

        {/* Right Content - Phone Mockup */}
        <div className="community-visual">
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="community-phone-mockup"
          >
            <div className="phone-header">
              <div className="phone-avatar">S</div>
              <div className="phone-header-text">
                <div className="phone-header-title">Padel Signature</div>
                <div className="phone-header-subtitle">Communauté · le groupe des membres</div>
              </div>
            </div>
            
            <div className="phone-body">
              <div className="phone-list-item">
                <div className="phone-icon-bg"><Users size={18} className="phone-icon" /></div>
                <div className="phone-item-text">
                  <div className="phone-item-title">Recherche de partenaires</div>
                  <div className="phone-item-desc">Il manque 1 joueur ce soir à 19h</div>
                </div>
              </div>
              
              <div className="phone-list-item">
                <div className="phone-icon-bg"><Trophy size={18} className="phone-icon" /></div>
                <div className="phone-item-text">
                  <div className="phone-item-title">Tournois et événements</div>
                  <div className="phone-item-desc">Américano samedi, inscriptions ouvertes</div>
                </div>
              </div>
              
              <div className="phone-list-item">
                <div className="phone-icon-bg"><Clock size={18} className="phone-icon" /></div>
                <div className="phone-item-text">
                  <div className="phone-item-title">Créneaux de dernière minute</div>
                  <div className="phone-item-desc">Un terrain vient de se libérer à 21h</div>
                </div>
              </div>
              
              <div className="phone-list-item">
                <div className="phone-icon-bg"><Info size={18} className="phone-icon" /></div>
                <div className="phone-item-text">
                  <div className="phone-item-title">Actus du club</div>
                  <div className="phone-item-desc">Le clubhouse ouvre plus tôt ce week-end</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default CommunityCTA;
