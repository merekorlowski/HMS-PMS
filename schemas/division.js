const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const divisionSchema = new Schema({
	divisionID: String,
	divisionName: String,
	chargeNurseID: String,
	location: String,
	numOfBeds: Number,
	phoneNumberExtension: String
})

module.exports = mongoose.model('Division', divisionSchema)
