import { IReview } from "../model/review.model";
import ReviewRepository from "../repository/review.repository";
import GenericService from "./generic.service";

export default class ReviewService extends GenericService<IReview>{
    constructor(){
        super(new ReviewRepository())
    }
}