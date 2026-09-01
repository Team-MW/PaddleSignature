import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, Star, Users, Award, Layout, Zap, LayoutGrid, Video, Box, QrCode, ChevronLeft, ChevronRight, Eye, UtensilsCrossed, Tv2 } from 'lucide-react';
import SEO from '../components/SEO';
import ContentBlock from '../components/ContentBlock';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="faq-item-modern">
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span className="serif">{question}</span>
        <ChevronDown size={20} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="faq-answer"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Club = ({ toggleHover }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: "/espaces.avif", title: "4 courts panoramiques", subtitle: "Terrains indoor avec 9 m de hauteur, en plein cœur de Montauban." },
    { src: "/accesautonome.jpeg", title: "Accès autonome", subtitle: "Le club reste ouvert 24h/24. En dehors des horaires du clubhouse, l'entrée se fait par QR code." },
    { src: "/score.jpeg", title: "Vidéo replay et score", subtitle: "Le score à l'écran, vos points en replay." },
    { src: "/casier.avif", title: "Vestiaires équipés", subtitle: "Casiers, douches et tout le confort avant et après le jeu." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <>
      <SEO
        title="Le Club Padel Signature | L'Excellence à Montauban"
        description="Découvrez l'histoire de Clément et Hugo, les fondateurs de Padel Signature. 4 terrains panoramiques, bar lounge R+1 et salle VIP à Montauban."
        url="/club"
      />

      {/* Hero Section */}
      <section
        className="page-hero-premium club-hero with-bg"
        style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("/ezfaz.jpeg")' }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-text-center"
          >
            <span className="badge-terracotta">L'Esprit Signature</span>
            <h1 className="serif h1-huge">
              L'Elite du <span className="font-padel">Padel</span> <br />
              <span className="italic">À Montauban</span>
            </h1>
          </motion.div>
        </div>
      </section>






        <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div className="text-center mb-60">
            <h2 className="serif xl-title mb-10" style={{ fontSize: '3rem' }}>
              Un club où l'on vient <span className="italic" style={{ color: 'var(--terracotta)' }}>pour jouer,</span>
            </h2>
            <p className="text-muted" style={{ fontSize: '1.2rem', margin: '0 auto', maxWidth: '600px' }}>
              et où l'on reste pour le plaisir des rencontres.
            </p>
          </div>

          <div className="grid-2 gap-60 mt-40" style={{ alignItems: 'center' }}>
            <div className="features-list-modern">
              <div className="feature-item-modern" style={{ display: 'flex', gap: '24px', marginBottom: '35px', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'rgba(164, 87, 41, 0.1)', color: 'var(--terracotta)', padding: '14px', borderRadius: '12px', flexShrink: 0 }}>
                  <LayoutGrid size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="serif" style={{ fontSize: '1.25rem', fontWeight: '500', marginBottom: '8px', color: 'var(--dark-green)' }}>4 courts panoramiques</h4>
                  <p className="text-muted" style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>Terrains indoor avec 9 m de hauteur.</p>
                </div>
              </div>
              
              <div className="feature-item-modern" style={{ display: 'flex', gap: '24px', marginBottom: '35px', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'rgba(164, 87, 41, 0.1)', color: 'var(--terracotta)', padding: '14px', borderRadius: '12px', flexShrink: 0 }}>
                  <Video size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="serif" style={{ fontSize: '1.25rem', fontWeight: '500', marginBottom: '8px', color: 'var(--dark-green)' }}>Vidéo replay et compteur</h4>
                  <p className="text-muted" style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>Deux courts équipés de la vidéo. Le score s'affiche à l'écran et vos plus beaux points sont rejouables.</p>
                </div>
              </div>

              <div className="feature-item-modern" style={{ display: 'flex', gap: '24px', marginBottom: '35px', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'rgba(164, 87, 41, 0.1)', color: 'var(--terracotta)', padding: '14px', borderRadius: '12px', flexShrink: 0 }}>
                  <Box size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="serif" style={{ fontSize: '1.25rem', fontWeight: '500', marginBottom: '8px', color: 'var(--dark-green)' }}>Vestiaires équipés</h4>
                  <p className="text-muted" style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>Casiers, douches et tout le confort avant et après le jeu.</p>
                </div>
              </div>

              <div className="feature-item-modern" style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'rgba(164, 87, 41, 0.1)', color: 'var(--terracotta)', padding: '14px', borderRadius: '12px', flexShrink: 0 }}>
                  <QrCode size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="serif" style={{ fontSize: '1.25rem', fontWeight: '500', marginBottom: '8px', color: 'var(--dark-green)' }}>Accès autonome</h4>
                  <p className="text-muted" style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>Le club reste ouvert 24h/24. En dehors des horaires du clubhouse, l'entrée se fait par QR code.</p>
                </div>
              </div>
            </div>

            <div className="image-carousel-container" style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', minHeight: '400px' }}>
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentSlide}
                  src={slides[currentSlide].src} 
                  alt={slides[currentSlide].title} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} 
                />
              </AnimatePresence>
              <div className="carousel-overlay" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px', background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', zIndex: 2, gap: '20px' }}>
                <div style={{ maxWidth: '75%' }}>
                  <h3 className="serif mb-5" style={{ color: 'white', fontSize: '2rem' }}>{slides[currentSlide].title}</h3>
                  <p className="m-0" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>{slides[currentSlide].subtitle}</p>
                </div>
                <div className="carousel-controls" style={{ display: 'flex', gap: '15px' }}>
                  <button onClick={prevSlide} style={{ background: 'white', border: '2px solid var(--terracotta)', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                    <ChevronLeft size={24} color="var(--terracotta)" />
                  </button>
                  <button onClick={nextSlide} style={{ background: 'white', border: '2px solid var(--terracotta)', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                    <ChevronRight size={24} color="var(--terracotta)" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContentBlock
          eyebrow="Après le match"
          title="Le clubhouse, <span style='color: var(--terracotta); font-style: italic;'>le coeur du club</span>"
          quote="À l'étage, un espace qui surplombe les quatre terrains."
          list={[
            [<Eye size={22} />, "Vue sur les courts", "Suivez les matchs depuis le clubhouse en hauteur."],
            [<UtensilsCrossed size={22} />, "Boire et se restaurer", "Le moment où l'équipe se retrouve, avant comme après le match."],
            [<Tv2 size={22} />, "Esprit sport", "Les grands événements diffusés en direct."]
          ]}
          img="/salle-de-pause.avif"
          toggleHover={toggleHover}
        />

        <ContentBlock
          eyebrow="Espace privé"
          title="Une salle pour vos réunions et <span style='color: var(--terracotta); font-style: italic;'>vos événements</span>"
          lead="Une salle privatisable avec vue sur les courts. Réunions, séminaires, événements d'équipe, on s'adapte à vos besoins."
          cta="Découvrir nos offres entreprises"
          ctaGhost={false}
          ctaLink="/entreprises"
          img="/salle-de-seminaire.jpeg"
          reverse={true}
          toggleHover={toggleHover}
        />

        <ContentBlock
          eyebrow="Notre communauté"
          title="Rejoignez la communauté."
          lead="Ici, on se retrouve, on rejoue le match, on partage un verre. C'est aussi ça le padel."
          cta="Nous rejoindre"
          ctaLink="/comment-reserver"
          img="/image-en-plus.avif"
          toggleHover={toggleHover}
        />
      {/* Club FAQ */}
      <section className="faq-section section-padding">
        <div className="container">
          <div className="text-center mb-60">
            <span className="badge-terracotta">Héritage</span>
            <h2 className="serif xl-title">En Savoir Plus <br /><span className="italic">Sur le Club</span></h2>
          </div>
          <div className="faq-container-narrow">
            <FAQItem
              question={<>D'où provient le nom '<span className="font-signature">Signature</span>' ?</>}
              answer={<><span className="font-signature">Signature</span> représente notre engagement sur la qualité. Chaque membre du club est unique, et nous souhaitons que chaque session de jeu soit gravée comme une expérience d'exception.</>}
            />
            <FAQItem
              question="Est-il possible de prendre des cours avec Clément ou Hugo ?"
              answer="Le club dispose d'entraîneurs diplômés partenaires. Clément et Hugo, bien que fondateurs, sont souvent présents sur les courts pour conseiller les joueurs et partager leur passion."
            />
            <FAQItem
              question="Quels types de terrains utilisez-vous ?"
              answer="Nous avons sélectionné des pistes panoramiques sans montants d'angles pour une visibilité totale, avec une moquette WPT de dernière génération pour limiter les traumatismes articulaires."
            />
            <FAQItem
              question="Le club organise-t-il des tournois ?"
              answer="Absolument. Des tournois homologués (P100, P250) ainsi que des tournois loisirs et des montées-descentes sont organisés mensuellement."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Club;
