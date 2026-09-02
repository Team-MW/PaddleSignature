import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SignatureCard = ({ title, description, image }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '30px 25px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      minWidth: '280px',
      width: '80vw',
      maxWidth: '360px',
      height: '420px',
      borderRadius: '16px',
      overflow: 'hidden',
      scrollSnapAlign: 'center',
      flexShrink: 0
    }}
  >
    <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '10px', fontWeight: '500', color: 'white' }}>{title}</h3>
    <p style={{ 
      fontFamily: 'var(--font-sans)',
      fontSize: '0.95rem', 
      opacity: 0.9, 
      lineHeight: 1.4, 
      margin: 0,
      fontWeight: '300',
      color: 'white'
    }}>{description}</p>
  </motion.div>
);

const Services = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section id="espaces" style={{ backgroundColor: 'var(--off-white)', paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container" style={{ marginBottom: '3rem' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', color: 'var(--terracotta)', fontWeight: 'bold', fontSize: '0.95rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            <span style={{ width: '40px', height: '2px', backgroundColor: 'var(--terracotta)', display: 'inline-block', flexShrink: 0 }}></span> 
            NOS ESPACES
            <span style={{ width: '40px', height: '2px', backgroundColor: 'var(--terracotta)', display: 'inline-block', flexShrink: 0 }}></span>
          </div>
          
          <h2 className="serif" style={{ 
            color: 'var(--dark-green)', 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            lineHeight: 1.1, 
            fontWeight: '400', 
            margin: '0 0 30px 0' 
          }}>
            Un lieu pensé <span style={{ 
              fontFamily: 'var(--font-signature)', 
              color: 'var(--terracotta)'
            }}>
              pour le jeu
            </span>
          </h2>
        </motion.div>
      </div>

      <div style={{ position: 'relative', paddingLeft: 'clamp(1.5rem, 5vw, calc((100vw - 1200px) / 2))', paddingRight: '1.5rem' }}>
        <div 
          ref={scrollContainerRef}
          style={{ 
            display: 'flex', 
            gap: '20px', 
            overflowX: 'auto', 
            scrollBehavior: 'smooth',
            scrollSnapType: 'x mandatory',
            paddingBottom: '20px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
          className="no-scrollbar"
        >
          <SignatureCard 
            title="Les terrains" 
            description="Quatre courts panoramiques indoor, 9 m sous plafond."
            image="/encore-nos-terrains.avif"
          />
          <SignatureCard 
            title="Le clubhouse" 
            description="À l'étage, avec vue sur les courts et un comptoir terracotta."
            image="/salle-de-pause.avif"
          />
          <SignatureCard 
            title="La salle séminaire" 
            description="Un espace privatisable pour vos réunions et vos événements."
            image="/salle-de-seminaire.jpeg"
          />
          <SignatureCard 
            title="Vestiaires" 
            description="Casiers et douches, tout le confort avant et après le jeu."
            image="/casier.avif"
          />
          <SignatureCard 
            title="46 places de parking" 
            description="Un parking gratuit sur place, place PMR et vélos."
            image="/parking.jpeg"
          />
          <SignatureCard 
            title="Accès 24h/24" 
            description="Par QR code, en dehors des horaires du club house."
            image="/accesautonome.jpeg"
          />
        </div>

        {/* Navigation Arrows */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
          <button 
            onClick={scrollLeft}
            style={{ 
              width: '60px', 
              height: '60px', 
              borderRadius: '50%', 
              backgroundColor: 'white', 
              border: '1px solid var(--terracotta)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--dark-green)'
            }}
          >
            <ChevronLeft size={30} />
          </button>
          <button 
            onClick={scrollRight}
            style={{ 
              width: '60px', 
              height: '60px', 
              borderRadius: '50%', 
              backgroundColor: 'white', 
              border: '1px solid var(--terracotta)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--dark-green)'
            }}
          >
            <ChevronRight size={30} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
