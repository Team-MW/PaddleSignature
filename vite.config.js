import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Plugin to mock Vercel serverless functions locally
function vercelApiFallback(env) {
  return {
    name: 'vercel-api-fallback',
    configureServer(server) {
      server.middlewares.use('/api/events', async (req, res, next) => {
        try {
          // Pass process.env so it's accessible inside the module
          if (env.DATABASE_URL) {
            process.env.DATABASE_URL = env.DATABASE_URL;
          }
          const { default: handler } = await import('file://' + process.cwd() + '/api/events.js?t=' + Date.now());
          
          // Helper to patch res to support Vercel-like res.status().json()
          res.status = (code) => {
            res.statusCode = code;
            return res;
          };
          res.json = (data) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
          };

          // Parse query params
          const url = new URL(req.url, `http://${req.headers.host}`);
          req.query = Object.fromEntries(url.searchParams);

          // Parse JSON body for POST/PUT/PATCH
          if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', async () => {
              try {
                if (body) req.body = JSON.parse(body);
                await handler(req, res);
              } catch(e) {
                console.error('Error parsing body:', e);
                res.status(500).json({ error: 'Body parse error' });
              }
            });
          } else {
            await handler(req, res);
          }
        } catch(err) {
          next(err);
        }
      });
    }
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), vercelApiFallback(env)],
    server: {
      port: 5174,
      open: true,
      host: true,
      strictPort: false,
    }
  };
});
