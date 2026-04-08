import React from 'react';
import { motion } from 'framer-motion';

const CustomCursor = ({ mousePos, isHovered }) => {
  return (
    <motion.div 
      className="custom-cursor"
      animate={{
        x: mousePos.x,
        y: mousePos.y,
        width: isHovered ? 80 : 12,
        height: isHovered ? 80 : 12,
        backgroundColor: isHovered ? 'rgba(226, 114, 91, 0.2)' : 'var(--terracotta)',
        border: isHovered ? '1px solid var(--terracotta)' : 'none'
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        borderRadius: '50%',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default CustomCursor;
