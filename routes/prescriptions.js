/**
 * Load the dependancies
 */
const express = require('express');
const router = express.Router();
const pg = require('pg');
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

	// const results = [];

	// pg.connect(connectionString, (err, client, done) => {

	// 	// Handle connection errors
	// 	if(err) {
	// 		done();
	// 		console.log(err);
	// 		return res.status(500).json({success: false, data: err});
	// 	}

	// 	const query = client.query(`
	// 		SELECT *
	// 		FROM HMS_PMS.Prescription
	// 		WHERE _id='${req.body._id}';
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
* Get Specific prescription
*/
router.get('/prescription', (req, res) => {

	// const results = [];

	// pg.connect(connectionString, (err, client, done) => {

	// 	// Handle connection errors
	// 	if(err) {
	// 		done();
	// 		console.log(err);
	// 		return res.status(500).json({success: false, data: err});
	// 	}

	// 	const query = client.query(`
	// 		SELECT *
	// 		FROM HMS_PMS.Prescription
	// 		WHERE prescriptionID='${req.body.prescriptionID}';
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
	
	// pg.connect(connectionString, (err, client, done) => {

	// 	// Handle connection errors
	// 	if(err) {
	// 		done();
	// 		console.log(err);
	// 		return res.status(500).json({success: false, data: err});
	// 	}

	// 	//Add a MedicalSupply
	// 	let queryText = `
	// 	INSERT 
	// 		INTO HMS_PMS.Prescription(
	// 		unitsByDay,
	// 		numOfAdministrationPerDay,
	// 		methodOfAdministration,
	// 		startDate,
	// 		finishDate,
	// 		numOfAdministrationPerTime,
	// 		localDoctorID, 
	// 		_id,
	// 		drugID
	// 		)
	// 		VALUES (
	// 		'${req.body.unitsByDay}',
	// 		'${req.body.numOfAdministrationPerDay}',
	// 		'${req.body.methodOfAdministration}',
	// 		'${req.body.startDate}',
	// 		'${req.body.finishDate}',
	// 		'${req.body.numOfAdministrationPerTime}',
	// 		'${req.body.localDoctorID}',
	// 		'${req.body._id}',
	// 		'${req.body.drugID}'
	// 		);
	// 		`;

	// 	const query = client.query(queryText);

	// 	// After all data is returned, close connection and return results
	// 	query.on('end', () => {
	// 		done();
	// 		return res.json();
	// 	});
	// });
});

/**
* Modify a Prescription
*/
router.put('/prescription', (req, res, next) => {

	// pg.connect(connectionString, (err, client, done) => {

	// 	// Handle connection errors
	// 	if(err) {
	// 		done();
	// 		console.log(err);
	// 		return res.status(500).json({success: false, data: err});
	// 	}

	// 	const query = client.query(`
	// 		UPDATE HMS_PMS.Prescription 			
	// 		SET 
	// 		unitsByDay= '${req.body.unitsByDay}',
	// 		numOfAdministrationPerDay='${req.body.numOfAdministrationPerDay}',
	// 		methodOfAdministration='${req.body.methodOfAdministration}',
	// 		startDate='${req.body.startDate}',
	// 		finishDate='${req.body.finishDate}',
	// 		numOfAdministrationPerTime='${req.body.numOfAdministrationPerTime}',
	// 		localDoctorID='${req.body.localDoctorID}',
	// 		drugID = '${req.body.drugID}'
	// 		WHERE
	// 		prescriptionID='${req.body.prescriptionID}'
	// 		;
	// 		`);

	// 	// After all data is returned, close connection and return results
	// 	query.on('end', () => {
	// 		done();
	// 		return res.json();
	// });

	// });
});

/**
* Delete a Prescription
*/
router.delete('/prescription', (req, res, next) => {

	// const results = [];

	// pg.connect(connectionString, (err, client, done) => {

	// 	// Handle connection errors
	// 	if(err) {
	// 		done();
	// 		console.log(err);
	// 		return res.status(500).json({success: false, data: err});
	// 	}

	// 	const query = client.query(`
	// 		DELETE FROM HMS_PMS.Prescription 
	// 		WHERE prescriptionID = '${req.body.prescriptionID}';
	// 		`);

	// 	// After all data is returned, close connection and return results
	// 	query.on('end', () => {
	// 		done();
	// 		return res.json(results);
	// 	});

	// });
});

/**
* Get Drugs information
*/
router.get('/medications', (req, res) => {

	const results = [];

	pg.connect(connectionString, (err, client, done) => {

		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({success: false, data: err});
		}

		const query = client.query(`
			SELECT drugID,supplyName
			FROM HMS_PMS.PharmaceuticalSupply 
			NATURAL JOIN HMS_PMS.MedicalSupply;
			`);

		query.on('row', row => {
			results.push(row);
		});

		// After all data is returned, close connection and return results
		query.on('end', () => {
			done();
			return res.json(results);
		});

	});
});


module.exports = router;
