/**
 * Load the dependancies
 */
const express = require('express')
const router = express.Router()
const pg = require('pg');

/**
* PATRICK (Je n'ai pas ajouter les foreign keys dans Patient
* et check si ya des problemes dans dans router.post('/patient'
*/
/**
* Add a Patient with his NextOfKin
*/

router.post('/patient', (req, res, next) => {

	pg.connect(connectionString, (err, client, done) => {

		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({success: false, data: err});
		}

		//Add a NextOfKin
		let queryText = `
			INSERT 
			INTO HMS-PMS.NextOfKin
			VALUES (
			'${req.body.nextOfKinID}',
			'${req.body.relationship}',
			'${req.body.address}',
			'${req.body.phoneNumber}'
			);
			`;

		//Add a Patient
		queryText += `
			INSERT 
			INTO HMS-PMS.Patient
			VALUES (
			'${req.body.patientID}',
			'${req.body.publicAssurance}',
			'${req.body.address}',
			'${req.body.phoneNumber}',
			'${req.body.dateOfBirth}',
			'${req.body.gender}',
			'${req.body.maritalStatus}',
			'${req.body.nextOfKinID}'
			);
			`;

		// Add an OutPatient
		if (req.body.role === 'OutPatient') {
			queryText += `
			INSERT 
			INTO HMS-PMS.OutPatient
			VALUES (
			'${req.body.patientID}'
			);
			`;
		}

		// Add an InPatient
		else if (req.body.role === 'InPatient') {
			queryText += `
			INSERT 
			INTO HMS-PMS.InPatient
			VALUES (
			'${req.body.patientID}'
			);
			`;
		}

		const query = client.query(queryText);

		// After all data is returned, close connection and return results
		query.on('end', () => {
			done();
			return res.json();
		});
	});
});

//PATRICK
/**
 * Update patient registration
 */
router.put('/patient', (req, res, next) => {

 	pg.connect(connectionString, (err, client, done) => {

		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({success: false, data: err});
		}

		const query = client.query(`
			QUERY F2
			`);

		// After all data is returned, close connection and return results
		query.on('end', () => {
			done();
			return res.json();
		});
	});
});

//PATRICK
/**
 * Update patient division
 */
router.put('/patient/division', (req, res, next) => {

 	pg.connect(connectionString, (err, client, done) => {

		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({success: false, data: err});
		}

		const query = client.query(`
			QUERY F6 2) Update DivisionId dans Patient
			`);

		// After all data is returned, close connection and return results
		query.on('end', () => {
			done();
			return res.json();
		});
	});
});

//PATRICK
/**
 * Consult the file of any patient
 */
router.get('/patient', (req, res, next) => {

	const results = [];

	pg.connect(connectionString, (err, client, done) => {

		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({success: false, data: err});
		}

		const query = client.query(`
			QUERY F11
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

 module.exports = router