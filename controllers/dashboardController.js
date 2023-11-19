const Blog = require("../models/Blog")
const Restaurant = require("../models/Restaurant")
const Review = require("../models/Review")
const User = require("../models/User")

const getDashboard = async (req, res, next) => {
    try {
        const restaurants = await Restaurant.find().countDocuments()
        const users = await User.find().countDocuments()
        const reviews = await Review.find().countDocuments()
        const verifiedUsers = await Review.find({ is_verified: true }).countDocuments()
        const activeUsers = await User.find({ is_active: true }).countDocuments()
        const disabledeUsers = await User.find({ is_active: false }).countDocuments()
        const pendingUsers = await User.find({ is_verified: false }).countDocuments()
        const verifiedRestaurants = await Restaurant.find({ is_verified: false }).countDocuments()
        const blogs = await Blog.find().countDocuments()

        res.status(200).json({
            data: {
                restaurants,
                users,
                reviews,
                verifiedUsers,
                activeUsers,
                disabledeUsers,
                pendingUsers,
                verifiedRestaurants,
                blogs,
                deletedBlogs: 0
            }
        })
    }
    catch (e) {
        next(e)
    }
}

module.exports = {
    getDashboard
}