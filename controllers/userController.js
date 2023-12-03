const User = require("../models/User")
const baseController = require("./baseController")

exports.getAll = baseController.getAll(User)
exports.getOne = baseController.getOne(User)
exports.createOne = baseController.createOne(User)
exports.updateOne = baseController.updateOne(User)
exports.deleteOne = baseController.deleteOne(User)

exports.followUser = async (req, res, next) => {
    try {
        let { user_id } = req.body

        let updateUser = await User.findByIdAndUpdate({ _id: req.user?._id }, {
            $push: { following: user_id }
        }, {
            new: true,
        })

        res.status(200).json({
            message: "User followed successfully",
            success: true,
            data: updateUser
        })
    } catch (err) {
        return next(new AppError(e.message, 400))
    }
}

exports.unfollowUser = async (req, res, next) => {
    try {
        let { user_id } = req.body

        let updateUser = await User.findByIdAndUpdate(req.user?._id, {
            $pull: { following: user_id }
        }, {
            new: true,
        })

        res.status(200).json({
            message: "User unfollowed successfully",
            success: true,
            data: updateUser
        })
    } catch (err) {
        return next(new AppError(e.message, 400))
    }
}

exports.userFollowing = async (req, res, next) => {
    try {
        let { id } = req.params
        let users = await User.findOne({ _id: id }).populate('following')

        res.status(200).json({
            message: "Record fetched successfully",
            success: true,
            data: users
        })
    } catch (err) {
        return next(new AppError(e.message, 400))
    }
}

exports.userFollowers = async (req, res, next) => {
    try {
        let { id } = req.params

        let users = await User.find({
            following: { $in: id },
        })

        res.status(200).json({
            message: "Record fetched successfully",
            success: true,
            data: users
        })
    } catch (err) {
        return next(new AppError(e.message, 400))
    }
}
