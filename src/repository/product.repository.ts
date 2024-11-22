import Product, { IProduct } from "../model/product.model";
import GenericRepository from "./generic.repository";


export default class ProductRepository extends GenericRepository<IProduct>{
    constructor(){
        super(Product)
    }
}