import express from 'express';
import IProductController from '../../Controller/interfaces/IProductController';
import TYPES from '../../TYPES';
import container from '../../inversify.config';
import { createProductValidator } from '../../utils/validationSchemas/productSchema';
import handleValidationErrors from '../../utils/validationSchemas/handleValidationErrors';

const productRouter = express.Router()
const product = container.get<IProductController>(TYPES.IProductController)

productRouter.post('/', createProductValidator, handleValidationErrors, product.create)
productRouter.get('/:id', product.getById)
productRouter.get('/', product.getAll)
productRouter.patch('/:id', product.update)
productRouter.delete('/:id', product.destroy)

export default productRouter;