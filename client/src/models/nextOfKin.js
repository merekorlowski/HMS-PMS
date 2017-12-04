import {Address} from './address'

export class NextOfKin {
    constructor() {
        this.firstName = ''
        this.lastName = ''
        this.relationshipToPatient = ''
        this.address = new Address()
        this.telephone = ''
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

    get isTelephoneValid() {
        let patt = new RegExp('[1-9](([0-9]{9})|([0-9]{10}))');
        return patt.test(this.telephone)
    }

    isValid() {
        return (
            this.isFirstNameValid &&
            this.isLastNameValid &&
            this.isRelationshipToPatientValid &&
            this.isTelephoneValid &&
            this.address.isValid()
        )
    }
}