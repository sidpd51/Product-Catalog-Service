import Category, { ICategory } from "../model/catagoryModel";
import GenericRepository from "./genericRepository";


export default class CategoryRepository extends GenericRepository<ICategory> {
    constructor() {
        super(Category)
    }
}
