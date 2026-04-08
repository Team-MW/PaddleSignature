import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { ChevronRight } from 'lucide-react';

const Club = ({ toggleHover }) => {
  return (
    <>
      <SEO 
        title="Découvrir le Club" 
        description="Plongez dans l'univers de Padel Signature : 4 terrains, bar R+1 avec vue panoramique, salle VIP, et vidéo replay. L'alliance du sport et de l'élégance à Montauban." 
        url="/club" 
      />
      <section className="page-hero" style={{ paddingTop: '15rem', paddingBottom: '8rem', background: 'var(--cream)' }}>
        <div className="container">
           <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
             <span className="badge-terracotta">Notre Histoire</span>
             <h1 className="serif xl-title">Découvrir le <br/><span className="italic">Club.</span></h1>
             <p style={{ maxWidth: '600px', fontSize: '1.2rem', marginTop: '2rem' }}>
               Padel Signature est né d'une vision simple : élever le padel à un standard de qualité inédit. Situé dans la Zone Albasud à Montauban, notre club n'est pas un simple espace de jeu, c'est un écosystème haut de gamme.
             </p>
           </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container grid-asym-2">
           <div>
              <h2 className="serif xl-title">Des Espaces <br/><span className="italic">D'Exception.</span></h2>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '3rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><ChevronRight className="terracotta-accent" /> <div><strong>Terrains Panoramiques :</strong> 4 courts avec 9m de hauteur et moquette dernière génération.</div></li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><ChevronRight className="terracotta-accent" /> <div><strong>Le Bar & Lounge (R+1) :</strong> Vue sur les courts, comptoir en terracotta et tireuses à bière.</div></li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><ChevronRight className="terracotta-accent" /> <div><strong>La Salle VIP :</strong> 31,6 m² privatisable pour réunions ou événements d'entreprises.</div></li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><ChevronRight className="terracotta-accent" /> <div><strong>L'Accueil :</strong> Casiers pour vos raquettes, signalétique brandée et écran CMS interactif.</div></li>
              </ul>
           </div>
           <div className="identity-visual-grid" style={{ height: '600px' }}>
              <div className="iv-main">
                <img src="https://images.unsplash.com/photo-1544033527-b192daee1f5b?q=80&w=2070&auto=format&fit=crop" alt="Intérieur du club Padel Signature" />
              </div>
           </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--dark-green)', color: 'white' }}>
         <div className="container" style={{ textAlign: 'center' }}>
            <span className="badge-terracotta">L'Équipe Fondatrice</span>
            <h2 className="serif xl-title text-white">Clément & Hugo</h2>
            <p style={{ maxWidth: '600px', margin: '2rem auto', color: 'rgba(255,255,255,0.7)' }}>
              Passionnés par le padel et amoureux de l'excellence, nous avons conçu Padel Signature comme le club dans lequel nous aurions toujours rêvé de jouer.
            </p>
         </div>
      </section>
    </>
  );
};

export default Club;
