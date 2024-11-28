import { Request, Response } from "express";
import { IProduct } from "../model/productModel";
import ProductService from "../service/productService";
import GenericController from "./genericController";
import { IProductFilter, IProductQuery } from "../dtos/filterProduct";

export default class ProductController extends GenericController<IProduct> {
    private _productService: ProductService;
    constructor() {
        const productService = new ProductService();
        super(productService);
        this._productService = productService;
    }

    async getAll(req: Request<{}, {},{}, IProductFilter>, res: Response): Promise<void> {
        try {
            const documents = await this._productService.getAll(req.query);
            res.status(201).json(documents);
        } catch (error) {
            res.status(500).json({ message: "Error fetching documents", error });
        }
    }
}