import { checkSchema } from "express-validator"
import container from "../../inversify.config"
import IProductRepository from "../../repository/interfaces/IProductRepository"
import TYPES from "../../TYPES"

const productRepository = container.get<IProductRepository>(TYPES.IProductRepository)


const reviewSchema = {
    productID: {
        custom: {
            notEmpty: {
                errorMessage: 'Review productId is required.'
            },
            options: async (productId: string) => {
                const product = await productRepository.getById(productId);
                if (!product) {
                    throw new Error("Selected product doesn't exist.")
                }
                return true;
            }
        }
    },
    userID: {
        optional: true
    },
    rating: {
        isInt: {
            options: {
                min: 1,
                max: 5
            },
            errorMessage: 'Review rating is must be between 1 & 5.'
        },
        notEmpty: {
            errorMessage: 'Review rating is required.'
        }
    },
    comment: {
        isString: {
            errorMessage: 'Review comment must be a string.'
        },
        notEmpty: {
            errorMessage: 'Review comment is required.'
        }
    },

}

export const reviewValidator = checkSchema(reviewSchema);