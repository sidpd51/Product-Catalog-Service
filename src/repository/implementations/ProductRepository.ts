import { inject, injectable } from "inversify";
import { IProductFilter, IProductQuery, } from "../../dtos/filterProduct";
import Product, { IProductModel } from "../../model/productModel";
import IProductRepository from "../interfaces/IProductRepository";
import GenericRepository from "./GenericRepository";
import TYPES from "../../TYPES";
import { Model } from "mongoose";


@injectable()
export default class ProductRepository extends GenericRepository<IProductModel> implements IProductRepository {
    constructor(@inject(TYPES.IProductModel) model: Model<IProductModel>) {
        super(model)
    }

    async getAll(filter?: IProductFilter): Promise<IProductModel[]> {
        try {

            const query: Partial<IProductQuery> = {};

            if (filter) {
                if (filter.name) {
                    query.name = { $regex: `^${filter.name}|.*${filter.name}.*`, $options: "i" };
                }
                if (filter.minPrice !== undefined) {
                    query.price = { ...query.price, $gte: filter.minPrice };
                }
                if (filter.maxPrice !== undefined) {
                    query.price = { ...query.price, $lte: filter.maxPrice };
                }

                if (filter.categoryID !== undefined) {
                    query.categoryID = filter.categoryID
                }
            }

            return await Product.find(query);
        } catch (error) {
            console.error("Error in getAll operation with filter:", error);
            return [];
        }
    }
}