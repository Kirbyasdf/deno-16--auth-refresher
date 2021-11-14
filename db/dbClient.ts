//@ts-ignore
import { Client } from "../config/deps.ts";
//@ts-ignore
import { DB_NAME, DB_USER, DB_PORT, DB_HOST } from "../config/app-varibles.ts";





const client = new Client({
  database: DB_NAME,
      user: DB_USER,
      hostname: DB_HOST,
      port: +DB_PORT,
});
//@ts-ignore
await client.connect();


export default client