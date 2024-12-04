import { Container } from "inversify";
import TYPES from "./types/TYPES";
import ICategoryService from "./service/interfaces/ICategoryService";
import IProductService from "./service/interfaces/IProductService";
import IReviewService from "./service/interfaces/IReviewService";
import CategoryService from "./service/implementations/CategoryService";
import ProductService from "./service/implementations/ProductService";
import ReviewService from "./service/implementations/ReviewService";
import ICategoryRepository from "./repository/interfaces/ICategoryRepository";
import IProductRepository from "./repository/interfaces/IProductRepository";
import ProductRepository from "./repository/implementations/ProductRepository";
import IReviewRepository from "./repository/interfaces/IReviewRepository";
import ReviewRepository from "./repository/implementations/ReviewRepository";
import ICategoryController from "./Controller/interfaces/ICategoryController";
import CategoryController from "./Controller/implementations/CategoryController";
import ProductController from "./Controller/implementations/ProductController";
import ReviewController from "./Controller/implementations/ReviewController";
import IProductController from "./Controller/interfaces/IProductController";
import IReviewController from "./Controller/interfaces/IReviewController";

const container = new Container()

container.bind<ICategoryService>(TYPES.ICategoryService).to(CategoryService);
container.bind<IProductService>(TYPES.IProductService).to(ProductService);
container.bind<IReviewService>(TYPES.IReviewService).to(ReviewService);
container.bind<ICategoryRepository>(TYPES.ICategoryRepository).to(CategoryService);
container.bind<IProductRepository>(TYPES.IProductRepository).to(ProductRepository);
container.bind<IReviewRepository>(TYPES.IReviewRepository).to(ReviewRepository);
container.bind<ICategoryController>(TYPES.ICategoryRepository).to(CategoryController);
container.bind<IProductController>(TYPES.IProductRepository).to(ProductController);
container.bind<IReviewController>(TYPES.IReviewRepository).to(ReviewController);

export default container;