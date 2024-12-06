import { inject, injectable } from "inversify";
import { ICategoryModel } from "../../model/catagoryModel";
import ICategoryService from "../interfaces/ICategoryService";
import GenericService from "./GenericService"
import TYPES from "../../TYPES";
import ICategoryRepository from "../../repository/interfaces/ICategoryRepository";

@injectable()
export default class CategoryService extends GenericService<ICategoryModel> implements ICategoryService {
    constructor(@inject(TYPES.ICategoryRepository) repository: ICategoryRepository) {
        super(repository)
    }
}