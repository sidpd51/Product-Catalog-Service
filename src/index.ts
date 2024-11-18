const express = require('express')
const { PORT } = require('./config/serverConfig.ts')

const setupAndStartServer = () => {
    const app = express()

    app.listen(PORT, () => {
        console.log(`Server is running on port no: ${PORT}`)
    })
}

setupAndStartServer()