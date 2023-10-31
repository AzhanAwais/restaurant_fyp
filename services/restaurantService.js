
const findRestaurantById = async (id, Restaurant) => {    
    try {
        const restaurant = await Restaurant.findById(id)
        if (!restaurant) {
            throw new Error("No restaurant found")
        }

        return restaurant
    }
    catch (e) {
        throw new Error(e.message)
    }
}

const removeReviewsOfRestaurant = async (model, restaurant_id) => {
    try {
        const restaurant = await model.findById({ _id: restaurant_id })
        if (!restaurant) {
            throw new Error('Review not found');
        }

        await model.updateMany({ restaurant: restaurant_id }, {
            $set: {
                restaurant: null
            }
        })
    }
    catch (e) {
        throw new Error(e.message)
    }
}

module.exports = {
    findRestaurantById,
    removeReviewsOfRestaurant
}
