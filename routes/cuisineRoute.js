const express = require("express")
const router = new express.Router()
const cuisineController = require("../controllers/cuisineController")
const authMiddleware = require("../middlewares/authMiddleware")

router.get('/cuisine', authMiddleware, cuisineController.getAll)
router.get('/cuisine/:id', authMiddleware, cuisineController.getOne)
router.post('/cuisine', authMiddleware, cuisineController.createOne)
router.put('/cuisine/:id', authMiddleware, cuisineController.updateOne)
router.delete('/cuisine/:id', authMiddleware, cuisineController.deleteOne)

module.exports = router 
