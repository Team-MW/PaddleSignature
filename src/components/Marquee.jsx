import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    },
  };

  const text = "Plus qu'un club · Une Signature · 4 terrains indoor · Montauban · ";

  return (
    <div className="marquee-container" style={{ 
      background: 'var(--terracotta)', 
      color: 'white', 
      padding: '1.5rem 0', 
      overflow: 'hidden', 
      whiteSpace: 'nowrap',
      position: 'relative',
      zIndex: 10
    }}>
      <motion.div
        className="marquee-text"
        variants={marqueeVariants}
        animate="animate"
        style={{ display: 'inline-block', fontSize: '1.5rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}
      >
        {text} {text} {text} {text}
      </motion.div>
    </div>
  );
};

export default Marquee;
