import {Address} from './address'
import {NextOfKin} from './nextOfKin'

export class Patient {
    constructor() {
        this.id = ''
        this.firstName = ''
        this.lastName = ''
        this.address = new Address()
        this.telephone = ''
        this.dateOfBirthString = ''
        this.gender = ''
        this.maritalStatus = ''
        this.externalDoctorId = ''
        this.nextOfKin = new NextOfKin()
    }

    get dateOfBirth() {
        if (!this.dateOfBirthString) {
            return ''
        } else {
            dob = new Date(this.dateOfBirthString)
            if (dob) {
                return dob.toIsoString()
            } else {
                return ''
            }
        }
    }
    
    validate() {
        
    }
}