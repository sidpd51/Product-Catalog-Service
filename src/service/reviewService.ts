import { Types } from "mongoose";
import { IReview } from "../model/reviewModel";
import ProductRepository from "../repository/productRepository";
import ReviewRepository from "../repository/reviewRepository";
import GenericService from "./genericService";
import updateReviewAverageAndCount from "../utils/updateReviewAverageAndCount";

export default class ReviewService extends GenericService<IReview> {
    private _productRepository: ProductRepository;
    constructor() {
        super(new ReviewRepository())
        this._productRepository = new ProductRepository();
    }

    async create(data: Partial<IReview>): Promise<IReview | null> {
        try {
            const review = await this._repository.create(data);

            if (!review || !review.productID) {
                throw new Error("Service error while creating the document!");
            }

            const product = await this._productRepository.getById(data.productID as string | Types.ObjectId);

            if (!product) {
                throw new Error("Product not found!")
            }
            const [updatedAverageRating, udpatedReviewCount] = updateReviewAverageAndCount(product.rating.averageRating, product.rating.reviewCount, review.rating, true)
            product.reviews.push(review._id as Types.ObjectId);
            product.rating = {
                averageRating: updatedAverageRating,
                reviewCount: udpatedReviewCount
            }

            await product.save();

            return review;
        } catch (error) {
            console.error("Error in create operation:", error);
            throw new Error("Service error while creating the document");
        }
    }

}