import { inject, injectable } from "inversify";
import { ICategoryModel } from "../../model/catagoryModel";
import ICategoryController from "../interfaces/ICategoryController";
import GenericController from "./GenericController";
import TYPES from "../../TYPES";
import ICategoryService from "../../service/interfaces/ICategoryService";

@injectable()
export default class CategoryController extends GenericController<ICategoryModel> implements ICategoryController {
    constructor(@inject(TYPES.ICategoryService) service: ICategoryService) {
        super(service)
    }
}