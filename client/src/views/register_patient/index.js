import {inject} from 'aurelia-framework'
import {ValidationControllerFactory} from 'aurelia-validation'
import {PatientService} from '../../services/patient'
import {Patient} from '../../models/patient'

@inject(PatientService, ValidationControllerFactory)
export class RegisterPatient {
    constructor(patientService, controller) {
        this.patientService = patientService
        this.controller = controller.createForCurrentScope()
        this.patient = new Patient()
    }

    register() {
        this.controller.validate().then(result => {
            if (result.valid) {
                this.patientService.register(this.patient).then(success => {
                    // display message
                }).catch(err => {
                    // display er
                })
            } else {
                //
            }
        })
    }

}
