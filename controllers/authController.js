const User = require("../models/User");
const authService = require("../services/authService")
const jwtService = require("../services/jwtService")
const AppError = require("../utils/AppError");
const bcrypt = require('bcryptjs');

const Register = async (req, res, next) => {
    try {
        const user = await authService.createUser(req.body)
        res.status(200).json({
            message: "User register successfully",
            data: user
        })
    }
    catch (e) {
        return next(new AppError(e.message, 400))
    }
}

const Login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await authService.findUserByEmail(email)
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return next(new AppError('Invalid login credentials', 400))
        }

        const token = await jwtService.generateToken(user)
        res.status(200).json({
            data: {
                user, token
            }
        })
    }
    catch (e) {
        return next(new AppError(e.message, 400))
    }
}

const SocialSignIn = async (req, res, next) => {
    try {
        const is_social_login = true
        const { email } = req.body
        const user = await User.findOne({ email })

        if (user) {
            const token = await jwtService.generateToken(user)
            res.status(200).json({
                data: {
                    user, token
                }
            })
        }

        const newUser = await authService.createUser(req.body, is_social_login)
        const token = await jwtService.generateToken(newUser)

        res.status(200).json({
            data: {
                user: newUser,
                token
            }
        })
    }
    catch (e) {
        return next(new AppError(e.message, 400))
    }
}

module.exports = {
    Register,
    Login,
    SocialSignIn
}