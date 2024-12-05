import express from 'express'
import CategoryController from '../../Controller/implementations/CategoryController'

const categoryRouter = express.Router()
const category = new CategoryController()

categoryRouter.post('/', category.create)
categoryRouter.get('/:id', category.getById)
categoryRouter.get('/', category.getAll)
categoryRouter.patch('/:id', category.update)
categoryRouter.delete('/:id', category.destroy)

export default categoryRouter;