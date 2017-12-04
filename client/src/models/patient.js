import {Address} from './address'
import {NextOfKin} from './nextOfKin'

export class Patient {
    constructor() {
        this.patientID = ''
        this.firstName = ''
        this.lastName = ''
        this.address = new Address()
        this.telephone = ''
        this.dateOfBirth = ''
        this.gender = 'M'
        this.maritalStatus = 'S'
        this.externalDoctorID = ''
        this.nextOfKin = new NextOfKin()
        this.isAdmitted = false
        this.changed = {}
        this.getPrescriptions()
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

    get isTelephoneValid() {
        let patt = new RegExp('[1-9](([0-9]{9})|([0-9]{10}))');
        return patt.test(this.telephone)
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
            this.isTelephoneValid &&
            this.isDateOfBirthValid &&
            this.isExternalDoctorIDValid &&
            this.address.isValid() &&
            this.nextOfKin.isValid()
        )
    }

    getPrescriptions() {

    }

}