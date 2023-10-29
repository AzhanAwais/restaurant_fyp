const express = require("express")
const router  = new express.Router()
const cuisineController = require("../controllers/cuisineController")
const authMiddleware = require("../middlewares/authMiddleware")

router.get('/cuisine', authMiddleware, cuisineController.getAll)
router.get('/cuisine/:id', cuisineController.getOne)
router.post('/cuisine', cuisineController.createOne)
router.put('/cuisine/:id', cuisineController.updateOne)
router.delete('/cuisine/:id', cuisineController.deleteOne)

module.exports = router 
