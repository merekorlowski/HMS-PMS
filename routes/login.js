const express = require('express')
const router = express.Router()
 
router.get('/login', (req, res) => {

  pg.connect(connectionString, (err, client, done) => {

		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({success: false, data: err});
		}

		//Add a NextOfKin
		const query = client.query(`
			SELECT * from HMS-PMS.Staff 
			WHERE 
			staffID = '${req.body.roomNumber}'
			AND 
			password = '${req.body.roomNumber}';
			`);

		// After all data is returned, close connection and return results
		query.on('end', () => {
			done();
			return res.json();
		});
	});
  return null
})

module.exports = router
