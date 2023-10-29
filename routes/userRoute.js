const express = require("express")
const router = new express.Router()
const userController = require("../controllers/userController")
const authMiddleware = require("../middlewares/authMiddleware")

router.get('/user', authMiddleware, userController.getAll)
router.get('/user/:id', authMiddleware, userController.getOne)
router.post('/user', authMiddleware, userController.createOne)
router.put('/user/:id', authMiddleware, userController.updateOne)
router.delete('/user/:id', authMiddleware, userController.deleteOne)

module.exports = router 
