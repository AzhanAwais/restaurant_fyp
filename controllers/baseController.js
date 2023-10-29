const AppError = require("../utils/AppError");

exports.getAll = Model => {
    return (async (req, res, next) => {
        try {
            let data = []
            let pagination = null

            const query = req.query
            const sortOrder = query.sort == 'asc' ? 1 : -1
            const sort = sortOrder || 1
            const sortBy = query.sortBy || "createdAt"

            if (query.paginate) {
                const page = parseInt(query.page) || 1
                const perPage = parseInt(query.perPage) || 10
                const skip = (page - 1) * perPage

                data = await Model.find().skip(skip).limit(perPage).sort({ [sortBy]: sort })
                const totalRecords = await Model.countDocuments()
                const totalPages = Math.ceil(totalRecords / perPage)
                pagination = { page, perPage, totalRecords, totalPages }
            }
            else {
                data = await Model.find().sort({ [sortBy]: sort })
            }

            res.status(200).json({
                message: "Records fetched successfully",
                success: true,
                data: data,
                ...(pagination && { pagination })
            })
        }
        catch (e) {
            return next(new AppError(e.message, 400))
        }
    })
}

exports.getOne = Model => {
    return (async (req, res, next) => {
        try {
            const { id } = req.params
            const data = await Model.findById(id)
            res.status(200).json({
                message: "Record fetched successfully",
                success: true,
                data
            })
        }
        catch (e) {
            return next(new AppError(e.message, 400))
        }
    })
}

exports.createOne = Model => {
    return (async (req, res, next) => {
        try {
            const data = await Model.create(req.body)
            res.status(200).json({
                message: "Record added successfully",
                success: true,
                data
            })
        }
        catch (e) {
            return next(new AppError(e.message, 400))
        }
    })
}

exports.updateOne = Model => {
    return (async (req, res, next) => {
        try {
            const { id } = req.params
            const data = await Model.findByIdAndUpdate(id, req.body)
            res.status(200).json({
                message: "Record updated successfully",
                success: true,
                data
            })
        }
        catch (e) {
            return next(new AppError(e.message, 400))
        }
    })
}

exports.deleteOne = Model => {
    return (async (req, res, next) => {
        try {
            const { id } = req.params
            const data = await Model.findOneAndDelete({ _id: id })
            res.status(200).json({
                message: "Record deleted successfully",
                success: true,
                data
            })
        }
        catch (e) {
            return next(new AppError(e.message, 400))
        }
    })
}