import React from 'react';
import { motion } from 'framer-motion';

const Localisation = ({ toggleHover }) => {
  return (
    <section className="localisation section-padding" style={{ background: 'var(--cream)' }}>
       <div className="container grid-asym-1">
          <div className="loc-text">
             <span className="badge-terracotta">Nous trouver</span>
             <h2 className="serif xl-title">Votre <br/><span className="italic">Club Padel à Montauban.</span></h2>
             <p style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>Idéalement situé dans la Zone Albasud, Padel Signature est votre nouveau QG sportif.</p>
             
             <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                <li><strong>Adresse :</strong> 1577 Avenue d’Italie, Zone Albasud, 82000 Montauban</li>
                <li><strong>Horaires :</strong> Ouvert tous les jours (9h - 23h). Accès autonome via digicode hors équipe.</li>
                <li><strong>Parking :</strong> 38 places gratuites dont 1 PMR / Stationnement vélos.</li>
             </ul>

             <a href="#contact" className="btn btn-primary" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <span>Nous contacter</span>
             </a>
          </div>

          <div className="loc-map" style={{ width: '100%', height: '500px', background: '#ccc', borderRadius: '4px', overflow: 'hidden' }}>
             {/* Replace this with true iframe once maps URL is generated */}
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.2872322521975!2d1.3283282!3d43.9937398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12abecf21eecfffb%3A0xc6cf6d421544a476!2s1577%20Avenue%20d'Italie%2C%2082000%20Montauban!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>
       </div>
    </section>
  );
};

export default Localisation;
