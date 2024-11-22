import { IProduct } from "../model/product.model";
import ProductRepository from "../repository/product.repository";
import GenericService from "./generic.service"

export default class ProductService extends GenericService<IProduct>{
    constructor(){
        super(new ProductRepository())
    }
}