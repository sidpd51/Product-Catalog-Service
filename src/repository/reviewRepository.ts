import Review, { IReview } from "../model/review.model";
import GenericRepository from "./genericRepository";


export default class ReviewRepository extends GenericRepository<IReview> {
    constructor() {
        super(Review)
    }
}