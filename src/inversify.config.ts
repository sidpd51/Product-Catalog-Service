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
import ProductModel, { IProductModel } from "./model/productModel";
import IProductRepository from "./repository/interfaces/IProductRepository";
import ProductRepository from "./repository/implementations/ProductRepository";
import IProductService from "./service/interfaces/IProductService";
import ProductService from "./service/implementations/ProductService";
import IProductController from "./Controller/interfaces/IProductController";
import ProductController from "./Controller/implementations/ProductController";
import ReviewModel, { IReviewModel } from "./model/reviewModel";
import IReviewRepository from "./repository/interfaces/IReviewRepository";
import ReviewRepository from "./repository/implementations/ReviewRepository";
import ReviewService from "./service/implementations/ReviewService";
import IReviewService from "./service/interfaces/IReviewService";
import IReviewController from "./Controller/interfaces/IReviewController";
import ReviewController from "./Controller/implementations/ReviewController";

const container = new Container()

container.bind<Model<ICategoryModel>>(TYPES.ICategoryModel).toConstantValue(CategoryModel)
container.bind<ICategoryRepository>(TYPES.ICategoryRepository).to(CategoryRepository)
container.bind<ICategoryService>(TYPES.ICategoryService).to(CategoryService)
container.bind<ICategoryController>(TYPES.ICategoryController).to(CategoryController)

container.bind<Model<IProductModel>>(TYPES.IProductModel).toConstantValue(ProductModel)
container.bind<IProductRepository>(TYPES.IProductRepository).to(ProductRepository)
container.bind<IProductService>(TYPES.IProductService).to(ProductService)
container.bind<IProductController>(TYPES.IProductController).to(ProductController)

container.bind<Model<IReviewModel>>(TYPES.IReviewModel).toConstantValue(ReviewModel)
container.bind<IReviewRepository>(TYPES.IReviewRepository).to(ReviewRepository)
container.bind<IReviewService>(TYPES.IReviewService).to(ReviewService)
container.bind<IReviewController>(TYPES.IReviewController).to(ReviewController)


export default container;