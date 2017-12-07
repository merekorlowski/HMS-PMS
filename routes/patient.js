/**
 * Load the dependancies
 */
const express = require('express');
const router = express.Router();
const pg = require('pg');
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

	// let id = req.query._id

	// for (let p of patients) {
	// 	if (p._id === id) {
	// 		return res.json(p)
	// 	}
	// }

	// return res.json()

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

	// let patient = req.body

	// patients.push(patient)

	// return res.json()

	// pg.connect(connectionString, (err, client, done) => {

	// 	// Handle connection errors
	// 	if(err) {
	// 		done();
	// 		console.log(err);
	// 		return res.status(500).json({success: false, data: err});
	// 	}

	// 	//Add a NextOfKin
	// 	const query =  `
	// 		INSERT 
	// 		INTO HMS_PMS.Patient
	// 		VALUES (
	// 		'${req.body._id}',
	// 		'${req.body.address}',
	// 		'${req.body.phoneNumber}',
	// 		'${req.body.dateOfBirth}',
	// 		'${req.body.gender}',
	// 		'${req.body.maritalStatus}',
	// 		'${req.body.nofFirstName}',
	// 		'${req.body.nofLastName}',
	// 		'${req.body.relationship}',
	// 		'${req.body.nofAddress}',
	// 		'${req.body.nofPhoneNumber}',
	// 		);
	// 		`;

	// 	// After all data is returned, close connection and return results
	// 	query.on('end', () => {
	// 		done();
	// 		return res.json();
	// 	});
	// });
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

	// let patient = req.body

	// for (let p of patients) {
	// 	if (p._id === patient._id) {
	// 		p = patient
	// 	}
	// }

	// return res.json()

 	// pg.connect(connectionString, (err, client, done) => {

	// 	// Handle connection errors
	// 	if(err) {
	// 		done();
	// 		console.log(err);
	// 		return res.status(500).json({success: false, data: err});
	// 	}

	// 	const query = client.query(`
	// 		UPDATE HMS_PMS.Patient
	// 		SET  
	// 		publicAssurance = '${req.body.publicAssurance}' ,
	// 		address	= '${req.body.address}',
	// 		phoneNumber = '${req.body.phoneNumber}',
	// 		dateOfBirth = '${req.body.dateOfBirth}',
	// 		gender = '${req.body.gender}',
	// 		maritalStatus = '${req.body.maritalStatus}',
	// 		nofFirstName='${req.body.nofFirstName}',
	// 		nofLastName='${req.body.nofLastName}',
	// 		relationship='${req.body.relationship}',
	// 		nofAddress='${req.body.nofAddress}',
	// 		nofPhoneNumber='${req.body.nofPhoneNumber}'

	// 		WHERE _id = '${req.body._id}';

	// 		`);

	// 	// After all data is returned, close connection and return results
	// 	query.on('end', () => {
	// 		done();
	// 		return res.json();
	// 	});
	// });
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

	// const results = patients

	// res.json(results)

	// pg.connect(connectionString, (err, client, done) => {

	// 	// Handle connection errors
	// 	if(err) {
	// 		done();
	// 		console.log(err);
	// 		return res.status(500).json({success: false, data: err});
	// 	}

	// 	const query = client.query(`
	// 		SELECT * 
	// 		FROM HMS_PMS.Patient; 
	// 		`);

	// 	query.on('row', row => {
	// 		results.push(row);
	// 	});

	// 	// After all data is returned, close connection and return results
	// 	query.on('end', () => {
	// 		done();
	// 		return res.json(results);
	// 	});

	// });
});


/**
 * Update patient division
 */
router.post('/patient/request-admission', (req, res, next) => {

 	// pg.connect(connectionString, (err, client, done) => {

	// 	// Handle connection errors
	// 	if(err) {
	// 		done();
	// 		console.log(err);
	// 		return res.status(500).json({success: false, data: err});
	// 	}

	// 	const query = client.query(`
	// 		INSERT INTO HMS_PMS.DivisionRequest
	// 		(priorityAssessment,
	// 		rational,
	// 		_id,
	// 		chargeNurseID,
	// 		localDoctorID,
	// 		divisionID
	// 		)
	// 		VALUES(
	// 		'${req.body.priorityAssessment}'
	// 		'${req.body.rational}'
	// 		'${req.body._id}'
	// 		'${req.body.chargeNurseID}'
	// 		'${req.body.localDoctorID}'
	// 		'${req.body.divisionID}'
	// 		)

	// 		`);

	// 	// After all data is returned, close connection and return results
	// 	query.on('end', () => {
	// 		done();
	// 		return res.json();
	// 	});
	// });
});


/**
 * Consult the file of any patient
 */
router.get('/patient/room-admission', (req, res, next) => {

	const results = [];

	// pg.connect(connectionString, (err, client, done) => {

	// 	// Handle connection errors
	// 	if(err) {
	// 		done();
	// 		console.log(err);
	// 		return res.status(500).json({success: false, data: err});
	// 	}

	// 	const query = client.query(`
	// 		SELECT _id 
	// 		FROM HMS_PMS.Patient
	// 		NATURAL JOIN HMS_PMS.RoomAdmission; 
	// 		`);

	// 	query.on('row', row => {
	// 		results.push(row);
	// 	});

	// 	// After all data is returned, close connection and return results
	// 	query.on('end', () => {
	// 		done();
	// 		return res.json(results);
	// 	});

	// });
});

/**
 * Admit patient in a room
 */
router.post('/patient/admit', (req, res, next) => {

 	// pg.connect(connectionString, (err, client, done) => {

	// 	// Handle connection errors
	// 	if(err) {
	// 		done();
	// 		console.log(err);
	// 		return res.status(500).json({success: false, data: err});
	// 	}

	// 	const query = client.query(`
	// 		INSERT INTO HMS_PMS.RoomAdmission
	// 		(privateInsurance,
	// 		_id,
	// 		chargeNurseID,
	// 		localDoctorID,
	// 		divisionID
	// 		)
	// 		VALUES(
	// 		'${req.body.privateInsurance}'
	// 		'${req.body._id}'
	// 		'${req.body.chargeNurseID}'
	// 		'${req.body.localDoctorID}'
	// 		'${req.body.divisionID}'
	// 		)

	// 		`);

	// 	// After all data is returned, close connection and return results
	// 	query.on('end', () => {
	// 		done();
	// 		return res.json();
	// 	});
	// });
});

/**
 * Admit patient in a room
 */

 // NOT COMPLETE - NEED TO DO A BIG TRANSSACITON, WAITING FOR DB TO TEST
router.post('/patient/accept-admission', (req, res, next) => {

 	// pg.connect(connectionString, (err, client, done) => {

	// 	// Handle connection errors
	// 	if(err) {
	// 		done();
	// 		console.log(err);
	// 		return res.status(500).json({success: false, data: err});
	// 	}
	// //select form divRequest - insert in roomadmission - delete from divRequest
	// 	const query = client.query(`
	// 		SELECT *
	// 		FROM HMS_PMS.DivisionRequest
	// 		WHERE divisionRequestID = '${req.body.privateInsurance}';
	// 		`);

	// 	// After all data is returned, close connection and return results
	// 	query.on('end', () => {


	// 		done();
	// 		return res.json();
	// 	});
	// });
});

/**
 * Discharge patient
 */
router.delete('/patient/discharge', (req, res, next) => {

 	// pg.connect(connectionString, (err, client, done) => {

	// 	// Handle connection errors
	// 	if(err) {
	// 		done();
	// 		console.log(err);
	// 		return res.status(500).json({success: false, data: err});
	// 	}

	// 	const query = client.query(`
	// 		DELETE FROM HMS_PMS.RoomAdmission 
	// 		WHERE _id = '${req.body._id}'
	// 		`);

	// 	// After all data is returned, close connection and return results
	// 	query.on('end', () => {
	// 		done();
	// 		return res.json();
	// 	});
	// });
});

 module.exports = router;

