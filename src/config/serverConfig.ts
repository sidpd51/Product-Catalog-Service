import dotenv from 'dotenv'

dotenv.config()

export const PORT:string|undefined = process.env.PORT
export const USERNAME:string|undefined = process.env.USERNAME
export const PASSWORD:string|undefined = process.env.PASSWORD