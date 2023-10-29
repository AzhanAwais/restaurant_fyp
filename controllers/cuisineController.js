const Cuisine = require("../models/Cuisine")
const baseController = require("./baseController")

exports.getAll = baseController.getAll(Cuisine)
exports.getOne = baseController.getOne(Cuisine)
exports.createOne = baseController.createOne(Cuisine)
exports.updateOne = baseController.updateOne(Cuisine)
exports.deleteOne = baseController.deleteOne(Cuisine)