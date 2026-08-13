import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = ({ heroRef, toggleHover, scale }) => {
  return (
    <header className="hero" ref={heroRef} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <motion.div className="hero-fullscreen-bg" style={{ scale }}>
        <img src="/hero-bg.jpg" alt="Padel Signature Montauban" />
        <div className="hero-overlay"></div>
      </motion.div>

      <div className="container hero-content-centered">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--terracotta)', fontWeight: '700', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
            PLUS QU'UN CLUB. UNE SIGNATURE.
          </div>
          <h1 className="serif" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            Bienvenue chez <br />
            <span className="italic" style={{ color: 'var(--terracotta)' }}>Padel Signature.</span>
          </h1>
          <h2 className="hero-desc-centered" style={{ maxWidth: '800px', fontSize: '1.25rem', marginBottom: '3rem' }}>
            Le confort du jeu, le plaisir des rencontres, l'émotion du partage. Ici, le padel est plus qu'un sport : une expérience à vivre au cœur de Montauban.
          </h2>
          <div className="hero-cta-centered">
            <Link to="/comment-reserver" className="btn" onMouseEnter={toggleHover} onMouseLeave={toggleHover} style={{ backgroundColor: 'var(--terracotta)', color: 'white', padding: '1.2rem 3rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 'bold', textDecoration: 'none' }}>
              RÉSERVER UN TERRAIN
            </Link>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '4rem', opacity: '0.9' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: 'var(--font-serif)', color: 'white' }}>4</div>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>TERRAINS PANORAMIQUES</div>
            </div>
            <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: 'var(--font-serif)', color: 'white' }}>8,50 m</div>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SOUS PLAFOND</div>
            </div>
            <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: 'var(--font-serif)', color: 'white' }}>1</div>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>CLUBHOUSE À L'ÉTAGE</div>
            </div>
            <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: 'var(--font-serif)', color: 'white' }}>1</div>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SALLE SÉMINAIRE</div>
            </div>
            <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: 'var(--font-serif)', color: 'white' }}>46</div>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>PLACES DE PARKING</div>
            </div>
            <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: 'var(--font-serif)', color: 'white' }}>24h/24</div>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>7J/7 · TOUTE L'ANNÉE</div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
