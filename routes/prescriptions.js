/**
 * Load the dependancies
 */
const express = require('express');
const router = express.Router();

/**
* Get Patient Prescriptions
*/
router.get('/prescriptions', (req, res) => {

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
			FROM HMS-PMS.Prescription
			WHERE patientID='${req.body.patientID}';
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
		INSERT 
			INTO HMS-PMS.Prescription(
			unitsByDay,
			numOfAdministrationPerDay,
			methodOfAdministration,
			startDate,
			finishDate,
			numOfAdministrationPerTime,
			localDoctorID, 
			patientID,
			drugID
			)
			VALUES (
			'${req.body.unitsByDay}',
			'${req.body.numOfAdministrationPerDay}',
			'${req.body.methodOfAdministration}',
			'${req.body.startDate}',
			'${req.body.finishDate}',
			'${req.body.numOfAdministrationPerTime}',
			'${req.body.localDoctorID}',
			'${req.body.patientID}',
			'${req.body.drugID}'
			);
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
			UPDATE HMS-PMS.Prescription 			
			SET 
			unitsByDay= '${req.body.unitsByDay}',
			numOfAdministrationPerDay='${req.body.numOfAdministrationPerDay}',
			methodOfAdministration='${req.body.methodOfAdministration}',
			startDate='${req.body.startDate}',
			finishDate='${req.body.finishDate}',
			numOfAdministrationPerTime='${req.body.numOfAdministrationPerTime}',
			localDoctorID='${req.body.localDoctorID}',
			drugID = '${req.body.drugID}'
			WHERE
			prescriptionID='${req.body.prescriptionID}'
			;
			`);

		// After all data is returned, close connection and return results
		query.on('end', () => {
			done();
			return res.json();
	});

	});
});

/**
* Delete a Prescription
*/
router.delete('/prescription', (req, res, next) => {

	const results = [];

	pg.connect(connectionString, (err, client, done) => {

		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({success: false, data: err});
		}

		const query = client.query(`
			DELETE FROM HMS-PMS.Prescription 
			WHERE prescriptionID = '${req.body.prescriptionID}';
			`);

		// After all data is returned, close connection and return results
		query.on('end', () => {
			done();
			return res.json(results);
		});

	});
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
			SELECT *
			FROM HMS-PMS.PharmaceuticalSupply;
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
