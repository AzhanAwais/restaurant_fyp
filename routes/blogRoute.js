const express = require("express")
const router = new express.Router()
const blogController = require("./../controllers/blogController")
const authMiddleware = require("../middlewares/authMiddleware")

router.get('/blog', blogController.getAll)
router.get('/blog/:id', blogController.getOne)
router.post('/blog', blogController.createOne)
router.put('/blog/:id', blogController.updateOne)
router.delete('/blog/:id', blogController.deleteOne)

module.exports = router