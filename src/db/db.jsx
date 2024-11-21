import { Pool } from 'pg';

const pool = new Pool({
  user: 'your-username',
  host: 'localhost',
  database: 'mould_db',
  password: 'your-password',
  port: 5432,
});

export default pool;
