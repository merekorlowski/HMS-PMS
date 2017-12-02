import {inject} from 'aurelia-framework'
import {ValidationControllerFactory} from 'aurelia-validation'
import {PatientService} from '../../services/patient'
import {Session} from '../../services/session'

@inject(PatientService, ValidationControllerFactory, Session)
export class ConsultPatientFile {
  constructor(patientService, controller, session) {
      this.patientService = patientService
      this.controller = controller.createForCurrentScope()
      this.session = session
      this.patientId = ''
      this.patient = this.patientService.tempPatient//null
      this.isEditingMode = false
  }

  consult() {
    this.patientService.consult(this.patientId).then(patient => {
        this.patient = patient
    }).catch(err => {
        //
    })
  }

  updateFile() {
    this.isEditingMode = true
  }

  save() {
    this.isEditingMode = false
  }

  isUserDoctor() {
    return this.session.user.type == 'Doctor'
  }

  admitPatient() {
    
  }
}
