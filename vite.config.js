import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Ouvre le navigateur automatiquement au lancement
    host: true, // Permet d'y accéder depuis un autre appareil sur le même réseau (ex: téléphone)
    strictPort: false, // Si le port par défaut (5173) est pris, il passera au suivant (5174, etc.) sans crasher
  }
})
