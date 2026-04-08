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
             <div className="iv-main" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <img src="https://images.unsplash.com/photo-1544033527-b192daee1f5b?q=80&w=2070&auto=format&fit=crop" alt="Premium Padel" />
             </div>
             <div className="iv-sub" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <img src="https://images.unsplash.com/photo-1510915228340-29c85a43dbfe?q=80&w=2070&auto=format&fit=crop" alt="Club details" />
             </div>
             <div className="signature-stamp">P. Signature</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Identity;
