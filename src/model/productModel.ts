import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProductModel extends Document {
    name: string;
    description?: string;
    price: number;
    images: string[];
    specifications: Map<string, string>;
    categoryID: mongoose.Types.ObjectId;
    reviews: mongoose.Types.ObjectId[];
    rating: {
        averageRating: number;
        reviewCount: number;
    },
    createdAt: Date;
    updatedAt: Date;
}

const productSchema: Schema<IProductModel> = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        description: { type: String },
        price: {
            type: Number,
            required: true,
            min: 0
        },
        images: {
            type: [String],
            default: []
        },
        specifications: {
            type: Map,
            of: String,
            default: {}
        },
        categoryID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        }, // Reference to Category
        reviews: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Review",
            },
        ],
        rating: {
            averageRating: {
                type: Number,
                default: 0,
                min: 0,
                max: 5
            },
            reviewCount: {
                type: Number,
                default: 0,
                min: 0
            },
        },
    },
    { timestamps: true }
);

const ProductModel: Model<IProductModel> = mongoose.model<IProductModel>("Product", productSchema);
export default ProductModel;
