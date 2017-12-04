import {inject} from 'aurelia-framework'

import {PatientService} from '../../services/patient'
import {Patient} from '../../models/patient'

@inject(PatientService)
export class Patients {
    constructor(patientService) {
        this.patientService = patientService
        this.patientID = ''
        this.patients = []
        this.patient = null
        this.newPatient = new Patient()
        this.isDisplayingRegistrationForm = false
        this.step = 1
        this.getPatients()
    }

    getPatients() {
        //this.patientService.getPatients().then(patients => {
        //    this.patients = patients
        for (let i = 0; i < 20; i++) {
            this.tempPatient = this.patientService.tempPatient
            this.patients.push(this.tempPatient)
        }
        //})
    }

    search() {
        for (let patient of patients) {
            if (patient.patientID === this.patientID) {
                this.patient = patient
                break
            }
        }
    }

    displayRegistrationForm() {
        this.isDisplayingRegistrationForm = true
    }

    hideRegistrationForm() {
        this.isDisplayingRegistrationForm = false
    }

    next() {
        this.step += 1
    }

    prev() {
        this.step -= 1
    }

    register() {
        //this.patientService.register(this.newPatient).then(() => {
            this.isDisplayingRegistrationForm = false
            this.patients.push(this.newPatient)
        //}).catch(err => {

        //})
    }

}