const User = require("../models/User");
const jwtService = require("../services/jwtService");
const AppError = require("../utils/AppError");

const authMiddleware = async (req, res, next) => {
    try {
        const authorizationHeader = req.headers['authorization'];

        if (!authorizationHeader || !authorizationHeader.startsWith('Bearer')) {
            return next(new AppError("Unauthorized / No token provided", 401))
        }
        const token = authorizationHeader.split(' ')[2]
        const _id = await jwtService.verifyToken(token)
        const user = await User.findOne({ _id })
        
        if (!user) {
            return next(new AppError("Invalid token", 401))
        }
        next()
    }
    catch (e) {
        return next(new AppError("Invalid token", 401))
    }

}

module.exports = authMiddleware