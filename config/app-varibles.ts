//@ts-ignore
import { config } from "./deps.ts";
const env = config({ safe: true, export: true });

//@ts-ignore
console.log(Deno.env.get("EXAMPLE_ENV"));
console.log(env.DOTENV_EXAMPLE);

export const APP_HOST = env.APP_HOST || "127.0.0.1";
export const APP_PORT = env.APP_PORT || 4000;
export const DB_USER = env.DB_USER;
export const DB_PASS = env.DB_PASS;
export const DB_HOST = env.DB_HOST;
export const DB_PORT = env.DB_PORT;
export const DB_NAME = env.DB_NAME;