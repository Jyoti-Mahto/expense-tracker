import pkg from 'pg'
const { Client } = pkg

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})

async function connectDb() {
  try {   
    await client.connect()
    console.log('Connected to PostgreSQL database');
  } catch (err) {
    console.error('Failed to connect to PostgreSQL database', err);
  }
}
export { client, connectDb }