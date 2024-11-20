import mongoose from "mongoose"

const catagorySchema = new mongoose.Schema({
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


module.exports = mongoose.model('Category',catagorySchema)
