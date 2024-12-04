import express from 'express'
import container from '../../inversify.config'
import ICategoryController from '../../Controller/interfaces/ICategoryController'
import TYPES from '../../types/TYPES'

const categoryRouter = express.Router()
const category = container.get<ICategoryController>(TYPES.ICategoryController)

categoryRouter.post('/', category.create)
categoryRouter.get('/:id', category.getById)
categoryRouter.get('/', category.getAll)
categoryRouter.patch('/:id', category.update)
categoryRouter.delete('/:id', category.destroy)

export default categoryRouter;