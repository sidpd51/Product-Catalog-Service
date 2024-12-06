import { IProductFilter } from "../../dtos/filterProduct";
import { IProductModel } from "../../model/productModel";
import IGenericRepository from "./IGenericRepository";

export default interface IProductRepository extends IGenericRepository<IProductModel>{
    getAll(filter?: IProductFilter): Promise<IProductModel[]>
}