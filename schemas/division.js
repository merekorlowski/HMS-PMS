const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const divisionSchema = new Schema({
	_id: String,
	divisionName: String,
	chargeNurseID: String,
	location: String,
	numOfBeds: Number,
	numOfOccupiedBeds: Number,
	phoneExtension: String
})

module.exports = mongoose.model('Division', divisionSchema)
