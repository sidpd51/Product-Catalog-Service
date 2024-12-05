import Category, { ICategoryModel } from "../../model/catagoryModel";
import ICategoryRepository from "../interfaces/ICategoryRepository";
import GenericRepository from "./GenericRepository";


export default class CategoryRepository extends GenericRepository<ICategoryModel> implements ICategoryRepository {
    constructor() {
        super(Category)
    }
}
