const Restaurant = require("../models/Restaurant")

const findRestaurantById = async (id) => {
    try {
        const restaurant = await Restaurant.findById({ _id: id })
        if(!restaurant){
            throw new Error("No restaurant found")
        }

        return restaurant
    }
    catch (e) {
        throw new Error(e.message)
    }
}

module.exports = {
    findRestaurantById
}