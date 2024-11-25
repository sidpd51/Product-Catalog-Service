import { IReview } from "../model/reviewModel";
import ReviewRepository from "../repository/reviewRepository";
import GenericService from "./genericService";

export default class ReviewService extends GenericService<IReview> {
    constructor() {
        super(new ReviewRepository())
    }
}