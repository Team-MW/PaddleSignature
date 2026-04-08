import React, { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Identity from '../components/Identity';
import Services from '../components/Services';
import Profiles from '../components/Profiles';
import AppCTA from '../components/AppCTA';
import BusinessCTA from '../components/BusinessCTA';
import Localisation from '../components/Localisation';

const Home = ({ toggleHover }) => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <>
      <SEO 
        title="Accueil" 
        description="Le 1er complexe de padel indoor premium à Montauban. Découvrez nos 4 terrains panoramiques, notre bar lounge, et nos offres entreprises ou régulières. Réservez vite." 
        url="/" 
      />
      <Hero heroRef={heroRef} toggleHover={toggleHover} scale={scale} />
      <Marquee />
      <Profiles toggleHover={toggleHover} />
      <Identity toggleHover={toggleHover} yParallax={yParallax} />
      <Services toggleHover={toggleHover} />
      <BusinessCTA toggleHover={toggleHover} />
      <AppCTA toggleHover={toggleHover} />
      <Localisation toggleHover={toggleHover} />
    </>
  );
};

export default Home;
