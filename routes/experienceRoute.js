const express = require('express')
const {getExperience, addExperience, getExperienceId, updateExperience, delExperience} = require('../controllers/experienceCtrl')


//-------------Experience Route ----------------
const router = express.Router()

//get experience user
router.get('/experience', getExperience)

//add experience user
router.post('/experience', addExperience)

//get specific user by id
router.get('/experience/:id', getExperienceId)

//update experience user
router.put('/experience/update/:id', updateExperience)

//get experience user
router.delete('/experience/:id', delExperience)


module.exports = router