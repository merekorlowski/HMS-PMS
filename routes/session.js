const express = require('express')
const router = express.Router()

router.post('/session/login', (req, res) => {
	//post to db
	return null //session key
})

router.post('/session/logout', (req, res) => {
	//post to db
	return null //logout message
})

module.exports = router
