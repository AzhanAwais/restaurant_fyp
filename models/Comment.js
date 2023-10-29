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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
        required: true
    },
}, { timestamps: true })

const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment