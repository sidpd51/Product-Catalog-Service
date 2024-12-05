import { ICategory } from "../../model/catagoryModel";
import CategoryService from "../../service/implementations/CategoryService";
import GenericController from "./GenericController";

export default class CategoryController extends GenericController<ICategory> {
    constructor() {
        super(new CategoryService())
    }
}