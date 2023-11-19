const express = require("express")
const router = new express.Router()
const dashboardController = require("../controllers/dashboardController")
const authMiddleware = require("../middlewares/authMiddleware")

router.get('/dashboard', dashboardController.getDashboard)

module.exports = router 
