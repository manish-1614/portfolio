import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
    throw new Error('Database URL is not defined in environment variables');
}

const dbUrl = process.env.POSTGRES_URL || process.env.DATABASE_URL!;
const sql = neon(dbUrl);
export const db = drizzle(sql, { schema });
