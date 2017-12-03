/**
 * Load the dependancies
 */
const express = require('express');
const router = express.Router();
const pg = require('pg');


/**
 * Get division information
 */
router.get('/divisions', (req, res, next) => {

	const results = [];

	pg.connect(connectionString, (err, client, done) => {

		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({success: false, data: err});
		}

		const query = client.query(`
			SELECT *, (	SELECT COUNT (*) 
						FROM HMS-PMS.RoomAdmission 
						Where divisionID = '${req.body.divisionID}') 
						as OccupiedBeds
			FROM HMS-PMS.Divisions as D
			NATURAL JOIN HMS-PMS.chargeNurse as C
			NATURAL JOIN HMS-PMS.RoomAdmission AS R; 
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