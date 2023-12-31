const express = require("express")
const router = new express.Router()
const resturantController = require("./../controllers/resturantController")
const authMiddleware = require("../middlewares/authMiddleware")

router.get('/restaurant', resturantController.getAll)
router.get('/restaurant/search', resturantController.searchRestaurants)
router.get('/restaurant/:id', resturantController.getOne)
router.post('/restaurant', resturantController.createRestaurantMiddleware, resturantController.createOne)
router.put('/restaurant/:id', authMiddleware, resturantController.updateOne)
router.delete('/restaurant/:id', authMiddleware, resturantController.deleteOne)

module.exports = router