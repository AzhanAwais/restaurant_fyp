const mongoose = require("mongoose")

const restaurantSchema = mongoose.Schema({
    name: {
        type: String,
        requried: [true, "Name is required"],
    },
    location: {
        type: String,
        requried: [true, "Location is required"],
    },
    menu_images: [

    ],
    popular_dishes: {
        type: String,
        required: false
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Restaurant"
        }
    ]


}, { timestamp: true })

const Restaurant = mongoose.model("Restaurant", restaurantSchema)

module.exports = Restaurant