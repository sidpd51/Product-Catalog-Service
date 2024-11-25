import { IProduct } from "../model/productModel";
import ProductService from "../service/productService";
import GenericController from "./genericController";

export default class ProductController extends GenericController<IProduct> {
    constructor() {
        super(new ProductService())
    }
}