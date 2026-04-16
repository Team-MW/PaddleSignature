import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Beer, Users, DoorOpen, MapPin, Car, Info, Tv } from 'lucide-react';
import SEO from '../components/SEO';

const LocauxFeature = ({ icon: Icon, title, description, details, imageUrl, reverse, badge }) => (
  <section className={`locaux-feature-section section-padding ${reverse ? 'reverse' : ''}`}>
    <div className="container">
      <div className="locaux-grid align-center">
        <div className="locaux-image-wrapper">
          <div className="img-decoration-box"></div>
          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src={imageUrl} 
            alt={title} 
            className="img-premium-border"
          />
          {badge && <div className="locaux-floating-badge serif italic">{badge}</div>}
        </div>
        <div className="locaux-content-wrapper">
          <Icon className="terracotta-accent mb-20" size={48} />
          <h2 className="serif xl-title">{title}</h2>
          <p className="description-text mb-30">{description}</p>
          <ul className="premium-list">
            {details.map((detail, idx) => (
              <li key={idx}><Info size={18} className="terracotta-accent" /> {detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const NosLocaux = ({ toggleHover }) => {
  return (
    <>
      <SEO 
        title="Nos Locaux | Padel Signature Montauban" 
        description="Découvrez les installations premium de Padel Signature : 4 terrains panoramiques, bar lounge, salle VIP et accès autonome à Montauban." 
        url="/nos-locaux" 
      />

      {/* Hero Section */}
      <section className="page-hero-premium locaux-hero with-bg" style={{ backgroundImage: 'url("/doccument.png")' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-text-center"
          >
            <span className="badge-terracotta">L'Espace Signature</span>
            <h1 className="serif h1-huge">
              Une infrastructure <br/>
              <span className="italic">D'exception.</span>
            </h1>
            <p className="hero-subline">
              Plus qu'un club, une Signature. 1400m² dédiés à l'excellence du Padel indoor à Montauban.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hall d'entrée */}
      <LocauxFeature 
        icon={DoorOpen}
        title="Hall d'entrée & Accueil"
        badge="Bienvenue"
        description="Un accueil chaleureux et professionnel pour vous mettre dans les meilleures conditions dès votre arrivée."
        details={[
          "Espace accueil & shop",
          "Casiers à raquettes sécurisés",
          "Écrans LED pilotés par CMS",
          "Signalétique claire et élégante",
          "Sanitaires & Douche PMR"
        ]}
        imageUrl="/doc3.png"
      />

      {/* Les Terrains */}
      <LocauxFeature 
        icon={Layout}
        title="Les Terrains"
        badge="Performance"
        description="L'élite du padel avec des conditions de jeu optimales pour la performance et le plaisir."
        details={[
          "4 terrains panoramiques indoor",
          "Hauteur sous plafond de 9m",
          "Écrans LED de score sur chaque court",
          "Caméras replay HD intelligentes",
          "Scoring électronique intégré"
        ]}
        imageUrl="/doccument 2.png"
        reverse={true}
      />

      {/* Le Bar */}
      <LocauxFeature 
        icon={Beer}
        title="Le Bar Lounge"
        badge="Convivialité"
        description="Situé au R+1, notre bar offre une vue imprenable sur l'ensemble des courts pour prolonger l'expérience."
        details={[
          "Vue panoramique sur les 4 courts",
          "Comptoir Signature terracotta",
          "Tireuses à bière & sélection premium",
          "Espace Merchandising",
          "Ambiance feutrée et conviviale"
        ]}
        imageUrl="/retour5.png"
      />

      {/* Salle VIP */}
      <LocauxFeature 
        icon={Users}
        title="Salle VIP Privatisable"
        badge="Exclusivité"
        description="Un espace exclusif de 31,6 m² pour vos événements, réunions ou moments privilégiés."
        details={[
          "Vue directe sur les courts",
          "Écran de présentation ultra-HD",
          "Configuration modulable (réunion/cocktail)",
          "Espace climatisé et insonorisé",
          "Service dédié sur demande"
        ]}
        imageUrl="/doc4.png"
        reverse={true}
      />

      {/* Infos Pratiques / Accès */}
      <section className="locaux-infos section-padding" style={{ background: 'var(--dark-green)', color: 'white' }}>
        <div className="container">
          <div className="grid-2 gap-100 align-center">
            <div>
              <h2 className="serif lg-title text-white mb-40">Accès & <br/><span className="italic">Commodités.</span></h2>
              <div className="info-item-minimal">
                <MapPin size={24} className="terracotta-accent" />
                <div>
                  <h4 className="serif text-white">Adresse</h4>
                  <p className="text-white opacity-70">1577 Avenue d'Italie, 82000 Montauban<br/>Zone Albasud</p>
                </div>
              </div>
              <div className="info-item-minimal">
                <Car size={24} className="terracotta-accent" />
                <div>
                  <h4 className="serif text-white">Stationnement</h4>
                  <p className="text-white opacity-70">38 places de parking privatives dont 1 place PMR.</p>
                </div>
              </div>
              <div className="info-item-minimal">
                <Tv size={24} className="terracotta-accent" />
                <div>
                  <h4 className="serif text-white">Digitalisation</h4>
                  <p className="text-white opacity-70">Accès autonome et écrans pilotés par CMS pour une expérience moderne.</p>
                </div>
              </div>
            </div>
            <div className="opening-card-premium">
              <span className="badge-terracotta">Calendrier</span>
              <h3 className="serif text-white h3-title">Ouverture Prochaine</h3>
              <div className="date-row">
                <span className="date-label">Août 2026</span>
                <span className="date-event">Ouverture au public</span>
              </div>
              <div className="date-row">
                <span className="date-label">Septembre 2026</span>
                <span className="date-event">Inauguration officielle</span>
              </div>
              <p className="mt-40 opacity-70 italic">
                Restez connectés pour ne pas manquer le lancement du club le plus attendu de Montauban.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NosLocaux;
