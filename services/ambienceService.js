const Restaurant = require("../models/Restaurant")

const removeAmbienceFromRestaurants = async (model, ambience_id) => {
    try {
        const ambience = await model.findById({ _id: ambience_id })
        if (!ambience) {
            throw new Error('Ambience not found')
        }

        await Restaurant.updateMany({ ambience_type: ambience_id }, {
            $set: {
                ambience_type: null
            }
        })
    }
    catch (e) {
        throw new Error(e.message)
    }
}


module.exports = {
    removeAmbienceFromRestaurants
}