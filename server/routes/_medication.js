const express = require('express')
const router = express.Router()


//get prescriptions from user
router.get('/prescriptions', (req, res) => {
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
      SELECT * 
      FROM HMS-PMS.Prescription 
        LEFT JOIN 
        HMS-PMS.Patient 
      WHERE Patient.patientID=('%${req.query.query}%')
        OR LOWER(prenom) LIKE LOWER('%${req.query.query}%')
        OR LOWER(role) LIKE LOWER('%${req.query.query}%')
      ORDER BY nom ${req.query.sort}
    `);
	
	return null //precsriptions
})

router.post('/session/logout', (req, res) => {
  //post to db
  return null //logout message
})

module.exports = router
