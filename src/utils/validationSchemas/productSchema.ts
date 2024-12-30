import { checkSchema } from "express-validator";
import container from "../../inversify.config";
import ICategoryRepository from "../../repository/interfaces/ICategoryRepository";
import TYPES from "../../TYPES";

const categoryRepository = container.get<ICategoryRepository>(TYPES.ICategoryRepository)

const createProductSchema = {
    name: {
        notEmpty: {
            errorMessage: 'Product name is required.'
        }
    },
    description: {
        optional: true
    },
    price: {
        isFloat: {
            options: {
                min: 0,
            },
            errorMessage: "Product price must be greater than or equal to 0."
        },
        notEmpty: {
            errorMessage: 'Product price is required.'
        }
    },
    images: {
        isArray: {
            errorMessage: 'Product images must be an array of strings'
        },
        custom: {
            options: (images: any[]) => {
                if (!images.every((image: string) => typeof image === "string")) {
                    throw new Error("All image must be strings");
                }
                return true;
            }
        },
        optional: true
    },
    specifications: {
        optional: true
    },
    categoryID: {
        isString: {
            errorMessage: 'Product categoryId must be a string.'
        },
        notEmpty: {
            errorMessage: 'Product categoryId is required.'
        },
        custom: {
            options: async (value: string) => {
                const category = await categoryRepository.getById(value);
                if (!category) {
                    throw new Error("Selected category doesn't exist.")
                }
                return true;
            }
        },
    }
}

export const productValidator = checkSchema(createProductSchema)

