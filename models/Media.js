const mongoose = require("mongoose")

const mediaSchema = mongoose.Schema({
    images: [{
        type: String,
        required: [true, "media is required"]
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true })

const Media = mongoose.model("Media", mediaSchema)

module.exports = Media