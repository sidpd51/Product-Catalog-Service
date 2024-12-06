import { Container } from "inversify";
import ICategoryController from "./Controller/interfaces/ICategoryController";
import TYPES from "./TYPES";
import CategoryController from "./Controller/implementations/CategoryController";
import ICategoryService from "./service/interfaces/ICategoryService";
import CategoryService from "./service/implementations/CategoryService";

const container = new Container()

export default container;