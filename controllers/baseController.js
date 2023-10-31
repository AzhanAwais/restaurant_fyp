const AppError = require("../utils/AppError");

exports.getAll = (Model, PopulateFields = [],) => {
    return (async (req, res, next) => {
        try {
            const deleteFromQuery = ["paginate", "page", "perPage", "sort", "sortBy"]
            let data = []
            let pagination = null

            const query = req.query
            const findQuery = { ...req.query }

            for (const key in findQuery) {
                if (deleteFromQuery.includes(key)) {
                    delete findQuery[key]
                }
            }

            const sortOrder = query.sort == 'asc' ? 1 : -1
            const sort = sortOrder || 1
            const sortBy = query.sortBy || "createdAt"

            const queryBuilder = Model.find(findQuery).sort({ [sortBy]: sort });

            if (query.paginate) {
                const page = parseInt(query.page) || 1
                const perPage = parseInt(query.perPage) || 10
                const skip = (page - 1) * perPage

                queryBuilder.skip(skip).limit(perPage)

                const totalRecords = await Model.countDocuments()
                const totalPages = Math.ceil(totalRecords / perPage)
                pagination = { page, perPage, totalRecords, totalPages }
            }


            if (PopulateFields.length > 0) {
                queryBuilder.populate(PopulateFields)
            }

            data = await queryBuilder.exec()

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
            res.status(201).json({
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