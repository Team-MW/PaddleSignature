import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';

const FAQItemFooter = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="footer-faq-item">
      <button className="faq-trigger" onClick={() => setIsOpen(!isOpen)}>
        <span className="serif">{question}</span>
        <ChevronDown size={16} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }} />
      </button>
      <div className={`faq-content ${isOpen ? 'open' : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const Footer = ({ toggleHover }) => {
  return (
    <footer className="footer-elite">
      <div className="container">
        {/* New FAQ Section in Footer */}
        <div className="footer-faq-premium">
          <div className="faq-header-footer">
             <span className="badge-terracotta">Aide & Infos</span>
             <h3 className="serif text-white">Foire aux <span className="italic">Questions.</span></h3>
          </div>
          <div className="faq-grid-footer">
             <FAQItemFooter 
               question="Quels sont les horaires d'ouverture ?" 
               answer="Le club est accessible tous les jours de 6h00 à minuit pour les réservations via l'application. L'accueil et le bar sont ouverts du Lundi au Dimanche (9h-22h)."
             />
             <FAQItemFooter 
               question="Quelles chaussures de sport porter ?" 
               answer="Pour préserver la qualité de nos terrains panoramiques, des chaussures de tennis ou de padel à semelles non marquantes sont exigées."
             />
             <FAQItemFooter 
               question="Peut-on louer du matériel sur place ?" 
               answer="Oui, nous proposons la location de raquettes haut de gamme et la vente de balles premium au bar lounge."
             />
             <FAQItemFooter 
               question="Le parking est-il gratuit ?" 
               answer="Absolument. Nous mettons à votre disposition 38 places de parking privées et sécurisées juste devant le club."
             />
          </div>
        </div>

        <div className="footer-divider-premium"></div>

        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <img src="/logo.png" alt="Padel Signature Logo" className="footer-logo-img" />
            <p className="footer-tagline serif italic">Plus qu'un club. Une Signature.</p>
            <p className="footer-about">
              Le premier complexe de padel indoor premium à Montauban. Une expérience unique alliant sport d'excellence et art de vivre.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="footer-col">
            <h4 className="footer-title serif">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Accueil</Link></li>
              <li><Link to="/club" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Le Club</Link></li>
              <li><Link to="/entreprises" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Entreprises</Link></li>
              <li><Link to="/tarifs" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Tarifs</Link></li>
              <li><Link to="/infos-pratiques" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Infos Pratiques</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-col">
            <h4 className="footer-title serif">Contact</h4>
            <ul className="footer-contact-info">
              <li><MapPin size={16} /> <span>1577 Avenue d’Italie, 82000 Montauban</span></li>
              <li><Phone size={16} /> <span>+33 5 00 00 00 00</span></li>
              <li><Mail size={16} /> <span>contact@padelsignature.fr</span></li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="footer-col">
            <h4 className="footer-title serif">Suivez-nous</h4>
            <div className="footer-social-grid">
              <a href="#" className="footer-social-icon" onMouseEnter={toggleHover} onMouseLeave={toggleHover}><Instagram size={20} /></a>
              <a href="#" className="footer-social-icon" onMouseEnter={toggleHover} onMouseLeave={toggleHover}><Facebook size={20} /></a>
              <a href="#" className="footer-social-icon" onMouseEnter={toggleHover} onMouseLeave={toggleHover}><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p>© 2024 Padel Signature. Tous droits réservés.</p>
            <div className="legal-links">
              <Link to="/mentions-legales" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Mentions Légales</Link>
              <Link to="/confidentialite" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Confidentialité</Link>
            </div>
          </div>
          <p className="footer-signature">
            Design par <span style={{ color: 'var(--terracotta)' }}>MW Créa</span> — Réalisé par <a href="https://microdidact.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>Microdidact</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
