import { ICategory } from "../model/catagory.model";
import CategoryRepository from "../repository/categoryRepository";
import GenericService from "./genericService"

export default class CategoryService extends GenericService<ICategory> {
    constructor() {
        super(new CategoryRepository())
    }
}