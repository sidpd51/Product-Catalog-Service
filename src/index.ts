export { }
const express = require('express')
const { PORT } = require('./config/serverConfig')
const { connect } = require('./config/db')
const product = require('./model/product')
const review = require('./model/review')

const setupAndStartServer = () => {
    const app = express()

    app.listen(PORT, async () => {
        connect()
        // const prod =await product.create(    {
        //     "Name": "Wireless Bluetooth Headphones",
        //     "Description": "High-quality wireless headphones with noise cancellation and long battery life.",
        //     "Price": 129.99,
        //     "Images": [
        //       "https://example.com/images/headphones1.jpg",
        //       "https://example.com/images/headphones2.jpg"
        //     ],
        //     "CategoryID": "673b92591ab744326a8d010d",
        //     "Specifications": {
        //       "Color": "Black",
        //       "Battery Life": "20 hours",
        //       "Connectivity": "Bluetooth 5.0"
        //     },
        //     "Rating": {
        //       "AverageRating": 4.2,
        //       "ReviewCount": 3
        //     }
        //   })
        const review2 = await review.create({
            "productID": "673b9dd8c11b176bf569e36e",
            "userID": "64a7f3e47c41b93e9c8b4579",
            "rating": 4,
            "comment": "Excellent gaming console with a wide range of games. Totally worth it!"
        });
        
        const prod = await product.findOne({ _id: '673b9dd8c11b176bf569e36e' })
        // console.log(prod)
        // prod.Reviews.push(review2)
        // await prod.save()
        // console.log(prod)
        console.log(`Server is running on port no: ${PORT}`)
    })
}

setupAndStartServer()