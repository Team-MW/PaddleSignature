import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Coffee, Users, Briefcase, Car, Clock, ChevronRight } from 'lucide-react';

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
               <span className="uppercase badge-terracotta">NOS ESPACES</span>
               <h2 className="serif text-white h2-xl">Un lieu pensé <br/><span className="italic">pour le jeu.</span></h2>
            </motion.div>
         </div>

          <div className="services-masonry">
            <ServiceCard 
              delay={0.1}
              number="01"
              icon={Activity} 
              title="Les terrains" 
              description="Quatre courts panoramiques indoor, 9 m sous plafond."
              onHover={toggleHover}
            />
            <ServiceCard 
              delay={0.2}
              number="02"
              icon={Coffee} 
              title="Le clubhouse" 
              description="À l'étage, avec vue sur les courts et un comptoir terracotta."
              onHover={toggleHover}
            />
            <ServiceCard 
              delay={0.3}
              number="03"
              icon={Users} 
              title="La salle séminaire" 
              description="Un espace privatisable pour vos réunions et vos événements."
              onHover={toggleHover}
            />
            <ServiceCard 
              delay={0.4}
              number="04"
              icon={Briefcase} 
              title="Vestiaires" 
              description="Casiers et douches, tout le confort avant et après le jeu."
              onHover={toggleHover}
            />
            <ServiceCard 
              delay={0.5}
              number="05"
              icon={Car} 
              title="46 places de parking" 
              description="Un parking gratuit sur place, place PMR et vélos."
              onHover={toggleHover}
            />
            <ServiceCard 
              delay={0.6}
              number="06"
              icon={Clock} 
              title="Accès 24h/24" 
              description="Vous entrez par QR code, à toute heure, en autonomie."
              onHover={toggleHover}
            />
          </div>
      </div>
    </section>
  );
};

export default Services;
