import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Sponsoring = ({ toggleHover }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-fullscreen-bg">
          <img src="/image-en-plus.avif" alt="Sponsoring" />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="container hero-content-centered">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Sponsoring & <span className="serif italic text-white">Partenariats</span>
          </motion.h1>
          <motion.p 
            className="hero-desc-centered"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            Associez votre image au club de <span className="font-padel">Padel</span> le plus premium de Montauban. Devenez partenaire de nos tournois et événements.
          </motion.p>
        </div>
      </section>

      <section className="container" style={{ padding: '8rem 4rem', textAlign: 'center' }}>
        <h2 className="xl-title">Bientôt Disponible</h2>
        <p className="identity-p" style={{ margin: '0 auto' }}>
          La présentation détaillée de nos offres de sponsoring (visibilité terrains, naming, tournois) est en cours de préparation. Contactez-nous pour en savoir plus dès aujourd'hui.
        </p>
      </section>
    </>
  );
};

export default Sponsoring;
