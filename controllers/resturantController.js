const Restaurant = require("../models/Restaurant")
const baseController = require("./baseController")

const PopulateFields = [
    // "reviews",
    "cuisine_type",
    "created_by",
]

exports.getAll = baseController.getAll(Restaurant, PopulateFields)
exports.getOne = baseController.getOne(Restaurant)
exports.createOne = baseController.createOne(Restaurant)
exports.updateOne = baseController.updateOne(Restaurant)
exports.deleteOne = baseController.deleteOne(Restaurant)