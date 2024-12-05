import { ICategoryModel } from "../../model/catagoryModel";
import CategoryService from "../../service/implementations/CategoryService";
import ICategoryController from "../interfaces/ICategoryController";
import GenericController from "./GenericController";

export default class CategoryController extends GenericController<ICategoryModel> implements ICategoryController {
    constructor() {
        super(new CategoryService())
    }
}