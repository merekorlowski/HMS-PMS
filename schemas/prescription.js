const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
	patientID: String,
	drugNumber: String,
	drugName: String,
	unitsByDay: Number,
	administrationsPerDay: Number,
	methodOfAdministrations: String,
	startDate: String,
	endDate: String
})

module.exports = mongoose.model('Prescription', prescriptionSchema)
