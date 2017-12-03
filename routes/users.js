const express = require('express')
const router = express.Router()


router.get('/users', (req, res) => {
  //get users from db
  return null
})

// DONE: PAS 
 
router.get('/user', (req, res) => {
  //get user from db

  pg.connect(connectionString, (err, client, done) => {

		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({success: false, data: err});
		}

		//Add a NextOfKin
		let queryText = `
			SELECT * from HMS-PMS.Staff 
			WHERE 
			userID = '${req.body.roomNumber}'
			AND 
			password = '${req.body.roomNumber}';
			`;

		const query = client.query(queryText);

		// After all data is returned, close connection and return results
		query.on('end', () => {
			done();
			return res.json();
		});
	});
  return null
})

module.exports = router
