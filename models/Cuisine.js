const mongoose = require("mongoose")

const cuisineSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    }
}, { timestamps: true })

const Cuisine = mongoose.model("Cuisine", cuisineSchema)

module.exports = Cuisine