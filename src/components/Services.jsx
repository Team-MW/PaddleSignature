import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Coffee, Users, Briefcase, Car, Clock } from 'lucide-react';

const SignatureCard = ({ icon: Icon, title, description, delay, onHover, number, isHighlighted }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    viewport={{ once: true }}
    onMouseEnter={onHover}
    onMouseLeave={onHover}
    style={{
      backgroundColor: isHighlighted ? 'white' : 'transparent',
      color: isHighlighted ? 'var(--terracotta)' : 'white',
      padding: '25px 20px',
      position: 'relative',
      border: isHighlighted ? 'none' : '1px solid rgba(255, 255, 255, 0.3)',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '220px',
      borderRadius: '12px',
      transition: 'all 0.3s ease'
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
      <div style={{
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        backgroundColor: isHighlighted ? 'rgba(164, 87, 41, 0.1)' : 'rgba(255, 255, 255, 0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: isHighlighted ? 'var(--terracotta)' : 'white',
      }}>
        <Icon size={20} strokeWidth={1.5} />
      </div>
      
      {/* Signature style number */}
      <div style={{
        fontFamily: 'var(--font-handwriting)',
        fontSize: '3rem',
        color: isHighlighted ? 'rgba(164, 87, 41, 0.3)' : 'rgba(255, 255, 255, 0.4)',
        lineHeight: 0.8,
        transform: 'rotate(-8deg)'
      }}>
        {number}
      </div>
    </div>
    
    <div style={{ marginTop: 'auto' }}>
      <h3 className="serif" style={{ fontSize: '1.6rem', marginBottom: '8px', fontWeight: '500', color: 'inherit' }}>{title}</h3>
      <p style={{ 
        fontFamily: 'var(--font-sans)',
        fontSize: '0.9rem', 
        opacity: 0.95, 
        lineHeight: 1.4, 
        margin: 0,
        fontWeight: '300',
        color: 'inherit'
      }}>{description}</p>
    </div>
  </motion.div>
);

const Services = ({ toggleHover }) => {
  return (
    <section id="services" style={{ backgroundColor: 'var(--terracotta)', paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container" style={{ marginBottom: '3rem' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
        >
          <span style={{ 
            color: 'white', 
            textTransform: 'uppercase', 
            fontSize: '0.75rem', 
            letterSpacing: '3px', 
            fontWeight: '600', 
            display: 'block', 
            marginBottom: '15px',
            opacity: 0.95
          }}>
            NOS ESPACES
          </span>
          <h2 className="serif" style={{ 
            color: 'white', 
            fontSize: '3.5rem', 
            lineHeight: 1, 
            fontWeight: '400', 
            margin: '0 0 10px 0' 
          }}>
            Un lieu pensé <br/>
            <span style={{ 
              fontFamily: 'var(--font-handwriting)', 
              fontSize: '4.5rem', 
              color: 'white', 
              display: 'inline-block', 
              transform: 'rotate(-4deg) translateY(-5px)' 
            }}>
              pour le jeu
            </span>
          </h2>
        </motion.div>
      </div>

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <SignatureCard 
            delay={0.1}
            number="01."
            icon={Activity} 
            title="Les terrains" 
            description="Quatre courts panoramiques indoor, 9 m sous plafond."
            onHover={toggleHover}
            isHighlighted={true}
          />
          <SignatureCard 
            delay={0.2}
            number="02."
            icon={Coffee} 
            title="Le clubhouse" 
            description="À l'étage, avec vue sur les courts et un comptoir terracotta."
            onHover={toggleHover}
            isHighlighted={false}
          />
          <SignatureCard 
            delay={0.3}
            number="03."
            icon={Users} 
            title="La salle séminaire" 
            description="Un espace privatisable pour vos réunions et vos événements."
            onHover={toggleHover}
            isHighlighted={false}
          />
          <SignatureCard 
            delay={0.4}
            number="04."
            icon={Briefcase} 
            title="Vestiaires" 
            description="Casiers et douches, tout le confort avant et après le jeu."
            onHover={toggleHover}
            isHighlighted={false}
          />
          <SignatureCard 
            delay={0.5}
            number="05."
            icon={Car} 
            title="46 places de parking" 
            description="Un parking gratuit sur place, place PMR et vélos."
            onHover={toggleHover}
            isHighlighted={false}
          />
          <SignatureCard 
            delay={0.6}
            number="06."
            icon={Clock} 
            title="Accès 24h/24" 
            description="Vous entrez par QR code, à toute heure, en autonomie."
            onHover={toggleHover}
            isHighlighted={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
