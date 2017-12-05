import {inject} from 'aurelia-framework'
import {HttpClient, json} from 'aurelia-fetch-client'
import {Patient} from '../models/patient'

export class PatientService {
    constructor() {
        this.http = new HttpClient().configure(config => {
            config.withBaseUrl('http://localhost:3000');
        })

        this.tempPatient = new Patient({
            patientID: '1231231',
            firstName: 'John',
            lastName: 'Doe',
            phoneNumber: '1119876543',
            externalDoctorID: '4324324',
            line1: '123 Nicholas Ave',
            city: 'Ottawa',
            postalCode: 'K1N9G3',
            maritalStatus: 'Married',
            gender: 'Male',
            dateOfBirth: '21/02/1996',
            nofFirstName: 'Jane',
            nofLastName: 'Doe',
            nofRelationship: 'Wife',
            nofPhoneNumber: '1111234567',
            nofLine1: '123 Nicholas Ave',
            nofCity: 'Ottawa',
            nofPostalCode: 'K1N9G3'
        })
    }

    getPatients() {
        return this.http.fetch('/patients').then(response => response.json())
    }

    register(patient) {
        return this.http.fetch('/patient', {
            method: 'post',
            body: json(patient)
        }).then(response => response.json())
    }

    consult(patientID) {
        return this.http.fetch(`/patient?patientID=${patientID}`).then(response => response.json())
    }

    admitPatient(patient, admissionInfo) {
        return this.http.fetch('/patient/admit', {
            method: 'post',
            body: {
                patient: json(patient),
                admissionInfo: json(admissionInfo)
            }
        }).then(response => response.json())
    }

    isAdmitted(patientID) {
        return this.http.fetch(`/patient/room-admission?patientID=${patientID}`).then(response => response.json())
    }

}