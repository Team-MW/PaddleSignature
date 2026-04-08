import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Users, Layout, ChevronDown, Download, CheckCircle2 } from 'lucide-react';
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

const Entreprises = ({ toggleHover }) => {
  return (
    <>
      <SEO 
        title="Séminaires & Team Building Montauban | Padel Signature" 
        description="Organisez vos événements d'entreprise à Montauban. Privatisation, salle VIP, team building et tournois de padel sur-mesure pour vos collaborateurs." 
        url="/entreprises" 
      />

      {/* Hero Section */}
      <section 
        className="page-hero-premium with-bg"
        style={{ backgroundImage: 'url("/entreprises-hero-bg.jpg")' }}
      >
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-text-center"
          >
            <span className="badge-terracotta">B2B & Séminaires</span>
            <h1 className="serif h1-huge">
              Redéfinissez la <br/>
              <span className="italic">Cohésion d'Équipe.</span>
            </h1>
            <p className="hero-subline">
              Plus qu'un club, Padel Signature est le partenaire de votre réussite. Mêlez performance, stratégie et détente dans le premier complexe indoor premium de Montauban.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="offers-section section-padding">
        <div className="container">
          <div className="offers-grid">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="offer-card-biz"
            >
              <div className="offer-icon"><Users size={32} /></div>
              <h3 className="serif">Team Building</h3>
              <p>Favorisez l'esprit d'équipe à travers des tournois de padel ludiques et accessibles à tous, encadrés par nos coachs certifiés.</p>
              <ul className="offer-perks">
                <li><CheckCircle2 size={16} /> Tournois clés en main</li>
                <li><CheckCircle2 size={16} /> Prêt de raquettes premium</li>
                <li><CheckCircle2 size={16} /> Initiation aux bases du padel</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="offer-card-biz highlighted"
            >
              <div className="offer-icon"><Target size={32} /></div>
              <h3 className="serif">Séminaires</h3>
              <p>Alliez travail et plaisir dans notre salle VIP de 32m² entièrement équipée, avant de vous détendre sur les courts.</p>
              <ul className="offer-perks">
                <li><CheckCircle2 size={16} /> Écrans & Fibre HD</li>
                <li><CheckCircle2 size={16} /> Café d'accueil & collations</li>
                <li><CheckCircle2 size={16} /> Vue panoramique sur les courts</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="offer-card-biz"
            >
              <div className="offer-icon"><Layout size={32} /></div>
              <h3 className="serif">Privatisation</h3>
              <p>Réservez l'intégralité du club pour vos soirées, lancements de produits ou événements de fin d'année.</p>
              <ul className="offer-perks">
                <li><CheckCircle2 size={16} /> Branding LED personnalisé</li>
                <li><CheckCircle2 size={16} /> Bar Lounge & Traiteur</li>
                <li><CheckCircle2 size={16} /> Jusqu'à 150 personnes</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-biz section-padding" style={{ background: 'var(--dark-green)', color: 'white' }}>
        <div className="container text-center">
          <h2 className="serif xl-title text-white">"La réussite d'une entreprise <br/><span className="italic">passe par la cohésion de ses talents."</span></h2>
          <div className="quote-author">L'équipe Padel Signature</div>
        </div>
      </section>

      {/* Form & Info Section */}
      <section className="form-info-section section-padding">
        <div className="container">
          <div className="grid-asym-2">
            <div className="biz-content-side">
              <span className="badge-terracotta">L'Experience</span>
              <h2 className="serif xl-title">Des Services <br/>Sur-Mesure.</h2>
              <p className="mb-40">Nous concevons chaque événement selon vos objectifs. Restauration locale, animations spécifiques ou gestion de tournois, notre équipe s'occupe de tout.</p>
              
              <div className="biz-download-box" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <div className="download-icon"><Download size={24} /></div>
                <div className="download-text">
                  <h4 className="serif">Plaquette B2B</h4>
                  <p>Consultez nos tarifs et options de personnalisation.</p>
                  <a href="#">Télécharger le PDF</a>
                </div>
              </div>
            </div>

            <div className="contact-form-premium-refactor">
              <h3 className="serif h4-form">Demander un Devis</h3>
              <form>
                <div className="form-fields-grid">
                  <input type="text" placeholder="Entreprise" className="premium-input" />
                  <input type="text" placeholder="Nom Complet" className="premium-input" />
                  <input type="email" placeholder="Email Professionnel" className="premium-input" />
                  <select className="premium-select">
                    <option>Type d'événement</option>
                    <option>Team Building</option>
                    <option>Séminaire</option>
                    <option>Privatisation Totale</option>
                  </select>
                  <input type="number" placeholder="Nombre de participants" className="premium-input" />
                  <textarea placeholder="Décrivez votre projet..." className="premium-textarea" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-full-width" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                  <span>Envoyer la demande</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section-padding" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="text-center mb-60">
            <span className="badge-terracotta">Questions fréquentes</span>
            <h2 className="serif xl-title">Tout ce que vous <br/>devez <span className="italic">savoir.</span></h2>
          </div>
          <div className="faq-container-narrow">
            <FAQItem 
              question="Quel est le nombre maximum de participants ?" 
              answer="Nous pouvons accueillir jusqu'à 150 personnes pour une privatisation totale. Pour les séminaires avec activité padel, nous recommandons des groupes de 12 à 60 personnes pour une expérience optimale."
            />
            <FAQItem 
              question="Faut-il avoir déjà joué au padel ?" 
              answer="Absolument pas ! Le padel est le sport de raquette le plus accessible. Nos coachs seront présents pour initier vos collaborateurs et organiser des ateliers ludiques adaptés à tous les niveaux."
            />
            <FAQItem 
              question="Proposez-vous un service de restauration ?" 
              answer="Oui, nous travaillons avec des traiteurs locaux pour vous proposer des formules adaptées : petits-déjeuners, déjeuners buffet, planches apéritives ou cocktails dînatoires."
            />
            <FAQItem 
              question="Est-il possible de personnaliser l'affichage LED ?" 
              answer="Tout à fait. Lors d'une privatisation, nous pouvons diffuser votre logo, vos couleurs ou des messages personnalisés sur l'ensemble des écrans CMS du club et des courts."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Entreprises;
