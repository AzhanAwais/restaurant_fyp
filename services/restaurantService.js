const Restaurant = require("../models/Restaurant")

const findRestaurantById = async (id) => {
    try {
        const restaurant = await Restaurant.findById({ _id: id })
        if (!restaurant) {
            throw new Error("No restaurant found")
        }

        return restaurant
    }
    catch (e) {
        throw new Error(e.message)
    }
}

const addReviewInRestaurant = async (restaurant_id, review_id) => {
    try {
        const restaurant = await findRestaurantById(restaurant_id)
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
        const restaurant = await findRestaurantById(restaurant_id)

        restaurant.reviews.pull(review_id)
        await restaurant.save()
    }
    catch (e) {
        throw new Error(e.message)
    }
}


module.exports = {
    findRestaurantById,
    addReviewInRestaurant,
    removeReviewFromRestaurant
}