import React from 'react';
import logo1 from '../assets/images/logo1entreprise.jpeg';
import logo2 from '../assets/images/logo2entreprise.jpeg';
import logo3 from '../assets/images/logo-OCCITANET.png';
import logo4 from '../assets/images/logo-PG-BAT.png';

const logos = [logo1, logo2, logo3, logo4];
const duplicatedLogos = Array(20).fill(logos).flat();

const Marquee = () => {
  // Duplicate logos enough times to fill more than 100vw, then duplicate that entire block once more.
  const baseLogos = Array(10).fill(logos).flat();

  return (
    <div className="marquee-wrapper-modern marquee-hover-pause" style={{ background: '#ffffff', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
      <div className="marquee-content-css">
        <div style={{ display: 'flex' }}>
          {baseLogos.map((logo, index) => (
            <div key={`a-${index}`} className="marquee-logo-container" style={{ paddingRight: '5rem', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              <img src={logo} alt="Partenaire" className="marquee-logo" style={{ height: '60px', objectFit: 'contain' }} />
            </div>
          ))}
        </div>
        <div style={{ display: 'flex' }}>
          {baseLogos.map((logo, index) => (
            <div key={`b-${index}`} className="marquee-logo-container" style={{ paddingRight: '5rem', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              <img src={logo} alt="Partenaire" className="marquee-logo" style={{ height: '60px', objectFit: 'contain' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
