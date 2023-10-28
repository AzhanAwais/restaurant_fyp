const mongoose = require("mongoose")

const mediaSchema = mongoose.Schema({
    image: [{
        type: String,
        required: [true, "media is required"]
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamp: true })

const Media = mongoose.model("Media", mediaSchema)

module.exports = Media