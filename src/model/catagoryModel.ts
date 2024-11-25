import mongoose, {Schema, Document, Model} from "mongoose"

export interface ICategory extends Document {
    name:string;
    description: string;
    parentCategoryID: mongoose.Types.ObjectId;
    createdAt:Date;
    updatedAt:Date;
}

const catagorySchema:Schema<ICategory> = new Schema({
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

const Category: Model<ICategory> = mongoose.model<ICategory>('Category',catagorySchema)

export default Category
