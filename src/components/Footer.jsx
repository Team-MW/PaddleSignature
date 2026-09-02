import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const TripadvisorIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8.5" cy="12" r="3.5" />
    <circle cx="15.5" cy="12" r="3.5" />
    <circle cx="8.5" cy="12" r="1" fill="currentColor" />
    <circle cx="15.5" cy="12" r="1" fill="currentColor" />
  </svg>
);

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
            <img src="/logo.avif" alt="Padel Signature Logo" className="footer-logo-img" />
            <p className="footer-tagline serif italic">Un club. Une <span className="font-signature">Signature</span>.</p>

          </div>

          {/* Navigation Column */}
          <div className="footer-col">
            <h4 className="footer-title serif">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Accueil</Link></li>
              <li><Link to="/club" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Le Club</Link></li>
              <li><Link to="/entreprises" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Entreprises</Link></li>
              <li><Link to="/tarifs" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Tarifs</Link></li>
              <li><Link to="/infos" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Infos</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-col">
            <h4 className="footer-title serif">Contact</h4>
            <ul className="footer-contact-info">
              <li>
                <MapPin size={16} /> 
                <a href="https://maps.google.com/?q=1577+Avenue+d'Italie,+82000+Montauban" target="_blank" rel="noopener noreferrer" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                  1577 Avenue d’Italie, 82000 Montauban
                </a>
              </li>
              <li>
                <Phone size={16} /> 
                <a href="tel:0531970301" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                  05 31 97 03 01
                </a>
              </li>
              <li>
                <Mail size={16} /> 
                <a href="mailto:contact@padelsignature.fr" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                  contact@padelsignature.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="footer-col">
            <h4 className="footer-title serif">Suivez-nous</h4>
            <div className="footer-social-grid">
              <a href="https://www.instagram.com/padelsignature_/" target="_blank" rel="noopener noreferrer" className="footer-social-icon" onMouseEnter={toggleHover} onMouseLeave={toggleHover}><Instagram size={20} /></a>
              <a href="https://www.facebook.com/61578486221135/videos/" target="_blank" rel="noopener noreferrer" className="footer-social-icon" onMouseEnter={toggleHover} onMouseLeave={toggleHover}><Facebook size={20} /></a>
              <a href="https://fr.linkedin.com/company/padel-signature" target="_blank" rel="noopener noreferrer" className="footer-social-icon" onMouseEnter={toggleHover} onMouseLeave={toggleHover}><Linkedin size={20} /></a>
              <a href="https://www.tripadvisor.fr/" target="_blank" rel="noopener noreferrer" className="footer-social-icon" onMouseEnter={toggleHover} onMouseLeave={toggleHover}><TripadvisorIcon size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p>© 2026 <span className="font-padel">Padel</span> <span className="font-signature">Signature</span> SAS. SIREN 995 269 115. Tous droits réservés.</p>
            <div className="legal-links">
              <Link to="/mentions-legales" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Mentions Légales</Link>
              <Link to="/politique-confidentialite" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Politique de confidentialité</Link>
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
