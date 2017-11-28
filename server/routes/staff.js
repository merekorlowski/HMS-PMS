/**
 * Load the dependancies
 */
const express = require('express');
const router = express.Router();
const pg = require('pg');


//PATRICK check les foreign keys for each insert...
/**
 * Add a Staff
 */

 router.post('/staff', (req, res, next) => {

	pg.connect(connectionString, (err, client, done) => {

		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({success: false, data: err});
		}

		//Add a Staff
		let queryText = `
		INSERT 
		INTO HMS-PMS.Staff
		VALUES (
		'${req.body.userId}',
		'${req.body.email}',
		'${req.body.password}',
		'${req.body.qualifications}',
		'${req.body.workExperience}'
		);
		`;

		// Add a LocalDoctor
		if (req.body.role === 'LocalDoctor') {
			queryText += `
			INSERT 
			INTO HMS-PMS.LocalDoctor
			VALUES (
			'${req.body.userId}',
			'${req.body.isSpecialiste}'
			);
			`;
		}

		// Add a Nurse
		else if (req.body.role === 'Nurse') {
			queryText += `
			INSERT 
			INTO HMS-PMS.Nurse
			VALUES (
			'${req.body.userId}',
			'${req.body.isSpecialiste}'
			);
			`;
		}

		// Add a ChargeNurse
		else if (req.body.role === 'ChargeNurse') {
			queryText += `
			INSERT 
			INTO HMS-PMS.ChargeNurse
			VALUES (
			'${req.body.userId}',
			'${req.body.phoneNumber}',
			'${req.body.bipperExtension}'
			);
			`;
		}

		// Add a Director
		else if (req.body.role === 'Director') {
			queryText += `
			INSERT 
			INTO HMS-PMS.Director
			VALUES (
			'${req.body.userId}'
			);
			`;
		}

		// Add a NonMedical
		else if (req.body.role === 'NonMedical') {
			queryText += `
			INSERT 
			INTO HMS-PMS.NonMedical
			VALUES (
			'${req.body.userId}'
			);
			`;
		}

		// Add a Auxiliary
		else if (req.body.role === 'Auxiliary') {
			queryText += `
			INSERT 
			INTO HMS-PMS.Auxiliary
			VALUES (
			'${req.body.userId}',
			'${req.body.isSpecialiste}'
			);
			`;
		}

		// Add a PersonnelOfficer
		else if (req.body.role === 'PersonnelOfficer') {
			queryText += `
			INSERT 
			INTO HMS-PMS.PersonnelOfficer
			VALUES (
			'${req.body.userId}'
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
 * Get information of division's charge nurse
 */
 router.get('/chargeNurse', (req, res, next) => {

	const results = [];

	pg.connect(connectionString, (err, client, done) => {

		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({success: false, data: err});
		}

		const query = client.query(`
			QUERY F3.4
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