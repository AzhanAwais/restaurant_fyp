const mongoose = require("mongoose")
const { removeCuisineFromRestaurants } = require("../services/cuisineService")

const cuisineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        lowercase: true
    }
}, { timestamps: true })



cuisineSchema.pre('findOneAndDelete', async function (next) {
    const { _id: cuisine_id } = this.getQuery()

    await removeCuisineFromRestaurants(this.model, cuisine_id)
    next()
})

const Cuisine = mongoose.model("Cuisine", cuisineSchema)

module.exports = Cuisine