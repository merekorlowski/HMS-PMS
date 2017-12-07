import {Address} from './address'

export class NextOfKin {
	constructor(data) {
		if (data) {
			let address = data.address
			data.address = new Address(address)

			Object.assign(this, data)
		} else {
			this.firstName = ''
			this.lastName = ''
			this.relationshipToPatient = ''
			this.phoneNumber = ''
			this.address = new Address()
		}

		this.changed = {}

	}

	hasChanged(attribute) {
		this.changed[attribute] = true
	}

	get isFirstNameValid() {
		return this.firstName != ''
	}

	get isLastNameValid() {
			return this.lastName != ''
	}

	get isRelationshipToPatientValid() {
			return this.relationshipToPatient != ''
	}

	get isPhoneNumberValid() {
			let patt = new RegExp('[1-9](([0-9]{9})|([0-9]{10}))');
			return patt.test(this.phoneNumber)
	}

	isValid() {
		return (
			this.isFirstNameValid &&
			this.isLastNameValid &&
			this.isRelationshipToPatientValid &&
			this.address.isValid() &&
			this.isPhoneNumberValid
		)
	}

}
