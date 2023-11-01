const express = require("express")
const router = new express.Router()
const mediaController = require("./../controllers/mediaController")
const authMiddleware = require("../middlewares/authMiddleware")

router.get('/media', mediaController.getAll)
router.get('/media/:id', mediaController.getOne)
router.post('/media', authMiddleware, mediaController.createOne)
router.put('/media/:id', authMiddleware, mediaController.updateOne)
router.delete('/media/:id', authMiddleware, mediaController.deleteOne)

module.exports = router