import { injectable } from "inversify";
import { ICategory } from "../../model/catagoryModel";
import ICategoryController from "../interfaces/ICategoryController";
import GenericController from "./GenericController";
import { inject } from "inversify";
import TYPES from "../../types/TYPES";
import ICategoryService from "../../service/interfaces/ICategoryService";

@injectable()
export default class CategoryController extends GenericController<ICategory> implements ICategoryController {
    constructor(@inject(TYPES.ICategoryService) service: ICategoryService) {
        super(service)
    }
}