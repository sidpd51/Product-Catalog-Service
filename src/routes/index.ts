import express from 'express'
import routes from './v1'


const v1ApiRoutes = express.Router()

v1ApiRoutes.use('/categories',routes.categoryRouter)
v1ApiRoutes.use('/products',routes.productRouter)
v1ApiRoutes.use('/reviews',routes.reviewRouter)

export default v1ApiRoutes