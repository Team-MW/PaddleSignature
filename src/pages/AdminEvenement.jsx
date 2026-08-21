import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { Trash2 } from 'lucide-react';

const AdminEvenement = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    image: ''
  });
  const [message, setMessage] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem('admin_auth') === 'true');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    const fetchAdminEvents = async () => {
      try {
        const response = await fetch('/api/events');
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
        } else {
          console.error("Erreur lors de la récupération des événements");
        }
      } catch (e) {
        console.error("Erreur réseau", e);
      }
    };

    fetchAdminEvents();

    const preventDrag = (e) => e.preventDefault();
    const preventDrop = (e) => {
      if (e.target.type !== 'file') {
        e.preventDefault();
      }
    };
    window.addEventListener('dragover', preventDrag);
    window.addEventListener('drop', preventDrop);

    return () => {
      window.removeEventListener('dragover', preventDrag);
      window.removeEventListener('drop', preventDrop);
    };
  }, []);



  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset || cloudName === 'REMPLACE_CECI_PAR_TON_CLOUD_NAME') {
      setMessage("Erreur: Les identifiants Cloudinary ne sont pas correctement configurés dans le fichier .env ou le serveur n'a pas été relancé.");
      return;
    }

    setIsUploading(true);
    setMessage("Upload de l'image en cours...");

    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('upload_preset', uploadPreset);

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: uploadData,
      });
      
      const data = await response.json();
      
      if (data.secure_url) {
        setFormData(prev => ({ ...prev, image: data.secure_url }));
        setMessage("Image uploadée avec succès !");
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage("Erreur lors de l'upload de l'image.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      setMessage("Erreur lors de l'upload de l'image.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleAddEvent = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.text) {
      setMessage("Le titre et le texte sont obligatoires.");
      return;
    }
    
    setIsUploading(true);
    setMessage("Ajout de l'événement en cours...");
    
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        const newEvent = await response.json();
        setEvents([newEvent, ...events]);
        setFormData({ title: '', text: '', image: '' });
        setMessage("Événement ajouté avec succès !");
      } else {
        setMessage("Erreur lors de l'ajout.");
      }
    } catch (e) {
      console.error(e);
      setMessage("Erreur de connexion.");
    } finally {
      setIsUploading(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleDeleteEvent = async (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet événement ?")) {
      try {
        const response = await fetch(`/api/events?id=${id}`, {
          method: 'DELETE'
        });
        
        if (response.ok) {
          setEvents(events.filter(ev => ev.id !== id));
          setMessage("Événement supprimé.");
          setTimeout(() => setMessage(''), 3000);
        } else {
          setMessage("Erreur lors de la suppression.");
        }
      } catch (e) {
        console.error(e);
        setMessage("Erreur de connexion.");
      }
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD || '123456';
    if (passwordInput === correctPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_auth', 'true');
      setLoginError('');
    } else {
      setLoginError('Mot de passe incorrect.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ paddingTop: '120px', paddingBottom: '60px', minHeight: '100vh', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <SEO title="Connexion Admin | Padel Signature" description="Connexion" url="/admin-evenement" />
        <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
          <h2 style={{ color: '#0a2318', marginBottom: '20px' }}>Accès Sécurisé</h2>
          <p style={{ marginBottom: '20px', color: '#666' }}>Veuillez entrer le mot de passe administrateur pour accéder à cette page.</p>
          
          <form onSubmit={handleLogin}>
            <input 
              type="password" 
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Mot de passe à 6 chiffres"
              maxLength={6}
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '15px', textAlign: 'center', letterSpacing: '3px', fontSize: '1.2rem' }}
              required
            />
            {loginError && <p style={{ color: '#dc3545', marginBottom: '15px' }}>{loginError}</p>}
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '12px', border: 'none', cursor: 'pointer' }}>
              <span>Se connecter</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '60px', minHeight: '100vh', background: '#f5f5f5' }}>
      <SEO title="Administration Événement | Padel Signature" description="Gérer la page événement" url="/admin-evenement" />
      
      <div className="container" style={{ maxWidth: '800px', marginTop: '40px' }}>
        
        {message && <div style={{ padding: '15px', background: '#d4edda', color: '#155724', borderRadius: '8px', marginBottom: '20px', fontWeight: 'bold' }}>{message}</div>}

        <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '40px' }}>
          <h1 style={{ marginBottom: '30px', color: '#0a2318' }}>Ajouter un événement</h1>
          
          <form onSubmit={handleAddEvent} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Titre de l'événement</label>
              <input 
                type="text" 
                value={formData.title} 
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '8px', fontFamily: 'inherit' }}
                placeholder="Ex: Tournoi P250"
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Texte de description</label>
              <textarea 
                value={formData.text} 
                onChange={(e) => setFormData({...formData, text: e.target.value})}
                style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '8px', minHeight: '150px', fontFamily: 'inherit' }}
                placeholder="Description de l'événement..."
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Image de l'événement</label>
              <input 
                type="file" 
                accept="image/*"
                onChange={handleImageChange}
                disabled={isUploading}
                style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '8px' }}
              />
              {formData.image && (
                <div style={{ marginTop: '15px' }}>
                  <p style={{ marginBottom: '8px', fontSize: '0.9rem' }}>Aperçu :</p>
                  <img src={formData.image} alt="Aperçu" style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '8px', objectFit: 'cover' }} />
                  <button 
                    type="button" 
                    onClick={() => setFormData(prev => ({...prev, image: ''}))}
                    style={{ display: 'block', marginTop: '10px', color: '#dc3545', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    Supprimer l'image
                  </button>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
              <button type="submit" className="btn btn-primary" disabled={isUploading} style={{ flex: 1, padding: '12px', border: 'none', cursor: isUploading ? 'not-allowed' : 'pointer', textDecoration: 'none', opacity: isUploading ? 0.7 : 1 }}>
                <span>Ajouter cet événement</span>
              </button>
              <button type="button" onClick={() => navigate('/evenement')} style={{ flex: 1, padding: '12px', border: '1px solid #0a2318', background: 'transparent', color: '#0a2318', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                Voir la page
              </button>
            </div>
          </form>
        </div>

        <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ marginBottom: '20px', color: '#0a2318' }}>Événements actuels ({events.length})</h2>
          
          {events.length === 0 ? (
            <p style={{ color: '#666' }}>Aucun événement pour le moment.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {events.map((ev) => (
                <div key={ev.id} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '15px', border: '1px solid #eee', borderRadius: '8px' }}>
                  {ev.image ? (
                    <img src={ev.image} alt={ev.title} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} />
                  ) : (
                    <div style={{ width: '80px', height: '80px', background: '#f5f5f5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: '#999' }}>Sans image</div>
                  )}
                  <div style={{ flex: 1 }}>
                    <h3 style={{ margin: '0 0 5px 0', fontSize: '1.1rem', color: '#0a2318' }}>{ev.title}</h3>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#666', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{ev.text}</p>
                  </div>
                  <button 
                    onClick={() => handleDeleteEvent(ev.id)}
                    style={{ background: '#dc3545', color: 'white', border: 'none', padding: '10px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    title="Supprimer"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminEvenement;
