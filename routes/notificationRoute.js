const express = require("express")
const router = new express.Router()
const notificationController = require("./../controllers/notificationController")
const authMiddleware = require("../middlewares/authMiddleware")

router.get('/notification', notificationController.getAll)
router.get('/notification/:id', notificationController.getOne)
router.post('/notification', notificationController.createOne)
router.put('/notification/:id', notificationController.updateOne)
router.delete('/notification/:id', notificationController.deleteOne)

module.exports = router