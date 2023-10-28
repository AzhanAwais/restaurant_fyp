const mongoose = require("mongoose")

const resturantSchema = mongoose.Schema({

}, { timestamp: true })

const Resturant = mongoose.model("Resturant", resturantSchema)

module.exports = Resturant