import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, Star, Users, Award, Layout, Zap } from 'lucide-react';
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

      {/* Philosophy Section */}
      <section className="philosophy-section section-padding">
        <div className="container">
          <div className="grid-asym-2 align-center">
            <div className="club-story-content">
              <span className="badge-terracotta">Notre Vision</span>
              <h2 className="serif xl-title">Clément Rouanet & <br />Hugo Briand, <br /><span className="italic">Le Duo Fondateur.</span></h2>
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
              <img src="/projet-presentation.avif" alt="Padel High Performance" className="club-img-main" />
              <div className="visual-accent-card" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <Star className="terracotta-accent" size={24} />
                <p className="serif">Expérience Certifiée</p>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Nouveaux Contenus (JSON) */}
      <div style={{ background: 'var(--cream)', paddingTop: '4rem' }}>
        <div className="text-center mb-60">
          <span className="badge-terracotta">Le Club, raconté</span>
          <h2 className="serif xl-title">L'Essentiel.</h2>

        </div>

        <ContentBlock
          eyebrow="Notre ADN"
          title="L'alliance du style et de la performance."
          quote="Quatre terrains, un clubhouse à l'étage, et de quoi rester après le match."
          list={[
            ["Excellence", "Des terrains de compétition dans un cadre soigné."],
            ["Convivialité", "Un clubhouse à l'étage avec vue sur les courts."],
            ["Communauté", "Des tournois et des rendez-vous tout au long de l'année."]
          ]}
          img="/encore-nos-terrains.avif"
          toggleHover={toggleHover}
        />

        <ContentBlock
          eyebrow="Nos espaces"
          title="Un lieu pensé pour le jeu."
          quote="Tout est pensé pour que vous n'ayez qu'à jouer."
          list={[
            ["4 courts panoramiques", "Terrains indoor avec 9 m de hauteur et scoring électronique."],
            ["Vidéo replay", "Vos plus beaux points captés et rejouables sur les courts équipés."],
            ["Vestiaires équipés", "Casiers, douches et tout le confort avant et après le jeu."],
            ["Accès autonome", "Le club reste ouvert 24h/24, vous entrez par QR code."]
          ]}
          img="/casier.avif"
          reverse={true}
          toggleHover={toggleHover}
        />

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
          rule="Ni surface ni capacité ici. On donne les dispositions précises quand les entreprises nous contactent."
          cta="Découvrir nos offres entreprises"
          ctaGhost={true}
          img="/salle-de-reunion.avif"
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
