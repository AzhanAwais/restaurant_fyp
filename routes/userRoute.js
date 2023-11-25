const express = require("express")
const router = new express.Router()
const userController = require("../controllers/userController")
const authMiddleware = require("../middlewares/authMiddleware")

router.post('/user/follow-user', userController.followUser)
router.post('/user/unfollow-user', userController.unfollowUser)

router.get('/user/followers/:id', userController.userFollowers)
router.get('/user/following/:id', userController.userFollowing)


router.get('/user', userController.getAll)
router.get('/user/:id', userController.getOne)
router.post('/user', userController.createOne)
router.put('/user/:id', userController.updateOne)
router.delete('/user/:id', userController.deleteOne)

module.exports = router 
