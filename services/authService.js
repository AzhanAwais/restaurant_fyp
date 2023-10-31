const User = require("../models/User")
const bcrypt = require('bcryptjs');

const createUser = async (user, is_social_login = false) => {

    try {
        const isUser = await User.findOne({ email: user.email })
        if (isUser) {
            throw new Error(`User already exist with the email ${user.email}`)
        }


        if (!is_social_login) {
            user.password = await bcrypt.hash(user.password, 10)
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