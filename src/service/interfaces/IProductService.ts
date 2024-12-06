import { IProductFilter } from "../../dtos/filterProduct";
import { IProductModel } from "../../model/productModel";
import IGenericService from "./IGenericService";

export default interface IProductService extends IGenericService<IProductModel>{
    getAll(filter?: IProductFilter): Promise<IProductModel[]>;
}