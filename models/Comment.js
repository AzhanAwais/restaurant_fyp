const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({

    comment: {
        type: String,
        required: false,
    },
    is_deleted: {
        type: Boolean,
        default: false,
    },

}, { timestamp: true })

const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment