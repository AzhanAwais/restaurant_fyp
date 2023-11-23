const express = require("express")
const router = new express.Router()
const authController = require('../controllers/authController');

router.post("/register", authController.Register)
router.post("/login", authController.Login)
router.post("/social-login", authController.SocialSignIn)
router.post("/forgot-password", authController.ForgotPassword)
router.post("/verify-otp", authController.VerifyOtp)
router.post("/reset-password", authController.ResetPassword)


module.exports = router 
