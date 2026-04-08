import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Clock, Star, Info, ChevronDown, CheckCircle2, Calendar } from 'lucide-react';
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

const PriceCard = ({ title, price, sub, features, highlighted }) => (
  <div className={`price-card-premium ${highlighted ? 'featured' : ''}`}>
    {highlighted && <div className="featured-badge">Le Plus Populaire</div>}
    <h3 className="serif">{title}</h3>
    <div className="price-display">
      <span className="currency">€</span>
      <span className="amount">{price}</span>
      <span className="period">{sub}</span>
    </div>
    <ul className="price-features">
      {features.map((f, i) => (
        <li key={i}><CheckCircle2 size={16} /> {f}</li>
      ))}
    </ul>
    <button className={`btn ${highlighted ? 'btn-primary' : 'btn-outline'} btn-full-width`}>
      <span>Réserver</span>
    </button>
  </div>
);

const Tarifs = ({ toggleHover }) => {
  return (
    <>
      <SEO 
        title="Tarifs & Abonnements | Padel Signature Montauban" 
        description="Consultez nos tarifs pour les heures creuses et pleines. Découvrez le Wallet Signature et profitez du meilleur du padel indoor à Montauban." 
        url="/tarifs" 
      />

      {/* Hero Section */}
      <section className="page-hero-premium pricing-hero" style={{ background: 'var(--dark-green)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-text-center text-white"
          >
            <span className="badge-terracotta">Accès Privilégié</span>
            <h1 className="serif h1-huge text-white">
              Votre Expérience <br/>
              <span className="italic text-white">À Votre Rythme.</span>
            </h1>
            <p className="hero-subline text-white opacity-60">
              Des tarifs transparents, flexibles et pensés pour tous les types de joueurs. Choisissez la formule qui vous ressemble.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Pricing Section */}
      <section className="pricing-grid-section section-padding">
        <div className="container">
          <div className="pricing-grid-modern">
            <PriceCard 
              title="Heures Creuses"
              price="10"
              sub="/ joueur"
              features={[
                "Session de 1h30m",
                "Lundi - Vendredi (9h-16h)",
                "Accès Douches & Vestiaires",
                "Équipement inclus sur demande"
              ]}
            />
            
            <PriceCard 
              title="Wallet Signature"
              price="200"
              sub="/ crédit"
              highlighted={true}
              features={[
                "Wallet 100% Flexible",
                "Réservation Prioritaire",
                "Accès Autonome (Via App)",
                "Bonus Exclusifs & Cashback",
                "Invite tes Amis en 1-click"
              ]}
            />

            <PriceCard 
              title="Heures Pleines"
              price="13"
              sub="/ joueur"
              features={[
                "Session de 1h30m",
                "Soirées (dès 18h) & Week-ends",
                "Expérience LED Immersive",
                "Vidéo Replay HD Inclus",
                "Ambiance Club Privilege"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="extras-section section-padding" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="grid-asym-small-left">
            <div className="extras-info">
              <span className="badge-terracotta">Extras</span>
              <h2 className="serif xl-title">Au-delà du <br/><span className="italic">Terrain.</span></h2>
              <p>Parce que l'expérience Padel Signature se prolonge avant et après le match.</p>
            </div>
            <div className="extras-list-grid">
              <div className="extra-item">
                <h4 className="serif">Location Raquette</h4>
                <div className="extra-price">5€ <span className="period">/ session</span></div>
                <p>Raquettes haut de gamme testables sur place.</p>
              </div>
              <div className="extra-item">
                <h4 className="serif">Salle VIP (Détente)</h4>
                <div className="extra-price">Sur Devis</div>
                <p>Privatisation pour vos événements post-match.</p>
              </div>
              <div className="extra-item">
                <h4 className="serif">Bar Lounge (Conso)</h4>
                <div className="extra-price">À la carte</div>
                <p>Large choix de bières artisanales et snacks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Book - Full Width Impression */}
      <section className="booking-experience-section section-padding">
        <div className="container">
          <div className="experience-header text-center mb-100">
            <span className="badge-terracotta">Le Parcours</span>
            <h2 className="serif xl-title text-white">Réserver n'a jamais été <br/><span className="italic">Aussi Simple.</span></h2>
          </div>
          
          <div className="booking-steps-modern-grid">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="step-card-modern"
            >
              <div className="step-tag serif">01.</div>
              <div className="step-icon-box"><Calendar size={28} /></div>
              <h4 className="serif">Téléchargez l'App</h4>
              <p>Votre sésame pour l'expérience Signature. Disponible dès Août 2026 sur iOS et Android.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="step-card-modern highlighted"
            >
              <div className="step-tag serif">02.</div>
              <div className="step-icon-box"><Star size={28} /></div>
              <h4 className="serif">Réservez en 10s</h4>
              <p>Un système fluide pour choisir votre court panoramique et inviter vos partenaires instantanément.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="step-card-modern"
            >
              <div className="step-tag serif">03.</div>
              <div className="step-icon-box"><Calendar size={28} /></div>
              <h4 className="serif">Jouez Libre</h4>
              <p>Accès autonome sécurisé par QR Code. Le club vous appartient, même en dehors des heures de présence.</p>
            </motion.div>
          </div>
        </div>
        <div className="experience-bg-text serif">Signature Experience</div>
      </section>

      {/* Pricing FAQ */}
      <section className="faq-section section-padding" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="text-center mb-60">
            <span className="badge-terracotta">Informations</span>
            <h2 className="serif xl-title">Conditions de <br/><span className="italic">Réservation.</span></h2>
          </div>
          <div className="faq-container-narrow">
            <FAQItem 
              question="Quelle est la durée d'une session ?" 
              answer="Toutes nos réservations standards sont de 1h30. Cela permet de profiter pleinement de l'échauffement et d'un match complet sans précipitation."
            />
            <FAQItem 
              question="Quelle est la politique d'annulation ?" 
              answer="Vous pouvez annuler sans frais jusqu'à 24h avant le début de votre session. Passé ce délai, la session sera décomptée ou non-remboursée."
            />
            <FAQItem 
              question="Comment fonctionne le Wallet Signature ?" 
              answer="C'est un portefeuille virtuel que vous rechargez. En échange de votre fidélité (200€ rechargés), vous bénéficiez de la priorité sur les réservations et d'un accès facilité au club."
            />
            <FAQItem 
              question="Faut-il être membre pour jouer ?" 
              answer="Non, Padel Signature est ouvert à tous. Vous pouvez réserver à la session sans aucun engagement. Le Wallet est simplement une option pour nos joueurs réguliers."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Tarifs;
