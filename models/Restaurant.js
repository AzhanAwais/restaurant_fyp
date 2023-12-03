const mongoose = require("mongoose")
const { removeReviewsOfRestaurant } = require("../services/restaurantService")

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        unique: true,
    },
    address: {
        type: String,
        required: [true, "Address is required"],
    },
    location: {
        type: {
            type: String,
            default: 'Point',
            enum: ['Point']
        },
        coordinates: [Number]
    },
    menu_images: [{
        type: String,
        required: false
    }],
    popular_dishes: {
        type: String,
        required: false
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
    }],
    images: [{
        type: String,
        required: false
    }],
    opening_hours: {
        type: String,
        required: false
    },
    closing_hours: {
        type: String,
        required: false
    },
    cuisine_type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cuisine",
        required: false
    },
    ambience_type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ambience",
        required: false
    },
    meals: [{
        type: String,
        enum: ['breakfast', 'lunch', 'dinner']
    }],
    is_verified: {
        type: Boolean,
        default: false
    },
    manage_access: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false
    },
    social_links: [
        {
            platform: {
                type: String,
                lowercase: true,
            },
            url: {
                type: String,
            }
        }
    ],
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required"]
    },
    rupees: {
        type: Number,
        required: false
    },
    discount: {
        type: Number,
        required: false
    },
    discountOn: []
}, { timestamps: true })

restaurantSchema.index({ location: '2dsphere' })

restaurantSchema.pre('findOneAndDelete', async function (next) {
    const { _id: restaurant_id } = this.getQuery()
    await removeReviewsOfRestaurant(this.model, restaurant_id)
    next()
})

const Restaurant = mongoose.model("Restaurant", restaurantSchema)

module.exports = Restaurant