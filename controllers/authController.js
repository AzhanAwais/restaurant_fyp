const User = require("../models/User");
const authService = require("../services/authService");
const emailService = require("../services/emailService");
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
        return next(new AppError(e.message, 500))
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
            message: "User login successfully",
            data: {
                user,
                token
            }
        })
    }
    catch (e) {
        return next(new AppError(e.message, 500))
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
            message: "User login successfully",
            data: {
                user: newUser,
                token
            }
        })
    }
    catch (e) {
        return next(new AppError(e.message, 500))
    }
}

const ForgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body
        const user = await authService.findUserByEmail(email)
        const otp = Math.floor(1000 + Math.random() * 9000).toString()
        const sendedEmail = emailService.sendEmail(email, user, otp)
        user.otp = otp
        await user.save()

        res.status(200).json({
            message: "Otp has been sent to your email",
            data: {
                otp
            }
        })
    }
    catch (e) {
        return next(new AppError(e.message, 500))
    }
}

const VerifyOtp = async (req, res, next) => {
    try {
        const { email, otp } = req.body
        const user = await authService.findUserByEmail(email)
        if (user.otp != otp) {
            return next(new AppError('Invalid otp code', 400))
        }
        user.otp = null
        await user.save()

        res.status(200).json({
            message: "Otp verified successfully",
            data: null
        })
    }
    catch (e) {
        return next(new AppError(e.message, 500))
    }
}

const ResetPassword = async (req, res, next) => {
    try {
        const { email, password, confirmPassword } = req.body

        if (password != confirmPassword) {
            return next(new AppError('Password and confirm password did not match', 400))
        }

        const user = await authService.findUserByEmail(email)
        user.password = await bcrypt.hash(password, 10)
        await user.save()

        res.status(200).json({
            message: "Password reset successfully",
            data: null
        })
    }
    catch (e) {
        return next(new AppError(e.message, 500))
    }
}

module.exports = {
    Register,
    Login,
    SocialSignIn,
    ForgotPassword,
    VerifyOtp,
    ResetPassword
}