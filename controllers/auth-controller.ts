//@ts-ignore
import { Context } from "../config/deps.ts"
//@ts-ignore
import  client from "../db/dbClient.ts"

export const register = async (ctx: Context) =>{
    try {
        const req = await ctx.request.body().value
        const {username, password} = req

        const text = "INSERT INTO Users (username, pwhash) VALUES ($1, $2)"
        const values = [
            username, password
        ]
        const res = await client.query({text, args: values})
         console.log(res)

      ctx.response.body = {username, password }
    }catch(e){
        console.error(e)
    }

}   