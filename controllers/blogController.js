const Blog = require("../models/Blog")
const User = require('../models/User')
const baseController = require("./baseController")
const AppError = require("../utils/AppError");

const PopulateFields = [
    {
        path: "user"
    },
]


exports.getAll = baseController.getAll(Blog, PopulateFields)
exports.getOne = baseController.getOne(Blog, PopulateFields)
exports.createOne = baseController.createOne(Blog)
exports.updateOne = baseController.updateOne(Blog)
exports.deleteOne = baseController.deleteOne(Blog)

exports.likeBlog = async (req, res, next) => {
    try {
        let {blog_id, user_id} = req.body
        let userFind = await User.findById(user_id).populate(PopulateFields)
        if (!userFind) return next(new AppError("No user found", 404))
        let blog = await Blog.findById(blog_id)
        if (!blog) return next(new AppError("No blog found", 404))
        if(user_id in blog.dislikes) {
            blog.dislikes.splice(blog.dislikes.indexOf(user_id), 1)
        }
        blog.likes.push(user_id)
        await blog.save()
        res.status(200).json({
            message: "User likes the blog",
            success: true,
            data: blog
        })

    } catch (e) {
        return next(new AppError(e.message, 400))
    }
}

exports.dislikeBlog = async (req, res, next) => {
    try {
        let {blog_id, user_id} = req.body
        let userFind = await User.findById(user_id).populate(PopulateFields)
        if (!userFind) return next(new AppError("No user found", 404))
        let blog = await Blog.findById(blog_id)
        if (!blog) return next(new AppError("No blog found", 404))
        if(user_id in blog.dislikes) {
            blog.likes.splice(blog.likes.indexOf(user_id), 1)
        }
        blog.dislikes.push(user_id)
        await blog.save()
        res.status(200).json({
            message: "User dislikes this blog",
            success: true,
            data: blog
        })

    } catch (e) {
        return next(new AppError(e.message, 400))
    }
}