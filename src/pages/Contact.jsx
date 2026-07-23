import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Car, Shield, ChevronDown, Navigation, Loader2, Layout, Beer, Users, DoorOpen, Info } from 'lucide-react';
import SEO from '../components/SEO';
import ContentBlock from '../components/ContentBlock';

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

const InfoCard = ({ icon: Icon, title, lines, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    viewport={{ once: true }}
    className="info-card-premium"
  >
    <div className="info-icon-box"><Icon size={24} /></div>
    <h3 className="serif">{title}</h3>
    <div className="info-lines">
      {lines.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
  </motion.div>
);

const ContactPage = ({ toggleHover }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeHeight, setIframeHeight] = useState('600px');

  useEffect(() => {
    const handleIFrameMessage = (e) => {
      if (typeof e.data === 'string') {
        const args = e.data.split(':');
        if (args.length > 1 && args[0] === 'setHeight') {
          // Add a small buffer to prevent scrollbars in some browsers
          setIframeHeight(`${parseInt(args[1], 10) + 20}px`);
        }
      }
    };
    window.addEventListener('message', handleIFrameMessage);
    return () => window.removeEventListener('message', handleIFrameMessage);
  }, []);

  return (
    <>
      <SEO
        title="Contact | Padel Signature Montauban"
        description="Contactez-nous ou retrouvez toutes les informations pratiques : accès, horaires, parking et règles du club Padel Signature à Montauban."
        url="/contact"
      />

      {/* Hero Section */}
      <section className="page-hero-premium infos-hero with-bg" style={{ backgroundImage: 'url("/infos-pratiques-bg.png")' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-text-center"
          >
            <span className="badge-terracotta">Nous contacter</span>
            <h1 className="serif h1-huge">
              Contact & <br />
              <span className="italic">Infos.</span>
            </h1>
            <p className="hero-subline">
              Une question ? Un besoin spécifique ? Remplissez notre formulaire ou retrouvez toutes nos informations pratiques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section (Jotform) */}
      <section className="contact-form-section section-padding" style={{ background: 'var(--cream)', position: 'relative', paddingBottom: '4rem' }}>
        <div className="container" style={{ position: 'relative' }}>
          <div className="text-center mb-60">
            <span className="badge-terracotta">Nous écrire</span>
            <h2 className="serif xl-title">Formulaire de <br /><span className="italic">Contact.</span></h2>
          </div>
          
          {!iframeLoaded && (
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--dark-green)' }}>
              <Loader2 size={40} className="animate-spin mb-20" />
              <p className="serif italic" style={{ fontSize: '1.2rem' }}>Chargement du formulaire...</p>
            </div>
          )}

          <iframe
            id="JotFormIFrame-261872940638366"
            title="Formulaire de Contact Padel Signature"
            allowTransparency="true"
            allowFullScreen="true"
            allow="geolocation; microphone; camera"
            src="https://form.jotform.com/261872940638366"
            frameBorder="0"
            style={{ minWidth: '100%', height: iframeHeight, border: 'none', opacity: iframeLoaded ? 1 : 0, transition: 'opacity 0.5s ease, height 0.3s ease' }}
            scrolling="no"
            onLoad={() => setIframeLoaded(true)}
          >
          </iframe>
        </div>
      </section>

      {/* Core Info Grid */}
      <section className="info-grid-section section-padding" style={{ paddingTop: '4rem' }}>
        <div className="container">
          <div className="infos-grid-premium">
            <InfoCard
              delay={0.1}
              icon={MapPin}
              title="Accès & Localisation"
              lines={[
                "1577 Avenue d’Italie, 82000 Montauban",
                "Zone Albasud - Entrée Directe",
                "À 5 min du centre-ville"
              ]}
            />
            <InfoCard
              delay={0.2}
              icon={Clock}
              title="Horaires d'Ouverture"
              lines={[
                "Accès App : 06h00 – 00h00",
                "Bar & Accueil : 09h00 – 22h00",
                "7j/7 – Toute l'année"
              ]}
            />
            <InfoCard
              delay={0.3}
              icon={Car}
              title="Stationnement"
              lines={[
                "38 Places Privées & Gratuites",
                "Accès Sécurisé & Éclairé",
                "Stationnement Vélos dédié"
              ]}
            />
            <InfoCard
              delay={0.4}
              icon={Shield}
              title="Règles du Club"
              lines={[
                "Chaussures Propres exigées",
                "Fair-play & Élégance",
                "Accès autonome via Digicode"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="map-section-premium">
        <div className="map-container-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.7335914619426!2d1.3418523771960165!3d43.99676777108781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ac2377a0645001%3A0xe67c06eb1899981a!2s1577%20Av.%20d'Italie%2C%2082000%20Montauban!5e0!3m2!1sfr!2sfr!4v1712570800000!5m2!1sfr!2sfr"
            width="100%"
            height="600"
            style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.9)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation Padel Signature Montauban"
          ></iframe>
          <div className="map-floating-card" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <h4 className="serif">Ouvrir dans Maps</h4>
            <div className="map-links">
              <a href="https://www.google.com/maps/dir/?api=1&destination=1577+Avenue+d'Italie+82000+Montauban" target="_blank" rel="noreferrer" className="map-btn">
                <Navigation size={16} /> Google Maps
              </a>
              <a href="https://waze.com/ul?ll=43.9967677,1.3418523&navigate=yes" target="_blank" rel="noreferrer" className="map-btn">
                <Car size={16} /> Waze
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Infos FAQ */}
      <section className="faq-section section-padding" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="text-center mb-60">
            <span className="badge-terracotta">Aide</span>
            <h2 className="serif xl-title">Questions <br /><span className="italic">Pratiques.</span></h2>
          </div>
          <div className="faq-container-narrow">
            <FAQItem
              question="Y a-t-il des douches et des vestiaires ?"
              answer="Oui, nous disposons de vestiaires séparés hommes / femmes, spacieux et équipés de douches individuelles pour votre confort après l'effort."
            />
            <FAQItem
              question="Peut-on venir avec des accompagnateurs ?"
              answer="Bien sûr ! Nos accompagnateurs peuvent vous regarder depuis notre bar lounge en R+1 qui offre une vue panoramique sur tous les courts."
            />
            <FAQItem
              question="Acceptiez-vous les enfants ?"
              answer="Le club accueille les joueurs de tous âges. Pour les mineurs, une autorisation parentale ou la présence d'un adulte est requise."
            />
            <FAQItem
              question="Est-il possible de manger sur place ?"
              answer="Nous proposons une offre de snacking premium (planches, snacks sains, barres énergétiques) tout au long de la journée au bar. "
            />
          </div>
        </div>
      </section>
      {/* Section Nos Locaux (Moved from NosLocaux.jsx) */}
      <div className="text-center" style={{ paddingTop: '4rem', paddingBottom: '2rem', background: 'var(--cream)' }}>
        <span className="badge-terracotta">L'Espace Signature</span>
        <h2 className="serif xl-title">Nos <br /><span className="italic">Locaux.</span></h2>
      </div>

      <div style={{ background: 'var(--cream)' }}>
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
      </div>

      {/* Nouveaux Contenus (JSON) - Page Infos */}
      <div style={{ background: 'var(--cream)', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="text-center mb-60">
          <span className="badge-terracotta">Enlever toutes les raisons de ne pas venir</span>
          <h2 className="serif xl-title">L'Essentiel.</h2>
          <p className="hero-subline" style={{ maxWidth: '600px', margin: '0 auto' }}>La page la moins glamour et l'une des plus utiles. Quelqu'un qui arrive ici a une question précise et veut une réponse précise. Pas de storytelling, des horaires et des étapes numérotées.</p>
        </div>

        <ContentBlock
          eyebrow="Réservation"
          title="Réserver, mode d'emploi."
          steps={[
            ["01", "Téléchargez l'application", "Depuis votre navigateur, ou sur iOS et Android. Créez votre compte, activez les notifications."],
            ["02", "Choisissez votre créneau", "Disponibilités en temps réel. Les heures creuses sont à tarif réduit."],
            ["03", "Ajoutez vos partenaires", "Une partie se joue à quatre, sur 1h30. Une seule personne réserve le terrain pour les quatre joueurs. Il vous manque des joueurs ? Notre groupe WhatsApp permet d'en trouver."],
            ["04", "Réglez comme vous voulez", "Payez la totalité du terrain sur l'application, ou seulement votre part. Les autres joueurs règlent alors à la caisse du clubhouse en arrivant. Annulation jusqu'à 24 heures avant."]
          ]}
          cta="Réserver un terrain"
          toggleHover={toggleHover}
        />

        <ContentBlock
          eyebrow="Première fois"
          title="Vous venez pour la première fois ?"
          list={[
            ["Pas besoin de savoir jouer", "Le padel s'apprend en quelques minutes. Les règles se comprennent sur le terrain."],
            ["Pas besoin de matériel", "Des raquettes sont disponibles sur place. Prévoyez une tenue de sport et des chaussures propres."],
            ["Arrivez un peu en avance", "Le temps de vous garer, de passer aux vestiaires et de rejoindre votre terrain."],
            ["Restez après le match", "Le clubhouse est à l'étage, avec vue sur les courts."]
          ]}
          rule="Bloc pensé pour celui qui n'a jamais joué. C'est le frein numéro un du padel : la peur d'avoir l'air perdu en arrivant."
          toggleHover={toggleHover}
        />

        <ContentBlock
          eyebrow="Infos pratiques"
          title="Tout ce qu'il faut savoir avant de venir."
          cards={[
            ["Adresse et accès", "", "1577 Avenue d'Italie, Zone Albasud, 82000 Montauban. En bordure de l'A20, sortie 66 Albasud. À quelques minutes de l'échangeur de l'A62 vers Toulouse et Bordeaux. À 5 minutes du centre-ville."],
            ["Horaires", "", "Terrains : 24h/24, 7j/7. Clubhouse : 9h00 à 22h30, 7j/7. En dehors des horaires du clubhouse, l'accès se fait en autonomie."],
            ["Stationnement", "", "46 places de parking gratuites, place PMR, stationnement vélos."],
            ["Sur place", "", "Vestiaires équipés, casiers et douches, clubhouse à l'étage, accès de plain-pied et sanitaires adaptés PMR."]
          ]}
          toggleHover={toggleHover}
        />

        <ContentBlock
          eyebrow="Accès autonome"
          title="Les terrains sont ouverts 24h/24."
          lead="En dehors des horaires du clubhouse, vous accédez au club de façon autonome et sécurisée, par QR code. Vous réservez, vous entrez, vous jouez."
          list={[
            ["Votre QR code d'accès", "Transmis avec votre réservation."],
            ["Terrains et vestiaires", "Accessibles à toute heure."],
            ["Le clubhouse", "Ouvert de 9h00 à 22h30."]
          ]}
          rule="Une vraie particularité du club, peu de clubs le proposent. Elle mérite son bloc plutôt qu'une ligne perdue dans les infos pratiques."
          toggleHover={toggleHover}
        />

        <ContentBlock
          eyebrow="Bon usage"
          title="Quelques règles simples."
          list={[
            ["Chaussures propres exigées sur les terrains", ""],
            ["Respectez l'horaire de fin", "Un autre terrain vous suit."],
            ["Prévenez-nous en cas d'empêchement", "Jusqu'à 24 heures avant."],
            ["Le fair-play", "Sur le terrain comme au clubhouse."]
          ]}
          rule="Ton posé, jamais moralisateur."
          toggleHover={toggleHover}
        />

        <section className="faq-section section-padding">
          <div className="container">
            <div className="text-center mb-60">
              <span className="badge-terracotta">FAQ</span>
              <h2 className="serif xl-title">Besoin <br/><span className="italic">d'aide ?</span></h2>
            </div>
            <div className="faq-container-narrow">
              <FAQItem question="Faut-il être quatre pour réserver ?" answer="Une seule personne réserve pour les quatre joueurs. S'il vous manque des partenaires, notre groupe WhatsApp permet d'en trouver." />
              <FAQItem question="Peut-on réserver sans l'application ?" answer="Oui, depuis notre site avec le bouton Réserver, qui vous redirige vers notre plateforme." />
              <FAQItem question="Comment annuler ma réservation ?" answer="Depuis l'application, jusqu'à 24 heures avant votre créneau." />
              <FAQItem question="Faut-il apporter du matériel ?" answer="Des raquettes sont disponibles sur place. Prévoyez une tenue de sport et des chaussures propres." />
              <FAQItem question="Comment utiliser mes crédits ?" answer="Liés à votre compte, proposés automatiquement au paiement. Utilisables partout dans le club, valables un an." />
              <FAQItem question="Peut-on venir sans jouer ?" answer="Oui. Le clubhouse est ouvert à tous, que vous veniez boire un verre ou regarder les autres jouer." />
            </div>
          </div>
        </section>

        <ContentBlock
          eyebrow="Contact"
          title="Une question ? Écrivez-nous."
          lead="Coordonnées à gauche, carte Google Maps à droite. Formulaire en dessous."
          list={[
            ["Formulaire", "Nom, email, téléphone, objet et message."],
            ["Objet", "Réservation, académie ou coaching, entreprises, autre."],
            ["Renvoi", "Si « entreprises » est sélectionné, rediriger vers le questionnaire de la page Entreprises."]
          ]}
          flags={[
            ["Téléphone", "Le numéro n'est pas encore attribué. Prévoir l'emplacement dès maintenant, il sera ajouté avant la mise en ligne."]
          ]}
          toggleHover={toggleHover}
        />
      </div>
    </>
  );
};

export default ContactPage;
