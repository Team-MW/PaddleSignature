import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Car, Shield, ChevronDown, Navigation, Loader2, Layout, Beer, Users, DoorOpen, Info } from 'lucide-react';
import SEO from '../components/SEO';
import ContentBlock from '../components/ContentBlock';


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

const InfosPage = ({ toggleHover }) => {
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
        title="Infos Pratiques | Padel Signature Montauban"
        description="Retrouvez toutes les informations pratiques : accès, horaires, parking et règles du club Padel Signature à Montauban."
        url="/infos"
      />

      {/* Hero Section */}
      <section className="page-hero-premium infos-hero with-bg" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("/encore-nos-terrains.avif")' }}>
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
      <section id="reservation-form" className="contact-form-section section-padding" style={{ background: 'var(--cream)', position: 'relative', paddingBottom: '4rem' }}>
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
                "Zone Albasud - Entrée Directe"
              ]}
            />
            <InfoCard
              delay={0.2}
              icon={Clock}
              title="Horaires d'Ouverture"
              lines={[
                "Terrains : 24h/24, 7j/7",
                "Clubhouse : 11h30-22h (semaine)",
                "Clubhouse : 10h30-21h (week-end)"
              ]}
            />
            <InfoCard
              delay={0.3}
              icon={Car}
              title="Stationnement"
              lines={[
                "46 places gratuites",
                "Place PMR",
                "Stationnement Vélos dédié"
              ]}
            />
            <InfoCard
              delay={0.4}
              icon={Shield}
              title="Règles du Club"
              lines={[
                "Accès autonome via Digicode",
                "Chaussures Propres exigées",
                "Fair-play & Élégance"
              ]}
            />
          </div>
        </div>
      </section>

      {/* 24/7 Access Section */}
      <section className="infos-access-section section-padding" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="text-center mb-60" style={{ maxWidth: '800px', margin: '0 auto 4rem auto' }}>
            <h2 className="serif xl-title mb-20">
              Les terrains sont ouverts <span className="italic" style={{ color: 'var(--terracotta)' }}>24h/24.</span>
            </h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              En dehors des horaires du clubhouse, vous accédez au club de façon autonome et sécurisée, par QR code. Vous réservez, vous entrez, vous jouez.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2.5rem', background: 'white', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--terracotta)' }}>
                 <DoorOpen size={24} />
              </div>
              <h4 className="serif" style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Votre QR code d'accès</h4>
              <p className="text-muted" style={{ fontSize: '0.95rem' }}>Transmis avec votre réservation.</p>
            </div>
            
            <div style={{ padding: '2.5rem', background: 'white', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--terracotta)' }}>
                 <Users size={24} />
              </div>
              <h4 className="serif" style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Terrains et vestiaires</h4>
              <p className="text-muted" style={{ fontSize: '0.95rem' }}>Accessibles à toute heure.</p>
            </div>

            <div style={{ padding: '2.5rem', background: 'white', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--terracotta)' }}>
                 <Beer size={24} />
              </div>
              <h4 className="serif" style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Le clubhouse</h4>
              <p className="text-muted" style={{ fontSize: '0.95rem' }}>11h30 à 22h en semaine, 10h30 à 21h le week-end.</p>
            </div>
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





      {/* Bon Usage Section */}
      <section className="bon-usage-section section-padding" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="community-subtitle-wrapper" style={{ justifyContent: 'flex-start', marginBottom: '1rem' }}>
            <span className="community-line"></span>
            <span className="community-subtitle">BON USAGE</span>
          </div>
          
          <h2 className="serif xl-title mb-60">
            Quelques <span className="italic" style={{ color: 'var(--terracotta)' }}>règles simples.</span>
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
            gap: '1.5rem' 
          }}>
            <div style={{ padding: '2.5rem 2rem', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <h4 className="serif" style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Chaussures propres</h4>
              <p className="text-muted" style={{ fontSize: '0.95rem' }}>Exigées sur les terrains.</p>
            </div>
            <div style={{ padding: '2.5rem 2rem', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <h4 className="serif" style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Respectez l'horaire de fin</h4>
              <p className="text-muted" style={{ fontSize: '0.95rem' }}>Un autre terrain vous suit.</p>
            </div>
            <div style={{ padding: '2.5rem 2rem', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <h4 className="serif" style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Prévenez-nous en cas d'empêchement</h4>
              <p className="text-muted" style={{ fontSize: '0.95rem' }}>Jusqu'à 24 heures avant.</p>
            </div>
            <div style={{ padding: '2.5rem 2rem', border: '1px solid var(--border)', borderRadius: '12px' }}>
              <h4 className="serif" style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Le fair-play</h4>
              <p className="text-muted" style={{ fontSize: '0.95rem' }}>Sur le terrain comme au clubhouse.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Infos FAQ Combine */}
      <section className="faq-section section-padding" style={{ background: 'var(--off-white)' }}>
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
            <FAQItem question="Y a-t-il des douches et des vestiaires ?" answer="Oui, nous disposons de vestiaires séparés hommes / femmes, spacieux et équipés de douches individuelles pour votre confort après l'effort." />
            <FAQItem question="Peut-on venir avec des accompagnateurs ?" answer="Bien sûr ! Nos accompagnateurs peuvent vous regarder depuis notre bar lounge en R+1 qui offre une vue panoramique sur tous les courts." />
            <FAQItem question="Acceptiez-vous les enfants ?" answer="Le club accueille les joueurs de tous âges. Pour les mineurs, une autorisation parentale ou la présence d'un adulte est requise." />
            <FAQItem question="Est-il possible de manger sur place ?" answer="Nous proposons une offre de snacking premium (planches, snacks sains, barres énergétiques) tout au long de la journée au bar. " />
          </div>
        </div>
      </section>
    </>
  );
};

export default InfosPage;
