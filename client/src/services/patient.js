import {inject} from 'aurelia-framework'
import {HttpClient} from 'aurelia-fetch-client'
import {Patient} from '../models/patient'

@inject(HttpClient)
export class PatientService {
    constructor(http) {
        this.http = http
        this.tempPatient = new Patient()
        this.tempPatient.patientID = '1231231'
        this.tempPatient.firstName = 'John'
        this.tempPatient.lastName = 'Doe'
        this.tempPatient.telephone = '1119876543'
        this.tempPatient.externalDoctorID = '4324324'
        this.tempPatient.address.line1 = '123 Nicholas Ave'
        this.tempPatient.address.city = 'Ottawa'
        this.tempPatient.address.postalCode = 'K1N9G3'
        this.tempPatient.maritalStatus = 'Married'
        this.tempPatient.gender = 'Male'
        this.tempPatient.dateOfBirth = '21/02/1996'
        this.tempPatient.nextOfKin.firstName = 'Jane'
        this.tempPatient.nextOfKin.lastName = 'Doe'
        this.tempPatient.nextOfKin.relationshipToPatient = 'Wife'
        this.tempPatient.nextOfKin.telephone = '1111234567'
        this.tempPatient.nextOfKin.address.line1 = '123 Nicholas Ave'
        this.tempPatient.nextOfKin.address.city = 'Ottawa'
        this.tempPatient.nextOfKin.address.postalCode = 'K1N9G3'
    }

    getPatients() {
        return this.http.fetch('/patients').then(response => response.json())
    }

    register(patient) {
        return this.http.fetch('/patient', patient).then(response => response.json())
    }

    consult(patientID) {
        return this.http.fetch(`/patient?patientID=${patientID}`).then(response => response.json())
    }

    admitPatient(patient, admissionInfo) {
        return this.http.fetch('/patient/admit', {
           patient: patient,
           admissionInfo: admissionInfo 
        }).then(response => response.json())
    }

    isAdmitted(patientID) {
        return this.http.fetch(`/patient/room-admission?patientID=${patientID}`).then(response => response.json())
    }

}