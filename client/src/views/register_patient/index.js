import {inject} from 'aurelia-framework'
import {PatientService} from '../../services/patient'
import {Patient} from '../../models/patient'

@inject(PatientService)
export class RegisterPatient {
    constructor(patientService) {
        this.patientService = patientService
        this.patient = new Patient()
    }

    register() {
        if (this.patient.validate()) {
            this.patientService.register(this.patient).then(success => {
                // display message
            }).catch(err => {
                // display er
            })
        }
    }

}
