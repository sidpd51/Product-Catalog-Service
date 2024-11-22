import { ICategory } from "../model/catagory.model";
import CategoryRepository from "../repository/category.repository";
import GenericService from "./generic.service"

export default class CategoryService extends GenericService<ICategory>{
    constructor(){
        super(new CategoryRepository())
    }
}