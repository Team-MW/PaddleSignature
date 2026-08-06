import React from 'react';
import { motion } from 'framer-motion';

const words = ["MONTAUBAN", "INDOOR", "24H/24", "4 TERRAINS", "CLUBHOUSE", "PADEL", "COMMUNAUTÉ", "SIGNATURE"];

const Marquee = () => {
  return (
    <div className="marquee-wrapper-modern">
      <motion.div 
        className="marquee-content"
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {[...words, ...words, ...words].map((word, index) => (
          <span key={index} className="marquee-word serif italic">
            {word} <span className="word-dot">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
