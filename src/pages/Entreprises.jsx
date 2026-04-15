import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Target, Calendar, MessageSquare, Coffee } from 'lucide-react';
import SEO from '../components/SEO';
import BusinessCTA from '../components/BusinessCTA';

const Entreprises = ({ toggleHover }) => {
  return (
    <>
      <SEO 
        title="Padel B2B & Séminaires | Padel Signature Montauban" 
        description="Fédérez vos équipes chez Padel Signature. Séminaires, Team Building et Privatisation d'espaces avec salle VIP de 32m² et bar panoramique." 
        url="/entreprises" 
      />

      {/* Hero Section */}
      <section className="page-hero-premium enterprises-hero with-bg" style={{ backgroundImage: 'url("/high-angle-palette-balls-field.jpg")' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-text-center"
          >
            <span className="badge-terracotta">Business & Performance</span>
            <h1 className="serif h1-huge">
              Fédérez vos équipes <br/>
              <span className="italic">Par le sport.</span>
            </h1>
            <p className="hero-subline">
              Padel Signature offre un cadre prestigieux pour vos événements d'entreprise, alliant sportivité, convivialité et professionnalisme.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="business-solutions section-padding">
        <div className="container">
          <div className="text-center mb-80">
            <h2 className="serif xl-title">Nos Solutions <br/><span className="italic">Sur Mesure.</span></h2>
          </div>
          <div className="grid-3-clean">
            <div className="business-card-premium">
              <Users size={32} className="terracotta-accent mb-20" />
              <h3 className="serif h3-title">Team Building</h3>
              <p>Initiez vos collaborateurs au sport le plus convivial du moment. Tournois internes, cliniques avec coachs et moments de partage garantis.</p>
            </div>
            <div className="business-card-premium">
              <Building2 size={32} className="terracotta-accent mb-20" />
              <h3 className="serif h3-title">Séminaires</h3>
              <p>Profitez de notre salle VIP de 32m² équipée (écran, WiFi) pour vos réunions, avant de vous détendre sur les courts ou au bar lounge.</p>
            </div>
            <div className="business-card-premium">
              <Target size={32} className="terracotta-accent mb-20" />
              <h3 className="serif h3-title">Privatisation</h3>
              <p>Offrez-vous l'exclusivité du club pour une soirée ou une journée. Un cadre unique pour impressionner vos clients et partenaires.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Detail */}
      <section className="business-features-detail section-padding" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="grid-2 align-center">
            <div className="business-detail-img">
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Team Building Padel" className="img-premium-border" />
            </div>
            <div className="business-detail-content pl-60">
              <span className="badge-terracotta">Infrastructure</span>
              <h2 className="serif lg-title">Un espace de travail <br/><span className="italic">Inspirant.</span></h2>
              <ul className="premium-list">
                <li><Calendar className="list-icon" /> Salle VIP modulable de 32m²</li>
                <li><MessageSquare className="list-icon" /> Equipement audiovisuel complet</li>
                <li><Coffee className="list-icon" /> Service traiteur et bar lounge</li>
                <li><Users className="list-icon" /> Capacité d'accueil jusqu'à 100 personnes</li>
              </ul>
              <button className="btn-terracotta-outline mt-40" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Demander un devis</button>
            </div>
          </div>
        </div>
      </section>

      <BusinessCTA />
    </>
  );
};

export default Entreprises;
