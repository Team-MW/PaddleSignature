import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { ChevronRight } from 'lucide-react';

const Tarifs = ({ toggleHover }) => {
  return (
    <>
      <SEO 
        title="Tarifs & Abonnements" 
        description="Découvrez les tarifs de Padel Signature (Heures Creuses / Pleines) et notre Wallet Régulier. La meilleure expérience padel à Montauban." 
        url="/tarifs" 
      />
      <section className="page-hero" style={{ paddingTop: '15rem', paddingBottom: '8rem', background: 'var(--dark-green)', color: 'white' }}>
        <div className="container text-center">
           <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
             <span className="badge-terracotta">Accès Privilégié</span>
             <h1 className="serif xl-title text-white">Nos <span className="italic">Tarifs.</span></h1>
           </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container grid-asym-2">
           <div>
              <h2 className="serif xl-title">Le Wallet <br/><span className="italic">Régulier.</span></h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Notre produit phare pour les joueurs assidus. Rechargez votre portefeuille et profitez du padel à votre rythme.</p>
              <div style={{ padding: '3rem', border: '2px solid var(--terracotta)', borderRadius: '1rem', position: 'relative' }}>
                 <div style={{ position: 'absolute', top: '-15px', background: 'white', padding: '0 1rem', color: 'var(--terracotta)', fontWeight: 'bold' }}>OFFRE EXCLUSIVE</div>
                 <h3 className="serif" style={{ fontSize: '3rem', marginBottom: '1rem' }}>200€</h3>
                 <p style={{ marginBottom: '2rem' }}>Crédités sur votre compte Live Experience.</p>
                 <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                    <li style={{ display: 'flex', gap: '1rem' }}><ChevronRight className="terracotta-accent" size={18}/> Réservation prioritaire</li>
                    <li style={{ display: 'flex', gap: '1rem' }}><ChevronRight className="terracotta-accent" size={18}/> Accès autonome simplifié</li>
                    <li style={{ display: 'flex', gap: '1rem' }}><ChevronRight className="terracotta-accent" size={18}/> Bonus exclusifs</li>
                 </ul>
                 <a href="https://live-experience.com" className="btn btn-primary" style={{ width: '100%' }} onMouseEnter={toggleHover} onMouseLeave={toggleHover}><span>Souscrire</span></a>
              </div>
           </div>
           
           <div>
              <h2 className="serif xl-title" style={{ fontSize: '3.5rem' }}>Jeu <br/>À La Carte.</h2>
              
              <div style={{ padding: '3rem', background: 'var(--cream)', marginBottom: '2rem' }}>
                 <h3 className="serif" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Heures Creuses (HC)</h3>
                 <p style={{ marginBottom: '1rem' }}>Lundi à Vendredi (9h-12h & 14h-16h)</p>
                 <div style={{ fontSize: '2.5rem', color: 'var(--terracotta)', fontWeight: 'bold' }}>10€ <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>/ joueur (1h30)</span></div>
              </div>

              <div style={{ padding: '3rem', background: 'var(--cream)' }}>
                 <h3 className="serif" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Heures Pleines (HP)</h3>
                 <p style={{ marginBottom: '1rem' }}>Soirées et Week-ends</p>
                 <div style={{ fontSize: '2.5rem', color: 'var(--terracotta)', fontWeight: 'bold' }}>13€ <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>/ joueur (1h30)</span></div>
              </div>
           </div>
        </div>
      </section>
    </>
  );
};

export default Tarifs;
