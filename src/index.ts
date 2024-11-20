import express from 'express'
import { PORT } from './config/serverConfig';
import connect from './config/db';

const setupAndStartServer = ():void =>{
    const app = express()

    app.listen(PORT,()=>{
        connect()
        console.log(`Server is running on port no: ${PORT}`)
    })
}


setupAndStartServer()