import {ChargeNurse} from './chargeNurse'

export class Division {
    constructor() {
        this.divisionID = ''
        this.name = ''
        this.chargeNurse = new ChargeNurse()
        this.location = ''
        this.numOfBeds = -1
        this.numOfOcuppentBeds = -1
        this.telephoneExtension = ''
    }

    get isComplete() {
        return this.numOfBeds == 0
    }

    get isDivisionIDValid() {
        return this.divisionID != ''
    }
}