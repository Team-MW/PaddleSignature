import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Coffee, ShoppingBag, Users, Trophy, Heart, ChevronRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay, onHover, number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 1 }}
    viewport={{ once: true }}
    onMouseEnter={onHover}
    onMouseLeave={onHover}
    className="service-card-premium"
  >
    <div className="card-number-bg serif">{number}</div>
    <div className="service-content-wrapper">
      <div className="icon-box-premium">
        <Icon size={24} />
      </div>
      <h3 className="serif card-title">{title}</h3>
      <p className="service-desc-premium">{description}</p>
    </div>
    <div className="card-footer-accent">
      <div className="accent-line"></div>
      <ChevronRight size={18} className="chevron-icon" />
    </div>
  </motion.div>
);

const Services = ({ toggleHover }) => {
  return (
    <section id="services" className="services">
      <div className="container">
         <div className="services-header-row">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
               <span className="uppercase badge-terracotta">L'Art de Vivre</span>
               <h2 className="serif text-white h2-xl">Infrastructures & <br/><span className="italic">Excellence.</span></h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="services-intro-p"
            >
              Chaque espace a été dessiné par des experts pour offrir une expérience sensorielle et sportive sans compromis.
            </motion.p>
         </div>

          <div className="services-masonry">
            <ServiceCard 
              delay={0.1}
              number="01"
              icon={Activity} 
              title="4 Courts Panoramiques" 
              description="Terrains indoor de prestige (9m de hauteur) avec scoring électronique intégré sur tous les courts."
              onHover={toggleHover}
            />
            <ServiceCard 
              delay={0.2}
              number="02"
              icon={Coffee} 
              title="Bar & Lounge R+1" 
              description="Vue panoramique sur les courts, comptoir terracotta signature et tireuses à bière pour vos après-matchs."
              onHover={toggleHover}
            />
            <ServiceCard 
              delay={0.3}
              number="03"
              icon={Users} 
              title="Salle VIP (31,6 m²)" 
              description="Espace d’exception privatisable pour vos réunions, séminaires et board meetings d'entreprise."
              onHover={toggleHover}
            />
            <ServiceCard 
              delay={0.4}
              number="04"
              icon={ShoppingBag} 
              title="Hall & Casiers" 
              description="Accueil premium, signalétique brandée, écran CMS et rangements dédiés à votre équipement."
              onHover={toggleHover}
            />
            <ServiceCard 
              delay={0.5}
              number="05"
              icon={Heart} 
              title="Vidéo Replay HD" 
              description="Replay automatique sur 2 terrains via l'app Live Experience pour revoir et analyser vos plus beaux points."
              onHover={toggleHover}
            />
            <ServiceCard 
              delay={0.6}
              number="06"
              icon={Trophy} 
              title="Affichage LED CMS" 
              description="Écrans LED sur chaque terrain et au bar, créant une ambiance visuelle immersive pour vos événements."
              onHover={toggleHover}
            />
          </div>
      </div>
    </section>
  );
};

export default Services;
