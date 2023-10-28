const mongoose = require("mongoose")
const User = require("./User");

const reviewSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    review: {
        type: String,
        required: [true, 'comment is required']
    },


}, { timestamp: true })

const Review = mongoose.model("Review", reviewSchema)

module.exports = Review