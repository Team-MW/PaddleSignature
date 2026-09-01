import React, { useEffect } from 'react';
import SEO from '../components/SEO';

const PolitiqueConfidentialite = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Politique de Confidentialité | Padel Signature" 
        description="Consultez la politique de confidentialité de Padel Signature Montauban. Découvrez comment nous protégeons et utilisons vos données personnelles."
        url="/politique-confidentialite"
      />
      
      <div className="legal-page" style={{ paddingTop: '120px', paddingBottom: '60px', minHeight: '80vh', backgroundColor: 'var(--off-white)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '4rem', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          <h1 className="serif" style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--dark-green)' }}>Politique de Confidentialité</h1>
          
          <div className="legal-content" style={{ color: 'var(--text-main)', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '2rem' }}>
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>

            <h2 className="serif" style={{ fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--terracotta)' }}>1. Collecte des données personnelles</h2>
            <p style={{ marginBottom: '1rem' }}>
              Les informations recueillies via nos formulaires de contact sont enregistrées dans un fichier informatisé par <span className="font-padel">Padel</span> <span className="font-signature">Signature</span> pour la gestion des demandes de contact et l'envoi d'informations.
            </p>

            <h2 className="serif" style={{ fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--terracotta)' }}>2. Utilisation des données</h2>
            <p style={{ marginBottom: '1rem' }}>
              Les données collectées via nos formulaires de contact sont utilisées exclusivement pour vous recontacter dans le cadre de votre demande. Ces données ne sont ni vendues, ni louées, ni cédées à des tiers.
            </p>

            <h2 className="serif" style={{ fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--terracotta)' }}>3. Suivi et Analytics (Facebook Pixel)</h2>
            <p style={{ marginBottom: '1rem' }}>
              Notre site utilise le <strong>Pixel Facebook</strong> à des fins statistiques et pour mesurer l'efficacité de nos campagnes publicitaires. Cet outil nous permet de comprendre les actions que vous effectuez sur notre site. Ces données sont anonymisées et ne nous permettent pas de vous identifier personnellement.
            </p>

            <h2 className="serif" style={{ fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--terracotta)' }}>4. Vos droits</h2>
            <p style={{ marginBottom: '1rem' }}>
              Conformément à la loi « informatique et libertés » et au RGPD, vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en nous contactant à l'adresse suivante : <strong>contact@padelsignature.fr</strong>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PolitiqueConfidentialite;
