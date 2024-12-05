import { IReviewModel } from "../../model/reviewModel";
import ReviewService from "../../service/implementations/ReviewService";
import GenericController from "./GenericController";

export default class ReviewController extends GenericController<IReviewModel> {
    constructor() {
        super(new ReviewService())
    }
}