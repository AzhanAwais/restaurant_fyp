const Restaurant = require("../models/Restaurant")
const baseController = require("./baseController")
const AppError = require("../utils/AppError");
const mongoose = require("mongoose");

const PopulateFields = [
    {
        path: "cuisine_type"
    },
    {
        path: "created_by",
    },
    {
        path: "reviews",
        populate: {
            path: "user",
            model: "User"
        }
    },
]

exports.createRestaurantMiddleware = (req, res, next) => {
    try {
        let body = {...req.body}
        let location = {
            type: 'Point',
            coordinates: [Number(body?.latitude), Number(body?.longitude)]
        }
        delete body['latitude']
        delete body['longitude']
        Object.assign(body, {location})
        req['body'] = body
        next()
    } catch (e) {
        return next(new AppError(e.message, 400))
    }
}

exports.searchRestaurants = async (req, res, next) => {
    try {
        let aggregationBody = []

        let request = req.query

        if (request?.name) {
            let name = new RegExp(request?.name, 'i')
            aggregationBody.push({$match: {name: name}})
        }

        if(request?.ambience_type) {
            aggregationBody.push({$match: {ambience_type: new mongoose.Types.ObjectId(request?.ambience_type)}})
        }

        if(request?.cuisine_type) {
            aggregationBody.push({$match: {cuisine_type: new mongoose.Types.ObjectId(request?.cuisine_type)}})
        }

        if (request?.id) {
            aggregationBody.push({$match: {_id: new mongoose.Types.ObjectId(request?.id)}})
        }

        if (request?.address) {
            let address = new RegExp(request?.address, 'i')
            aggregationBody.push({$match: {address: address}})
        }

        if (request?.latitude || request?.longitude) {
            aggregationBody.push({
                $geoNear: {
                    near: {type: "Point", coordinates: [Number(request?.latitude), Number(request?.longitude)]},
                    distanceField: "dist.calculated",
                    maxDistance: 2,
                    includeLocs: "dist.location",
                    spherical: true
                }
            })
        }

        aggregationBody.push({
            $lookup: {
                from: 'cuisines',
                localField: 'cuisine_type',
                foreignField: '_id',
                as: 'cuisine_type'
            },
        })
        aggregationBody.push({$unwind: '$cuisine_type'})
        aggregationBody.push({
            $lookup: {
                from: 'ambiences',
                localField: 'ambience_type',
                foreignField: '_id',
                as: 'ambience_type'
            },
        })
        aggregationBody.push({$unwind: '$ambience_type'})
        aggregationBody.push({
            $lookup: {
                from: 'users',
                localField: 'created_by',
                foreignField: '_id',
                as: 'created_by'
            },
        })
        aggregationBody.push({$unwind: '$created_by'})

        let data = await Restaurant.aggregate(aggregationBody)

        res.status(200).json({
            message: "Records fetched successfully",
            success: true,
            data
        })
    } catch (e) {
        return next(new AppError(e.message, 400))
    }
}

exports.getAll = baseController.getAll(Restaurant, PopulateFields)
exports.getOne = baseController.getOne(Restaurant)
exports.createOne = baseController.createOne(Restaurant)
exports.updateOne = baseController.updateOne(Restaurant)
exports.deleteOne = baseController.deleteOne(Restaurant)
