import express from 'express'
import { PORT } from './config/serverConfig';
import connect from './config/db';
import v1ApiRoutes from './routes';

const setupAndStartServer = (): void => {
    const app = express()
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use('/api/product-catalog-service/v1/', v1ApiRoutes)

    app.listen(PORT, () => {
        connect()
        console.log(`Server is running on port no: ${PORT}`)
    })
}


setupAndStartServer()