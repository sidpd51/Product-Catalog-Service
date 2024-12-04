import { injectable } from "inversify";
import { IProductFilter } from "../../dtos/filterProduct";
import { IProduct } from "../../model/productModel";
import IProductService from "../interfaces/IProductService";
import GenericService from "./GenericService"
import { inject } from "inversify";
import TYPES from "../../types/TYPES";
import IProductRepository from "../../repository/interfaces/IProductRepository";

@injectable()
export default class ProductService extends GenericService<IProduct> implements IProductService {
    private _productRepository: IProductRepository;
    constructor(@inject(TYPES.IProductRepository) repository: IProductRepository ) {
        super(repository);
        this._productRepository = repository;
    }

    async getAll(filter?: IProductFilter): Promise<IProduct[]> {
        try {
            return await this._productRepository.getAll(filter);
        } catch (error) {
            console.error("Error in ProductService getAll operation:", error);
            throw new Error("Service error while fetching products with filters");
        }
    }

}