const express = require('express')
const {PORT} = require('./config/serverConfig.js')

const setupAndstartServer = ()=>{
    const app = express()

    app.use(express.json())
    app.use(express.urlencoded({extended:true}))

    app.listen(()=>{
        console.log(`Server is running on port no: ${PORT}`)
    })
}

setupAndstartServer()

