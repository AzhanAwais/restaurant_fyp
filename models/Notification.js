const mongoose = require("mongoose")

const notificationSchema = new mongoose.Schema({
    notification: {
        type: String,
        required: true,
    },
    send_to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Send to is required"]
    },
}, { timestamps: true })


const Notification = mongoose.model("Notification", notificationSchema)

module.exports = Notification