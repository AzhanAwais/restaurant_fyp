const express = require("express")
const router = new express.Router()
const commentController = require("./../controllers/commentController")
const authMiddleware = require("../middlewares/authMiddleware")

router.get('/comment', commentController.getAll)
router.get('/comment/:id', commentController.getOne)
router.post('/comment', authMiddleware, commentController.createOne)
router.put('/comment/:id', authMiddleware, commentController.updateOne)
router.delete('/comment/:id', authMiddleware, commentController.deleteOne)

module.exports = router