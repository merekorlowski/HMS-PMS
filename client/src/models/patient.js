import {Address} from './address'

export class Patient {
    constructor(data) {
        if (data) {
            Object.assign(this, data)
        } else {
            this.patientID = ''
            this.firstName = ''
            this.lastName = ''
            this.address = new Address()
            this.phoneNumber = ''
            this.dateOfBirth = ''
            this.gender = 'M'
            this.maritalStatus = 'S'
            this.externalDoctorID = ''
            this.nofFirstName = ''
            this.nofLastName = ''
            this.nofRelationship = ''
            this.nofAddress = new Address()
            this.nofPhoneNumber = ''
            this.isAdmitted = false
        }
        this.changed = {}
    }

    hasChanged(attribute) {
        this.changed[attribute] = true
    }

    get isPatientIDValid() {
        return this.patientID != ''
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

    get isNofFirstNameValid() {
        return this.nofFirstName != ''
    }

    get isNofLastNameValid() {
        return this.nofLastName != ''
    }

    get isNofRelationshipValid() {
        return this.nofRelationship != ''
    }

    get isNofPhoneNumberValid() {
        let patt = new RegExp('[1-9](([0-9]{9})|([0-9]{10}))');
        return patt.test(this.nofPhoneNumber)
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
            this.isNofFirstNameValid &&
            this.isNofLastNameValid &&
            this.isNofRelationshipValid &&
            this.nofAddress.isValid() &&
            this.isNofPhoneNumberValid
        )
    }

}
