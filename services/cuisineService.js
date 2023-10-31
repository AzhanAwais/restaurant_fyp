const Restaurant = require("../models/Restaurant")

const removeCuisineFromRestaurants = async (model, cuisine_id) => {
    try {
        const cuisine = await model.findById({ _id: cuisine_id })
        if (!cuisine) {
            throw new Error('Cuisine not found')
        }

        await Restaurant.updateMany({ cuisine_type: cuisine_id }, {
            $set: {
                cuisine_type: null
            }
        })
    }
    catch (e) {
        throw new Error(e.message)
    }
}

module.exports = {
    removeCuisineFromRestaurants
}