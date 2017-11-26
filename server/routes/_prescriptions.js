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
      SPORTSDB.Employe
      SET
        prenom = '${req.body.prenom}',
        nom = '${req.body.nom}',
        role = '${req.body.role}'
      WHERE idemploye = '${req.body.idemploye}'
      ;
    `;

    if (req.body.role === 'Arbitre') {
      queryText += `
        UPDATE 
        SPORTSDB.ArbitreSport
        SET
          nbrannees = '${req.body.nbrannees}'
        WHERE idemploye = '${req.body.idemploye}' AND '${req.body.idsport}' = '${req.body.idsport}'
        ;
      `;
    } else if (req.body.role === 'Gestionnaire') {
      queryText += `
        UPDATE 
        SPORTSDB.Gestionnaire
        SET
          numtel = '${req.body.numtel}',
          courriel = '${req.body.courriel}'
        WHERE idemploye = '${req.body.idemploye}'
        ;
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


router.post('/prescription', (req, res) => {
  //post to db
  return null //added prescription message
})
module.exports = router
