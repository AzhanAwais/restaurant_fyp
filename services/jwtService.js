const jwt = require("jsonwebtoken")
const { JWT_SECRET_KEY } = require("../config/index")

const generateToken = async (user) => {
    const { _id } = user
    const token = jwt.sign({ _id }, JWT_SECRET_KEY)
    return token
}

const verifyToken = async (token) => {
    const { _id } = jwt.verify(token, JWT_SECRET_KEY)
    return _id
}

module.exports = {
    generateToken,
    verifyToken,
}