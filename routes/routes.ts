//@ts-ignore
import { Router } from "../config/deps.ts"
//@ts-ignore
import {register} from "../controllers/auth-controller.ts"

export const router = new Router()


router.get("/", ({response})=>{
    response.body = "homepage"
}).get("/new", ({response})=>{
    response.body = "newpage"
})

router.post("/api/register", register)




