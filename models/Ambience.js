const mongoose = require("mongoose")
const { removeAmbienceFromRestaurants } = require("../services/ambienceService")

const ambienceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        unique: true,
        lowercase: true
    }
}, { timestamps: true })


ambienceSchema.pre('findOneAndDelete', async function (next) {
    const { _id: ambience_id } = this.getQuery()

    await removeAmbienceFromRestaurants(this.model, ambience_id)
    next()
})


const Ambience = mongoose.model("Ambience", ambienceSchema)

module.exports = Ambience