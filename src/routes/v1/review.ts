import express from 'express'
import ReviewController from '../../Controller/implementations/ReviewController'
import container from '../../inversify.config'
import IReviewController from '../../Controller/interfaces/IReviewController'
import TYPES from '../../types/TYPES'

const reviewRouter = express.Router()
const review = container.get<IReviewController>(TYPES.IReviewController)

reviewRouter.post('/', review.create)
reviewRouter.get('/:id', review.getById)
reviewRouter.get('/', review.getAll)
reviewRouter.patch('/:id', review.update)
reviewRouter.delete('/:id', review.destroy)

export default reviewRouter;