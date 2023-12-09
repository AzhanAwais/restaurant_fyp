const express = require("express")
const router = new express.Router()
const postGigController = require("./../controllers/postGigController")
const authMiddleware = require("../middlewares/authMiddleware")

router.get('/post-gig', postGigController.getAll)
router.get('/post-gig/:id', postGigController.getOne)
router.post('/post-gig', postGigController.createOne)
router.put('/post-gig/:id', postGigController.updateOne)
router.delete('/post-gig/:id', postGigController.deleteOne)

module.exports = router