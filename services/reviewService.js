const Review = require("../models/Review")

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

module.exports = {
    findReviewById
}