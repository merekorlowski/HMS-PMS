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
    SELECT Prescription.*, LocalDoctor.fisrtName, LocalDoctor.lastName  
    FROM HMS-PMS.Prescription 
    LEFT NATURAL JOIN HMS-PMS.LocalDoctor 
    WHERE patientID='${user.ID}'
  `);
  query.on('row', row => {
    results.push(row);
  });

  query.on('end', () => {
      done();
      return res.json(results);
    });

  });
	return res.json(results);
});

// update a prescription
router.put('/prescription', (req, res) => {
  let user = req.user

 pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    let queryText = `
      UPDATE 
      HMS-PMS.Prescription
      SET
        unitsByDay = '${req.body.unitsByDay}',
        numOfAdministrationPerDay = '${req.body.numOfAdministrationPerDay}',
        methodOfAdministration = '${req.body.methodOfAdministration}',
        startDate = '${req.body.startDate}',
        finishDate = '${req.body.finishDate}',
        numOfAdministrationPerTime = '${req.body.numOfAdministrationPerTime}',
      WHERE prescriptionID = '${req.body.prescriptionID}'
      ;
    `;
    const query = client.query(queryText);

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json();
    });

  });
});


router.post('/prescription', (req, res) => {

  pg.connect(connectionString, (err, client, done) => {

    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }

    let queryText = `
      INSERT 
      INTO HMS-PMS.Prescription
      (unitsByDay, 
      numOfAdministrationPerDay, 
      methodOfAdministration, 
      startDate, 
      finishDate,
      numOfAdministrationPerTime)
      VALUES (
        '${req.body.unitsByDay}',
        '${req.body.numOfAdministrationPerDay}',
        '${req.body.methodOfAdministration}',
        '${req.body.startDate}',
        '${req.body.finishDate}',
        '${req.body.numOfAdministrationPerTime}'
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
module.exports = router
