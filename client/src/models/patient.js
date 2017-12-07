import {Address} from './address'
import {NextOfKin} from './nextOfKin'

export class Patient {
    constructor(data) {
        if (data) {
						let address = data.address
						data.address = new Address(address)
						let nextOfKin = data.nextOfKin
						data.nextOfKin = new NextOfKin(nextOfKin)
            Object.assign(this, data)
        } else {
            this._id = ''
            this.firstName = ''
            this.lastName = ''
            this.address = new Address()
            this.phoneNumber = ''
            this.dateOfBirth = ''
            this.gender = 'Male'
            this.maritalStatus = 'Single'
						this.externalDoctorID = ''
						this.nextOfKin = new NextOfKin()
				}
				
				this.isAdmitted = false
        this.changed = {}
    }

    hasChanged(attribute) {
        this.changed[attribute] = true
    }

    get isPatientIDValid() {
        return this._id != ''
    }

    get isFirstNameValid() {
        return this.firstName != ''
    }

    get isLastNameValid() {
        return this.lastName != ''
    }

    get isPhoneNumberValid() {
        let patt = new RegExp('[1-9](([0-9]{9})|([0-9]{10}))');
        return patt.test(this.phoneNumber)
    }

    get isDateOfBirthValid() {
        let patt = new RegExp('^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\\d\\d$');
        return patt.test(this.dateOfBirth)
    }

    get isExternalDoctorIDValid() {
        return this.externalDoctorID != ''
    }

    isValid() {
        return (
            this.isPatientIDValid &&
            this.isFirstNameValid &&
            this.isLastNameValid &&
            this.isPhoneNumberValid &&
            this.isDateOfBirthValid &&
            this.isExternalDoctorIDValid &&
						this.address.isValid() &&
						this.nextOfKin.isValid()
        )
    }

}
