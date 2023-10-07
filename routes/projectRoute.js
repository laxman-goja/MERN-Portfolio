const express = require('express')
const {getProject, addProject, getProjectId, updateProject, delProject} = require('../controllers/projectCtrl')


//-------------Project Route ----------------
const router = express.Router()

//get project
router.get('/project', getProject)

//add project 
router.post('/project', addProject)

//get specific user by id
router.get('/project/:id', getProjectId)

//update project user by id
router.put('/project/update/:id', updateProject)

//get project user
router.delete('/project/:id', delProject)


module.exports = router