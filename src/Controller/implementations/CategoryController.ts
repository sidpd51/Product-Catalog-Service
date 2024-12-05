import { ICategoryModel } from "../../model/catagoryModel";
import CategoryService from "../../service/implementations/CategoryService";
import GenericController from "./GenericController";

export default class CategoryController extends GenericController<ICategoryModel> {
    constructor() {
        super(new CategoryService())
    }
}