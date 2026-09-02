import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Target, Monitor, Wifi, UtensilsCrossed, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ContentBlock from '../components/ContentBlock';
import { AnimatePresence } from 'framer-motion';

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
      <section className="page-hero-premium enterprises-hero with-bg" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("/salle-de-reunion.avif")' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-text-center"
          >
            <h1 className="serif h1-b2b-hero" style={{ marginBottom: '2rem' }}>
              Le <span className="font-padel">padel</span>, nouveau terrain <br/>
              <span className="italic">de jeu de votre entreprise</span>
            </h1>
            <p className="hero-subline" style={{ marginBottom: '3rem' }}>
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', color: 'var(--terracotta)', fontWeight: '700', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              <span style={{ width: '40px', height: '2px', backgroundColor: 'var(--terracotta)', display: 'inline-block' }}></span>
              Nos solutions
              <span style={{ width: '40px', height: '2px', backgroundColor: 'var(--terracotta)', display: 'inline-block' }}></span>
            </div>
            <h2 className="serif xl-title">Des formats <span className="italic">sur mesure</span></h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '560px', margin: '0 auto' }}>Trois façons de faire vivre le club à vos équipes et à vos clients.</p>
          </div>
          <div className="grid-3-clean">
            <div className="business-card-premium">
              <Users size={32} className="terracotta-accent mb-20" />
              <h3 className="serif h3-title">Team Building</h3>
              <p style={{ marginBottom: '1rem' }}>Le sport le plus convivial pour souder vos équipes.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li>• Initiations encadrées par nos coachs</li>
                <li>• Tournois internes ou format américano</li>
                <li>• De vrais moments de partage</li>
              </ul>
            </div>
            <div className="business-card-premium">
              <Building2 size={32} className="terracotta-accent mb-20" />
              <h3 className="serif h3-title">Séminaires</h3>
              <p style={{ marginBottom: '1rem' }}>Travailler dans une salle équipée, puis souffler sur les courts.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li>• Salle indépendante, <span style={{ whiteSpace: 'nowrap' }}>16 places assises en U</span></li>
                <li>• Wifi, écran et visioconférence sans fil</li>
                <li>• Café, eau et traiteur possible</li>
              </ul>
            </div>
            <div className="business-card-premium">
              <Target size={32} className="terracotta-accent mb-20" />
              <h3 className="serif h3-title">Privatisation</h3>
              <p style={{ marginBottom: '1rem' }}>Le club rien qu'à vous, une soirée ou une journée.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li>• Jusqu'à 4 terrains privatisés</li>
                <li>• Clubhouse et comptoir à disposition</li>
                <li>• Pour recevoir clients et partenaires</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="business-features-detail section-padding" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', color: 'var(--terracotta)', fontWeight: '700', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
              <span style={{ width: '32px', height: '2px', backgroundColor: 'var(--terracotta)', display: 'inline-block' }}></span>
              Infrastructure &amp; Événementiel
              <span style={{ width: '32px', height: '2px', backgroundColor: 'var(--terracotta)', display: 'inline-block' }}></span>
            </div>
            <h2 className="serif lg-title mb-20">Une salle de séminaire <span className="italic" style={{ color: 'var(--terracotta)' }}>entièrement équipée</span></h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: '1.7' }}>Une salle indépendante qui a tout le nécessaire pour travailler : écran, barre de visioconférence sans fil, wifi et service traiteur possible. Prête à l'emploi, à deux pas des courts.</p>

            <div style={{ background: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '1.8rem', marginBottom: '3rem' }}>
              {[
                { icon: <Monitor size={22} />, title: 'Salle de séminaire indépendante', desc: 'Modulable selon votre format.' },
                { icon: <Users size={22} />, title: '16 places assises', desc: 'En configuration U.' },
                { icon: <Wifi size={22} />, title: 'Wifi, écran et visioconférence', desc: 'Barre dernière génération, connexion sans fil.' },
                { icon: <UtensilsCrossed size={22} />, title: 'Service traiteur possible', desc: 'Pauses, déjeuner ou cocktail.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                  <div style={{ minWidth: '46px', width: '46px', height: '46px', borderRadius: '10px', backgroundColor: 'rgba(164, 87, 41, 0.08)', color: 'var(--terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <strong style={{ display: 'block', color: 'var(--dark-green)', fontFamily: 'var(--font-serif)', fontSize: '1.05rem', marginBottom: '2px' }}>{item.title}</strong>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <Link 
              to="/creer-evenement" 
              className="btn btn-primary" 
              onMouseEnter={toggleHover} 
              onMouseLeave={toggleHover} 
              style={{ display: 'inline-block', fontSize: '1.6rem', padding: '1.5rem 4rem', borderRadius: '50px', boxShadow: '0 15px 30px rgba(164, 87, 41, 0.3)' }}
            >
              <span>Créer votre événement</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Nouveaux Contenus B2B */}
      <EntrepriseCollaborateurs toggleHover={toggleHover} />
      <EntrepriseEvenements />
      <EntrepriseOptions toggleHover={toggleHover} />
      <EntreprisePartenariats toggleHover={toggleHover} />
      <section className="faq-section section-padding">
        <div className="container">
          <div className="text-center mb-60">
            <span className="badge-terracotta">FAQ</span>
            <h2 className="serif xl-title">Les questions <br/><span className="italic">qu'on nous pose</span></h2>
          </div>
          <div className="faq-container-narrow">
            <FAQItem question={<>Faut-il savoir jouer au <span className="font-padel">padel</span> ?</>} answer={<>Pas du tout. L'initiation est encadrée et adaptée à chacun, du débutant complet au joueur confirmé. Certains participants découvrent le <span className="font-padel">padel</span> le jour même.</>} />
            <FAQItem question="Combien de personnes peut-on accueillir ?" answer="Cela dépend du format. Avec quatre courts et une salle séminaire, nous pouvons faire tourner les équipes par rotations. On cale la jauge et le déroulé avec vous en amont." />
            <FAQItem question="Combien de temps à l'avance réserver ?" answer="Quelques semaines suffisent pour la plupart des événements. Sur les périodes plus demandées, juin, septembre et décembre, mieux vaut s'y prendre tôt pour bloquer le bon créneau." />
            <FAQItem question="Le repas est-il obligatoire ?" answer="Non, il reste optionnel. Mais c'est souvent le moment où l'équipe se retrouve vraiment : pause café, planches à partager, cocktail ou déjeuner, on adapte à votre journée." />
            <FAQItem question="Faut-il apporter du matériel ?" answer="Non, raquettes et balles sont fournies sur place. Prévoyez simplement une tenue de sport et des chaussures propres réservées à l'intérieur." />
            <FAQItem question="Comment se passe le devis ?" answer="On construit un devis sur mesure selon votre format, le nombre de participants et les options retenues. Prestations comme modalités y sont détaillées avant validation." />
          </div>

        </div>
      </section>
    </>
  );
};

export default Entreprises;
