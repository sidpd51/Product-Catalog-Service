const express = require('express')
const {PORT} = require('./config/serverConfig')


const setupAndExecuteServer = () =>{
    const app = express()

    app.listen(PORT,()=>{
        console.log(`Server is running on port no: ${PORT}`)
    })
}

setupAndExecuteServer()