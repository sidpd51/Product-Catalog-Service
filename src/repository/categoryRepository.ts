import Category, { ICategory } from "../model/catagory.model";
import GenericRepository from "./genericRepository";


export default class CategoryRepository extends GenericRepository<ICategory> {
    constructor() {
        super(Category)
    }
}
