import { IReview } from "../model/review.model";
import ReviewService from "../service/review.service";
import GenericController from "./generic.controller";

export default class ReviewController extends GenericController<IReview>{
    constructor(){
        super(new ReviewService())
    }
}