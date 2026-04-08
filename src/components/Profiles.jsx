import React from 'react';
import { motion } from 'framer-motion';

const ProfileCard = ({ title, description, badge, image, delay, onHover }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    onMouseEnter={onHover}
    onMouseLeave={onHover}
    className="profile-modern"
  >
    <img src={image} alt={title} className="profile-img" />
    <div className="profile-content-overlay">
      <span className="profile-badge-text">{badge}</span>
      <h3 className="serif text-white">{title}</h3>
      <p className="profile-desc">{description}</p>
      <a href="#contact" className="profile-cta">
        Entrer dans l'univers
      </a>
    </div>
  </motion.div>
);

const Profiles = ({ toggleHover }) => {
  return (
    <section id="profiles" className="profiles-section">
      <div className="container">
         <div className="text-center mb-100">
           <h2 className="serif xl-title">Identifiez votre <span className="italic">Parcours.</span></h2>
         </div>
         
         <div className="profiles-scroll" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <ProfileCard 
              delay={0.1}
              badge="Je débute"
              title="Le Découvreur"
              description="Découvrez le padel dans un cadre premium."
              image="https://images.unsplash.com/photo-1444491741275-3747c53c99b4?q=80&w=1974&auto=format&fit=crop"
              onHover={toggleHover}
            />
            <ProfileCard 
              delay={0.2}
              badge="Je joue en journée"
              title="Le Matinal"
              description="Profitez des tarifs heures creuses."
              image="https://images.unsplash.com/photo-1544033527-b192daee1f5b?q=80&w=2070&auto=format&fit=crop"
              onHover={toggleHover}
            />
            <ProfileCard 
              delay={0.3}
              badge="Je joue après le boulot"
              title="Le Joueur du Soir"
              description="Réservez votre créneau soir en 2 clics."
              image="https://images.unsplash.com/photo-1599422315853-5d9c66bc28ca?q=80&w=2072&auto=format&fit=crop"
              onHover={toggleHover}
            />
            <ProfileCard 
              delay={0.4}
              badge="Je veux progresser"
              title="L'Athlète Constant"
              description="Coaching et tournois pour passer au niveau supérieur."
              image="https://images.unsplash.com/photo-1510915228340-29c85a43dbfe?q=80&w=2070&auto=format&fit=crop"
              onHover={toggleHover}
            />
            <ProfileCard 
              delay={0.5}
              badge="Je viens avec ma boîte"
              title="Le Cercle Business"
              description="Séminaires, team-building, événements sur-mesure."
              image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
              onHover={toggleHover}
            />
         </div>
      </div>
    </section>
  );
};

export default Profiles;
