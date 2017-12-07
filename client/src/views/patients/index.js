import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'

import {PatientService} from '../../services/patient'
import {Patient} from '../../models/patient'

@inject(Router, PatientService)
export class Patients {
    constructor(router, patientService) {
        this.router = router
        this.patientService = patientService
        this._id = ''
        this.patients = []
        this.patient = null
        this.newPatient = new Patient()
        this.isDisplayingRegistrationForm = false
        this.step = 1
        this.getPatients()
    }

    getPatients() {
        this.patientService.getPatients().then(patients => {
            this.patients = patients
        })
    }

    search() {
        this.router.navigate(`patient/${this._id}`)
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
