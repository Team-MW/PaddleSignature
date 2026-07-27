import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Target, Calendar, MessageSquare, Coffee, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import BusinessCTA from '../components/BusinessCTA';
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

const Entreprises = ({ toggleHover }) => {
  return (
    <>
      <SEO 
        title="Padel B2B & Séminaires | Padel Signature Montauban" 
        description="Fédérez vos équipes chez Padel Signature. Séminaires, Team Building et Privatisation d'espaces avec salle VIP de 32m² et bar panoramique." 
        url="/entreprises" 
      />

      {/* Hero Section */}
      <section className="page-hero-premium enterprises-hero with-bg" style={{ backgroundImage: 'url("/high-angle-palette-balls-field.jpg")' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-text-center"
          >
            <span className="badge-terracotta">Business & Performance</span>
            <h1 className="serif h1-huge">
              Fédérez vos équipes <br/>
              <span className="italic">Par le sport.</span>
            </h1>
            <p className="hero-subline">
              Padel Signature offre un cadre prestigieux pour vos événements d'entreprise, alliant sportivité, convivialité et professionnalisme.
            </p>
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

      {/* Nouveaux Contenus (JSON) */}
      <div style={{ background: 'var(--cream)', paddingTop: '4rem' }}>
        <ContentBlock
          eyebrow="Entreprises"
          title="Le padel, nouveau terrain de jeu de votre entreprise."
          quote="Recevoir vos clients, fédérer vos équipes, faire rayonner votre marque."
          rule="Trois mots-repères sous le titre : RECEVOIR · FÉDÉRER · RAYONNER"
          cta="Parlons de votre projet"
          img="Le couloir des terrains ou le clubhouse, un plan qui donne l'échelle du lieu."
          toggleHover={toggleHover}
        />

        <ContentBlock
          eyebrow="Nos espaces"
          title="Un club conçu pour recevoir."
          lead="Quatre terrains, une salle séminaire privatisable et un clubhouse avec vue sur les courts. Le tout au même endroit, avec un parking sur place."
          list={[
            ["Le padel s'apprend en quelques minutes", "Vos équipes ou vos clients jouent ensemble dès la première fois, quel que soit leur niveau. Personne ne reste sur le côté."]
          ]}
          rule="Quatre repères en ligne : 4 terrains · 1 salle séminaire de 32 m² · 1 clubhouse · parking sur place"
          flags={[
            ["Aucun chiffre de marché", "Les +40 % de pratiquants et la croissance du padel en France sont retirés. On parle de nous, pas du secteur."]
          ]}
          img="Le clubhouse en situation, lumière chaude, quelques personnes."
          reverse={true}
          toggleHover={toggleHover}
        />

        <ContentBlock
          eyebrow="Pour vos collaborateurs"
          title="La carte crédit entreprise."
          quote="Offrez le padel à vos équipes, sans gérer les réservations une par une."
          steps={[
            ["01", "Nous ouvrons votre compte", "Un compte au nom de l'entreprise, entièrement dématérialisé."],
            ["02", "Vous créditez le montant de votre choix", "Nous ajoutons un bonus, qui augmente avec le montant crédité."],
            ["03", "Vos équipes réservent", "Vous répartissez les crédits vers l'application de chaque collaborateur. Utilisables partout dans le club."]
          ]}
          price="Avec les bonus, la partie revient à partir de 10 € par joueur."
          rule="Ne pas publier les tranches ni les pourcentages de bonus. Ça se présente en rendez-vous."
          cta="En discuter avec nous"
          toggleHover={toggleHover}
        />

        <ContentBlock
          eyebrow="Événements"
          title="Séminaires, team building, privatisations."
          lead="Vous réservez les terrains, puis vous composez votre journée. On s'occupe du reste : matériel, boissons, encadrement, mise en place."
          steps={[
            ["09h00", "Accueil", "Café au clubhouse, vestiaires à disposition."],
            ["10h00", "Session de travail", "La salle séminaire privatisée, équipée pour vos présentations."],
            ["12h30", "Déjeuner", "Sur place au clubhouse, ou formule traiteur."],
            ["14h00", "Sur les terrains", "Initiation, tournoi ou américano. Raquettes et balles fournies."],
            ["17h00", "Afterwork", "Le clubhouse pour prolonger le moment, avec vue sur les courts."]
          ]}
          cards={[
            ["Les terrains", "", "De 1 à 4 terrains pendant 1h30, soit 4 à 16 joueurs. Raquettes, balles et boissons comprises."],
            ["Terrains et salle séminaire", "", "La formule terrains, avec notre salle séminaire de 32 m² privatisée et équipée : écran, wifi, climatisation."],
            ["Terrains et coaching", "", "La formule terrains, avec un coach dédié sur vos courts. Initiation, tournoi ou américano."],
            ["La formule complète", "", "Terrains, salle séminaire, coaching et écrans à vos couleurs."]
          ]}
          rule="Options en une seule phrase, pas de cards : « Traiteur, photo et vidéo, afterwork prolongé, salle séminaire seule : on ajoute ce qu'il vous faut au moment de construire votre devis. »"
          cta="Demander un devis"
          img="La salle séminaire configurée en réunion, avec la vue sur les terrains."
          reverse={true}
          toggleHover={toggleHover}
        />

        <ContentBlock
          eyebrow="Visibilité"
          title="Votre marque, du terrain aux réseaux."
          quote="Un panneau publicitaire, c'est trois secondes vues par un automobiliste qui passe. Ici, votre marque accompagne un dirigeant pendant deux heures."
          list={[
            ["Sur les deux écrans du club", "Dans le sas d'entrée et le couloir des terrains."],
            ["Le nom de votre entreprise sur un terrain", "Y compris dans l'application."],
            ["Le mur des partenaires", "Devant lequel posent les vainqueurs de nos tournois."],
            ["Nos supports", "Notre site, nos réseaux et nos contenus vidéo."]
          ]}
          rule="Les positions sont limitées et exclusives par secteur d'activité."
          flags={[
            ["Aucun tarif, aucun nom de formule", "Ni Majeur, ni Officiel, ni Local. Le naming se présente en visite, devant les écrans allumés. C'est là que ça se joue."]
          ]}
          cta="Prendre rendez-vous"
          img="L'écran du sas d'entrée avec un visuel partenaires affiché."
          toggleHover={toggleHover}
        />



        <ContentBlock
          eyebrow="Questionnaire"
          title="Parlons de votre projet."
          lead="Destination de tous les CTA de la page. Deux étapes, barre de progression, des boutons à cliquer plutôt que des champs à remplir."
          steps={[
            ["Étape 1", "Votre projet", "Type de demande · nombre de participants · échéance · durée envisagée · ce qui vous intéresse"],
            ["Étape 2", "Vous", "Entreprise · nom · email · téléphone · un mot sur votre projet"],
            ["Après", "Confirmation", "« On revient vers vous sous 48 heures. » Plus les contacts directs de Clément et Hugo."]
          ]}
          rule="Si « Visibilité et partenariat » est sélectionné, les questions sur l'effectif et la durée sautent. On demande le secteur d'activité, ce qui permet de vérifier tout de suite si la position sectorielle est libre."
          toggleHover={toggleHover}
        />
      </div>
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
          <p className="rule-text mt-40" style={{ maxWidth: '800px', margin: '40px auto 0' }}>
            <em>Aucune capacité maximale chiffrée sur la page. On adapte au cas par cas.</em>
          </p>
        </div>
      </section>
    </>
  );
};

export default Entreprises;
