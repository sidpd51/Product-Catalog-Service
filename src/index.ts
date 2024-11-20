import express from 'express'
import { PORT } from './config/serverConfig';

const setupAndStartServer = ():void =>{
    const app = express()

    app.listen(PORT,()=>{
        console.log(`Server is running on port no: ${PORT}`)
    })
}


setupAndStartServer()