const express = require("express")
const router = new express.Router()
const userController = require("../controllers/userController")
const authMiddleware = require("../middlewares/authMiddleware")

router.post('/user/follow-user', authMiddleware, userController.followUser)
router.post('/user/unfollow-user', authMiddleware, userController.unfollowUser)
router.get('/user/followers/:id', authMiddleware, userController.userFollowers)
router.get('/user/following/:id', authMiddleware, userController.userFollowing)
router.get('/user', userController.getAll)
router.get('/user/:id', userController.getOne)
router.post('/user', userController.createOne)
router.put('/user/:id', userController.updateOne)
router.delete('/user/:id', userController.deleteOne)

module.exports = router 
