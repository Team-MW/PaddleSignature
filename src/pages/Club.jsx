import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, Star, Users, Award, Layout, Zap, LayoutGrid, Video, Box, QrCode, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import ContentBlock from '../components/ContentBlock';

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
        style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("/bar.avif")' }}
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
              L'Elite du Padel <br />
              <span className="italic">À Montauban.</span>
            </h1>
            <p className="hero-subline">
              Né d’une passion commune pour le sport et l’exigence, Padel Signature redéfinit les codes du club indoor premium.
            </p>
          </motion.div>
        </div>
      </section>






        <div className="container" style={{ padding: '4rem 0' }}>
          <div className="text-center mb-60">
            <h2 className="serif xl-title mb-10" style={{ fontSize: '3.5rem' }}>
              Un lieu pensé <span className="italic" style={{ color: 'var(--terracotta)' }}>pour le jeu.</span>
            </h2>
            <p className="text-muted" style={{ fontSize: '1.2rem', margin: '0 auto', maxWidth: '600px' }}>
              Tout est pensé pour que vous n'ayez qu'à jouer.
            </p>
          </div>

          <div className="grid-2 gap-60 mt-40" style={{ alignItems: 'center' }}>
            <div className="features-list-modern">
              <div className="feature-item-modern" style={{ display: 'flex', gap: '24px', marginBottom: '35px', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'rgba(164, 87, 41, 0.1)', color: 'var(--terracotta)', padding: '14px', borderRadius: '12px', flexShrink: 0 }}>
                  <LayoutGrid size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="serif" style={{ fontSize: '1.25rem', fontWeight: '500', marginBottom: '8px', color: 'var(--dark-green)' }}>4 courts panoramiques</h4>
                  <p className="text-muted" style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>Terrains indoor avec 8,50 m de hauteur.</p>
                </div>
              </div>
              
              <div className="feature-item-modern" style={{ display: 'flex', gap: '24px', marginBottom: '35px', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'rgba(164, 87, 41, 0.1)', color: 'var(--terracotta)', padding: '14px', borderRadius: '12px', flexShrink: 0 }}>
                  <Video size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="serif" style={{ fontSize: '1.25rem', fontWeight: '500', marginBottom: '8px', color: 'var(--dark-green)' }}>Vidéo replay et compteur</h4>
                  <p className="text-muted" style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>Deux courts équipés de la vidéo. Le score s'affiche à l'écran et vos plus beaux points sont rejouables.</p>
                </div>
              </div>

              <div className="feature-item-modern" style={{ display: 'flex', gap: '24px', marginBottom: '35px', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'rgba(164, 87, 41, 0.1)', color: 'var(--terracotta)', padding: '14px', borderRadius: '12px', flexShrink: 0 }}>
                  <Box size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="serif" style={{ fontSize: '1.25rem', fontWeight: '500', marginBottom: '8px', color: 'var(--dark-green)' }}>Vestiaires équipés</h4>
                  <p className="text-muted" style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>Casiers, douches et tout le confort avant et après le jeu.</p>
                </div>
              </div>

              <div className="feature-item-modern" style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'rgba(164, 87, 41, 0.1)', color: 'var(--terracotta)', padding: '14px', borderRadius: '12px', flexShrink: 0 }}>
                  <QrCode size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="serif" style={{ fontSize: '1.25rem', fontWeight: '500', marginBottom: '8px', color: 'var(--dark-green)' }}>Accès autonome</h4>
                  <p className="text-muted" style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>Le club reste ouvert 24h/24, vous entrez par QR code.</p>
                </div>
              </div>
            </div>

            <div className="image-carousel-container" style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', minHeight: '400px' }}>
              <img src="/accesautonome.jpeg" alt="Accès 24h/24" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
              <div className="carousel-overlay" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px', background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <h3 className="serif mb-5" style={{ color: 'white', fontSize: '2rem' }}>Accès 24h/24</h3>
                  <p className="m-0" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>Entrée autonome par QR code.</p>
                </div>
                <div className="carousel-controls" style={{ display: 'flex', gap: '15px' }}>
                  <button style={{ background: 'white', border: 'none', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                    <ChevronLeft size={24} color="var(--dark)" />
                  </button>
                  <button style={{ background: 'white', border: '2px solid var(--terracotta)', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                    <ChevronRight size={24} color="var(--terracotta)" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContentBlock
          eyebrow="Après le match"
          title="Le clubhouse, le coeur du club."
          quote="À l'étage, un espace qui surplombe les quatre terrains."
          list={[
            ["Vue sur les courts", "Suivez les matchs depuis le clubhouse en hauteur."],
            ["Comptoir signature", "Tireuses à bière et comptoir terracotta."],
            ["Snacking", "De quoi se restaurer avant comme après le jeu."],
            ["Esprit sport", "Les grands événements diffusés en direct."]
          ]}
          img="/salle-de-pause.avif"
          toggleHover={toggleHover}
        />

        <ContentBlock
          eyebrow="Espace privé"
          title="Une salle pour vos réunions et vos événements."
          lead="Une salle privatisable avec vue sur les courts. Réunions, séminaires, événements d'équipe, on s'adapte à vos besoins."
          cta="Découvrir nos offres entreprises"
          ctaGhost={false}
          ctaLink="/entreprises"
          img="/salle-de-seminaire.jpeg"
          reverse={true}
          toggleHover={toggleHover}
        />

        <ContentBlock
          eyebrow="Notre communauté"
          title="Rejoignez la communauté."
          lead="Ici, on se retrouve, on rejoue le match, on partage un verre. C'est ça aussi, le club."
          cta="Nous rejoindre"
          img="/image-en-plus.avif"
          toggleHover={toggleHover}
        />
      </div>
      {/* Club FAQ */}
      <section className="faq-section section-padding">
        <div className="container">
          <div className="text-center mb-60">
            <span className="badge-terracotta">Héritage</span>
            <h2 className="serif xl-title">En Savoir Plus <br /><span className="italic">Sur le Club.</span></h2>
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
