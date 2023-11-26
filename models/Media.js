const mongoose = require("mongoose")

const mediaSchema = new mongoose.Schema({
    media_type: {
        type: String,
        required: [true, "Media type is required"]
    },
    url: {
        type: String,
        required: [true, "Url is required"]
    },
    title:{
        type: String,
        required: [true, "Title is required"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required"]
    }
}, { timestamps: true })

const Media = mongoose.model("Media", mediaSchema)

module.exports = Media