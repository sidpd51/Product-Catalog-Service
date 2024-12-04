import { injectable } from "inversify";
import Review, { IReview } from "../../model/reviewModel";
import IReviewRepository from "../interfaces/IReviewRepository";
import GenericRepository from "./GenericRepository";

@injectable()
export default class ReviewRepository extends GenericRepository<IReview> implements IReviewRepository {
    constructor() {
        super(Review)
    }
}