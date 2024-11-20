import mongoose from "mongoose";

const connect = async()=>{
    await mongoose.connect('mongodb://localhost/Product_Catalog_Server')
    console.log('db connected!')
}

export default connect;
