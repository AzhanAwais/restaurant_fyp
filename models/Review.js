const mongoose = require("mongoose")
const User = require("./User");
const { addReviewInRestaurant, removeReviewFromRestaurant } = require("../services/reviewService");

const reviewSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:[true, "User is required"]
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
        required:[true, "Restaurant is required"]
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
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    dislikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }]

}, { timestamps: true })

reviewSchema.pre('save', async function (next) {
    const restaurant_id = this.restaurant
    const review_id = this._id

    await addReviewInRestaurant(restaurant_id, review_id)
    next()
})

reviewSchema.pre('findOneAndDelete', async function (next) {
    const { _id: review_id } = this.getQuery()

    await removeReviewFromRestaurant(this.model, review_id)
    next()
})


const Review = mongoose.model("Review", reviewSchema)

module.exports = Review