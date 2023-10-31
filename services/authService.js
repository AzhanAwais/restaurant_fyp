const User = require("../models/User")
const bcrypt = require('bcryptjs');

const createUser = async (user, is_social_login = false) => {
    let { email, password } = user

    try {
        const isUser = await User.findOne({ email })
        if (isUser) {
            throw new Error(`User already exist with the email ${email}`)
        }

        if (!is_social_login) {
            user.password = await bcrypt.hash(password, 10)
        }

        const userDoc = new User(user)
        const newUser = await userDoc.save({ validateBeforeSave: false })
        return newUser
    }
    catch (e) {
        throw new Error(e.message)
    }
}

const findUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email })
        if (!user) {
            throw new Error(`Email does not exist`)
        }
        return user
    }
    catch (e) {
        throw new Error(e.message)
    }

}

module.exports = {
    createUser,
    findUserByEmail
}