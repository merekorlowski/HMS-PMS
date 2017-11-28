/**
 * Load the dependancies
 */
const express = require('express');
const router = express.Router();
const pg = require('pg');

/**
* PATRICK - Foreign keys dans creation de Division
*/
/**
* Create a Division
*/
router.post('/division', (req, res, next) => {

	pg.connect(connectionString, (err, client, done) => {

		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({success: false, data: err});
		}

		//Add a Division
		let queryText = `
		INSERT 
		INTO HMS-PMS.Division
		VALUES (
		'${req.body.divisionID}',
		'${req.body.divisionName}',
		'${req.body.location}',
		'${req.body.numOfBeds}',
		'${req.body.phoneExtension}',
		'${req.body.status}'
		);
		`;

		// Add a Ward
		if (req.body.role === 'Ward') {
			queryText += `
			INSERT 
			INTO HMS-PMS.Ward
			VALUES (
			'${req.body.divisionID}',
			'${req.body.typeOfCare}'
			);
			`;
		}

		// Add an OutPatientClinic
		else if (req.body.role === 'OutPatientClinic') {
			queryText += `
			INSERT 
			INTO HMS-PMS.OutPatientClinic
			VALUES (
			'${req.body.divisionID}'
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
 * Consult the file of any patient
 */
router.get('/ward', (req, res, next) => {

	const results = [];

	pg.connect(connectionString, (err, client, done) => {

		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({success: false, data: err});
		}

		const query = client.query(`
			QUERY F3 3) Get information of Ward
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

//PATRICK
/**
 * Get Information about Division
 */
router.get('/outPatientClinic', (req, res, next) => {

	const results = [];

	pg.connect(connectionString, (err, client, done) => {

		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({success: false, data: err});
		}

		const query = client.query(`
			QUERY F3 4) Get information of OutPatientClinic
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

//PATRICK
/**
 * Update Division status
 */
router.put('/patient/division/status', (req, res, next) => {

	pg.connect(connectionString, (err, client, done) => {

		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({success: false, data: err});
		}

		const query = client.query(`
			QUERY F3.2 F3.3 Update Division.status
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
 * Admit Patient to Division
 */
router.post('/patient/division/admit', (req, res, next) => {

	const results = [];

	pg.connect(connectionString, (err, client, done) => {

		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({success: false, data: err});
		}

		const query = client.query(`
			QUERY F4 F4.1 Charge Nurse admits patient to their division 
			)
			`);

		// After all data is returned, close connection and return results
		query.on('end', () => {
			done();
			return res.json(results);
		});

	});
});

//PATRICK
/**
 * Request Patient Admission to Division
 */
router.post('/patient/division/request', (req, res, next) => {

	const results = [];

	pg.connect(connectionString, (err, client, done) => {

		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({success: false, data: err});
		}

		const query = client.query(`
			QUERY F5 Charge Nurses to request a patient admission to a division.
			`);

		// After all data is returned, close connection and return results
		query.on('end', () => {
			done();
			return res.json(results);
		});

	});
});

 module.exports = router;