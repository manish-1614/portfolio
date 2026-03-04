import { defineConfig } from "drizzle-kit";

const dbUrl = process.env.POSTGRES_URL || process.env.DATABASE_URL;

if (!dbUrl) {
    throw new Error("Missing database URL: set POSTGRES_URL or DATABASE_URL");
}

export default defineConfig({
    schema: "./src/lib/db/schema.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: dbUrl,
    },
    verbose: true,
    strict: true,
});
