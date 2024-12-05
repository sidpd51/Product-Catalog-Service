import Review, { IReview } from "../../model/reviewModel";
import GenericRepository from "./GenericRepository";


export default class ReviewRepository extends GenericRepository<IReview> {
    constructor() {
        super(Review)
    }
}