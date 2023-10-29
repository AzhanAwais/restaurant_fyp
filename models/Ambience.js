const mongoose = require("mongoose")

const ambienceSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        unique: true,
        lowercase: true
    }
}, { timestamps: true })

const Ambience = mongoose.model("Ambience", ambienceSchema)

module.exports = Ambience