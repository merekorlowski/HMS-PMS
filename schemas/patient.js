const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
		_id: String,
		firstName: String,
		lastName: String,
		address: {
			line: String,
			city: String,
			postalCode: String
		},
		phoneNumber: String,
		dateOfBirth: String,
		gender: String,
		maritalStatus: String,
		nextOfKin: {
			firstName: String,
			lastName: String,
			relationshipToPatient: String,
			address: {
				line: String,
				city: String,
				postalCode: String
			},
			phoneNumber: String	
		},
		externalDoctorID: String		
})

module.exports = mongoose.model('Patient', patientSchema)
