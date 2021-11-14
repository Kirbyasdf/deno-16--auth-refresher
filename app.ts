//@ts-ignore
import { APP_HOST, APP_PORT } from "./config/app-varibles.ts";
//@ts-ignore
import { Application } from "./config/deps.ts";
//@ts-ignore
import {router} from "./routes/routes.ts"
//@ts-ignore
import dbClient from "./db/dbClient.ts"


const app = new Application()


app.use(router.routes())
app.use(router.allowedMethods())

console.log("Server is good 2 @   " + APP_HOST + ":" + APP_PORT);
//@ts-ignore
await app.listen({ port: +APP_PORT });