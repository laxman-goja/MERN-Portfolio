const express = require('express')
const { registerUser, loginUser, verifyToken } = require('../controllers/userCtrl')
const auth = require('../middlewares/auth')


const router = express.Router()

//-------------user Route ----------------

//register
router.post('/register', registerUser)

//login
router.post('/login', loginUser)

//verify
router.get('/verify', verifyToken)

module.exports = router