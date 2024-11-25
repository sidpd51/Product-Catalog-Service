import Product, { IProduct } from "../model/product.model";
import GenericRepository from "./genericRepository";


export default class ProductRepository extends GenericRepository<IProduct> {
    constructor() {
        super(Product)
    }
}