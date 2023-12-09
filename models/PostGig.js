const mongoose = require("mongoose")

const postGigSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    description: {
        type: String,
        required: false,
    },
    images: {
        type: String,
        required: false
    },
    deliverables: {
        type: String,
        required: false,
    },
    duration: {
        type: String,
        required: false,
    },
    promotion_channels: {
        type: String,
        required: false,
    },
    terms_and_conditions: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    additional_benefits: {
        type: String,
        required: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required"]
    },
}, { timestamps: true })


const PostGig = mongoose.model("PostGig", postGigSchema)

module.exports = PostGig