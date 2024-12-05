import { ICategoryModel } from "../../model/catagoryModel";
import CategoryRepository from "../../repository/implementations/CategoryRepository";
import GenericService from "./GenericService"

export default class CategoryService extends GenericService<ICategoryModel> {
    constructor() {
        super(new CategoryRepository())
    }
}