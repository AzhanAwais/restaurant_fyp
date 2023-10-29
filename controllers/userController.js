const User = require("../models/User")
const baseController = require("./baseController")

exports.getAll = baseController.getAll(User)
exports.getOne = baseController.getOne(User)
exports.createOne = baseController.createOne(User)
exports.updateOne = baseController.updateOne(User)
exports.deleteOne = baseController.deleteOne(User)