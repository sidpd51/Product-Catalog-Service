import { IReview } from "../../model/reviewModel";
import ReviewService from "../../service/implementations/ReviewService";
import GenericController from "./GenericController";

export default class ReviewController extends GenericController<IReview> {
    constructor() {
        super(new ReviewService())
    }
}