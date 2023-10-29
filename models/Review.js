const mongoose = require("mongoose")
const User = require("./User");

const reviewSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    restaurant: {
        type: mongoose.Schema.ObjectId,
        ref: "Restaurant"
    },
    review: {
        type: String,
        required: false,
    },
    rating: {
        type: Number,
        required: false,
    },
    extras: {
        experience: {
            type: Number,
            default: 0
        },
        hygiene: {
            type: Number,
            default: 0
        },
        value: {
            type: Number,
            default: 0
        },
        service: {
            type: Number,
            default: 0
        },
    },
    images: [{
        type: String
    }],
    visit_again: {
        type: Boolean,
        default: true
    },
    favourite_dish: {
        type: String,
        required: false,
    },
    is_deleted: {
        type: Boolean,
        default: false
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    dislikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]

}, { timestamps: true })

const Review = mongoose.model("Review", reviewSchema)

module.exports = Review