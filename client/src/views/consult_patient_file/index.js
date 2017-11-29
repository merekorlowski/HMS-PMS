import {inject} from 'aurelia-framework'
import {PatientService} from '../../services/patient'

@inject(PatientService)
export class ConsultPatientFile {
  constructor(patientService) {
      this.patientService = patientService
      this.patientId = ''
      this.patient = null
  }

  consult() {
    this.patientService.consult(this.patientId).then(patient => {
        this.patient = patient
    }).catch(err => {
        //
    })
  }

}
