/**
 * Load the dependancies
 */
const express = require('express')
const router = express.Router()
const pg = require('pg');

/**
* PATRICK - check les foreign keys dans creation de MedicalSupply
*/
/**
* Add a MedicalSupply
*/
router.post('/medicalSupply', (req, res, next) => {

	pg.connect(connectionString, (err, client, done) => {

		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({success: false, data: err});
		}

		//Add a MedicalSupply
		let queryText = `
		INSERT 
		INTO HMS-PMS.MedicalSupply
		VALUES (
		'${req.body.supplyID}',
		'${req.body.supplyName}',
		'${req.body.quantity}',
		'${req.body.methodOfAdministration}',
		'${req.body.supplierID}',
		'${req.body.status}'
		);
		`;

		// Add a SurgicalSupply
		if (req.body.type === 'SurgicalSupply') {
			queryText += `
			INSERT 
			INTO HMS-PMS.SurgicalSupply
			VALUES (
			'${req.body.supplyID}'
			);
			`;
		}

		// Add an PharmaceuticalSupply
		else if (req.body.type === 'PharmaceuticalSupply') {
			queryText += `
			INSERT 
			INTO HMS-PMS.PharmaceuticalSupply
			VALUES (
			'${req.body.supplyID}',
			'${req.body.drugID}'
			);
			`;
		}

		// Add an AccessorySupply
		else if (req.body.type === 'AccessorySupply') {
			queryText += `
			INSERT 
			INTO HMS-PMS.AccessorySupply
			VALUES (
			'${req.body.supplyID}'
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

/**
* Get all MedicalSupplies of a certain type
* Parameter: SurgicalSupply or PharmaceuticalSupply or AccessorySupply
*/
router.get('/medicalSupply', (req, res, next) => {

	const results = [];

	pg.connect(connectionString, (err, client, done) => {

	// Handle connection errors
	if(err) {
		done();
		console.log(err);
		return res.status(500).json({success: false, data: err});
	}

	const query = client.query(`
		SELECT * 
		FROM HMS-PMS.'${req.body.type}';
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
 * Delete a Medical Supply
 */
router.delete('/medicalSupply', (req, res, next) => {

	const results = [];

	pg.connect(connectionString, (err, client, done) => {

		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({success: false, data: err});
		}

		if (req.body.type === 'SurgicalSupply') {
			const query = client.query(`
			DELETE
			FROM HMS-PMS.SurgicalSupply
			WHERE supplyID = '${req.body.supplyID}';
			`);
		}

		else if (req.body.type === 'PharmaceuticalSupply') {
			const query = client.query(`
			DELETE
			FROM HMS-PMS.PharmaceuticalSupply
			WHERE supplyID = '${req.body.supplyID}';
			`);
		}

		else if (req.body.type === 'AccessorySupply') {
			const query = client.query(`
			DELETE
			FROM HMS-PMS.AccessorySupply
			WHERE supplyID = '${req.body.supplyID}';
			`);
		}

		// After all data is returned, close connection and return results
		query.on('end', () => {
			done();
			return res.json(results);
		});
	});
});

 module.exports = router