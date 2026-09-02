import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Minus, Plus, X, CheckCircle2, Handshake, ClipboardList, Moon, Trophy } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';

const EventBuilder = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 9; 

  const [formData, setFormData] = useState({
    format: null,
    participants: 10,
    date: '',
    duree: null,
    restauration: null,
    entreprise: '',
    poste: '',
    nom: '',
    email: '',
    telephone: '',
    details: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const handleNext = async () => {
    if (step === 8) {
      setIsSubmitting(true);
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_B2B_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            company: formData.entreprise || 'Non renseigné',
            name: formData.nom || 'Non renseigné',
            email: formData.email,
            phone: formData.telephone || 'Non renseigné',
            type: formData.format || 'Non renseigné',
            participants: formData.participants ? formData.participants.toString() : 'Non précisé',
            message: `Date souhaitée : ${formData.date || 'Non précisée'}\nDurée : ${formData.duree || 'Non précisée'}\nRestauration : ${formData.restauration || 'Non précisée'}\nPoste de la personne : ${formData.poste || 'Non précisé'}\n\nBesoins spécifiques :\n${formData.details || 'Aucun détail supplémentaire'}`,
            reply_to: formData.email
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        setStep(step + 1);
      } catch (error) {
        console.error("Erreur d'envoi :", error);
        alert("Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer ou nous contacter par téléphone.");
      } finally {
        setIsSubmitting(false);
      }
    } else if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1 && !isSubmitting) setStep(step - 1);
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

      {/* Header */}
      <header className="eb-header">
        <Link to="/" className="eb-logo-link">
           <span className="serif italic eb-logo"><span className="font-padel">Padel</span> <span className="font-signature">Signature</span></span>
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
              <span className="eb-step-label">VOTRE ÉVÉNEMENT</span>
              <h1 className="eb-step-title uppercase">Quel format souhaitez-vous ?</h1>
              
              <div className="eb-options-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '20px', maxWidth: '600px', margin: '0 auto' }}>
                <button 
                  className={`eb-choice-btn ${formData.format === 'TEAM BUILDING' ? 'active' : ''}`}
                  onClick={() => { updateForm('format', 'TEAM BUILDING'); setTimeout(handleNext, 300); }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px 20px', height: 'auto' }}
                >
                  <Handshake size={32} style={{ marginBottom: '15px' }} />
                  <span style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '5px' }}>Team Building</span>
                  <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>½ Journée</span>
                </button>
                <button 
                  className={`eb-choice-btn ${formData.format === 'SÉMINAIRE' ? 'active' : ''}`}
                  onClick={() => { updateForm('format', 'SÉMINAIRE'); setTimeout(handleNext, 300); }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px 20px', height: 'auto' }}
                >
                  <ClipboardList size={32} style={{ marginBottom: '15px' }} />
                  <span style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '5px' }}>Séminaire</span>
                  <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>Journée</span>
                </button>
                <button 
                  className={`eb-choice-btn ${formData.format === 'SOIRÉE ENTREPRISE' ? 'active' : ''}`}
                  onClick={() => { updateForm('format', 'SOIRÉE ENTREPRISE'); setTimeout(handleNext, 300); }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px 20px', height: 'auto' }}
                >
                  <Moon size={32} style={{ marginBottom: '15px' }} />
                  <span style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '5px' }}>Soirée Entreprise</span>
                  <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>Privatisation</span>
                </button>
                <button 
                  className={`eb-choice-btn ${formData.format === 'TOURNOI CORPORATE' ? 'active' : ''}`}
                  onClick={() => { updateForm('format', 'TOURNOI CORPORATE'); setTimeout(handleNext, 300); }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px 20px', height: 'auto' }}
                >
                  <Trophy size={32} style={{ marginBottom: '15px' }} />
                  <span style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '5px' }}>Tournoi Corporate</span>
                  <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>Sur Mesure</span>
                </button>
              </div>
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
              <span className="eb-step-label">VOTRE ÉVÉNEMENT</span>
              <h1 className="eb-step-title uppercase">Nombre de participants</h1>
              
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
              <p className="eb-hint">Utilisez les boutons pour ajuster l'effectif prévu</p>
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
              <span className="eb-step-label">VOTRE ÉVÉNEMENT</span>
              <h1 className="eb-step-title uppercase">Date souhaitée</h1>
              <p className="eb-hint mb-40">À quelle date souhaitez-vous organiser votre événement ?</p>
              
              <div className="eb-input-group" style={{ maxWidth: '400px', margin: '0 auto' }}>
                <input 
                  type="date" 
                  className="eb-text-input" 
                  value={formData.date}
                  onChange={(e) => updateForm('date', e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && formData.date) handleNext(); }}
                  style={{ textAlign: 'center', fontSize: '1.2rem', padding: '20px' }}
                />
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
              <span className="eb-step-label">VOTRE ÉVÉNEMENT</span>
              <h1 className="eb-step-title uppercase">Durée de l'événement</h1>
              <p className="eb-hint mb-40">Combien de temps serez-vous sur place ?</p>
              
              <div className="eb-options-grid" style={{ flexWrap: 'wrap', maxWidth: '700px', margin: '0 auto' }}>
                {['½ JOURNÉE', 'JOURNÉE', 'SOIRÉE', '2 JOURS'].map(duree => (
                  <button 
                    key={duree}
                    className={`eb-choice-btn ${formData.duree === duree ? 'active' : ''}`}
                    onClick={() => { updateForm('duree', duree); setTimeout(handleNext, 300); }}
                  >
                    {duree}
                  </button>
                ))}
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
              <span className="eb-step-label">VOTRE ÉVÉNEMENT</span>
              <h1 className="eb-step-title uppercase">Restauration souhaitée</h1>
              <p className="eb-hint mb-40">Souhaitez-vous inclure un repas ou des boissons ?</p>
              
              <div className="eb-options-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', maxWidth: '800px', margin: '0 auto' }}>
                {['PETIT-DÉJEUNER', 'PAUSE CAFÉ', 'DÉJEUNER', 'COCKTAIL DÎNATOIRE', 'REPAS ASSIS', 'OPEN BAR', 'AUCUNE'].map(resto => (
                  <button 
                    key={resto}
                    className={`eb-choice-btn ${formData.restauration === resto ? 'active' : ''}`}
                    onClick={() => { updateForm('restauration', resto); setTimeout(handleNext, 300); }}
                    style={{ fontSize: '0.9rem', padding: '15px' }}
                  >
                    {resto}
                  </button>
                ))}
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
              <span className="eb-step-label">VOS COORDONNÉES</span>
              <h1 className="eb-step-title uppercase">Votre entreprise</h1>
              
              <div className="eb-input-group mb-20" style={{ maxWidth: '500px', margin: '0 auto 20px' }}>
                <label className="eb-input-label text-left">Nom de l'entreprise *</label>
                <input 
                  type="text" 
                  className="eb-text-input" 
                  placeholder="Ex: Google France" 
                  value={formData.entreprise}
                  onChange={(e) => updateForm('entreprise', e.target.value)}
                  autoFocus
                />
              </div>
              <div className="eb-input-group" style={{ maxWidth: '500px', margin: '0 auto' }}>
                <label className="eb-input-label text-left">Poste / Fonction</label>
                <input 
                  type="text" 
                  className="eb-text-input" 
                  placeholder="Responsable RH, dirigeant..." 
                  value={formData.poste}
                  onChange={(e) => updateForm('poste', e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && formData.entreprise) handleNext(); }}
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
              <span className="eb-step-label">VOS COORDONNÉES</span>
              <h1 className="eb-step-title uppercase">Comment vous contacter ?</h1>
              
              <div className="eb-input-group mb-20" style={{ maxWidth: '500px', margin: '0 auto 20px' }}>
                <label className="eb-input-label text-left">Votre nom complet *</label>
                <input 
                  type="text" 
                  className="eb-text-input" 
                  placeholder="Prénom Nom" 
                  value={formData.nom}
                  onChange={(e) => updateForm('nom', e.target.value)}
                  autoFocus
                />
              </div>
              <div className="eb-input-group mb-20" style={{ maxWidth: '500px', margin: '0 auto 20px' }}>
                <label className="eb-input-label text-left">Email pro *</label>
                <input 
                  type="email" 
                  className="eb-text-input" 
                  placeholder="vous@entreprise.fr" 
                  value={formData.email}
                  onChange={(e) => updateForm('email', e.target.value)}
                />
              </div>
              <div className="eb-input-group" style={{ maxWidth: '500px', margin: '0 auto' }}>
                <label className="eb-input-label text-left">Téléphone *</label>
                <input 
                  type="tel" 
                  className="eb-text-input" 
                  placeholder="06 12 34 56 78" 
                  value={formData.telephone}
                  onChange={(e) => updateForm('telephone', e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && formData.nom && formData.email && formData.telephone) handleNext(); }}
                />
              </div>
            </motion.div>
          )}

          {step === 8 && (
            <motion.div 
              key="step8"
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              className="eb-step-content text-center"
            >
              <span className="eb-step-label">VOS BESOINS SPÉCIFIQUES</span>
              <h1 className="eb-step-title uppercase">Détaillez votre projet (optionnel)</h1>
              
              <div className="eb-input-group" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <textarea 
                  className="eb-text-input" 
                  placeholder="Niveau des participants, attentes particulières, contraintes, accessibilité, animations souhaitées..." 
                  value={formData.details}
                  onChange={(e) => updateForm('details', e.target.value)}
                  style={{ minHeight: '150px', resize: 'vertical', paddingTop: '15px' }}
                />
              </div>
            </motion.div>
          )}

          {step === 9 && (
            <motion.div 
              key="step9"
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
                Merci {formData.nom.split(' ')[0] || 'beaucoup'} ! Notre équipe vous recontactera sous 24h pour finaliser votre devis sur-mesure.
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
              disabled={
                isSubmitting ||
                (step === 1 && !formData.format) || 
                (step === 3 && !formData.date) || 
                (step === 4 && !formData.duree) || 
                (step === 5 && !formData.restauration) || 
                (step === 6 && !formData.entreprise) || 
                (step === 7 && (!formData.nom || !formData.email || !formData.telephone))
              }
            >
              {step === 8 ? (isSubmitting ? 'Envoi...' : 'Envoyer ma demande') : 'Suivant'} 
              {step < 8 && <ChevronRight size={20} />}
            </button>
          </div>
        </footer>
      )}
    </div>
  );
};

export default EventBuilder;
