const Review = require("../models/Review")
const Restaurant = require("../models/Restaurant")

const { findRestaurantById } = require("./restaurantService")

const findReviewById = async (id) => {
    try {
        const review = await Review.findById({ _id: id })
        if (!review) {
            throw new Error("No review found")
        }

        return review
    }
    catch (e) {
        throw new Error(e.message)
    }
}

const addReviewInRestaurant = async (restaurant_id, review_id) => {
    try {
        const restaurant = await findRestaurantById(restaurant_id, Restaurant)
        restaurant.reviews.push(review_id)
        await restaurant.save()
    }
    catch (e) {
        throw new Error(e.message)
    }
}

const removeReviewFromRestaurant = async (model, review_id) => {
    try {
        const review = await model.findById({ _id: review_id })
        if (!review) {
            throw new Error('Review not found');
        }
        const restaurant_id = review.restaurant
        const restaurant = await findRestaurantById(restaurant_id, Restaurant)

        restaurant.reviews.pull(review_id)
        await restaurant.save()
    }
    catch (e) {
        throw new Error(e.message)
    }
}

module.exports = {
    findReviewById,
    addReviewInRestaurant,
    removeReviewFromRestaurant
}