import express from 'express'
import container from '../../inversify.config'
import IProductController from '../../Controller/interfaces/IProductController'
import TYPES from '../../types/TYPES'

const productRouter = express.Router()
const product = container.get<IProductController>(TYPES.IProductController)

productRouter.post('/', product.create)
productRouter.get('/:id', product.getById)
productRouter.get('/', product.getAll)
productRouter.patch('/:id', product.update)
productRouter.delete('/:id', product.destroy)

export default productRouter;