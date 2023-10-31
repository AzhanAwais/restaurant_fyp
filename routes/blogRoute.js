const express = require("express")
const router = new express.Router()
const blogController = require("./../controllers/blogController")
const authMiddleware = require("../middlewares/authMiddleware")

router.get('/blog', authMiddleware, blogController.getAll)
router.get('/blog/:id', authMiddleware, blogController.getOne)
router.post('/blog', authMiddleware, blogController.createOne)
router.put('/blog/:id', authMiddleware, blogController.updateOne)
router.delete('/blog/:id', authMiddleware, blogController.deleteOne)

module.exports = router