import { Request, Response } from "express";
import { IProduct } from "../../model/productModel";
import GenericController from "./GenericController";
import { IProductFilter, IProductQuery } from "../../dtos/filterProduct";
import ProductService from "../../service/implementations/ProductService";
import IProductController from "../interfaces/IProductController";
import { inject } from "inversify";
import TYPES from "../../types/TYPES";
import IProductService from "../../service/interfaces/IProductService";
import { injectable } from "inversify";

@injectable()
export default class ProductController extends GenericController<IProduct> implements IProductController {
    private _productService: IProductService;
    constructor(@inject(TYPES.IProductService) service: IProductService) {
        super(service);
        this._productService = service;
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