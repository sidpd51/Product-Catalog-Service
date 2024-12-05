import { IReviewModel } from "../../model/reviewModel";
import ReviewService from "../../service/implementations/ReviewService";
import IGenericController from "../interfaces/IGenericController";
import GenericController from "./GenericController";

export default class ReviewController extends GenericController<IReviewModel> implements IGenericController {
    constructor() {
        super(new ReviewService())
    }
}