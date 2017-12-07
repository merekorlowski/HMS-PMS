/**
 * Load the dependancies
 */
const express = require('express');
const router = express.Router();
const config = require('../config')
const connectionString = process.env.DATABASE_URL || config.dbUrl

const Division = require('../schemas/division')

/**
* Create a Division
*/
router.post('/division', (req, res) => {
	
	new Division({
		_id: req.body._id,
		divisionName: req.body.divisionName,
		chargeNurseID: null,
		location: req.body.location,
		numOfBeds: req.body.numOfBeds,
		numOfOccupiedBeds: req.body.numOfOccupiedBeds,
		phoneExtension: req.body.phoneExtension
	}).save((err, division) => {
		if (err) {
			console.error(err)
			res.json(err)
		} else {
			res.json(division)
		}
	})
});

router.get('/divisions', (req, res) => {

	Division.find((err, divisions) => {
		if (err) {
			console.error(err)
			res.json(err)
		} else {
			res.json(divisions)
		}
	})

})

router.get('/division', (req, res) => {
	
		Division.findOne({
			_id: req.query._id
		}, (err, division) => {
			if (err) {
				console.error(err)
				res.json(err)
			} else {
				res.json(division)
			}
		})
	
	})

module.exports = router;
