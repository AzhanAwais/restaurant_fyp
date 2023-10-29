const authService = require("../services/authService")
const AppError = require("../utils/AppError");

const Register = async (req, res, next) => {
    try {
        const user = await authService.createUser(req.body)

        res.status(200).send({
            message: "User register successfully",
            data: user
        })

    } catch (e) {
        return next(new AppError(e.message, 400))
    }
}

module.exports = {
    Register
}