const express = require("express")
const router  = new express.Router()

const resturantController = require("./../controllers/resturantController")

router.get('/restaurant', resturantController.getAll)
router.get('/restaurant/:id', resturantController.getOne)
router.post('/restaurant', resturantController.createOne)
router.put('/restaurant/:id', resturantController.updateOne)
router.delete('/restaurant/:id', resturantController.deleteOne)

module.exports = router