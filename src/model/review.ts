export { }

const { mongoose } = require('../config/db')

const reviewSchema = mongoose.Schema({
    productID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required:true},
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    comment: { type: String, default: "" }
}, { timestamps: true })

module.exports = mongoose.model('Review', reviewSchema)