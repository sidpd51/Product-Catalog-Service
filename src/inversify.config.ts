import { Container } from "inversify";
import TYPES from "./TYPES";
import CategoryModel, { ICategoryModel } from "./model/catagoryModel";
import { Model } from "mongoose";
import CategoryRepository from "./repository/implementations/CategoryRepository";
import ICategoryRepository from "./repository/interfaces/ICategoryRepository";
import CategoryService from "./service/implementations/CategoryService";
import CategoryController from "./Controller/implementations/CategoryController";
import ICategoryController from "./Controller/interfaces/ICategoryController";
import ICategoryService from "./service/interfaces/ICategoryService";

const container = new Container()
container.bind<Model<ICategoryModel>>(TYPES.ICategoryModel).toConstantValue(CategoryModel)
container.bind<ICategoryRepository>(TYPES.ICategoryRepository).to(CategoryRepository)
container.bind<ICategoryService>(TYPES.ICategoryService).to(CategoryService)
container.bind<ICategoryController>(TYPES.ICategoryController).to(CategoryController)
export default container;