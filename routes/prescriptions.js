/**
 * Load the dependancies
 */
const express = require('express');
const router = express.Router();
const config = require('../config')
const connectionString = process.env.DATABASE_URL || config.dbUrl

const Prescription = require('../schemas/prescription')

/**
* Get Patient Prescriptions
*/
router.get('/prescriptions', (req, res) => {

	Prescription.find({
		patientID: req.query._id
	}, (err, prescriptions) => {
		if (err) {
			console.error(err)
			res.json(err)
		} else {
			res.json(prescriptions)
		}
	})
});

/**
* Prescibe Medication
*/
router.post('/prescription', (req, res) => {

	new Prescription({
		patientID: req.body._id,
		drugNumber: req.body.prescription.drugNumber,
		drugName: req.body.prescription.drugName,
		unitsByDay: req.body.prescription.unitsByDay,
		administrationsPerDay: req.body.prescription.administrationsPerDay,
		methodOfAdministrations: req.body.prescription.methodOfAdministrations,
		startDate: req.body.prescription.startDate,
		endDate: req.body.prescription.endDate
	}).save((err, prescription) => {
		if (err) {
			console.error(err)
			res.json(err)
		} else {
			res.json(prescription)
		}
	})
});

module.exports = router;
