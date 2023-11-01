const express = require("express")
const router = new express.Router()
const reviewController = require("../controllers/reviewController")
const authMiddleware = require("../middlewares/authMiddleware")

router.get('/review', reviewController.getAll)
router.get('/review/:id', reviewController.getOne)
router.post('/review', authMiddleware, reviewController.createOne)
router.put('/review/:id', authMiddleware, reviewController.updateOne)
router.delete('/review/:id', authMiddleware, reviewController.deleteOne)

module.exports = router 
