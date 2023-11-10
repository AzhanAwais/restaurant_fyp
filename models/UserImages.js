import mongoose from "mongoose";

const UserImagesSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    cnic: {
        type: String
    },

}, {
    timestamps: true
})

const UserImages = mongoose.model('UserImages', UserImagesSchema)

module.exports = UserImagesSchema;