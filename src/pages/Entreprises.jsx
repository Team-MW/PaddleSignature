import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Target, Calendar, MessageSquare, Coffee, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import BusinessCTA from '../components/BusinessCTA';
import ContentBlock from '../components/ContentBlock';
import { AnimatePresence } from 'framer-motion';

import EntrepriseEspaces from '../components/EntrepriseEspaces';
import EntrepriseCollaborateurs from '../components/EntrepriseCollaborateurs';
import EntrepriseEvenements from '../components/EntrepriseEvenements';
import EntrepriseOptions from '../components/EntrepriseOptions';
import EntreprisePartenariats from '../components/EntreprisePartenariats';

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

const Entreprises = ({ toggleHover }) => {
  return (
    <>
      <SEO 
        title="Padel B2B & Séminaires | Padel Signature Montauban" 
        description="Fédérez vos équipes chez Padel Signature. Séminaires, Team Building et Privatisation d'espaces avec salle VIP de 32m² et bar panoramique." 
        url="/entreprises" 
      />

      {/* Hero Section */}
      <section className="page-hero-premium enterprises-hero with-bg" style={{ backgroundImage: 'url("/salle-de-reunion.png")' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-text-center"
          >
            <span className="badge-terracotta">Business & Performance</span>
            <h1 className="serif h1-b2b-hero">
              Le padel, nouveau terrain <br/>
              <span className="italic">de jeu de votre entreprise.</span>
            </h1>
            <p className="hero-subline">
              Recevoir vos clients, fédérer vos équipes, faire rayonner votre marque.
            </p>
            <Link 
              to="/infos#reservation-form" 
              className="btn btn-terracotta mt-20 hero-cta-btn" 
              onMouseEnter={toggleHover} 
              onMouseLeave={toggleHover}
            >
              Parlons de votre projet
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="business-solutions section-padding">
        <div className="container">
          <div className="text-center mb-80">
            <h2 className="serif xl-title">Nos Solutions <br/><span className="italic">Sur Mesure.</span></h2>
          </div>
          <div className="grid-3-clean">
            <div className="business-card-premium">
              <Users size={32} className="terracotta-accent mb-20" />
              <h3 className="serif h3-title">Team Building</h3>
              <p>Initiez vos collaborateurs au sport le plus convivial du moment. Tournois internes, cliniques avec coachs et moments de partage garantis.</p>
            </div>
            <div className="business-card-premium">
              <Building2 size={32} className="terracotta-accent mb-20" />
              <h3 className="serif h3-title">Séminaires</h3>
              <p>Profitez de notre salle VIP de 32m² équipée (écran, WiFi) pour vos réunions, avant de vous détendre sur les courts ou au bar lounge.</p>
            </div>
            <div className="business-card-premium">
              <Target size={32} className="terracotta-accent mb-20" />
              <h3 className="serif h3-title">Privatisation</h3>
              <p>Offrez-vous l'exclusivité du club pour une soirée ou une journée. Un cadre unique pour impressionner vos clients et partenaires.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Detail & Massive CTA */}
      <section className="business-features-detail section-padding" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="badge-terracotta">Infrastructure & Événementiel</span>
            <h2 className="serif lg-title mb-40">Un espace de travail <br/><span className="italic">Inspirant.</span></h2>
            
            <ul className="premium-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', textAlign: 'left', marginBottom: '50px', background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <li><Calendar className="list-icon" /> Salle VIP modulable de 32m²</li>
              <li><MessageSquare className="list-icon" /> Equipement audiovisuel complet</li>
              <li><Coffee className="list-icon" /> Service traiteur et bar lounge</li>
              <li><Users className="list-icon" /> Capacité jusqu'à 100 personnes</li>
            </ul>

            <Link 
              to="/creer-evenement" 
              className="btn btn-primary" 
              onMouseEnter={toggleHover} 
              onMouseLeave={toggleHover} 
              style={{ display: 'inline-block', fontSize: '1.6rem', padding: '1.5rem 4rem', borderRadius: '50px', boxShadow: '0 15px 30px rgba(164, 87, 41, 0.3)' }}
            >
              <span>Créer votre événement B2B</span>
            </Link>
          </div>
        </div>
      </section>

      <BusinessCTA />

      {/* Nouveaux Contenus B2B */}
      <EntrepriseEspaces />
      <EntrepriseCollaborateurs toggleHover={toggleHover} />
      <EntrepriseEvenements />
      <EntrepriseOptions toggleHover={toggleHover} />
      <EntreprisePartenariats toggleHover={toggleHover} />
      <section className="faq-section section-padding">
        <div className="container">
          <div className="text-center mb-60">
            <span className="badge-terracotta">FAQ</span>
            <h2 className="serif xl-title">Les questions <br/><span className="italic">qu'on nous pose.</span></h2>
          </div>
          <div className="faq-container-narrow">
            <FAQItem question="Faut-il savoir jouer au padel ?" answer="Non. Le padel s'apprend en quelques minutes et nos formats sont adaptés aux débutants comme aux confirmés." />
            <FAQItem question="Combien de personnes peut-on accueillir ?" answer="Cela dépend du format retenu. Dites-nous votre effectif, on construit la journée avec vous." />
            <FAQItem question="Faut-il apporter du matériel ?" answer="Non. Raquettes et balles sont fournies." />
            <FAQItem question="Peut-on venir sur une demi-journée ?" answer="Oui. D'une session d'1h30 à une journée complète." />
          </div>

        </div>
      </section>
    </>
  );
};

export default Entreprises;
