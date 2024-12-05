import Category, { ICategory } from "../../model/catagoryModel";
import ICategoryRepository from "../interfaces/ICategoryRepository";
import GenericRepository from "./GenericRepository";


export default class CategoryRepository extends GenericRepository<ICategory> implements ICategoryRepository {
    constructor() {
        super(Category)
    }
}
