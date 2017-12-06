const express = require('express')
const router = express.Router()
const pg = require('pg')
const config = require('../config')
const connectionString = process.env.DATABASE_URL || config.dbUrl
const staff = require('../staff')
 
router.post('/login', (req, res) => {
	let id = parseInt(req.body.staffID) - 1
	if (staff[id]) {
		if (req.body.password === staff[id].password) {
			return res.json({
				firstName: staff[id].firstName,
				lastName: staff[id].lastName,
				role: staff[id].role
			})
		}
	}

	return res.json({
		err: 'Invalid staff ID or password.'
	})//res.status(401).json({success: false, data: 'User does not exist.'});
	// pg.connect(connectionString, (err, client, done) => {
	
	// 	// Handle connection errors
	// 	if (err) {
	// 		done();
	// 		console.log(err);
	// 		return res.status(500).json({success: false, data: err});
	// 	}

	// 	const query = client.query(`
	// 		SELECT * from hms_pms.staff 
	// 		WHERE 
	// 		staffid = ${req.body.staffID}
	// 		AND 
	// 		password = '${req.body.password}';
	// 	`);

	// 	// After all data is returned, close connection and return results
	// 	query.on('end', () => {
	// 		done();
	// 		return res.json();
	// 	})
	// })
})

router.post('/register', (req, res, next) => {

	let id = staff.length + 1

	req.body.staffID = id

	staff.push(req.body)

	res.json({
		staffID: id
	})

	// pg.connect(connectionString, (err, client, done) => {
		
	// 	// Handle connection errors
	// 	if (err) {
	// 		done();
	// 		console.log(err);
	// 		return res.status(500).json({success: false, data: err});
	// 	}

	// 	// Add a Staff
	// 	let queryText = `
	// 		INSERT 
	// 		INTO hms_pms.staff
	// 		VALUES (
	// 			${req.body.staffID},
	// 			'${req.body.password}',
	// 			'${req.body.firstName}',
	// 			'${req.body.lastName}',
	// 			'${req.body.email}',
	// 			'${req.body.role}'
	// 		);
	// 	`;

	// 	// Add a LocalDoctor
	// 	if (req.body.role === 'LocalDoctor') {
	// 		queryText += `
	// 		INSERT 
	// 		INTO HMS_PMS.LocalDoctor
	// 		VALUES (
	// 		'${req.body.staffID}',
	// 		'${req.body.isSpecialiste}'
	// 		);
	// 		`;
	// 	}

	// 	// Add a Nurse
	// 	else if (req.body.role === 'Nurse') {
	// 		queryText += `
	// 		INSERT 
	// 		INTO HMS_PMS.Nurse
	// 		VALUES (
	// 		'${req.body.staffID}',
	// 		'${req.body.isSpecialiste}'
	// 		);
	// 		`;
	// 	}

	// 	// Add a ChargeNurse
	// 	else if (req.body.role === 'ChargeNurse') {
	// 		queryText += `
	// 		INSERT 
	// 		INTO HMS_PMS.ChargeNurse
	// 		VALUES (
	// 		'${req.body.staffID}',
	// 		'${req.body.phoneNumber}',
	// 		'${req.body.bipperExtension}'
	// 		);
	// 		`;
	// 	}

	// 	// Add a Director
	// 	else if (req.body.role === 'Director') {
	// 		queryText += `
	// 		INSERT 
	// 		INTO HMS_PMS.Director
	// 		VALUES (
	// 		'${req.body.staffID}'
	// 		);
	// 		`;
	// 	}

	// 	// Add a Auxiliary
	// 	else if (req.body.role === 'Auxiliary') {
	// 		queryText += `
	// 		INSERT 
	// 		INTO HMS_PMS.Auxiliary
	// 		VALUES (
	// 		'${req.body.staffID}',
	// 		'${req.body.isSpecialiste}'
	// 		);
	// 		`;
	// 	}

	// 	// Add a PersonnelOfficer
	// 	else if (req.body.role === 'PersonnelOfficer') {
	// 		queryText += `
	// 		INSERT 
	// 		INTO HMS_PMS.PersonnelOfficer
	// 		VALUES (
	// 		'${req.body.staffID}'
	// 		);
	// 		`;
	// 	}

	// 	const query = client.query(queryText);

	// 	// After all data is returned, close connection and return results
	// 	query.on('end', () => {
	// 		done();
	// 		return res.json();
	// 	});
	// });
});

module.exports = router
