const express = require("express")
const router = new express.Router()
const commentController = require("./../controllers/commentController")
const authMiddleware = require("../middlewares/authMiddleware")

router.get('/comment', authMiddleware, commentController.getAll)
router.get('/comment/:id', authMiddleware, commentController.getOne)
router.post('/comment', authMiddleware, commentController.createOne)
router.put('/comment/:id', authMiddleware, commentController.updateOne)
router.delete('/comment/:id', authMiddleware, commentController.deleteOne)

module.exports = router