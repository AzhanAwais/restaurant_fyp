const Review = require("../models/Review")
const baseController = require("./baseController")

const PopulateFields = [
    {
        path: "user"
    },
]

exports.getAll = baseController.getAll(Review, PopulateFields)
exports.getOne = baseController.getOne(Review)
exports.createOne = baseController.createOne(Review)
exports.updateOne = baseController.updateOne(Review)
exports.deleteOne = baseController.deleteOne(Review)