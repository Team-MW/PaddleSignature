import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Car, ChevronRight } from 'lucide-react';

const InfoCard = ({ icon: Icon, title, content, delay, onHover }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    viewport={{ once: true }}
    onMouseEnter={onHover}
    onMouseLeave={onHover}
    className="loc-info-card"
  >
    <div className="loc-card-icon">
      <Icon size={24} />
    </div>
    <div className="loc-card-content">
      <h4 className="serif">{title}</h4>
      <p>{content}</p>
    </div>
  </motion.div>
);

const Localisation = ({ toggleHover }) => {
  return (
    <section id="localisation" className="localisation-section">
      <div className="container">
        <div className="text-center mb-80">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="badge-terracotta"
          >
            Nous trouver
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="serif xl-title"
          >
            Votre Club Padel à <span className="italic">Montauban.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="loc-intro"
          >
            Idéalement situé dans la Zone Albasud, Padel Signature est votre nouveau QG sportif au cœur du Tarn-et-Garonne.
          </motion.p>
        </div>

        <div className="loc-content-grid">
          <div className="loc-info-pane">
            <InfoCard 
              delay={0.1}
              icon={MapPin}
              title="Adresse"
              content="1577 Avenue d’Italie, Zone Albasud, 82000 Montauban"
              onHover={toggleHover}
            />
            <InfoCard 
              delay={0.2}
              icon={Clock}
              title="Horaires"
              content="Ouvert tous les jours (9h - 23h). Accès autonome hors équipe."
              onHover={toggleHover}
            />
            <InfoCard 
              delay={0.3}
              icon={Car}
              title="Parking"
              content="38 places gratuites dont 1 PMR / Stationnement vélos sécurisé."
              onHover={toggleHover}
            />
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="loc-cta-wrapper"
            >
              <a href="#contact" className="btn btn-primary" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <span>Nous contacter</span>
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="loc-map-container"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.2872322521975!2d1.3283282!3d43.9937398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12abecf21eecfffb%3A0xc6cf6d421544a476!2s1577%20Avenue%20d'Italie%2C%2082000%20Montauban!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
            <div className="map-overlay-grain"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Localisation;
