import { Context } from "../config/deps"

export const register = async (ctx: Context) =>{
const req = await ctx.request.body().value
ctx.response.body = req
}   