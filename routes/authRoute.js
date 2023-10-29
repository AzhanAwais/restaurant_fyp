const express = require("express")
const router  = new express.Router()
const authController = require('../controllers/authController');

router.get("/register", authController.Register)

module.exports = router 
