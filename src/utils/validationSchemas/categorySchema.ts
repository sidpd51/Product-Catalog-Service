import { checkSchema } from "express-validator";
import { Types } from "mongoose";
import container from "../../inversify.config";
import ICategoryRepository from "../../repository/interfaces/ICategoryRepository";
import TYPES from "../../TYPES";
const categoryRepository = container.get<ICategoryRepository>(TYPES.ICategoryRepository)

const categorySchema = {
    name: {
        notEmpty: {
            errorMessage: 'Category name is required.'
        }
    },
    description: {
        optional: true
    },
    parentCategoryID: {
        optional: true,
        custom: {
            options: async ( categoryId: Types.ObjectId | string) => {
                if(!categoryId){
                    return true;
                }
                const category = await categoryRepository.getById(categoryId);
                if (!category) {
                    throw new Error("Selected category doesn't exist.")
                }
                return true;
            }
        }
    }
}

export const categoryValidator = checkSchema(categorySchema)