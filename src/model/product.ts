export {}
const {mongoose} = require('../config/db')

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique:true }, 
    description: { type: String },
    price: { type: Number, required: true, min: 0 },
    images: { type: [String], default: [] },
    specifications: { type: Map, of: String, default: {} },
    categoryID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    }, // Reference to Category
    reviews: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Review" 
    }], 
    rating: {
        averageRating: { type: Number, default: 0, min: 0, max: 5 }, 
        reviewCount: { type: Number, default: 0, min: 0 }, 
    },
},{timestamp:true});

module.exports = mongoose.model('Product',productSchema)