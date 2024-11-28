import { IReview } from "../model/reviewModel";
import ReviewService from "../service/reviewService";
import GenericController from "./genericController";

export default class ReviewController extends GenericController<IReview> {
    constructor() {
        super(new ReviewService())
    }
}