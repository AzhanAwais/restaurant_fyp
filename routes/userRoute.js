const express = require("express")
const router = new express.Router()
const userController = require("../controllers/userController")
const authMiddleware = require("../middlewares/authMiddleware")

router.get('/user', userController.getAll)
router.get('/user/:id', userController.getOne)
router.post('/user', userController.createOne)
router.put('/user/:id', userController.updateOne)
router.delete('/user/:id', userController.deleteOne)

module.exports = router 
