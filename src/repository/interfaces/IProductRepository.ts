import { IProductFilter } from "../../dtos/filterProduct";
import { IProduct } from "../../model/productModel";
import IGenericRepository from "./IGenericRepository";

export default interface IProductRepository extends IGenericRepository<IProduct> {
    getAll(filter?: IProductFilter): Promise<IProduct[]>
}