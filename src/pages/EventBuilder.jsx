import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Minus, Plus, X, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const EventBuilder = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const totalSteps = 7; 

  const [formData, setFormData] = useState({
    participants: 8,
    drinks: null,
    coaching: null,
    private: null,
    name: '',
    email: '',
    phone: ''
  });

  // Pour s'assurer qu'on est en haut de la page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const updateForm = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleParticipantsChange = (delta) => {
    const newTotal = formData.participants + delta;
    if (newTotal > 0) {
      updateForm('participants', newTotal);
    }
  };

  // Variants pour l'animation des étapes
  const pageVariants = {
    initial: { opacity: 0, x: 50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -50 }
  };

  return (
    <div className="event-builder-container">
      <SEO 
        title="Créer votre événement B2B | Padel Signature" 
        description="Configurez votre événement professionnel sur-mesure chez Padel Signature Montauban." 
        url="/creer-evenement" 
      />

      {/* Header (Logo + Quit) */}
      <header className="eb-header">
        <Link to="/" className="eb-logo-link">
           <span className="serif italic eb-logo">Padel Signature</span>
        </Link>
        <div className="eb-progress">
           {step < totalSteps ? `${step} / ${totalSteps - 1}` : 'Terminé'}
        </div>
        <button onClick={() => navigate('/entreprises')} className="eb-close-btn">
          <X size={24} />
        </button>
      </header>

      {/* Main Content */}
      <main className="eb-main">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              className="eb-step-content text-center"
            >
              <span className="eb-step-label">PARTICIPANTS</span>
              <h1 className="eb-step-title uppercase">Combien de personnes ?</h1>
              
              <div className="eb-counter-wrapper">
                <button 
                  className="eb-counter-btn" 
                  onClick={() => handleParticipantsChange(-1)}
                  disabled={formData.participants <= 1}
                >
                  <Minus size={24} />
                </button>
                <div className="eb-counter-value-container">
                  <span className="eb-counter-value">{formData.participants}</span>
                  <span className="eb-counter-unit">personnes</span>
                </div>
                <button 
                  className="eb-counter-btn" 
                  onClick={() => handleParticipantsChange(1)}
                >
                  <Plus size={24} />
                </button>
              </div>
              <p className="eb-hint">Utilisez les boutons pour ajuster le nombre de participants</p>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              className="eb-step-content text-center"
            >
              <span className="eb-step-label">OPTIONS</span>
              <h1 className="eb-step-title uppercase">Souhaitez-vous des consommations boissons ?</h1>
              <p className="eb-hint mb-40">Bar du club house avec cocktails, softs, bières...</p>
              
              <div className="eb-options-grid">
                <button 
                  className={`eb-choice-btn ${formData.drinks === true ? 'active' : ''}`}
                  onClick={() => { updateForm('drinks', true); setTimeout(handleNext, 300); }}
                >
                  Oui
                </button>
                <button 
                  className={`eb-choice-btn ${formData.drinks === false ? 'active' : ''}`}
                  onClick={() => { updateForm('drinks', false); setTimeout(handleNext, 300); }}
                >
                  Non
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              className="eb-step-content text-center"
            >
              <span className="eb-step-label">OPTIONS</span>
              <h1 className="eb-step-title uppercase">Souhaitez-vous un coaching encadré ?</h1>
              <p className="eb-hint mb-40">Un coach dédié pour animer et encadrer les matchs.</p>
              
              <div className="eb-options-grid">
                <button 
                  className={`eb-choice-btn ${formData.coaching === true ? 'active' : ''}`}
                  onClick={() => { updateForm('coaching', true); setTimeout(handleNext, 300); }}
                >
                  Oui
                </button>
                <button 
                  className={`eb-choice-btn ${formData.coaching === false ? 'active' : ''}`}
                  onClick={() => { updateForm('coaching', false); setTimeout(handleNext, 300); }}
                >
                  Non
                </button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div 
              key="step4"
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              className="eb-step-content text-center"
            >
              <span className="eb-step-label">OPTIONS</span>
              <h1 className="eb-step-title uppercase">Souhaitez-vous privatiser le club ?</h1>
              <p className="eb-hint mb-40">Profitez du club en exclusivité pour votre événement.</p>
              
              <div className="eb-options-grid">
                <button 
                  className={`eb-choice-btn ${formData.private === true ? 'active' : ''}`}
                  onClick={() => { updateForm('private', true); setTimeout(handleNext, 300); }}
                >
                  Oui
                </button>
                <button 
                  className={`eb-choice-btn ${formData.private === false ? 'active' : ''}`}
                  onClick={() => { updateForm('private', false); setTimeout(handleNext, 300); }}
                >
                  Non
                </button>
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div 
              key="step5"
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              className="eb-step-content text-center"
            >
              <span className="eb-step-label">VOS COORDONNÉES</span>
              <h1 className="eb-step-title uppercase">Comment vous appelez-vous ?</h1>
              
              <div className="eb-input-group">
                <label className="eb-input-label">Nom complet</label>
                <input 
                  type="text" 
                  className="eb-text-input" 
                  placeholder="Votre nom" 
                  value={formData.name}
                  onChange={(e) => updateForm('name', e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && formData.name) handleNext(); }}
                  autoFocus
                />
              </div>
            </motion.div>
          )}

          {step === 6 && (
            <motion.div 
              key="step6"
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              className="eb-step-content text-center"
            >
              <span className="eb-step-label">DERNIÈRE ÉTAPE</span>
              <h1 className="eb-step-title uppercase">Comment vous contacter ?</h1>
              
              <div className="eb-input-group mb-20">
                <label className="eb-input-label">Email</label>
                <input 
                  type="email" 
                  className="eb-text-input" 
                  placeholder="marie@exemple.com" 
                  value={formData.email}
                  onChange={(e) => updateForm('email', e.target.value)}
                  autoFocus
                />
              </div>
              <div className="eb-input-group">
                <label className="eb-input-label">Téléphone</label>
                <input 
                  type="tel" 
                  className="eb-text-input" 
                  placeholder="06 12 34 56 78" 
                  value={formData.phone}
                  onChange={(e) => updateForm('phone', e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && formData.email && formData.phone) handleNext(); }}
                />
              </div>
            </motion.div>
          )}

          {step === 7 && (
            <motion.div 
              key="step7"
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              className="eb-step-content text-center"
            >
              <div className="eb-success-icon">
                <CheckCircle2 size={48} />
              </div>
              <h1 className="eb-step-title uppercase mb-20">Demande envoyée !</h1>
              <p className="eb-hint mb-40" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
                Merci {formData.name || 'beaucoup'} ! Notre équipe vous recontactera sous 24h pour finaliser votre devis pour votre séminaire.
              </p>
              
              <button 
                className="btn btn-primary eb-home-btn"
                onClick={() => navigate('/')}
              >
                <span>Retour à l'accueil</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Navigation */}
      {step < totalSteps && (
        <footer className="eb-footer">
          <div className="eb-footer-inner">
            <button 
              className={`eb-nav-btn ${step === 1 ? 'hidden' : ''}`} 
              onClick={handlePrev}
            >
              <ChevronLeft size={20} /> Précédent
            </button>
            
            <button 
              className="eb-nav-btn next" 
              onClick={handleNext}
              disabled={(step === 5 && !formData.name) || (step === 6 && (!formData.email || !formData.phone))}
            >
              {step === 6 ? 'Envoyer ma demande' : 'Suivant'} {step < 6 && <ChevronRight size={20} />}
            </button>
          </div>
        </footer>
      )}
    </div>
  );
};

export default EventBuilder;
