import {ChargeNurse} from './chargeNurse'

export class Division {
    constructor() {
        this.id = ''
        this.name = ''
        this.chargeNurse = new ChargeNurse()
        this.location = ''
        this.numOfBeds = -1
        this.telephoneExtension = ''
    }

    get isComplete() {
        return this.numOfBeds == 0
    }
    
    validate() {
        
    }

}