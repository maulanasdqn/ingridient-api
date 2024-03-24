import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import dotenv from "dotenv";

const { Pool } = pg;
dotenv.config();

const dbUrl = process.env.DATABASE_URL!;

const dbQueryClient = new Pool({
  connectionString: dbUrl,
});

export const db = drizzle(dbQueryClient);
