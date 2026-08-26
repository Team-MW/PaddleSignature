import { connect } from '@planetscale/database';

async function test() {
  try {
    const conn = connect({ url: process.env.DATABASE_URL });
    const results = await conn.execute('SELECT * FROM events');
    console.log("Events from PROD:", results.rows);
  } catch (error) {
    console.error("Test failed:", error);
  }
}

test();
