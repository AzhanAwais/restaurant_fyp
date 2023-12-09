const PostGig = require("../models/PostGig")
const baseController = require("./baseController")

const PopulateFields = [
    {
        path: "user"
    },
]


exports.getAll = baseController.getAll(PostGig, PopulateFields)
exports.getOne = baseController.getOne(PostGig)
exports.createOne = baseController.createOne(PostGig)
exports.updateOne = baseController.updateOne(PostGig)
exports.deleteOne = baseController.deleteOne(PostGig)