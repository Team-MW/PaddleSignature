import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { MapPin, Clock, Car, Info } from 'lucide-react';

const InfosPratiques = ({ toggleHover }) => {
  return (
    <>
      <SEO 
        title="Infos Pratiques" 
        description="Accès, horaires, parking et règles du club. Organisez votre venue au Padel Signature de Montauban." 
        url="/infos-pratiques" 
      />
      <section className="page-hero" style={{ paddingTop: '15rem', paddingBottom: '8rem', background: 'var(--cream)' }}>
        <div className="container text-center">
           <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
             <span className="badge-terracotta">Préparer votre venue</span>
             <h1 className="serif xl-title">Infos <span className="italic">Pratiques.</span></h1>
           </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
           
           <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                 <MapPin className="terracotta-accent" size={32} />
                 <h2 className="serif" style={{ fontSize: '2.5rem' }}>Accès</h2>
              </div>
              <p>Zone Albasud<br/>1577 Avenue d’Italie<br/>82000 Montauban</p>
              <p style={{ marginTop: '1rem' }}>Accès direct depuis l'A62.</p>
           </div>

           <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                 <Car className="terracotta-accent" size={32} />
                 <h2 className="serif" style={{ fontSize: '2.5rem' }}>Parking</h2>
              </div>
              <p>38 places gratuites à disposition de nos membres et visiteurs.</p>
              <p>1 place PMR directement devant l'entrée.</p>
              <p>Stationnement vélos sécurisé disponible.</p>
           </div>

           <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                 <Clock className="terracotta-accent" size={32} />
                 <h2 className="serif" style={{ fontSize: '2.5rem' }}>Horaires</h2>
              </div>
              <p><strong>Heures Creuses (HC) :</strong><br/>Lundi-Vendredi 9h-12h & 14h-16h</p>
              <p style={{ marginTop: '1rem' }}><strong>Heures Pleines (HP) :</strong><br/>Soirées et Week-ends.</p>
              <p style={{ marginTop: '1rem' }}><em>Accès autonome possible hors présence du staff via digicode.</em></p>
           </div>

           <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                 <Info className="terracotta-accent" size={32} />
                 <h2 className="serif" style={{ fontSize: '2.5rem' }}>Équipement</h2>
              </div>
              <p>Tenue de sport exigée (chaussures propres pour moquette).</p>
              <p style={{ marginTop: '1rem' }}>Des raquettes et balles sont disponibles en location ou achat au sein de notre Pro-Shop.</p>
           </div>

        </div>
      </section>

      {/* Google Maps Embed mockup */}
      <section style={{ height: '400px', background: '#ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p>Carte Google Maps interactive</p>
      </section>
    </>
  );
};

export default InfosPratiques;
