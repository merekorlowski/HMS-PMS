/**
 * Load the dependancies
 */
const express = require('express');
const router = express.Router();
const pg = require('pg');
const config = require('../config')
const connectionString = process.env.DATABASE_URL || config.dbUrl

const patients = require('../patients')

/**
* Add a Patient with his NextOfKin
*/
router.post('/patient', (req, res, next) => {

	let patient = req.body

	patients.push(patient)

	return res.json()

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
	// 		'${req.body.patientID}',
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

	let patient = req.body

	for (let p of patients) {
		if (p.patientID === patient.patientID) {
			p = patient
		}
	}

	return res.json()

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

	// 		WHERE patientID = '${req.body.patientID}';

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

	const results = [];

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
	// 		patientID,
	// 		chargeNurseID,
	// 		localDoctorID,
	// 		divisionID
	// 		)
	// 		VALUES(
	// 		'${req.body.priorityAssessment}'
	// 		'${req.body.rational}'
	// 		'${req.body.patientID}'
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
	// 		SELECT patientID 
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
	// 		patientID,
	// 		chargeNurseID,
	// 		localDoctorID,
	// 		divisionID
	// 		)
	// 		VALUES(
	// 		'${req.body.privateInsurance}'
	// 		'${req.body.patientID}'
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
	// 		WHERE patientID = '${req.body.patientID}'
	// 		`);

	// 	// After all data is returned, close connection and return results
	// 	query.on('end', () => {
	// 		done();
	// 		return res.json();
	// 	});
	// });
});

 module.exports = router;

