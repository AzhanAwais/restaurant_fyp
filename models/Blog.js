const mongoose = require("mongoose")
const { removeCommentsOfBlog } = require("../services/blogService")

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    images: [{
        type: String,
        required: false
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required"]
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        required: [true, "Comment is required"]
    }],
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "User is required"]
    }],
    dislikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "User is required"]
    }]
}, { timestamps: true })



blogSchema.pre('findOneAndDelete', async function (next) {
    const { _id: blog_id } = this.getQuery()

    await removeCommentsOfBlog(this.model, blog_id)
    next()
})

const Blog = mongoose.model("Blog", blogSchema)

module.exports = Blog