import { ICategory } from "../../model/catagoryModel";
import CategoryRepository from "../../repository/implementations/CategoryRepository";
import ICategoryService from "../interfaces/ICategoryService";
import GenericService from "./GenericService";

export default class CategoryService extends GenericService<ICategory> implements ICategoryService {
    constructor() {
        super(new CategoryRepository())
    }
}