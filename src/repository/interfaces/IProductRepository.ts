import { IProduct } from "../../model/productModel";
import IGenericRepository from "./IGenericRepository";

export default interface IProductRepository extends IGenericRepository<IProduct>{
    
}