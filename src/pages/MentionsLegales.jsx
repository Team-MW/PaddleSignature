import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const MentionsLegales = () => {
  return (
    <>
      <SEO 
        title="Mentions Légales" 
        description="Consultez les mentions légales de Padel Signature. Informations sur l'éditeur, l'hébergeur et la propriété intellectuelle." 
        url="/mentions-legales" 
      />
      <section className="legal-page-header section-padding" style={{ paddingTop: '15rem', background: 'var(--cream)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="serif xl-title">Mentions <span className="italic">Légales.</span></h1>
            <p className="mt-20 opacity-60">Dernière mise à jour : Avril 2024</p>
          </motion.div>
        </div>
      </section>

      <section className="legal-page-content section-padding">
        <div className="container narrow-container">
          <div className="legal-block">
            <h2 className="serif">1. Éditeur du Site</h2>
            <p>Le site <strong>Padel Signature</strong> est édité par la société <strong>Padel Signature SAS</strong>, société par actions simplifiée au capital de 10 000 €, dont le siège social est situé au 1577 Avenue d’Italie, 82000 Montauban.</p>
            <p>SIRET : 000 000 000 00000</p>
            <p>Directeurs de la publication : Clément & Hugo.</p>
          </div>

          <div className="legal-block">
            <h2 className="serif">2. Hébergement</h2>
            <p>Le site est hébergé par la société <strong>Vercel Inc.</strong>, située au 340 S Lemon Ave #4133 Walnut, CA 91789, USA.</p>
          </div>

          <div className="legal-block">
            <h2 className="serif">3. Propriété Intellectuelle</h2>
            <p>L'intégralité du site Padel Signature (structure, textes, logos, images, vidéos) est la propriété exclusive de Padel Signature SAS. Toute reproduction, même partielle, est strictement interdite sans autorisation préalable.</p>
          </div>

          <div className="legal-block">
            <h2 className="serif">4. Protection des Données (RGPD)</h2>
            <p>Conformément à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Vous pouvez exercer ce droit en nous contactant à <strong>contact@padelsignature.fr</strong>.</p>
          </div>

          <div className="legal-block">
            <h2 className="serif">5. Cookies</h2>
            <p>Le site peut utiliser des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visite. Vous pouvez configurer votre navigateur pour désactiver les cookies.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MentionsLegales;
