const mongoose = require("mongoose")
const User = require("./User");
const { findRestaurantById } = require("../services/restaurantService");

const reviewSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
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
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    dislikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]

}, { timestamps: true })

reviewSchema.pre('save', async function (next) {
    const restaurant_id = this.restaurant
    const review_id = this._id

    const restaurant = await findRestaurantById(restaurant_id)
    restaurant.reviews.push(review_id)
    await restaurant.save()
    
    next()
})

const Review = mongoose.model("Review", reviewSchema)



module.exports = Review