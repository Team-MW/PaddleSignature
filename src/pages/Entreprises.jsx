import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Entreprises = ({ toggleHover }) => {
  return (
    <>
      <SEO 
        title="Offres Entreprises & Séminaires" 
        description="Séminaires, team-building et événements sur-mesure à Montauban. Privatisez nos terrains, notre salle VIP et notre bar pour vos équipes." 
        url="/entreprises" 
      />
      <section className="page-hero" style={{ paddingTop: '15rem', paddingBottom: '8rem', background: 'var(--cream)' }}>
        <div className="container text-center">
           <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
             <span className="badge-terracotta">B2B & Séminaires</span>
             <h1 className="serif xl-title">L'Excellence <br/><span className="italic">Pour Vos Équipes.</span></h1>
             <p style={{ maxWidth: '600px', fontSize: '1.2rem', margin: '2rem auto' }}>
               Offrez à vos collaborateurs ou clients une expérience inoubliable mêlant sport, cohésion et raffinement.
             </p>
           </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container grid-asym-1">
           <div className="contact-form-premium-refactor">
             <h3 className="serif h4-form">Demander un Devis</h3>
             <form>
                <div className="form-fields-grid">
                   <input type="text" placeholder="Nom de l'entreprise" className="premium-input" />
                   <input type="text" placeholder="Nom et Prénom" className="premium-input" />
                   <input type="email" placeholder="Email professionnel" className="premium-input" />
                   <input type="text" placeholder="Téléphone" className="premium-input" />
                   <select className="premium-select">
                      <option>Type d'événement</option>
                      <option>Séminaire & Team-building</option>
                      <option>Soirée privée</option>
                      <option>Lancement de produit</option>
                   </select>
                   <input type="date" className="premium-input" />
                   <input type="number" placeholder="Nombre de participants" className="premium-input" />
                   <textarea placeholder="Votre message ou besoins spécifiques" className="premium-textarea" rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-full-width" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                   <span>Envoyer la demande</span>
                </button>
             </form>
           </div>
           <div>
              <h2 className="serif xl-title" style={{ fontSize: '3.5rem' }}>Espaces <br/>Privatisables.</h2>
              <p style={{ marginBottom: '2rem' }}>Padel Signature vous propose des espaces modulables adaptés à tous vos besoins professionnels.</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                 <li>
                   <h4 className="serif" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Les Terrains</h4>
                   <p>Privatisez jusqu'à 4 courts interactifs avec écrans LED en mode événement (rebranding complet).</p>
                 </li>
                 <li>
                   <h4 className="serif" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Salle VIP (31,6 m²)</h4>
                   <p>Espace de réunion tout équipé avec vue panoramique sur les courts.</p>
                 </li>
                 <li>
                   <h4 className="serif" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Le Bar (R+1)</h4>
                   <p>Idéal pour vos cocktails déjeunatoires et soirées d'entreprise.</p>
                 </li>
              </ul>
              <div style={{ marginTop: '3rem' }}>
                 <a href="#" className="btn btn-outline" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Télécharger la plaquette (PDF)</a>
              </div>
           </div>
        </div>
      </section>
    </>
  );
};

export default Entreprises;
