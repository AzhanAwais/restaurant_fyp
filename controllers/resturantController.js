const Restaurant = require("../models/Restaurant")
const baseController = require("./baseController")

exports.getAll = baseController.getAll(Restaurant)
exports.getOne = baseController.getOne(Restaurant)
exports.createOne = baseController.createOne(Restaurant)
exports.updateOne = baseController.updateOne(Restaurant)
exports.deleteOne = baseController.deleteOne(Restaurant)