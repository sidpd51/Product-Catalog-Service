import { inject, injectable } from "inversify";
import { IReview } from "../../model/reviewModel";
import ReviewService from "../../service/implementations/ReviewService";
import IReviewController from "../interfaces/IReviewController";
import GenericController from "./GenericController";
import TYPES from "../../types/TYPES";
import IReviewService from "../../service/interfaces/IReviewService";

@injectable()
export default class ReviewController extends GenericController<IReview> implements IReviewController {
    constructor(@inject(TYPES.IReviewService) service: IReviewService) {
        super(service)
    }
}