import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, FileText, Unlock, Wallet, MessageSquare, FileSignature, Play, MapPin, HelpCircle, ChevronDown, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import BusinessCTA from '../components/BusinessCTA';

const faqData = [
  {
    q: "Quelle est la durée de validité des tickets ?",
    a: "Nos tickets CSE sont valables 1 an à compter de leur date d'émission, offrant une grande flexibilité à vos collaborateurs."
  },
  {
    q: "Comment fonctionne la facturation ?",
    a: "Une facture unique est envoyée au CSE au moment de la commande. Les salariés n'ont rien à régler sur place pour l'utilisation de leur crédit."
  },
  {
    q: "Quel est le tarif dégressif appliqué ?",
    a: "Le tarif au ticket diminue en fonction du volume commandé. Contactez-nous pour recevoir la grille tarifaire détaillée."
  },
  {
    q: "Comment les salariés utilisent-ils leur ticket ?",
    a: "Chaque ticket correspond à un code unique ou un QR code, à présenter à l'accueil ou à saisir lors de la réservation en ligne."
  },
  {
    q: "Faut-il réserver à l'avance ?",
    a: "Oui, la réservation des pistes est obligatoire via notre application ou notre site web pour garantir la disponibilité."
  },
  {
    q: "Que comprend un ticket ?",
    a: "Un ticket représente un crédit financier (ex: 10€) utilisable librement pour payer une part de terrain, une location de raquette, ou même une consommation au bar."
  }
];

const CSE = ({ toggleHover }) => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <SEO 
        title="Offres CSE & Billetterie Padel | Padel Signature Montauban" 
        description="Offrez à vos collaborateurs une session de padel à tarif privilégié. Billetterie CSE, tarifs dégressifs et avantages exclusifs chez Padel Signature." 
        url="/cse" 
      />

      {/* Hero Section */}
      <section className="page-hero-premium enterprises-hero with-bg" style={{ backgroundImage: 'url("/salle-de-pause-2.avif")' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-text-center"
          >
            <span className="badge-terracotta">Offre CSE</span>
            <h1 className="serif h1-huge">
              Tickets Padel <br/>
              <span className="italic">Pour votre CSE.</span>
            </h1>
            <p className="hero-subline">
              Offrez à vos collaborateurs une expérience sportive premium à tarif privilégié.<br/>
              Utilisables sur nos pistes et au bar. Tarif dégressif sur devis.
            </p>
            <div className="mt-40">
              <a href="mailto:contact@padelsignature.fr" className="btn btn-primary" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <span>Demander un devis</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pourquoi Choisir Nos Tickets */}
      <section className="business-solutions section-padding">
        <div className="container">
          <div className="text-center mb-80">
            <span className="badge-terracotta">Avantages</span>
            <h2 className="serif xl-title">Pourquoi choisir <br/><span className="italic">Nos tickets ?</span></h2>
            <p className="identity-p" style={{ margin: '0 auto' }}>
              Faites plaisir à vos salariés tout en simplifiant la gestion de votre CSE avec une offre claire et avantageuse.
            </p>
          </div>
          <div className="grid-2 align-stretch" style={{ gap: '2rem' }}>
            <div className="business-card-premium" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Wallet size={32} className="terracotta-accent mb-20" />
              <h3 className="serif h3-title">Tarif Préférentiel</h3>
              <p>Des crédits pour vos collaborateurs à un prix dégressif sur devis selon le volume commandé.</p>
            </div>
            <div className="business-card-premium" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Gift size={32} className="terracotta-accent mb-20" />
              <h3 className="serif h3-title">Cadeau Idéal</h3>
              <p>Offrez une expérience sportive et conviviale dans le complexe le plus premium de Montauban.</p>
            </div>
            <div className="business-card-premium" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Unlock size={32} className="terracotta-accent mb-20" />
              <h3 className="serif h3-title">Sans Contrainte</h3>
              <p>Tickets utilisables en toute liberté au club : paiement des sessions de padel, location de matériel, ou bar lounge.</p>
            </div>
            <div className="business-card-premium" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <FileText size={32} className="terracotta-accent mb-20" />
              <h3 className="serif h3-title">Facturation Simple</h3>
              <p>Une seule facture émise pour votre CSE, pour une gestion administrative totalement simplifiée.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process / Comment ça marche */}
      <section className="business-features-detail section-padding" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="text-center mb-80">
            <span className="badge-terracotta">Le Process</span>
            <h2 className="serif xl-title">Comment <br/><span className="italic">Ça marche ?</span></h2>
            <p className="identity-p" style={{ margin: '0 auto' }}>
              Une démarche ultra simple en 3 étapes pour équiper votre CSE.
            </p>
          </div>
          
          <div className="grid-3-clean" style={{ gap: '3rem', position: 'relative' }}>
            <div className="step-card" style={{ padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ color: 'var(--terracotta)', fontSize: '3rem', fontFamily: 'var(--font-serif)', lineHeight: 1, marginBottom: '1rem' }}>01.</div>
              <h4 className="serif" style={{ fontSize: '1.5rem', color: 'var(--dark-green)', marginBottom: '1rem' }}>Vous nous contactez</h4>
              <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Précisez votre besoin : nombre de tickets souhaités et coordonnées. Aucun engagement à cette étape.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', gap: '10px', fontSize: '0.85rem', marginBottom: '8px' }}><CheckCircle size={16} color="var(--terracotta)"/> Demande rapide</li>
                <li style={{ display: 'flex', gap: '10px', fontSize: '0.85rem' }}><CheckCircle size={16} color="var(--terracotta)"/> Sans engagement</li>
              </ul>
            </div>
            
            <div className="step-card" style={{ padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ color: 'var(--terracotta)', fontSize: '3rem', fontFamily: 'var(--font-serif)', lineHeight: 1, marginBottom: '1rem' }}>02.</div>
              <h4 className="serif" style={{ fontSize: '1.5rem', color: 'var(--dark-green)', marginBottom: '1rem' }}>Devis sous 24H</h4>
              <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Notre équipe vous envoie un devis adapté à votre volume avec un tarif dégressif et les modalités pratiques.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', gap: '10px', fontSize: '0.85rem', marginBottom: '8px' }}><CheckCircle size={16} color="var(--terracotta)"/> Tarif préférentiel</li>
                <li style={{ display: 'flex', gap: '10px', fontSize: '0.85rem' }}><CheckCircle size={16} color="var(--terracotta)"/> Modalités transparentes</li>
              </ul>
            </div>
            
            <div className="step-card" style={{ padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ color: 'var(--terracotta)', fontSize: '3rem', fontFamily: 'var(--font-serif)', lineHeight: 1, marginBottom: '1rem' }}>03.</div>
              <h4 className="serif" style={{ fontSize: '1.5rem', color: 'var(--dark-green)', marginBottom: '1rem' }}>Vos salariés jouent</h4>
              <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Une fois la commande validée, vos collaborateurs profitent de leurs tickets directement au club.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', gap: '10px', fontSize: '0.85rem', marginBottom: '8px' }}><CheckCircle size={16} color="var(--terracotta)"/> Valables sur place</li>
                <li style={{ display: 'flex', gap: '10px', fontSize: '0.85rem' }}><CheckCircle size={16} color="var(--terracotta)"/> Réservation en ligne</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison & Savings */}
      <section className="section-padding" style={{ background: 'var(--dark-green)', color: 'white' }}>
        <div className="container">
          <div className="grid-2 align-center" style={{ gap: '6rem' }}>
            <div>
              <span className="badge-terracotta">L'Avantage CSE</span>
              <h2 className="serif xl-title" style={{ color: 'white' }}>Vos salariés <br/><span className="italic">Économisent.</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                Offrez à vos salariés un crédit à dépenser au club à un tarif négocié exclusif pour les comités d'entreprise. 
                Ils profitent du padel dans des conditions financières imbattables.
              </p>
              <a href="mailto:contact@padelsignature.fr" className="btn btn-primary" style={{ background: 'white', color: 'var(--dark-green)' }}>
                <span>Demander votre grille tarifaire</span>
              </a>
            </div>
            
            <div className="comparison-cards" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '3rem 2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', flex: 1 }}>
                <h4 className="uppercase" style={{ fontSize: '0.8rem', letterSpacing: '0.1em', opacity: 0.6, marginBottom: '1rem' }}>Prix Public</h4>
                <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', lineHeight: 1, marginBottom: '1.5rem' }}>Standard</div>
                <ul style={{ listStyle: 'none', padding: 0, opacity: 0.7, fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: '10px' }}>• Tarif normal appliqué</li>
                  <li style={{ marginBottom: '10px' }}>• Paiement individuel</li>
                  <li>• Aucune facturation centralisée</li>
                </ul>
              </div>
              
              <div style={{ background: 'var(--terracotta)', padding: '4rem 2rem', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', flex: 1, transform: 'scale(1.05)', zIndex: 2 }}>
                <h4 className="uppercase" style={{ fontSize: '0.8rem', letterSpacing: '0.1em', opacity: 0.9, marginBottom: '1rem' }}>Tarif CSE</h4>
                <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', lineHeight: 1, marginBottom: '1.5rem' }}>Dégressif</div>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: '10px', display: 'flex', gap: '8px' }}><CheckCircle size={16}/> Valable Pistes & Bar</li>
                  <li style={{ marginBottom: '10px', display: 'flex', gap: '8px' }}><CheckCircle size={16}/> Tarif négocié</li>
                  <li style={{ display: 'flex', gap: '8px' }}><CheckCircle size={16}/> Facture unique CSE</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accès et Découverte Club */}
      <section className="section-padding">
        <div className="container">
           <div className="grid-2 align-center">
            <div className="business-detail-img">
               <img src="/casier.avif" alt="Club Padel Signature Montauban" className="img-premium-border" style={{ borderRadius: '12px' }} />
            </div>
            <div className="business-detail-content pl-60">
              <span className="badge-terracotta">Le Complexe</span>
              <h2 className="serif lg-title">Un Accès <br/><span className="italic">Facilité.</span></h2>
              <p className="mb-20">
                Notre club est idéalement situé, offrant à vos collaborateurs un cadre moderne et convivial pour se retrouver après le travail ou le week-end.
              </p>
              <ul className="premium-list">
                <li><MapPin className="list-icon" /> 1577 Avenue d'Italie, 82000 Montauban</li>
                <li><CheckCircle className="list-icon" /> Parking gratuit et accès direct</li>
                <li><CheckCircle className="list-icon" /> 4 pistes panoramiques premium</li>
                <li><CheckCircle className="list-icon" /> Bar lounge et espace détente R+1</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="text-center mb-60">
            <h2 className="serif xl-title">FAQ <span className="italic">CSE</span></h2>
            <p className="identity-p" style={{ margin: '0 auto' }}>Tout ce qu'il faut savoir avant de commander.</p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqData.map((item, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: 'white', 
                  marginBottom: '1rem', 
                  borderRadius: '8px', 
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
                }}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  style={{ 
                    width: '100%', 
                    padding: '1.5rem 2rem', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    background: 'none', 
                    border: 'none', 
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                  onMouseEnter={toggleHover}
                  onMouseLeave={toggleHover}
                >
                  <span className="serif" style={{ fontSize: '1.2rem', color: 'var(--dark-green)', fontWeight: 600 }}>{item.q}</span>
                  <motion.div animate={{ rotate: openFaq === idx ? 180 : 0 }}>
                    <ChevronDown size={20} color="var(--terracotta)"/>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '0 2rem 1.5rem 2rem', color: 'var(--text-muted)' }}>
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BusinessCTA />
    </>
  );
};

export default CSE;
