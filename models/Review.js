const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema({

}, { timestamp: true })

const Review = mongoose.model("Review", reviewSchema)

module.exports = Review