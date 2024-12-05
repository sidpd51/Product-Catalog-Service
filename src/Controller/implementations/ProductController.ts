import { Request, Response } from "express";
import { IProductModel } from "../../model/productModel";
import ProductService from "../../service/implementations/ProductService";
import GenericController from "./GenericController";
import { IProductFilter, IProductQuery } from "../../dtos/filterProduct";
import IProductController from "../interfaces/IProductController";

export default class ProductController extends GenericController<IProductModel> implements IProductController {
    private _productService: ProductService;
    constructor() {
        const productService = new ProductService();
        super(productService);
        this._productService = productService;
    }

    async getAll(req: Request<{}, {}, {}, IProductFilter>, res: Response): Promise<void> {
        try {
            const documents = await this._productService.getAll(req.query);
            res.status(201).json(documents);
        } catch (error) {
            res.status(500).json({ message: "Error fetching documents", error });
        }
    }
}