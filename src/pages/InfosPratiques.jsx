import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Car, Shield, ChevronDown, CheckCircle2, Navigation, Coffee } from 'lucide-react';
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

const InfosPratiques = ({ toggleHover }) => {
  return (
    <>
      <SEO 
        title="Infos Pratiques | Padel Signature Montauban" 
        description="Retrouvez toutes les informations pratiques : accès, horaires, parking et règles du club Padel Signature à Montauban." 
        url="/infos-pratiques" 
      />

      {/* Hero Section */}
      <section className="page-hero-premium infos-hero" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-text-center"
          >
            <span className="badge-terracotta">Préparer votre venue</span>
            <h1 className="serif h1-huge">
              Toutes les <br/>
              <span className="italic">Infos Pratiques.</span>
            </h1>
            <p className="hero-subline">
              Tout ce dont vous avez besoin pour profiter pleinement de votre expérience Padel Signature, du parking jusqu'au terrain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Info Grid */}
      <section className="info-grid-section section-padding">
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

      {/* Tips Section */}
      <section className="tips-section section-padding" style={{ background: 'var(--dark-green)', color: 'white' }}>
        <div className="container">
          <div className="grid-asym-2 align-center">
            <div className="tips-visual">
              <img src="https://images.unsplash.com/photo-1541534741688-6078c65b5a33?q=80&w=2070&auto=format&fit=crop" alt="Padel Signature Equipment" className="tips-img" />
            </div>
            <div className="tips-content">
              <span className="badge-terracotta">Bien préparer son match</span>
              <h2 className="serif xl-title text-white">Conseils de <br/><span className="italic">L'Équipe.</span></h2>
              <ul className="tips-list">
                <li><CheckCircle2 size={20} /> Arrivez 15 minutes avant votre session.</li>
                <li><CheckCircle2 size={20} /> N'oubliez pas vos chaussures de padel (semelle à chevrons).</li>
                <li><CheckCircle2 size={20} /> Hydratez-vous : fontaines et bar à disposition.</li>
                <li><CheckCircle2 size={20} /> Le pro-shop propose balles et surgrips en cas d'oubli.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Infos FAQ */}
      <section className="faq-section section-padding" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="text-center mb-60">
            <span className="badge-terracotta">Aide</span>
            <h2 className="serif xl-title">Questions <br/><span className="italic">Pratiques.</span></h2>
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
    </>
  );
};

export default InfosPratiques;
