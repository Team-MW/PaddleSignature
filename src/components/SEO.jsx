import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url }) => {
  const siteName = "Padel Signature | Plus qu'un club, une Signature. Montauban";
  const defaultDesc = "Découvrez Padel Signature, le premier complexe indoor premium à Montauban. 4 courts panoramiques (9m de hauteur), bar lounge, salle VIP et coaching. Ouvert à tous, joueurs réguliers et entreprises.";
  
  return (
    <Helmet>
      <title>{title ? `${title} - Padel Signature` : siteName}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta property="og:title" content={title || siteName} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:url" content={`https://padelsignature.fr${url || '/'}`} />
      <meta property="og:type" content="website" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`https://padelsignature.fr${url || '/'}`} />
      {/* Schema.org pour LocalBusiness / SportsActivityLocation */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "SportsActivityLocation",
            "name": "Padel Signature",
            "description": "Complexe indoor premium de padel à Montauban",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1577 Avenue d’Italie, Zone Albasud",
              "addressLocality": "Montauban",
              "postalCode": "82000",
              "addressCountry": "FR"
            },
            "telephone": "+33 5 00 00 00 00",
            "openingHours": "Mo-Su 08:00-23:00",
            "priceRange": "$$"
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
