const mongoose = require("mongoose")
const UserImagesSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    cnic: {
        type: String
    },
    nic_front: {
        type: String
    },
    nic_back: {
        type: String
    },
    shop_card: {
        type: String
    },
    shop_bill:{
        type: String
    },
    status:{
        type: String,
        enum: ['pending' , 'approved', 'rejected'],
        default: 'pending'
    }

}, {
    timestamps: true
})

const UserImages = mongoose.model('UserImages', UserImagesSchema)

module.exports = UserImages;