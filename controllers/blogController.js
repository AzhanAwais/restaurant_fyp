const Blog = require("../models/Blog")
const baseController = require("./baseController")

const PopulateFields = [
    {
        path: "user"
    },
]


exports.getAll = baseController.getAll(Blog, PopulateFields)
exports.getOne = baseController.getOne(Blog)
exports.createOne = baseController.createOne(Blog)
exports.updateOne = baseController.updateOne(Blog)
exports.deleteOne = baseController.deleteOne(Blog)