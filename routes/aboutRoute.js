const express = require('express')
const {getAbout, addAbout, getAboutId, updateAbout, delAbout} = require('../controllers/aboutCtrl')


//-------------About Route ----------------
const router = express.Router()

//get about user
router.get('/about', getAbout)

//add about user
router.post('/about', addAbout)

//get specific user by id
router.get('/about/:id', getAboutId)

//update about user
router.put('/about/update/:id', updateAbout)

//get about user
router.delete('/about/:id', delAbout)


module.exports = router