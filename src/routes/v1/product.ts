import express from 'express'
import ProductController from '../../controller/product.controller'

const productRouter = express.Router()
const product = new ProductController()

productRouter.post('/', product.create)
productRouter.get('/:id', product.getById)
productRouter.get('/', product.getAll)
productRouter.patch('/:id', product.update)
productRouter.delete('/:id', product.destroy)

export default productRouter;