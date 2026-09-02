import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import signatureImg from '../assets/images/signature.avif';

const Hero = ({ heroRef, toggleHover }) => {
  const stats = (
    <>
      <div style={{ textAlign: 'center', flexShrink: 0 }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>4</div>
        <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>TERRAINS PANORAMIQUES</div>
      </div>
      <div className="stat-divider" style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
      <div style={{ textAlign: 'center', flexShrink: 0 }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>9 m</div>
        <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SOUS PLAFOND</div>
      </div>
      <div className="stat-divider" style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
      <div style={{ textAlign: 'center', flexShrink: 0 }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>1</div>
        <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>CLUBHOUSE À L'ÉTAGE</div>
      </div>
      <div className="stat-divider" style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
      <div style={{ textAlign: 'center', flexShrink: 0 }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>1</div>
        <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>SALLE SÉMINAIRE</div>
      </div>
      <div className="stat-divider" style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
      <div style={{ textAlign: 'center', flexShrink: 0 }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>46</div>
        <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>PLACES DE PARKING</div>
      </div>
      <div className="stat-divider" style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
      <div style={{ textAlign: 'center', flexShrink: 0 }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>24h/24</div>
        <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>7J/7 · TOUTE L'ANNÉE</div>
      </div>
    </>
  );

  return (
    <header className="hero" ref={heroRef} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <div className="hero-fullscreen-bg">
        <video src="/ImagePadelSignature.mov" autoPlay loop muted playsInline></video>
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content-centered">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="serif" style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', marginBottom: '2.5rem', lineHeight: '1.1', fontWeight: 'normal' }}>
            Bienvenue chez <span className="font-padel">Padel</span> <br />
            <img src={signatureImg} alt="Signature" style={{ height: '2em', display: 'inline-block', transform: 'translateY(5px)', objectFit: 'contain' }} />
          </h1>
          <h2 className="hero-desc-centered" style={{ maxWidth: '800px', fontSize: '1.25rem', marginBottom: '3rem' }}>
            Le confort du jeu, le plaisir des rencontres, l'émotion du partage. Ici, le <span className="font-padel">padel</span> est plus qu'un sport : une expérience à vivre au cœur de Montauban</h2>
          <div className="hero-cta-centered">
            <Link to="/comment-reserver" className="btn" onMouseEnter={toggleHover} onMouseLeave={toggleHover} style={{ backgroundColor: 'var(--terracotta)', color: 'white', padding: '1.2rem 3rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 'bold', textDecoration: 'none' }}>
              RÉSERVER UN TERRAIN
            </Link>
          </div>

          <div className="hero-stats-container" style={{ marginTop: '4rem', opacity: '0.9', fontFamily: 'var(--font-padel)' }}>
            <div className="hero-stats-scroll">
              <div className="hero-stats-group">
                {stats}
                <div className="stat-divider mobile-only-divider" style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
              </div>
              <div className="hero-stats-group mobile-only-group" aria-hidden="true">
                {stats}
                <div className="stat-divider mobile-only-divider" style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
