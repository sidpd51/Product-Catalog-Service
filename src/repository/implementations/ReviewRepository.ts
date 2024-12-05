import Review, { IReviewModel } from "../../model/reviewModel";
import IReviewRepository from "../interfaces/IReviewRepository";
import GenericRepository from "./GenericRepository";


export default class ReviewRepository extends GenericRepository<IReviewModel> implements IReviewRepository {
    constructor() {
        super(Review)
    }
}