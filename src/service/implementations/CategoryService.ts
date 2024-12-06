import { inject, injectable } from "inversify";
import { ICategoryModel } from "../../model/catagoryModel";
import CategoryRepository from "../../repository/implementations/CategoryRepository";
import ICategoryService from "../interfaces/ICategoryService";
import GenericService from "./GenericService"
import TYPES from "../../TYPES";
import ICategoryRepository from "../../repository/interfaces/ICategoryRepository";
import IGenericRepository from "../../repository/interfaces/IGenericRepository";

@injectable()
export default class CategoryService extends GenericService<ICategoryModel> implements ICategoryService {
    constructor(@inject(TYPES.ICategoryRepository) repository: CategoryRepository) {
        super(repository)
    }
}