const Media = require("../models/Media")
const baseController = require("./baseController")

const PopulateFields = [
    {
        path: "user"
    },
]


exports.getAll = baseController.getAll(Media, PopulateFields)
exports.getOne = baseController.getOne(Media)
exports.createOne = baseController.createOne(Media)
exports.updateOne = baseController.updateOne(Media)
exports.deleteOne = baseController.deleteOne(Media)