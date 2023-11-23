const nodemailer = require("nodemailer")
const {
    EMAIL_HOST,
    EMAIL_PORT,
    EMAIL_USER,
    EMAIL_PASSWORD,
    EMAIL_FROM,
} = require("../config/index")

const sendEmail = async (to, user, otp) => {
    const transporter = nodemailer.createTransport({
        host: EMAIL_HOST,
        port: EMAIL_PORT,
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASSWORD,
        },
    })

    const email = await transporter.sendMail({
        from: EMAIL_FROM,
        to: to,
        subject: "Password Reset Request",
        html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <h2>Password Reset Request</h2>
                    <p>Dear ${user.name},</p>
                    <p>We received a request to reset the password associated with your account. To proceed with the password reset, please follow the instructions below:</p>
                    <p style="font-weight: bold;">Password Reset Code: ${otp}</p>
                    <p>If you did not initiate this request, you can safely ignore this email. The password reset code will expire after a certain period for security reasons.</p>
                </div>`
    })

    return email
}

module.exports = {
    sendEmail
}