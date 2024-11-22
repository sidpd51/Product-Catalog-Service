import { IProduct } from "../model/product.model";
import ProductService from "../service/product.service";
import GenericController from "./generic.controller";

export default class ProductController extends GenericController<IProduct>{
    constructor(){
        super(new ProductService())
    }
}