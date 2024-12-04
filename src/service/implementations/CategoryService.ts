import { injectable } from "inversify";
import { ICategory } from "../../model/catagoryModel";
import ICategoryService from "../interfaces/ICategoryService";
import GenericService from "./GenericService";
import { inject } from "inversify";
import TYPES from "../../types/TYPES";
import ICategoryRepository from "../../repository/interfaces/ICategoryRepository";
import GenericRepository from "../../repository/implementations/GenericRepository";

@injectable()
export default class CategoryService extends GenericService<ICategory> implements ICategoryService {
    constructor(@inject(TYPES.ICategoryRepository) repository: ICategoryRepository) {
        super(repository)
    }
}