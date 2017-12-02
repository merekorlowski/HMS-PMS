import {inject} from 'aurelia-framework'
import {HttpClient} from 'aurelia-fetch-client'
import {Patient} from '../models/patient'

@inject(HttpClient)
export class PatientService {
    constructor(http) {
        this.http = http
        this.tempPatient = new Patient()
        this.tempPatient.id = '1231231'
        this.tempPatient.firstName = 'John'
        this.tempPatient.lastName = 'Doe'
        this.tempPatient.telephone = '(111) 987-6543'
        this.tempPatient.externalDoctorId = '4324324'
        this.tempPatient.address.line = '123 Nicholas Ave'
        this.tempPatient.address.city = 'Ottawa'
        this.tempPatient.address.postalCode = 'K1N9G3'
        this.tempPatient.maritalStatus = 'Married'
        this.tempPatient.gender = 'Male'
        this.tempPatient.dateOfBirth = '1982-02-21'
        this.tempPatient.nextOfKin.firstName = 'Jane'
        this.tempPatient.nextOfKin.lastName = 'Doe'
        this.tempPatient.nextOfKin.relationshipToPatient = 'Wife'
        this.tempPatient.nextOfKin.telephone = '(111) 123-4567'
        this.tempPatient.nextOfKin.address.line = '123 Nicholas Ave'
        this.tempPatient.nextOfKin.address.city = 'Ottawa'
        this.tempPatient.nextOfKin.address.postalCode = 'K1N9G3'
    }

    register(patient) {
        return this.http.fetch('/patient', patient).then(response => response.json())
    }

    consult(patientId) {
        return this.http.fetch(`/patient?id=${patientId}`).then(response => response.json())
    }

    admitPatient(patient, admissionInfo) {
        return this.http.fetch('/patient/admit', {
           patient: patient,
           admissionInfo: admissionInfo 
        })
    }
}