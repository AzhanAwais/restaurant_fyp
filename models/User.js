const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true
    },
    profile_image: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: [true, "Password is required"],
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
                lowercase: true
            },
            url: {
                type: String,
            }
        }
    ],
    dob: {
        type: Date,
        required: false,
    },
    client_token: {
        type: String,
        required: false
    },
    is_social_login: {
        type: Boolean,
        default: false,
    },
    platform_type: {
        type: String,
        required: false,
    }

}, { timestamps: true })

const User = mongoose.model("User", userSchema)

module.exports = User