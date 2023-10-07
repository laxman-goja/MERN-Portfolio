const express = require('express')
const {getEducation, addEducation, getEducationId, updateEducation, delEducation} = require('../controllers/educationCtrl')


//-------------Education Route ----------------
const router = express.Router()

//get education user
router.get('/education', getEducation)

//add education user
router.post('/education', addEducation)

//get specific user by id
router.get('/education/:id', getEducationId)

//update education user
router.put('/education/update/:id', updateEducation)

//get education user
router.delete('/education/:id', delEducation)


module.exports = router