import Category, {ICategory} from "../model/catagory.model";
import GenericRepository from "./generic.repository";

const categoryRepository = new GenericRepository<ICategory>(Category)

export default categoryRepository;