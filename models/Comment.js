const mongoose = require("mongoose")
const { addCommentInBlog, removeCommentFromBlog, sendNotificationOnComment } = require("../services/commentService")

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: [true, "Comment is required"],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required"]
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
        required: [true, "Blog is required"]
    },
}, { timestamps: true })


commentSchema.pre('save', async function (next) {
    const blog_id = this.blog
    const comment_id = this._id
    
    await addCommentInBlog(blog_id, comment_id)
    next()
})

commentSchema.pre('findOneAndDelete', async function (next) {
    const { _id: comment_id } = this.getQuery()

    await removeCommentFromBlog(this.model, comment_id)
    next()
})


commentSchema.post('save', async function (next) {
    const blog_id = this.blog
    const comment_id = this._id
    
    await sendNotificationOnComment(this.constructor, blog_id, comment_id)
    // next()
})


const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment