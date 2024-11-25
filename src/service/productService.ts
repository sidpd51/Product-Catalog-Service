import { IProduct } from "../model/product.model";
import ProductRepository from "../repository/productRepository";
import GenericService from "./genericService"

export default class ProductService extends GenericService<IProduct> {
    constructor() {
        super(new ProductRepository())
    }
}