/**
 * Load the dependancies
 */
const express = require('express');
const router = express.Router();
const pg = require('pg');


/**PAS - Done
* Add a Patient in a room
*/

router.post('/roomadmission', (req, res, next) => {

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
			INTO HMS-PMS.RoomAdmission(
			privateInsurance,
			localdoctorID,
			chargenurseID,
			patientID,
			divisionId,
			roomNumber,
			bedNumber
			)
			VALUES (
			'${req.body.privateInsurance}',
			'${req.body.localdoctorID}',
			'${req.body.chargenurseID}',
			'${req.body.patientID}',
			'${req.body.divisionId}',
			'${req.body.roomNumber}',
			'${req.body.bedNumber}'
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

//DONE: PAS
/**
 * Update room admission
 */
router.put('/roomadmission', (req, res, next) => {

 	pg.connect(connectionString, (err, client, done) => {

		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({success: false, data: err});
		}

		const query = client.query(`
			UPDATE HMS-PMS.RoomAdmission
			SET  
			privateInsurance=	'${req.body.privateInsurance}',
			localdoctorID=	'${req.body.localdoctorID}',
			chargenurseID='${req.body.chargenurseID}',
			divisionId=	'${req.body.divisionId}',
			roomNumber='${req.body.roomNumber}',
			bedNumber='${req.body.bedNumber}'
			
			WHERE patientID='${req.body.patientID}';

			`);

		// After all data is returned, close connection and return results
		query.on('end', () => {
			done();
			return res.json();
		});
	});
});

//DONE: PAS
/**
 * get all rooms admission
 */
router.get('/roomadmissions', (req, res, next) => {

 	pg.connect(connectionString, (err, client, done) => {

		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({success: false, data: err});
		}

		const query = client.query(`
			SELECT *
			FROM HMS-PMS.RoomAdmission;
			`);

		// After all data is returned, close connection and return results
		query.on('end', () => {
			done();
			return res.json();
		});
	});
});

 module.exports = router;