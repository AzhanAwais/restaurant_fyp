const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        requried: [true, "Title is required"],
    },
    description: {
        type: String,
        requried: [true, "Title is required"],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    dislikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, { timestamps: true })

const Blog = mongoose.model("Blog", blogSchema)

module.exports = Blog