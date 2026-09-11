import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const dbUrl = process.env.POSTGRES_URL || process.env.DATABASE_URL;
export const isDbConfigured = Boolean(dbUrl && !dbUrl.includes('placeholder'));

// Only instantiate Neon connection when a valid URL is provided
export const db = isDbConfigured ? drizzle(neon(dbUrl!), { schema }) : null;
