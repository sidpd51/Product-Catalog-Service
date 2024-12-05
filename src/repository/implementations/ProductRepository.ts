import { IProductFilter, IProductQuery, } from "../../dtos/filterProduct";
import Product, { IProductModel } from "../../model/productModel";
import IProductRepository from "../interfaces/IProductRepository";
import GenericRepository from "./GenericRepository";


export default class ProductRepository extends GenericRepository<IProductModel> implements IProductRepository {
    constructor() {
        super(Product)
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