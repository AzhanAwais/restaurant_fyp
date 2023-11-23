const express = require("express")
const router = new express.Router()
const multer = require("multer")
const userImagesController = require('../controllers/userImagesController')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads")
    },
    filename: (req, file, cb) => {
        let name = Date.now() + '-' + file.originalname
        if (file.fieldname == 'nic_front') req.body['nic_front'] = name
        if (file.fieldname == 'nic_back') req.body['nic_back'] = name
        if (file.fieldname == 'shop_card') req.body['shop_card'] = name
        if (file.fieldname == 'shop_bill') req.body['shop_bill'] = name
        cb(null, name)
    }
})

const upload = multer({storage: storage})

router.post('/verification-user/:id', userImagesController.verifyUser)
router.get('/verification', userImagesController.verificationAggregation)
router.get('/verification/:id', userImagesController.getOne)
router.post('/verification', upload.fields([{name: 'nic_front', maxCount: 1}, {name: "nic_back", maxCount: 1}, {name: "shop_card", maxCount: 1}, {name: "shop_bill", maxCount: 1}]), userImagesController.createOne)
// router.put('/verification/:id', userImagesController.updateOne)
router.delete('/verification/:id', userImagesController.deleteOne)

module.exports = router