import React from 'react';
import { motion } from 'framer-motion';

const Identity = ({ toggleHover, yParallax }) => {
  return (
    <section id="about" className="identity">
      <div className="container">
        <div className="grid-asym-2">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="identity-text"
          >
            <span className="uppercase badge-terracotta">L'Identité</span>
            <h2 className="serif xl-title">
              Redéfinir les <br/>
              <span className="italic">Codes de l'Exception.</span>
            </h2>
            <p className="identity-p">
              Padel Signature est le premier complexe indoor premium de Montauban. Prévu pour août 2026, notre club incarne la fusion parfaite entre performance athlétique et raffinement contemporain, pensé pour les joueurs réguliers et les entreprises.
            </p>
            <div className="identity-features">
               <div className="feat">
                  <span className="feat-num">4</span>
                  <span className="feat-text">Panoramiques</span>
               </div>
               <div className="feat">
                  <span className="feat-num">38</span>
                  <span className="feat-text">Places Parking</span>
               </div>
            </div>
          </motion.div>

          <motion.div 
            style={{ y: yParallax }}
            className="identity-visual-grid"
          >
              <div className="iv-main-full" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <img src="/identity-main.jpg" alt="Padel Signature Premium Field" loading="lazy" />
                <div className="image-overlay-subtle"></div>
              </div>
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="floating-signature-tag"
             >
               <span className="serif italic">L'Excellence</span>
               <div className="line-divider"></div>
               <span className="uppercase">Montauban</span>
             </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Identity;
