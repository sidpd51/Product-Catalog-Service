import express from 'express';
import IProductController from '../../Controller/interfaces/IProductController';
import TYPES from '../../TYPES';
import container from '../../inversify.config';
import { productValidator } from '../../utils/validationSchemas/productSchema';
import handleValidationErrors from '../../utils/validationSchemas/handleValidationErrors';

const productRouter = express.Router()
const product = container.get<IProductController>(TYPES.IProductController)

productRouter.post('/', productValidator, handleValidationErrors, product.create)
productRouter.get('/', product.getAll)
productRouter.get('/:id', product.getById)
productRouter.patch('/:id', productValidator, handleValidationErrors, product.update)
productRouter.delete('/:id', product.destroy)

export default productRouter;