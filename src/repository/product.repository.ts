import Product, { IProduct } from "../model/product.model";
import GenericRepository from "./generic.repository";

const productRepository = new GenericRepository<IProduct>(Product)

export default productRepository