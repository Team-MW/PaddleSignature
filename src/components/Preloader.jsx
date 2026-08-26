import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LogoLoader = () => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999999,
    }}
  >
    <motion.img 
      src="/Fichier 11.avif" 
      alt="Padel Signature Loading" 
      initial={{ scale: 0.9, opacity: 0.6 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 1, 
        repeat: Infinity, 
        repeatType: "reverse",
        ease: "easeInOut"
      }}
      style={{ width: '200px', height: 'auto', marginBottom: '30px' }}
    />
    <div style={{ width: '150px', height: '2px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: '50%',
          height: '100%',
          backgroundColor: 'var(--terracotta)',
          borderRadius: '2px'
        }}
      />
    </div>
  </div>
);

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === 'complete') {
      const timer = setTimeout(() => setLoading(false), 800);
      return () => clearTimeout(timer);
    } else {
      window.addEventListener('load', handleLoad);
      const timeout = setTimeout(() => setLoading(false), 3000);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timeout);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ position: 'fixed', zIndex: 999999, width: '100%', height: '100%' }}
        >
          <LogoLoader />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
