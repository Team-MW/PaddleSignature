import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Evenement = ({ toggleHover }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events');
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
        } else {
          console.error("Erreur lors de la récupération des événements");
        }
      } catch (e) {
        console.error("Erreur réseau", e);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="evenement-page">
      <SEO title="Événements | Padel Signature" description="Découvrez nos prochains événements et rejoignez la communauté Padel Signature." url="/evenement" />
      
      {/* Hero Section */}
      <section className="hero-section" style={{ 
        minHeight: '35vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("/salle-de-pause-2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '40px', textAlign: 'center' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white uppercase mb-20"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '2px' }}
          >
            Nos Événements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ color: '#d4af37', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', fontFamily: 'serif', fontStyle: 'italic' }}
          >
            Découvrez l'agenda Padel Signature
          </motion.p>
        </div>
      </section>

      {/* Events List Section */}
      <section className="section-padding" style={{ 
        background: 'linear-gradient(135deg, #f4f7f6 0%, #ffffff 100%)',
        position: 'relative',
        paddingTop: '40px'
      }}>
        <div className="container">
          
          {events.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <h2 style={{ color: '#0a2318', opacity: 0.5 }}>Aucun événement programmé pour le moment.</h2>
              <p style={{ color: '#666', marginTop: '10px' }}>Revenez très vite pour découvrir nos prochaines dates !</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
              {events.map((event, index) => (
                <motion.div 
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ 
                    y: -5
                  }}
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'row', 
                    flexWrap: 'wrap', 
                    gap: '60px', 
                    alignItems: 'center', 
                    background: 'transparent', 
                    padding: '20px 0', 
                    transition: 'all 0.4s ease',
                    position: 'relative'
                  }}
                >

                  {/* Image à gauche */}
                  <div style={{ flex: '1 1 400px', zIndex: 2 }}>
                    {event.image ? (
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        style={{ 
                          width: '100%', 
                          maxHeight: '500px', 
                          objectFit: 'cover',
                          display: 'block',
                          borderRadius: '16px'
                        }} 
                      />
                    ) : (
                      <div style={{ width: '100%', height: '300px', background: '#f5f5f5', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: '#aaa' }}>Image de l'événement</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Texte à droite */}
                  <div style={{ flex: '1 1 400px', paddingRight: '20px', zIndex: 2 }}>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                      <img src="/logo.png" alt="Padel Signature" style={{ height: '30px', objectFit: 'contain' }} />
                      <span style={{
                        color: '#d4af37',
                        fontSize: '0.85rem',
                        fontWeight: 'bold',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        borderLeft: '1px solid rgba(212, 175, 55, 0.5)',
                        paddingLeft: '15px'
                      }}>
                        Exclusivité
                      </span>
                    </div>

                    <h2 style={{ 
                      color: '#0a2318', 
                      marginBottom: '20px', 
                      fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                      lineHeight: '1.1',
                      fontFamily: 'serif',
                      fontWeight: '700'
                    }}>
                      {event.title}
                    </h2>
                    
                    <div style={{ 
                      width: '80px', 
                      height: '3px', 
                      background: 'linear-gradient(90deg, #d4af37, transparent)', 
                      marginBottom: '30px',
                      borderRadius: '2px'
                    }}></div>

                    <p style={{ 
                      color: '#4a5568', 
                      fontSize: '1.15rem', 
                      lineHeight: '1.8', 
                      whiteSpace: 'pre-wrap',
                      marginBottom: '0',
                      fontWeight: '400'
                    }}>
                      {event.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          
        </div>
      </section>
    </div>
  );
};

export default Evenement;
