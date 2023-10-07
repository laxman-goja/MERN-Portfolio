const express = require('express')
const { addContact , getContact } = require('../controllers/contactCtrl')

const router = express.Router()

router.get('/', getContact )

router.post('/', addContact)

module.exports = router