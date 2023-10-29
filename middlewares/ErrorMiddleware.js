const ErrorMiddleware = (err, req, res, next) => {
    res.status(err.statusCode).json({
        message: err.message,
        success: false,
        stack: err.stack
    })
}

module.exports = ErrorMiddleware