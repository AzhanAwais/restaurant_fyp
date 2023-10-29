const User = require("../models/User")
const bcrypt = require('bcryptjs');

const createUser = async (user) => {
    let { name, username, email, password, cnic, phone } = user

    try {
        const isUser = await User.findOne({ email })
        if (isUser) {
            throw new Error(`User already exist with the email ${email}`)
        }
        password = await bcrypt.hash(password, 10)

        const userDoc = new User({
            name, username, email, password, cnic, phone
        })
        const newUser = await userDoc.save()
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