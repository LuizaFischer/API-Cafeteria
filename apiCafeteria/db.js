import 'dotenv/config';
import postgres from 'postgres';

let { PGHOST, PGDATABASE, PGCAFETERIA, PGPASSWORD } = process.env; 

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGCAFETERIA, 
  password: PGPASSWORD,
  port: 5432,
  ssl: false,
});

export { sql };
