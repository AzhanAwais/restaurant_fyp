const express = require("express")
const router = new express.Router()
const ambienceController = require("../controllers/ambienceController")
const authMiddleware = require("../middlewares/authMiddleware")

router.get('/ambience', ambienceController.getAll)
router.get('/ambience/:id', ambienceController.getOne)
router.post('/ambience', authMiddleware, ambienceController.createOne)
router.put('/ambience/:id', authMiddleware, ambienceController.updateOne)
router.delete('/ambience/:id', authMiddleware, ambienceController.deleteOne)

module.exports = router 
