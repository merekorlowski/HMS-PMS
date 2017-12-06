import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'

import {PatientService} from '../../services/patient'
import {Patient} from '../../models/patient'

@inject(Router, PatientService)
export class Patients {
    constructor(router, patientService) {
        this.router = router
        this.patientService = patientService
        this.patientID = ''
        this.patients = []
        this.patient = null
        this.newPatient = new Patient()
        this.step = 1
        this.getPatients()
        this.isDisplayingRegistrationForm = false
    }

    getPatients() {
        this.patientService.getPatients().then(patients => {
            this.patients = patients
        })
    }

    search() {
        found = false
        for (let patient of this.patients) {
            if (patient.patientID === this.patientID) {
                found = true
                break
            }
        }
        if (found) {
            this.router.navigate(`patient/${this.patientID}`)
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
        if (this.newPatient.isValid()) {
            this.patientService.register(this.newPatient).then(() => {
                this.isDisplayingRegistrationForm = false
                this.patients.push(this.newPatient)
            }).catch(err => {

            })
        }
    }

}
