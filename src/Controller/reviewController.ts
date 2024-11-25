import { IReview } from "../model/review.model";
import ReviewService from "../service/review.service";
import GenericController from "./genericController";

export default class ReviewController extends GenericController<IReview> {
    constructor() {
        super(new ReviewService())
    }
}