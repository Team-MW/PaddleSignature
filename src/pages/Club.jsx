import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, Star, Users, Award, Layout, Zap } from 'lucide-react';
import SEO from '../components/SEO';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="faq-item-modern">
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span className="serif">{question}</span>
        <ChevronDown size={20} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="faq-answer"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Club = ({ toggleHover }) => {
  return (
    <>
      <SEO 
        title="Le Club Padel Signature | L'Excellence à Montauban" 
        description="Découvrez l'histoire de Clément et Hugo, les fondateurs de Padel Signature. 4 terrains panoramiques, bar lounge R+1 et salle VIP à Montauban." 
        url="/club" 
      />

      {/* Hero Section */}
      <section 
        className="page-hero-premium club-hero with-bg" 
        style={{ backgroundImage: 'url("/club-hero-bg.jpg")' }}
      >
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-text-center"
          >
            <span className="badge-terracotta">L'Esprit Signature</span>
            <h1 className="serif h1-huge">
              L'Elite du Padel <br/>
              <span className="italic">À Montauban.</span>
            </h1>
            <p className="hero-subline">
              Né d’une passion commune pour le sport et l’exigence, Padel Signature redéfinit les codes du club indoor premium.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section section-padding">
        <div className="container">
          <div className="grid-asym-2 align-center">
            <div className="club-story-content">
              <span className="badge-terracotta">Notre Vision</span>
              <h2 className="serif xl-title">Clément & Hugo, <br/><span className="italic">Le Duo Fondateur.</span></h2>
              <p className="mb-40">Plus qu’un sport, Clément et Hugo ont vu dans le Padel un véritable vecteur de lien social et de performance. Leur ambition ? Créer un lieu où chaque détail, de l'accueil au bar panoramique, respire la qualité.</p>
              
              <div className="founders-stat-grid">
                <div className="stat-item-premium">
                  <span className="serif stat-num">04</span>
                  <span className="stat-label">Terrains Panoramiques</span>
                </div>
                <div className="stat-item-premium">
                  <span className="serif stat-num">09m</span>
                  <span className="stat-label">De Hauteur Utile</span>
                </div>
              </div>
            </div>
            <div className="club-visual-wrapper">
               <img src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2070&auto=format&fit=crop" alt="Padel High Performance" className="club-img-main" />
               <div className="visual-accent-card" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                  <Star className="terracotta-accent" size={24} />
                  <p className="serif">Expérience Certifiée</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="club-features-highlight section-padding" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="text-center mb-100">
             <h2 className="serif xl-title">Un Complexe <br/><span className="italic">Tout Equipé.</span></h2>
          </div>
          <div className="features-grid-masonry">
             <div className="feature-long-card">
                <Layout size={32} className="mb-20 terracotta-accent" />
                <h3 className="serif">Le Bar Lounge (R+1)</h3>
                <p>Surplombez l’action sur les 4 courts depuis notre espace détente situé à l’étage. Idéal pour un cocktail post-match ou un café entre amis.</p>
             </div>
             <div className="feature-long-card">
                <Users size={32} className="mb-20 terracotta-accent" />
                <h3 className="serif">Salle VIP & Business</h3>
                <p>Un espace de 32m² dédié à vos réunions, séminaires ou événements privés avec vue directe sur le terrain central.</p>
             </div>
             <div className="feature-long-card">
                <Zap size={32} className="mb-20 terracotta-accent" />
                <h3 className="serif">Vidéo Replay HD</h3>
                <p>Chaque terrain est équipé d'un système de captation vidéo automatique. Analysez vos points et partagez vos meilleurs smashes.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Club FAQ */}
      <section className="faq-section section-padding">
        <div className="container">
          <div className="text-center mb-60">
            <span className="badge-terracotta">Héritage</span>
            <h2 className="serif xl-title">En Savoir Plus <br/><span className="italic">Sur le Club.</span></h2>
          </div>
          <div className="faq-container-narrow">
            <FAQItem 
              question="D'où provient le nom 'Signature' ?" 
              answer="Signature représente notre engagement sur la qualité. Chaque membre du club est unique, et nous souhaitons que chaque session de jeu soit gravée comme une expérience d'exception."
            />
            <FAQItem 
              question="Est-il possible de prendre des cours avec Clément ou Hugo ?" 
              answer="Le club dispose d'entraîneurs diplômés partenaires. Clément et Hugo, bien que fondateurs, sont souvent présents sur les courts pour conseiller les joueurs et partager leur passion."
            />
            <FAQItem 
              question="Quels types de terrains utilisez-vous ?" 
              answer="Nous avons sélectionné des pistes panoramiques sans montants d'angles pour une visibilité totale, avec une moquette WPT de dernière génération pour limiter les traumatismes articulaires."
            />
            <FAQItem 
              question="Le club organise-t-il des tournois ?" 
              answer="Absolument. Des tournois homologués (P100, P250) ainsi que des tournois loisirs et des montées-descentes sont organisés mensuellement."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Club;
