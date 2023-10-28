const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    username: {
        type: String,
        required: [true, "username is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
    },
    profile_image: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    phone: {
        type: String,
        required: false,
    },
    cnic: {
        type: String,
        required: false,
    },
    is_verified: {
        type: Boolean,
        default: false,
    },
    bio: {
        type: String,
        required: false,
    },
    social_link: [
        {
            platform: {
                type: String,
            },
            url: {
                type: String,
            }
        }
    ],
    is_deleted: {
        type: Boolean,
        default: false,
    },
    dob: {
        type: Date,
        required: false,
    }
}, { timestamp: true })

const User = mongoose.model("User", userSchema)

module.exports = User