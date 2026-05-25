import React from 'react';
import { motion } from 'framer-motion';

// SVG balle de padel encodé en base64 pour le curseur CSS natif (fallback)
// Le composant React affiche un curseur animé premium

const PadelBallSVG = ({ size = 28 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Fond jaune-vert de la balle */}
    <circle cx="20" cy="20" r="18" fill="#C8E63C" />
    {/* Ombre douce */}
    <circle cx="20" cy="20" r="18" fill="url(#ballGrad)" />
    {/* Courbes blanches caractéristiques d'une balle de padel/tennis */}
    <path
      d="M 6 14 Q 14 20 6 26"
      stroke="white"
      strokeWidth="2.2"
      strokeLinecap="round"
      fill="none"
      opacity="0.85"
    />
    <path
      d="M 34 14 Q 26 20 34 26"
      stroke="white"
      strokeWidth="2.2"
      strokeLinecap="round"
      fill="none"
      opacity="0.85"
    />
    {/* Brillance */}
    <circle cx="14" cy="13" r="3.5" fill="white" opacity="0.3" />
    <defs>
      <radialGradient id="ballGrad" cx="35%" cy="30%" r="65%">
        <stop offset="0%" stopColor="#E2F050" />
        <stop offset="100%" stopColor="#A8C820" />
      </radialGradient>
    </defs>
  </svg>
);

const CustomCursor = ({ mousePos, isHovered }) => {
  return (
    <>
      {/* Balle de padel principale */}
      <motion.div
        animate={{
          x: mousePos.x - 14,
          y: mousePos.y - 14,
          scale: isHovered ? 1.6 : 1,
          rotate: isHovered ? 45 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.4,
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          filter: isHovered
            ? 'drop-shadow(0 0 8px rgba(200, 230, 60, 0.6))'
            : 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
        }}
      >
        <PadelBallSVG size={28} />
      </motion.div>

    </>
  );
};

export default CustomCursor;
