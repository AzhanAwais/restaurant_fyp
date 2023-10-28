const mongoose = require("mongoose")

const restaurantSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    address: {
        type: String,
        required: [true, "Address is required"],
    },
    latitude: {
        type: String,
        required: [true, "Latitude is required"],
    },
    longitude: {
        type: String,
        required: [true, "Longitude is required"],
    },
    menu_images: [{
        type: String
    }],
    popular_dishes: {
        type: String,
        required: false
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Restaurant"
        }
    ]
}, { timestamp: true })

const Restaurant = mongoose.model("Restaurant", restaurantSchema)

module.exports = Restaurant