import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import SEO from '../components/SEO';

const ReservationGuide = ({ toggleHover }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Comment Réserver" 
        description="Guide en 4 étapes pour réserver votre terrain de Padel à Padel Signature." 
      />
      <div style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--white)', paddingBottom: '5rem' }}>
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--terracotta)', fontWeight: 'bold', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem', backgroundColor: 'rgba(164, 87, 41, 0.1)', padding: '0.4rem 1rem', borderRadius: '50px' }}>
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              GUIDE DE RÉSERVATION
            </div>

            <h1 className="serif" style={{ fontSize: 'clamp(2.5rem, 7vw, 4rem)', marginBottom: '0.2rem', lineHeight: '1', color: 'var(--dark-green)', textTransform: 'uppercase' }}>
              RÉSERVEZ EN<br/>
              <span style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>4 ÉTAPES</span>
            </h1>
            
            {/* Steps list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', textAlign: 'left', width: '100%', marginBottom: '1rem', marginTop: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div className="serif italic" style={{ fontSize: '3.5rem', color: 'var(--terracotta)', lineHeight: '0.8' }}>01</div>
                <div>
                  <h4 style={{ color: 'var(--dark-green)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '1.1rem', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>TÉLÉCHARGEZ L'APPLICATION</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', margin: 0, lineHeight: '1.5' }}>Depuis votre navigateur, ou sur iOS et Android. Créez votre compte, activez les notifications.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div className="serif italic" style={{ fontSize: '3.5rem', color: 'var(--terracotta)', lineHeight: '0.8' }}>02</div>
                <div>
                  <h4 style={{ color: 'var(--dark-green)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '1.1rem', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>CHOISISSEZ VOTRE CRÉNEAU</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', margin: 0, lineHeight: '1.5' }}>Disponibilités en temps réel. Les heures creuses sont à tarif réduit.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div className="serif italic" style={{ fontSize: '3.5rem', color: 'var(--terracotta)', lineHeight: '0.8' }}>03</div>
                <div>
                  <h4 style={{ color: 'var(--dark-green)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '1.1rem', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>AJOUTEZ VOS PARTENAIRES</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', margin: 0, lineHeight: '1.5' }}>Une partie se joue à quatre, sur 1h30. Une seule personne réserve le terrain pour les quatre joueurs. Il vous manque des joueurs ? Notre groupe WhatsApp permet d'en trouver.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div className="serif italic" style={{ fontSize: '3.5rem', color: 'var(--terracotta)', lineHeight: '0.8' }}>04</div>
                <div>
                  <h4 style={{ color: 'var(--dark-green)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '1.1rem', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>RÉGLEZ COMME VOUS VOULEZ</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', margin: 0, lineHeight: '1.5' }}>Payez la totalité du terrain sur l'application, ou seulement votre part. Les autres joueurs règlent alors à la caisse du clubhouse en arrivant. Annulation jusqu'à 24 heures avant.</p>
                </div>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1rem' }}>
              Simple, rapide et 100% en ligne. Votre terrain vous attend !
            </p>

            {/* App Box */}
            <div style={{ 
              background: 'var(--off-white)', 
              border: '1px solid rgba(27, 52, 43, 0.05)', 
              borderRadius: '24px', 
              padding: '1.5rem 1rem', 
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: 'var(--shadow-sm)',
              marginBottom: '2rem'
            }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '0.5rem'
              }}>
                <img src="/favicon.png" alt="Logo Padel Signature" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              
              <h3 style={{ color: 'var(--dark-green)', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                TÉLÉCHARGEZ L'APP
              </h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '1rem' }}>
                Réservez et gérez vos crédits en un clic
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%', alignItems: 'center' }}>
                <a href="https://apps.apple.com/fr/app/padel-signature/id6762594127" target="_blank" rel="noopener noreferrer" className="btn-app-download" onMouseEnter={toggleHover} onMouseLeave={toggleHover} style={{ 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', 
                  padding: '0.6rem 2rem', borderRadius: '50px', 
                  border: '2px solid var(--terracotta)', color: 'var(--terracotta)', 
                  fontWeight: '600', textTransform: 'none', background: 'transparent',
                  width: '200px'
                }}>
                  <svg width="18" height="18" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                  iOS
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.livexperience.padelsignature" target="_blank" rel="noopener noreferrer" className="btn-app-download" onMouseEnter={toggleHover} onMouseLeave={toggleHover} style={{ 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', 
                  padding: '0.6rem 2rem', borderRadius: '50px', 
                  border: '2px solid var(--terracotta)', color: 'var(--terracotta)', 
                  fontWeight: '600', textTransform: 'none', background: 'transparent',
                  width: '200px'
                }}>
                  <svg width="18" height="18" viewBox="0 0 512 512" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                  Android
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationGuide;
