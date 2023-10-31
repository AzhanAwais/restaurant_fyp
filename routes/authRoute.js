const express = require("express")
const router  = new express.Router()
const authController = require('../controllers/authController');

router.post("/register", authController.Register)
router.post("/login", authController.Login)
router.post("/social-login", authController.SocialSignIn)


module.exports = router 
