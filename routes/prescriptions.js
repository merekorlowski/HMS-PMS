/**
 * Load the dependancies
 */
const express = require('express');
const router = express.Router();

/**
* PATRICK
*/
/**
* Get Patient Prescriptions
*/
router.get('/prescriptions', (req, res) => {
	// patient passed in
	let user = req.user

	const results = [];

	pg.connect(connectionString, (err, client, done) => {

		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({success: false, data: err});
		}

		const query = client.query(`
			QUERY GET PRESCRIPTIONS
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

/**
* PATRICK
*/
/**
* Prescibe Medication
*/
router.post('/prescription', (req, res) => {
	pg.connect(connectionString, (err, client, done) => {

		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({success: false, data: err});
		}

		//Add a MedicalSupply
		let queryText = `
		QUERY F8.1: CREATE A PRECRIPTION
		`;

		const query = client.query(queryText);

		// After all data is returned, close connection and return results
		query.on('end', () => {
			done();
			return res.json();
		});
	});
});

/**
* PATRICK
*/
/**
* Modify a Prescription
*/
router.put('/prescription', (req, res, next) => {

	pg.connect(connectionString, (err, client, done) => {

		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({success: false, data: err});
		}

		const query = client.query(`
			QUERY UPDATE PRESCRIPTION
			`);

		// After all data is returned, close connection and return results
		query.on('end', () => {
			done();
			return res.json();
	});

	});
});

/**
* PATRICK
*/
/**
* Delete a Prescription
*/
router.delete('/prescriptions', (req, res, next) => {

	const results = [];

	pg.connect(connectionString, (err, client, done) => {

		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({success: false, data: err});
		}

		const query = client.query(`
			QUERY DELETE PRECRIPTION
			`);

		// After all data is returned, close connection and return results
		query.on('end', () => {
			done();
			return res.json(results);
		});

	});
});

module.exports = router;
