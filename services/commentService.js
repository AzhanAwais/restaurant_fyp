const Comment = require('../models/Comment')
const Blog = require('../models/Blog')
const { findBlogById } = require("./blogService")

const findCommentById = async (id) => {
    try {
        const comment = await Comment.findById(id)
        if (!comment) {
            throw new Error("No comment found")
        }

        return comment
    }
    catch (e) {
        throw new Error(e.message)
    }
}

const addCommentInBlog = async (blog_id, comment_id) => {
    try {
        const blog = await findBlogById(blog_id, Blog)
        blog.comments.push(comment_id)
        await blog.save()
    }
    catch (e) {
        throw new Error(e.message)
    }
}

const removeCommentFromBlog = async (model, comment_id) => {
    try {
        const comment = await model.findById({ _id: comment_id })
        if (!comment) {
            throw new Error('Comment not found');
        }
        const blog_id = comment.blog
        const blog = await findBlogById(blog_id , Blog)

        blog.comments.pull(comment_id)
        await blog.save()
    }
    catch (e) {
        throw new Error(e.message)
    }
}


module.exports = {
    findCommentById,
    addCommentInBlog,
    removeCommentFromBlog
}