import Review, { IReview } from "../model/review.model";
import GenericRepository from "./generic.repository";


export default class ReviewRepository extends GenericRepository<IReview>{
    constructor(){
        super(Review)
    }
}