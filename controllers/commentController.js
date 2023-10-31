const Comment = require("../models/Comment")
const baseController = require("./baseController")

const PopulateFields = [
    {
        path: "user"
    },
]


exports.getAll = baseController.getAll(Comment, PopulateFields)
exports.getOne = baseController.getOne(Comment)
exports.createOne = baseController.createOne(Comment)
exports.updateOne = baseController.updateOne(Comment)
exports.deleteOne = baseController.deleteOne(Comment)