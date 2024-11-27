import { IProductFilter } from "../dtos/filterProduct";
import { IProduct } from "../model/productModel";
import ProductRepository from "../repository/productRepository";
import GenericService from "./genericService"

export default class ProductService extends GenericService<IProduct> {
    private _productRepository: ProductRepository;
    constructor() {
        const productRepository = new ProductRepository;
        super(productRepository);
        this._productRepository = productRepository;
    }

    getAll(filter?: IProductFilter): Promise<IProduct[]> {
        try {

            return this._productRepository.getAll(filter);
        } catch (error) {
            console.error("Error in ProductService getAll operation:", error);
            throw new Error("Service error while fetching products with filters");
        }
    }

}