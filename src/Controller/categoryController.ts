import { ICategory } from "../model/catagory.model";
import CategoryService from "../service/category.service";
import GenericController from "./genericController";

export default class CategoryController extends GenericController<ICategory> {
    constructor() {
        super(new CategoryService())
    }
}