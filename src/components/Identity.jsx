import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Trophy } from 'lucide-react';

const Identity = ({ toggleHover, yParallax }) => {
  return (
    <section className="identity-section section-padding overflow-hidden">
      <div className="container">
        <div className="grid-2 align-center">
          <div className="identity-visual relative">
            <motion.div style={{ y: yParallax }} className="parallax-img-wrapper">
              <img src="/image-asmettre.jpeg" alt="Padel Spirit" className="img-premium-border" />
            </motion.div>
            <div className="floating-stat" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
              <span className="serif stat-xl">100%</span>
              <p>Passion</p>
            </div>
          </div>
          <div className="identity-content pl-60">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--terracotta)', fontWeight: 'bold', fontSize: '0.95rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              <span style={{ width: '40px', height: '2px', backgroundColor: 'var(--terracotta)', display: 'inline-block', flexShrink: 0 }}></span> NOTRE ADN
            </div>
            <h2 className="serif xl-title" style={{ marginBottom: '1.5rem' }}>
              L'alliance du style <span className="italic" style={{ color: 'var(--terracotta)' }}>et de la performance.</span>
            </h2>
            <p className="description-text mb-40" style={{ fontSize: '1.25rem', color: 'var(--dark-green)', fontWeight: '400' }}>
              Quatre terrains, un clubhouse à l'étage, et de quoi rester après le match.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                <div style={{ minWidth: '54px', width: '54px', height: '54px', borderRadius: '12px', backgroundColor: 'rgba(164, 87, 41, 0.08)', color: 'var(--terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Star size={26} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.4rem' }}>
                    <h4 style={{ color: 'var(--dark-green)', fontWeight: '700', fontSize: '1.3rem', margin: 0 }}>Excellence</h4>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginLeft: '0' }}>Des terrains de compétition dans un cadre soigné.</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                <div style={{ minWidth: '54px', width: '54px', height: '54px', borderRadius: '12px', backgroundColor: 'rgba(164, 87, 41, 0.08)', color: 'var(--terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Users size={26} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.4rem' }}>
                    <h4 style={{ color: 'var(--dark-green)', fontWeight: '700', fontSize: '1.3rem', margin: 0 }}>Convivialité</h4>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginLeft: '0' }}>Un clubhouse à l'étage avec vue sur les courts.</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                <div style={{ minWidth: '54px', width: '54px', height: '54px', borderRadius: '12px', backgroundColor: 'rgba(164, 87, 41, 0.08)', color: 'var(--terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Trophy size={26} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.4rem' }}>
                    <h4 style={{ color: 'var(--dark-green)', fontWeight: '700', fontSize: '1.3rem', margin: 0 }}>Communauté</h4>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginLeft: '0' }}>Des tournois et des rendez-vous tout au long de l'année.</p>
                </div>
              </div>
            </div>
            
            <div style={{ marginTop: '3rem' }}>
              <button className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '0.9rem', fontWeight: '600', borderRadius: '4px', textTransform: 'none', letterSpacing: 'normal' }}>
                Découvrir le club
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identity;
