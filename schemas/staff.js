const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
	_id: String,
	firstName: String,
	lastName: String,
	password: String,
	email: String,
	role: String,
	phoneExtension: {
		type: String,
		required: () => {
				return this.role === 'Charge Nurse' ? true : false 
		}
	},
	bipperExtension: {
		type: String,
		required: () => {
				return this.role === 'Charge Nurse' ? true : false 
		}
	}
})

module.exports = mongoose.model('Staff', staffSchema)
