import { inject, injectable } from "inversify";
import { ICategoryModel } from "../../model/catagoryModel";
import CategoryService from "../../service/implementations/CategoryService";
import ICategoryController from "../interfaces/ICategoryController";
import GenericController from "./GenericController";
import TYPES from "../../TYPES";

@injectable()
export default class CategoryController extends GenericController<ICategoryModel> implements ICategoryController {
    constructor(@inject(TYPES.ICategoryService) service: CategoryService) {
        super(service)
    }
}