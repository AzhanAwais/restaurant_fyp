const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    
}, { timestamp: true })

const User = mongoose.model("User", userSchema)

module.exports = User