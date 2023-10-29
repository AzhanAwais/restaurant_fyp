const User = require("../models/User")

const createUser = async (user) => {
    const { email } = user

    try {
        const isUser = await User.findOne({ email })
        if (isUser) {
            console.log("=-=-=")
            throw new Error(`User already exist with the ${email}`)
        }
        const userDoc = new User(user)
        const newUser = await userDoc.save()
        return newUser
    }
    catch (e) {
        throw new Error(e.message)
    }
}

module.exports = {
    createUser
}