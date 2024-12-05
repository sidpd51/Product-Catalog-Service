import express from 'express'
import ReviewController from '../../Controller/implementations/ReviewController'

const reviewRouter = express.Router()
const review = new ReviewController()

reviewRouter.post('/', review.create)
reviewRouter.get('/:id', review.getById)
reviewRouter.get('/', review.getAll)
reviewRouter.patch('/:id', review.update)
reviewRouter.delete('/:id', review.destroy)

export default reviewRouter;