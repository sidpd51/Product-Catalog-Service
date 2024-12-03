import { IProductFilter } from "../../dtos/filterProduct";
import { IProduct } from "../../model/productModel";
import IGenericService from "./IGenericService";

export default interface IProductService extends IGenericService<IProduct>{
    getAll(filter?: IProductFilter): Promise<IProduct[]>;
}