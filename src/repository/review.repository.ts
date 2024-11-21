import Review, { IReview } from "../model/review.model";
import GenericRepository from "./generic.repository";

const reviewRepository = new GenericRepository<IReview>(Review)

export default reviewRepository;