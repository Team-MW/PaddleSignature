import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Users } from 'lucide-react';

const Identity = ({ toggleHover, yParallax }) => {
  return (
    <section className="identity-section section-padding overflow-hidden">
      <div className="container">
        <div className="grid-2 align-center">
          <div className="identity-visual relative">
            <motion.div style={{ y: yParallax }} className="parallax-img-wrapper">
              <img src="/people-playing-padle-tennis-inside.jpg" alt="Padel Spirit" className="img-premium-border" />
            </motion.div>
            <div className="floating-stat" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
              <span className="serif stat-xl">100%</span>
              <p>Passion</p>
            </div>
          </div>
          <div className="identity-content pl-60">
            <span className="badge-terracotta">Notre ADN</span>
            <h2 className="serif xl-title">L'alliance du style <br/><span className="italic">& de la performance.</span></h2>
            <p className="description-text mb-40">
              Padel Signature n'est pas qu'un simple club de sport. C'est un lieu de vie pensé pour ceux qui ne veulent pas choisir entre confort et compétition. Nous avons créé cet espace pour offrir une expérience sans compromis.
            </p>
            
            <div className="features-mini-grid">
              <div className="feature-mini-item">
                <div className="icon-circle"><Award size={20} /></div>
                <div>
                  <h4 className="serif">Excellence</h4>
                  <p>Infrastructures de niveau World Padel Tour.</p>
                </div>
              </div>
              <div className="feature-mini-item">
                <div className="icon-circle"><Zap size={20} /></div>
                <div>
                  <h4 className="serif">Dynamisme</h4>
                  <p>Une communauté active et des tournois réguliers.</p>
                </div>
              </div>
              <div className="feature-mini-item">
                <div className="icon-circle"><Users size={20} /></div>
                <div>
                  <h4 className="serif">Convivialité</h4>
                  <p>Un bar lounge panoramique pour l'après-match.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identity;
