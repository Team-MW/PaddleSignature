import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook } from 'lucide-react';

const Contact = ({ toggleHover }) => {
  return (
    <section id="contact" className="contact-main-section">
       <div className="container contact-grid-premium">
          <div className="contact-info-block">
             <h2 className="serif h2-contact">Parlons de votre <br/><span className="italic">Prochain Match.</span></h2>
             <div className="contact-details-row">
                <div className="contact-detail-col">
                   <span className="badge-small-terracotta">Le Club</span>
                   <p className="contact-p-main">123 Avenue des Champs, Paris</p>
                </div>
                <div className="contact-detail-col">
                   <span className="badge-small-terracotta">Contact</span>
                   <p className="contact-p-main">+33 1 72 34 56 78</p>
                   <p className="contact-p-sub">hello@padelsignature.com</p>
                </div>
             </div>
             <div className="social-links-premium" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <a href="#" className="social-link-item"><Instagram size={20}/> <span className="uppercase text-social">Instagram</span></a>
                <a href="#" className="social-link-item"><Facebook size={20}/> <span className="uppercase text-social">Facebook</span></a>
             </div>
          </div>
          <motion.form 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="contact-form-premium-refactor"
          >
             <h4 className="serif h4-form">Demande d'informations</h4>
             <div className="form-fields-grid">
                <input type="text" placeholder="Nom complet" className="premium-input" />
                <input type="email" placeholder="Email" className="premium-input" />
                <select className="premium-select">
                   <option>Sélectionnez un sujet</option>
                   <option>Réservation</option>
                   <option>Entreprise</option>
                   <option>Partenariat</option>
                </select>
                <textarea placeholder="Votre message" rows="3" className="premium-textarea"></textarea>
             </div>
             <button className="btn btn-primary btn-full-width" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <span>Envoyer la demande</span>
             </button>
          </motion.form>
       </div>
    </section>
  );
};

export default Contact;
