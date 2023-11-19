const baseController = require("./baseController");
const UserImages = require("../models/UserImages")

const PopulateFields = [
    {
        path: "user_id"
    },
]
exports.getAll = baseController.getAll(UserImages, PopulateFields)
exports.getOne = baseController.getOne(UserImages)
exports.createOne = baseController.createOne(UserImages)
exports.updateOne = baseController.updateOne(UserImages)
exports.deleteOne = baseController.deleteOne(UserImages)