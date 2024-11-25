import Product, { IProduct } from "../model/productModel";
import GenericRepository from "./genericRepository";


export default class ProductRepository extends GenericRepository<IProduct> {
    constructor() {
        super(Product)
    }
}