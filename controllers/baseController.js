const AppError = require("../utils/AppError");

exports.getAll = Model => {
    return (async (req, res, next) => {
        try {
            const data = await Model.find()
            res.status(200).json({
                message: "Records fetched successfully",
                success: true,
                data
            })
        } catch (e) {
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
        } catch (e) {
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
        } catch (e) {
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
        } catch (e) {
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
        } catch (e) {
            return next(new AppError(e.message, 400))
        }
    })
}