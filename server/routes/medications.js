const express = require('express')
const router = express.Router()

router.get('/prescriptions', (req, res) => {
	let user = req.user

	//get prescriptions from user
	return null //precsriptions
})

router.post('/session/logout', (req, res) => {
  //post to db
  return null //logout message
})

module.exports = router
