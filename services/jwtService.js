const jwt = require("jsonwebtoken")
const { JWT_SECRET_KEY } = require("../config/index")

const generateToken = async (user) => {
    const { _id } = user
    const token = jwt.sign(_id, JWT_SECRET_KEY)
    console.log("token", token)
    return token
}

const verifyToken = async (token) => {
    const isVerified = jwt.verify(token, JWT_SECRET_KEY)
    console.log("is token verified", isVerified)
    return isVerified
}

module.exports = {
    generateToken,
}