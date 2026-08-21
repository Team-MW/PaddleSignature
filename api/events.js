import { connect } from '@planetscale/database';

export default async function handler(req, res) {
  // Configurer la connexion à PlanetScale
  let conn;
  try {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      return res.status(500).json({ error: 'DATABASE_URL is not set' });
    }
    conn = connect({ url: databaseUrl });
  } catch (error) {
    console.error('Erreur de connexion à la base de données:', error);
    return res.status(500).json({ error: 'Erreur de connexion à la base de données' });
  }

  try {
    // GET : Récupérer tous les événements
    if (req.method === 'GET') {
      const results = await conn.execute('SELECT * FROM events ORDER BY created_at DESC');
      return res.status(200).json(results.rows);
    }

    // POST : Ajouter un nouvel événement
    if (req.method === 'POST') {
      const { title, text, image } = req.body;
      
      if (!title || !text) {
        return res.status(400).json({ error: 'Le titre et le texte sont obligatoires' });
      }
      
      const results = await conn.execute(
        'INSERT INTO events (title, text, image) VALUES (?, ?, ?)',
        [title, text, image || null]
      );
      
      const newEvent = await conn.execute('SELECT * FROM events WHERE id = ?', [results.insertId]);
      return res.status(201).json(newEvent.rows[0]);
    }

    // DELETE : Supprimer un événement
    if (req.method === 'DELETE') {
      const { id } = req.query;
      
      if (!id) {
        return res.status(400).json({ error: 'L\'ID de l\'événement est obligatoire' });
      }
      
      await conn.execute('DELETE FROM events WHERE id = ?', [id]);
      return res.status(200).json({ message: 'Événement supprimé avec succès' });
    }

    return res.status(405).json({ error: 'Méthode non autorisée' });
  } catch (error) {
    console.error('Erreur SQL:', error);
    return res.status(500).json({ error: 'Erreur interne du serveur' });
  }
}
