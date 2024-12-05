import { Types, UpdateQuery } from "mongoose";
import { IReview } from "../../model/reviewModel";
import ProductRepository from "../../repository/implementations/ProductRepository";
import ReviewRepository from "../../repository/implementations/ReviewRepository";
import GenericService from "./GenericService";
import updateReviewAverageAndCount from "../../utils/updateReviewAverageAndCount";
import { IProduct } from "../../model/productModel";

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
                throw new Error("Service error while creating the review!");
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

    async destroy(id: Types.ObjectId | string): Promise<boolean> {
        try {
            const review = await this._repository.getById(id);
            if (!review || !review.productID) {
                throw new Error("Service error while deleting the review");
            }
            const product = await this._productRepository.getById(review.productID);
            if (!product) {
                throw new Error("Product not found!");
            }
            const [updatedAverageRating, udpatedReviewCount] = updateReviewAverageAndCount(product.rating.averageRating, product.rating.reviewCount, review.rating, false);
            const updatedProduct = await this._productRepository.update(review.productID, {
                $pull: { reviews: review._id },
                $set: {
                    'rating.averageRating': updatedAverageRating,
                    'rating.reviewCount': udpatedReviewCount
                }
            } as UpdateQuery<IProduct>);

            if (!updatedProduct) {
                throw new Error("Failed to update the product")
            }

            return await this._repository.destroy(id);
        } catch (error) {
            console.error("Error in destroy operation:", error);
            throw new Error("Service error while deleting the document");
        }
    }

}