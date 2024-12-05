import { IProductFilter } from "../../dtos/filterProduct";
import { IProductModel } from "../../model/productModel";
import ProductRepository from "../../repository/implementations/ProductRepository";
import GenericService from "./GenericService"

export default class ProductService extends GenericService<IProductModel> {
    private _productRepository: ProductRepository;
    constructor() {
        const productRepository = new ProductRepository;
        super(productRepository);
        this._productRepository = productRepository;
    }

    async getAll(filter?: IProductFilter): Promise<IProductModel[]> {
        try {
            return await this._productRepository.getAll(filter);
        } catch (error) {
            console.error("Error in ProductService getAll operation:", error);
            throw new Error("Service error while fetching products with filters");
        }
    }

}