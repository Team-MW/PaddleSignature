import React from 'react';

const Footer = ({ toggleHover }) => {
  return (
    <footer className="footer-elite">
       <div className="container footer-main-row">
          <div className="footer-logo-box">
             <img src="/logo.png" alt="Padel Signature Logo" style={{ height: '70px', objectFit: 'contain' }} />
          </div>
          <div className="footer-nav-list">
             <a href="#" className="footer-nav-link" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Mentions</a>
             <a href="#" className="footer-nav-link" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Confidentialité</a>
             <a href="#" className="footer-nav-link" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Cookies</a>
          </div>
          <p className="footer-copy">© 2024 Design de Prestige</p>
       </div>
       <div className="footer-giant-bg serif">padel signature</div>
    </footer>
  );
};

export default Footer;
