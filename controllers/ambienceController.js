const Ambience = require("../models/Ambience")
const baseController = require("./baseController")

exports.getAll = baseController.getAll(Ambience)
exports.getOne = baseController.getOne(Ambience)
exports.createOne = baseController.createOne(Ambience)
exports.updateOne = baseController.updateOne(Ambience)
exports.deleteOne = baseController.deleteOne(Ambience)