import mongoose from "mongoose";
import { PASSWORD, USERNAME } from "./serverConfig";

const connect = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.9owv8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/product-catalog-service`)
        // await mongoose.connect('mongodb://localhost/Product_Catalog_Server')

        console.log('db connected successfully!')
    } catch (error) {
        console.log(error)
        console.log("Error connecting database!")
    }
}

export default connect;
