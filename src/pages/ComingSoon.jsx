import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Instagram, Linkedin, ArrowRight, Check, Loader2, User, Phone } from 'lucide-react';
import SEO from '../components/SEO';

// ─── EmailJS Config (depuis variables d'environnement Vite) ───────
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// ─────────────────────────────────────────────────────────────────

const ComingSoon = ({ toggleHover }) => {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, email } = form;

    if (!name.trim() || !email.trim()) {
      setStatus('error');
      setErrorMsg('Veuillez remplir au moins votre nom et votre adresse e-mail.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMsg('Veuillez entrer une adresse e-mail valide.');
      return;
    }

    setStatus('loading');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  name.trim(),
          from_phone: phone.trim() || 'Non renseigné',
          from_email: email.trim(),
          reply_to:   email.trim(),
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', phone: '', email: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setErrorMsg('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <>
      <SEO 
        title="Ouverture Prochaine - Complexe de Padel Indoor Premium" 
        description="Le 1er complexe de padel indoor premium à Montauban. 4 terrains panoramiques, bar lounge et expérience élite. Ouverture très prochaine. Inscrivez-vous pour ne rien manquer." 
        url="/" 
      />

      <div className="coming-soon-wrapper">
        {/* Immersive Ken Burns background effect */}
        <div className="cs-bg-container">
          <motion.img 
            src="/hero-bg.jpg" 
            alt="Padel Signature Montauban" 
            className="cs-bg-image"
            initial={{ scale: 1.1, y: 0 }}
            animate={{ 
              scale: [1.1, 1.18, 1.1],
              y: [0, -15, 0]
            }}
            transition={{ 
              duration: 35, 
              ease: "linear", 
              repeat: Infinity,
              repeatType: "mirror"
            }}
          />
          <div className="cs-bg-overlay"></div>
        </div>

        {/* Ambient floating lights */}
        <div className="ambient-light amber"></div>
        <div className="ambient-light forest"></div>

        {/* Main centered glass card */}
        <main className="cs-main-container">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="cs-glass-card"
          >
            {/* Top Logo - centered */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="cs-logo-container"
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover}
            >
              <img 
                src="/logo.png" 
                alt="Padel Signature Logo" 
                className="cs-logo-img" 
              />
            </motion.div>

            {/* Division Line */}
            <div className="cs-divider"></div>

            {/* Premium Header */}
            <div className="cs-header text-center">
              <span className="cs-subtitle uppercase">Ouverture Prochaine</span>
              <h1 className="cs-title serif">
                Site bientôt <br />
                <span className="italic font-light" style={{ color: 'var(--terracotta)' }}>disponible</span>
              </h1>
              <p className="cs-tagline serif italic text-center">
                Plus qu'un club. Une Signature.
              </p>
              <p className="cs-desc text-center">
                Le premier complexe de padel indoor premium à Montauban. Une expérience unique alliant sport d'excellence et art de vivre est en cours de préparation.
              </p>
            </div>

            {/* Newsletter Sign Up */}
            <div className="cs-newsletter-container">
              <AnimatePresence mode="wait">
                {status !== 'success' ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="cs-form"
                  >
                    <p className="cs-form-label text-center">
                      Soyez les premiers informés du lancement officiel et profitez d'avantages exclusifs :
                    </p>

                    {/* Row 1 : Nom + Téléphone */}
                    <div className="cs-input-row">
                      <div className="cs-input-wrapper">
                        <User size={18} className="cs-mail-icon" />
                        <input
                          type="text"
                          name="name"
                          placeholder="Votre nom"
                          value={form.name}
                          onChange={handleChange}
                          disabled={status === 'loading'}
                          required
                          className="cs-email-input"
                          onMouseEnter={toggleHover}
                          onMouseLeave={toggleHover}
                        />
                      </div>
                      <div className="cs-input-wrapper">
                        <Phone size={18} className="cs-mail-icon" />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Votre téléphone (optionnel)"
                          value={form.phone}
                          onChange={handleChange}
                          disabled={status === 'loading'}
                          className="cs-email-input"
                          onMouseEnter={toggleHover}
                          onMouseLeave={toggleHover}
                        />
                      </div>
                    </div>

                    {/* Row 2 : Email + Bouton */}
                    <div className="cs-input-group">
                      <div className="cs-input-wrapper">
                        <Mail size={18} className="cs-mail-icon" />
                        <input 
                          type="email"
                          name="email"
                          placeholder="Votre adresse e-mail" 
                          value={form.email}
                          onChange={handleChange}
                          disabled={status === 'loading'}
                          required
                          className="cs-email-input"
                          onMouseEnter={toggleHover}
                          onMouseLeave={toggleHover}
                        />
                      </div>
                      <button 
                        type="submit" 
                        disabled={status === 'loading'}
                        className="btn btn-primary cs-submit-btn"
                        onMouseEnter={toggleHover}
                        onMouseLeave={toggleHover}
                      >
                        {status === 'loading' ? (
                          <Loader2 size={18} className="animate-spin" />
                        ) : (
                          <>
                            <span>S'inscrire</span>
                            <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                          </>
                        )}
                      </button>
                    </div>

                    {status === 'error' && (
                      <motion.p 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="cs-error-msg text-center"
                      >
                        {errorMsg}
                      </motion.p>
                    )}
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="cs-success-card text-center"
                  >
                    <div className="cs-success-icon-circle">
                      <Check size={28} className="cs-check-icon" />
                    </div>
                    <h3 className="serif text-white">Merci pour votre inscription !</h3>
                    <p className="cs-success-text">
                      Votre demande a bien été enregistrée. Nous vous contacterons dès le lancement.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact details */}
            <div className="cs-info-grid">
              <div className="cs-info-item">
                <MapPin size={18} style={{ color: 'var(--terracotta)' }} />
                <span>1577 Avenue d'Italie, 82000 Montauban</span>
              </div>
              <div className="cs-info-item">
                <Mail size={18} style={{ color: 'var(--terracotta)' }} />
                <a href="mailto:contact@padelsignature.fr" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                  contact@padelsignature.fr
                </a>
              </div>
            </div>

            {/* Social Medias */}
            <div className="cs-socials-wrapper">
              <span className="cs-socials-title uppercase">Suivez notre aventure</span>
              <div className="cs-socials-icons">

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/padelsignature_/"
                  target="_blank"
                  rel="noreferrer"
                  className="cs-social-icon"
                  aria-label="Instagram Padel Signature"
                  onMouseEnter={toggleHover}
                  onMouseLeave={toggleHover}
                >
                  <Instagram size={20} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/padel-signature/"
                  target="_blank"
                  rel="noreferrer"
                  className="cs-social-icon"
                  aria-label="LinkedIn Padel Signature"
                  onMouseEnter={toggleHover}
                  onMouseLeave={toggleHover}
                >
                  <Linkedin size={20} />
                </a>

                {/* L8nk — logo personnalisé */}
                <a
                  href="https://www.l8nk.com/padelsignature"
                  target="_blank"
                  rel="noreferrer"
                  className="cs-social-icon cs-l8nk-icon"
                  aria-label="L8nk Padel Signature"
                  onMouseEnter={toggleHover}
                  onMouseLeave={toggleHover}
                >
                  <img src="/l8nk-logo.avif" alt="L8nk" className="cs-l8nk-logo" />
                </a>

              </div>
            </div>

            {/* Footer rights */}
            <p className="cs-footer-copyright">
              © 2026 Padel Signature SAS. Tous droits réservés.
            </p>
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default ComingSoon;
