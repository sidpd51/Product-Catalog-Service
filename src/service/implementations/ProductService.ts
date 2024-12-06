import { inject, injectable } from "inversify";
import { IProductFilter } from "../../dtos/filterProduct";
import { IProductModel } from "../../model/productModel";
import ProductRepository from "../../repository/implementations/ProductRepository";
import IProductService from "../interfaces/IProductService";
import GenericService from "./GenericService"
import TYPES from "../../TYPES";
import IProductRepository from "../../repository/interfaces/IProductRepository";

@injectable()
export default class ProductService extends GenericService<IProductModel> implements IProductService {
    private _productRepository: IProductRepository;

    constructor(@inject(TYPES.IProductRepository) repository: IProductRepository) {
        super(repository);
        this._productRepository = repository;
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