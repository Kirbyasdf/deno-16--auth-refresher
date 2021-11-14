//@ts-ignore
import { APP_HOST, APP_PORT } from "./config.ts";
//@ts-ignore
import { Application } from "./deps.ts";
//@ts-ignore
import {router} from "./routes/routes.ts"



const app = new Application()


app.use(router.routes())
app.use(router.allowedMethods())

console.log("Server is good 2 @   " + APP_HOST + ":" + APP_PORT);

await app.listen({ port: +APP_PORT });