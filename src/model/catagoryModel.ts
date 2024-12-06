import mongoose, {Schema, Document, Model} from "mongoose"

export interface ICategoryModel extends Document {
    name:string;
    description: string;
    parentCategoryID: mongoose.Types.ObjectId;
    createdAt:Date;
    updatedAt:Date;
}

const catagorySchema:Schema<ICategoryModel> = new Schema({
    name: {
        type:String, 
        required: true,
        unique:true
    },
    description: {
        type:String, 
        default: ""
    },
    parentCategoryID: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'Category',
        default: null
    }
}, { timestamps: true })

const CategoryModel: Model<ICategoryModel> = mongoose.model<ICategoryModel>('Category',catagorySchema)

export default CategoryModel
