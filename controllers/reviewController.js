const Review = require("../models/Review")
const baseController = require("./baseController")

exports.getAll = baseController.getAll(Review)
exports.getOne = baseController.getOne(Review)
exports.createOne = baseController.createOne(Review)
exports.updateOne = baseController.updateOne(Review)
exports.deleteOne = baseController.deleteOne(Review)