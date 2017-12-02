
import {ValidationRules} from 'aurelia-validation'
import {Address} from './address'
import {NextOfKin} from './nextOfKin'

export class Patient {
    constructor() {
        this.id = ''
        this.firstName = ''
        this.lastName = ''
        this.address = new Address()
        this.telephone = ''
        this.dateOfBirth = ''
        this.gender = ''
        this.maritalStatus = ''
        this.externalDoctorId = ''
        this.nextOfKin = new NextOfKin()
    }
}

ValidationRules
    .ensure('id').required()
    .ensure('firstName').required()
    .ensure('lastName').required()
    .ensure('telephone').required()//.matches('/\(\d{3}\)\s\d{3}-\d{4}/')
    .ensure('dateOfBirth').required()//.matches('/\d{4}-\d{2}-\d{2}/')
    .ensure('externalDoctorId').required()
    .on(Patient)
