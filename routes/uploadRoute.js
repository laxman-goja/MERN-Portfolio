const express = require('express')
const {uploadImage, deleteImage} = require('../controllers/uploadCtrl')

const router = express.Router()

// ------ Post Upload  image -------------

router.post('/upload', uploadImage)


// ----------Delete image -------------
router.delete('/delete',deleteImage)

module.exports = router