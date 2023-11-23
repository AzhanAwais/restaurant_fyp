const baseController = require("./baseController");
const UserImages = require("../models/UserImages")
const User = require("../models/User")
const AppError = require("../utils/AppError");
const mongoose = require("mongoose");

const PopulateFields = [
    {
        path: "user_id"
    },
]
exports.getAll = baseController.getAll(UserImages, PopulateFields)
exports.getOne = baseController.getOne(UserImages)
exports.createOne = baseController.createOne(UserImages)
exports.updateOne = baseController.updateOne(UserImages)
exports.deleteOne = baseController.deleteOne(UserImages)

exports.verifyUser = async (req, res, next) => {
    try {
        let {id} = req.params
        let {status} = req.body

        let userVerification = await UserImages.findByIdAndUpdate(id, {
            status: status
        }, {new: true})

        let userUpdate = await User.findByIdAndUpdate(userVerification?.user_id, {
            is_verified: status == 'approved' ? true : false
        })

        res.status(200).json({
            message: 'Record updated successfully',
            success: true,
            data: userVerification
        })
    } catch (e) {
        return next(new AppError(e.message, 400))
    }
}

exports.verificationAggregation = async (req, res, next) => {
    try {
        let query = req.query
        let aggregation = []
        if(query.status){
            aggregation.push({$match: {status: query.status}})
        }
        if (query?.id) {
            aggregation.push({$match: {_id: new mongoose.Types.ObjectId(query?.id)}})
        }
        if (query?.user_id) {
            aggregation.push({$match: {user_id: new mongoose.Types.ObjectId(query?.user_id)}})
        }

        aggregation.push({
            $lookup: {
                from: 'users',
                localField: 'user_id',
                foreignField: '_id',
                as: 'user_id'
            }
        })
        aggregation.push({
            $unwind: '$user_id'
        })
        if(query?.name) {
            let name = new RegExp(query?.name, 'i')
            aggregation.push({
                $match: {'user_id.username': name}
            })
        }
        if(query?.nic) {
            aggregation.push({
                $match: {nic: query?.nic}
            })
        }
        let data = await UserImages.aggregate(aggregation)
        res.status(200).json({
            message: 'Record updated successfully',
            success: true,
            data: data
        })
    } catch (e) {
        return next(new AppError(e.message, 400))
    }
}