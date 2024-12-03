import { ICategory } from "../model/catagoryModel";
import CategoryService from "../service/implementations/CategoryService";
import GenericController from "./genericController";

export default class CategoryController extends GenericController<ICategory> {
    constructor() {
        super(new CategoryService())
    }
}