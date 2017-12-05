import {ChargeNurse} from './chargeNurse'

export class Division {
    constructor(data) {
        if (data) {
            Object.assign(this, data)
        } else {
            this.divisionID = ''
            this.name = ''
            this.chargeNurseID = ''
            this.location = ''
            this.numOfBeds = -1
            this.numOfOcuppentBeds = -1
            this.telephoneExtension = ''
        }
    }

    get isComplete() {
        return this.numOfBeds == 0
    }

    get isDivisionIDValid() {
        return this.divisionID != ''
    }
}