import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Info, Clock, Star, Zap, ShieldCheck, ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';
import ContentBlock from '../components/ContentBlock';
import AbonnementBanner from '../components/AbonnementBanner';
import CartesPrepayees from '../components/CartesPrepayees';
import CoachingSection from '../components/CoachingSection';
import AcademieSection from '../components/AcademieSection';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
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

const PriceCard = ({ title, price, period, features, highlight, badgeText, toggleHover }) => (
  <div className={`price-card-modern ${highlight ? 'highlighted' : ''}`}>
    {(highlight || badgeText) && <div className="card-badge">{badgeText || 'Plus Populaire'}</div>}
    <h3 className="serif">{title}</h3>
    <div className="price-value">
      <span className="amount serif">{price}</span>
      {period && <span className="period">/{period}</span>}
    </div>
    <ul className="price-features">
      {features.map((feature, idx) => (
        <li key={idx}><Check size={16} className="terracotta-accent" /> {feature}</li>
      ))}
    </ul>
    <Link
      to="/infos#reservation-form"
      className={`btn-price ${highlight ? 'btn-terracotta' : 'btn-dark'}`}
      style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      Réserver
    </Link>
  </div>
);

const Tarifs = ({ toggleHover }) => {
  return (
    <>
      <SEO
        title="Tarifs & Abonnements | Padel Signature"
        description="Consultez nos tarifs de location de terrains, abonnements mensuels et cours de Padel à Montauban. Jouez dès 10€ par personne."
        url="/tarifs"
      />

      {/* Hero Section */}
      <section className="page-hero-premium pricing-hero with-bg" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("/score.avif")' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-text-center"
          >
            <span className="badge-terracotta">Transparence</span>
            <h1 className="serif h1-huge">
              Jouez selon <br />
              <span className="italic">Vos envies</span>
            </h1>
            <p className="hero-subline">
              De la partie occasionnelle à l'abonnement illimité, trouvez la formule qui correspond à votre rythme de jeu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tables - Jouez à votre rythme */}
      <section className="pricing-section section-padding">
        <div className="container">
          <div className="text-center mb-80">
            <span className="badge-terracotta">La partie</span>
            <h2 className="serif xl-title">Jouez à votre <br/><span className="italic">rythme</span></h2>
            <p className="hero-subline" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
              Une partie se joue à quatre, pendant 1h30. Le tarif dépend du créneau. Pas de sélecteur de durée, toutes les parties durent 1h30.
            </p>
            <p className="rule-text mt-20"><em>4 joueurs maximum par terrain.</em></p>
          </div>

          <div className="pricing-grid-modern" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', maxWidth: '800px', margin: '0 auto' }}>
            <PriceCard 
              title="Heures creuses"
              price="10,50 €"
              period="pers"
              highlight={true}
              features={[
                "Du lundi au vendredi",
                "Hors créneaux heures pleines"
              ]}
              toggleHover={toggleHover}
            />
            <PriceCard 
              title="Heures pleines"
              price="13,50 €"
              period="pers"
              features={[
                "Du lun. au ven. 12h00 - 13h30",
                "Du lun. au ven. 16h30 - 22h30",
                "Samedi et dimanche en continu"
              ]}
              toggleHover={toggleHover}
            />
          </div>
          
          <AbonnementBanner toggleHover={toggleHover} />
        </div>
      </section>

      {/* Cartes Prépayées Section */}
      <CartesPrepayees toggleHover={toggleHover} />

      {/* Nouveaux Contenus (JSON) */}
      <div style={{ background: 'var(--cream)', paddingTop: '4rem' }}>
      {/* Coaching Section */}
      <CoachingSection toggleHover={toggleHover} />

      {/* Academie Section */}
      <AcademieSection toggleHover={toggleHover} />
      </div>
      <section className="faq-section section-padding">
        <div className="container">
          <div className="text-center mb-60">
            <span className="badge-terracotta">FAQ</span>
            <h2 className="serif xl-title">Questions de <br /><span className="italic">tarifs</span></h2>
          </div>
          <div className="faq-container-narrow">
            <FAQItem question="Le tarif est-il par personne ou par terrain ?" answer="Par personne. Un terrain accueille quatre joueurs." />
            <FAQItem question="Comment régler ?" answer="Directement dans l'application, au moment de la réservation." />
            <FAQItem question="Puis-je annuler ma réservation ?" answer="Oui, jusqu'à 24 heures avant votre créneau." />
            <FAQItem question="Faut-il être membre pour jouer ?" answer="Non. Les terrains sont accessibles à tous, avec ou sans abonnement." />
          </div>
        </div>
      </section>
    </>
  );
};

export default Tarifs;
