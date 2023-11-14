const express = require("express")
const router = new express.Router()
const reviewController = require("../controllers/reviewController")
const authMiddleware = require("../middlewares/authMiddleware")

router.get('/review', reviewController.getAll)
router.get('/review/:id', reviewController.getOne)
router.post('/review', reviewController.createOne)
router.put('/review/:id', reviewController.updateOne)
router.delete('/review/:id', reviewController.deleteOne)

module.exports = router 
