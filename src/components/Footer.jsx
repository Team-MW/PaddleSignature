import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = ({ toggleHover }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className="footer-elite">
      {/* FAQ Section - Full Width Background, Contained Content */}


      <div className="container">

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
              <li><Link to="/nos-locaux" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Nos Locaux</Link></li>
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
            <p>© 2026 Padel Signature SAS. SIREN 995 269 115. Tous droits réservés.</p>
            <div className="legal-links">
              <Link to="/mentions-legales" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Mentions Légales</Link>
            </div>
          </div>
          <p className="footer-signature">
            Design & Réalisation par <a href="https://microdidact.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>Microdidact</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
