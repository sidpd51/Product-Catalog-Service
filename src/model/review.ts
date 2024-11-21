import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IReview extends Document {
    productID: mongoose.Types.ObjectId;
    userID: mongoose.Types.ObjectId;
    rating: number;
    comment: number;
    createdAt: Date;
    updatedAt: Date;
}

const reviewSchema = new Schema({
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    comment: {
        type: String,
        default: ""
    }
}, { timestamps: true });

const Review: Model<IReview> = mongoose.model<IReview>('Review', reviewSchema);

export default Review;
