import {ChargeNurse} from './chargeNurse'

export class Division {
    constructor(data) {
        if (data) {
            Object.assign(this, data)
        } else {
            this.divisionID = ''
            this.divisionName = ''
            this.divisionType = ''
            this.chargeNurseID = ''
            this.location = ''
            this.numOfBeds = -1
            this.numOfOccupiedBeds = 0
            this.phoneExtension = ''
        }
        this.changed = {}
    }

    hasChanged(attribute) {
        this.changed[attribute] = true
    }

    get isComplete() {
        return this.numOfBeds == 0
    }

    get isDivisionIDValid() {
        return this.divisionID != ''
    }

    get isDivisionNameValid() {
        return this.divisionName != ''
    }

    get isDivisionLocationValid() {
        return this.location != ''
    }

    get isnumOfBedsValid() {
        return (this.numOfBeds != '' && this.numOfBeds >= 0)
    }

    get isphoneExtensionValid() {
        let patt = new RegExp('[1-9][0-9]{3}');
        return patt.test(this.phoneExtension)
    }

    isValid() {
        return (
            this.isDivisionIDValid &&
            this.isDivisionNameValid &&
            this.isDivisionLocationValid &&
            this.isnumOfBedsValid &&
            this.isnumOfBedsValid &&
            this.isphoneExtensionValid
        )
    }
}
