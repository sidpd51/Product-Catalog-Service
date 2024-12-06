import { inject, injectable } from "inversify";
import Category, { ICategoryModel } from "../../model/catagoryModel";
import ICategoryRepository from "../interfaces/ICategoryRepository";
import GenericRepository from "./GenericRepository";
import TYPES from "../../TYPES";
import { Model } from "mongoose";

@injectable()
export default class CategoryRepository extends GenericRepository<ICategoryModel> implements ICategoryRepository {
    constructor(@inject(TYPES.ICategoryModel) model: Model<ICategoryModel>) {
        super(model)
    }
}
