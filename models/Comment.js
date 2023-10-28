const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({

}, { timestamp: true })

const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment