import React from 'react';
import { motion } from 'framer-motion';
import { Check, Info, Clock, Star, Zap, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

const PriceCard = ({ title, price, period, features, highlight, toggleHover }) => (
  <div className={`price-card-modern ${highlight ? 'highlighted' : ''}`}>
    {highlight && <div className="card-badge">Plus Populaire</div>}
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
    <button 
      className={`btn-price ${highlight ? 'btn-terracotta' : 'btn-dark'}`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      Réserver
    </button>
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
      <section className="page-hero-premium pricing-hero with-bg" style={{ backgroundImage: 'url("/people-playing-padle-tennis-inside.jpg")' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-text-center"
          >
            <span className="badge-terracotta">Transparence</span>
            <h1 className="serif h1-huge">
              Jouez selon <br/>
              <span className="italic">Vos envies.</span>
            </h1>
            <p className="hero-subline">
              De la partie occasionnelle à l'abonnement illimité, trouvez la formule qui correspond à votre rythme de jeu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="pricing-section section-padding">
        <div className="container">
          <div className="text-center mb-100">
            <h2 className="serif xl-title">Nos Formules <br/><span className="italic">Signature.</span></h2>
          </div>
          
          <div className="pricing-grid-modern">
            <PriceCard 
              title="Session Découverte"
              price="10€"
              period="pers"
              features={[
                "Location terrain (90 min)",
                "Accès au Bar Lounge",
                "Vestiaires premium",
                "Réservation via l'App"
              ]}
              toggleHover={toggleHover}
            />
            <PriceCard 
              title="Abonnement Club"
              price="45€"
              period="mois"
              highlight={true}
              features={[
                "Accès prioritaire 14j",
                "Tarifs réduits heures creuses",
                "Espace VIP inclus",
                "Tournois internes offerts",
                "Réduction ProShop -10%"
              ]}
              toggleHover={toggleHover}
            />
            <PriceCard 
              title="Pack Performance"
              price="150€"
              period="10 séances"
              features={[
                "10 sessions de 90 min",
                "Multi-joueurs (partageable)",
                "Sans date d'expiration",
                "Accès aux statistiques vidéo"
              ]}
              toggleHover={toggleHover}
            />
          </div>
        </div>
      </section>

      {/* Additional Costs / Info */}
      <section className="additional-info section-padding" style={{ background: 'var(--dark-green)', color: 'white' }}>
        <div className="container">
          <div className="grid-2 gap-100">
            <div>
              <h2 className="serif lg-title mb-40">Services <br/><span className="italic">Complémentaires.</span></h2>
              <div className="info-item-minimal">
                <Clock size={20} className="terracotta-accent" />
                <div>
                  <h4 className="serif">Location de Matériel</h4>
                  <p>Raquettes haut de gamme (Babolat, Wilson) : 4€ / session. Balles neuves en vente au ProShop.</p>
                </div>
              </div>
              <div className="info-item-minimal">
                <Star size={20} className="terracotta-accent" />
                <div>
                  <h4 className="serif">Coaching Individuel</h4>
                  <p>Cours particuliers avec coach certifié : à partir de 50€/h. Packs 5 ou 10 cours disponibles.</p>
                </div>
              </div>
            </div>
            <div className="benefit-card-dark">
              <ShieldCheck size={40} className="terracotta-accent mb-20" />
              <h3 className="serif">Pourquoi s'abonner ?</h3>
              <p className="mb-30">L'abonnement Club est conçu pour les passionnés souhaitant intégrer une communauté active tout en bénéficiant du meilleur rapport qualité/prix.</p>
              <ul className="check-list">
                <li><Zap size={16} /> Priorité sur les créneaux Premium</li>
                <li><Zap size={16} /> Événements Members Only</li>
                <li><Zap size={16} /> Guest Pass pour vos amis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tarifs;
