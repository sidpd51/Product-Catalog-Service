import express from 'express'
import container from '../../inversify.config'
import IReviewController from '../../Controller/interfaces/IReviewController'
import TYPES from '../../TYPES'
import { reviewValidator } from '../../utils/validationSchemas/reviewSchema'
import handleValidationErrors from '../../utils/validationSchemas/handleValidationErrors'

const reviewRouter = express.Router()
const review = container.get<IReviewController>(TYPES.IReviewController)

reviewRouter.post('/', reviewValidator, handleValidationErrors, review.create)
reviewRouter.get('/:id', review.getById)
reviewRouter.get('/', review.getAll)
reviewRouter.patch('/:id', review.update)
reviewRouter.delete('/:id', review.destroy)

export default reviewRouter;