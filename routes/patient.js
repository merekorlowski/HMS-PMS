/**
 * Load the dependancies
 */
const express = require('express');
const router = express.Router();
const config = require('../config')
const connectionString = process.env.DATABASE_URL || config.dbUrl

const Patient = require('../schemas/patient')

router.get('/patient', (req, res) => {
	
	Patient.findOne({
		_id: req.query._id
	}, (err, patient) => {
		if (err) {
			console.error(err)
			res.json(err)
		} else {
			res.json(patient)
		}
	})

})

/**
* Add a Patient with his NextOfKin
*/
router.post('/patient', (req, res, next) => {

	new Patient({
		_id: req.body._id,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		address: {
			line: req.body.address.line1,
			city: req.body.address.city,
			postalCode: req.body.address.postalCode
		},
		phoneNumber: req.body.phoneNumber,
		dateOfBirth: req.body.dateOfBirth,
		gender: req.body.gender,
		maritalStatus: req.body.maritalStatus,
		nextOfKin: {
			firstName: req.body.nextOfKin.firstName,
			lastName: req.body.nextOfKin.lastName,
			relationshipToPatient: req.body.nextOfKin.relationshipToPatient,
			address: {
				line: req.body.nextOfKin.address.line1,
				city: req.body.nextOfKin.address.city,
				postalCode: req.body.nextOfKin.address.postalCode
			},
			phoneNumber: req.body.nextOfKin.phoneNumber	
		},
		externalDoctorID: req.body.externalDoctorID
	}).save((err, patient) => {
		if (err) {
			console.log(err)
			res.json(err)
		} else {
			res.json(patient)
		}
 	})
});

/**
 * Update patient registration
 */
router.put('/patient', (req, res, next) => {

	Patient.update({
		_id: req.body._id
	}, {
		$set: {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			address: {
				line: req.body.address.line,
				city: req.body.address.city,
				postalCode: req.body.address.postalCode
			},
			phoneNumber: req.body.phoneNumber,
			dateOfBirth: req.body.dateOfBirth,
			gender: req.body.gender,
			maritalStatus: req.body.maritalStatus,
			nextOfKin: {
				firstName: req.body.nextOfKin.firstName,
				lastName: req.body.nextOfKin.lastName,
				relationshipToPatient: req.body.nextOfKin.relationshipToPatient,
				address: {
					line: req.body.nextOfKin.address.line,
					city: req.body.nextOfKin.address.city,
					postalCode: req.body.nextOfKin.address.postalCode
				},
				phoneNumber: req.body.nextOfKin.phoneNumber	
			},
			externalDoctorID: req.body.externalDoctorID
		}
	}, (err, patient) => {
		if (err) {
			console.log(err)
			res.json(err)
		} else {
			res.json(patient)
		}
 	})
});

/**
 * Get all patients
 */
router.get('/patients', (req, res, next) => {

	Patient.find((err, patients) => {
		if (err) {
			console.error(err)
			res.json(err)
		} else {
			res.json(patients)
		}
	})
});


/**
 * Update patient division
 */
router.post('/patient/request-admission', (req, res, next) => {

});


/**
 * Consult the file of any patient
 */
router.get('/patient/room-admission', (req, res, next) => {

	const results = [];

	
});

/**
 * Admit patient in a room
 */
router.post('/patient/admit', (req, res, next) => {

 	
});

/**
 * Admit patient in a room
 */

router.post('/patient/accept-admission', (req, res, next) => {

 	
});

/**
 * Discharge patient
 */
router.delete('/patient/discharge', (req, res, next) => {

 	
});

module.exports = router;

