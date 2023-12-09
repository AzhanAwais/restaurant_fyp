const Notification = require("../models/Notification")
const baseController = require("./baseController")

const PopulateFields = [
    {
        path: "user"
    },
    {
        path: "send_to"
    },
]


exports.getAll = baseController.getAll(Notification, PopulateFields)
exports.getOne = baseController.getOne(Notification)
exports.createOne = baseController.createOne(Notification)
exports.updateOne = baseController.updateOne(Notification)
exports.deleteOne = baseController.deleteOne(Notification)