import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Evenement = ({ toggleHover }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem('evenements_list');
    if (savedData) {
      try {
        setEvents(JSON.parse(savedData));
      } catch (e) {
        console.error("Error parsing saved data");
      }
    } else {
      // Fallback
      const oldData = localStorage.getItem('evenement_page_data');
      if (oldData) {
        try {
          const parsed = JSON.parse(oldData);
          if (parsed.title && parsed.title !== 'Événements') {
            setEvents([{ ...parsed, id: Date.now() }]);
          }
        } catch (e) {}
      }
    }
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
      <section className="section-padding" style={{ background: '#f8f9fa' }}>
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
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'row', 
                    flexWrap: 'wrap', 
                    gap: '40px', 
                    alignItems: 'center', 
                    background: 'white', 
                    padding: '40px', 
                    borderRadius: '24px', 
                    boxShadow: '0 15px 40px rgba(10, 35, 24, 0.08)'
                  }}
                >
                  {/* Image à gauche */}
                  <div style={{ flex: '1 1 400px' }}>
                    {event.image ? (
                      <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                        <img 
                          src={event.image} 
                          alt={event.title} 
                          style={{ 
                            width: '100%', 
                            height: '100%', 
                            maxHeight: '450px', 
                            objectFit: 'cover',
                            display: 'block',
                            transition: 'transform 0.5s ease'
                          }} 
                          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        />
                      </div>
                    ) : (
                      <div style={{ width: '100%', height: '300px', background: '#e9ecef', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: '#adb5bd' }}>Image de l'événement</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Texte à droite */}
                  <div style={{ flex: '1 1 400px', paddingRight: '20px' }}>
                    <h2 style={{ 
                      color: '#0a2318', 
                      marginBottom: '20px', 
                      fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                      lineHeight: '1.2',
                      textTransform: 'uppercase',
                      fontWeight: '800'
                    }}>
                      {event.title}
                    </h2>
                    
                    <div style={{ 
                      width: '60px', 
                      height: '4px', 
                      background: '#d4af37', 
                      marginBottom: '25px',
                      borderRadius: '2px'
                    }}></div>

                    <p style={{ 
                      color: '#4a5568', 
                      fontSize: '1.15rem', 
                      lineHeight: '1.8', 
                      whiteSpace: 'pre-wrap',
                      marginBottom: '0'
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
