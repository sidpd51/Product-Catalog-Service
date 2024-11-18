const mongoose = require('mongoose')

const connect = async():Promise<void>=>{
    await mongoose.connect('mongodb://localhost/Product_Catalog_Server')
    console.log('db connected')
}

module.exports = {mongoose,connect};