import express from 'express'
import container from '../../inversify.config'
import ICategoryController from '../../Controller/interfaces/ICategoryController'
import TYPES from '../../TYPES'
import { categoryValidator } from '../../utils/validationSchemas/categorySchema'
import handleValidationErrors from '../../utils/validationSchemas/handleValidationErrors'

const categoryRouter = express.Router()
const category = container.get<ICategoryController>(TYPES.ICategoryController)

categoryRouter.post('/', categoryValidator, handleValidationErrors, category.create)
categoryRouter.get('/:id', category.getById)
categoryRouter.get('/', category.getAll)
categoryRouter.patch('/:id', categoryValidator, handleValidationErrors, category.update)
categoryRouter.delete('/:id', category.destroy)

export default categoryRouter;