import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  // Configurer la connexion à PlanetScale
  let connection;
  try {
    connection = await mysql.createConnection(process.env.DATABASE_URL);
  } catch (error) {
    console.error('Erreur de connexion à la base de données:', error);
    return res.status(500).json({ error: 'Erreur de connexion à la base de données' });
  }

  try {
    // GET : Récupérer tous les événements
    if (req.method === 'GET') {
      const [rows] = await connection.execute('SELECT * FROM events ORDER BY created_at DESC');
      await connection.end();
      return res.status(200).json(rows);
    }

    // POST : Ajouter un nouvel événement
    if (req.method === 'POST') {
      const { title, text, image } = req.body;
      
      if (!title || !text) {
        await connection.end();
        return res.status(400).json({ error: 'Le titre et le texte sont obligatoires' });
      }
      
      const [result] = await connection.execute(
        'INSERT INTO events (title, text, image) VALUES (?, ?, ?)',
        [title, text, image || null]
      );
      
      const [newEvent] = await connection.execute('SELECT * FROM events WHERE id = ?', [result.insertId]);
      await connection.end();
      return res.status(201).json(newEvent[0]);
    }

    // DELETE : Supprimer un événement
    if (req.method === 'DELETE') {
      const { id } = req.query;
      
      if (!id) {
        await connection.end();
        return res.status(400).json({ error: 'L\'ID de l\'événement est obligatoire' });
      }
      
      await connection.execute('DELETE FROM events WHERE id = ?', [id]);
      await connection.end();
      return res.status(200).json({ message: 'Événement supprimé avec succès' });
    }

    await connection.end();
    return res.status(405).json({ error: 'Méthode non autorisée' });
  } catch (error) {
    console.error('Erreur SQL:', error);
    if (connection) await connection.end();
    return res.status(500).json({ error: 'Erreur interne du serveur' });
  }
}
