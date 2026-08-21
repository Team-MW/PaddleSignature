import mysql from 'mysql2/promise';

async function test() {
  try {
    const connection = await mysql.createConnection(process.env.DATABASE_URL);
    console.log("Connected successfully!");
    const [rows] = await connection.execute('SELECT * FROM events');
    console.log("Events:", rows);
    await connection.end();
  } catch (error) {
    console.error("Connection failed:", error);
  }
}

test();
