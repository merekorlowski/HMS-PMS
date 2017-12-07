const express = require('express')
const router = express.Router()
const Staff = require('../schemas/staff')
const config = require('../config')
const connectionString = process.env.DATABASE_URL || config.dbUrl
 
router.post('/login', (req, res) => {

	Staff.findOne({
		_id: req.body.staffID,
		password: req.body.password
	}, (err, staff) => {
		if (err) {
			console.error(err)
			res.json(err)
		} else {
			res.json({
				firstName: staff.firstName,
				lastName: staff.lastName,
				role: staff.role
			})
		}
	})
})

router.post('/register', (req, res) => {

	new Staff({
		_id: req.body.email,
		password: req.body.password,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		role: req.body.role,
		phoneExtension: req.body.phoneExtension,
		bipperExtension: req.body.bipperExtension
	}).save((err, staff) => {
		if (err) {
			console.error(err)
			res.json({
				err: err
			})
		} else {
			return res.json(staff)
		}
	})
});

module.exports = router
