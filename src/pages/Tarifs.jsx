import React from 'react';
import { motion } from 'framer-motion';
import { Check, Info, Clock, Star, Zap, ShieldCheck, ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';
import ContentBlock from '../components/ContentBlock';
import { AnimatePresence } from 'framer-motion';

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

      {/* Nouveaux Contenus (JSON) */}
      <div style={{ background: 'var(--cream)', paddingTop: '4rem' }}>
        <ContentBlock
          eyebrow="La partie"
          title="Jouez à votre rythme."
          lead="Une partie se joue à quatre, pendant 1h30. Le tarif dépend du créneau. Pas de sélecteur de durée, toutes les parties durent 1h30."
          cards={[
            ["Heures creuses", "10,50 €", "Du lundi au vendredi, hors créneaux heures pleines", "Le bon plan"],
            ["Heures pleines", "13,50 €", "Du lundi au vendredi de 12h00 à 13h30 et de 16h30 à 22h30. Samedi et dimanche."]
          ]}
          rule="Mention au-dessus des cards : 4 joueurs maximum par terrain. Un CTA Réserver sur chaque card."
          cta="Réserver"
          toggleHover={toggleHover}
        />

        <ContentBlock
          eyebrow="Abonnement"
          title="Abonnement heures creuses."
          quote="Pour ceux qui jouent régulièrement en journée."
          cards={[
            ["Offre annuelle", "500 €", "Accès illimité aux créneaux heures creuses · Engagement de 12 mois · Places limitées", "Offre annuelle"]
          ]}
          rule="Ne pas mentionner les modalités de paiement, elles figureront dans les CGV. Un seul abonnement affiché : heures creuses. Celui en heures pleines est à l'étude, on ne l'annonce pas."
          cta="Je m'abonne"
          toggleHover={toggleHover}
        />

        <ContentBlock
          eyebrow="Cartes prépayées"
          title="Jouez plus, payez moins."
          lead="Vous créditez le montant de votre choix, nous ajoutons un bonus."
          cards={[
            ["Découverte", "100 €", "120 crédits, soit 20 offerts. Environ 9 parties dont 1 offerte. 11,25 € la partie."],
            ["Confort", "250 €", "325 crédits, soit 75 offerts. Environ 24 parties dont 5 offertes. 10,38 € la partie.", "Le plus choisi"],
            ["Signature", "500 €", "675 crédits, soit 175 offerts. Environ 50 parties dont 13 offertes. 10,00 € la partie."]
          ]}
          rule="Trois mentions à afficher clairement : 1 crédit = 1 euro · utilisables partout dans le club · valables un an"
          rule2="Mention sous les cards : nombre de parties calculé sur la base d'une partie en heure pleine. En heures creuses, vous en jouez davantage."
          cta="Acheter"
          toggleHover={toggleHover}
        />

        <ContentBlock
          eyebrow="Coaching"
          title="Progressez avec un coach."
          lead="Des séances d'une heure, seul ou à plusieurs. Le tarif est par personne, il baisse dès que vous venez accompagné."
          cards={[
            ["Individuel", "50 €", "par personne"],
            ["En duo", "30 €", "par personne"],
            ["À trois ou quatre", "25 €", "par personne"]
          ]}
          rule="Section informative. Pas de réservation en ligne, l'organisation se fait ensuite directement avec le coach."
          cta="Nous contacter"
          ctaGhost={true}
          toggleHover={toggleHover}
        />

        <ContentBlock
          eyebrow="Académie"
          title="Une saison complète."
          lead="25 séances sur l'année, en groupe et par niveau. Une formule pour progresser dans la durée."
          list={[
            ["Enfants", "7 à 12 ans"],
            ["Jeunes", "13 à 17 ans"],
            ["Adultes", ""]
          ]}
          rule="Bandeau en tête de section : à partir de septembre 2026. Aucun tarif affiché pour l'instant, mention « tarifs communiqués prochainement ». Le bouton est une préinscription, pas une inscription."
          cta="Se préinscrire"
          toggleHover={toggleHover}
        />

        <section className="faq-section section-padding">
          <div className="container">
            <div className="text-center mb-60">
              <span className="badge-terracotta">FAQ</span>
              <h2 className="serif xl-title">Questions de <br/><span className="italic">tarifs.</span></h2>
            </div>
            <div className="faq-container-narrow">
              <FAQItem question="Le tarif est-il par personne ou par terrain ?" answer="Par personne. Un terrain accueille quatre joueurs." />
              <FAQItem question="Comment régler ?" answer="Directement dans l'application, au moment de la réservation." />
              <FAQItem question="Puis-je annuler ma réservation ?" answer="Oui, jusqu'à 24 heures avant votre créneau." />
              <FAQItem question="Faut-il être membre pour jouer ?" answer="Non. Les terrains sont accessibles à tous, avec ou sans abonnement." />
            </div>
          </div>
        </section>

        <ContentBlock
          eyebrow="À ne pas ajouter"
          title="Ce qui ne figure pas sur cette page."
          lead="Ces éléments existent mais ne sont pas publiés au lancement. Ils apparaissent dans nos documents commerciaux, ne pas les reprendre ici."
          list={[
            ["Location de raquette, balles, pro shop", "Seront ajoutés dans un second temps."],
            ["Modalités de paiement", "Abonnement comme académie, elles figureront dans les CGV."],
            ["Tarifs de l'académie", "Communiqués prochainement."],
            ["Abonnement heures pleines", "N'existe pas au lancement."],
            ["Tarif étudiant", "Il n'y en a pas."]
          ]}
          toggleHover={toggleHover}
        />
      </div>
    </>
  );
};

export default Tarifs;
