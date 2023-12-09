
const findBlogById = async (id, Blog) => {
    try {
        const blog = await Blog.findById({ _id: id })
        if (!blog) {
            throw new Error("No blog found")
        }

        return blog
    }
    catch (e) {
        throw new Error(e.message)
    }
}

const removeCommentsOfBlog = async (model, blog_id) => {
    try {
        const blog = await model.findById({ _id: blog_id })
        if (!blog) {
            throw new Error('blog not found');
        }

        await model.deleteMany({ blog: blog_id })
    }
    catch (e) {
        throw new Error(e.message)
    }
}

module.exports = {
    findBlogById,
    removeCommentsOfBlog
}